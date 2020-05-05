import TargetBlankLink from '@ddanailov/components/Pages/about/Testimonials/Henry/@ddanailov/components/TargetBlankLink'
import PersonInfo from '@ddanailov/components/Pages/about/Testimonials/Components/PersonInfo'

import {henry} from '@ddanailov/components/Pages/about/Testimonials/Henry/data/testimonials'

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
