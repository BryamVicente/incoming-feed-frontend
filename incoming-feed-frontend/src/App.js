
import './App.css';
import ArticlePage from './Containers/ArticlePage'

import React from 'react'
import { BrowserRouter} from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter>
        
          <ArticlePage />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
