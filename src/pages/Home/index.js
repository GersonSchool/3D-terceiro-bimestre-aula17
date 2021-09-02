import React, { useReducer } from 'react';
import { Button, View } from 'react-native';
import { Container, Text } from './styles';
import { Creators } from '../../store/ducks/example';

import { useSelector, useDispatch } from 'react-redux';

const initialState = { count: 0 };

function reducer(state, action) {
  if (action.type === 'increment') {
    return {count: state.count + action.payload};
  } else if (action.type === 'decrement') {
    return {count: state.count - action.payload};
  }
  return state;
}

const Home = () => {
  const selector = useSelector(state => state);
  const disp = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Container>
			<Text>{state.count}</Text>
      <Button title='+' onPress={()=>{
        dispatch({type: 'increment', payload: 1});
      }}/>
      <Button title='-' onPress={()=>{
        dispatch({type: 'decrement', payload: 2});
      }}/>
      <Text>{selector.example.data}</Text>
      <Button title='add text' onPress={()=>{
        disp(Creators.addExample('texto qualquer'));
      }}/>
		</Container>
	);
};

export default Home;
