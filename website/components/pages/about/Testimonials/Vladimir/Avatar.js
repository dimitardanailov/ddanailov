import Avatar from '@ddanailov/components/Pages/about/Testimonials/Vladimir/@ddanailov/components/Testimonials/Avatar'

import {vladimir} from '@ddanailov/components/Pages/about/Testimonials/Vladimir/data/testimonials'

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
