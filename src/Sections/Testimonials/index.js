import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Few good words about us!</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="It's rare to find a backend developer like ShukaZuby. Her ability to seamlessly integrate different components, optimize API performance, and troubleshoot issues has been instrumental in the success of our projects."
            name="Joe"
            image="avatar-1"
          />

          <Card
            text="We brought ShukaZuby on board for a critical backend project, and her dedication to writing clean, efficient code and solving complex problems exceeded our expectations. Her work has greatly improved the reliability and speed of our applications."
                name="Hammed"
            image="avatar-2"
          />

          <Card
            text="Working with ShukaZuby has been a game-changer for our team. Her ability to design and implement scalable backend architectures has not only enhanced our current projects but also set a strong foundation for future growth."
                name="Ann"
            image="avatar-3"
          />

          <Card
            text="Our backend development significantly improved with ShukaZuby. Her expertise in optimizing database performance and implementing robust server-side solutions has made a noticeable impact on our overall system efficiency."
                name="Brain"
            image="avatar-4"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
