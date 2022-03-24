export const ListaMenu = [
  {
    nombre: 'cortes de carne',
    url: '#'
  },
  {
    nombre: 'pollo',
    url: '#'
  },
  {
    nombre: 'cerdo',
    url: '#'
  },
  {
    nombre: 'contacto',
    url: '#'
  }
];

export const NavBar = ({ nombre, url }) => {
  return (
    <li className="menu__item">
      <a href={url} className="menu__item__link">{nombre}</a>
    </li>
  );
};
