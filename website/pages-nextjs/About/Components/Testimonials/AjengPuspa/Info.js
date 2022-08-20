import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import PersonInfo from '@about/Components/PersonInfo'

import {ajengPuspa} from 'data/testimonials'

function AjengPuspaInfo() {
  return (
    <PersonInfo>
      <TargetBlankLink
        href={ajengPuspa.linkedin.profile}
        title={ajengPuspa.title}
      >
        {ajengPuspa.name}
      </TargetBlankLink>
      , {ajengPuspa.title}
    </PersonInfo>
  )
}

export default AjengPuspaInfo
