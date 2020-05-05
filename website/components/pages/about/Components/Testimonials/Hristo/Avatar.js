import Avatar from '@pages/components/about/Avatar'

import {hristo} from 'data/testimonials'

function HristoAvatar() {
  return (
    <Avatar
      title={hristo.title}
      src={hristo.linkedin.image}
      href={hristo.linkedin.profile}
    />
  )
}

export default HristoAvatar
