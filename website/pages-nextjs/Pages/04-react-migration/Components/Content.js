import React from 'react'

import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

import TargetBlankLink from '@ddanailov/components/TargetBlankLink'

import BlogTitle from '@ddanailov/components/Blog/Title'
import SubTitle from '@ddanailov/components/Blog/SubTitle'

class Content extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    return (
      <>
        <BlogTitle>
          My unexpected journey: How we migrated an enterprise react application
          from 15.6 to 16.10
        </BlogTitle>
        <p>
          My article has a goal to give you details how me and my teammates did
          a successful React migration from 15.6 to 16.10
        </p>
        <SubTitle>
          The migration is expensive or How much is the bill ?
        </SubTitle>
        <p>
          The whole process cost more than 9 months and I'm not sure how many
          hours the company paid. <strong>The article away is:</strong> The main
          challenge for each enterprise project is the infinity battle between
          stakeholders features and source code improvements.{' '}
          <strong>
            If you're too busy with stakeholders features soon or later the
            source code will be a bottleneck!!!
          </strong>
        </p>
        <SubTitle>The front - end stack 2020</SubTitle>
        <p>The platform technology stack is:</p>
        <ul>
          <li>React 16.12</li>
          <li>Nodejs 12</li>
          <li>Webpack 4</li>
          <li>
            <TargetBlankLink
              href="https://www.npmjs.com/package/node-sass"
              title="Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass."
            >
              Node - sass version 4.12+
            </TargetBlankLink>
          </li>
          <li>
            <TargetBlankLink
              href="https://material-ui.com/"
              title="React components for faster and easier web development. Build your own design system, or start with Material Design."
            >
              Material UI v4.9
            </TargetBlankLink>
          </li>
          <li>
            <TargetBlankLink
              href="https://www.npmjs.com/package/fsevents"
              title="The FSEvents API in MacOS allows applications to register for notifications of changes to a given directory tree. It is a very fast and lightweight alternative to kqueue."
            >
              fsevents
            </TargetBlankLink>
          </li>
        </ul>
        <p>The webPack build is 45 seconds.</p>
        <p>The front - end stack a year ago was:</p>
        <ul>
          <li>React 15.6</li>
          <li>Nodejs 8</li>
          <li>Webpack 2</li>
          <li>Nodejs - sass version 4.5</li>
          <li>
            <TargetBlankLink
              href="https://v0.material-ui.com/#/"
              title="React components that implement Google's Material Design"
            >
              Material UI 0.x
            </TargetBlankLink>
          </li>
        </ul>
        <p>The initial Webpack build was 4 minutes. Yeah four minutes.</p>
        <SubTitle>The first important step for us was fsevents</SubTitle>
        <p>
          I'm impressed by: <strong>fsevents</strong> The library reduces the
          initial build from 4 minutes to 90 seconds. You need to add execute
          the following command:
        </p>
        <pre>
          <code className="language-shell">{`npm install --save-optional fsevents`}</code>
        </pre>
        <p>
          Note: fsevents is useful only if your developer workstation is Mac OS
          X
        </p>
        <SubTitle>
          The snowball requirement: Material UI 0.X to be migrated
        </SubTitle>
        <p>
          Material UI 0.x is old and outdated library. The library doesn't have
          an issue to work with React 15.6. The modern version (version 4+)
          requires at least React version 16.3+.
        </p>
        <p>The material UI version 0.x components stats:</p>
        <ul>
          <li>Material UI Input fields 100 +</li>
          <li>Material UI checkbox 50 +</li>
          <li>Material UI radio buttons 50+</li>
          <li>Material UI buttons 200 +</li>
        </ul>
        <p>
          My advices is: Always add an abstraction between UI components and
          application layer. The direct usage is sweet and cheap but soon or
          later can be a bottleneck.
        </p>
        <SubTitle>Webpack 2 vs Webpack 4</SubTitle>
        <p>
          The biggest road blocker was: Webpack 2. The whole configuration was
          too complex. The possible output were 0 and 1. 0 means: somewhere in
          the application has an error. I did a proposal: We need a new project.
          The project has ONLY one goal: We need to increase visibility why
          something is wrong. The build process has all required states: error,
          warnings.
        </p>
        <p>
          The author note is:  The good build process can be a game changer.
        </p>
        <SubTitle>Unit testing and Integrations tests</SubTitle>
        <p>
          One of the biggest challenges for us: The main testing tool for us was
          Manual Testing. The only possibility for testing us was:{' '}
          <TargetBlankLink
            title="Smoke testing"
            href="https://en.wikipedia.org/wiki/Smoke_testing_(software)"
          >
            Smoke testing
          </TargetBlankLink>
          . The author note: The whole migration was a starting point the whole
          company to start to invest in the Automation Testing.
        </p>
        <SubTitle>How the migration was achieved ?</SubTitle>
        <p>The answer is with baby steps!</p>
        <p>
          We started with the obvious step: We removed all unnecessarily
          libraries. The second step was: fsevents. The third step for us was
          node-sass. The next step was: Nodejs version. We did a migration from
          Nodejs version 8 to Node 10.
        </p>
        <p>
          The biggest road blocker for us was: ReactQuill and{' '}
          <TargetBlankLink
            title="Custom Editing Area losing focus in React 16"
            href="https://github.com/zenoamaro/react-quill/issues/309"
          >
            Custom Editing Area losing focus in React 16
          </TargetBlankLink>
          . The issue is still opened. The end of the day we decided to remove
          the whole page. Two or three months we've two different version
          between production and staging:
        </p>
        <ul>
          <li>React 16 on staging with ReactQuill issue</li>
          <li>React 15 on production without ReactQuill issue</li>
        </ul>
        <p>
          These two or three months gave us opportunity to test all React
          features. I mentioned early the main unit testing approach was: Manual
          testing.
        </p>
        <p>February 2019: We did a successful released on production. </p>
        <p>April 2019: We replaced UI layer with Material UI 4.9+</p>
        <SubTitle>
          My takeaway from the whole migration journey from React 15.6 to
          React 16
        </SubTitle>
        <p>
          The devil is in the details: ReactQuill was a big blocker for us. My
          advice is: Avoid usage of jQuery libraries in React Application. Two
          libraries have different an idea how to access DOM elements.
        </p>
        <p>
          I'm a Bulgarian. We've a quote: Господ обича смелите / The god loves
          brave people. The unexpected migration journey the end of day arrived
          on the production. Yeah we had several failures but these failures
          were just a fuel for us!!!
        </p>
        <SubTitle>React consulting: hiring</SubTitle>
        <p>
          If your business requires React consultant: contact me. My email is:{' '}
          <a
            href="mailto:dimityr.danailov@gmail.com"
            title="Javascript Consultant"
          >
            dimityr.danailov@gmail.com
          </a>
        </p>
      </>
    )
  }
}

export default Content
