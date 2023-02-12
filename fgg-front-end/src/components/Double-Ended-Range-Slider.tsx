import React, { useState } from 'react';
import './DoubleEndedRangeSlider.css';
import {Text} from "@nextui-org/react";

interface DoubleEndedRangeSliderProps {}

const DoubleEndedRangeSlider: React.FC<DoubleEndedRangeSliderProps> = () => {
    const [lowerValue, setLowerValue] = useState(0);
    const [upperValue, setUpperValue] = useState(100);

    const handleLowerValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLowerValue(parseInt(event.target.value));
    };

    const handleUpperValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpperValue(parseInt(event.target.value));
    };

    return (
        <>
            <div
                style={{
                    width: "40px",
                    height: "40px",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text h4 style={{border: "1px solid white"}}>{lowerValue}</Text>
            </div>
            <div className="double-ended-range-slider" style={{ alignItems: "center", justifyContent: "center"}}>
                <input
                    type="range"
                    className="double-ended-range-slider__input"
                    min={0}
                    max={49}
                    value={lowerValue}
                    onChange={handleLowerValueChange}
                    style={{background: `linear-gradient(to right, #3d3d3d 0%, #3d3d3d ${lowerValue / 49 * 100}%, #007aff ${lowerValue / 49 * 100}%`}}
                />
                <input
                    type="range"
                    className="double-ended-range-slider__input"
                    min={50}
                    max={100}
                    value={upperValue}
                    onChange={handleUpperValueChange}
                    style={{background: `linear-gradient(to right, #007aff ${(upperValue - 50)  / 50 * 100}%, #3d3d3d ${(upperValue - 50) / 50 * 100}%)`}}
                />
            </div>
            <div
                style={{
                    width: "40px",
                    height: "40px",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text h4>{upperValue}</Text>
            </div>
        </>
    );
};

export default DoubleEndedRangeSlider;
