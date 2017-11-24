import * as React from "react";
import {cond} from "ramda";
import * as s from './percentageCircle.css';

const getClasses = (str: string) => {
    return str
        .split(' ')
        .reduce( (res, item) => {
            return `${res} ${s[item]}`
        }, '');
}

const getColor = cond([
    [percent => percent <= 40, () => 'red'],
    [percent => percent > 40 && percent < 60, () => 'orange'],
    [percent => percent >= 60, () => 'green']
]);

export class PercentageCircle extends React.Component<props, any> {
    constructor(props) {
        super(props);
    }

    get color() {
        return getColor(this.props.percent);
    }

    render() {
        const {percent} = this.props;
        const root = s.percentage_circle;
        return (
            <div className={root}>
                <svg viewBox="0 0 36 36" className={getClasses(`circular-chart ${this.color}`)}>
                    <path className={s["circle-bg"]}
                        d={`
                            M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831
                        `}
                    />
                   {
                       percent && <path className={s["circle"]}
                            strokeDasharray={`${Math.abs(percent)}, 100`}
                            d={`
                                M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831
                            `}
                        />
                    }
                    <text x="18" y="20.35" className={s["percentage"]}>{`${percent}%`}</text>
                </svg>
            </div>
        )
    }
}

interface props {
    percent: number;
}