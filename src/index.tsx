import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

const el = document.getElementById('app-root')
if (el === null) throw new Error('Root container missing in index.html')
const root = ReactDOM.createRoot(el);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
// ReactDOM.render(
//     <App />,
//     document.getElementById('app-root'),
// )