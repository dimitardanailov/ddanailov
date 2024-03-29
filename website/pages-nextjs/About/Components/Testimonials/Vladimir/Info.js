import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import PersonInfo from '@about/Components/PersonInfo'

import {vladimir} from 'data/testimonials'

function VladimirInfo() {
  return (
    <PersonInfo>
      <TargetBlankLink
        href={vladimir.linkedin.profile}
        title={vladimir.linkedin.title}
      >
        {vladimir.name}
      </TargetBlankLink>
      , {vladimir.title}
    </PersonInfo>
  )
}

export default VladimirInfo
