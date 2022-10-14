import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllPosts } from "../../actions";

import "./Buscador.css";

export class Buscador extends Component {
  constructor(props) {
    super(props), (this.filtrados = this.props.posts), (this.postsSearch = []);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      filtrados: this.props.posts.filter((p) =>
        p.title.includes(this.state.postsSearch)
      ),
    });
    this.setState({
      postsSearch: "",
    });
  }

  viewAllPost() {
    this.setState({
      filtrados: this.props.posts,
    });
  }

  render() {
    return (
      <div className="details">
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="user">
              Posts:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={postsSearch}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>

        <button className="btn2" onClick={() => this.viewAllPost()}>
          VER TODOS
        </button>
        <div className="details">
          <h4 className="title">Posts </h4>
          <div className="card"></div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => dispatch(getAllPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
