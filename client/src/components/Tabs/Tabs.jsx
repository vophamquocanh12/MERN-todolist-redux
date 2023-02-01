import { useDispatch } from 'react-redux'
import classNames from 'classnames/bind'

import styles from './Tabs.module.scss'
import { TABS } from '~/redux/actions/type'
import { toggleTab } from '~/redux/actions'

const cx = classNames.bind(styles)

const Tabs = ({ currentTab }) => {
    const dispatch = useDispatch()

    return TABS.map((tab) => (
        <button
            key={tab}
            className={tab === currentTab ? cx('button', 'selected') : cx('button')}
            onClick={() => dispatch(toggleTab(tab))}
        >
            {tab}
        </button>
    ))
}

export default Tabs
