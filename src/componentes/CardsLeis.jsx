import Card from "./CardLei";
import ftparada from "./public/leis/parada.png";
import ftCadeiraRodas from "./public/leis/crodas.png";
import ftenf1 from "./public/leis/enf.png";
import ftenf2 from "./public/leis/saude.png";
import ftbici from "./public/leis/bici.png";
import ftposto from "./public/leis/posto500.png";

export default function CardsLeis() {
  return (
    <div className="row justify-content-center mt-5 rounded ">
    <h1 className="text mt-5 mb-5 " style={{'color':'white'}}>Leis criadas</h1>
      
      <div className="col-10 col-md-4">
        <Card
          titulo={"Adote uma parada de ônibus"}
          descricao={"Tem por finalidade celebrar termo de cooperação com pessoas físicas ou jurídicas de direito público ou privado, para implementação, melhoria e conservação de pontos de ônibus no Município de Tramandaí"}
          n={"lei ordinária nº 4477/2021"}
          foto={ftparada}
        ></Card>
      </div>
      <div className="col-10 col-md-4">
        <Card
          titulo={"Cadeira de rodas obrigatória em hipermercados, bancos"}
          descricao={"Determina a disponibilização de cadeira de rodas para atendimento de pessoas com mobilidade reduzida nas agências bancárias, supermercados e centros comerciais situados em Tramandaí"}
          n={"lei ordinária nº 4465/2021"}
          foto={ftCadeiraRodas}
        ></Card>
      </div>
      <div className="col-10 col-md-4">
        <Card
          titulo={"Semana e dia da área da saúde"}
          descricao={"Fica instituída a Semana Municipal dos Profissionais da Área da Saúde no Município de Tramandaí, a ser realizada anualmente na semana correlata ao dia 12 de maio, data em que também se comemorará o Dia Municipal dos Profissionais da Saúde."}
          n={"lei ordinária nº 4604/2022"}
          foto={ftenf1}
        ></Card>
      </div>
      <div className="col-10 col-md-4 ">
        <Card
          titulo={"30 horas para os cargos de técnico e auxiliar de enfermagem"}
          descricao={"Determina o período normal de trabalho de 40 horas semanais, ou de 30 horas semanais quando em período de trabalho sob o regime de plantão"}
          n={"lei ordinária nº 4489/2021"}
          foto={ftenf2}
        ></Card>
      </div>
      <div className="col-10 col-md-4 mb-5">
        <Card
          titulo={"Alteração do nome do centro de especialidades"}
          descricao={'Tem por finalidade celebrar termo de cooperação com pessoas físicas ou jurídicas de direito público ou privado, para implementação, melhoria e conservação de pontos de ônibus no Município de Tramandaí'}
          n={"Lei Ordinária 4684/2023"}
          foto={ftposto}
        ></Card>
      </div>
      <div className="col-10 col-md-4 mb-5">
        <Card
          titulo={"Adote um bicicletário e dá outras providências"}
          descricao={'Visa fornecer aos ciclistas locais seguros para estacionarem suas bicicletas; e incentivar o uso da bicicleta como meio de transporte, lazer e exercício físico.'}
          n={"Lei Ordinária 4708/2024"}
          foto={ftbici}
        ></Card>
      </div>

    </div>
  );
}
