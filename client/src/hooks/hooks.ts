import { useEffect } from 'react';

export const useHooks = () => {
    const useClickOutside = (ref: any, action: () => void) => {
        useEffect(() => {
            const onClick = (event: any) => {
                if (!ref.current?.contains(event.target)) {
                    action();
                }
            };
            document.addEventListener('mousedown', onClick);
            return () => document.removeEventListener('mousedown', onClick);
        }, [ref]);
    };
    return { useClickOutside }
};


