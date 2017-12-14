import * as React from 'react';
import injectSheet from 'react-jss';
import {styles} from './styles';

@injectSheet(styles)
export class Comp extends React.Component<Comp.Props, Comp.State> {
    get leftPos() {
        return {position: "absolute", top: 10, left: 10};
    }
    render() {
        const {classes, switchTheme} = this.props;
        return (
            <div className={classes.wrapper}>
                <h1 className={classes.title}>Hello React-JSS!</h1>
                <a
                    className={classes.link}
                    href="http://cssinjs.org/react-jss"
                >
                    See docs
                </a>
                <button
                    onClick={switchTheme}
                    style={this.leftPos}
                >
                    Switch Theme!
                </button>
            </div>
        )
    }
}

export namespace Comp {
    export interface Props {
        classes?: any;
        switchTheme?: Function;
    }

    export interface State {

    }
}