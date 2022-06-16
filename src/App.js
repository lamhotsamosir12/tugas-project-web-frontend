import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, MainApp, View } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route index element={<Home />} />
          <Route path="employees/:id" element={<View />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
