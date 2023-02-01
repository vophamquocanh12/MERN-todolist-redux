import { useState } from 'react'
import { useDispatch } from 'react-redux'
import classNames from 'classnames/bind'

import styles from './Todo.module.scss'
import { toggleTodo, updateTodo, deleteTodo } from '~/redux/actions'

const cx = classNames.bind(styles)

const Todo = ({ todo }) => {
    const [editing, setEditing] = useState(false)
    const [text, setText] = useState(todo.data)

    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault()
        setEditing((prevState) => !prevState)
        dispatch(updateTodo(todo._id, text))
    }

    return (
        <li
            className={cx('task')}
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo.done ? 'line-through' : '',
                color: todo.done ? '#bdc3c7' : '#34495e',
            }}
        >
            <span style={{ display: editing ? 'none' : '' }}>{todo.data}</span>

            <form style={{ display: editing ? 'inline' : 'none' }} onSubmit={onFormSubmit}>
                <input type="text" value={text} className={cx('edit-todo')} onChange={(e) => setText(e.target.value)} />
            </form>

            <span className={cx('icon', 'delete')} onClick={() => dispatch(deleteTodo(todo._id))}>
                <i className="fas fa-trash" />
            </span>

            <span className={cx('icon', 'edit')} onClick={() => setEditing((prevState) => !prevState)}>
                <i className="fas fa-pen" />
            </span>
        </li>
    )
}

export default Todo
