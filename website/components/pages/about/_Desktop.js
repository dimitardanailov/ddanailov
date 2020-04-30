import styled from 'styled-components'

import {heidi, ivelin, henry} from 'data/testimonials'

import TargetBlankLink from '@ddanailov/components/TargetBlankLink'

import Slogan from '@ddanailov/styled/Slogan'
import Avatar from '@ddanailov/components/Testimonials/Avatar'
import PersonInfo from '@ddanailov/components/Testimonials/PersonInfo'

import AboutMe from '@ddanailov/components/pages/about/AboutMe'
import Roles from '@ddanailov/components/pages/about/Roles'

// Heidi
import HeidiLetter from '@ddanailov/components/pages/about/Testimonials/Heidi/Letter'

// Ivelin
import IvelinLetter from '@ddanailov/components/pages/about/Testimonials/Ivelin/Letter'
import IvelinInfo from '@ddanailov/components/pages/about/Testimonials/Ivelin/Info'

// Tsvetan
import TsvetanLetter from '@ddanailov/components/pages/about/Testimonials/Tsvetan/Letter'

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

        <PersonInfo>
          <TargetBlankLink href={heidi.linkedin.profile} title={heidi.title}>
            {heidi.name}
          </TargetBlankLink>
          , {heidi.testimonialTitle}
        </PersonInfo>
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
        href="https://www.linkedin.com/in/mohamdouna/"
        title="Leading Mo Works team who can create, launch and scale your brand/tech product into Australia, APAC and MENA"
        src="https://media-exp1.licdn.com/dms/image/C5603AQGr82bhKnGFpA/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=L8kT_ALCB5apm2_FdMnVbLJ5rThEBlJEsu553OKH7wk"
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
      <p>
        "Even though my time with Dimitar was limited, I found him consistently
        pleasant, professional, and tackled all programming assignments with
        dedication and a view of total success. Besides being a joy to work
        with, Dimitar is a take - charge person who is able to present creative
        ideas and communicate the benefits. I highly recommend Dimitar for
        employment. He is a team player and would make a great asset of any
        organization."
      </p>

      <PersonInfo>
        <TargetBlankLink href="https://www.zoominfo.com/p/Ashton-Cunningham/1852035071">
          Ashton Cunningham
        </TargetBlankLink>
        , IT Manager Campion
      </PersonInfo>
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
        <p>
          Dimitar is an excellent programmer and soul of the team. I am glad
          that I be given the opportunity to recommend it because I have a very
          positive impression of his personality. We spent over a year and a
          half working together in 158ltd.com. and in that time he managed to
          pass me a lot of knowledge in the IT field. Whenever I needed help or
          advice he has responded and helped me. I'm sure Dimitar would be a
          great part of every team.
        </p>
        <PersonInfo>
          <TargetBlankLink
            href="https://www.linkedin.com/in/vladimirdimov1/"
            title="Vladimir Dimov - Mobile Application Developer at Prime Holding JSC"
          >
            Vladimir Dimov
          </TargetBlankLink>
          , Mobile Application Developer at Prime Holding JSC
        </PersonInfo>
      </RecommendationBody>
    </TestimonialBody>
  </>
)

export default AboutPage
