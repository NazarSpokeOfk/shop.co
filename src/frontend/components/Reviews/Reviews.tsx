import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Samantha D.",
      rating: 5,
      date: "August 14, 2023",
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
    },
    {
      id: 2,
      name: "Ethan R.",
      rating: 5,
      date: "August 16, 2023",
      text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
    },
    {
      id: 3,
      name: "Liam K.",
      rating: 5,
      date: "August 18, 2023",
      text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
    },
    {
      id: 4,
      name: "Alex M.",
      rating: 5,
      date: "August 15, 2023",
      text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
    },
    {
      id: 5,
      name: "Olivia P.",
      rating: 5,
      date: "August 17, 2023",
      text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
    },
    {
      id: 6,
      name: "Ava H.",
      rating: 5,
      date: "August 19, 2023",
      text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
    }
  ];

  const renderStars = (count: number) => {
    return '★'.repeat(count);
  };

  return (
    <section className="reviews">
      <div className="reviews-container">
        <div className="reviews-header">
          <div className="tabs">
            <button className="tab active">Product Details</button>
            <button className="tab">All Reviews (45)</button>
          </div>
        </div>

        <div className="reviews-content">
          <div className="reviews-main">
            <div className="reviews-list">
              {reviews.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <div className="review-rating">
                      <span className="stars">{renderStars(review.rating)}</span>
                    </div>
                    <div className="review-author">
                      <span className="author-name">{review.name}</span>
                      <span className="author-dot">●</span>
                    </div>
                  </div>
                  <p className="review-text">{review.text}</p>
                  <div className="review-date">Posted on {review.date}</div>
                </div>
              ))}
            </div>
            
            <button className="load-more-btn">
              Load More Reviews
            </button>
          </div>

          <div className="reviews-sidebar">
            <div className="rating-summary">
              <h3 className="sidebar-title">Rating & Reviews</h3>
              <div className="sort-options">
                <select className="sort-select">
                  <option>Latest</option>
                  <option>Oldest</option>
                  <option>Highest Rating</option>
                  <option>Lowest Rating</option>
                </select>
              </div>
              <button className="write-review-btn">
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;