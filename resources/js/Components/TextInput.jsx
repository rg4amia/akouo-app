import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                props.error ? 'border-red-500 p-2 rounded-lg border-1' : 'border-stroke-bulto p-2 rounded-lg border-2' +
                'focus:outline-none focus:ring-2 focus:ring-[#E1EFFC]' +
                className
            }
            ref={input}
        />
    );
});
