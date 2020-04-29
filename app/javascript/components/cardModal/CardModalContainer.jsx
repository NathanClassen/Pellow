import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardModal from './CardModal';
import * as actions from '../../actions/BoardActions'

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.cards.find(card => card.id === +ownProps.match.params.id)
  }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    onFetchCard: (id) => {
      dispatch(actions.fetchCard(id), (card) => {
        dispatch(actions.fetchBoard(card.board_id))
      });
    }
  }
}

class CardModalContainer extends Component {
  componentDidMount() {
    this.props.onFetchCard(this.props.match.params.id);
  }

  render() {
    return this.props.card && this.props.card.actions ? <CardModal card={this.props.card} /> : null
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(CardModalContainer);