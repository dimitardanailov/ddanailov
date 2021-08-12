import Link from 'next/link'
import Keyword from './Keyword'

function PersonalStory() {
  return (
    <div>
      <div>
        My professional career started twelve years ago. For this period I
        "visited" a significant amount of kingdoms 👑. My roles were "warrior"
        (backend developer), "engineer" (front - end developer), "magician"
        (team leader and software architect), "the assassin" (freelancer /
        <Keyword word="remote contractor" />) and even the "main officer" (CTO).
        When I worked like a warrior 💪: I wrote a significant amount of scripts
        which automated some boring repetitive tasks for my stakeholders and the
        end - users. To be an engineer 🛠 is an awesome job because your main
        focus is creating beautiful and helpful instruments. These instruments
        reduced the main pain of each system: Adding, filtering data and state
        management. The magician role 🧙‍♀️ was a tough and motivational task in my
        career. My leadership skills cut the deadlines. The source code quality
        was improved. The business won several important contracts. My skills as
        an assassin 🔪 increased the company revenue. I've confident to work if
        the deadlines are urgent.
      </div>
      <p>
        My winner mentality gave me an opportunity to work with remote teams in
        Israel, Indonesia, Singapore, US, Australia, Russia, Ukraine, UK,
        Bulgaria.{' '}
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
