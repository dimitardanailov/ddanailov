/* eslint-disable react/jsx-no-target-blank */
function Home() {
  return (
    <div>
      <h1>Dear Guest,</h1>
      <p>
        Founder of #Javascript Consulting Company. Open source lover and
        contributor:
        <a href="https://github.com/firefox-devtools/debugger" target="_blank">
          @FirefoxDevTools
        </a>
      </p>
      <p>I'm a consultant, a mentor, and I love open source software.</p>
      1. Clients 2. Client feedback 3. Mentorship 4. Mentorship feedback 5. Open
      source projects
      <p>Projects:</p>
      <ul>
        <li>
          <a
            href="https://github.com/dimitardanailov/gmail-helper"
            target="_blank"
            title="Native web componets consultant"
          >
            Gmail Helper
          </a>
          : Gmail helper creates gmail labels and features. Technologies: Custom
          Elements v1, Redux, Webpack, Lerna, Mocha, Chai, Karma
        </li>
        <li>
          <a
            href="https://github.com/dimitardanailov/tantalus"
            title="Nodejs consultant"
            target="_blank"
          >
            Tantalus
          </a>
          is a Nodejs Microservices application. Project uploads big streams
          from custom cloud provider to AWS. Tantalus uses: NodeServer
          Generator, routing-controllers, tus.io, Typescript.
        </li>
        <li>
          <a
            href="https://github.com/dimitardanailov/push-notifications"
            title="Push notification demo"
            target="_blank"
          >
            Push notification playground
          </a>
        </li>
        <li>
          <a
            href="https://github.com/dimitardanailov/react-components"
            title="React playground"
            target="_blank"
          >
            React components
          </a>
        </li>
      </ul>
      <section>
        <ul>
          <li>
            My company wants to build Raving fans and Servant leadership. I'm
            working with two companies right now.
          </li>
          <li>Partners from Indonesia and Australia.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
