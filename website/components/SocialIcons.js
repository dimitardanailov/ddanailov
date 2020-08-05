import dynamic from 'next/dynamic'

const TwitterIcon = dynamic(() => import('@material-ui/icons/Twitter'))
const LinkedInIcon = dynamic(() => import('@material-ui/icons/LinkedIn'))
const GitHubIcon = dynamic(() => import('@material-ui/icons/GitHub'))
const EmailRoundedIcon = dynamic(() =>
  import('@material-ui/icons/EmailRounded'),
)

import styled from 'styled-components'

const List = styled.ul`
  position: relative;

  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: row;
  height: 41px;

  justify-content: center;
`

const ListItem = styled.li`
  position: relative;
  margin-right: 1rem;

  max-width: 50px;
  overflow: hidden;
`

function SocialIcons() {
  return (
    <div>
      <List>
        <ListItem>
          <a
            href="https://twitter.com/d_danailov"
            title="Dimitar Danailov: Twitter account"
            rel="noopener"
            target="_blank"
          >
            <TwitterIcon fontSize="large" />
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://www.linkedin.com/in/ddanailov/"
            title="Dimitar Danailov: Linkedin account"
            rel="noopener"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://github.com/dimitardanailov"
            title="Dimitar Danailov: Github account"
            rel="noopener"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </a>
        </ListItem>
        <ListItem>
          <a
            href="mailto:dimityr.danailov@gmail.com"
            title="Javascript and Cloud consulting"
          >
            <EmailRoundedIcon fontSize="large" />
          </a>
        </ListItem>
      </List>
    </div>
  )
}

export default SocialIcons
