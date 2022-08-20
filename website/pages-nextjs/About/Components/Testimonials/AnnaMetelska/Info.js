import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import PersonInfo from '@about/Components/PersonInfo'

import {annaMetelska} from 'data/testimonials'

function AnnaMetelskaInfo() {
  return (
    <PersonInfo>
      <TargetBlankLink
        href={annaMetelska.linkedin.profile}
        title={annaMetelska.title}
      >
        {annaMetelska.name}
      </TargetBlankLink>
      , {annaMetelska.title}
    </PersonInfo>
  )
}

export default AnnaMetelskaInfo
