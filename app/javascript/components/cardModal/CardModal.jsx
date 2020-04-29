import React from "react";
import CardHeader from "./CardHeader";
import CardMain from "./CardMain";
import CardAside from "./CardAside";
import { Link } from "react-router-dom";

const CardModal = ({ card }) => {
  return (
    <div id="modal-container">
      <div className="screen"></div>
      <div id="modal">
        <Link to={`/boards/${card.board_id}`}>
          <i className="x-icon icon close-modal"></i>
        </Link>
        <CardHeader card={card} />
        <CardMain card={card} />
        <CardAside />
      </div>
    </div>
  );
};

export default CardModal;
