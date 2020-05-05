import Avatar from '@ddanailov/components/Testimonials/Avatar'

import {tsvetan} from 'data/testimonials'

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
