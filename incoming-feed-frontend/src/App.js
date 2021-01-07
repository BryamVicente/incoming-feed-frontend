
import './App.css';
import ArticlePage from './Containers/ArticlePage'

import React from 'react'
import { BrowserRouter} from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div className="entire-page">
        <BrowserRouter>
        
          <ArticlePage />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
