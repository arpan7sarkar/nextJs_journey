import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
    return (
        <>
            <div>Dashboard</div>
            <Link href="/dashboard/gym">Gym</Link>
            <br />
            <Link href="/doc">Docs</Link>
        </>
    )
}

export default Dashboard