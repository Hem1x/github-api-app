import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay = 500): string => {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), delay)
        return () => clearTimeout(handler)
    })

    return debounced
} 