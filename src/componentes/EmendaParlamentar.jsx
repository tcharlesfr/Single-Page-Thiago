import Table from "react-bootstrap/Table";

function BasicExample() {
  let Impositivas = [
    "Hospital Tramandaí para recursos livres.",
    "Hospital Tramandaí compra de equipamentos.",
    "E.E.E.M Assis Brasil reformas.",
    "E.E.E.F Suely Vacari reformas.",
    "E.E.E.M Barão de Tramandaí reformas.",
    "E.E.E.M Nossa Senhora reformas.",
    "E.E.E.F Tamandaré reformas.",
    "SAMU Compra de uma motolância.",
    "Av. Perimetral Pavimentação.",
    "Corpo de Bombeiros.",
    "Polícia Estadual."
  ];

  let valor = [
    "R$ 227.292,00",
    "R$ 500.000,00",
    "R$ 80.000,00",
    "R$ 70.000,00",
    "R$ 70.000,00",
    "R$ 80.000,00",
    "R$ 80.000,00",
    "R$ 50.000,00",
    "R$ 500.000,00",
    "R$ 250.000,00",
    "R$ 200.000,00"
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Valor</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>{valor[0]}</td>
          <td>{Impositivas[0]}</td>
        </tr>
        <tr>
          <td>{valor[1]}</td>
          <td>{Impositivas[1]}</td>
        </tr>
        <tr>
          <td>{valor[2]}</td>
          <td>{Impositivas[2]}</td>
        </tr>
        <tr>
          <td>{valor[3]}</td>
          <td>{Impositivas[3]}</td>
        </tr>
        <tr>
          <td>{valor[4]}</td>
          <td>{Impositivas[4]}</td>
        </tr>
        <tr>
          <td>{valor[5]}</td>
          <td>{Impositivas[5]}</td>
        </tr>
        <tr>
          <td>{valor[6]}</td>
          <td>{Impositivas[6]}</td>
        </tr>
        <tr>
          <td>{valor[7]}</td>
          <td>{Impositivas[7]}</td>
        </tr>
        <tr>
          <td>{valor[8]}</td>
          <td>{Impositivas[8]}</td>
        </tr>
        <tr>
          <td>{valor[9]}</td>
          <td>{Impositivas[9]}</td>
        </tr>
        <tr>
          <td>{valor[10]}</td>
          <td>{Impositivas[10]}</td>
        </tr>
        {/* <tr>
          <td>{valor[11]}</td>
          <td>{Impositivas[11]}</td>
        </tr> */}
       
      </tbody>
    </Table>
  );
}

export default BasicExample;
