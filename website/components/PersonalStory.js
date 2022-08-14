import Link from 'next/link'
import Keyword from './Keyword'

function PersonalStory() {
  return (
    <div>
      <div>
        My professional journey began twelve years ago. During these years I
        have “visited” a significant number of Kingdoms 👑. My roles were:
        “Warrior” (backend developer), “Engineer” (frontend developer),
        "Magician" (<Keyword word="team leader" />,{' '}
        <Keyword word="software architect" />,{' '}
        <Keyword word="blockchain staff engineer" />,{' '}
        <Keyword word="Software Engineering Manager" />
        ), "The assassin" (freelancer / <Keyword word="remote contractor" />)
        and even the "Main officer" (CTO). While I was a Warrior 💪: I have
        written a significant amount of scripts which automated some boring,
        repetitive tasks for my stakeholders and the end - users. To be an
        Engineer 🛠 is an awesome job because your main focus is creating
        beautiful and helpful instruments. The components reduce the main pain
        for each system: Filtering data, Adding data, Updating Data, Data
        Visualization. To be a Magician 🧙‍♀️ was a tough and motivational task in
        my career. My leadership skills cut the deadlines, improved code quality
        and the final result was: strong and long partnership. My skills as an
        assassin 🔪 increased the company revenue. I've confident to work on
        several complicated projects.
      </div>
      <p>
        My winner mentality gave me an opportunity to work with remote teams in
        US, Israel, Indonesia, Singapore, Vietnam, Turkey, Australia, Russia,
        Ukraine, UK, Bulgaria.{' '}
        <Link href="/about#about-testimonials-recommendations">
          <a title="Dimitar Danailov: Portfolio details">
            I received several five stars reviews from stakeholders, product
            managers and devmates.
          </a>
        </Link>
      </p>
    </div>
  )
}

export default PersonalStory
