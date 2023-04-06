import { Component, useState } from 'react'
import { Slider, Rail, Handles, Tracks, SliderItem, GetHandleProps, GetTrackProps } from 'react-compound-slider'
import { Text } from '@nextui-org/react'
import * as React from 'react'

const sliderStyle = {  // Give the slider some width
    position: 'relative',
    width: '80%',
    height: 80,
    // border: '1px solid steelblue',
}

const railStyle = {
    position: 'absolute',
    width: '100%',
    height: 10,
    marginTop: 35,
    borderRadius: 5,
    backgroundColor: '#8B9CB6',
}

interface HandleProps {
    handle: SliderItem;
    getHandleProps: GetHandleProps;
}

export const Handle: React.FC<HandleProps> = ({
    handle: {id, value, percent},
    getHandleProps
}) => (
    <div
        style={{
            left: `${percent}%`,
            position: 'absolute',
            marginLeft: -15,
            marginTop: 25,
            zIndex: 2,
            width: 30,
            height: 30,
            border: 0,
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '50%',
            backgroundColor: '#2C4870',
            color: '#333',
        }}
        {...getHandleProps(id)}
    />
);

interface TrackProps {
    source: SliderItem;
    target: SliderItem;
    getTrackProps: GetTrackProps;
}

export const Track: React.FC<TrackProps> = ({
    source,
    target,
    getTrackProps
}) => (
    <div
        style={{
            position: 'absolute',
            height: 10,
            zIndex: 1,
            marginTop: 35,
            backgroundColor: '#546C91',
            borderRadius: 5,
            cursor: 'pointer',
            left: `${source.percent}%`,
            width: `${target.percent - source.percent}%`,
        }}
        {...getTrackProps() /* this will set up events if you want it to be clickable (optional) */}
    />
);

const defaultValues = [0, 100]

interface HoriSliderProps {
    onChange: (range: number[]) => void;
}

export const HorizontalSlider = ({ onChange }: HoriSliderProps) => {
    const [values, setValues] = useState<number[]>([0,100]);

    const handleOnChange = (values: number[]) => {
        setValues(values);
        onChange(values);
    };

    return (
        <div style={{
            height: 50,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            }}
        >
            <div style={{ display: "flex", height: "50", width: '3%', justifyContent: "center" }}>
                <Text h3 style={{ border: "1px solid white", margin: "0" }}>{values[0]}</Text>
            </div>
            <Slider
                rootStyle={sliderStyle}
                domain={[0,99]}
                step={1}
                mode={1}
                values = {values}
                onChange={handleOnChange}
            >
                <Rail>
                    {({ getRailProps }) => (
                        <div style={railStyle} {...getRailProps()} />
                    )}
                </Rail>
                <Handles>
                    {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                            {handles.map(handle => (
                                <Handle
                                    key={handle.id}
                                    handle={handle}
                                    getHandleProps={getHandleProps}
                                />
                            ))}
                        </div>
                    )}
                </Handles>
                <Tracks left={false} right={false}>
                    {({ tracks, getTrackProps }) => (
                        <div className="slider-tracks">
                            {tracks.map(({ id, source, target }) => (
                                <Track
                                    key={id}
                                    source={source}
                                    target={target}
                                    getTrackProps={getTrackProps}
                                />
                            ))}
                        </div>
                    )}
                </Tracks>
            </Slider>
            <div style={{ display: "flex", height: "50", width: '3%', justifyContent: "center" }}>
                <Text h3 style={{ border: "1px solid white", margin: "0" }}>{values[1]}</Text>
            </div>
        </div>
    )
}

// --------------------------------------------
// Start of Vertical Slider
// --------------------------------------------

const verticalSliderStyle = {
    position: 'relative',
    height: '200px',
    border: '1px solid steelblue',
    width: 30,
}

const verticalRailStyle = {
    position: 'absolute',
    width: 10,
    height: '100%',
    transform: 'translate(-50%, 0%)',
    borderRadius: 5,
    backgroundColor: '#8B9CB6',
    marginLeft: 14,
}

export const VerticalHandle: React.FC<HandleProps> = ({
  handle: {id, value, percent},
  getHandleProps
}) => (
    <div
        style={{
            top: `${percent}%`,
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            marginLeft: 14,
            zIndex: 2,
            width: 30,
            height: 30,
            border: 0,
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '50%',
            backgroundColor: '#2C4870',
            color: '#333',
        }}
        {...getHandleProps(id)}
    >
        {/*<div style={{ fontFamily: 'Roboto', fontSize: 11, marginTop: -35 }}>*/}
        {/*    {value}*/}
        {/*</div>*/}
    </div>
);

export const VerticalTrack: React.FC<TrackProps> = ({
     source,
     target,
     getTrackProps
 }) => (
    <div
        style={{
            position: 'absolute',
            width: 10,
            zIndex: 1,
            marginLeft: 14,
            backgroundColor: '#546C91',
            borderRadius: 5,
            cursor: 'pointer',
            transform: 'translate(-50%, 0%)',
            top: `${source.percent}%`,
            height: `${target.percent - source.percent}%`,
        }}
        {...getTrackProps() /* this will set up events if you want it to be clickable (optional) */}
    />
);

export const VerticalSlider = ({ onChange }: HoriSliderProps) => {
    const [values, setValues] = useState<number[]>([0, 100]);

    const handleOnChange = (values: number[]) => {
        setValues(values);
        onChange(values);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%',
            width: 50,
        }}
        >
            <div style={{ display: "flex", height: "3%", width: '50px',
                            justifyContent: "center", marginBottom: "15px" }}>
                <Text h3 style={{ border: "1px solid white", margin: "0" }}>{values[0]}</Text>
            </div>
            <Slider
                vertical={true}
                rootStyle={verticalSliderStyle}
                domain={[0, 99]}
                step={1}
                mode={1}
                values={values}
                onChange={handleOnChange}
            >
                <Rail>
                    {({ getRailProps }) => (
                        <div style={verticalRailStyle} {...getRailProps()} />
                    )}
                </Rail>
                <Handles>
                    {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                            {handles.map(handle => (
                                <VerticalHandle
                                    key={handle.id}
                                    handle={handle}
                                    getHandleProps={getHandleProps}
                                />
                            ))}
                        </div>
                    )}
                </Handles>
                <Tracks left={false} right={false}>
                    {({ tracks, getTrackProps }) => (
                        <div className="slider-tracks">
                            {tracks.map(({ id, source, target }) => (
                                <VerticalTrack
                                    key={id}
                                    source={source}
                                    target={target}
                                    getTrackProps={getTrackProps}
                                />
                            ))}
                        </div>
                    )}
                </Tracks>
            </Slider>
            <div style={{ display: "flex", height: "3%", width: '50px', justifyContent: "center", marginTop: "15px" }}>
                <Text h3 style={{ border: "1px solid white", margin: "0" }}>{values[1]}</Text>
            </div>
        </div>
    );
};