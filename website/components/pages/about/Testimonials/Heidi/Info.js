import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import PersonInfo from '@ddanailov/components/pages/about/Testimonials/Components/PersonInfo'

import {heidi} from 'data/testimonials'

function HeidiInfo() {
  return (
    <PersonInfo>
      <TargetBlankLink href={heidi.linkedin.profile} title={heidi.title}>
        {heidi.name}
      </TargetBlankLink>
      , {heidi.testimonialTitle}
    </PersonInfo>
  )
}

export default HeidiInfo
