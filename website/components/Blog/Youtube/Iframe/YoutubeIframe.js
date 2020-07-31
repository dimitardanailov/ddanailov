import PropTypes from 'prop-types'

function YoutubeIframe({url}) {
  return (
    <iframe
      loading="lazy"
      width="560"
      height="315"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  )
}

YoutubeIframe.propTypes = {
  url: PropTypes.string.isRequired,
}

export default YoutubeIframe
