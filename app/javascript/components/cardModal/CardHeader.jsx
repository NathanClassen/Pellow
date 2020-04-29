import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/BoardActions";

const mapStateToProps = (state, ownProps) => {
  console.log(`state inside CardHeader map... ${state}`);

  return {
    list: state.lists.find(list => {
      return list.id === ownProps.card.list_id;
    })
  };
};

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {};
};

class CardHeader extends Component {
  render() {
    if (this.props.list) {
      return (
        <header>
          <i className="card-icon icon .close-modal"></i>
          <textarea
            className="list-title"
            value={this.props.card.title}
            style={{ height: "45px" }}
          ></textarea>
          <p>
            in list{" "}
            <a className="link">
              {this.props.list.title ? this.props.list.title : null}
            </a>
            <i className="sub-icon sm-icon"></i>
          </p>
        </header>
      );
    } else {
      return null;
    }
  }
}

export default connect(mapStateToProps)(CardHeader);
