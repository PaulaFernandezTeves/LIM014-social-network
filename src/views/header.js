import { logOut } from '../firebase-controllers/auth-controller.js';

const menu = () => {
  const viewMenu = document.createElement('section');
  viewMenu.innerHTML = `
  <nav  id="menu">
  <ul>
      <li class="home-header"><a href="#/home"><span class="the-home"><i class="fas fa-home"></i></span>Inicio</a></li>
      <li class="profile-header"><a href="#/home"><span class="the-home"><i class="fas fa-user-circle"></i></span>Perfil</a></li>
      <a href="#/home"><img src="img/airplane.png" class="icon"></a></li>
      <li id="logOut-header"><a href="#/home"><span class="the-home"><i class="fas fa-sign-out-alt"></i></span>Cerrar sesión</a></li>
  </ul>
</nav>
    `;

  // Cerrar sesión
  const logout = viewMenu.querySelector('#logOut-header');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    // container.innerHTML = '';
    window.location.hash = '#/login';
    logOut();
  });

  return viewMenu;
  // return viewMenu;
};
export default menu;
