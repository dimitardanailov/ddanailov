import TargetBlankLink from '@ddanailov/components/TargetBlankLink'
import Keyword from '@ddanailov/components/Keyword'
import Title from '@ddanailov/styled/headers/paragraph/title/index'

function Certificates() {
  return (
    <>
      <Title>Certificates</Title>
      <ul>
        <li>
          August 2022 -{' '}
          <TargetBlankLink
            title="Foundations of Project Management. Authorized by Google"
            href="https://coursera.org/share/523871c5f5c5819beed1a81f64986c6f"
          >
            Foundations of Project Management. Authorized by Google;
          </TargetBlankLink>
        </li>
        <li>
          April 2019 -{' '}
          <TargetBlankLink
            title="Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning. Authorized by DeepLearning.AI"
            href="https://www.coursera.org/account/accomplishments/verify/D4RCDH33T3C3"
          >
            Introduction to TensorFlow for Artificial Intelligence, Machine
            Learning, and Deep Learning. Authorized by DeepLearning.AI;
          </TargetBlankLink>
        </li>
        <li>
          March 2016 -{' '}
          <TargetBlankLink
            href="https://university.mongodb.com/course_completion/9ca5d4d6826747d7a7a7875914a1f51e"
            title="M101JS: MongoDB for Node.js Developers. Authorized by MongoDB University"
          >
            M101JS: MongoDB for Node.js Developers. Authorized by MongoDB
            University;
          </TargetBlankLink>
        </li>
        <li>
          January 2016 -{' '}
          <TargetBlankLink
            href="https://www.coursera.org/account/accomplishments/verify/LYRPNBF53X55"
            title="Hadoop Platform and Application Framework. Authorized by University of California"
          >
            Hadoop Platform and Application Framework. Authorized by University
            of California;
          </TargetBlankLink>
        </li>
      </ul>
    </>
  )
}

export default Certificates
