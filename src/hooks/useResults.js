import album from '../api/album'
import { useEffect, useState } from 'react'


export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const fetchData = async() => {
        try{
            const response = await album.get('/')
            setResults(response.data)
        } catch (e) {
            setErrorMessage('Something went wrong, try again later')
        }
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    return [results, errorMessage]
}