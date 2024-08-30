import { Outlet } from "react-router-dom";
import { Header, Footer } from "../";
import { Container } from "./Styles";

export default function AppLayout() {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
    );

}
