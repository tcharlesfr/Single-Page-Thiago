import "./App.css";

import Emendas from "./componentes/Emendas";
import Navbar from "./componentes/Navbar";

import Cards from "./componentes/Card";

import CardPremios from "./componentes/CardsPremios";
import CardsLeis from "./componentes/CardsLeis";
import LinhaAtuacao from "./componentes/LinhaAtuacao";
import Galeria from "./componentes/Galeria";
import ZonaSul from "./componentes/ZonaSul";

import Foot from "./componentes/Foot";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="App pt-5">
        <div className="container" id='0'>
          <Cards></Cards>
          <Emendas></Emendas>
        </div>
        <div
          id="1"
          // style={{ "background-color": "#2600a6 " }}
        >
          <div className="container">
            <LinhaAtuacao></LinhaAtuacao>{" "}
          </div>
        </div>
        <div style={{ "background-color": "#1b007e" }} id="2" className="leis">
          <div className="container pb-5">
            <CardsLeis></CardsLeis>
          </div>
        </div>
        <div style={{ "background-color": "#0e0057" }} id="3" className="gl">
          <div className="container pb-5">
            <Galeria></Galeria>
          </div>
        </div>
        <div style={{ "background-color": "#0e0057" }} id="4" className="gl">
          <div className="container pb-5">
            <ZonaSul></ZonaSul>
          </div>
        </div>
        <div style={{ "background-color": "#1b007e" }} id="5">
          <div className="container">
            <CardPremios />
          </div>
        </div>

        <Foot></Foot>
      </div>
    </div>
  );
}

export default App;
