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
      <header className="App-header">
        <div className="czolowiczi imena">
          <h5> чоловічі імена / noms masculins </h5>
          <Dobroho_ranku name="Andriy" />
          <Dobroho_ranku name="Artem" />
          <Dobroho_ranku name="Antin" />
        </div>
        <div className="żinoczi imena">
          <h5> жіночі імена / noms féminins </h5>
          <Dobroho_ranku name="Anna"/>
          <Dobroho_ranku name="Bohdana"/>
          <Dobroho_ranku name="Myroslava"/>
        </div>
      </header>
    </div>
  )
}

export default App;
