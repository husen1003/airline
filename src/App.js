import { Routes, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <>
      <Routes>
        {routes.map(({ Component, ...rest }) => (
          <Route element={<Component />} {...rest} />
        ))}
      </Routes>
    </>
  );
}

export default App;
