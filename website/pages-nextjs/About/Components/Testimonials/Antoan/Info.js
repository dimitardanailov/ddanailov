import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import PersonInfo from '@about/Components/PersonInfo'

import {antoan} from 'data/testimonials'

function AntoanInfo() {
  return (
    <PersonInfo>
      <TargetBlankLink href={antoan.linkedin.profile} title={antoan.title}>
        {antoan.name}
      </TargetBlankLink>
      , {antoan.title}
    </PersonInfo>
  )
}

export default AntoanInfo
