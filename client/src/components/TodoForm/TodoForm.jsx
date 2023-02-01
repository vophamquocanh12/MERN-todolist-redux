import classNames from 'classnames/bind'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import styles from './TodoForm.module.scss'

import { addNewTodo } from '~/redux/actions'

const cx = classNames.bind(styles)

const TodoForm = () => {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewTodo(text))
        setText('')
    }

    const onInputChange = (e) => {
        setText(e.target.value)
    }

    return (
        <form className={cx('form')} onSubmit={onFormSubmit}>
            <input placeholder="Enter new todo..." className={cx('input')} onChange={onInputChange} value={text} />
        </form>
    )
}

export default TodoForm
