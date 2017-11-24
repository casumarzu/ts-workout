import * as React from 'react';
import {testDecorator} from '../../decorators/Test.Decorator';
import {loggerDecorator, logMethod, logClass} from '../../decorators/Logger.Decorator';
import {testMethod, testClass, autobind} from '../../decorators/Common.Decorator';
import * as s from './test.css';
import {Preloader} from '../../components/Preloader';
import {PercentageCircle} from '../../components/PercentageCircle';

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};


@testDecorator()
@loggerDecorator()
@logClass
export class Test extends React.Component<Test.Props, Test.State> {
    interval = null;
    constructor(props) {
        super(props);
        this.state = {
            name: 'Andrey',
            percent: 70
        }
    }

    componentDidMount() {
        return false;
        this.interval = setInterval(() => {
            const percent = getRandom(-150, 150);
            this.setState({percent});
            console.log({percent});
        }, 500);
    }

    @autobind
    onClick() {
        const text = `Hye ${this.state.name}!`;
        const name = 'Hello';
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