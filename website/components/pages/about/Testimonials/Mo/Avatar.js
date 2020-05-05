import Avatar from '@ddanailov/components/Pages/about/Testimonials/Mo/@ddanailov/components/Testimonials/Avatar'

import {mo} from '@ddanailov/components/Pages/about/Testimonials/Mo/data/testimonials'

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
