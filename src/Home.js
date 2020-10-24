import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home background"
        />
        <div className="home__row">
          <Product
            id="123456789"
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            // id=123456789"
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={23.99}
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            // id=123456789"
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={19.99}
            rating={3}
          />
          <Product
            // id=123456789"
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={2.99}
            rating={1}
          />
          <Product
            // id=123456789"
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={9.99}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            // id=123456789"
            title="The Lean Startup"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={2.99}
            rating={6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
