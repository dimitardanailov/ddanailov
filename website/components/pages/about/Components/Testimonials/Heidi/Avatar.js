import Avatar from '@pages/components/about/Avatar'

import {heidi} from 'data/testimonials'

function HeidiAvatar() {
  return (
    <Avatar
      href={heidi.linkedin.profile}
      src={heidi.linkedin.image}
      title={heidi.title}
    />
  )
}

export default HeidiAvatar
