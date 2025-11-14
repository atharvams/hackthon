import React from 'react';


const ReviewCard = ({
  title = "Example Movie Title",
  rating = 8,
  reviewText = "This is a sample review text that explains how the component looks when rendered alone.",
  lastUpdated = "YYYY-MM-DD"
}) => {
  return (
    
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="card-title mb-0">{title}</h5>
            <span className="badge bg-primary p-2">{rating}/10</span>
          </div>
          <p className="card-text">{reviewText}</p>
          <p className="card-text">
            <small className="text-muted">Last updated: {lastUpdated}</small>
          </p>
          <div className="mt-3">
            <button className="btn btn-primary btn-sm me-2">Edit</button>
            <button className="btn btn-success btn-sm me-2">Share</button>
            <button className="btn btn-danger btn-sm">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
