import { useEffect, useState } from "react"
import api from "../services/api"

const pageNumber = 1
const limit = 6

const useGetPosts = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    const [page, setPage] = useState(pageNumber)


    useEffect(() => {
        api.get(`/articles?_page=${pageNumber}&_limit=${limit}`).then((response) => {
            setError(null)
            setLoading(false)
            setData(response.data)

            console.log(response.data)

        }).catch((error) => {

            setLoading(false)
            setError(error.message)
            setData(null)
        })

    }, [pageNumber])

    const scrollToEnd = () => {
        setPage(pageNumber + 1)
    }

    window.onscroll = function () {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {

        }
    }

    return { loading, error, data, page }
}

export default useGetPosts
