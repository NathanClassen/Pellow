import React, { Component } from 'react';
import Cards from './Cards';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.cards.filter(card => card.list_id === ownProps.list.id),
  }
}

class CardsContainer extends Component {
  render() {
    return (
      <div id="cards-container" data-id="list-1-cards">
        <Cards cards={this.props.cards} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(CardsContainer);