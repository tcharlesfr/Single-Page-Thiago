import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LogoThiago from "./public/logo2024.png";
import Image from "react-bootstrap/Image";

function BrandExample() {
  return (
    <>
      <nav class="navbar bg-primary navbar-expand-lg " data-bs-theme="dark" style={{'position':'fixed','width':'100%', 'z-index':'999', 'margin-top':'0px' }}>
        <div class="container-fluid">
          <a class="navbar-brand" href="...">
            <img src={LogoThiago} alt="" style={{ width: "80px"}} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".collapse"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-target=".collapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" >
            <ul class="navbar-nav ms-auto'">
            <li class="nav-item">
                <a class="nav-link" href="#0">
                  Emendas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#1">
                  Principais linhas de atuação
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#2">
                  Leis criadas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#3">
                  Vereador dedicado aos bairros
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#4">
                  Zona Sul Tramandaí
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#5">
                  Vereador premiado
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default BrandExample;
