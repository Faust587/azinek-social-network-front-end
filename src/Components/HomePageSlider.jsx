import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const hiddenImage = {
  position: 'absolute',
  height: '427px',
  width: '240px',
  transition: '1.5s',
  opacity: '0',
};
const visibleImage = {
  position: 'absolute',
  height: '427px',
  width: '240px',
  transition: '1.5s',
};

const HomePageSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  function createSliderComponents() {
    const componentsArray = [];
    for (let i = 0; i < 4; i += 1) {
      if (i === sliderIndex) {
        componentsArray[i] = <img alt="social network" src={`/Resources/slider/screenshot${i}.jpg`} style={visibleImage} />;
      } else {
        componentsArray[i] = <img alt="social network" src={`/Resources/slider/screenshot${i}.jpg`} style={hiddenImage} />;
      }
    }
    return componentsArray;
  }

  const [sliderComponents, setSliderComponents] = useState([]);

  useEffect(() => {
    if (sliderComponents.length === 0) setSliderComponents(createSliderComponents());
    const interval = setInterval(() => {
      if (sliderIndex === 3) {
        setSliderIndex(0);
      } else {
        setSliderIndex(sliderIndex + 1);
      }
      setSliderComponents(createSliderComponents());
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [sliderIndex, sliderComponents]);
  return (
    <Slider>
      <SliderWrapper>
        { sliderComponents }
      </SliderWrapper>
    </Slider>
  );
};

const Slider = styled.div`
  flex-basis: 454px;
  height: 618px; 
  background-image: url("/Resources/slider/mainPhoto.png");
  background-size: 454px 618px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const SliderWrapper = styled.div`
  margin: 99px 0 0 151px;
`;

export default HomePageSlider;
