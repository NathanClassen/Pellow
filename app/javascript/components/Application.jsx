import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import TopNav from "./shared/TopNav";
import BoardsDashboardContainer from "./dashboard/BoardsDashboardContainer";
import BoardContainer from "./board/BoardContainer";

import CardModalContainer from "./cardModal/CardModalContainer";

class Application extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {

    return (
      <div>
        <TopNav />
        <Route path="/" exact component={BoardsDashboardContainer} />
        <Route path="/(boards|cards)/:id" component={BoardContainer} />
        <Route path="/cards/:id" component={CardModalContainer} />
      </div>
    );
  }
}

export default Application;

/*
When you render /cards/:id, BoardContainer is also rendered
I BoardContainer, we use the :id to get the board
... However if path is /cards, then we want to get the board id from the card, not the path

*/