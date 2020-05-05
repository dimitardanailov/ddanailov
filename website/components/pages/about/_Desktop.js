import styled from '@ddanailov/components/Pages/about/styled-components'

import Slogan from '@ddanailov/components/Pages/about/@ddanailov/styled/Slogan'

import AboutMe from '@ddanailov/components/Pages/about/AboutMe'
import Roles from '@ddanailov/components/Pages/about/Roles'

// Heidi
import HeidiLetter from '@ddanailov/components/Pages/about/Testimonials/Heidi/Letter'
import HeidiInfo from '@ddanailov/components/Pages/about/Testimonials/Heidi/Info'
import HeidiAvatar from '@ddanailov/components/Pages/about/Testimonials/Heidi/Avatar'

// Henry
import HenryLetter from '@ddanailov/components/Pages/about/Testimonials/Henry/Letter'
import HenryInfo from '@ddanailov/components/Pages/about/Testimonials/Henry/Info'
import HenryAvatar from '@ddanailov/components/Pages/about/Testimonials/Henry/Avatar'

// Ivelin
import IvelinLetter from '@ddanailov/components/Pages/about/Testimonials/Ivelin/Letter'
import IvelinInfo from '@ddanailov/components/Pages/about/Testimonials/Ivelin/Info'
import IvelinAvatar from '@ddanailov/components/Pages/about/Testimonials/Ivelin/Avatar'

// Mo
import MoLetter from '@ddanailov/components/Pages/about/Testimonials/Mo/Letter'
import MoInfo from '@ddanailov/components/Pages/about/Testimonials/Mo/Info'
import MoAvatar from '@ddanailov/components/Pages/about/Testimonials/Mo/Avatar'

// Ashton
import AshtonLetter from '@ddanailov/components/Pages/about/Testimonials/Ashton/Letter'
import AshtonInfo from '@ddanailov/components/Pages/about/Testimonials/Ashton/Info'

// Hristo
import HristoAvatar from '@ddanailov/components/Pages/about/Testimonials/Hristo/Avatar'
import HristoLetter from '@ddanailov/components/Pages/about/Testimonials/Hristo/Letter'
import HristoInfo from '@ddanailov/components/Pages/about/Testimonials/Hristo/Info'

// Tsvetan
import TsvetanAvatar from '@ddanailov/components/Pages/about/Testimonials/Tsvetan/Avatar'
import TsvetanLetter from '@ddanailov/components/Pages/about/Testimonials/Tsvetan/Letter'
import TsvetanInfo from '@ddanailov/components/Pages/about/Testimonials/Tsvetan/Info'

// Vladimir
import VladimirAvatar from '@ddanailov/components/Pages/about/Testimonials/Vladimir/Avatar'
import VladimirLetter from '@ddanailov/components/Pages/about/Testimonials/Vladimir/Letter'
import VladimirInfo from '@ddanailov/components/Pages/about/Testimonials/Vladimir/Info'

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
