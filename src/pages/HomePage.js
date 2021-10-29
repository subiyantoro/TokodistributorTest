import React, {useEffect, useState} from "react";
import CategoryList from "../components/CategoryList";
import {ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {getBanner, getCategory, getProducts} from "../actions/toko";
import {connect} from "react-redux";
import BannerList from "../components/BannerList";
import ProductList from "../components/ProductList";

const HomePage = (props) => {
    const {
        banner,
        products,
        categories,
        loadBanner,
        loadCategory,
        loadProduct,
        getBanner,
        getCategory,
        getProducts
    } = props
    const [page, setPage] = useState(1)

    useEffect(() => {
        getProducts(page)
        getCategory()
        getBanner()
    }, [])

    return (
        <SafeAreaView>
            <View style={HomeStyle.container}>
                <View style={{flex: 2}}>
                    <BannerList banner={banner} loading={loadBanner} />
                </View>
                <View style={{flex: 1.3}}>
                    <Text style={{fontSize: 12, fontWeight: 'bold', color: 'black', margin: 5}}>Category : </Text>
                    <CategoryList category={categories} loading={loadCategory} />
                </View>
                <View style={{flex: 3}}>
                    <ProductList products={products} loading={loadProduct} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const HomeStyle = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%'
    }
})

function mapStateToProps(state) {
    return {
        banner: state.tokoStore.banner,
        categories: state.tokoStore.category,
        products: state.tokoStore.products,
        loadBanner: state.tokoStore.loadBanner,
        loadCategory: state.tokoStore.loadCategory,
        loadProduct: state.tokoStore.loadProduct
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getBanner: () => dispatch(getBanner()),
        getCategory: () => dispatch(getCategory()),
        getProducts: (page) => dispatch(getProducts(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)