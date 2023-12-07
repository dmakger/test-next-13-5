import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Все задачи пользователя',
    description: '',
}

// SSR
const fetchData = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1', {
        next: {revalidate: 10},
    }).then(r => r.json())
}

export default async function TaskListPage() {
    // console.log(cookies().getAll())
    const data = await fetchData()
    return (
        <div>
            <h1>TaskListPage</h1>
            <div>{data.id}</div>
        </div>
    )
}