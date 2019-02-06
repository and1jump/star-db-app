import React, { Component } from "react";

import Spinner from "../Spinner/Spinner";

const withData = View => {
  return class extends Component {
    state = { data: null };

    componentDidUpdate(prevProp) {
      if (this.props.getData !== prevProp.getData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.props.getData().then(data => {
        this.setState({
          data
        });
      });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
