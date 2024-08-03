import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";


const style = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  wrapper: {
    marginTop: "30px",
  },
};

function MainLayout() {
  return (
    <>
      <Container className={style.container}>
        <Header />
        <div className={style.wrapper}>
          <Outlet />
        </div>
        <Footer />
      </Container>
    </>
  );
}

export default MainLayout;
