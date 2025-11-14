import React from 'react'
import ReviewCard from '../review-card/ReviewCard'
const MyReviews = () => {
 const reviewsData = [
        {
            id: 1,
            title: "Titanic",
            rating: 9,
            reviewText: "An emotionally charged masterpiece. Beautiful cinematography!",
            lastUpdated: "2023-05-15",
        },
        {
            id: 2,
            title: "Avatar",
            rating: 8,
            reviewText: "Groundbreaking visuals but the story is predictable.",
            lastUpdated: "2023-04-22",
        },
        {
            id: 3,
            title: "Frozen",
            rating: 7,
            reviewText: "Great animation and songs, but targeted more towards kids.",
            lastUpdated: "2023-03-10",
        },
    ];

    return (
        <div className="container mt-5" style={{ maxWidth: '600px' }}>
            <h1 className="mb-4">My Reviews</h1>
            <div>
                {reviewsData.map(review => (
                    <ReviewCard
                        key={review.id}
                        title={review.title}
                        rating={review.rating}
                        reviewText={review.reviewText}
                        lastUpdated={review.lastUpdated}
                    />
                ))}
            </div>
        </div>
    );
}

export default MyReviews
