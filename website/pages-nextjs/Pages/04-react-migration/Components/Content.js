import React from 'react'

import TargetBlank from '@ddanailov/components/TargetBlankLink'

import BlogTitle from '@ddanailov/components/Blog/Title'
import SubTitle from '@ddanailov/components/Blog/SubTitle'

class Content extends React.Component {
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
            <TargetBlank
              href="https://www.npmjs.com/package/node-sass"
              title="Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass."
            >
              Node - sass version 4.12+
            </TargetBlank>
          </li>
          <li>
            <TargetBlank
              href="https://material-ui.com/"
              title="React components for faster and easier web development. Build your own design system, or start with Material Design."
            >
              Material UI v4.9
            </TargetBlank>
          </li>
          <li>
            <TargetBlank
              href="https://www.npmjs.com/package/fsevents"
              title="The FSEvents API in MacOS allows applications to register for notifications of changes to a given directory tree. It is a very fast and lightweight alternative to kqueue."
            >
              fsevents
            </TargetBlank>
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
            <TargetBlank
              href="https://v0.material-ui.com/#/"
              title="React components that implement Google's Material Design"
            >
              Material UI 0.x
            </TargetBlank>
          </li>
        </ul>
        <p>
          The initial Webpack build was 4 minutes. The build between developer
          changes was between 60–100 seconds
        </p>
        <SubTitle>The migration journey started with fsevents</SubTitle>
        <p>
          I'm impressed by: <strong>fsevents</strong> The library reduces the
          initial build from 4 minutes to 90 seconds. You need to add execute
          the following command:
        </p>
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
        <h2>Webpack 2 vs Webpack 4</h2>
        <p>
          The biggest road blocker was: Webpack 2. The whole configuration was
          too complex. The possible output were 0 and 1. 0 means: somewhere in
          the application has an error. I did a proposal: We need a new project.
          The project has ONLY one goal: The build process must be more
          descriptive.
        </p>
      </>
    )
  }
}

export default Content
