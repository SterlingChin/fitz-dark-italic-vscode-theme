// Comment
import React, { Component } from 'react';
import PropTypes from 'react-proptypes';
import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total     : null,
			next      : null,
			operation : null,
		};
	}

	handleClick = (buttonName) => {
		this.setState(calculate(this.state, buttonName));
	};
	render() {
		return (
			<React.Fragment>
				<Header />
				<div className="component-app">
					Tacos
					<Display
						value={this.state.next || this.state.total || `0`}
					/>
					<ButtonPanel onClick={this.handleClick} />
					{/* A JSX comment */}
				</div>
			</React.Fragment>
		);
	}
}

const Header = (props) => {
	return <div>{props.title}</div>;
};

// types
Header.proptypes = {
	title : PropTypes.string.isRequired,
};

App.test = `testing`;

export default App;
