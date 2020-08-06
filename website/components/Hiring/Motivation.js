import TargetBlank from '@ddanailov/components/TargetBlankLink'

import styled from 'styled-components'

import themes from '@ddanailov/styles/colors/light'

const Title = styled.div`
  position: relative;

  font-size: 1.2rem;
  font-weight: bold;
`

const Strong = styled.span`
  position: relative;

  font-style: italic;
  font-weight: bold;
  color: ${themes.secondary.light};
`

function HiringMotivation() {
  return (
    <>
      <Title>Why me ?</Title>
      <p>
        My personal and professional goal is: My today version to be with 1%
        better if you compare with my "previous version". I'm constantly looking
        how the solution can be elegant. If your business needs are
      </p>
      <ul>
        <li>React Developer with expertise in large applications;</li>
        <li>Web Performance and offline compatibility;</li>
        <li>SEO consultation;</li>
        <li>Immutable data structures;</li>
        <li>Agile and Kanben expertise;</li>
        <li>Junior or middle levels trainings;</li>
        <li>Cloud security and web application monitoring;</li>
        <li>
          Front - end, Backend, Database or Cloud Archicture consultation;
        </li>
      </ul>
      <p>
        <Strong>I'd like to speak with you!</Strong> Please let me know when you
        would be available for an initial 15 - 30 minutes call (free of charge),
        so that we can discuss your project in more detail and identify how my
        skill-set will work best for you. I'd like to share a quick link to my
        calendar:{' '}
        <TargetBlank
          href="https://calendly.com/danailov-consulting/15min"
          title="Book your free session"
        >
          https://calendly.com/danailov-consulting/15min
        </TargetBlank>
      </p>
    </>
  )
}

export default HiringMotivation
