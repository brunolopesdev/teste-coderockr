import { useEffect, useState } from "react"
import api from "../services/api"

const pageNumber = 1
const limit = 6

const useGetPosts = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(pageNumber)

    useEffect(() => {
        api.get(`/articles?_page=${page}&_limit=${limit}`).then((response) => setData([...data, ...response.data]))

    }, [page])

    const scrollToEnd = () => {
        setPage(page + 1)
    }

    window.onscroll = function () {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            scrollToEnd()
        }
    }

    return { data, page, scrollToEnd }
}

export default useGetPosts
