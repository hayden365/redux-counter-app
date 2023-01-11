import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer';
import { Provider } from 'react-redux';
import loggerMiddleware from './middleware/log';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const middleware = applyMiddleware(loggerMiddleware);

const store = createStore(rootReducer, middleware);

const render = () =>
	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<App
					onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
					onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
				/>
			</Provider>
		</React.StrictMode>,
	);
render();

store.subscribe(render);

reportWebVitals();
