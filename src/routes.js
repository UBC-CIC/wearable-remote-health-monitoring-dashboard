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
import HomePage from "./views/Pages/HomePage/";
import Profile from "./views/examples/Profile.js";
import Register from "./views/examples/Register.js";
import Login from "./views/examples/Login.js";
import Tables from "./views/examples/Tables.js";
import RegisterUser from "./views/Pages/RegistrationPage/";
import ManageDevices from "./views/examples/ManageDevices";
import Maps from "./views/examples/Maps.js";
import UserManagement from "./views/Pages/UserManagementPage/";


let routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: HomePage,
    layout: "/admin",
    exposed: true
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
    exposed: true
  },
  {
    path: "/register-user",
    name: "Register a New User",
    icon: "ni ni-circle-08 text-pink",
    component: RegisterUser,
    layout: "/admin",
    exposed: false
  },
  {
    path: "/manage-users",
    name: "Manage Users",
    icon: "ni ni-circle-08 text-pink",
    component: UserManagement,
    layout: "/admin",
    exposed: true
  },
  {
    path: "/manage-devices",
    name: "Manage Devices",
    icon: "ni ni-watch-time text-red",
    component: ManageDevices,
    layout: "/admin",
    exposed: true
  },
  {
    path: "/manage-geofencing",
    name: "Manage Geofencing",
    icon: "ni ni-map-big text-green",
    component: Maps,
    layout: "/admin",
    exposed: true
  },
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/admin",
    exposed: true
  }
];
export default routes;
