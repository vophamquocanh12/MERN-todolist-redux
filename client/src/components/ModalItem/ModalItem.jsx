import classNames from 'classnames/bind'

import styles from './ModalItem.module.scss'

const cx = classNames.bind(styles)

const Modal = ({ setOpenModal, todo, onDelete}) => {

      
    return (
        <div className={cx('modal')}>
            <div className={cx('modal-container')}>
                <div className={cx('header-modal')}>
                    <div className={cx('title')}>
                        <h1>Delete Todo</h1>
                    </div>
                    <div className={cx('close-btn')}>
                        <button
                            onClick={() => {
                                setOpenModal(false)
                            }}
                        >
                            X
                        </button>
                    </div>
                </div>
                <div className={cx('body')}>
                    <p>Are you sure you want to delete todo <strong>'{todo.data}'</strong>?</p>
                </div>
                <div className={cx('footer')}>
                    <button className={cx('cancel-btn')}
                        onClick={(e) => {
                            setOpenModal(false)
                            e.stopPropagation()
                        }}
                    >
                        Cancel
                    </button>
                    <button className={cx('delete-btn')}
                        onClick={onDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
