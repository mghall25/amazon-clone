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
            price={21.99}
            rating={5}
          />
          <Product
            // id=123456789"
            title="Terra Cotta Pots with Saucers - 6 Pack"
            image="https://m.media-amazon.com/images/I/51DqbB09RjL._AC_UL320_.jpg"
            price={25.99}
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            // id=123456789"
            title="6 inch Terracotta Shallow Planters with Saucer"
            image="https://m.media-amazon.com/images/I/51r+zlT58-L._AC_UL320_.jpg"
            price={23.99}
            rating={3}
          />
          <Product
            // id=123456789"
            title="Fire TV Stick 4K Streaming Device With Alexa Built In"
            image="https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_UL160_SR160,160_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            // id=123456789"
            title="Carhartt Men's Acrylic Hat"
            image="https://images-na.ssl-images-amazon.com/images/I/91DYh3DwiOL._AC_UL320_SR304,320_.jpg"
            price={16.99}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            // id=123456789"
            title="iRobot Roomba 675 Robot Vaccuum"
            image="https://images-na.ssl-images-amazon.com/images/I/816uZdNKYhL._AC_UL200_SR200,200_.jpg"
            price={299.0}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
