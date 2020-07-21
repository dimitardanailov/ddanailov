const articles = [
  {
    title: 'How to protect my Ubuntu server ?',
  },
  {
    title: 'Git useful commands',
  },
  {
    title: 'Nodejs Microservice: Importing millions records on Amazon S3',
  },
  {
    title: 'Productivity with VS Code (Tips and Tricks)',
  },
  {
    title:
      'Polymer vs Angular vs React: Using Web Components to Evolve the Experience',
  },
]

function generateId(title) {
  const id = title.replace(' ', '-').replace(':', '-')

  return id
}

function Article({article}) {
  return <h4>{article.title}</h4>
}

function ExternalArticles() {
  return (
    <>
      {articles.map(article => {
        return <Article key={generateId(article.title)} article={article} />
      })}
    </>
  )
}

export default ExternalArticles
