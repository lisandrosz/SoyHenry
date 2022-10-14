import React from "react";
import { connect } from "react-redux";
import CommentsPost from "../CommentsPost/CommentsPost";
import "./UserPosts.css";
import { getAllUserPosts } from "../../actions";

export class UserPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.getAllUsersPosts(userId);
  }

  render() {
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {userId}</h4>
        {this.props.userPosts.map((post) => {
          return <CommentsPost id={userId} />;
        })}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    userPosts: state.userPosts,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllUserPosts: (id) => dispatch(getAllUserPosts(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
