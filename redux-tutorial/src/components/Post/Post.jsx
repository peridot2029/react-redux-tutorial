import React, { Component } from 'react';
import './Post.scss';
class Post extends Component {
  render() {
    const { post } = this.props;

    return (
      <li className='post-list'>
        <figure className='post-img'>
          <img src={post.url} alt={post.title} />
        </figure>
        <figcaption>
          <strong>{post.title}</strong>
          <span>{post.content}</span>
        </figcaption>
      </li>
    );
  }
}
export default Post;
