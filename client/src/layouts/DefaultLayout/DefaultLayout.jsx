import { Header, TodoForm, Todos } from '~/components'

const DefaultLayout = () => {
    return (
        <div>
            <Header />
            <TodoForm />
            <Todos />
        </div>
    )
}

export default DefaultLayout
