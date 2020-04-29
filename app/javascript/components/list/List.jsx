import React from "react";
import CardsContainer from "../cards/CardsContainer";
import EditableListTitle from "./EditableListTitle";
import { connect } from 'react-redux';
import * as actions from "../../actions/BoardActions";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreateCard: (title, callback) => {
      dispatch(actions.createCard(title, ownProps.list.id, callback))
    }
  }
}

class List extends React.Component {
  state = {
    cardTitle: ""
  }

  handleTileClick = (e) => {
    e.preventDefault();
    this.props.onToggle(this.props.list.id)
  }

  componentDidUpdate() {
    this._textarea.focus();
  }

  handleFormCloseClick = (e) => {
    e.preventDefault();

    this.props.onToggle(null);
  }

  handleSave = () => {
    console.log("handle save:" + this.state.cardTitle)
    if (this.state.cardTitle === '') {
      return;
    }
    this.props.onCreateCard(this.state.cardTitle, () => {
      this.setState({
        cardTitle: '',
      });
      this.props.onToggle(null);
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      cardTitle: e.target.value,
    })
  }

  render() {
    return (
      <div className={`list-wrapper ${this.props.active ? 'add-dropdown-active' : ""}`}>
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>{<EditableListTitle list={this.props.list} />}</div>
            <div className="add-dropdown add-top">
              <div className="card"></div>
              <a className="button">Add</a>
              <i className="x-icon icon"></i>
              <div className="add-options">
                <span>...</span>
              </div>
            </div>
            <CardsContainer list={this.props.list} />

            <div className={`add-dropdown add-bottom ${this.props.active ? "active-card" : ""}`}>
              <div className="card">
                <div className="card-info"></div>
                <textarea name="add-card"
                  ref={c => (this._textarea = c)}
                  onChange={this.handleChange}
                  value={this.state.cardTitle}></textarea>
                <div className="members"></div>
              </div>
              <a className="button" onClick={this.handleSave}>Add</a>
              <i className="x-icon icon" onClick={this.handleFormCloseClick}></i>
              <div className="add-options">
                <span>...</span>
              </div>
            </div>
            <div className="add-card-toggle" data-position="bottom" onClick={this.handleTileClick}>
              Add a card...
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default connect(null, mapDispatchToProps)(List);
