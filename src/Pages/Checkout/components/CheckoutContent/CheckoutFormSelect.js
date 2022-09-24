import React from 'react';
import styled from "styled-components";
import Countries from '../../../../utils/Countries';
import PRIMARY_RED_COLOR, {PRIMARY_WHITE_COLOR} from '../../../../constants/color'
import Select from 'react-select';


const CheckoutFormSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  & > *:first-child {
    margin-bottom: 5px;
  }
`;

const stylesComponent = {
  container: (base) => ({
    ...base,
    flex: 1,
  }),
  control: (base) => ({
    ...base,
    fontSize: "1.3rem",
    borderColor: "rgba(0, 0, 0, 0.15)",
    boxShadow: "none",

    cursor: "pointer",

    "&:hover": {
      border: "1px solid inherite",
    },
  }),
  menu: (base) => ({
    ...base,
    zIndex: 100,

    paddingTop: "5px",
    paddingBottom: "5px",

    "-ms-overflow-style": "none",
    "scrollbar-width": "none",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  }),
  option: (base, state) => ({
    ...base,
    padding: "15px 10px",
    fontSize: "1.3rem",

    color: state.isSelected ? PRIMARY_WHITE_COLOR : "#333",
    backgroundColor: state.isSelected ? PRIMARY_RED_COLOR : PRIMARY_WHITE_COLOR,

    cursor: "pointer",

    "&:active": {
      backgroundColor: state.isSelected && PRIMARY_RED_COLOR,
    },

    "&:hover": {
      backgroundColor: !state.isSelected && "rgba(0, 0, 0, 0.03)",
    },
  }),
  noOptionsMessage: (base) => ({
    ...base,
    fontSize: "1.3rem",
  }),
  menuList: (base) => ({
    ...base,
    scrollbarWidth: "none",

    "::-webkit-scrollbar": {
      display: "none",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "rgba(0, 0, 0, 0.55)",
  }),
};

const CheckoutFormSelect = (props) => {
    const {errors, field} = props;

  return (
    <CheckoutFormSelectWrapper>
           <Select 
                {...field}
                placeholder="Select your country"
                styles={stylesComponent}
                options={Countries}
           />
            <span className="checkout-form-field__error">
               {errors.country?.message}
           </span>
    </CheckoutFormSelectWrapper>
  )
}

export default CheckoutFormSelect