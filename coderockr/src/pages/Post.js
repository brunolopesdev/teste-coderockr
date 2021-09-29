import { Link } from "react-router-dom"
import styled from 'styled-components'
import dateFormat from "dateformat"
import BackArrow from "../assets/double-arrow-left.svg"



const PostContainer = styled.div`
height: 1612px;
width: 80%;
box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
background:white;
margin: 0 auto;

@media (max-width: 1366px) {
    height: 1000px;
}
`

const SubContainer = styled.div`
display: flex;
`

const PostImg = styled.img`
  width: 50%;
  height: 40%;
`

const PostContent = styled.div`
  height: 595px;
  padding: 80px 0 0 60px;
  margin-top: 50px;
  @media (max-width: 80rem){
    height: 280px;
    padding:0;
    margin: 0; 
  }
`
const Title = styled.h1`
  margin-bottom: 10px;
  color:#F1A10A;
`

const Author = styled.p`
  margin: 20px 0;
  color: #2D2D2D;
`
const Date = styled.p`
margin: 20px 0;
  color: #2D2D2D;
`
const Article = styled.div`
  position: relative;
  font-size: large;
  padding: 50px 140px;
  color: #2D2D2D;
  width: 100%;
  @media (max-width: 80rem){
    padding:0;
    margin: 0; 
  }
`

const BackLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
color: #000;
text-decoration: none;

img{
    width: 3%;
}
`

const Post = (props) => {
    const { title, author, imageUrl, article, date } = props.location.state

    return (
        <PostContainer>
            <SubContainer>
                <PostImg src={imageUrl} alt={title} />
                <PostContent>
                    <Date>{dateFormat(date, "mmmm dS, yyyy")}</Date>
                    <Author>{author}</Author>
                    <Title>{title}</Title>
                </PostContent>
            </SubContainer>
            <Article>{article}</Article>
            <BackLink to="/"><img src={BackArrow} alt="Voltar" /></BackLink>
        </PostContainer>
    )
}

export default Post
