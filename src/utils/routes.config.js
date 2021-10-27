import Home from "Pages/Login"
import Attendance from "Pages/Attendance"
import Attendances from "Pages/Attendances"
import Day from "Pages/Day"
import Class from "Pages/Class"
import Pupils from "Pages/Mantainers/Pupils"
import Schools from "Pages/Mantainers/Schools"

const routes = [
  {
    id: "profile",
    route: "/profile",
    public: false,
    component: Attendance,
    item: true,
    label: "Perfil",
    hasRole: "ROLE_ADMIN",
  },
  {
    id: "teachers",
    route: "/teachers",
    public: false,
    component: Attendance,
    item: true,
    label: "Mantener profesores",
    hasRole: "ROLE_ADMIN",
  },
  {
    id: "schools",
    route: "/schools",
    public: false,
    component: Schools,
    item: true,
    label: "Mantener colegios",
    hasRole: "ROLE_ADMIN",
  },
  {
    id: "subjects",
    route: "/subjects",
    public: false,
    component: Attendance,
    item: true,
    label: "Mantener materias",
    hasRole: "ROLE_ADMIN",
  },
  {
    id: "admins",
    route: "/admins",
    public: false,
    component: Attendance,
    item: true,
    label: "Mantener administradores",
    hasRole: "ROLE_ADMIN",
  },
  {
    id: "grade",
    route: "/grade",
    public: false,
    component: Attendance,
    item: true,
    label: "Mantener notas",
    hasRole: "ROLE_ADMIN",
  },
  {
    id: "attendances",
    route: "/attendances",
    public: false,
    component: Attendances,
    item: true,
    label: "Mantener asistencias",
    hasRole: "ROLE_ADMIN",
  },
  {
    id: "pupils",
    route: "/pupils",
    public: false,
    component: Pupils,
    item: true,
    label: "Mantener alumnos",
    hasRole: "ROLE_ADMIN",
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
