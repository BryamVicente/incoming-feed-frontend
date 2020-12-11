import logo from './logo.svg';
import './App.css';
import ArticlePage from './Containers/ArticlePage'
import { Logo } from './Components/Logo';


function App() {
  return (
    <div className="App">
      <Logo/>
      <ArticlePage   />
    </div>
  );
}

export default App;
