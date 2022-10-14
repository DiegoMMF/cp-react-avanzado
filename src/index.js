// Since React 18:

import { createRoot } from 'react-dom/client'
import { App } from './pages/App.jsx'

const container = document.getElementById('app')

console.log("Hello World again")

const root = createRoot(container)
// createRoot(container!) if you use TypeScript

root.render(App) // it works

// root.render(<App tab="home" />);

// ------------------------------------------------------------------

// según el Curso, deberíamos escribir:

// import ReactDOM from "react-dom";
// ReactDOM.render("Hello, World!", document.getElementById("app"))

// ...pero al compilar recibimos el siguiente error:

// "ReactDOM.render is no longer supported in React 18. Use createRoot
// instead. Until you switch to the new API, your app will behave as
// if it’s running React 17."

// La solución de https://reactjs.org/link/switch-to-createroot es:

// Until React 17:

// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);
