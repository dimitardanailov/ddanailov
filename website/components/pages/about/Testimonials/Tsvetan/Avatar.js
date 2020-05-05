import Avatar from '@ddanailov/components/Pages/about/Testimonials/Tsvetan/@ddanailov/components/Testimonials/Avatar'

import {tsvetan} from '@ddanailov/components/Pages/about/Testimonials/Tsvetan/data/testimonials'

function TsvetanAvatar() {
  return (
    <Avatar
      href={tsvetan.linkedin.profile}
      src={tsvetan.linkedin.image}
      title={tsvetan.title}
    />
  )
}

export default TsvetanAvatar
