import React, {useEffect, useRef, useState} from "react";
import Carousel from "react-native-snap-carousel";
import {ActivityIndicator, Dimensions, Image, ImageBackground, Text, View} from "react-native";
import {itemWidth, sliderWidth} from "../configs/utils";
import {Card} from "react-native-paper";

const BannerList = (props) => {
    const {
        banner,
        loading
    } = props

    const [sliderRef, setSliderRef] = useState()
    const [indexItem, setIndexItem] = useState(0)
    const {height, width} = Dimensions.get('window');

    const _renderItem = ({item, index}) => {
        return (
            <View style={{
                marginVertical: '5%',
                borderRadius: 5,
                height: height / 3.5,}}>
                <Card>
                    <Card.Cover source={{uri: item.url_mobile}} />
                </Card>
            </View>
        )
    }
    return (
        <View>
            {
                loading ?
                    <ActivityIndicator size="small" /> :
                    banner.length !== 0 ?
                        <Carousel
                            firstItem={banner.length === 1 ? 0 : 1}
                            ref={ref => setSliderRef(ref)}
                            data={banner}
                            renderItem={_renderItem}
                            itemWidth={itemWidth}
                            sliderWidth={sliderWidth}
                            onSnapToItem={(index) => setIndexItem(index)}
                            hasParallaxImages={true}
                            autoplay={true}
                            autoplayInterval={5000}
                            loop={true}
                        />
                        : <Text>No Promo</Text>
            }
        </View>
    )
}

export default BannerList