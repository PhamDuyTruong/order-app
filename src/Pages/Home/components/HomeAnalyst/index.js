import React, {useState, useEffect, useRef} from 'react';
import {AnalysisData} from '../../../../utils/fakeData'
import "./styles.scss";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import gsap from "gsap";
import HandleImage from '../../../../Components/Banner/HandleImage';
import {AnalysisThumb} from '../../../../utils/HomeImg'

const HomeAnalyst = () => {
  const [isShow, setIsShow] = useState(false);
  let containerRef = useRef(null);
  let numOneRef = useRef(null);
  let numTwoRef = useRef(null);
  let numThreeRef = useRef(null);
  let numFourRef = useRef(null);
  let numOneRef1 = useRef(null);
  let numTwoRef1 = useRef(null);
  let numThreeRef1 = useRef(null);
  let numFourRef1 = useRef(null);

  const arrNumRef = [numOneRef, numTwoRef, numThreeRef, numFourRef];
  const arrNumRef1 = [numOneRef1, numTwoRef1, numThreeRef1, numFourRef1];

  useEffect(() =>{
    gsap.registerEffect({
      name: "counter",
      extendTimeline: true,
      defaults: {
        duration: 3,
        ease: "power1",
        increment: 1,
      },
      effect: (targets, config) => {
        const tl = gsap.timeline();
        const num = targets[0].innerText.replace(/\,/g, "");
        targets[0].innerText = num;
        tl.to(
          targets,
          {
            duration: config.duration,
            innerText: config.end,
            modifiers: {
              innerText(innerText) {
                return gsap.utils
                  .snap(config.increment, innerText)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              },
            },
            ease: config.ease,
            opacity: 1,
          },
          0
        );
        return tl;
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef,
        start: "-20% top",
      },
    });

    tl.from(arrNumRef[0], { opacity: 0, duration: 0.5 })
      .counter(arrNumRef1[0], { end: 350 }, 0)
      .from(arrNumRef[1], { opacity: 0, duration: 0.5 }, 0)
      .counter(arrNumRef1[1], { end: 2678 }, 0)
      .from(arrNumRef[2], { opacity: 0, duration: 0.5 }, 0)
      .counter(arrNumRef1[2], { end: 60 }, 0)
      .from(arrNumRef[3], { opacity: 0, duration: 0.5 }, 0)
      .counter(arrNumRef1[3], { end: 30 }, 0);
  }, []);

  const handleModal = () =>{
    setIsShow(!isShow);
  }
  return (
    <section className='home-analysis' ref={(el) => (containerRef = el)} style={{backgroundImage: `url(${HandleImage(AnalysisThumb)})` }}>
        <div className='home-analysis__wrapper'>
            <div className='home-analysis__content'>
              <div className='home-analysis__content-text'>
                <span className='home-analysis__content-name'>Sandwich</span>
                <span className='home-analysis__content-price'>$36</span>
              </div>
              <div className='home-analysis__content-btn' onClick={handleModal}>
                  <div className='triangle'></div>
              </div>
              <span className="gooey"></span>
              <span className="gooey"></span>
              <span className="gooey"></span>
            </div>
            <div className={
            isShow
              ? "home-analysis__video-container show"
              : "home-analysis__video-container"
            }>
                <span onClick={handleModal} className="home-analysis__modal"></span>
                <iframe
                  title="Map"
                  className={
                     isShow ? "home-analysis__video show" : "home-analysis__video"
                      }
                  src={`https://www.youtube.com/embed/QWrq6c8s07w?autoplay=0&mute=${
                         isShow ? 0 : 1
                      }`}
                 ></iframe>
            </div>
        </div>
        <div className='home-analysis__container'>
            <Container>
               <Grid container spacing={3}>
                    {AnalysisData.map(({description, suffix}, index) =>(
                        <Grid item key={index} xs={12} sm={6} md={3}>
                            <div ref={(el) => (arrNumRef[index] = el)}>
                              <span ref={(el) => (arrNumRef1[index] = el)} className="home-analysis__qnt">
                                0
                              </span>
                              <span className="home-analysis__qnt">{suffix}</span>
                            </div>
                            <div className='home-analysis__description'>{description}</div>
                        </Grid>
                    ))}
               </Grid>
            </Container>
        </div>
    </section>
  )
}

export default HomeAnalyst