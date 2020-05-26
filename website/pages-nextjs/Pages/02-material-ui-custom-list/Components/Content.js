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

function Content() {
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

      <p>The instal command is trivial:</p>
      <Code>npm i @material-ui/core</Code>

      <p>Step 2: How to use Material UI List Component</p>

      <p>We need to import Material UI components:</p>
      <Code>
        <span>import List from '@material-ui/core/List';</span>
        <span>import ListItem from '@material-ui/core/ListItem';</span>
      </Code>
    </>
  )
}

export default Content
