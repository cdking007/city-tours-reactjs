import React, { Component } from "react";
import "./Tour.scss";
class Tour extends Component {
  state = {
    infoVisible: false,
  };
  handleVisible = () => {
    if (this.state.infoVisible) {
      this.setState({ infoVisible: false });
    } else {
      this.setState({ infoVisible: true });
    }
  };
  render() {
    const { id, city, name, img, info } = this.props.tour;
    return (
      <section className="tour">
        <div className="image-container">
          <img src={img} alt="Tour" />
          <span className="close-btn">
            <i
              className="fa fa-window-close"
              onClick={this.props.removeTour.bind(this, id)}
            ></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{name}</h3>
          <h4>{city}</h4>
          <h5>
            info{" "}
            {this.state.infoVisible === false && (
              <span>
                <i
                  className="fa fa-caret-down"
                  onClick={this.handleVisible}
                ></i>
              </span>
            )}
            {this.state.infoVisible && (
              <span>
                <i className="fa fa-caret-up" onClick={this.handleVisible}></i>
              </span>
            )}
          </h5>
          {this.state.infoVisible && <p>{info}</p>}
        </div>
      </section>
    );
  }
}

export default Tour;
