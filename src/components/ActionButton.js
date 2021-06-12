import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default class ActionButton extends React.Component {
  render() {
    return (
      <a
        href="#contact"
        className="btn btn-primary shadow rounded-pill action-button"
      >
        <FaPhoneAlt />
        <span className="hidden">Enquiry</span>
      </a>
    );
  }
}
