import React from 'react';

const DeleteReview= () => {
    return (
        // Container for better standalone visibility
        <div className="container mt-5" style={{ maxWidth: '500px' }}>
            {/* Main card/modal structure */}
            <div className="card">
                {/* Header section with red background */}
                <div className="card-header bg-danger text-white">
                    <h5 className="mb-0">Delete Review</h5>
                </div>
                {/* Main body of the card */}
                <div className="card-body">
                    {/* Review summary section */}
                    <div className="mb-3">
                        <h6 className="card-subtitle mb-1 text-muted">Review for: **Titanic** <span className="badge bg-primary">9/10</span></h6>
                        <p className="card-text">An emotionally charged masterpiece. Beautiful cinematography!</p>
                    </div>

                    {/* Alert message for confirmation */}
                    <div className="alert alert-danger" role="alert">
                        <h4 className="alert-heading">Are you sure you want to delete this review?</h4>
                        <p className="mb-0">This action cannot be undone. Any shares of this review will also be removed.</p>
                    </div>

                    {/* Action buttons */}
                    <div className="d-flex justify-content-between mt-4">
                        <button type="button" className="btn btn-secondary">Cancel</button>
                        <button type="button" className="btn btn-danger">Confirm Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteReview;
