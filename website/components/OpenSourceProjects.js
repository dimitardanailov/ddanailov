import Keyword from './Keyword'
import Space from '@ddanailov/styled/Space'
import NextJsLink from '@ddanailov/components/Navigation/NextJsLink'
import theme from 'styles/colors/light'
import TargetBlankLink from '@ddanailov/components/TargetBlankLink'

function SponsorshipInfo() {
  return (
    <p>
      If you like me or my open source projects:
      <Space />
      <NextJsLink
        color={theme.secondary.light}
        href="/thanks"
        title="I love open source. The experiences that I've had both contributing and mentoring people in open source have been among the best experiences of my life."
      >
        You can sponsorship my work.
      </NextJsLink>
    </p>
  )
}

function OpenSourceProjects() {
  return (
    <div>
      <h3>Talk is cheap. Show me the code: 🦉</h3>
      <ul>
        <li>
          Blockchain Playgrounds:{' '}
          <TargetBlankLink
            href="https://github.com/dimitardanailov/ddanailov/tree/master/website/demos/algo-test-playground"
            title="Algorand and Blockchain"
          >
            Algorand
          </TargetBlankLink>
          , {', '}
          <TargetBlankLink
            href="https://github.com/dimitardanailov/ddanailov/tree/master/website/demos/polygon-test-playground"
            title="Algorand and Blockchain"
          >
            Polygon (Matic network)
          </TargetBlankLink>
        </li>
        <li>
          Mix between <Keyword word="React" />
          {', '}Xstate and D3js. The project represents my skils to create a
          complex UI react components from scratch:
          <a
            href="https://github.com/dimitardanailov/react-components/blob/master/packages/d3-tree-collapsible/app/components/D3TreeRadioButton.js"
            title="React playground"
            target="_blank"
            rel="noopener noreferrer"
          >
            D3TreeRadioButton
          </a>
        </li>
        <li>
          The component is mix between draftjs, <Keyword word="React" />
          {', '} and React hooks:{' '}
          <TargetBlankLink
            href="https://github.com/dimitardanailov/react-components/blob/master/packages/draft-js-playground/app/components/playground-editor/Editor.js"
            title="Editor.js"
          >
            Editor.js
          </TargetBlankLink>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Nextjs"
            href="https://github.com/dimitardanailov/ddanailov/tree/master/website"
          >
            ddanailov.dev
          </a>
          : The source code behind my blog / portfolio website. Technologies:
          <Space />
          <Keyword word="React" />,
          <Space />
          <Keyword word="nextjs" />,
          <Space />
          <Keyword word="Front-end devops" />
        </li>
        <li>
          <a
            href="https://github.com/dimitardanailov/gmail-helper"
            target="_blank"
            rel="noopener noreferrer"
            title="Native web componets"
          >
            Gmail Helper
          </a>
          : Gmail helper creates gmail labels and features. Technologies: Custom
          Elements v1, Webpack, Lerna, Mocha, Chai, Karma
        </li>
        <li>
          <a
            href="https://github.com/dimitardanailov/tantalus"
            title="Nodejs and Microservices"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tantalus
          </a>
          : is a <Keyword word="Nodejs Microservices" /> application. The
          project uploads big streams from custom cloud provider to AWS.
          Tantalus uses: NodeServer Generator, routing-controllers, tus.io,{' '}
          <Keyword word="Typescript" />.
        </li>
        <li>
          <a
            href="https://github.com/dimitardanailov/push-notifications"
            title="Safari and Google Chrome Push notifications"
            target="_blank"
            rel="noopener noreferrer"
          >
            Push notification playground
          </a>
          : Collection with Google Chrome and Firefox push notifications
          examples, Docker Safari APN creator
        </li>
      </ul>
      <SponsorshipInfo />
    </div>
  )
}

export default OpenSourceProjects
