import Avatar from '@ddanailov/components/Testimonials/Avatar'

import {vladimir} from 'data/testimonials'

function VladimirAvatar() {
  return (
    <Avatar
      src={vladimir.linkedin.image}
      href={vladimir.linkedin.profile}
      title={vladimir.title}
    />
  )
}

export default VladimirAvatar
