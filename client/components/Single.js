import React from 'react';
import Photo from './Photo';
// import comments

const Single = React.createClass({
  render() {
    const i = this.props.posts.findIndex(
      post => post.code === this.props.params.postId
    );
    const post = this.props.posts[i];
    console.log(post);
    return <Photo i={i} post={post} {...this.props} />;
  },
});

export default Single;
