import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import List from './components/List/List';
import Button from './components/Button/Button';

class App extends React.PureComponent {
	onHandleButton = () => {
		console.log('TCL: App -> onHandleButton -> onHandleButton');
	};

	render() {
		return (
			<div className="App">
			<header className="App-header">
				
				<p>Bienvenidos al curso de programación de cómputo móvil</p>
				<List items={[ 'Walter', 'Hola', 'oaxaca' ]} lastName={'Gonzalez'} />
				<img src={logo} className="App-logo" alt="logo" width="185" height="185"  />
​
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
		);
	}
}

export default App;

