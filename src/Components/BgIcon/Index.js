import React from 'react';
import "./styles.scss";
import styled from "styled-components";


const Img = styled.img`
  top: ${(p) => (p.top ? p.top + "%" : "unset")};
  right: ${(p) => (p.right ? p.right + "px" : "unset")};
  bottom: ${(p) => (p.bottom ? p.bottom + "%" : "unset")};
  left: ${(p) => (p.left ? p.left + "px" : "unset")};
  z-index: ${(p) => (p.zIndex ? p.zIndex : -1)};
  width: ${(p) => p.width}rem;
  animation-name: ${(p) => p.type};
  animation-duration: ${(p) => p.duration}s;
  animation-delay: ${(p) => p.delay && p.delay + "s"};
`;


const BgIcon = (props) => {
    const {
        src,
        width,
        top,
        right,
        bottom,
        left,
        type,
        duration,
        delay,
        zIndex,
      } = props;
  return (
    <Img
       src={src}
       width={width}
       top={top}
       right={right}
       bottom={bottom}
       left={left}
       duration={duration}
       delay={delay}
       type={type}
       zIndex={zIndex}
       className="bg-icon"
       alt="Background icon"
    >
    </Img>
  )
}

export default BgIcon