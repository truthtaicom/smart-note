import * as React from "react";
import App from "../App";

export default class Setup extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    if (this.state.isLoading) {
      this.setState({ isLoading: false })
    }
  }

  render() {
    return (
      <App />
    );
  }
}
