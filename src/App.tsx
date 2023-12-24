import {Route, Routes} from "react-router-dom";
import Toolbar from "./components/Toolbar/Toolbar";
import NewContact from "./containers/NewContact/NewContact";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Contacts from "./containers/Contacts/Contacts";

function App() {


  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={(<Contacts/>)}/>
          <Route path="/new-contact" element={(<NewContact/>)}/>
          <Route path="*" element={(<ErrorPage/>)}/>
        </Routes>
      </main>
    </>
  );
};

export default App
