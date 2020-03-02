import React from 'react'
import { Text } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({ item }) => {

    return (
        <Card>
            <CardSection>
                <Text>{item.title}</Text>
            </CardSection>
        </Card>
    )

}

export default AlbumDetail