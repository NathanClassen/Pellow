import React, { Component } from 'react';
import List from './List';
import ToggleableCreateListTile from './ToggleableCreateListTile';

class ExistingLists extends React.Component {
  state = {
    activeCardListId: null
  }

  handleToggleActive = (id) => {
    this.setState({
      activeCardListId: id
    });
  }

  render() {
    let allLists = this.props.lists.map(list => <List key={list.id} list={list} active={this.state.activeCardListId === list.id} onToggle={this.handleToggleActive} />)

    return (
      <div id="existing-lists" className="existing-lists">
        {allLists}
      </div>
    );
  }
}

export default ExistingLists;