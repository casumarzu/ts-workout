import * as React from 'react';

export function testDecorator(): any {
    return function (Child): any {
        class TestDecorator extends React.Component<any, any> {
            alarm(text) {
                alert(text || 'alarm');
            }
            render() {
                const props = {
                    ...this.props,
                    alarm: this.alarm,
                }
                return <Child {...props} />
            }
        }
        return TestDecorator;
    }
}