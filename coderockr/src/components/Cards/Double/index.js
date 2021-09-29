import styled from "styled-components"
import { Link } from "react-router-dom"

const CardContainer = styled.div`
display: flex;
width: 80%;
height: 640px;
background: #fff;

@media (max-width: 1200px){
  display: none;
}
`

const CardContent = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
padding: 40px 80px 40px 60px;
min-width:200px;
`

const Title = styled.h2`
  margin-bottom: 10px;
  color:#F1A10A;
`

const Author = styled.p`
  margin: 20px 0;
  color: #2D2D2D;
`

const Article = styled.div`
  font-size: 12px;
  color: #2D2D2D;
`

const CardImage = styled.img`
width: 100%;
`

const LinkPost = styled(Link)`
svg {
  position: relative;
  float: right;
}
`

function DoubleCard({ id, author, title, article, imageUrl, date }) {
  return (
    <CardContainer>
      <CardImage src={imageUrl} />
      <CardContent>
        <Author>{author}</Author>
        <Title>{title}</Title>
        <Article>{article}</Article>
        <LinkPost to={{ pathname: `/post/${id}`, state: { title: title, author: author, imageUrl: imageUrl, article: article, date: date } }}>
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.024 0H16.039L24 8L16.039 16H10.024L17.985 8L10.024 0ZM0 16H6.015L13.976 8L6.015 0H0L7.961 8L0 16H0Z" fill="#032937" />
          </svg>
        </LinkPost>
      </CardContent>
    </CardContainer>
  )
}

export default DoubleCard
