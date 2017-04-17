import React from 'react'
import PropTypes from 'prop-types'
import PostItem from 'components/PostItem'

export const PostList = ({ posts }) => (
  <div>
    <h4>All Posts</h4>
    <ul>
      {posts
        .map(p => p.toObject())
        .map((post, i) =>
          <li key={i}>
            <PostItem
              {...post}
            />
          </li>
      )}
    </ul>
  </div>
)

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostList
