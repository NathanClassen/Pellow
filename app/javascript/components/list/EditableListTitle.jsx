import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/BoardActions";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEditList: (title, callback) => {
      dispatch(actions.editList(title, ownProps.list.id, callback));
    }
  };
};

class EditableListTitle extends Component {
  state = {
    showForm: false,
    title: this.props.list.title || ""
  };

  handleTileClick = e => {
    e.preventDefault();
    this.setState({
      showForm: true
    });
  };

  handleFormClose = () => {
    this.setState({
      showForm: false
    });
  };

  handleSave = () => {
    if (this.state.title.trim() === "") {
      this.handleFormClose();
      return;
    }
    this.props.onEditList(this.state.title, () => {
      this.handleFormClose();
    });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      title: e.target.value
    });
  };

  render() {
    if (this.state.showForm) {
      return (
        <input
          onBlur={this.handleSave}
          onChange={this.handleChange}
          type="text"
          className="list-title"
          value={this.state.title}
          autoFocus="true"
        />
      );
    } else {
      return (
        <p onClick={this.handleTileClick} className="list-title">
          {this.props.list.title}
        </p>
      );
    }
  }
}

export default connect(null, mapDispatchToProps)(EditableListTitle);
