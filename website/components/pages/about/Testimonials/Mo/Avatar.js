import Avatar from '@ddanailov/components/Testimonials/Avatar'

import {mo} from 'data/testimonials'

function MoAvatar() {
  return (
    <Avatar
      href={mo.linkedin.profile}
      title={mo.linkedin.title}
      src={mo.linkedin.image}
    />
  )
}

export default MoAvatar
