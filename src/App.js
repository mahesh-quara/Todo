import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Props from './components/header/Props/Props';
import Todo from './components/header/Todo/Todo';

function App() {
  return (
    <div className="parent" >
      {/* <Header />
      <Props /> */}
      <Todo />
    </div>
  );
}

export default App;
