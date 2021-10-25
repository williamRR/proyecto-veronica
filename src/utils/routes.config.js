import Home from "Pages/Home"
import Attendance from "Pages/Attendance"
import Attendances from "Pages/Attendances"
import Day from "Pages/Day"
import Class from "Pages/Class"

const routes = [
  {
    id: "profile",
    route: "/profile",
    public: true,
    component: Attendance,
    item: true,
    label: "Perfil",
  },
  {
    id: "day",
    route: "/day",
    public: true,
    component: Day,
    item: true,
    label: "Diario",
  },
  {
    id: "calendar",
    route: "/calendar",
    public: true,
    component: Attendance,
    item: true,
    label: "Calendario",
  },

  {
    id: "home",
    route: "/",
    public: true,
    component: Home,
    item: false,
  },

  // {
  //   id: "attendances",
  //   route: "/attendances",
  //   public: true,
  //   component: Attendances,
  //   item: true,
  //   label: "Módulo Asistencia",
  // },
  {
    id: "classes",
    route: "/day/classes/:id",
    public: true,
    component: Class,
    item: false,
  },
  // {
  //   id: "attendances",
  //   route: "/attendances",
  //   public: true,
  //   component: Attendances,
  //   item: true,
  //   label: "Otra cosa",
  // },
]

export default routes
