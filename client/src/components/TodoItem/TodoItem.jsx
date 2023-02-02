import { useState, useRef, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import classNames from 'classnames/bind'

import styles from './TodoItem.module.scss'
import { toggleTodo, updateTodo, deleteTodo } from '~/redux/actions'
import { ModalItem } from '~/components'

const cx = classNames.bind(styles)

const Todo = ({ todo }) => {
    const [editing, setEditing] = useState(false)
    const [text, setText] = useState(todo.data)
    const [modalOpen, setModalOpen] = useState(false)

    const dispatch = useDispatch()

    const inputRef = useRef(null)

    const onFormSubmit = (e) => {
        e.preventDefault()
        setEditing((prevState) => !prevState)
        dispatch(updateTodo(todo._id, text))
    }

    const onClickEditTodo = useCallback((e) => {
        setEditing((prevState) => !prevState)
        e.stopPropagation()
    }, [])

    const onOpenModal = useCallback((e) => {
        setModalOpen(true)
        e.stopPropagation()
    }, [])

    const onClickDeleteTodo = useCallback(() => {
        setModalOpen(false)
        dispatch(deleteTodo(todo._id))
        console.log('hello')
    }, [dispatch, todo._id])

    useEffect(() => {
        if (editing) {
            inputRef.current.focus()
        }
    }, [editing])

    return (
        <li
            className={cx('task')}
            onClick={() => {
                dispatch(toggleTodo(todo._id))
            }}
            style={{
                textDecoration: todo.done ? 'line-through' : '',
                color: todo.done ? '#fff' : '#34495e',
                backgroundColor: todo.done ? '#37325c8f' : '#37325ce4',
            }}
        >
            <span style={{ display: editing ? 'none' : '' }}>{todo.data}</span>

            <form style={{ display: editing ? 'inline' : 'none' }} onSubmit={onFormSubmit}>
                <input
                    type="text"
                    value={text}
                    ref={inputRef}
                    className={cx('edit-todo')}
                    onChange={(e) => setText(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                />
            </form>

            <span className={cx('icon', 'delete')} onClick={onOpenModal}>
                <i className="fas fa-trash" />
            </span>

            <span className={cx('icon', 'edit')} onClick={onClickEditTodo}>
                <i className="fas fa-pen" />
            </span>

            {modalOpen && <ModalItem setOpenModal={setModalOpen} onDelete={onClickDeleteTodo} todo={todo} />}
        </li>
    )
}

export default Todo
