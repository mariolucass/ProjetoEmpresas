import { Register } from "./models/featRegister.js";
import { Render } from "./models/render.js";
const token = Render.Usertoken;
const tokenAdmin = localStorage.getItem("@Hashy:admin");
async function registerPage() {
  await Render.renderEmpresasLogin();
  Register.redirect();
  Register.register();
}
tokenAdmin
  ? window.location.replace("/src/pages/dashboardadmin.html")
  : token
  ? window.location.replace("/src/pages/dashboard.html")
  : registerPage();
