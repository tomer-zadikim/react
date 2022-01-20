import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./styles.css";
import About from "./pages/about";
import Home from "./pages/home";
import Search from "./pages/search";
import Header from "./components/header";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header
          pages={[
            { name: "HOME", link: "/" },
            { name: "ABOUT", link: "/about" },
            { name: "SEARCH", link: "/search" }
          ]}
        />
        <Container maxWidth="bg">
          <Box
            sx={{ bgcolor: "#cfe8fc", minHeight: "50vh" }}
            style={{ padding: "10px" }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Box>
        </Container>
        <div>Footer</div>
      </BrowserRouter>
    </div>
  );
}
