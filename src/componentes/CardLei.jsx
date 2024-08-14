export default function Card({ titulo, descricao, n, foto }) {
  return (
    <div className="card text-bg-primary mb-3" >
      <div className="row g-0">
        <div className="col-md-4" style={{ padding: "5px" }}>
          <img src={foto} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" >{titulo}</h5>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <p className="card-text" style={{'padding':'10px', 'textAlign':"justify"}}>{descricao}</p>
        <p className="card-text">
          <small className="text-body-secondary">{n}</small>
        </p>
      </div>
    </div>
  );
}
