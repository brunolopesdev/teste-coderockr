import styled from "styled-components"
import { Link } from "react-router-dom"

const CardContainer = styled.div`
display: flex;
flex: 1;
width: 50%;
background-color: #FFFFFF;
box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
`

const CardContent = styled.div`
padding: 20px 30px 0px 40px;
width:fit-content;
height:290px;

@media (max-width: 700px){
  padding: 10px;
}
`

const CardImage = styled.img`
max-width: 40%;
height:auto;

@media (max-width: 700px){
  max-width: 50%;
}
`

const Author = styled.p`
margin: 10px 0;
color: #2D2D2D;
`

const Title = styled.h2`
color:#F1A10A;
margin-bottom: 10px;

@media (max-width: 700px){
  font-size: 15px;
}
`

const Article = styled.div`
font-size: 12px;
color: #2D2D2D;
`
const LinkPost = styled(Link)`

svg {
  position: relative;
  float: right;
}
`

function SingleCard({ id, author, title, article, imageUrl, date }) {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={title} />
      <CardContent>
        <Author>{author}</Author>
        <Title>{title}</Title>
        <Article>{article.substring(0, article.length / 4)}</Article>
        <LinkPost to={{ pathname: `/post/${id}`, state: { title: title, author: author, imageUrl: imageUrl, article: article, date: date } }}>
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.024 0H16.039L24 8L16.039 16H10.024L17.985 8L10.024 0ZM0 16H6.015L13.976 8L6.015 0H0L7.961 8L0 16H0Z" fill="#032937" />
          </svg>
        </LinkPost>
      </CardContent>
    </CardContainer>
  )
}

export default SingleCard
