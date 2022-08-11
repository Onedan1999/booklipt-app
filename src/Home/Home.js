import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Banner from './Banner.js';
import Card from './Card.js';
import Feature from './Feature.js';
import rentals from '../rentals.js';
import BlogPosts from '../blog.js';

function Home2() {
  console.log(rentals);

  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Feature
          src="https://images.unsplash.com/photo-1586543354240-2187898bb2e8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Feature
          src="https://images.unsplash.com/photo-1604004218771-05c55db4f9f4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Feature
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="rent-title">
        <h1> Rentals</h1>
      </div>
      <div className="home__section">
        {Object.entries(rentals).map(([slug, { title, img1, price }]) => (
          <Link className="a-href" to={`/room/${slug}`}>
            <Card  src={img1} title={title} price={price} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home2;