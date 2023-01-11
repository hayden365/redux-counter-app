import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from './reducer';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

type Props = {
	onIncrement: () => void;
	onDecrement: () => void;
};

function App({ onIncrement, onDecrement }: Props) {
	const [todoValue, setTodoValue] = useState('');
	const counter = useSelector((state: RootState) => state.counter);
	// store안에 들어있는 state
	const todos: string[] = useSelector((state: RootState) => state.todos);
	const dispatch = useDispatch();

	const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch({ type: 'ADD_TODO', text: todoValue });
		setTodoValue('');
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTodoValue(event.target.value);
	};

	return (
		<div className="App">
			<p>Clicked: {counter} times</p>
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
			<form onSubmit={addTodo}>
				<input type="text" value={todoValue} onChange={handleChange} />
				<input type="submit" />
			</form>
		</div>
	);
}

export default App;
