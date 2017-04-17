import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Post from 'models/Post'
import { getPostById } from './modules/post'
import PostItem from 'components/PostItem'

const mapDispatchToProps = {
  getPostById
}

const mapStateToProps = ({ post }) => ({
  post
})

@connect(mapStateToProps, mapDispatchToProps)
export default class PostContainer extends Component {

  static propTypes = {
    post: PropTypes.instanceOf(Post).isRequired
  }

  componentDidMount () {
    const { pathname } = this.props.location
    if (!this.props.post.isGettingPostById()) {
      this.props.getPostById(Number.parseInt(pathname.slice(1), 10))
    }
  }

  render () {
    const { title, text } = this.props.post.getPost()

    return <PostItem
      title={title}
      text={text}
    />
  }
}
