import TargetBlankLink from '@ddanailov/components/Pages/about/Testimonials/Mo/@ddanailov/components/TargetBlankLink'
import PersonInfo from '@ddanailov/components/Pages/about/Testimonials/Components/PersonInfo'

import {mo} from '@ddanailov/components/Pages/about/Testimonials/Mo/data/testimonials'

function MoInfo() {
  return (
    <PersonInfo>
      <TargetBlankLink href={mo.linkedin.profile} title={mo.linkedin.title}>
        {mo.name}
      </TargetBlankLink>
      , {mo.title}
    </PersonInfo>
  )
}

export default MoInfo
