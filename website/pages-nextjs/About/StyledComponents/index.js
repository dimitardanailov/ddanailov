import styled from 'styled-components'

const TestimonialBody = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;

  margin: 1rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const TestimonialBodyCenter = styled(TestimonialBody)`
  align-items: center;
`

const RecommendationBody = styled.div`
  position: relative;

  text-align: justify;

  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 0rem;
  }
`

export {TestimonialBody, TestimonialBodyCenter, RecommendationBody}
