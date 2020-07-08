import React, { Component } from "react";
import Tour from "../Tour/Tour.component";
import "./Tourlist.scss";
import { tourData } from "../../tourData";

class Tourlist extends Component {
  state = {
    tours: tourData,
  };

  handleRemoveTour = (id) => {
    const { tours } = this.state;
    const sorted = tours.filter((tour) => tour.id !== id);
    this.setState({ tours: sorted });
  };

  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.handleRemoveTour} />
        ))}
      </section>
    );
  }
}

export default Tourlist;
