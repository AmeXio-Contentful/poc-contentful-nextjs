import React from 'react';

interface HalfHalfProps {
    children: React.ReactNode
}
export default function CtfHalfHalf({children}: HalfHalfProps) {
    return (
        <>
            <div className='md:grid md:grid-cols-2'>
                {children}
            </div>
        </>
    )
}