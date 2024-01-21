import React from 'react';
import Image from 'next/image';

import heroslider4 from "../public/images/tribal-dance-900x571.jpg";
import heroslider3 from "../public/images/industries1.jpg";
import heroslider2 from "../public/images/rock-carvings.jpg";
import heroslider1 from "../public/images/dalma.jpg";

// import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

const HeroSlider = () => {
  return (
    <section id="hero-slider" className="hero-slider">
      <div className="container-md">
        <div className="row">
          <div className="col-12">
            <div
              className="swiffy-slider slider-item-reveal slider-nav-round slider-item-ratio slider-item-ratio-21x9"
              id="slider1"
            >
              <ul className="slider-container">
                <li className="slide-visible">
                  <div className="card rounded-0 h-100 text-white">
                    <Image
                      src={heroslider1}
                      className="card-img h-100"
                      alt="..."
                    />
                    <div
                      className="hero-header-margin-top card-img-overlay d-flex align-items-start align-items-md-center justify-content-center flex-column"
                    >
                      <h2 className="card-title h1 d-block d-md-inline-block">
                        <a href={`/blog/places-of-interest-in-jharkhand/`}
                        ><span>Places of interest in Jharkhand</span></a>
                      </h2>
                      <p className="card-text lead col-md-8 col-lg-6">
                        Jharkhand is covered with beautiful views, greenery,
                        landscape, with great colors around and is famous for its
                        culture.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="slide-visible">
                  <div className="card rounded-0 h-100 text-white">
                    <Image
                      src={heroslider2}
                      className="card-img h-100"
                      alt="..."
                    />
                    <div
                      className="hero-header-margin-top card-img-overlay d-flex align-items-start align-items-md-center justify-content-center flex-column"
                    >
                      <h2 className="card-title h1 d-block d-md-inline-block">
                        <a href={`/blog/ancient-history-of-jharkhand/`}
                        ><span>Ancient History of Jharkhand</span
                        ></a
                        >
                      </h2>
                      <p className="card-text lead col-md-8 col-lg-6">
                        The region have been inhabited since the Stone Age. Copper
                        tools from the Chalcolithic period have been discovered.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="slide-visible">
                  <div className="card rounded-0 h-100 text-white">
                    <Image
                      src={heroslider3}
                      className="card-img h-100"
                      alt="..."
                    />
                    <div
                      className="hero-header-margin-top card-img-overlay d-flex align-items-start align-items-md-center justify-content-center flex-column"
                    >
                      <h2 className="card-title h1 d-block d-md-inline-block">
                        <a href={`/blog/major-industries-of-jharkhand/`}
                        ><span>Major Industries of Jharkhand</span
                        ></a
                        >
                      </h2>
                      <p className="card-text lead col-md-8 col-lg-6">
                        The new state of Jharkhand, widely acclaimed as the region
                        of future, has enormous potentialities for
                        industrialization. With its large deposits of minerals, it
                        provides a solid launching pad for all kinds of industries.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="slide-visible">
                  <div className="card rounded-0 h-100 text-white">
                    <Image
                      src={heroslider4}
                      className="card-img h-100"
                      alt="..." />
                    <div
                      className="hero-header-margin-top card-img-overlay d-flex align-items-start align-items-md-center justify-content-center flex-column"
                    >
                      <h2 className="card-title h1 d-block d-md-inline-block">
                        <a href={`/blog/tribals-of-jharkhand/`}
                        ><span>Tribes of Jharkhand</span></a
                        >
                      </h2>
                      <p className="card-text lead col-md-8 col-lg-6">
                        <span>Jharkhand has around 32 Tribal Groups, major among them
                          being Santhal, Munda, Oraon and Ho. Eight out of the
                          thirty-two tribes of Jharkhand fall under Primitive Tribal
                          Group (PTG).
                        </span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              <button type="button" className="slider-nav" aria-label="Go left"
              ></button>
              <button
                type="button"
                className="slider-nav slider-nav-next"
                aria-label="Go left"></button>

              <div
                className="slider-indicators slider-indicators-square d-none d-md-flex"
              >
                <button className="" aria-label="Go to slide"></button>
                <button aria-label="Go to slide" className=""></button>
                <button aria-label="Go to slide" className=""></button>
                <button aria-label="Go to slide" className="active"></button>
              </div>

              <div
                className="slider-indicators slider-indicators-sm slider-indicators-dark slider-indicators-round d-md-none slider-indicators-highlight"
              >
                <button className="" aria-label="Go to slide"></button>
                <button aria-label="Go to slide" className=""></button>
                <button aria-label="Go to slide" className=""></button>
                <button aria-label="Go to slide" className="active"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;