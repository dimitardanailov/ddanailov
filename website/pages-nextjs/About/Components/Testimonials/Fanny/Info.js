import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import PersonInfo from '@about/Components/PersonInfo'

import {fanny} from 'data/testimonials'

function FannyInfo() {
  return (
    <PersonInfo>
      <TargetBlankLink href={fanny.linkedin.profile}>Fanny Yap</TargetBlankLink>
      , {fanny.title}
    </PersonInfo>
  )
}

export default FannyInfo
