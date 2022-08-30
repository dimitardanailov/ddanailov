import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import PersonInfo from '@about/Components/PersonInfo'

import {mikeValnev} from 'data/testimonials'

function MikeValnevInfo() {
  return (
    <PersonInfo>
      <TargetBlankLink
        href={mikeValnev.linkedin.profile}
        title={mikeValnev.linkedin.title}
      >
        {mikeValnev.name}
      </TargetBlankLink>
      , {mikeValnev.title}
    </PersonInfo>
  )
}

export default MikeValnevInfo
