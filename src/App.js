import { Provider } from "react-redux";
//redux
import { store } from "./redux/store/store";
// Components
import AppRoutes from "./components/AppRoutes/AppRoutes";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}

export default App;
