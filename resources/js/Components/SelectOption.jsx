import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function SelectOption({ className = '', isFocused = false, options = [], ...props }, ref) {
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
        'p-2 border-2 border-stroke-bulto rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1EFFC]' +
        className
      }
      ref={select}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});
