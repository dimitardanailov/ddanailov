import Avatar from '@pages/components/about/Avatar'

import {henry} from 'data/testimonials'

function HenryAvatar() {
  return (
    <Avatar
      href={henry.linkedin.profile}
      title={henry.title}
      src={henry.linkedin.image}
    />
  )
}

export default HenryAvatar
