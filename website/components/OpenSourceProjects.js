import Keyword from './Keyword'

function OpenSourceProjects() {
  return (
    <div>
      <h3>Open source projects 🦉</h3>
      <ul>
        <li>
          <a
            href="https://github.com/dimitardanailov/gmail-helper"
            target="_blank"
            rel="noopener noreferrer"
            title="Native web componets consultant"
          >
            Gmail Helper
          </a>
          : Gmail helper creates gmail labels and features. Technologies: Custom
          Elements v1, <Keyword word="React" />, Webpack, Lerna, Mocha, Chai,
          Karma
        </li>
        <li>
          <a
            href="https://github.com/dimitardanailov/tantalus"
            title="Nodejs consultant"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tantalus
          </a>
          : is a <Keyword word="Nodejs Microservices" /> application. Project
          uploads big streams from custom cloud provider to AWS. Tantalus uses:
          NodeServer Generator, routing-controllers, tus.io,{' '}
          <Keyword word="Typescript" />.
        </li>
        <li>
          <a
            href="https://github.com/dimitardanailov/push-notifications"
            title="Push notification demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Push notification playground
          </a>
          : Google Chrome and Firefox push notifications playground, Docker
          Safari APN creator
        </li>
        <li>
          <a
            href="https://github.com/dimitardanailov/react-components"
            title="React playground"
            target="_blank"
            rel="noopener noreferrer"
          >
            React components
          </a>
          : <Keyword word="React" /> catalog with different useful components.
        </li>
      </ul>
    </div>
  )
}

export default OpenSourceProjects
