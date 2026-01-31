import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useJsApiLoader } from "@react-google-maps/api";

import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import TeamPage from "./pages/TeamPage";
import BeliefsPage from "./pages/BeliefsPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import theme from "./theme";
import { Layout } from "./components/Layout";

function App() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return (
      <>
      </>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-team" element={<TeamPage />} />
            <Route path="/beliefs" element={<BeliefsPage />} />
            <Route path="/attend-service" element={<ServicePage />} />
            <Route path="/contact-us" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;