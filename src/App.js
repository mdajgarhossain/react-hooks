import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import Hello from './components/Helsinki/State';
import Counter from './components/Helsinki/Counter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import UseEffectOne from './components/UseEffectOne';
import UseEffectTwo from './components/UseEffectTwo';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

function App() {
  
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <Hello name='Jewell' age={27}/>
      <Hello name='Karim' age={30}/> */}
      {/* <Counter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <UseEffectOne /> */}
      {/* <UseEffectTwo /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      <MouseContainer />
    </div>
  );
}

export default App;
