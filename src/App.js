import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/Routers/AppRouter";
import { AuthProvider } from "./components/Providers/AuthProvider";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
