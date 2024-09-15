export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label
            {...props}
            className={
                `relative text-[16px] font-bold font-outfit text-gray text-left` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
