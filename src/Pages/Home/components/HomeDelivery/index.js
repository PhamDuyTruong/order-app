import React, {useEffect, useRef} from 'react';
import "./styles.scss";
import gsap from "gsap";
import { Container } from "@material-ui/core";
import CommonButton from '../../../../Components/CommonButton';
import HandleImage from '../../../../Components/Banner/HandleImage';

import BigDeliverySvg from "../../../../assets/images/big-delivery.svg";
import SmallDeliverySvg from "../../../../assets/images/small-delivery.svg";

import "../../../../assets/styles/_typography.scss";

const HomeDelivery = () => {
  let containerRef = useRef(null);
  let captionRef = useRef(null);
  let headingRef = useRef(null);
  let descRef = useRef(null);
  let contactRef = useRef(null);
  let thumbRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef,
        start: "80% bottom",
      },
    });

    tl.from(captionRef, { x: -20, opacity: 0, duration: 0.8 }, "-=0.2")
      .from(headingRef, { x: 20, opacity: 0, duration: 0.8 }, "-=0.2")
      .from(descRef, { y: 20, opacity: 0, duration: 0.8 }, "-=0.2")
      .from(contactRef, { y: 15, opacity: 0, duration: 0.65 }, "+=0.3")
      .from(thumbRef, { x: 50, opacity: 0, duration: 0.8 }, "-=1.2");
  }, []);

  return (
    <section ref={(el) => containerRef = el} className="home-delivery">
        <Container>
           <div className='home-delivery__container'>
              <div className='home-delivery__col'>
                  <div ref={(el) => captionRef = el} className="primary-yellow-text">
                      Delivery
                  </div>
                  <h2 ref={(el) => (headingRef = el)} className="primary-heading-text">
                      Moments of Deliveried <strong>On right time</strong>
                  </h2>
                  <p ref={(el) => descRef = el} className="home-delivery__description">
                        DTFood is a restaurant is located at a corner of a busy street. With two apartment blocks along with famous commercial centers
                  </p>
                  <div ref={(el) => contactRef = el} className="home-delivery__contact">
                    <img
                     src={HandleImage(SmallDeliverySvg)}
                    className="home-delivery__contact-img"
                    alt="Delivery"
                    ></img>
                     <div className='home-delivery__contact-col'>
                        <div className='home-delivery__contact-title'>
                            Delivery Order Now
                        </div>
                        <div className='home-delivery__contact-phone'>
                          <strong>0123456789</strong>
                        </div>
                     </div>
                     <CommonButton subclass="red" page="shop">Order Now</CommonButton>
                  </div>
              </div>
              <img
                 ref={(el) => (thumbRef = el)}
                 src={HandleImage(BigDeliverySvg)}
                 className="home-delivery__img"
                 alt="Delivery"
               />
           </div>
        </Container>
    </section>
  )
}

export default HomeDelivery