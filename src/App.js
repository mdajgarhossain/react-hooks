import React from 'react';
// import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
// import Hello from './components/Helsinki/State';
// import Counter from './components/Helsinki/Counter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import UseEffectOne from './components/UseEffectOne';
import UseEffectTwo from './components/UseEffectTwo';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import ClassRenderPropsOne from './components/ClassRenderPropsOne';
import ClassRenderPropsTwo from './components/ClassRenderPropsTwo';
import User from './components/ClassRenderPropsThree';
import ClassCounterRenderProps from './components/ClassCounterRenderProps';
import FunctionalComponentRenderPropsOne from './components/FunctionalComponentRenderPropsOne';
import FunctionalComponentRenderPropsTwo from './components/FunctionalComponentRenderPropsTwo';
import FunctionalComponentRenderPropsImplementation from './components/FunctionalComponentRenderPropsImplementation';
import ComponentA from './components/ComponentA';
import { UserProvider } from './components/userContext';
import Navbar from './components/theNetNinja/Navbar';
import BookList from './components/theNetNinja/BookList';
import ThemeContextProvider from './components/theNetNinja/contexts/ThemeContext';
import ThemeToggle from './components/theNetNinja/ThemeToggle';
import AuthContextProvider from './components/theNetNinja/contexts/AuthContext';
import UseReducerOne from './components/UseReducerOne';


export const UserContext = React.createContext();
// console.log(UserContext);
export const ChannelContext = React.createContext();

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
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <ClassRenderPropsOne />
      <ClassRenderPropsTwo /> */}
      {/* <User render={(isLoggedIn) => isLoggedIn ? 'Jewell' : 'Guest'} />
      <ClassCounterRenderProps>
        {(count, incrementCount) => 
          <ClassRenderPropsOne count={count} incrementCount={incrementCount}/>
        }
      </ClassCounterRenderProps>
      <ClassCounterRenderProps>
        {(count, incrementCount) => 
          <ClassRenderPropsTwo count={count} incrementCount={incrementCount}/>
        }
      </ClassCounterRenderProps> */}
      {/* <FunctionalComponentRenderPropsOne />
      <FunctionalComponentRenderPropsTwo /> */}
      {/* <FunctionalComponentRenderPropsImplementation 
        renderProps={(name, handleName, submitName) => (
          <FunctionalComponentRenderPropsOne 
            name={name}
            handleName={handleName} 
            submitName={submitName}
          />
        )}
      />
      <FunctionalComponentRenderPropsImplementation 
        renderProps={(name, handleName, submitName) => (
          <FunctionalComponentRenderPropsTwo 
            name={name}
            handleName={handleName} 
            submitName={submitName}
          />
        )}
      /> */}
      {/* <UserContext.Provider value='Jewell'>
        <ChannelContext.Provider value='Codevolution'>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <UserProvider value='Jewell - Software Developer'> */}
        {/* <ComponentA /> */}
      {/* </UserProvider> */}

      {/* <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider> */}

      <UseReducerOne />
    </div>
  );
}

export default App;
