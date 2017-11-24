import * as React from 'react';

export function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
};

export function validate(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    debugger
};

export function required(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    debugger
};

function construct(constructor, args) {
    const c: any = () => constructor.apply(this, args)
    c.prototype = constructor.prototype;
    return new c();
}

export function testClass(target: any) {
    
    // save a reference to the original constructor
    const original = target;

    // a utility function to generate instances of a class


    // the new constructor behaviour
    const f: any = (...args) => {
        console.log("New: " + original.name);
        return construct(original, args);
    }

    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;

    // return new constructor (will override original)
    return f;
}

export function testMethod(target, key, descriptor) {
    if(descriptor === undefined) {
        descriptor = Object.getOwnPropertyDescriptor(target, key);
    }
    console.log('[name]: ', key);

    return descriptor;
}

// export function autobind(target, key, descriptor) {
//     if(descriptor === undefined) {
//         descriptor = Object.getOwnPropertyDescriptor(target, key);
//     }
//     descriptor.value = descriptor.value.bind(target);
//     debugger

//     return descriptor;
// }

export function autobind(target, key, descriptor) {
    let fn = descriptor.value;

    if (typeof fn !== 'function') {
        throw new Error(`@autobind decorator can only be applied to methods not: ${typeof fn}`);
    }

    let definingProperty = false;

    return {
        configurable: true,
        get() {
            if (definingProperty || this === target.prototype || this.hasOwnProperty(key) || typeof fn !== 'function') {
                return fn;
            }

            let boundFn = fn.bind(this);
            definingProperty = true;

            Object.defineProperty(this, key, {
                configurable: true,
                get() {
                    return boundFn;
                },
                set(value) {
                    fn = value;
                    delete this[key];
                }
            });

            definingProperty = false;
            return boundFn;
        },
        set(value) {
            fn = value;
        }
    };
}

function reacted(Child) {
    return <Child />
}