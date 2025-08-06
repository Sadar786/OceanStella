import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>  {/* ← This was missing */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)

   
 