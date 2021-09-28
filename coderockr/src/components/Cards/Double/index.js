import "./style.scss"
import styled from "styled-components"

const CardContainer = styled.div`
display: flex;
width: 80%;
height: 640px;
background: #fff;
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
  font-size: small;
  color: #2D2D2D;
`

const CardImage = styled.img`
width: 100%;
`

function DoubleCard({ author, title, article, imageUrl }) {
    return (
        <CardContainer>
            <CardImage src={imageUrl} />
            <CardContent>
                <Author>{author}</Author>
                <Title>{title}</Title>
                <Article>{article}</Article>
            </CardContent>
        </CardContainer>
    )
}

export default DoubleCard
