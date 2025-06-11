import "../../styles/Home/cardsHome.css";
import { TbHealthRecognition } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";

export const CardsHome = () => {
  return (
    <div
      style={{
        backgroundColor: "#e5e7e9",
        padding: "",
      }}
    >
      <div class="containerCards">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <h2>Pacientes y cuidados</h2>
              <p>
               Los pacientes, las familias y los cuidadores son el centro de todo lo que hacemos.
               Recibirá atención y tratamiento oncológico de primer nivel, 
               basados ​​en las últimas investigaciones. Les brindaremos información y 
               apoyo durante su proceso de tratamiento.
              </p>
            </div>
          </div>
          <div class="face face2">
            <TbHealthRecognition />
            <p>Pacientes y cuidados</p>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <h2>Profecionales de la salud</h2>
              <p>
                Trabajamos en estrecha colaboración con profesionales clínicos para ofrecer
                la mejor detección, tratamiento y atención del cáncer. 
                Infórmese sobre nuestros tratamientos y servicios y acceda 
                a recursos de alta calidad.
              </p>
            </div>
          </div>
          <div class="face face2">
            <FaUserDoctor />
            <p>Profecionales de la salud</p>
          </div>
        </div>
      </div>
    </div>
  );
};
