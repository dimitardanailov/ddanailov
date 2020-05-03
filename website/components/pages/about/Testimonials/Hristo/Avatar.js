import Avatar from '@ddanailov/components/Testimonials/Avatar'

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
