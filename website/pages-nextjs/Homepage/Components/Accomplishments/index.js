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
          . (My points are 9400+)
        </li>
        <li>
          Management and Leadership skills - 10+ years. Positions:
          <ul>
            <li>
              <Keyword word="Fullstack JS DevOps Architect " />;
            </li>
            <li>
              <Keyword word="Blockchain Staff Engineer" />
            </li>
            <li>
              <Keyword word="Software Engineering Manager" />
            </li>
            <li>
              <Keyword word="Software Architect" />
            </li>
            <li>
              <Keyword word="Team Leader" />
            </li>
          </ul>
        </li>
        <li>
          Backend Developer - 10+ years
          <ul>
            <li>Nodejs Developer - 8+ years</li>
            <li>.Net Developer - 2+ years</li>
          </ul>
        </li>
        <li>
          Full Stack Developer and Front-End Developer - 10+ years. Frameworks:
          React and React Native
        </li>
        <li>Blockchain Developer - 1 year</li>
        <li>
          Mobile Developer - 2+ years
          <ul>
            <li>Android Developer - 2 years</li>
            <li>iOS Developer - 6 months</li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default Accomplishments
