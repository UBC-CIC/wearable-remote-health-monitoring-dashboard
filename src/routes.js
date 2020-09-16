/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import HomePage from "./views/Pages/HomePage/index.js";
import Profile from "./views/examples/Profile.js";
import Register from "./views/examples/Register.js";
import Login from "./views/examples/Login.js";
import Tables from "./views/examples/Tables.js";
import RegisterUser from "./views/examples/RegisterUser";
import RegisterDevice from "./views/examples/RegisterDevice";
import Maps from "./views/examples/Maps.js";


let routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: HomePage,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/register-user",
    name: "Register New User",
    icon: "ni ni-circle-08 text-pink",
    component: RegisterUser,
    layout: "/admin"
  },
  {
    path: "/register-device",
    name: "Pair Device",
    icon: "ni ni-watch-time text-red",
    component: RegisterDevice,
    layout: "/admin"
  },
  {
    path: "/create-geofence",
    name: "Create Geofence",
    icon: "ni ni-map-big text-green",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/admin"
  }
];
export default routes;
