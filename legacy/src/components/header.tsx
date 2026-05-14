import { Link } from '@tanstack/react-router';
import classes from './header.module.css'

export default function Header() {
  return (
    <header className={classes.header}>
        <h1>
          <Link to='/'>Marisa Cantor</Link>
        </h1>
        <nav className={classes.navigation}>
          <div className={classes.multi_item}>
            <Link to='/projects'>
              projects
            </Link>
            <div>
                <Link to='/projects/sonic-contrast-fangame'>sonic contrast</Link>
                <Link to='/projects/spirit-world'>spirit world</Link>
            </div>
          </div>
          
          <Link to='/illustration'>illustration</Link>
          <Link to='/life-drawing'>life drawing</Link>
          <Link to='/about'>about</Link>
        </nav>
    </header>
  );
}
