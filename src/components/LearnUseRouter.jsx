"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const LearnUseRouter = () => {
    const router = useRouter()
    console.log("Router ", router);

    return (
        <>
            <h1>Use Router</h1>
            <button type="button" onClick={() => router.push("/admin/dashboard")}>Go to Admin DashBoard</button>

        </>
    )
}

export default LearnUseRouter