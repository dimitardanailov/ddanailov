import Link from 'next/link'
import Keyword from './Keyword'

function PersonalStory() {
  return (
    <div>
      <div>
        My personal journey began ten years ago. For this period I "visited" a
        significant amount of kingdoms 👑. My roles were "warrior" (backend
        developer), "engineer" (front - end developer), "magician" (team leader
        and software architect), "the assassin" (freelancer /
        <Keyword word="remote contractor" />) and even the "main officer" (CTO).
      </div>
      <div>
        When I worked like a warrior 💪 I wrote a significant amount of scripts
        which automated some boring repetitive tasks for my stakeholders and the
        end - users.
      </div>
      <div>
        To be an engineer 🛠 is an awesome job because your main focus is
        creating beautiful and helpful instruments which reduce the main pain of
        each system: Adding or filtering data.
      </div>
      <div>
        The magician role 🧙‍♀️ was a tough and motivational task. My leadership
        skills cut the deadlines, improve code quality and the final result was:
        strong and long partnership.
      </div>
      <div>
        My skills as an assassin 🔪 increased the company revenue. I’m not
        afraid to work until midnight. I've confident to work if the deadlines
        are urgent.
      </div>
      <Link href="/about">
        <a title="Dimitar Danailov: Portfolio details">
          If you want to learn more about me: Please visit the second chapter of
          my book.
        </a>
      </Link>
    </div>
  )
}

export default PersonalStory
