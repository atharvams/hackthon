import React from 'react';

const ReviewCardReadOnly =({ title, rating, reviewedBy, reviewText, lastUpdated }) => {
    return (
        
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title mb-0">{title}</h5>
                    
                    <span className="badge bg-primary p-2">{rating}/10</span>
                </div>
                <p className="card-text">Reviewed by: {reviewedBy}</p>
                <p className="card-text">{reviewText}</p>
                <p className="card-text">
                    <small className="text-muted">Last updated: {lastUpdated}</small>
                </p>
            </div>
        </div>
    );
};

export default ReviewCardReadOnly;
