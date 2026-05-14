import classes from './footer.module.css'
import { Socials } from './socials'


export default function Footer() {
  return (
    <footer className={classes.footer}>
        <Socials />
    </footer>
  );
}

