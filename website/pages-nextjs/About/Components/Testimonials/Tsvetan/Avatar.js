import Avatar from '@about/Components/Avatar'

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
