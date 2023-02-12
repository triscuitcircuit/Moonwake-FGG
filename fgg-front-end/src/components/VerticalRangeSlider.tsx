import React, { useState } from 'react';

interface Props {}

const VerticalRangeSlider: React.FC<Props> = () => {
    const [lowerValue, setLowerValue] = useState<number>(25);
    const [upperValue, setUpperValue] = useState<number>(75);

    const handleLowerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        if (newValue < upperValue) {
            setLowerValue(newValue);
        }
    };

    const handleUpperChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        if (newValue > lowerValue) {
            setUpperValue(newValue);
        }
    };

    return (
        <div style={{ height: '200px', display: 'flex', flexDirection: 'column' }}>

            <input
                type="range"
                min={50}
                max={100}
                value={upperValue}
                onChange={handleUpperChange}
                style={{
                    writingMode: 'vertical-rl',
                    WebkitAppearance: 'slider-vertical',
                    height: '100px',
                    margin: "0",
                    padding: "0",
                    borderWidth: "0",
                    boxSizing: "border-box"
                }}
            />
            <input
                type="range"
                min={0}
                max={49}
                value={lowerValue}
                onChange={handleLowerChange}
                style={{
                    writingMode: 'vertical-rl',
                    WebkitAppearance: 'slider-vertical',
                    height: '100px',
                    transform: 'rotate(180deg)',
                    margin: "0",
                    padding: "0",
                    borderWidth: "0",
                    boxSizing: "border-box"
                }}
            />
            <p>Range: {Math.abs(lowerValue - 49)} - {upperValue}</p>
        </div>
    );
};

export default VerticalRangeSlider;
