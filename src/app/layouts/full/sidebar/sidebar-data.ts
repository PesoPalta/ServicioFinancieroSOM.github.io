import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Inicio',
  },
  {
    displayName: 'Panel principal', // PRD04-RF03, PRD04-RF04 listos, falta embebir
    iconName: 'layout-dashboard', // los PRD04-RF05 y PRD04-RF06, que pueden ser
    route: '/dashboard', // creados desde un super usuario o simplemente normal.
  },
  {// Este slider pueden usarlo para crear una zona de "gestión", puede estar el 05, 06, 07, 08, 09, 10 acá.
    navCap: 'Slider a usar', // Oscar o Matigop vean que wea ponen aca
  },
  {
    displayName: 'Badge', // Esto es editable, solo el displayName, queda el cambio en las
    iconName: 'rosette', // subcategorias de abajo.
    route: '/ui-components/badge',
  },
  {
    displayName: 'Cuentas por pagar', // Ejemplo... PRD04-RF010
    iconName: 'poker-chip', // Si se pueden cambiar los iconos, hay que consultar bootstrap
    route: '/ui-components/chips',
  },
  {
    displayName: 'Lists',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Menu',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Tooltips',
    iconName: 'tooltip',
    route: '/ui-components/tooltips',
  },
  {
    navCap: 'Inicia sesion',
  },
  {
    displayName: 'Inicio de sesión',
    iconName: 'lock',
    route: '/authentication/login',
  },
  {
    displayName: 'Registro', // PRD04-RD01 Registrar usuario único
    iconName: 'user-plus',
    route: '/authentication/register', 
  }, // Aqui tendría que ir otro component que sea el que permita eliminar los usuarios
  // PRD04-RF02 Eliminar usuario.
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'aperture',
    route: '/extra/sample-page',
  },
];
