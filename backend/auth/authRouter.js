import express from "express";
import { validateRegistration } from "../util/validationUtil.js";
import connection from "../db/dbUtil.js";
const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.send("auth");
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

      const [resultForNewUserRegistration, fields] = await connection.execute(
        saveUserQuery,
        [firstName, lastName, email, dateOfBirth, password, mobileNo]
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
