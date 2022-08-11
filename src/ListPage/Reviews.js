import React from 'react';
import './Reviews.css';
import { useParams } from 'react-router-dom';
import rentals from '../rentals.js';
import StarIcon from '@mui/icons-material/Star';


function Reviews() {
  const { slug } = useParams();
  const room = rentals[slug];
  const { title, rating, location, num_reviews } = room;

  return (
    <div className="reviews-div">
          <div className="reviews-header">
            <StarIcon className="searchResult-star" />
            <h1 className="review-title">{rating} · </h1>
            <h1 className="review-title"> {num_reviews} reviews</h1>
          </div>
      <div className="reviews">
        <div className="review">
          <div className="rev-header">
            <div className="rev-left">
              <img
                className="rev-img"
                src="https://a0.muscache.com/im/pictures/user/82d8a104-0cfb-4616-9352-dff5c534ba83.jpg?im_w=240"
              />
            </div>
            <div className="rev-right">
              <h1 className="rev-aut">Ame</h1>
              <p className="rev-dat">June 2021 · Last minute trip</p>
            </div>
          </div>
          <div className="rev-desc-div">
            <p className="rev-desc">
              Beautiful place and beautiful host. I had a great stay at
              Michelle’s. The room was clean and cool, stocked with a fridge
              with water and a microwave, and a tv with channels and stream
              services.
            </p>
          </div>
        </div>
        <div className="review">
          <div className="rev-header">
            <div className="rev-left">
              <img
                className="rev-img"
                src="https://a0.muscache.com/im/pictures/user/0e03c096-6722-4d47-a09d-149eeafa6ad1.jpg?im_w=240"
              />
            </div>
            <div className="rev-right">
              <h1 className="rev-aut">Tae Yun</h1>
              <p className="rev-dat">June 2021</p>
            </div>
          </div>
          <div className="rev-desc-div">
            <p className="rev-desc">
              The room is gorgeous and just like the photos. The bed is super
              comfy, theres lots of snacks, and a tv (really small though) with
              Netflix!
            </p>
          </div>
        </div>
        <div className="review">
          <div className="rev-header">
            <div className="rev-left">
              <img
                className="rev-img"
                src="https://a0.muscache.com/im/pictures/user/e0a07d59-4e46-4808-84ce-f6543da260ab.jpg?im_w=240"
              />
            </div>
            <div className="rev-right">
              <h1 className="rev-aut">Chris</h1>
              <p className="rev-dat">June 2021</p>
            </div>
          </div>
          <div className="rev-desc-div">
            <p className="rev-desc">Cute spot</p>
          </div>
        </div>
        <div className="review">
          <div className="rev-header">
            <div className="rev-left">
              <img
                className="rev-img"
                src="https://a0.muscache.com/im/pictures/user/4575d502-12ec-44b2-b1e9-5714892ee594.jpg?im_w=240"
              />
            </div>
            <div className="rev-right">
              <h1 className="rev-aut">Erik</h1>
              <p className="rev-dat">June 2021 · Last minute trip</p>
            </div>
          </div>
          <div className="rev-desc-div">
            <p className="rev-desc">
              My girlfriend and I loved this room. Check-in and check-out were
              very easy and self-explanatory. and the house was also very easy
              to find from the nearby metro station.
            </p>
          </div>
        </div>
        <div className="review">
          <div className="rev-header">
            <div className="rev-left">
              <img
                className="rev-img"
                src="https://a0.muscache.com/im/pictures/user/db0bc25f-8383-4910-9722-b9ab1cfcdad3.jpg?im_w=240"
              />
            </div>
            <div className="rev-right">
              <h1 className="rev-aut">Zoe</h1>
              <p className="rev-dat">June 2021 · Last minute trip</p>
            </div>
          </div>
          <div className="rev-desc-div">
            <p className="rev-desc">
              Clean and comfy room in a third-floor walk-up in beautiful Crown
              Heights, full of character. Bed isn’t huge or overly comfortable,
              but it works!
            </p>
          </div>
        </div>
        <div className="review">
          <div className="rev-header">
            <div className="rev-left">
              <img
                className="rev-img"
                src="https://a0.muscache.com/im/pictures/user/2c638044-752a-4410-9bf8-7c7c11c2fd92.jpg?im_w=240"
              />
            </div>
            <div className="rev-right">
              <h1 className="rev-aut">Mali</h1>
              <p className="rev-dat">June 2021</p>
            </div>
          </div>
          <div className="rev-desc-div">
            <p className="rev-desc">
              Michelle’s instructions were clear and it was easy to check in.
              The shared bathroom was incredibly clean and so was our room.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
