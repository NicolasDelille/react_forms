import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
	root: {
		width: 300
	},
	slider: {
		'&.MuiSlider-root': {
			color: props => props.color
		}
	}
});

function valuetext(value) {
	return `${value}`;
}

const PermissionsSlider = ({ marks, label, handleChange }) => {
	const colors = [];
	for (let i = 0; i <= marks.length; i++) {
		colors.push(`hsl(${(i * 120) / (marks.length - 1)}, 100%, 50%)`);
	}
	const [value, setValue] = React.useState(0);
	const props = { color: `${colors[value]}` };
	const classes = useStyles(props);
	return (
		<div>
			<Typography id={`slider-${label}`} gutterBottom>
				{label}
			</Typography>
			<Slider
				className={classes.slider}
				defaultValue={0}
				getAriaValueText={valuetext}
				aria-labelledby='discrete-slider'
				valueLabelDisplay='auto'
				step={1}
				marks
				min={0}
				max={marks.length - 1}
				onChange={(e, value) => {
					setValue(value);
					handleChange(e, value, label);
				}}
			/>
		</div>
	);
};

export default PermissionsSlider;
