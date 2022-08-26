import Title from '@ddanailov/styled/headers/paragraph/title/index'
import Keyword from './Keyword'

function Skills() {
  return (
    <div>
      <Title>Technical Skills</Title>
      <ul>
        <li>
          🔥 <Keyword word="React" /> and Monorepo, <Keyword word="nextjs" />,
          Redux, State Machines, Immer, React Testing library, Custom Elements
          v1, D3js, Safari Push notifications, Material UI, Styled Components,
          Polymer, Draftjs;
        </li>
        <li>
          🚣 Blockchain Developer with experience in the several Layer 1
          providers: <Keyword word="Algorand" />, <Keyword word="Cosmos" />,{' '}
          <Keyword word="Etherium" />, <Keyword word="Binance Smart Chain" />,{' '}
          <Keyword word="Elrond" />
        </li>
        <li>🛡 Webpack, Gulp, Lerna, Bash Script, Docker and Vagrant;</li>
        <li>
          🗳 <Keyword word="Nodejs" />, PHP, <Keyword word="Golang" />;
        </li>
        <li>🚓 Web technologies (HTML5, CSS3, ES7+, a11y);</li>
        <li>
          ⛅️ <Keyword word="Azure" />, <Keyword word="AWS" />, AWS Lambda
          functions and Serverless, <Keyword word="Google Cloud" /> and{' '}
          <Keyword word="Kubernetes" />, Experience with monitoring tools: Kusto
          Query language;
        </li>
        <li>
          💥 <Keyword word="Typescript" />, Flow, Prettier;
        </li>
        <li>🍇 Feature Flags, Microservices, Fitness functions;</li>
        <li>
          🍸 MongoDB (Mongoose), Firebase, SQlite, MySQL and MSSQL, Hadoop;
        </li>
        <li>🔋 Travic CI, Circle CI, Jenkins, Groovy;</li>
        <li>🎧 Android, Swift and Objective - C;</li>
      </ul>
    </div>
  )
}

export default Skills
