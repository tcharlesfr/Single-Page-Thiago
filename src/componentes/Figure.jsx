import Figure from 'react-bootstrap/Figure';
import img from "./aa.png"

function FigureExample() {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="foto"
        src={img}
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
  );
}

export default FigureExample;