import styled from 'styled-components'

import {ivelin} from 'data/testimonials'

import TargetBlankLink from '@ddanailov/components/TargetBlankLink'

import Slogan from '@ddanailov/styled/Slogan'
import Avatar from '@ddanailov/components/Testimonials/Avatar'
import PersonInfo from '@ddanailov/components/Testimonials/PersonInfo'

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
    <Slogan>Dimitar Danailov</Slogan>

    <p>
      Remote consultant / Full stack Web Developer with more than 10 years of
      profesional experience
    </p>

    <ul>
      <li>
        Fine with both front-end (React.js, Native web components, D3.js,
        Polymer and SPA) and back-end(Nodejs, Go)
      </li>
      <li>Amazon web services, Azure and Google Cloud are my best friends</li>
      <li>Creating software is my hobby</li>
      <li>Mentorship: I love to share my experience with the world</li>
      <li>I love open source and Stackoverflow</li>
      <li>I'm a guy with good self - education discipline</li>
    </ul>

    <Slogan>Consultant / Javascript Developer</Slogan>

    <ul>
      <li>
        Present Remote consultant in{' '}
        <a
          href="https://getcraft.com/"
          title="Remote consultant in GetCraft"
          rel="noopener"
          target="_blank"
        >
          GetCraft
        </a>{' '}
        and
        <a
          href="https://asianabsolute.com/"
          title="Remote consultant in Asian Absolute"
          rel="noopener"
          target="_blank"
        >
          Asian Absolute
        </a>
      </li>
      <li>
        Former software architect in{' '}
        <a
          href="https://mentormate.com/"
          title="Software architect in MentorMate"
          rel="noopener"
          target="_blank"
        >
          Mentormate
        </a>
      </li>
      <li>
        Former Developer and CTO in{' '}
        <a
          href="https://wollow-soft.com/en-US/"
          title="Software Developer and CTO in Wollow soft"
          rel="noopener"
          target="_blank"
        >
          Wollow soft
        </a>
      </li>
      <li>
        Passion to work with React, Nodejs, Go, Amazon Web Services, Azure,
        Google Cloud
      </li>
      <li>
        Experience with Remote teams: (US, UK, Australia, Indonesia, Singapore)
      </li>
      <li>Encourage clear code, tests, and good documentation.</li>
    </ul>

    <Slogan>Testimonials and Recommendations</Slogan>

    <TestimonialBody>
      <Avatar
        href="https://www.linkedin.com/in/heidilundproductmanager/"
        src="https://media-exp1.licdn.com/dms/image/C4E03AQHGevnu6Z8NZw/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=X39amMwD-8dyLFsPSJSkjO55H6slKHW7viGqZWI24cw"
        title="Product Manager, Educational Software; Pragmatic Marketing Certified: Level VI"
      />

      <RecommendationBody>
        <p>
          "Dimitar helped to build a new solution for a current product that
          needed revisions based on usage in a newer OS. He worked with our
          enterprise architect and a dedicated dev team and QA team to define
          requirements, ask questions, and to think ahead of our solution. He
          was punctual, positive, and helped to drive the process forward on a
          daily basis. Thanks for your help, Dimitar!"
        </p>

        <PersonInfo>
          <TargetBlankLink
            href="https://www.linkedin.com/in/heidilundproductmanager/"
            title="Product Manager, Educational Software; Pragmatic Marketing Certified: Level VI"
          >
            Heidi Lund
          </TargetBlankLink>
          , Associate Product Manager at Questar Assessment Inc.
        </PersonInfo>
      </RecommendationBody>
    </TestimonialBody>

    <TestimonialBodyCenter>
      <Avatar
        href="https://www.linkedin.com/in/henryclough/"
        title="Chairperson, Asian Absolute | Translation and Localisation Services"
        src="https://media-exp1.licdn.com/dms/image/C4E03AQFiUqHZUWET4g/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=E_NKDtbuUNFi0ZKoIJ3NP3xUfDXc133R0b6O-xTIR_8"
      />

      <RecommendationBody>
        <p>
          "Dimitar Danailov led the development work on our primary project
          management and production application from 2013 to 2015. He and his
          team took over the responsibility for supporting and updating our
          existing application written in VB on ASP.NET, and they developed a
          new application written in C# on ASP.NET MVC. Both applications ran on
          Microsoft Azure and used a SQL database. The applications covered
          functionality ranging from CRM, a vendor database, production tasks
          for our operations team working on translation and localisation
          projects, and finance. I was impressed by Dimitar’s technical skills –
          as a solutions architect designing both front-end and back-end, his
          efficient coding and his ability to propose elegant solutions to meet
          our requirements. Dimitar was proactive in suggesting new technical
          approaches to overcome our particular challenges and I appreciated his
          willingness to research new technologies specifically for our project.
          Dimitar displayed admirable personal commitment in investing his
          personal time to work on our project and I considered him a true
          partner in our endeavour. I have no hesitation in recommending Dimitar
          and I am confident that he will be an asset to any employer."
        </p>

        <PersonInfo>
          <TargetBlankLink
            href="https://www.linkedin.com/in/henryclough/"
            title="Chairperson, Asian Absolute | Translation and Localisation Services"
          >
            Henry Clough
          </TargetBlankLink>
          , Managing Director Asian Absolute
        </PersonInfo>
      </RecommendationBody>
    </TestimonialBodyCenter>

    <TestimonialBodyCenter>
      <Avatar
        href={ivelin.linkedin.profile}
        title={ivelin.linkedin.title}
        src={ivelin.linkedin.image}
      />

      <RecommendationBody>
        <p>
          I am writing this recommendation for Dimitar Danailov with great
          pleasure and respect. Dimitar has worked for me and with me for more
          than five years in 158Ltd. He has started as programmer and passed all
          the levels to CTO in the last year. In terms of technical skills, he
          has an undeniable qualification, but for me and for the company he was
          highly esteemed for his loyalty and devotion. He is a person with whom
          I have worked with pleasure and I have had unreserved confidence in
          him, since we have managed more than 100 projects in time and he has
          proven his competence and his ability to work on time and with
          quality. Rarely, we can meet people strongly devoted to their work,
          however Dimitar is one of them, and the priceless thing for him is
          that he transfers his energy and knowledge to the team, motivates them
          and he is one good example.
        </p>
        <p>
          Since the beginning he has demonstrated a strict compliance to the
          working processes and rules of the company. By taking the position of
          CTO in 158Ltd. Together with his help we have built the team from the
          base of three programmers to the current 28. Over the past years, we
          have participated in many risky projects and in his face I have always
          had a confidential and pragmatic partner in making quick and right
          decisions
        </p>
        <p>
          In conclusion, let me say that without hesitation I recommend Dimitar
          Danailov for the position lead programmer, related to software
          development. I am sure that he is going to be an invaluable asset for
          your organization. If you would like to discuss further my opinion and
          assessment of Dimitar, please do not hesitate to contact me
        </p>
        <PersonInfo>
          <TargetBlankLink
            href={ivelin.linkedin.profile}
            title={ivelin.linkedin.title}
          >
            {ivelin.name}
          </TargetBlankLink>
          , {ivelin.linkedin.title}
        </PersonInfo>
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
        <p>
          "Dimitar is a personable individual that gets on well with those
          around him. He is focused and dedicated to producing his very best at
          all times. He has shown that he is able to deal with uncertainty and
          dislocation. He is very good software engineer knows a lot of
          technologies. Also great teamleader. I recommend him highly – he will
          not let you down!"
        </p>

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
