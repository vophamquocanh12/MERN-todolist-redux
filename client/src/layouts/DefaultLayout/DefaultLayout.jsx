import classNames from 'classnames/bind'

import styles from './DefaultLayout.module.scss'

import { Header, TodoForm, Todos } from '~/components'

const cx = classNames.bind(styles)

const DefaultLayout = () => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <TodoForm />
            <Todos />
        </div>
    )
}

export default DefaultLayout
