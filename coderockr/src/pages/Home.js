import DoubleCard from "../components/Cards/Double"
import useGetPosts from "../hooks/useGetPosts"
import styled from "styled-components"
import SingleCard from "../components/Cards/Single"

const Container = styled.span`
  display: flex;
  height: 320px;
  width: 50%;
  float: left;
  margin: 60px 0 80px 0;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 40rem) {
    display: flex;
    float: top;
    width: 100%;
    margin: 0;
  }

  @media (max-width: 80rem) {
    display: flex;
    float: top;
    width: 100%;
    margin: 30px 0 40px 0;
  }
`

function Home() {
    const { data } = useGetPosts()

    function regex(body) {
        var regex = /(<([^>]+)>)/ig
        return body.replace(regex, "");
    }

    return (

        <>
            {data.map((el, index) => {
                if ((index + 1) % 3 === 0) {
                    return (
                        <DoubleCard
                            key={index}
                            id={el.id}
                            author={el.author}
                            title={el.title}
                            article={regex(el.article)}
                            imageUrl={el.imageUrl}
                            date={el.date}
                        />
                    )
                } else {
                    return (
                        <Container key={index}>
                            <SingleCard
                                id={el.id}
                                author={el.author}
                                title={el.title}
                                article={regex(el.article)}
                                imageUrl={el.imageUrl}
                                date={el.date} />
                        </Container>
                    )
                }
            })}


        </>
    )
}

export default Home
