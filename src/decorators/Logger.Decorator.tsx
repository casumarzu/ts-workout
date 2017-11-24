import * as React from 'react';

export function loggerDecorator(): any {
    return function (Child): any {
        class LoggerDecorator extends React.Component<any, any> {
            log({name ="group", text ="Some text..."}) {
                console.group(`[${name}]`);
                console.log(text);
                console.groupEnd();
                return text;
            }
            render() {
                const props = {
                    ...this.props,
                    log: this.log,
                }
                return <Child {...props} />
            }
        }
        return LoggerDecorator;
    }
}

export function logClass(target: any) {
    
    // save a reference to the original constructor
    var original = target;

    // a utility function to generate instances of a class
    function construct(constructor, args) {
        const c : any = function () {
            return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();
    }

    // the new constructor behaviour
    const f : any = function (...args) {
        console.log("New: " + original.name);
        return construct(original, args);
    }

    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;

    // return new constructor (will override original)
    return f;
}

export function logMethod(target, key, descriptor) {
    
    // save a reference to the original method this way we keep the values currently in the
    // descriptor and don't overwrite what another decorator might have done to the descriptor.
    if(descriptor === undefined) {
        descriptor = Object.getOwnPropertyDescriptor(target, key);
    }
    var originalMethod = descriptor.value;

    //editing the descriptor/value parameter
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var a = args.map(function (a) { return JSON.stringify(a); }).join();
        // note usage of originalMethod here
        var result = originalMethod.apply(this, args);
        var r = JSON.stringify(result);
        console.log("Call: " + key + "(" + a + ") => " + r);
        return result;
    };

    // return edited descriptor as opposed to overwriting the descriptor
    return descriptor;
}