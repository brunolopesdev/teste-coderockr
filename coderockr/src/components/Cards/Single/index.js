import styled from "styled-components"

const CardContainer = styled.div`
display: flex;
  flex: 1;
  width: 50%;
  background-color: #FFFFFF;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
`

const CardContent = styled.div`
padding: 30px 30px 0px 50px;
  width:fit-content;
  height:290px;
`

const CardImage = styled.img`
max-width: 40%;
  height:auto;
`

const Author = styled.p`
margin: 10px 0;
  color: #2D2D2D;
`

const Title = styled.h2`
color:#F1A10A;
  margin-bottom: 10px;
`

const Article = styled.div`
font-size: x-small;
  color: #2D2D2D;
`

function SingleCard({ id, author, title, article, imageUrl }) {
    return (
        <CardContainer>
            <CardImage src={imageUrl} alt={title} />
            <CardContent>
                <Author>{author}</Author>
                <Title>{title}</Title>
                <Article>{article}</Article>
            </CardContent>
        </CardContainer>
    )
}

export default SingleCard
