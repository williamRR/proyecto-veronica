import Home from "Pages/Home"
import Attendance from "Pages/Attendance"

const routes = [
  {
    id: "home",
    route: "/",
    public: true,
    component: Home,
    item: false,
  },
  {
    id: "attendance",
    route: "/attendance",
    public: true,
    component: Attendance,
    item: true,
  },
]

export default routes
