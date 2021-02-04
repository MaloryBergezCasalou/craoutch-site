import React from 'react';
import ReactDOM from 'react-dom';

import Auth from './components/Auth.js';

// Main Entry point function
function App() {
	return <Auth />
}

// Rendering the entire react application
ReactDOM.render(<App />, document.getElementById('root'));