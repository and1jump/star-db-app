import React, { Component } from "react";

import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator";

const withData = View => {
  return class extends Component {
    state = { data: null, loading: true, error: false };

    componentDidUpdate(prevProp) {
      if (this.props.getData !== prevProp.getData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.setState({
        loading: true,
        error: false
      });

      this.props
        .getData()
        .then(data => {
          this.setState({
            data,
            loading: false
          });
        })
        .catch(() => {
          this.setState({
            error: true,
            loading: false
          });
        });
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorIndicator />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
