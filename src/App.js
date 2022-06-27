import MyRoutes from "./MyRoutes";
import "./App.css";
import AuthContextProvider from "./components/context/AuthContextProvider";
import Toastify from "./components/Toastify/Toastify";
import ProductContextProvider from "./components/context/ProductContextProvide";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <ProductContextProvider>
          <Toastify />
          <MyRoutes />
        </ProductContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
