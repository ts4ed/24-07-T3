import { Container } from "./App.styled";
import { Suspense } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Users } from "./components/Users/Users";
import { User } from "./components/User/User";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Dashboard />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/*" element={<User />} />
          <Route path="*" element={<Users />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
