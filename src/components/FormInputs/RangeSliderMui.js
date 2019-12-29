import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 200,
    }
});

function valuetext(value){
    return `{value}`;
}

export default function RangeSliderMui({label, placeholder, onChange, initialRange, ...rest}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(initialRange || [0, 100]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        onChange(newValue);
    };
    return (
        <div className = {classes.root}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                {...rest}
            />
        </div>
    );
}