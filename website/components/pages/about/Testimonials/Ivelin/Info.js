import TargetBlankLink from '@ddanailov/components/Pages/about/Testimonials/Ivelin/@ddanailov/components/TargetBlankLink'
import PersonInfo from '@ddanailov/components/Pages/about/Testimonials/Components/PersonInfo'

import {ivelin} from '@ddanailov/components/Pages/about/Testimonials/Ivelin/data/testimonials'

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
