import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Posts from 'models/Posts'
import { getAllPosts } from './modules/posts'

import PostList from './components/PostList'

const mapDispatchToProps = {
  getAllPosts
}

const mapStateToProps = ({ posts }) => ({
  posts
})

@connect(mapStateToProps, mapDispatchToProps)
export default class PostsContainer extends Component {
  static propTypes = {
    getAllPosts: PropTypes.func.isRequired,
    posts: PropTypes.instanceOf(Posts).isRequired
  }

  componentDidMount () {
    if (!this.props.posts.isGettingAllPosts()) {
      this.props.getAllPosts()
    }
  }

  render () {
    return <PostList
      posts={this.props.posts.getPosts()}
    />
  }
}
