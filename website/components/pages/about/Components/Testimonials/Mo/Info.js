import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import PersonInfo from '@pages/components/about/PersonInfo'

import {mo} from 'data/testimonials'

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
