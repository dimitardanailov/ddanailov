import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import PersonInfo from '@about/Components/PersonInfo'

import {hristo} from 'data/testimonials'

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
