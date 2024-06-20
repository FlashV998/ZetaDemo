import React from 'react'

export default function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div
            onClick={()=>{
            window.location.reload()
            }}
            style={{ fontSize: "46px" }}
        >
            <div className="">Something went wrong</div>
        </div>
    )
}