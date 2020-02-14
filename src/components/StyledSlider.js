import React from 'react';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
	slider: {
		'& .MuiSlider-root': {
			color: ({ color }) => `${color}!important`
		}
	}
});

const StyledSlider = ({ component: ComponentProp = 'span', children, color }) => {
	const classes = useStyles({ color });
	console.log(color);
	return <ComponentProp className={classes.slider}>{children}</ComponentProp>;
};

export default StyledSlider;
