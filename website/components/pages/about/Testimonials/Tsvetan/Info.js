import TargetBlankLink from '@ddanailov/components/Pages/about/Testimonials/Tsvetan/@ddanailov/components/TargetBlankLink'
import PersonInfo from '@ddanailov/components/Pages/about/Testimonials/Components/PersonInfo'

import {tsvetan} from '@ddanailov/components/Pages/about/Testimonials/Tsvetan/data/testimonials'

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
