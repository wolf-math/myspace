import Link from 'next/link';
import Image from 'next/image';
import styles from './NavMenu.module.css';

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <Image src='/logo.svg' width={216} height='30' alt='NextSpace Logo' />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/about'}>About</Link>
          <Link href={'/blog'}>Blog</Link>
          <Link href={'/users'}>Users</Link>
        </li>
      </ul>
    </nav>
  );
}
