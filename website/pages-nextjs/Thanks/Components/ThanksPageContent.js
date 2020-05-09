import Slogan from '@ddanailov/styled/Slogan'
import Space from '@ddanailov/styled/Space'
import GithubSponsorship from '@thanks/Components/GithubSponsorship'

function List({title}) {
  return (
    <>
      <Slogan>{title}</Slogan>
      <ul>
        <li>
          <GithubSponsorship text="You?" />
        </li>
      </ul>
    </>
  )
}

function ThanksPageContent() {
  return (
    <>
      <Slogan>Thank you! 💖</Slogan>

      <p>
        I’m so thankful to all the wonderful people and companies supporting my
        open source work on
        <Space />
        <GithubSponsorship text="GitHub Sponsors" />
      </p>

      <Slogan>Sponsors</Slogan>
      <ul>
        <li>
          <GithubSponsorship text="You?" />
        </li>
      </ul>

      <List title="Platinum Supporters" />
      <List title="Gold Supporters" />
      <List title="Supporters" />
    </>
  )
}

export default ThanksPageContent
