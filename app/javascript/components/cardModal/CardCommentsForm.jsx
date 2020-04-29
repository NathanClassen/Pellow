import React from 'react';
import { connect } from 'react-redux';
import * as actions from "../../actions/BoardActions";


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveComment: (commentText) => {
      dispatch(actions.createComment(commentText, ownProps.card.id));
    }
  }
}

class CardCommentsForm extends React.Component {
  state = {
    text: "",
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      text: event.target.value
    });
  }

  handleSave = (event) => {
    event.preventDefault();
    this.props.saveComment(this.state.text);
  }

  render() {
    return (
      <li className="comment-section">
        <h2 className="comment-icon icon">Add Comment</h2>
        <div>
          <div className="member-container">
            <div className="card-member">TP</div>
          </div>
          <div className="comment">
            <label>
              <textarea
                rows="1"
                placeholder="Write a comment..."
                onChange={this.handleChange}
                value={this.state.text}>
              </textarea>
              <div>
                <a className="light-button card-icon sm-icon"></a>
                <a className="light-button smiley-icon sm-icon"></a>
                <a className="light-button email-icon sm-icon"></a>
                <a className="light-button attachment-icon sm-icon"></a>
              </div>
              <div>
                <input type="submit" className="button not-implemented" value="Save" onClick={this.handleSave} />
              </div>
            </label>
          </div>
        </div>
      </li>
    );
  }
}

export default connect(null, mapDispatchToProps)(CardCommentsForm);