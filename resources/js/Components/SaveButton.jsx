export default function SaveButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `w-full relative shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08)] rounded-lg bg-blueVh flex flex-row items-center justify-center py-3 px-6 box-border text-left text-[16px] text-white hover:bg-blueVh focus:outline-none focus:ring-2 focus:ring-[#E1EFFC] transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
