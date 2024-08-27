import Link from 'next/link'
import styles from './header.module.css'
import Image from 'next/image'

export default function Header() {
    return(
        <div className={styles.header}>
            <nav className={styles.navbar}>
                <Link href='/' className={styles.nav_logo}>
                    <Image src='/Logo.jpg' width={64} height={64}></Image>
                    <span>Portfolio</span>
                </Link>
                <div className={styles.nav_menu}>
                    <ul className={styles.nav_list}>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about-me'>Projects</Link></li>
                        <li><Link href='/404'>Content</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}