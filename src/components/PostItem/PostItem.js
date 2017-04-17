import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

export const PostItem = ({ id, title, text }) => (
  <div>
  { id ? <h2><Link to={`/${id}`}>{title}</Link></h2> : <h2>{title}</h2> }
    <p>{text}</p>
  </div>
)

PostItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default PostItem

