import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function SelectOption(
    { className = "", isFocused = false, options = [], ...props },
    ref
) {
    const select = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            select.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            className={
                props.error
                    ? "border-red-500 p-2 rounded-lg border-1"
                    : "border-stroke-bulto p-2 rounded-lg border-2" +
                      "p-2 focus:outline-none focus:ring-2 focus:ring-[#E1EFFC] " +
                      className
            }
            ref={select}
        >
            {props.placeholder && (
                <option value="" selected>
                    {props.placeholder}
                </option>
            )}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
});
