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
      <ul>
        {' '}
        {reviews?.map(review => (
          <li key={review.id}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
            <p>
              {`(${
                review.created_at ? review.created_at.slice(0, 10) : 'unknown'
              })`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
