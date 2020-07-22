import TargetBlank from '@ddanailov/components/TargetBlankLink'

import articles from './articles'

import styled from 'styled-components'

const StyledList = styled.ul`
  position: relative;
`

const ArticleWrapper = styled.h4`
  font-size: 1rem;
  font-weight: normal;
  padding: 0;
  margin: 0;
`

function Article({article}) {
  return (
    <li>
      <ArticleWrapper>
        <TargetBlank href={article.href} title={article.title}>
          {article.title}
        </TargetBlank>
      </ArticleWrapper>
    </li>
  )
}

function List() {
  const generateId = title => {
    const id = title.replace(' ', '-').replace(':', '-')

    return id
  }

  return (
    <>
      <StyledList>
        {articles.map(article => {
          return <Article key={generateId(article.title)} article={article} />
        })}
      </StyledList>
    </>
  )
}

export default List
