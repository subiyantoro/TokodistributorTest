import React, {useEffect} from "react";
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from "react-native";
import {Card, Paragraph, Title} from "react-native-paper";

const CategoryList = (props) => {
    const {
        category,
        loading
    } = props

    const _renderItem = ({item, index}) => {
        return (
            <View style={CategoryStyle.container}>
                <Card style={{width: 50, height: 50, background: 'white'}}>
                    <Card.Cover source={{uri: item.icon}} style={{width: 50, height: 50}}/>
                </Card>
                <Text style={CategoryStyle.textCategory}>{item.category_name}</Text>
            </View>
        )
    }

    return(
        <>
            {
                loading ?
                    <ActivityIndicator size="small" /> :
                    <FlatList
                        horizontal={true}
                        data={category}
                        renderItem={_renderItem}
                        // showsHorizontalScrollIndicator={false}
                    />
            }
        </>
    )
}

const CategoryStyle = StyleSheet.create({
    container: {
        width: 50,
        flex: 1,
        flexDirection: "column",
        margin: 10,
    },
    textCategory: {
        fontSize: 10,
        textAlign: 'center'
    }
})

export default CategoryList