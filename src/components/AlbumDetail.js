import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({ item }) => {

    return (
        <Card>
            <CardSection>
                <View>
                    <Image source={{ uri: item.thumbnail_image }} style={styles.thumbnailStyle}/>
                </View>

                <View style={styles.headerContentStyle}>
                    <Text>{item.title}</Text>
                    <Text>{item.artist}</Text>
                </View>
            </CardSection>
        </Card>
    )

}

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: 'space-around',
        paddingLeft: 5
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    }
})

export default AlbumDetail