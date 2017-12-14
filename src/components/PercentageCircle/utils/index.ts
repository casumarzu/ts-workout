import * as interpolate from 'color-interpolate';
import * as d3 from 'd3-interpolate';
import * as Gradient from 'linear-gradient';

const linear = new Gradient([
    [40,200,80],
    [255,225,0],
    [255,85,85]
])

export const getColor = (colors, margin, alpha=1) => {
    // const interpolate1 = d3.interpolateRgb.apply(null, colors)
    // return interpolate1(margin > 100 ? 1 : margin / 100);
    const c = linear.calcArray(margin > 100 ? 1 : margin / 100);
    const [r, g, b] = c;
    return `rgb(${r}, ${g}, ${b})`;
    // const colormap = interpolate(colors);
    // return colormap(margin > 100 ? 1 : margin / 100);
}