import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import useResults from '../hooks/useResults'

const AlbumList = () => {
    const [results, errorMessage] = useResults()

    return(
        <View>
            <FlatList 
                data={results}
                keyExtractor={(result) => result.title}
                renderItem={({ item }) => {
                    return (
                        <Text>{item.title}</Text>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default AlbumList