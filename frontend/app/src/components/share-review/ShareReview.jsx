import React from 'react';

const ShareReview = () => {
    return (
        
        <div className='container mt-5' style={{ maxWidth: '600px' }}>
            <h2 className='mb-4'>Share Review</h2>

           
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">
                        Review to Share: **Titanic** <span className="badge bg-primary">9/10</span>
                    </h5>
                    <p className="card-text">
                        An emotionally charged masterpiece. Beautiful cinematography!
                    </p>
                </div>
            </div>

        
            <form>
                <div className="mb-2">
                    <label htmlFor="userSelectList" className="form-label">
                        Select Users to Share With
                    </label>
                    <select
                        id="userSelectList"
                        className="form-select"
                       
                        multiple
                       
                        style={{ height: '150px' }}
                    >
                        
                        <option value="abc" >abc (abc@example.com)</option>
                        <option value="pqr" > pqr(pqr@example.com)</option>
                        <option value="fgh">fgh (fgh@example.com)</option>
                        <option value="ijk" >ijk (ijk@example.com)</option>
                    </select>
                </div>
               
                <small className="form-text text-muted mb-4 d-block">
                    Hold Ctrl/Cmd to select multiple users
                </small>

                
                <div className="mt-4">
                    <button type="submit" className="btn btn-primary me-2">
                        Share Review
                    </button>
                    <button type="button" className="btn btn-secondary">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ShareReview;
