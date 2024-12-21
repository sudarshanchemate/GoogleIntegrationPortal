import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch reviews from the backend
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/reviews");
        setReviews(response.data.reviews || []); // Assume the response contains a "reviews" array
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <div>Loading reviews...</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      {reviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.reviewer}:</strong> {review.comment} ({review.rating}⭐)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DashboardPage;
