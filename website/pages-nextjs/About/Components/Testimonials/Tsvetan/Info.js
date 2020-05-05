import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import PersonInfo from '@about/Components/PersonInfo'

import {tsvetan} from 'data/testimonials'

function TsvetanInfo() {
  return (
    <PersonInfo>
      <TargetBlankLink href={tsvetan.linkedin.profile} title={tsvetan.title}>
        {tsvetan.name}
      </TargetBlankLink>
      , {tsvetan.title}
    </PersonInfo>
  )
}

export default TsvetanInfo
