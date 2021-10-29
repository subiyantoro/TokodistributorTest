import {Dimensions} from "react-native";

export const BASE_URL = "https://gardien.tokodistributor.co.id/api-web/v2"

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
