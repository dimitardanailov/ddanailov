import Avatar from '@ddanailov/components/Pages/about/Testimonials/Ivelin/@ddanailov/components/Testimonials/Avatar'

import {ivelin} from '@ddanailov/components/Pages/about/Testimonials/Ivelin/data/testimonials'

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
