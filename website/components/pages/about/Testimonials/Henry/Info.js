import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import PersonInfo from '@ddanailov/components/pages/about/Testimonials/Components/PersonInfo'

import {henry} from 'data/testimonials'

function HenryInfo() {
  return (
    <PersonInfo>
      <TargetBlankLink href={henry.linkedin.profile} title={henry.title}>
        Henry Clough
      </TargetBlankLink>
      , {henry.title}
    </PersonInfo>
  )
}

export default HenryInfo
