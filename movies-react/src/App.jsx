import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Homepage from "./Homepage";
import Newrelease from "./Movie";
import Series from "./Series";
import Horror from "./Horror";
import Anime from "./Anime";
import Kdrama from "./Kdrama";
import About from "./About";
import Application from "./Application";
const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/application" element={<Application />} />
          <Route path="/movies" element={<Newrelease />} />
          <Route path="/horror" element={<Horror />} />
          <Route path="/series" element={<Series />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/kdrama" element={<Kdrama />} />
           <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
