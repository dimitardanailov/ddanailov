import Avatar from '@about/Components/Avatar'

import {ivelin} from 'data/testimonials'

function IvelinAvatar() {
  return (
    <Avatar
      href={ivelin.linkedin.profile}
      title={ivelin.title}
      src={ivelin.linkedin.image}
    />
  )
}

export default IvelinAvatar
