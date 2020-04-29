import React from "react";
import moment from "moment";

const CardDetails = ({ card }) => {
  return (
    <li className="details-section">
      <ul className="modal-details-list">
        <li className="labels-section">
          <h3>Labels</h3>

          {card.labels.map(label => {
            return (
              <div className="member-container" key={`${card.id}${label}`}>
                <div className={`${label} label colorblindable`}></div>
              </div>
            );
          })}
          <div className="member-container">
            <i className="plus-icon sm-icon"></i>
          </div>
        </li>
        {card.due_date ? (
          <li className="due-date-section">
            <h3>Due Date</h3>
            <div id="dueDateDisplay" className="overdue completed">
              <input
                id="dueDateCheckbox"
                type="checkbox"
                className="checkbox"
                checked=""
              />
              {moment(card.due_date).format("MMM Do")} <span>(past due)</span>
            </div>
          </li>
        ) : null}
      </ul>
      <form className="description">
        <p>Description</p>
        <span id="description-edit" className="link">
          Edit
        </span>
        <p className="textarea-overlay">
          {card.description ? card.description : ""}
        </p>
        <p id="description-edit-options" className="hidden">
          You have unsaved edits on this field.{" "}
          <span className="link">View edits</span> -{" "}
          <span className="link">Discard</span>
        </p>
      </form>
    </li>
  );
};

export default CardDetails;
