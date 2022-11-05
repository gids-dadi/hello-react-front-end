import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../store/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();

  const randomGreetings = () => {
    dispatch(fetchGreetings());
  };

  console.log(fetchGreetings());
  useEffect(() => {
    randomGreetings();
  }, []);

  const { greetings } = useSelector((state) => state.greetings);
  return (
    <div>
      <p>{greetings}</p>
      <button onClick={() => randomGreetings()}>Dispaly Message</button>
    </div>
  );
};

export default Greeting;
