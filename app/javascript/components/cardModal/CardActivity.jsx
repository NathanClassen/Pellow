import React from "react";
import CardComment from "./CardComment";
import CardAction from "./CardAction";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments.filter(comment => comment.card_id === ownProps.card.id)
  }
}

const CardActivity = ({ card, comments }) => {
  return (
    <li className="activity-section">
      <h2 className="activity-icon icon">Activity</h2>
      <ul className="horiz-list">
        <li className="not-implemented">Show Details</li>
      </ul>
      <ul className="modal-activity-list">
        {card.actions.map(action => (<CardAction action={action} key={action.id} />))}
        {comments.map(comment => (<CardComment comment={comment} key={comment.id} />))}
      </ul>
    </li>
  );
};

export default connect(mapStateToProps)(CardActivity);
