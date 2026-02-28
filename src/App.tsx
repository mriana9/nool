import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Header } from "./components/layout/Header";
import { Templates } from "./pages/Templates";
import { Footer } from "./components/layout/Footer";
import { TemplateEditor } from "./pages/TemplateEditor";

const LayoutWrapper = () => {
  const location = useLocation();

  const hideLayout = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Header />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/templates" element={<Templates />} />
          <Route
            path="/nool-builder/:templateId"
            element={<TemplateEditor />}
          />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<LayoutWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
