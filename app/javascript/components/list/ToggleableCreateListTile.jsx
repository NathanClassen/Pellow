import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/BoardActions';


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreateList: (title, cb) => {
      dispatch(actions.createList(title, ownProps.boardId, cb))
    }
  }
}


class ToggleableCreateListTile extends Component {
  state = {
    showForm: false,
    title: ''
  }

  handleTileClick = (e) => {
    e.preventDefault();
    this.setState({
      showForm: true
    });
  }

  handleFormCloseClick = (e) => {
    e.preventDefault();

    this.setState({
      showForm: false
    });
  }

  handleSave = () => {
    if (this.state.title === '') {
      return;
    }
    this.props.onCreateList(this.state.title, () => {
      this.setState({
        title: '',
        showForm: false
      });
    });


  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      title: e.target.value,
    })
  }

  render() {
    return (
      <div id="new-list"
        className={`new-list ${this.state.showForm ? 'selected' : null}`}
      >
        <span
          onClick={this.handleTileClick}>
          Add a list...</span>
        <input
          type="text"
          placeholder="Add a list..."
          value={this.state.title}
          onChange={this.handleChange} />
        <div>
          <input
            onClick={this.handleSave}
            type="submit"
            className="button"
            value="Save"
            disabled={this.state.title === '' ? true : null} />
          <i onClick={this.handleFormCloseClick} className="x-icon icon"></i>
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(ToggleableCreateListTile);