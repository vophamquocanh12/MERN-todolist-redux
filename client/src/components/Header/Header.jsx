import classNames from 'classnames/bind'

import styles from './Header.module.scss'

const cx = classNames.bind(styles)

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <h1 className={cx('title')}>TodoList</h1>
        </header>
    )
}

export default Header
