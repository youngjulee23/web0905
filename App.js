import { createContext, useContext, useState } from 'react';
import Counter from './features/counter/Counter';
import UserList from './features/users/UserList';
// import './App.css';
// import { MyContext } from './components/context'
// import ChildComponent from './components/ChildComponent';
// import ParentComponent from './components/ParentComponent';
// import { ThemeContext } from './components/ThemeContext ';
// import { ColorContext } from './ColorContext';
// import ColorBox from './components/ColorBox';
// import HomeComponent from './components/HomeComponent';

// const MyContext = createContext();

function App() {

  // const [darkMode, setDarkMode] = useState(false);

  return (
  // <>
  //   <ChildComponent/>
  // </>

  // <ThemeContext.Provider value={{darkMode, setDarkMode}}>
  //   <HomeComponent/>
  // </ThemeContext.Provider>

  // <ColorContext.Provider value={color}>
  //   <ColorBox/>
  // </ColorContext.Provider>

  // <>
  // <Counter/>
  // </>

  <>
  <UserList/>
  </>
)};



// function GrandParent(){
//   return <Parent/>;
// }
// function Parent(){
//   return <Child/>;
// }
// function Child() {
//   return <Message/>;
// }
// function Message() {
//   const value = useContext(MyContext);
//   return <div>전달받은 데이터: {value}</div>
// }
export default App;
