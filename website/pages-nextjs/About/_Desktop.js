import dynamic from 'next/dynamic'

import Slogan from '@ddanailov/styled/Slogan'

import DesktopMenu from '@ddanailov/components/Menu/Desktop'
import {PageTemplate, PageHolder} from '@ddanailov/styled/layouts/Desktop'

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
  FannyAvatar,
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
  FannyInfo,
  FannyLetter,
} from '@about/Components/Testimonials'

import {
  TestimonialBody,
  TestimonialBodyCenter,
  RecommendationBody,
} from '@about/StyledComponents'

const MainFooter = dynamic(() => import('@ddanailov/components/MainFooter'))

const AboutPage = () => (
  <PageTemplate>
    <PageHolder>
      <DesktopMenu />

      <AboutMe />
      <Roles />

      <Slogan>Testimonials and Recommendations</Slogan>

      <TestimonialBodyCenter>
        <HenryAvatar />

        <RecommendationBody>
          <HenryLetter />
          <HenryInfo />
        </RecommendationBody>
      </TestimonialBodyCenter>

      <TestimonialBodyCenter>
        <FannyAvatar />

        <RecommendationBody>
          <FannyLetter />
          <FannyInfo />
        </RecommendationBody>
      </TestimonialBodyCenter>

      <TestimonialBody>
        <HeidiAvatar />

        <RecommendationBody>
          <HeidiLetter />

          <HeidiInfo />
        </RecommendationBody>
      </TestimonialBody>

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
        <BayuAvatar />

        <RecommendationBody>
          <BayuLetter />

          <BayuInfo />
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

      <MainFooter />
    </PageHolder>
  </PageTemplate>
)

export default AboutPage
