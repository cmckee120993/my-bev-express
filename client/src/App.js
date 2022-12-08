import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Slushies from './pages/Slushies';
import Contact from './pages/Contact';
import Login from './pages/Login';
import './App.css';

const httpLink = createHttpLink ({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
            <Header/>
            <Navbar/>
            <Routes>
                <Route
                  path="/"
                  element={<Home/>}
                />
                <Route
                  path="/login"
                  element={<Login/>}
                />
                <Route
                  path="/search"
                  element={<Search/>}
                />
                <Route
                  path="/slushies"
                  element={<Slushies/>}
                />
                <Route
                  path="/contact"
                  element={<Contact/>}
                />
                <Route
                  path="*"
                  element={<h1>Wrong page!</h1>}
                />
            </Routes>
            <Footer/>
          </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
