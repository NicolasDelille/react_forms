import React from 'react';
import Grid from '@material-ui/core/Grid';
import PermissionsSlider from './PermissionsSlider';

const dictionary = [
	{
		value: 0,
		label: 'DICTIONARY_HIDDEN'
	},
	{
		value: 1,
		label: 'DICTIONARY_VIEW'
	},
	{
		value: 2,
		label: 'DICTIONARY_EDIT'
	},
	{
		value: 3,
		label: 'DICTIONARY_SYNC'
	}
];

const contributors = [
	{
		value: 0,
		label: 'CONTRIBUTORS_HIDDEN'
	},
	{
		value: 1,
		label: 'CONTRIBUTORS_VIEW'
	},
	{
		value: 2,
		label: 'CONTRIBUTORS_EDIT'
	}
];

const sequences = [
	{
		value: 0,
		label: 'SEQUENCES_HIDDEN'
	},
	{
		value: 1,
		label: 'SEQUENCES_VIEW'
	},
	{
		value: 2,
		label: 'SEQUENCES_EDIT'
	},
	{
		value: 3,
		label: 'SEQUENCES_SYNC'
	}
];

const getPermissionsFromIndexValue = (array, value) => {
	let permissions = [];
	const regex = /_HIDDEN$/;
	const index = array.map(permission => permission.value).indexOf(value);
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (i <= index) {
			!element.label.match(regex) && permissions.push(element.label);
		}
	}
	return permissions;
};

const Permissions = ({ handlePermissions }) => {
	const [dictionaryPermissions, setDictionaryPermissions] = React.useState([]);
	const [contributorsPermissions, setContributorsPermissions] = React.useState([]);
	const [sequencesPermissions, setSequencesPermissions] = React.useState([]);

	let totalRights = [];
	React.useEffect(() => {
		handlePermissions(totalRights.concat(dictionaryPermissions, contributorsPermissions, sequencesPermissions));
	}, [handlePermissions, totalRights, dictionaryPermissions, contributorsPermissions, sequencesPermissions]);

	const handleSliderChange = (e, value, label) => {
		e.preventDefault();
		switch (label) {
			case 'dictionary':
				setDictionaryPermissions(getPermissionsFromIndexValue(dictionary, value));
				break;
			case 'contributors':
				setContributorsPermissions(getPermissionsFromIndexValue(contributors, value));
				break;
			case 'sequences':
				setSequencesPermissions(getPermissionsFromIndexValue(sequences, value));
				break;

			default:
				setDictionaryPermissions([]);
				setContributorsPermissions([]);
				setSequencesPermissions([]);
				break;
		}
	};

	return (
		<React.Fragment>
			<Grid container>
				<Grid item></Grid>
			</Grid>
			<Grid container>
				<Grid item xs={3} />
				<Grid item xs={6}>
					<PermissionsSlider marks={dictionary} label='dictionary' handleChange={handleSliderChange} />
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={3} />
				<Grid item xs={6}>
					<PermissionsSlider marks={contributors} label='contributors' handleChange={handleSliderChange} />
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={3} />
				<Grid item xs={6}>
					<PermissionsSlider marks={sequences} label='sequences' handleChange={handleSliderChange} />
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Permissions;
