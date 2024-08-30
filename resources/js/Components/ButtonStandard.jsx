export default function ButtonStandard({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `w-full relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)] rounded-lg  flex flex-row items-center justify-center py-3 px-6 box-border text-left text-[16px] focus:outline-none transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
