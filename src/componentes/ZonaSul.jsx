import f1 from '../../src/componentes/public/perimetral.png'
import f2 from '../../src/componentes/public/bobcat.png'
import f3 from '../../src/componentes/public/play.png'
import f4 from '../../src/componentes/public/pvs.png'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './ZonaSul.css'

export default function LinhaAtuacao() {
  return (
    <Container>
      <Row>
        <Col sm="12" lg="6" mg="6">
          <h1 className="text mt-5" style={{ color: "white" }}>
            Zona Sul de Tramandaí
          </h1>
          <br />
          <h3>Avenida Perimetral</h3>
          <p className="text" style={{ color: "white" }}>
            Vereador Thiago Lopes trouxe e destinou o valor de R$ 500.000 para o
            asfaltamento da Avenida Perimetral em Nova Tramandaí, Esse recurso
            foi obtido por meio de uma emenda parlamentar do Deputado Federal
            Márcio Biolchi.
          </p>

          <h3>BobCat</h3>

          <p className="text" style={{ color: "white" }}>
            Junto à bancada de vereadores do MDB, o vereador Thiago Lopes
            destinou R$ 420.000 para a compra de uma BobCat, máquina que tem
            sido amplamente utilizada em diversos serviços no município.
          </p>

          <h3>PLAYGROUND</h3>
          <p className="text" style={{ color: "white" }}>
            Mediante uma emenda impositiva pessoal, o vereador Thiago Lopes
            destinou o valor de R$ 40.000 para a compra e instalação de um
            playground completo na Praça do Jardim Atlântico.
          </p>

          <h3>PVS NA RUA MATO GROSSO</h3>
          <p className="text" style={{ color: "white" }}>
            O vereador Thiago Lopes destinou o valor de R$ 50.000 para a compra
            e a aplicação de PVS na rua Mato Grosso, em frente ao Ginásio Fr.
            Affonso Penna Kury.
          </p>
        </Col>
        <Col sm="12" lg="6" mg="6">
        <div className="galeria container mt-5">
          <div className="">
            <img src={f1} alt="" />
            <p>Av. Perimetral</p>
          </div>

          <div className="">
            <img src={f2} alt="" />
            <p>BobCat</p>
          </div>

          <div>
            <img src={f3} alt="" />
            <p>Playground</p>
          </div>
          <div>
            <img src={f4} alt="" />
            <p>PVS</p>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
  );
}
