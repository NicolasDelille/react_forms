import React from 'react';
import Permissions from './components/Permissions';

function App() {
	const [permissions, setPermissions] = React.useState();

	const handlePermissions = React.useCallback(totalPermissions => {
		// console.log(totalPermissions);
	}, []);

	return (
		<div className='App'>
			<Permissions handlePermissions={handlePermissions} />
		</div>
	);
}

export default App;
