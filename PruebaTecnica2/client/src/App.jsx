import CrudTable from "./components/Table/CrudTable";
import CrudForm from "./components/Create/CrudForm";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {

  return (
    <>
      <Routes>
        <Route>
          <Route path="/agregar" element={<CrudForm />} />
          <Route path="/" element={<CrudTable />} />


        </Route>
      </Routes>
    </>
  )
}

export default App
