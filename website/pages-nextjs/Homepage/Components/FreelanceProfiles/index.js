import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import Title from '@ddanailov/styled/headers/paragraph/title/index'

function FreelanceProfiles() {
  return (
    <>
      <Title>Freelance:</Title>
      <p>I'm a top talent freelance. My freelance profiles are:</p>
      <ul>
        <li>
          <TargetBlankLink href="https://www.upwork.com/freelancers/~01b2b114640eb65554">
            UpWork
          </TargetBlankLink>
          : I've been working with Upwork since 2021. UpWork has helped to find
          my position as a IT Manager, GetCraft. I've worked with GetCraft
          almost an year. My profile has a badge: Rising Talent
        </li>
        <li>
          July, 2022 - present: I'm a member of{' '}
          <TargetBlankLink
            href="https://andela.com/"
            title=" The marketplace for technologists like Javascript, Blockchain, React, Nodejs"
          >
            Andela community
          </TargetBlankLink>
          .
        </li>
        <li>
          August, 2022 - present. I've a partnership relationship with{' '}
          <TargetBlankLink
            href="https://app.usebraintrust.com/talent/67420/"
            title="Full Stack Engineer"
          >
            Braintrust community
          </TargetBlankLink>
          .
        </li>
        <li>
          August, 2022 - present. I've been working with{' '}
          <TargetBlankLink
            href="https://app.9am.works/talent/dimitar-danailov"
            title="Software Engineer with Blockchain, Nodejs, Reactm Typescript experience"
          >
            9am
          </TargetBlankLink>
          .
        </li>
      </ul>
    </>
  )
}

export default FreelanceProfiles
