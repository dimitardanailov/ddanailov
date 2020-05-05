import Avatar from '@ddanailov/components/Pages/about/Testimonials/Hristo/@ddanailov/components/Testimonials/Avatar'

import {hristo} from '@ddanailov/components/Pages/about/Testimonials/Hristo/data/testimonials'

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
