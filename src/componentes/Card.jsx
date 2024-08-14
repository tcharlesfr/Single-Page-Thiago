import Card from "react-bootstrap/Card";
import { FotoThiago1 } from "./imagem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Cards() {
  return (
    <div>
      <Container >
        <Row>
          <Col sm="12" lg="4">
            <FotoThiago1></FotoThiago1>
          </Col>
          <Col sm="12" style={{ width: "50rem" }}>
            <br></br>
            <br></br>

            <h2 className="text" style={{ color: "white" }}>
              O vereador Thiago Lopes trouxe e destinou mais de{" "}
              <b style={{ color: "yellow" }}>R$ 5.399.172,12</b> para Tramandaí.
            </h2>
            <br></br>
            <h4 className="text" style={{ color: "white" }}>
              Foram mais de <b>R$ 2 milhões</b> em emendas parlamentares, mais
              de <b>R$ 2,4 milhões</b> em emendas impositivas de bancada e mais
              de <b>R$ 700 mil</b>
              pessoal. Este dinheiro foi muito importante para o desenvolvimento
              do município.
            </h4>
            <br></br>

            <h4 className="text" style={{ color: "white" }}>
              <b style={{ color: "yellow" }} >1068 Pedidos de Providências</b> foram realizados em 3 anos e
              meio de mandato, mostrando seu comprometimento com os bairros de
              Tramandaí.
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cards;

<div className=" container">
  <div className="">
    <div className="row">
      <div className=" col">
        {" "}
        <FotoThiago1></FotoThiago1>
      </div>
      <div className="col xs={8}">
        {/* <Cards></Cards> */}
        <br></br>
        <h2 className="text" style={{ color: "white" }}>
          O vereador Thiago Lopes trouxe e destinou mais de{" "}
          <b style={{ color: "yellow" }}>R$ 5.399.172,12</b> para Tramandaí.
        </h2>
        <br></br>
        <h4 className="text" style={{ color: "white" }}>
          Foram mais de <b>R$ 2 milhões</b> em emendas parlamentares, mais de{" "}
          <b>R$ 2,4 milhões</b> em emendas impositivas de bancada e mais de{" "}
          <b>R$ 700 mil</b>
          pessoal. Este dinheiro foi muito importante para o desenvolvimento do
          município.
        </h4>
        <br></br>

        <h4 className="text" style={{ color: "white" }}>
          <b>1062 Pedidos de Providências</b> foram realizados em 3 anos e meio
          de mandato, mostrando seu comprometimento com os bairros de Tramandaí.
        </h4>
      </div>
    </div>
  </div>
</div>;
