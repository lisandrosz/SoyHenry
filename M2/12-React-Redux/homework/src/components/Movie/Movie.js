import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";
import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const movieID = this.props.match.params.id;
    this.props.getMovieDetail(movieID);
  }

  render() {
    const details = this.props.moviesDetail;
    return (
      <div className="movie-detail">
        <h2>Detalle de la pelicula</h2>
        <div>
          <h3>Titulo: {details.Title}</h3>
          <img src={this.props.moviesDetail.Poster} alt="imagen" />
          <p>Año lanzamiento: {details.Released}</p>
          <p>Director: {details.Director}</p>
          <p>Idiomas: {details.Language}</p>
          <p>Puntaje imdb: {details.imdbRating}</p>
          <p>Premios: {details.Awards}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesDetail: state.moviesDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
