import styled from 'styled-components'

import TargetBlankLink from '@ddanailov/components/TargetBlankLink'

import MainLayout from '@ddanailov/layouts/MainLayout'
import Slogan from '@ddanailov/styled/Slogan'
import Avatar from '@ddanailov/components/Testimonials/Avatar'
import PersonInfo from '@ddanailov/components/Testimonials/PersonInfo'

const TestimonialBody = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const RecommendationBody = styled.div`
  position: relative;

  text-align: justify;
  margin: 0.5rem 0;
`

const RecommendationBodyRight = styled(RecommendationBody)`
  margin-left: 2rem;

  @media (max-width: 1024px) {
    margin-left: 0rem;
  }
`

const RecommendationBodyLeft = styled(RecommendationBody)`
  margin-right: 2rem;

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

    <section>
      <TestimonialBody>
        <Avatar
          href="https://www.linkedin.com/in/heidilundproductmanager/"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHGevnu6Z8NZw/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=X39amMwD-8dyLFsPSJSkjO55H6slKHW7viGqZWI24cw"
          title="Product Manager, Educational Software; Pragmatic Marketing Certified: Level VI"
        />

        <RecommendationBodyRight>
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
        </RecommendationBodyRight>
      </TestimonialBody>
    </section>

    <section>
      <TestimonialBody>
        <RecommendationBodyLeft>
          <p>
            "Dimitar Danailov led the development work on our primary project
            management and production application from 2013 to 2015. He and his
            team took over the responsibility for supporting and updating our
            existing application written in VB on ASP.NET, and they developed a
            new application written in C# on ASP.NET MVC. Both applications ran
            on Microsoft Azure and used a SQL database. The applications covered
            functionality ranging from CRM, a vendor database, production tasks
            for our operations team working on translation and localisation
            projects, and finance. I was impressed by Dimitar’s technical skills
            – as a solutions architect designing both front-end and back-end,
            his efficient coding and his ability to propose elegant solutions to
            meet our requirements. Dimitar was proactive in suggesting new
            technical approaches to overcome our particular challenges and I
            appreciated his willingness to research new technologies
            specifically for our project. Dimitar displayed admirable personal
            commitment in investing his personal time to work on our project and
            I considered him a true partner in our endeavour. I have no
            hesitation in recommending Dimitar and I am confident that he will
            be an asset to any employer."
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
        </RecommendationBodyLeft>

        <Avatar
          href="https://www.linkedin.com/in/henryclough/"
          title="Chairperson, Asian Absolute | Translation and Localisation Services"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQFiUqHZUWET4g/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=E_NKDtbuUNFi0ZKoIJ3NP3xUfDXc133R0b6O-xTIR_8"
        />
      </TestimonialBody>
    </section>

    <section>
      <TestimonialBody>
        <Avatar
          href="https://www.linkedin.com/in/mohamdouna/"
          title="Leading Mo Works team who can create, launch and scale your brand/tech product into Australia, APAC and MENA"
          src="https://media-exp1.licdn.com/dms/image/C5603AQGr82bhKnGFpA/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=L8kT_ALCB5apm2_FdMnVbLJ5rThEBlJEsu553OKH7wk"
        />

        <RecommendationBodyRight>
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
            for the projects we’ve worked together on. As a company, we are
            fully satisfied with the final product that Wollow has delivered.
            Based on our experience, we would recommend to anyone interested the
            services of Wollow since they are trusted and valuable long-term
            business partner.
          </p>

          <PersonInfo>
            <TargetBlankLink
              href="https://www.linkedin.com/in/mohamdouna/"
              title="Leading Mo Works team who can create, launch and scale your brand/tech product into Australia, APAC and MENA"
            >
              Mo Hamdouna
            </TargetBlankLink>
            , - Founder, Creative Director
          </PersonInfo>
        </RecommendationBodyRight>
      </TestimonialBody>
    </section>

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

      <PersonInfo>Ashton Cunningham, IT Manager Campion</PersonInfo>
    </section>

    <section>
      <TestimonialBody>
        <RecommendationBodyLeft>
          <p>
            "Dimitar is an outstanding mentor. His guidance helped me progress
            with Ruby on Rails with ease and discover more about developing
            web-based software. Even after my internship at 158ltd ended, he
            continued assisting me with advice. Definitely a great person to
            learn from and to work with!"
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
        </RecommendationBodyLeft>

        <Avatar
          title="Software Engineer at Avrios | Former Founder of Centroida"
          src="https://media-exp1.licdn.com/dms/image/C5603AQGyvzQ4DWJMoA/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=JEKmMKOXzpsPUkhmhbrVFvwxA6EwBYJMsdh9kF4H-pw"
          href="https://www.linkedin.com/in/hggeorgiev/"
        />
      </TestimonialBody>
    </section>

    <section>
      <TestimonialBody>
        <Avatar
          href="https://www.linkedin.com/in/cvetan-himchev-7134492b/"
          src="https://media-exp1.licdn.com/dms/image/C5603AQE277jEMcn4PQ/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=7gcVVJgkA20ikSr1g8TvuniZmh4icaZfcvBrhJ4clj4"
          title="Cvetan Himchev - Senior Application Developer at Vertinity LTD"
        />

        <RecommendationBodyRight>
          <p>
            "Dimitar is a personable individual that gets on well with those
            around him. He is focused and dedicated to producing his very best
            at all times. He has shown that he is able to deal with uncertainty
            and dislocation. He is very good software engineer knows a lot of
            technologies. Also great teamleader. I recommend him highly – he
            will not let you down!"
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
        </RecommendationBodyRight>
      </TestimonialBody>
    </section>

    <section>
      <TestimonialBody>
        <RecommendationBodyLeft>
          <p>
            Dimitar is an excellent programmer and soul of the team. I am glad
            that I be given the opportunity to recommend it because I have a
            very positive impression of his personality. We spent over a year
            and a half working together in 158ltd.com. and in that time he
            managed to pass me a lot of knowledge in the IT field. Whenever I
            needed help or advice he has responded and helped me. I'm sure
            Dimitar would be a great part of every team.
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
        </RecommendationBodyLeft>
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/C5103AQFFyBz1SbLkOA/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=uhMw85xRVWiK6Fmv6SJ_i2GcyfEXs19dBd5giJdWYts"
          href="https://www.linkedin.com/in/vladimirdimov1/"
          title="Vladimir Dimov - Mobile Application Developer at Prime Holding JSC"
        />
      </TestimonialBody>
    </section>
  </>
)

export default MainLayout(AboutPage)
