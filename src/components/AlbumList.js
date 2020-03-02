import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import useResults from '../hooks/useResults'
import AlbumDetail from './AlbumDetail'

const AlbumList = () => {
    const [results, errorMessage] = useResults()

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList 
                data={results}
                keyExtractor={(result) => result.title}
                renderItem={({ item }) => {
                    return (
                       <AlbumDetail item={item}/>
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default AlbumList