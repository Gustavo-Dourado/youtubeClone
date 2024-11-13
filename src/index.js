import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PageStorage } from "./contexts/pageContext";
import { SearchStorage } from './contexts/searchContext';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
      <PageStorage>
          <SearchStorage>
            <App/>
          </SearchStorage>
      </PageStorage>
  </React.StrictMode>
);


