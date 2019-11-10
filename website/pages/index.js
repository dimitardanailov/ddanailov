function Home() {
  return (
    <div>
      <h1>Dear Guest,</h1>
      <p>My name is Dimitar Danailov.</p>
      <p>I'm a consultant, a mentor, and I love open source software.</p>
      <p>Projects:</p>
      <ul>
        <li>
          <a
            href="https://github.com/dimitardanailov/gmail-helper"
            title="Native web componets"
          >
            Gmail Helper
          </a>
          : Gmail helper creates gmail labels and features. Technologies: Custom
          Elements v1, Redux, Webpack, Lerna, Mocha, Chai, Karma
        </li>
        <li>
          <a href="https://github.com/dimitardanailov/tantalus" title="Nodejs">
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
          >
            Push notification playground
          </a>
        </li>
        <li>
          <a
            href="https://github.com/dimitardanailov/react-components"
            title="React playground"
          >
            React components
          </a>
        </li>
      </ul>
      <section>
        <ul>
          My company wants to build Raving fans and Servant leadership. I'm
          working with two companies right now.
        </ul>
      </section>
    </div>
  );
}

export default Home;
