import React from 'react'

const EditReview = () => {
    return (
        <div className='w-50 mx-auto'>
            <h1 className='my-4'>Edit Review for "Add movie here"</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="ratingInput" className="form-label">Rating (1-10)</label>
                    <input
                        type="number"
                        className="form-control"
                        id="ratingInput"
                        placeholder="Rating (1-10)"
                        defaultValue={9}
                        min={1}
                        max={10}
                        required
                    />
                </div>

                
                <div className="mb-4">
                    <label htmlFor="reviewTextarea" className="form-label">Your Review</label>
                    <textarea
                        className="form-control"
                        id="reviewTextarea"
                        rows={4} 
                        defaultValue="An emotionally charged masterpiece. Beautiful cinematography!"
                        required
                    ></textarea>
                </div>

                
                <button type="submit" className="btn btn-success me-2">Update Review</button>
                <button type="button" className="btn btn-danger">Cancel</button>

            </form>
        </div>
    )
}

export default EditReview
