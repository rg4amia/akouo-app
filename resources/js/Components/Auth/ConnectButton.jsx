export default function ConnectButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `w-full bg-greenVh text-white py-3 px-4 rounded-lg  hover:bg-greenVh focus:outline-none focus:ring-2 focus:ring-[#E1EFFC] transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
