import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./pages/Layout";
import "./styles/global.css";
import Pages from "pages/Pages";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Pages />
      {/* <Layout /> */}
      {/* </header> */}
    </div>
  );
}
export default App;
