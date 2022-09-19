import React, { useEffect, useState } from "react";
import "./styles.scss";
import { MOBILE_BREAKPOINT } from "../../../../constants/breakpoint";
import ContentLoader from "react-content-loader";
import { SideBySideMagnifier } from "react-image-magnifiers";

const DetailImage = (props) => {
  const { product } = props;
  const { img } = product ? product : "";

  const [isAtDesktop, setIsAtDesktop] = useState(false);
  const [isLast, setIsLast] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > MOBILE_BREAKPOINT) {
      setIsAtDesktop(true);
    } else {
      setIsAtDesktop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, []);

  const contentLoader = () => (
    <ContentLoader viewBox="0 0 100 100">
      <rect x="0" y="0" width="100%" height="100%" />
    </ContentLoader>
  );
  return (
    <div className="detail-img">
      {isAtDesktop ? (
        img ? (
          <SideBySideMagnifier
            className={isLast ? "detail-img__main last" : "detail-img__main"}
            imageSrc={img}
            imageAlt="Foods"
            alwaysInPlace={true}
            transitionSpeedInPlace={0.3}
          />
        ) : (
          contentLoader()
        )
      ) : img ? (
        <div className={isLast ? "detail-img__main last" : "detail-img__main"}>
          <img className="detail-img__main-mobile" src={img} alt="Foods" />
        </div>
      ) : (
        contentLoader()
      )}

      <div className="detail-img__slides">
        {img ? (
          <>
            <div
              onClick={() => setIsLast(false)}
              className={
                isLast ? "detail-img__slide last" : "detail-img__slide"
              }
            >
              <img src={img} alt="Slide-img" />
            </div>
            <div
              onClick={() => setIsLast(true)}
              className={
                isLast ? "detail-img__slide" : "detail-img__slide last"
              }
            >
              <img src={img} alt="Slide" />
            </div>
          </>
        ) : (
          <>{contentLoader()}</>
        )}
      </div>
    </div>
  );
};

export default DetailImage;
