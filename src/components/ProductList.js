import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, ScrollView, Text, View} from "react-native";
import {Card, Paragraph, Title} from "react-native-paper";
import {loadMoreProduct} from "../actions/toko";
import {connect} from "react-redux";

const ProductList = (props) => {
    const {
        products,
        loading,
        loadMore,
        getMoreProduct,
    } = props

    let [page, setPage] = useState(1)
    let [scrolling, setScrolling] = useState(true)

    const _currencyFormat = (num) => {
        return 'Rp.' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const _renderItem = ({item, index}) => {
        return (
            <View style={{width: '50%', padding: '5%'}}>
                <Card>
                    <Card.Cover source={{uri: item.image_uri}} />
                    <Card.Content style={{height: 70}}>
                        <Text numberOfLines={2} style={{fontSize: 12, fontWeight: 'bold', color: 'black'}}>{item.product_name}</Text>
                        <Paragraph>
                            {_currencyFormat(item.normal_price)}
                        </Paragraph>
                    </Card.Content>
                </Card>
            </View>
        )
    }

    const _renderFooter = () => {
        return (
            loadMore ?
                <ActivityIndicator size="small" /> :
                <Text style={{textAlign: 'center'}}>Load More</Text>
        )
    }

    return(
        <View>
            {
                loading ?
                    <View>
                        <ActivityIndicator size="large" />
                    </View> :
                    products.length === 0 ?
                        <Text>Empty Product</Text> :
                        <View style={{marginBottom: 20}}>
                            <FlatList
                                data={products}
                                renderItem={_renderItem}
                                numColumns={2}
                                keyExtractor={(item, index) => index.toString()}
                                onMomentumScrollBegin={() => setScrolling(false)}
                                onEndReached={(dist) => {
                                    setPage(page++)
                                    if(!scrolling) {
                                        setTimeout(() => {
                                            getMoreProduct(page)
                                            setScrolling(true)
                                        }, 1000)
                                    }
                                }}
                                onEndReachedThreshold={1}
                                ListFooterComponent={_renderFooter}
                            />
                        </View>
            }
        </View>
    )
}

function mapStateToProps(state) {
    return {
        loadMore: state.tokoStore.loadMore
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMoreProduct: (page) => dispatch(loadMoreProduct(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)