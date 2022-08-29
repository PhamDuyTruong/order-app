import React, {useEffect, useRef} from 'react';
import "./styles.scss";
import gsap from "gsap";
import {IngredientsData} from '../../../../utils/fakeData';
import CommonButton from '../../../../Components/CommonButton';
import HandleImage from '../../../../Components/Banner/HandleImage';
import {IngredientsThumb, ShapeOne, ShapeTwo} from '../../../../utils/HomeImg';
import "../../../../assets/styles/_typography.scss";


const HomeIngredient = () => {
    let containerRef = useRef(null);
    let cardOneRef = useRef(null);
    let cardTwoRef = useRef(null);
    let cardThreeRef = useRef(null);
    let cardFourRef = useRef(null);
    let cardFiveRef = useRef(null);
    let cardSixRef = useRef(null);

    let contentRef = useRef(null);
    let captionRef = useRef(null);
    let headingRef = useRef(null);
    let priceRef = useRef(null);
    let btnRef = useRef(null);

    let leftCards = [cardOneRef, cardTwoRef, cardThreeRef];
    let rightCards = [cardFourRef, cardFiveRef, cardSixRef];

    useEffect(() =>{
        const cardsLine = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef,
                start: "40% bottom",
            }  
        });

        const contentLine = gsap.timeline({
            scrollTrigger: {
                trigger: contentRef,
                start: "10% bottom"
            }
        });
        cardsLine
      .from(leftCards[0], { y: 20, opacity: 0, duration: 0.6 }, 0.2)
      .from(leftCards[1], { y: 40, opacity: 0, duration: 0.6 }, 0.6)
      .from(leftCards[2], { y: 20, opacity: 0, duration: 0.6 }, 1)
      .from(rightCards[0], { y: 20, opacity: 0, duration: 0.6 }, 1.4)
      .from(rightCards[1], { y: 40, opacity: 0, duration: 0.6 }, 1.8)
      .from(rightCards[2], { y: 20, opacity: 0, duration: 0.6 }, 2.2);

      contentLine
      .from(captionRef, { x: -20, opacity: 0, duration: 0.6 })
      .from(headingRef, { x: 20, opacity: 0, duration: 0.6 })
      .from(priceRef, { y: 20, opacity: 0, duration: 0.6 })
      .from(btnRef, { y: 20, opacity: 0, duration: 0.6 });
    }, []);


  return (
    <section ref={(el) => containerRef = el} className="home-ingredients">
        <div className='home-ingredients__thumb' style={{backgroundImage: `url(${HandleImage(IngredientsThumb)})`}}>
            <div className='home-ingredients__card-left'>
                {IngredientsData.leftData.map(({title, content, order}, index) =>(
                    <div ref={(el) => leftCards[index] = el}  className="home-ingredients__card-wrapper" key={`${title}-${index}`}>
                        <div className='home-ingredients__card'>
                            <h3 className="home-ingredients__card-title">{title}</h3>
                            <p className="home-ingredients__card-content">{content}</p>
                            <span>{order}</span>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className='home-ingredients__card-right'>
                {IngredientsData.rightData.map(({title, content, order}, index) =>(
                    <div ref={(el) => rightCards[index] = el}  className="home-ingredients__card-wrapper" key={`${title}-${index}`}>
                        <div className='home-ingredients__card'>
                            <h3 className="home-ingredients__card-title">{title}</h3>
                            <p className="home-ingredients__card-content">{content}</p>
                            <span>{order}</span>
                        </div>
                    </div>
                ))}
            </div>
            
            <span  className="home-ingredients__shape-st" styel={{backgroundImage: `url(${HandleImage(ShapeOne)})`}}></span>
            <span  className="home-ingredients__shape-nd" styel={{backgroundImage: `url(${HandleImage(ShapeTwo)})`}}></span>
        </div>
        
        <div className='home-ingredients__content' ref={(el) => contentRef = el}>
             <div className='primary-yellow-text' ref={(el) => captionRef = el}> Good Food</div>
             <h2 ref={(el) => (headingRef = el)} className="primary-heading-text">
                    Delicious Beef <strong>Hamburger</strong>
             </h2>
             
            <h2 ref={(el) => (priceRef = el)} className="home-ingredients__price">
                 <strong>$20.00</strong>
            </h2>

            <div ref={(el) => (btnRef = el)}>
                <CommonButton subClass="red" page="shop">
                    Order Now
                </CommonButton>
            </div>
        </div>

    </section>
  )
}

export default HomeIngredient