import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import PersonInfo from '@about/Components/PersonInfo'

import {davidTarbay} from 'data/testimonials'

function DavidTarbayInfo() {
  return (
    <PersonInfo>
      <TargetBlankLink href={davidTarbay.linkedin.profile}>
        David Tarbay
      </TargetBlankLink>
      , {davidTarbay.title}
    </PersonInfo>
  )
}

export default DavidTarbayInfo
