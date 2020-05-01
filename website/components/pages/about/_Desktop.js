import styled from 'styled-components'

import {heidi, ivelin, henry, mo} from 'data/testimonials'

import TargetBlankLink from '@ddanailov/components/TargetBlankLink'

import Slogan from '@ddanailov/styled/Slogan'
import Avatar from '@ddanailov/components/Testimonials/Avatar'
import PersonInfo from '@ddanailov/components/Testimonials/PersonInfo'

import AboutMe from '@ddanailov/components/pages/about/AboutMe'
import Roles from '@ddanailov/components/pages/about/Roles'

// Heidi
import HeidiLetter from '@ddanailov/components/pages/about/Testimonials/Heidi/Letter'
import HeidiInfo from '@ddanailov/components/pages/about/Testimonials/Heidi/Info'

// Ivelin
import IvelinLetter from '@ddanailov/components/pages/about/Testimonials/Ivelin/Letter'
import IvelinInfo from '@ddanailov/components/pages/about/Testimonials/Ivelin/Info'

// Ashton
import AshtonLetter from '@ddanailov/components/pages/about/Testimonials/Ashton/Letter'
import AshtonInfo from '@ddanailov/components/pages/about/Testimonials/Ashton/Info'

// Tsvetan
import TsvetanLetter from '@ddanailov/components/pages/about/Testimonials/Tsvetan/Letter'

// Vladimir
import VladimirLetter from '@ddanailov/components/pages/about/Testimonials/Vladimir/Letter'
import VladimirInfo from '@ddanailov/components/pages/about/Testimonials/Vladimir/Info'

const TestimonialBody = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;

  margin: 1rem 0;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const TestimonialBodyCenter = styled(TestimonialBody)`
  align-items: center;
`

const RecommendationBody = styled.div`
  position: relative;

  text-align: justify;

  margin-left: 2rem;

  @media (max-width: 1024px) {
    margin-left: 0rem;
  }
`

const AboutPage = () => (
  <>
    <AboutMe />
    <Roles />

    <Slogan>Testimonials and Recommendations</Slogan>

    <TestimonialBody>
      <Avatar
        href={heidi.linkedin.profile}
        src={heidi.linkedin.image}
        title={heidi.title}
      />

      <RecommendationBody>
        <HeidiLetter />

        <HeidiInfo />
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBodyCenter>
      <Avatar
        href={henry.linkedin.profile}
        title={henry.title}
        src={henry.linkedin.image}
      />

      <RecommendationBody>
        {henry.component}

        <PersonInfo>
          <TargetBlankLink href={henry.linkedin.profile} title={henry.title}>
            Henry Clough
          </TargetBlankLink>
          , {henry.title}
        </PersonInfo>
      </RecommendationBody>
    </TestimonialBodyCenter>

    <TestimonialBodyCenter>
      <Avatar
        href={ivelin.linkedin.profile}
        title={ivelin.title}
        src={ivelin.linkedin.image}
      />

      <RecommendationBody>
        <IvelinLetter />
        <IvelinInfo />
      </RecommendationBody>
    </TestimonialBodyCenter>

    <TestimonialBodyCenter>
      <Avatar
        href={mo.linkedin.profile}
        title={mo.linkedin.title}
        src={mo.linkedin.image}
      />

      <RecommendationBody>
        <p>
          It is with great pleasure that I write this letter of recommendation
          on behalf of (
          <a
            href="https://wollow-soft.com/en-US/"
            title="Software Developer and CTO in Wollow soft"
            rel="noopener"
            target="_blank"
          >
            Wollow soft
          </a>
          ), a knowledgeable, dynamic, and flexible technology partner. What
          impressed us most about Wollow’s approach to our project was their
          vision and leadership, commitment to the customer, insistence on
          setting realistic goals, with a succinct timelines, organization and
          project management, education and coaching. Bar none, their cutting
          edge technical expertise is of superior quality, delivered with a
          business-like approach. But it was the “everything else” that
          completed the package. Wollow’s success is due to its winning team.
          The initial vision, leadership and project management of the CEO{' '}
          <a
            href="https://www.linkedin.com/in/ivelinivanov158/"
            title="CEO - Wollow Soft"
            rel="noopener"
            target="_blank"
          >
            Ivelin Ivanov
          </a>{' '}
          paved the way for our project’s success, and the technical expertise
          of the CTO Dimitar Danailov has provided a state-of-the-art platform
          for the projects we’ve worked together on. As a company, we are fully
          satisfied with the final product that Wollow has delivered. Based on
          our experience, we would recommend to anyone interested the services
          of Wollow since they are trusted and valuable long-term business
          partner.
        </p>

        <PersonInfo>
          <TargetBlankLink
            href="https://www.linkedin.com/in/mohamdouna/"
            title="Leading Mo Works team who can create, launch and scale your brand/tech product into Australia, APAC and MENA"
          >
            Mo Hamdouna
          </TargetBlankLink>
          , Founder, Creative Director
        </PersonInfo>
      </RecommendationBody>
    </TestimonialBodyCenter>

    <section>
      <AshtonLetter />
      <AshtonInfo />
    </section>

    <TestimonialBody>
      <Avatar
        title="Software Engineer at Avrios | Former Founder of Centroida"
        src="https://media-exp1.licdn.com/dms/image/C5603AQGyvzQ4DWJMoA/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=JEKmMKOXzpsPUkhmhbrVFvwxA6EwBYJMsdh9kF4H-pw"
        href="https://www.linkedin.com/in/hggeorgiev/"
      />
      <RecommendationBody>
        <p>
          "Dimitar is an outstanding mentor. His guidance helped me progress
          with Ruby on Rails with ease and discover more about developing
          web-based software. Even after my internship at 158ltd ended, he
          continued assisting me with advice. Definitely a great person to learn
          from and to work with!"
        </p>

        <PersonInfo>
          <TargetBlankLink
            title="Software Engineer at Avrios | Former Founder of Centroida"
            href="https://www.linkedin.com/in/hggeorgiev/"
          >
            Hristo Georgiev
          </TargetBlankLink>
          , Software Engineer at Avrios
        </PersonInfo>
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBody>
      <Avatar
        href="https://www.linkedin.com/in/cvetan-himchev-7134492b/"
        src="https://media-exp1.licdn.com/dms/image/C5603AQE277jEMcn4PQ/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=7gcVVJgkA20ikSr1g8TvuniZmh4icaZfcvBrhJ4clj4"
        title="Cvetan Himchev - Senior Application Developer at Vertinity LTD"
      />

      <RecommendationBody>
        <TsvetanLetter />

        <PersonInfo>
          <TargetBlankLink
            href="https://www.linkedin.com/in/cvetan-himchev-7134492b/"
            title="Cvetan Himchev - Senior Application Developer at Vertinity LTD"
          >
            Cvetan Himchev
          </TargetBlankLink>
          , Senior Application Developer at Vertinity LTD
        </PersonInfo>
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBody>
      <Avatar
        src="https://media-exp1.licdn.com/dms/image/C5103AQFFyBz1SbLkOA/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=uhMw85xRVWiK6Fmv6SJ_i2GcyfEXs19dBd5giJdWYts"
        href="https://www.linkedin.com/in/vladimirdimov1/"
        title="Vladimir Dimov - Mobile Application Developer at Prime Holding JSC"
      />
      <RecommendationBody>
        <VladimirLetter />
        <VladimirInfo />
      </RecommendationBody>
    </TestimonialBody>
  </>
)

export default AboutPage
