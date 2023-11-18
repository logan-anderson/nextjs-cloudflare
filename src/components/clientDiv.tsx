"use client"

import { useEffect, useState } from "react"

export default function ClientDiv() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/hello').then(res => res.json()).then(data => {
            setData(data)
            setLoading(false)
        })
    }, [])

    return (<div>
        {/* @ts-ignore */}
            {loading ? 'Loading...' : data?.name}
    </div>)
}