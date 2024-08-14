import Table from "react-bootstrap/Table";

var Impositivas = [
  "Revitalização da Praça Sidnei Ferri.",
  "Exames de alta e média complexidade.",
  "Construção de uma quadra de Beach Tennis.",
  "Aquisição de ondulações transversais.",
  "Compra de armários para o Conselho Tutelar.",
  "Aquisição de saibro para a Estância Velha.",
  "Aquisição de um Playground completo.",
  "Exames de mamografia.",
  "Reforma do piso da UPA.",
  "Construção de um abrigo para ponto de táxi.",
  "Manutenção do Centro de Eventos de Tramandaí.",
  "Melhorias na praça da Caruja.",
  "Instalação de um playground na praça da rua Militão de Almeida.",
  "Compra de matérias de consumo para a E.M.E.F  Erineu Rapaki.",
  "Compra de matérias de consumo para a E.M.E.F  São Francisco de Assis.",
  "Compra de matérias de consumo para a E.M.E.F  General Luiz Dêntice.",
  "Construção de uma parada de ônibus próximo a E.E.E.F Suely vacari.",
  "Compra de equipamentos permanentes para a UBS Zona Sul.",
  "Compra de equipamentos permanentes para a UBS Cruzeiro do sul.",
  "Compra de equipamentos permanentes para a UBS Indianópolis.",
  "Compra de equipamentos permanentes para a UBS Parque dos presidentes.",
  "Aquisição de exames de mamografia.",
  "Compra de material de consumo para UBASA.",
  "Compra de equipamentos básicos para a Farmácia Municipal.",
];

var valor = [
  "R$ 85.000,00",
  "R$ 85.000,00",
  "R$ 25.000,00",
  "R$ 15.000,00",
  "R$ 10.000,00",
  "R$ 20.000,00",
  "R$ 40.000,00",
  "R$ 62.000,00",
  "R$ 60.000,00",
  "R$ 12.200,00",
  "R$ 50.000,00",
  "R$ 50.000,00",
  "R$ 50.000,00",
  "R$ 5.000,00",
  "R$ 5.000,00",
  "R$ 4.400,00",
  "R$ 23.000,00",
  "R$ 30.000,00",
  "R$ 20.000,00",
  "R$ 20.000,00",
  "R$ 30.000,00",
  "R$ 30.000,00",
  "R$ 20.000,00",
  "R$ 30.000,00",
];


function BasicExample() {
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
          <tr>
            <td>{valor[17]}</td>
            <td>{Impositivas[17]}</td>                      
          </tr>
          <tr>
            <td>{valor[18]}</td>
            <td>{Impositivas[18]}</td>                      
          </tr>   
          <tr>
            <td>{valor[19]}</td>
            <td>{Impositivas[19]}</td>                      
          </tr>   
          <tr>
            <td>{valor[20]}</td>
            <td>{Impositivas[20]}</td>                      
          </tr>   
          <tr>
            <td>{valor[21]}</td>
            <td>{Impositivas[21]}</td>                      
          </tr>   
          <tr>
            <td>{valor[22]}</td>
            <td>{Impositivas[22]}</td>                      
          </tr>   
          <tr>
            <td>{valor[23]}</td>
            <td>{Impositivas[23]}</td>                      
          </tr>   
                               
      </tbody>
    </Table>
  );
}

export default BasicExample;
