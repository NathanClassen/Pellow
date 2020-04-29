import React, { Component } from 'react';
import ExistingLists from './ExistingLists';
import ToggleableCreateListTile from './ToggleableCreateListTile';
import { connect } from "react-redux";


const mapStateToProps = (state, ownProps) => ({
  lists: state.lists,
  boardId: ownProps.board.id
})


class ListContainer extends Component {

  render() {
    return (
      <div id="list-container" className="list-container">
        <ExistingLists lists={this.props.lists} />
        <ToggleableCreateListTile boardId={this.props.boardId} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ListContainer);