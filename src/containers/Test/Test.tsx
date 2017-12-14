import * as React from 'react';
import {testDecorator} from '../../decorators/Test.Decorator';
import {loggerDecorator, logMethod, logClass} from '../../decorators/Logger.Decorator';
import {testMethod, testClass, autobind} from '../../decorators/Common.Decorator';
import * as s from './test.css';
import {Preloader} from '../../components/Preloader';
import {PercentageCircle} from '../../components/PercentageCircle';

import {getGradientSteps, getMarginGradient} from './utils';

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

let up = true;
let percent = 0;

@testDecorator()
@loggerDecorator()
@logClass
export class Test extends React.Component<Test.Props, Test.State> {
    interval = null;
    constructor(props) {
        super(props);
        this.state = {
            name: 'Andrey',
            percent: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({percent});
            if (percent >= 100) up = false;
            if (percent === 0) up = true;
            if (up) percent++;
            if (!up) percent--;
        }, 100);
    }

    @autobind
    onClick() {
        const text = `Hye ${this.state.name}!`;
        const name = 'Hello';
        const percent = getRandom(-1, 101);
        this.setState({percent});
        this.props.log({name, text});
    }
    @testMethod
    render() {
        const {percent} = this.state;
        
        return (
            <div className={s.wrapper}>
                <Preloader percent={45} />
                <section className={s.content}>
                    <PercentageCircle percent={percent} />
                    <button onClick={this.onClick}>Click me!</button>
                </section>
            </div>
        );
    }
}

export namespace Test {
    export interface Props {
        alarm?: any,
        log?: any
    }

    export interface State {
        name: string,
        percent: number
    }
}