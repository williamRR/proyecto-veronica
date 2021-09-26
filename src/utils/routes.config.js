import Home from "Pages/Home"
import Attendance from "Pages/Attendance"

const routes = [
  {
    id: "home",
    route: "/proyecto-veronica",
    public: true,
    component: Home,
    item: false,
  },
  {
    id: "attendance",
    route: "/proyecto-veronica/attendance",
    public: true,
    component: Attendance,
    item: true,
  },
]

export default routes
