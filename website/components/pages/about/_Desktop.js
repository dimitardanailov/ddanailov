import styled from 'styled-components'

import Slogan from '@ddanailov/styled/Slogan'

import AboutMe from '@pages/components/about/AboutMe'
import Roles from '@pages/components/about/Roles'

// Heidi
import HeidiLetter from '@pages/components/about/Testimonials/Heidi/Letter'
import HeidiInfo from '@pages/components/about/Testimonials/Heidi/Info'
import HeidiAvatar from '@pages/components/about/Testimonials/Heidi/Avatar'

// Henry
import HenryLetter from '@pages/components/about/Testimonials/Henry/Letter'
import HenryInfo from '@pages/components/about/Testimonials/Henry/Info'
import HenryAvatar from '@pages/components/about/Testimonials/Henry/Avatar'

// Ivelin
import IvelinLetter from '@pages/components/about/Testimonials/Ivelin/Letter'
import IvelinInfo from '@pages/components/about/Testimonials/Ivelin/Info'
import IvelinAvatar from '@pages/components/about/Testimonials/Ivelin/Avatar'

// Mo
import MoLetter from '@pages/components/about/Testimonials/Mo/Letter'
import MoInfo from '@pages/components/about/Testimonials/Mo/Info'
import MoAvatar from '@pages/components/about/Testimonials/Mo/Avatar'

// Ashton
import AshtonLetter from '@pages/components/about/Testimonials/Ashton/Letter'
import AshtonInfo from '@pages/components/about/Testimonials/Ashton/Info'

// Hristo
import HristoAvatar from '@pages/components/about/Testimonials/Hristo/Avatar'
import HristoLetter from '@pages/components/about/Testimonials/Hristo/Letter'
import HristoInfo from '@pages/components/about/Testimonials/Hristo/Info'

// Tsvetan
import TsvetanAvatar from '@pages/components/about/Testimonials/Tsvetan/Avatar'
import TsvetanLetter from '@pages/components/about/Testimonials/Tsvetan/Letter'
import TsvetanInfo from '@pages/components/about/Testimonials/Tsvetan/Info'

// Vladimir
import VladimirAvatar from '@pages/components/about/Testimonials/Vladimir/Avatar'
import VladimirLetter from '@pages/components/about/Testimonials/Vladimir/Letter'
import VladimirInfo from '@pages/components/about/Testimonials/Vladimir/Info'

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
      <HeidiAvatar />

      <RecommendationBody>
        <HeidiLetter />

        <HeidiInfo />
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBodyCenter>
      <HenryAvatar />

      <RecommendationBody>
        <HenryLetter />
        <HenryInfo />
      </RecommendationBody>
    </TestimonialBodyCenter>

    <TestimonialBodyCenter>
      <IvelinAvatar />

      <RecommendationBody>
        <IvelinLetter />
        <IvelinInfo />
      </RecommendationBody>
    </TestimonialBodyCenter>

    <TestimonialBodyCenter>
      <MoAvatar />

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
      <HristoAvatar />
      <RecommendationBody>
        <HristoLetter />

        <HristoInfo />
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBody>
      <TsvetanAvatar />

      <RecommendationBody>
        <TsvetanLetter />
        <TsvetanInfo />
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBody>
      <VladimirAvatar />
      <RecommendationBody>
        <VladimirLetter />
        <VladimirInfo />
      </RecommendationBody>
    </TestimonialBody>
  </>
)

export default AboutPage
