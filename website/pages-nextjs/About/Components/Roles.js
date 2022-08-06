import Slogan from '@ddanailov/styled/Slogan'

import Keyword from '@ddanailov/components/Keyword'

import TargetBlankLink from '@ddanailov/components/TargetBlankLink'

function Roles() {
  return (
    <>
      <Slogan>Software Consultant or Engineering Manager</Slogan>

      <ul>
        <li>
          Former Blockchain Staff Engineer{' '}
          <TargetBlankLink
            href="https://propine.com/"
            title="Blockchain Staff Engineer in Propine"
          >
            Propine
          </TargetBlankLink>
        </li>
        <li>
          Former Software Engineering Manager in{' '}
          <TargetBlankLink
            href="https://www.elephantstock.com/"
            title="Software Engineering Manager in Elephantstock"
          >
            Elephantstock
          </TargetBlankLink>
        </li>
        <li>
          Former Remote Remote consultant in{' '}
          <TargetBlankLink
            title="Remote consultant in Asian Absolute"
            href="https://asianabsolute.com/"
          >
            Asian Absolute
          </TargetBlankLink>
        </li>
        <li>
          Former Remote Consultant in{' '}
          <TargetBlankLink
            href="https://getcraft.com/"
            title="Remote consultant in GetCraft"
          >
            GetCraft
          </TargetBlankLink>
        </li>
        <li>
          Former Software architect in{' '}
          <TargetBlankLink
            title="Software architect in MentorMate"
            href="https://mentormate.com/"
          >
            MentorMate
          </TargetBlankLink>
        </li>
        <li>
          Former Developer and CTO in{' '}
          <TargetBlankLink
            href="https://wollow-soft.com/en-US/"
            title="Software Developer and CTO in Wollow soft"
          >
            Wollow soft
          </TargetBlankLink>
        </li>
        <li>
          Passion to work with <Keyword word="Web3" />,{' '}
          <Keyword word="Blockchain" />, <Keyword word="React" />,{' '}
          <Keyword word="Nextjs" />, <Keyword word="Nodejs" />,{' '}
          <Keyword word="Go" />, Amazon Web Services, Azure, Google Cloud
        </li>
        <li>
          Experience with Remote teams: (US, UK, Australia, Indonesia,
          Singapore, Vietnam, India, Ukraine, Germany, Rusia)
        </li>
        <li>Encourage clear code, tests, and good documentation.</li>
      </ul>
    </>
  )
}

export default Roles
