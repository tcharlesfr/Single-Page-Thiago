import Accordion from 'react-bootstrap/Accordion';
import Pessoal from './ImpositivaPessoal'
import ImpositivaBancada from './ImpositivaBancada'
import EmendaParlamentar from './EmendaParlamentar'

function BasicExample() {
  return (
    <div className='mb-5 mt-5' >
      <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Emendas Impositivas Pessoais (R$ 781.600,00)</Accordion.Header>
        <Accordion.Body>
         
        <Pessoal></Pessoal>

        Descrição do que é a emenda, fazer em todas

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Emendas Impositivas de Bancada (R$ 2.460.280,12)</Accordion.Header>
        <Accordion.Body>
         
          <ImpositivaBancada></ImpositivaBancada>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Emendas Parlamentares (R$ 2.157.292,00)</Accordion.Header>
        <Accordion.Body>
          
        <EmendaParlamentar></EmendaParlamentar>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default BasicExample;