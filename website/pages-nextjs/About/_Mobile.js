import MainMobileLayout from '@ddanailov/layouts/Mobile/MainMobileLayout'

import Slogan from '@ddanailov/styled/Slogan'

import {AboutMe, Roles} from '@about/Components'

// Avatars
import {
  HeidiAvatar,
  HenryAvatar,
  IvelinAvatar,
  MoAvatar,
  HristoAvatar,
  TsvetanAvatar,
  VladimirAvatar,
  BayuAvatar,
} from '@about/Components/Testimonials/Avatars'

import {
  HeidiLetter,
  HeidiInfo,
  HenryLetter,
  HenryInfo,
  IvelinLetter,
  IvelinInfo,
  MoLetter,
  MoInfo,
  AshtonLetter,
  AshtonInfo,
  HristoLetter,
  HristoInfo,
  TsvetanLetter,
  TsvetanInfo,
  VladimirLetter,
  VladimirInfo,
  BayuInfo,
  BayuLetter,
} from '@about/Components/Testimonials'

import {TestimonialBody, RecommendationBody} from '@about/StyledComponents'

const AboutPageMobile = () => (
  <>
    <AboutMe />
    <Roles />

    <Slogan>Testimonials and Recommendations</Slogan>

    <TestimonialBody>
      <BayuAvatar />

      <RecommendationBody>
        <BayuLetter />

        <BayuInfo />
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBody>
      <HeidiAvatar />

      <RecommendationBody>
        <HeidiLetter />

        <HeidiInfo />
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBody>
      <HenryAvatar />

      <RecommendationBody>
        <HenryLetter />
        <HenryInfo />
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBody>
      <IvelinAvatar />

      <RecommendationBody>
        <IvelinLetter />
        <IvelinInfo />
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBody>
      <MoAvatar />

      <RecommendationBody>
        <MoLetter />
        <MoInfo />
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBody>
      <AshtonLetter />
      <AshtonInfo />
    </TestimonialBody>

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

export default MainMobileLayout(AboutPageMobile)
