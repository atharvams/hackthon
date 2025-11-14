import express from "express";
import {
  validateLoginCred,
  validateRegistration,
} from "../util/validationUtil.js";
import connection from "../db/dbUtil.js";
import jwt from "jsonwebtoken";
import { envConfig } from "../util/env.config.js";
import bcrypt from "bcrypt";

const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //validation (joi)
  const validationErrors = validateLoginCred(req.body);
  if (validationErrors) {
    return res.status(400).json(validationErrors);
  }

  const doesUserExistsQuery =
    "select user_id, email, first_name, last_name, password from users where email = ?;";

  try {
    const [result] = await connection.execute(doesUserExistsQuery, [email]);

    if (result.length > 0) {
      const isMatch = await bcrypt.compare(password, result[0].password);
      if (isMatch) {
        const jwtToken = jwt.sign(
          {
            user_id: result[0].user_id,
            email: result[0].email,
            firstName: result[0].firstName,
            lastName: result[0].lastName,
          },
          envConfig.JWT_SECRET
        );
        res
          .send({
            message: "Success!",
            token: jwtToken,
          })
          .status(200);
      } else {
        res
          .send({
            message: "Invalid password!",
          })
          .status(200);
      }
    } else {
      res
        .send({
          message: "User doesn't exist!",
        })
        .status(200);
    }
  } catch (err) {
    console.log(err);
    res
      .send({
        message: "Error While login!",
      })
      .status(500);
  }
});

authRouter.post("/register", async (req, res) => {
  const { firstName, lastName, email, mobileNo, password, dateOfBirth } =
    req.body;

  //validation (joi)
  const validationErrors = validateRegistration(req.body);
  if (validationErrors) {
    return res.status(400).json(validationErrors);
  }

  //save user in db
  //check if user exits
  const doesUserExistsQuery = "select email from users where email = ?;";

  try {
    const [result] = await connection.execute(doesUserExistsQuery, [email]);

    if (result.length > 0) {
      res
        .send({
          message: "User already exists! Please login!",
        })
        .status(200);
    } else {
      // otherwise save to db
      const saveUserQuery =
        "insert into users (first_name, last_name, email, birth, password, mobile) values (?, ?, ?, ?, ?, ?)";
      const hash = await bcrypt.hash(password, 10);

      const [resultForNewUserRegistration] = await connection.execute(
        saveUserQuery,
        [firstName, lastName, email, dateOfBirth, hash, mobileNo]
      );

      console.log(resultForNewUserRegistration.affectedRows);
      if (resultForNewUserRegistration.affectedRows > 0) {
        res
          .send({
            message: "User saved !",
            result,
          })
          .status(200);
      }
    }
  } catch (err) {
    console.log(err);
    res
      .sendStatus(500)
      .send({
        message: "Error While registring!",
      })
      .status(500);
  }
});

export default authRouter;
