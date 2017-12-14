// import * as tinygradient from 'tinygradient';
import * as interpolate from 'color-interpolate';
// const calcRGB = item => {
//     const {_r, _g, _b} = item;
//     const r = Math.round(_r);
//     const g = Math.round(_g);
//     const b = Math.round(_b);
//     return [r, g, b];
// }

export const getGradientSteps = (colors, margin, alpha=1) => {
    // const gradient = tinygradient.apply(null, colors);
    // const colorsArr = gradient.rgb(100);

    // const result = colorsArr.map( item => {
    //     const [r, g, b] = calcRGB(item);
    //     return `rgba(${r},${g},${b},${alpha})`;
    // });

    // return result;
}

export const getMarginGradient = (colors, margin, alpha=1) => {
    // const gradient = tinygradient.apply(null, colors);
    // const colorsArr = gradient.rgb(100);

    // const result = colorsArr.map( item => {
    //     const [r, g, b] = calcRGB(item);
    //     return `rgba(${r},${g},${b},${alpha})`;
    // });

    // return result[margin];

    const colormap = interpolate(colors);
    return colormap(margin > 100 ? 1 : margin / 100);
}