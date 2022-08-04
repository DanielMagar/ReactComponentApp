import React from "react";

class HalfStarRating extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating || null,
      temp_rating: null,
    };
  }

  handleMouseover(rating) {
    this.setState((prev) => ({
      rating,
      temp_rating: prev.rating,
    }));
  }

  handleMouseout() {
    // this.state.rating = this.state.temp_rating;
    // this.setState({ rating: this.state.rating });
    this.setState((prev) => ({
      rating: prev.temp_rating,
    }));
  }

  rate(rating) {
    this.setState({
      rating,
      temp_rating: rating,
    });
  }

  render() {
    const { rating } = this.state;
    let stars = [];
    for (let i = 0; i < 10; i++) {
      console.log("i", i);

      let klass = "bx bx-star";
      if (this.state.rating >= i && this.state.rating !== null) {
        klass = "bx bxs-star text-[purple]";
      }
      stars.push(
        <i
          style={{
            display: "inline-block",

            width: "14px",
            fontSize: "28px",
            overflow: "hidden",
            direction: i % 2 === 0 ? "ltr" : "rtl",
            cursor: "pointer",
          }}
          className={klass}
          onMouseOver={() => this.handleMouseover(i)}
          onClick={() => this.rate(i)}
          onMouseOut={() => this.handleMouseout()}
        />
      );
    }
    return (
      <>
        <div className="flex items-center justify-center">{stars}</div>
        <div className="flex items-center justify-center">
          Rating: {rating / 2 + 0.5}
        </div>
      </>
    );
  }
}

export default HalfStarRating;
