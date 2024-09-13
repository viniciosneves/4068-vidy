import Image from 'next/image'
import styles from './header.module.css'

import logo from './logo.png'
import SearchInput from '../SearchInput'

import avatar from './avatar.png'
import notification from './notifications.png'
import camera from './video_call.png'


export const Header = () => {
    return (<header className={styles.header}>
        <Image src={logo} alt=''/>

        <form className={styles.form}>
            <SearchInput />
        </form>

        <ul className={styles.actions}>
            <li>
                <Image src={notification}  alt='' />
            </li>
            <li>
                <Image src={camera}  alt='' />
            </li>
            <li>
                <Image src={avatar}  alt='' />
            </li>
        </ul>
    </header>)
}