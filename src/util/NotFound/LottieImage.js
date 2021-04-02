import React, { Component } from "react";
import Lottie from "react-lottie";
// import animationData from '../lotties/4203-take-a-selfie.json'

class LottieImage extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: this.props.animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={this.props.height}
          width={this.props.width}
        />
      </div>
    );
  }
}

export default LottieImage;
