import React, { Component } from 'react'
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'
import { Text } from '@nextui-org/react'

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

export function Handle({handle: { id, value, percent }, getHandleProps}) {
    return (
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
        >
            {/*<div style={{ fontFamily: 'Roboto', fontSize: 11, marginTop: -35 }}>*/}
            {/*    {value}*/}
            {/*</div>*/}
        </div>
    )
}

function Track({ source, target, getTrackProps }) {
    return (
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
    )
}

const defaultValues = [0, 100]

export class HorizontalSlider extends Component {
    state = {
        domain: [0, 100],
        values: defaultValues.slice(),
        update: defaultValues.slice(),
        reversed: false,
    }

    onUpdate = update => {
        this.setState({ update })
    }

    onChange = values => {
        this.setState({ values })
    }

    setDomain = domain => {
        this.setState({ domain })
    }

    toggleReverse = () => {
        this.setState(prev => ({ reversed: !prev.reversed }))
    }

    render() {
        const {
            state: { domain, values, update, reversed },
        } = this

        return (
            <div style={{
                height: 50,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                }}
            >
                <div style={{ display: "flex", height: "50", width: '3%', justifyContent: "center", border: "1px solid white" }}>
                    <Text h3 style={{ border: "1px solid white", margin: "0" }}>{update[0]}</Text>
                </div>
                <Slider
                    rootStyle={sliderStyle}
                    domain={[0, 100]}
                    step={1}
                    mode={1}
                    values={[0, 100] /* two values = two handles */}
                    onChange={this.onChange}
                    onUpdate={this.onUpdate}
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
                <div style={{ display: "flex", height: "50", width: '3%', justifyContent: "center", border: "1px solid white" }}>
                    <Text h3 style={{ border: "1px solid white", margin: "0" }}>{update[1]}</Text>
                </div>
            </div>
        )
    }
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

export function VerticalHandle({handle: { id, value, percent }, getHandleProps}) {
    return (
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
    )
}

function VerticalTrack({ source, target, getTrackProps }) {
    return (
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
    )
}

export class VerticalSlider extends Component {
    state = {
        domain: [0, 100],
        values: defaultValues.slice(),
        update: defaultValues.slice(),
        reversed: false,
    }

    onUpdate = update => {
        this.setState({ update })
    }

    onChange = values => {
        this.setState({ values })
    }

    setDomain = domain => {
        this.setState({ domain })
    }

    toggleReverse = () => {
        this.setState(prev => ({ reversed: !prev.reversed }))
    }

    render() {
        const {
            state: { domain, values, update, reversed },
        } = this

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
                <div style={{ display: "flex", height: "3%", width: '50px', justifyContent: "center", border: "1px solid white", marginBottom: "15px" }}>
                    <Text h3 style={{ border: "1px solid white", margin: "0" }}>{update[0]}</Text>
                </div>
                <Slider
                    vertical={true}
                    rootStyle={verticalSliderStyle}
                    domain={[0, 100]}
                    step={1}
                    mode={1}
                    values={[0, 100] /* two values = two handles */}
                    onChange={this.onChange}
                    onUpdate={this.onUpdate}
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
                <div style={{ display: "flex", height: "3%", width: '50px', justifyContent: "center", border: "1px solid white", marginTop: "15px" }}>
                    <Text h3 style={{ border: "1px solid white", margin: "0" }}>{update[1]}</Text>
                </div>
            </div>
        )
    }
}