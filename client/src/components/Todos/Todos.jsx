/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames/bind'

import styles from './Todos.module.scss'

import { deleteTodo, getAllTodos } from '~/redux/actions'
import { ALL_TODOS, ACTIVE_TODOS, DONE_TODOS } from '~/redux/actions/type'

// components
import { Todo, Tabs } from '~/components'

const cx = classNames.bind(styles)

const Todos = () => {
    const dispatch = useDispatch()

    const todos = useSelector((state) => state.todos)
    const currentTab = useSelector((state) => state.currentTab)

    const removeDoneTodos = () => {
        todos.forEach(({ done, _id }) => {
            if (done) {
                dispatch(deleteTodo(_id))
            }
        })
    }

    const getTodos = () => {
        if (currentTab === ALL_TODOS) {
            return todos
        } else if (currentTab === ACTIVE_TODOS) {
            return todos.filter((todo) => !todo.done)
        } else if (currentTab === DONE_TODOS) {
            return todos.filter((todo) => todo.done)
        }
    }

    useEffect(() => {
        dispatch(getAllTodos())
    }, [])

    return (
        <article className={cx('todos')}>
            <div>
                <Tabs currentTab={currentTab} />
                {todos.some((todo) => todo.done) ? (
                    <button className={cx('button', 'clear')} onClick={removeDoneTodos}>
                        Remove Done Todos
                    </button>
                ) : null}
            </div>

            <ul className={cx('scroll')}>
                {getTodos().map((todo) => (
                    <Todo key={todo._id} todo={todo} />
                ))}
            </ul>
        </article>
        
    )
}

export default Todos
