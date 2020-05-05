import TargetBlankLink from '@ddanailov/components/Pages/about/Testimonials/Hristo/@ddanailov/components/TargetBlankLink'
import PersonInfo from '@ddanailov/components/Pages/about/Testimonials/Components/PersonInfo'

import {hristo} from '@ddanailov/components/Pages/about/Testimonials/Hristo/data/testimonials'

function HristoInfo() {
  return (
    <PersonInfo>
      <TargetBlankLink title={hristo.title} href={hristo.linkedin.profile}>
        {hristo.name}
      </TargetBlankLink>
      , {hristo.title}
    </PersonInfo>
  )
}

export default HristoInfo
