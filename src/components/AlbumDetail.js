import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Buttom'

const AlbumDetail = ({ item }) => {

    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image 
                        source={{ uri: item.thumbnail_image }} 
                        style={styles.thumbnailStyle}
                    />
                </View>

                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{item.title}</Text>
                    <Text>{item.artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    source={{ uri: item.image }}
                    style={styles.imageStyle}
                />
            </CardSection>

            <CardSection>
                <Button />
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
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: { 
        height: 300,
        flex: 1,
        width: null
    }
})

export default AlbumDetail