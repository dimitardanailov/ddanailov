import styled from 'styled-components'

import {heidi, ivelin, henry, mo, tsvetan, vladimir} from 'data/testimonials'

import TargetBlankLink from '@ddanailov/components/TargetBlankLink'

import Slogan from '@ddanailov/styled/Slogan'
import Avatar from '@ddanailov/components/Testimonials/Avatar'
import PersonInfo from '@ddanailov/components/Testimonials/PersonInfo'

import AboutMe from '@ddanailov/components/pages/about/AboutMe'
import Roles from '@ddanailov/components/pages/about/Roles'

// Heidi
import HeidiLetter from '@ddanailov/components/pages/about/Testimonials/Heidi/Letter'
import HeidiInfo from '@ddanailov/components/pages/about/Testimonials/Heidi/Info'

// Henry
import HenryLetter from '@ddanailov/components/pages/about/Testimonials/Henry/Letter'
import HenryInfo from '@ddanailov/components/pages/about/Testimonials/Henry/Info'

// Ivelin
import IvelinLetter from '@ddanailov/components/pages/about/Testimonials/Ivelin/Letter'
import IvelinInfo from '@ddanailov/components/pages/about/Testimonials/Ivelin/Info'

// Mo
import MoLetter from '@ddanailov/components/pages/about/Testimonials/Mo/Letter'
import MoInfo from '@ddanailov/components/pages/about/Testimonials/Mo/Info'

// Ashton
import AshtonLetter from '@ddanailov/components/pages/about/Testimonials/Ashton/Letter'
import AshtonInfo from '@ddanailov/components/pages/about/Testimonials/Ashton/Info'

// Tsvetan
import TsvetanLetter from '@ddanailov/components/pages/about/Testimonials/Tsvetan/Letter'
import TsvetanInfo from '@ddanailov/components/pages/about/Testimonials/Tsvetan/Info'

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
        <HenryLetter />
        <HenryInfo />
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
        <MoLetter />
        <MoInfo />
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
        href={tsvetan.linkedin.profile}
        src={tsvetan.linkedin.image}
        title={tsvetan.title}
      />

      <RecommendationBody>
        <TsvetanLetter />
        <TsvetanInfo />
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBody>
      <Avatar
        src={vladimir.linkedin.image}
        href={vladimir.linkedin.profile}
        title={vladimir.title}
      />
      <RecommendationBody>
        <VladimirLetter />
        <VladimirInfo />
      </RecommendationBody>
    </TestimonialBody>
  </>
)

export default AboutPage
