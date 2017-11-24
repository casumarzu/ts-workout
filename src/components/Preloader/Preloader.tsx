import * as React from 'react';
import * as s from './preloader.css';

export function Preloader({percent}) {
    return (
        <div className="preloader">
            <svg
                className={s["circular-loader"]}
                viewBox="25 25 50 50"
            >
                <circle
                    className={`${s["loader-path"]} ${s["animated"]}`}
                    cx="50"
                    cy="50"
                    r="20"
                    fill="none"
                    stroke="#70c542"
                    strokeWidth="2"
                />
            </svg>
        </div>
    )
}