import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import PersonInfo from '@ddanailov/components/pages/about/Testimonials/Components/PersonInfo'

import {ivelin} from 'data/testimonials'

function IvelinInfo() {
  return (
    <>
      <PersonInfo>
        <TargetBlankLink
          href={ivelin.linkedin.profile}
          title={ivelin.linkedin.title}
        >
          {ivelin.name}
        </TargetBlankLink>
        , {ivelin.title}
      </PersonInfo>
    </>
  )
}

export default IvelinInfo
