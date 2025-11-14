import ReviewCard from "../review-card/ReviewCard";
const AllReviews = () => {
    // Hardcoded data based on the image provided
    const reviewsData = [
        {
            id: 1,
            title: "Titanic",
            rating: 9,
            reviewer: "John Doe",
            reviewText: "An emotionally charged masterpiece. Beautiful cinematography!",
            lastUpdated: "2023-05-15",
        },
        {
            id: 2,
            title: "Avatar",
            rating: 8,
            reviewer: "Jane Smith",
            reviewText: "Groundbreaking visuals but the story is predictable.",
            lastUpdated: "2023-04-22",
        },
        {
            id: 3,
            title: "Frozen",
            rating: 7,
            reviewer: "Mike Johnson",
            reviewText: "Great animation and songs, but targeted more towards kids.",
            lastUpdated: "2023-03-10",
        },
    ];

    return (
        // Main container using Bootstrap grid/utilities for layout
        <div className="container mt-5" style={{ maxWidth: '700px' }}>
            <h1 className="mb-4">All Reviews</h1>
            <div>
                {/* Map over the data array to render review cards */}
                {reviewsData.map(review => (
                    <ReviewCard
                        key={review.id}
                        title={review.title}
                        rating={review.rating}
                        reviewer={review.reviewer}
                        reviewText={review.reviewText}
                        lastUpdated={review.lastUpdated}
                    />
                ))}
            </div>
        </div>
    );
};
export default AllReviews;