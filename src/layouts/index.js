import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './normalize.css'
import './skeleton.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="BIOCOSMOPOLITAN" />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
