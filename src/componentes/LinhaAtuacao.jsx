import { FotoThiago3 } from "./imagem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function LinhaAtuacao() {
  return (
    <Container>
      <Row>
        <Col sm="12" lg="6" mg="6" >
          <h1 className="text mt-2" style={{'color':'white'}}> Principais linhas de atuação</h1>
          <br />
          <h4 className="text" style={{ color: "white", 'text-align': 'justify' }}>
            <b style={{ color: "yellow" }}>Luta pela saúde!</b> Como Presidente
            da Comissão da Saúde (2023) lutou pelo pagamento dos ex-funcionários
            do Hospital Tramandaí e sempre buscou e destinou verbas para:
            Farmácia municipal, realização de exames, melhorias, reformas nas
            UBS e UPA, etc.
            <br />
            <br />
            <b style={{ color: "yellow" }}>Comprometido com a educação</b>,
            trouxe e destinou diversas verbas para as escolas do município, para
            reformas e compra de materiais permanentes e de consumo.
            <br />
            <br />
            <b style={{ color: "yellow" }}>Junto pela Segurança</b>, prestou
            total apoio ao chamamento de novos guardas municipais e bombeiros e
            destinou junto a bancada do MDB verba para a polícia civil e corpo
            de bombeiros.
          </h4>
        </Col>
        <Col sm="12" lg="6" mg="6">
          <FotoThiago3></FotoThiago3>
        </Col>
      </Row>
    </Container>
  );
}
