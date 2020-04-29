import React, { Component } from "react";
import { connect } from "react-redux";
import Board from "./Board";
import * as actions from '../../actions/BoardActions';


const mapStateToProps = (state, ownProps) => {
  let boardId;
  let card;
  const { url } = ownProps.match;
  if (url.match(new RegExp("^/boards/"))) {
    boardId = +ownProps.match.params.id;
  } else {
    card = state.cards.find(card => card.id === +ownProps.match.params.id);
    if (card) {
      boardId = card.board_id;
    } else {
      boardId = null;
    }
  }
  if (boardId) {
    return {
      board: state.boards.find(board => board.id === boardId),
      card: card,
      boardId: boardId
    };
  } else {
    return {
      board: null,
      card: card,
      boardId: boardId
    };
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchBoard: (boardId, callback) => {
      dispatch(actions.fetchBoard(boardId, callback));
    }
  };
};

class BoardContainer extends Component {


  componentDidMount() {
    let boardId;
    const { url } = this.props.match;
    if (url.match(new RegExp("^/boards/"))) {
      boardId = +this.props.match.params.id;
    } else {
      if (this.props.card) {
        boardId = this.props.card.board_id;
      } else {
        boardId = null;
      }
    }
    if (!boardId) return null;
    this.props.onFetchBoard(boardId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.boardId !== prevProps.boardId) {
      this.props.onFetchBoard(+this.props.boardId);
    }
  }

  render() {
    if (this.props.board) {
      return <Board board={this.props.board} />;
    } else {
      return null;
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);

