import React from "react";
import moment from "moment";

const Card = ({ card }) => {
  return (
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="card-info">
          {card.labels.map((label, i) => {
            return (
              <div
                key={i}
                className={`card-label ${label} colorblindable`}
              ></div>
            );
          })}
          <p>{card.title}</p>
        </div>
        <div className="card-icons">
          {card.due_date ? (
            <i className="clock-icon sm-icon overdue-recent completed">
              {moment(card.due_date).format("MMM Do")}
            </i>) : null}
          {card.description ? (
            <i className="description-icon sm-icon"></i>
          ) : null}
          {card.comments ? <i className="comment-icon sm-icon"></i> : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
