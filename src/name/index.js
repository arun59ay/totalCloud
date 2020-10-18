import React from "react";
import PropTypes from "prop-types";



export default function Name (props) {
    const { firstName, lastName} = props;
      return (
      <div>{firstName} {lastName}</div>
      );
}


Name.propTypes = {
    color:PropTypes.any
};