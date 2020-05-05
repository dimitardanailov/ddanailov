import Avatar from '@ddanailov/components/Pages/about/Testimonials/Henry/@ddanailov/components/Testimonials/Avatar'

import {henry} from '@ddanailov/components/Pages/about/Testimonials/Henry/data/testimonials'

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
