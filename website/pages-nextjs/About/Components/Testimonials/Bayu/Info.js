import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import PersonInfo from '@about/Components/PersonInfo'

import {bayu} from 'data/testimonials'

function BayuInfo() {
  return (
    <PersonInfo>
      <TargetBlankLink href={bayu.linkedin.profile} title={bayu.title}>
        {bayu.name}
      </TargetBlankLink>
      , {bayu.testimonialTitle}
    </PersonInfo>
  )
}

export default BayuInfo
