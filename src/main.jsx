import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
// Materi Redux
import { reducers } from './store/index.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Materi Redux
const store = createStore(reducers);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider> Materi Redux */}
      <NextUIProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NextUIProvider>
    {/* </Provider> */}
  </StrictMode>,
)
