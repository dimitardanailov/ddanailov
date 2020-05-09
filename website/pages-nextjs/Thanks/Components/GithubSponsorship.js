import PropTypes from 'prop-types'
import TargetBlankLink from '@ddanailov/components/TargetBlankLink'

function GithubSponsorship({text}) {
  return (
    <TargetBlankLink href="https://github.com/dimitardanailov">
      {text}
    </TargetBlankLink>
  )
}

GithubSponsorship.propTypes = {
  text: PropTypes.string.isRequired,
}

export default GithubSponsorship
