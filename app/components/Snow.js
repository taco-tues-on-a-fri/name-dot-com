import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 100vh;
  width: 100vw;
`;

const animateFlakes = keyframes`
  from { transform: translateY(-2000px); }
  to { transform: translateY(0px); }
`;

const random = fn => Math.floor(Math.random(fn) * fn); // add personal randomizer here
const multipleBoxShadow = length => {
  const maximumScreenSize = 2560;
  var value = `${random(maximumScreenSize)}px ${random(
    maximumScreenSize
  )}px #FFF`;
  for (var i in Array.from({ length })) {
    value += `, ${random(maximumScreenSize)}px ${random(
      maximumScreenSize
    )}px #FFF`;
  }
  return value;
};

let snowflakes = (h, w, animationSpeed, shadow) => styled.div`
  width: ${w}px;
  height: ${h}px;
  background: transparent;
  box-shadow: ${multipleBoxShadow(shadow)};
  animation: ${animateFlakes} ${animationSpeed}s linear infinite;
  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: ${w}px;
    height: ${h}px;
    box-shadow: ${multipleBoxShadow(shadow)};
  }
`;

const SmallFlakes = snowflakes(1, 1, 150, 700);
const MediumFlakes = snowflakes(2, 2, 100, 200);
const BigFlakes = snowflakes(3, 5, 25, 100);

export default function Snowflakes({ children, ...props }) {
  return (
    <Container {...props}>
      {children}
      <SmallFlakes />
      <MediumFlakes />
      <BigFlakes />
    </Container>
  );
}
