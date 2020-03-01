import {useState, useEffect, useCallback} from 'react'
import { API_URL, API_KEY }  from '../../config'

export const useMovieFetch = movieId => {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchData = useCallback(async () => {
        setError(false)
        setLoading(true)


        try{
            const enpoint =`${API_URL}movie/${movieId}?api_key=${API_KEY}`
            const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`

            const result = await (await fetch(enpoint)).json()
            const creditsResult = await (await fetch(creditsEndpoint)).json()
            
            const directors = creditsResult.crew.filter(
                member => member.job === 'Director'
            )
            setState({
                ...result,
                actors: creditsResult.cast,
                directors,
            })
        } catch(error) {
            setError(true)
        }
        setLoading(false)
    }, [movieId])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return [state, loading, error];
}