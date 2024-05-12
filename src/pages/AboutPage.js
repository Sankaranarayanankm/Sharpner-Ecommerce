import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Image } from "react-bootstrap";

const AboutPage = () => {
  return (
    <>
      <Header />
      <h1 className="text-center">ABOUT</h1>

      <div className="d-flex m-5">
        <Image
          src="https://plus.unsplash.com/premium_photo-1682265683254-3b08ea75ce40?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ width: "200px", height: "300px" }}
          roundedCircle
        />

        <p className="m-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste qui
          recusandae quod in harum soluta mollitia consequuntur incidunt, non
          suscipit quaerat aut perspiciatis eaque quas facere eveniet quia,
          quasi officiis! Similique iure ipsum illum alias exercitationem
          aperiam modi doloribus incidunt, praesentium officia ea tempore sed
          repellat. Error pariatur quos tempore molestias, nobis facere delectus
          aliquam, eaque amet minima, molestiae repellendus accusamus ducimus
          repudiandae eos odit corrupti unde hic sunt natus culpa? Ullam, optio
          numquam! Asperiores ullam deleniti eveniet repellendus dolorem, ipsum
          exercitationem recusandae dolor perspiciatis sunt tempore distinctio.
          Sequi deserunt est sint natus consequuntur aut, earum eligendi
          veritatis illum accusamus saepe totam enim a doloremque culpa quas hic
          eum atque ea molestias temporibus animi modi blanditiis. Officiis,
          facilis est repudiandae eligendi tenetur in nemo, ex, dolorum illo
          inventore eos sequi rem? Assumenda necessitatibus dolorum, commodi
          quisquam ducimus numquam temporibus, hic consequatur, molestiae iure
          illum voluptates veritatis. Quasi sint deserunt quidem iste culpa quo
          nam nulla cumque, tempore vero voluptates illo, obcaecati veritatis et
          nostrum sapiente iure, assumenda dolorum repellendus ipsa minima
          consequatur. Nisi dolores temporibus facilis consectetur, velit
          praesentium qui accusantium inventore exercitationem laudantium.
          Voluptatum eius in cum repellat similique. Cum recusandae repellendus
          saepe totam enim a doloremque culpa quas hic eum atque ea molestias
          temporibus animi modi blanditiis. Officiis, facilis est repudiandae
          eligendi tenetur in nemo, ex, dolorum illo inventore eos sequi rem?
          Assumenda necessitatibus dolorum, commodi quisquam ducimus numquam
          temporibus, hic consequatur, molestiae iure illum voluptates
          veritatis. Quasi sint deserunt quidem iste culpa quo nam nulla cumque,
          tempore vero voluptates illo, obcaecati veritatis et nostrum sapiente
          iure, assumenda dolorum repellendus ipsa minima consequatur. Nisi
          dolores temporibus facilis consectetur, velit praesentium qui
          accusantium inventore exercitationem laudantium. Voluptatum eius in
          cum repellat similique. Cum recusandae repellendussaepe totam enim a
          doloremque culpa quas hic eum atque ea molestias temporibus animi modi
          blanditiis. Officiis, facilis est repudiandae eligendi tenetur in
          nemo, ex, dolorum illo inventore eos sequi rem? Assumenda
          necessitatibus dolorum, commodi quisquam ducimus numquam temporibus,
          hic consequatur, molestiae iure illum voluptates veritatis. Quasi sint
          deserunt quidem iste culpa quo nam nulla cumque, tempore vero
          voluptates illo, obcaecati veritatis et nostrum sapiente iure,
          assumenda dolorum repellendus ipsa minima consequatur. Nisi dolores
          temporibus facilis consectetur, velit praesentium qui accusantium
          inventore exercitationem laudantium. Voluptatum eius in cum repellat
          similique. Cum recusandae repellendus
        </p>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
