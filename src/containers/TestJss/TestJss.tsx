import * as React from 'react'
import { ThemeProvider } from 'react-jss';

import {themes} from './themes';
import {Comp} from './Comp';

export class TestJss extends React.Component<TestJss.Props, TestJss.State> {
    constructor(props) {
        super(props);
        this.state = {
            theme: 0,
        }
    }

    switchTheme = () => {
        const {theme} = this.state;
        const isLastItem = theme === themes.length - 1;
        const newTheme = isLastItem ? 0 : theme + 1;
        this.setState({theme: newTheme});
    }

    render() {
        const theme = themes[this.state.theme];
        const fullSize = {width: '100%', height: '100%'};
        return (
            <div style={fullSize}>
                <ThemeProvider theme={theme}>
                    <Comp switchTheme={this.switchTheme} />
                </ThemeProvider>
            </div>
        )
    }
}

export namespace TestJss {
    export interface Props {

    }

    export interface State {
        theme: number;
    }
}