import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../data/siteData';

interface ReviewListProps {
  limit?: number;
}

export const ReviewList: React.FC<ReviewListProps> = ({ limit }) => {
  const displayedReviews = limit ? REVIEWS.slice(0, limit) : REVIEWS;

  return (
    <div className="reviews-grid">
      {displayedReviews.map((review) => (
        <article key={review.name} className="review-card">
          <div>
            <div className="stars" aria-label="5 out of 5 stars">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={15} fill="currentColor" />
              ))}
            </div>
            <p>“{review.text}”</p>
          </div>
          <footer>
            <b>{review.name}</b>
            <span>{review.date}</span>
          </footer>
        </article>
      ))}
    </div>
  );
};
