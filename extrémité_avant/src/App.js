import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//         випадкові імена / wylosuj imiona
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//         </a>
//       </header>

//     </div>
//   );
// }

function Dobroho_ranku(props) {
  return <h5>доброго ранку/Bonjour, {props.name}</h5>;
}

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <h2>імена / noms</h2>
      </div>
      <div className="App-body">
        <div id="czolowiczi imena" className="hrupa_imen">
          <h5> чоловічі імена / noms masculins </h5>
          <Dobroho_ranku name="Andriy" />
          <Dobroho_ranku name="Artem" />
          <Dobroho_ranku name="Antin" />
        </div>
        <div id="żinoczi imena" className="hrupa_imen">
          <h5> жіночі імена / noms féminins </h5>
          <Dobroho_ranku name="Anna"/>
          <Dobroho_ranku name="Bohdana"/>
          <Dobroho_ranku name="Myroslava"/>
        </div>
      </div>
      <div id="knopku" className="App-body">
         <button className="wypadkowi">випадкові нові імена/choisir de nouveaux noms </button>
      </div>
    </div>
  )
}

export default App;
