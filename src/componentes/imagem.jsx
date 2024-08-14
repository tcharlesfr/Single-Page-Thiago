import Image from "react-bootstrap/Image";
import img1 from "./public/t1b.png";
import img2 from "./public/t2b.png";
import img3 from "./public/t3b.png";

import logo from "./public/logoThiagoPreto.png";

// import b1 from "./public/bairros/b1.jpg";
// import b2 from "./public/bairros/b2.jpg";
// import b3 from "./public/bairros/b3.jpg";

import ftparada from "./public/leis/parada.png";

function FotoThiago1() {
  return <Image src={img1} fluid width={300} height={300} />;
}

function FotoThiago2({ width, height }) {
  return <Image src={img2} fluid width={width} height={height} />;
}
function FotoThiago3({ width, height }) {
  return <Image src={img3} fluid width={width} height={height} />;
}

function LogoThiago() {
  return <Image src={logo} fluid width={300} height={300} />;
}

// function Bairro1() {
//   return <Image src={b1} fluid width={300} height={300} />;
// }

// function Bairro2() {
//   return <Image src={b2} fluid width={300} height={300} />;
// }

// function Bairro3() {
//   return <Image src={b3} fluid width={300} height={300} />;
// }

function parada() {
  return <Image src={ftparada} fluid width={300} height={300} />;
}
export {
  FotoThiago1,
  FotoThiago2,
  LogoThiago,
  // Bairro1,
  // Bairro2,
  // Bairro3,
  parada,
  FotoThiago3
};
