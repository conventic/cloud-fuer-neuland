import React from 'react'
import PropTypes from 'prop-types'
import { MitmachenPageTemplate } from '../../templates/mitmachen-page'

const MitmachenPagePreview = ({ entry, widgetFor }) => (
  <MitmachenPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MitmachenPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MitmachenPagePreview
