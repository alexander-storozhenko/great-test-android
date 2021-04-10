import {primaryColor, secondaryColor} from "../components/StyleConstants";

export const getTextColor = (hex) => {
    if (!hex || hex.length > 7 || hex.length < 4)
            return secondaryColor
    else if (hex.length === 4)
        hex += hex.substring(1)

    let r = parseInt(hex.substr(1, 2), 16);
    let g = parseInt(hex.substr(3, 2), 16);
    let b = parseInt(hex.substr(5, 2), 16);
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? secondaryColor : primaryColor

    // let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    // return (yiq >= 128) ? secondaryColor : primaryColor;
}
