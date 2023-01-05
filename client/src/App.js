import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Nav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Slushies from "./pages/Slushies";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CustomerPanel from "./pages/CustomerPanel";
import "./App.css";
import { StoreProvider } from "./utils/GlobalState";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <StoreProvider>
            <Header />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/customerpanel" element={<CustomerPanel />} />
              <Route path="/search" element={<Search />} />
              <Route path="/slushies" element={<Slushies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>Wrong page!</h1>} />
            </Routes>
            <Footer />
          </StoreProvider>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
