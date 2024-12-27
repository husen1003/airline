import { Counter } from "./Components/Counter";
import Login from "./Components/Login";

const routes = [
  {
    path: "/",
    Component: Counter,
  },
  {
    path: "/login",
    Component: Login,
  },
];

export default routes;
