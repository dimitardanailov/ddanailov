import Keyword from '@ddanailov/components/Keyword'
import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import Title from '@ddanailov/styled/headers/paragraph/title/index'

function Accomplishments() {
  return (
    <>
      <Title>Accomplishments</Title>
      <ul>
        <li>
          Top 4% user in{' '}
          <TargetBlankLink
            title="My mentorship experience"
            href="https://stackoverflow.com/users/609707/d-danailov"
          >
            Stack Overflow
          </TargetBlankLink>
          . (My points are 9000+)
        </li>
        <li>
          Management and Leadership skills - 8+ years. Positions:{' '}
          <Keyword word="Team Leader" />, <Keyword word="Software Architect" />,{' '}
          <Keyword word="Blockchain Staff Engineer" />,{' '}
          <Keyword word="Software Engineering Manager" />
        </li>
        <li>
          Backend Developer - 8+ years
          <ul>
            <li>Nodejs Developer - 6+ years</li>
            <li>.Net Developer - 2+ years</li>
          </ul>
        </li>
        <li>
          Full Stack Developer and Front-End Developer - 8+ years. Frameworks:
          React, Angular, Polymer, WebComponents, jQuery, Vanilla Javascript
        </li>
        <li>Blockchain Developer - 1 year</li>
        <li>
          Mobile Developer - 2 years
          <ul>
            <li>Android Developer - 1.5 years</li>
            <li>iOS Developer - 4 months</li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default Accomplishments
