import React, {useEffect, useRef} from 'react';
import "./styles.scss";
import gsap from "gsap";
import {WorkData} from '../../../../utils/fakeData';
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import "../../../../assets/styles/_typography.scss";
import HandleImage from '../../../../Components/Banner/HandleImage';



const HomeWork = () => {
    let containerRef = useRef(null);
    let captionRef = useRef(null);
    let headingRef = useRef(null);
    let stepOneRef = useRef(null);
    let stepTwoRef = useRef(null);
    let stepThreeRef = useRef(null);
    let stepFourRef = useRef(null);
    let stepRef = [stepOneRef, stepTwoRef, stepThreeRef, stepFourRef];

    useEffect(() =>{
        const line = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef,
                start: "20% bottom"
            }
        });

        line.from(captionRef, {
            x: 20,
            opacity: 0,
            duration: 0.7,
          })
            .from(headingRef, { x: -20, opacity: 0, duration: 0.8 }, "-=0.2")
            .from(stepRef[0], { y: 20, opacity: 0, duration: 0.8 }, "-=0.2")
            .from(stepRef[1], { y: 20, opacity: 0, duration: 0.6 }, "-=0.2")
            .from(stepRef[2], { y: 20, opacity: 0, duration: 0.6 }, "-=0.2")
            .from(stepRef[3], { y: 20, opacity: 0, duration: 0.6 }, "-=0.2");
    }, []);

  return (
    <section ref={(el) => containerRef = el} className="home-work">
        <Container>
            <div ref={(el) => captionRef = el} className="primary-yellow-text">
                Order Now
            </div>
            <h2 ref={(el) => headingRef = el} className="primary-heading-text">
                How it works
            </h2>

            <div className='home-work__steps'>
                <Grid container spacing={3}>    
                    {WorkData.map(({img, step, content, arrow}, index) =>(
                        <Grid item key={index} xs={12} sm={6} lg={3}>
                            <div ref={(el) => stepRef[index] = el} className="home-work__step">
                                <div className='home-work__thumb'>
                                    <div className='home-work__thumb-wrapper'>
                                        <img  className='home-work__img' src={HandleImage(img)} alt="image step" width={200} height={200}>
                                        </img>
                                        <span>0{step} Step</span>
                                        <div
                                         style={{ backgroundImage: `url(${arrow})` }}
                                         className="home-work__thumb-arrow"
                                        ></div>
                                    </div>
                                </div>
                                <div className="home-work__content">{content}</div>
                            </div>
                           
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Container>
    </section>
  )
}

export default HomeWork