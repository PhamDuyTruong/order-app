import React, { useContext, useState } from "react";
import "./DetailContent.scss";

import { AuthContext } from "../../../../contexts/authContext";
import useFirestoreComments from "../../../../hooks/useFirestoreComments";
import { Button } from "@material-ui/core";

import ContentLoader from "react-content-loader";

import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import Checkbox from "../../../../Components/Checkbox";
import Dialog from "../../../../Components/Dialog";
import CommonButton from "../../../../Components/CommonButton";
import Message from "../../../../Components/Message";

const DetailContent = (props) => {
  const [isShowDialog, setIsShowDialog] = useState(false);
  const {
    product,
    paramsName,
    dataOptions,
    handleFuncs,
    selectedRadio,
    price,
    qnt,
    handleAddToFirestore,
  } = props;

  const { name, country, dsc, rate } = product ? product : "";
  const { handleOptionChange, handleIncreaseQnt, handleDecreaseQnt } =
    handleFuncs;
  const { comments } = useFirestoreComments();
  const { user } = useContext(AuthContext);

  const onHandleOptionChange = (e, percent) => {
    handleOptionChange(e, percent);
  };

  const onHandleAddToFirestore = (type, product) => {
    if (!user) {
      setIsShowDialog(true);
      return;
    }
    handleAddToFirestore(type, product);
    Message(type);
  };

  const contentLoader = () => (
    <ContentLoader>
      <rect x="0" y="0" width="100%" height="35" />
    </ContentLoader>
  );

  return (
    <>
      <div className="detail-content">
        <h2 className="detail-content__title">
          {name ? name : contentLoader()}
        </h2>
        <div className="detail-content__rate">
          <div className="detail-content__stars">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            {rate === 5 ? <StarIcon /> : <StarBorderIcon />}
          </div>

          <div className="detail-content__reviews">
            <span className="detail-content__reviews-qnt">
              {comments.length}
            </span>
            <span>Reviews</span>
          </div>
        </div>

        <div className="detail-content__price">
          <strong>${price}</strong>
        </div>

        <div className="detail-content__tags">
          <div className="detail-content__tag">
            <span className="detail-content__tag-label">Category:</span>
            <span className="detail-content__tag-detail category">
              {paramsName}
            </span>
          </div>
          <div className="detail-content__tag">
            <span className="detail-content__tag-label">Country</span>
            <span className="detail-content__tag-detail">{country}</span>
          </div>
        </div>

        <p className="detail-content__description">{dsc}</p>

        <form className="detail-content__form">
          <div className="detail-content__form-title">Choose your options</div>
          {dataOptions.map((item) => (
            <Checkbox
              key={item.content}
              checked={selectedRadio === item.content}
              content={item.content}
              value={item.content}
              handleOptionChange={(e) =>
                onHandleOptionChange(e, item.percentOff)
              }
            ></Checkbox>
          ))}
        </form>

        <div className="detail-content__btns">
          <div className="detail-content__btn-handle">
            <Button
              onClick={handleDecreaseQnt}
              className="detail-content__btn-inc btn-circle"
            >
              <RemoveIcon />
            </Button>
            <span className="detail-content__btn-qnt">{qnt}</span>
            <Button
              onClick={handleIncreaseQnt}
              className="detail-content__btn-dec btn-circle"
            >
              <AddIcon />
            </Button>
          </div>

          <div
            onClick={() => onHandleAddToFirestore("success", product)}
            className="detail-content__add"
          >
            <CommonButton subClass="red">
              <AddShoppingCartOutlinedIcon />
              <span>Add to cart</span>
            </CommonButton>
          </div>
          <Button
            onClick={() => onHandleAddToFirestore("wishlist", product)}
            className="detail-content__btn-like btn-circle"
          >
            <FavoriteBorderIcon />
          </Button>
        </div>

        <div className="detail-content__commits">
          <div className="detail-content__commit">
            <LocalOfferOutlinedIcon />
            <span>Free global shipping on all orders</span>
          </div>
          <div className="detail-content__commit">
            <EventAvailableOutlinedIcon />
            <span>2 hours easy returns if you change your mind</span>
          </div>
          <div className="detail-content__commit">
            <LocalOfferOutlinedIcon />
            <span>Order before noon for same day dispatch</span>
          </div>
        </div>
      </div>

      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog}/>
    </>
  );
};

export default DetailContent;
