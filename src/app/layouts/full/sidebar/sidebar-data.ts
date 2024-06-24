import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Inicio',
  },
  {
    displayName: 'Panel principal', // PRD04-RF03, PRD04-RF04 listos, falta embebir (CAMBIAR LA DISTRIBUCION DE TRAFICO POR GESTION DE INGRESOS Y GASTOS)
    iconName: 'layout-dashboard', // los PRD04-RF05 y PRD04-RF06, que pueden ser (APARTE DE ESO, NADA MÁS, DEJENLO COMO CHAMULLO)
    route: '/dashboard', // creados desde un super usuario o simplemente normal. Esta wea dejen hacerla yo.
  },
  {
    navCap: 'Utilidades',
  },
  {
    displayName: 'Informe diario', // PRD04-RF05
    iconName: 'rosette',
    route: '/ui-components/badge', // MATIGOP
  },
  {
    displayName: 'Cuentas', // PRD04-RF08, PRD04-RF010
    iconName: 'poker-chip', // (CAMBIAR ICONOS MATIGOP)
    route: '/ui-components/chips', // Esta es la ruta de cada uno de los displays,
  }, // aqui van a pillar el HTML donde pueden hacer cambios básicos, ahi vemos como le metemos codigo
  { // para que todo funcione.(PELADEUS, TE TOCA HACER LOS DESIGNS)
    displayName: 'Boletas', // PRD04-RF06
    iconName: 'list',
    route: '/ui-components/lists', // PELADEUS
  },
  {
    displayName: 'Facturas', // PRD04-RF07, PRD04-RF09
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu', // PELADEUS
  },
  {
    displayName: 'Presupuestos', // PRD04-RF11
    iconName: 'tooltip',
    route: '/ui-components/tooltips', // PELADEUS
  },
  {
    displayName: 'Nómina', // PRD04-RF12
    iconName: 'tooltip',
    route: '/ui-components/tooltips', // MATIGOP
  },
  {
    navCap: 'Inicia sesión',
  },
  {
    displayName: 'Inicio de sesión', // La eliminacion de usuarios esta embebida en el header, botón Perfil PRD04-RF02
    iconName: 'lock',
    route: '/authentication/login', // NO HAGAN NADA
  },
  {
    displayName: 'Registro', // PRD04-RD01 Registrar usuario único
    iconName: 'user-plus',
    route: '/authentication/register', // NO HAGAN NADA
  },
  {
    navCap: 'Gestión de empleados',
  },
  {
    displayName: 'Panel principal', // PRD04-RF13, PRD04-RF14
    iconName: 'align-box-center-stretch',
    route: '/extra/icons', // MATIGOP
  },
  {
    displayName: 'Informes', // PRD04-RF15
    iconName: 'aperture',
    route: '/extra/sample-page', // MATIGOP
  },
];
