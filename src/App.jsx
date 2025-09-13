import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./router/router";
import "react-datepicker/dist/react-datepicker.css";
import AuthProvider from "./featured/auth/AuthProvider";
const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={AppRoutes} />
    </AuthProvider>
  );
};

export default App;
