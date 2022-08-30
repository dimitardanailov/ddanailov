import Avatar from '@about/Components/Avatar'

import {mikeValnev} from 'data/testimonials'

function MikeValnevAvatar() {
  return (
    <Avatar
      href={mikeValnev.linkedin.profile}
      title={mikeValnev.linkedin.title}
      src={mikeValnev.linkedin.image}
    />
  )
}

export default MikeValnevAvatar
