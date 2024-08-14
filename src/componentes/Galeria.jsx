import b1 from "./public/bairros/cruzeiro-do-sul.png";
import b2 from "./public/bairros/emboaba.png";
import b3 from "./public/bairros/humaita.png";
import b4 from "./public/bairros/indianopolis.png";
import b5 from "./public/bairros/jardim-do-eden.png";
import b6 from "./public/bairros/nova-tramandaí.png";
import b7 from "./public/bairros/parque-dos-presidentes.png";
import b8 from "./public/bairros/portelinha.png";
import b9 from "./public/bairros/sao-francisco-2.png";
import b10 from "./public/bairros/tramandaí-sul.png";
import b11 from "./public/bairros/zona-nova.png";
import b12 from "./public/bairros/jardim-atlantico.png";

import "./Galeria.css";

function ShapeExample() {
  return (
    <div>
      <div>
        <h1 className="text pt-5"> Verador dedicado aos bairros</h1>
        <p style={{'color':"white", 'textAlign':"justify"}}>
          Foram realizados 1.077 Pedidos de Providências em três anos e meio de
          mandato, demonstrando o comprometimento constante com os bairros de
          Tramandaí. Esse volume de solicitações reflete a dedicação e o esforço
          em atender as necessidades e demandas da comunidade local, buscando
          sempre a melhoria da qualidade de vida e a solução de problemas. Cada
          pedido representa um passo importante na construção de uma cidade mais
          organizada, segura e acolhedora para todos os seus moradores.
        </p>
        <div className="galeria container">
          <div className="">
            <img src={b1} alt="" />
            <p>Cruzeiro do Sul</p>
          </div>

          <div className="">
            <img src={b2} alt="" />
            <p>Emboaba</p>
          </div>

          <div>
            <img src={b3} alt="" />
            <p>Humaita</p>
          </div>
          <div>
            <img src={b4} alt="" />
            <p>Indianópolis</p>
          </div>
          <div>
            <img src={b5} alt="" />
            <p>Jardim Atlântico</p>
          </div>
          <div>
            <img src={b6} alt="" />
            <p>Jardim do Éden</p>
          </div>
          <div>
            <img src={b7} alt="" />
            <p>Nova Tramandaí</p>
          </div>
          <div>
            <img src={b8} alt="" />
            <p>Parque dos Presidentes</p>
          </div>
          <div>
            <img src={b9} alt="" />
            <p>Portelinha</p>
          </div>
          <div>
            <img src={b10} alt="" />
            <p>São Francisco 2</p>
          </div>
          <div>
            <img src={b11} alt="" />
            <p>Tramandaí Sul</p>
          </div>
          <div>
            <img src={b12} alt="" />
            <p>Zona Nova</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShapeExample;
