import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

export const myProjectsData = [
  {
    title: "Bhavika Online",
    imgPath:
      "https://www.bhavika.online/api/uploads/brand/logo/logo-1654946542966-bhavika-12345_opt.png",
    description:
      "Bhavika Grocery Store in Hong Kong.Bhavika Store is a South Asian Grocery store with thousands of freshly shipped products loved by residents in Hong Kong. We do catering for big and small parties as well.Presently we have two stores. One in the busy Tseung Kwan O district and the other flagship store inside the Sheraton HK Tung Chung Hotel.",
    link: "https://www.bhavika.online/",
  },
  {
    title: "Homale.com",
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7TT_caAYrozK7ZL0TdX4NK_LlX4nC7iox20kQJZazvb_00f_Sy_cS8D_tiatDzRC5OY&usqp=CAU",
    description:
      "Homaale is a platform designed to provide service booking solutions to the service seekers and business opportunities to various service providing companies by bridging a gap between them. It covers a wide range of services from various industries like Accounting, Gardening, Health, Beauty, and many more.",
    link: "https://homaale.com/",
  },
  {
    title: "Annapurna Galleries",
    imgPath:
      "https://www.rabinsxp.com/medias/Annapurna-Galleries-is-an-online-platform-where-you-can-buy.jpeg",
    description:
      "Annapurna Galleries is a ecommerce website for buying and selling arts.",
    link: "https://annapurnagalleries.com/",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {myProjectsData?.map((project, item) => (
            <Col md={4} className="project-card" key={item}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
