import React from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

import Slogan from '@ddanailov/styled/Slogan'
import TargetBlank from '@ddanailov/components/TargetBlankLink'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import styled from 'styled-components'
import themes from '@ddanailov/styles/colors/light'

const Code = styled.code`
  display: flex;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  background-color: ${themes.secondary.main};
  color: ${themes.primary.main};
  padding: 0.5rem;
  width: 100%;
  border-radius: 2%;
`

function Step2() {
  // prettier-ignore
  const raw = 
`import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
   
function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));`

  return (
    <>
      <pre>
        <code className="language-javascript">{raw}</code>
      </pre>
    </>
  )
}

class Content extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    return (
      <>
        <Slogan>Material UI creating Custom List and List Item</Slogan>

        <p>
          <TargetBlank href="https://material-ui.com/components/lists/">
            Material UI
          </TargetBlank>{' '}
          is a great library but sometimes we need to extend the default
          behaviour.
        </p>

        <p>The article goals are:</p>
        <ul>
          <li>I'll show you how to install and import Material ui</li>
          <li>How we can create a custom List</li>
          <li>How we can create a custom ListItem</li>
        </ul>

        <p>Step 1: Material UI install command</p>

        <p>Each great javascript journey starts with npm</p>
        <pre>
          <code className="language-shell">{`npm i @material-ui/core`}</code>
        </pre>

        <p>Step 2: How to use Material UI List Component</p>

        <p>We need to import Material UI components:</p>
        <Step2 />
      </>
    )
  }
}

export default Content
