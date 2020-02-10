import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

import styled from 'styled-components'

const List = styled.ul`
  position: relative;

  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: row;
`

const ListItem = styled.li`
  position: relative;
  margin-right: 1rem;
`

function SocialIcons() {
  return (
    <div>
      <List>
        <ListItem>
          <a
            href="https://twitter.com/d_danailov"
            title="Dimitar Danailov: Twitter account"
            target="_blank"
          >
            <TwitterIcon fontSize="large" />
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://www.linkedin.com/in/ddanailov/"
            title="Dimitar Danailov: Twitter account"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://github.com/dimitardanailov"
            title="Dimitar Danailov: Github account"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </a>
        </ListItem>
      </List>
    </div>
  )
}

export default SocialIcons
