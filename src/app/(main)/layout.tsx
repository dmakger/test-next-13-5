import type {PropsWithChildren} from 'react'
import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Task',
    description: '',
}


export default function MainLayout({children}:
                                       PropsWithChildren<unknown>) {
    return (
        <div>
            <h1>MainLayout</h1>
            {children}
        </div>
    )
}