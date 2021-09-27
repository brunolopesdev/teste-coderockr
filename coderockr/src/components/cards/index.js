import "./style.scss"
import useGetPosts from "../../hooks/useGetPosts"
import { Link } from "react-router-dom"

function Card() {
    const { loading, error, data } = useGetPosts()

    return (
        <div className="postCard">
            <div className="cardRight">
                <div className="cardImg">
                    {!loading && error && <p>...</p>}
                    {!loading && data && <img src={data[0].imageUrl} />}

                </div>
                <div className="cardInfo">
                    {!loading && error && <p>...</p>}
                    {!loading && data &&
                        <>
                            <p className="author">{data[0].author} </p>
                            <p className="title">{data[0].title}</p>
                            <p className="article">{data[0].article}</p>
                        </>
                    }

                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.024 0H16.039L24 8L16.039 16H10.024L17.985 8L10.024 0ZM0 16H6.015L13.976 8L6.015 0H0L7.961 8L0 16H0Z" fill="#032937" />
                    </svg>

                </div>
            </div>
            <div className="cardLeft">
                <div className="cardImg">
                    {!loading && error && <p>...</p>}
                    {!loading && data && <img src={data[1].imageUrl} />}

                </div>
                <div className="cardInfo">
                    {!loading && error && <p>...</p>}
                    {!loading && data &&
                        <>
                            <p className="author">{data[1].author} </p>
                            <p className="title">{data[1].title}</p>
                            <p className="article">{data[1].article}</p>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card
