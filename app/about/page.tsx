import { title } from "@/components/primitives";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

export default function AboutPage() {
  return (
    <div>
      <Container>
      <h1>Show Video</h1>
       <div className="ratio ratio-16x9">
       <iframe src="https://www.youtube.com/embed/-K-WY0WRT48?si=M2lFgVY0fszTqzDU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
      </div>

      </Container>

     

    </div>
  );
}
