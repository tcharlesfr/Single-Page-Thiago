import CardPremio from './CardPremio'

export default function CardPremios() {
  return (
    <div className="row justify-content-center pb-5">
      <h1 className="text mt-5 mb-5" style={{'color':'white'}}>Vereador premiado</h1>
      <div className="col-6 col-md-4">
        <CardPremio
          empresa={"EMBOPICC"}
          texto={"Vereador Preferência"}
          ano={"2021"}
        ></CardPremio>
      </div>
      <div className="col-6 col-md-4">
        <CardPremio
          empresa={"Líder Pesquisas"}
          texto={"Vereador Destaque"}
          ano={"2021"}
        ></CardPremio>
      </div>
      <div className="col-6 col-md-4">
        <CardPremio
          empresa={"Destaque Pesquisas"}
          texto={"Vereador Destaque"}
          ano={"2022"}
        ></CardPremio>
      </div>
      <div className="col-6 col-md-4">
        <CardPremio
          empresa={"Rádio JCA"}
          texto={"Destaque e Mérito"}
          ano={"2022"}
        ></CardPremio>
      </div>
      <div className="col-6 col-md-4">
        <CardPremio
          empresa={"Lider Pesquisas"}
          texto={"Vereador Destaque"}
          ano={"2023"}
        ></CardPremio>
      </div>
      <div className="col-6 col-md-4">
        <CardPremio
          empresa={"Vereador Destaque"}
          texto={"Daniel Gomes Pereira"}
          ano={"2023"}
        ></CardPremio>
      </div>
      <div className="col-6 col-md-4">
        <CardPremio
          empresa={"Melhores do ano - Tramandaí"}
          texto={"Vereador Destaque"}
          ano={"2024"}
        ></CardPremio>
      </div>
    </div>
  );
}
