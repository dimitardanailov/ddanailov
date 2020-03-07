import Keyword from './Keyword'

function Skills() {
  return (
    <div>
      <h3>Skills</h3>
      <ul>
        <li>
          🔥 <Keyword word="React" /> and Monorepo, Redux, State Machines,
          Custom Elements v1, D3js, Safari Push notifications, Polymer, Draftjs;
        </li>
        <li>🛡 Webpack, Gulp, Lerna, Bash Script, Docker and Vagrant;</li>
        <li>
          🗳 Nodejs, PHP, <Keyword word="Golang" />;
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
