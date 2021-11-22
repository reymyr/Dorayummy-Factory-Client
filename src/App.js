import React from 'react';
import "@fontsource/poppins/400.css"
import "@fontsource/open-sans/700.css"
import {
  ChakraProvider,
} from '@chakra-ui/react';
import {Routes, Route, BrowserRouter as Router, Redirect} from "react-router-dom"
import theme from "./theme";
import Index from "./pages/Index"
import Recipe from "./pages/Recipe"
import Request from "./pages/Request"
import Material from "./pages/Material"
import Login from "./pages/Login"

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Navigation />
      </ChakraProvider>
    </Router>
  );
}

const Navigation = () => {
  return(
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recipe" element={<Recipe/>} />
      <Route path="/material" element={<Material />} />
      <Route path="/request" element={<Request/>} />
    </Routes>
  )
}

export default App;