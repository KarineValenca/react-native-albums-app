import React from 'react'
import { View, FlatList } from 'react-native'
import useResults from '../hooks/useResults'
import AlbumDetail from './AlbumDetail'

const AlbumList = () => {
    const [results, errorMessage] = useResults()

    return(
        <View>
            <FlatList 
                data={results}
                keyExtractor={(result) => result.title}
                renderItem={({ item }) => {
                    return (
                       <AlbumDetail item={item}/>
                    )
                }}
            />
        </View>
    )
}

export default AlbumList