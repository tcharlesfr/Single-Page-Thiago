import trofeu from '../componentes/public/trophy.png'

function Premios({ texto, ano , empresa}) {
  return (
    <>
      <div class="card text-bg-light mb-3" >
        <div class="card-header" style={{'minHeight':'70px'}}>Empresa: {empresa}</div>
        <div class="card-body row">
          <div className="col">
            <img src={trofeu} alt="" style={{'width':'100px'}}/>
          </div>
          <div className="col">
            <p>Prêmio</p>
            <h5 class="card-title">{texto}</h5>
            <p class="card-text">{ano}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Premios;
