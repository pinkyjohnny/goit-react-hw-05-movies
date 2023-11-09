import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviewsById(movieId).then(data => setReviews(data));
  }, [movieId]);

  return (
    <div>
      {reviews.length ? (
        <ul>
          {' '}
          {reviews?.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
              <p style={{ color: 'rgb(197, 9, 197)' }}>
                {`(${
                  review.created_at ? review.created_at.slice(0, 10) : 'unknown'
                })`}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <h2>There are no reviews yet</h2>
      )}
    </div>
  );
};

export default Reviews;
