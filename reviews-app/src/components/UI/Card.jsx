import React from "react";
import propTypes from "prop-types";

function Card({ children, style }) {
  return <div className={style}>{children}</div>;
}

Card.defaultProps = {
  style: "card",
};

Card.propTypes = {
  style: propTypes.string,
};

export default Card;
