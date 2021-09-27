import { useEffect, useState } from "react"
import api from "../services/api"


const useGetPosts = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState()

    useEffect(() => {
        api.get("/articles").then((response) => {
            setError(null)
            setLoading(false)
            setData(response.data)

            console.log(response.data)

        }).catch((error) => {

            setLoading(false)
            setError(error.message)
            setData(null)
        })

    }, [])

    return { loading, error, data }
}

export default useGetPosts
