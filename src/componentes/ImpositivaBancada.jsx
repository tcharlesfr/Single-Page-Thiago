import Table from "react-bootstrap/Table";


function BasicExample() {

    let Impositivas = [
        "Aquisição de um veículo para condução de pessoas em consultas em Porto Alegre.",
        "Reforma na UPA - Tramandaí.",
        "Compra de uma ambulância para o município.",
        "Reforma na UBS - Barra.",
        "Compra de uma Bobcat para a Zona Sul - Tramandaí.",
        "Reforma no Canil Municipal.",
        "Compra de livros para Biblioteca Municipal.",
        "Reformas na UPA - Tramandaí.",
        "Manutenção do piso da E.M.E.F Jorge Enéas Sperb.",
        "Pavimentação junto a Brigada Militar de Tramandaí.",
        "Pavimentação junto a Praça Miguel Teixeira - bairro Indianópolis.",
        "Corpo de Bombeiros (material permanente).",
        "Carreta basculante para a Secretaria da Zona Sul.",
        "Microtrator para a Secretaria da Zona Sul.",
        "Aquisição de materiais permanentes e equipamentos para UPA - Tramandaí.",
        "Subsídio para ensaios e competições do CTG.",
        "Reforma do telhado da UPA - Tramandaí."
    ];

    let valor = [
        "R$ 100.000,00",
        "R$ 210.000,00",
        "R$ 270.000,00",
        "R$ 200.000,00",
        "R$ 420.000,00",
        "R$ 180.000,00",
        "R$ 15.000,00",
        "R$ 250.000,00",
        "R$ 25.000,00",
        "R$ 40.000,00",
        "R$ 300.000,00",
        "R$ 40.000,00",
        "R$ 30.000,00",
        "R$ 10.000,00",
        "R$ 149.100,00",
        "R$ 21.180,12",
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
          <tr>
            <td>{valor[11]}</td>
            <td>{Impositivas[11]}</td>                      
          </tr>   
          <tr>
            <td>{valor[12]}</td>
            <td>{Impositivas[12]}</td>                      
          </tr>   
          <tr>
            <td>{valor[13]}</td>
            <td>{Impositivas[13]}</td>                      
          </tr>   
          <tr>
            <td>{valor[14]}</td>
            <td>{Impositivas[14]}</td>                      
          </tr>   
          <tr>
            <td>{valor[15]}</td>
            <td>{Impositivas[15]}</td>                      
          </tr>   
          <tr>
            <td>{valor[16]}</td>
            <td>{Impositivas[16]}</td>                      
          </tr>   
          {/* <tr>
            <td>{valor[17]}</td>
            <td>{Impositivas[17]}</td>                      
          </tr>
           */}
                               
      </tbody>
    </Table>
  );
}

export default BasicExample;
