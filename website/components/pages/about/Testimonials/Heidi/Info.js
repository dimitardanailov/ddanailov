import TargetBlankLink from '@ddanailov/components/Pages/about/Testimonials/Heidi/@ddanailov/components/TargetBlankLink'
import PersonInfo from '@ddanailov/components/Pages/about/Testimonials/Components/PersonInfo'

import {heidi} from '@ddanailov/components/Pages/about/Testimonials/Heidi/data/testimonials'

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
