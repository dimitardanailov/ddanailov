import styled from 'styled-components'

import Keyword from '@ddanailov/components/Keyword'
import Space from '@ddanailov/styled/Space'

const BulletPoint = styled.span`
  position: relative;

  font-weight: bold;
  font-size: 1.2rem;
  font-style: italic;

  @media (max-width: 1024px) {
    text-align: center;
  }
`

function Henry() {
  return (
    <>
      <BulletPoint>#1 (Year: 2020)</BulletPoint>
      <p>
        For 7 years Dimitar masterminded the development of the web app which I
        used to run most aspects of my language services business. We were not
        an easy client but he found an elegant solution for each one of the
        challenges which our business threw at him. He imposed structure and
        efficiency on our in-house, agency and freelance dev teams and
        introduced a series of new tools and technologies to make the app more
        resilient and effective. He's an accomplished software architect but he
        doesn't hesitate to roll his sleeves up and debug code in the middle of
        the night when that's what's needed. Dimitar is a highly intelligent and
        knowledgeable professional with an exemplary work ethic.
      </p>
      <BulletPoint>#2 (Year: 2015)</BulletPoint>
      <p>
        "Dimitar Danailov led the development work on our primary project
        management and production application from 2013 to 2015. He and his team
        took over the responsibility for supporting and updating our existing
        application written in VB on ASP.NET, and they developed a new
        application written in C# on ASP.NET MVC. Both applications ran on{' '}
        <Keyword word="Microsoft Azure" /> and used a SQL database. The
        applications covered functionality ranging from CRM, a vendor database,
        production tasks for our operations team working on translation and
        localisation projects, and finance. I was impressed by Dimitar’s
        technical skills – as a <Keyword word="solutions architect" /> designing
        both
        <Space />
        <Keyword word="front-end" />
        <Space />
        and
        <Space />
        <Keyword word="back-end" />, his efficient coding and his ability to
        propose elegant solutions to meet our requirements. Dimitar was
        proactive in suggesting new technical approaches to overcome our
        particular challenges and I appreciated his willingness to research new
        technologies specifically for our project. Dimitar displayed admirable
        personal commitment in investing his personal time to work on our
        project and I considered him a true partner in our endeavour. I have no
        hesitation in recommending Dimitar and I am confident that he will be an
        asset to any employer."
      </p>
    </>
  )
}

export default Henry
