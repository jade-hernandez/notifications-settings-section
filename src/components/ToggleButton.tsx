interface ToggleButtonProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

const ToggleButton = ({
  checked,
  onChange,
  label = "Toggle Notification",
  disabled = false
}: ToggleButtonProps) => {
  return (
    <button
      type='button'
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ease-in-out focus:shadow-[0_0px_0px_1px_rgba(68,76,231,0.1),0_0px_0px_4px_rgba(68,76,231,0.12)] focus:outline-none ${checked ? "bg-indigo-700" : "bg-gray-100"} ${disabled ? "cursor-not-allowed bg-gray-100" : "cursor-pointer"} `}
      role='switch'
      aria-checked={checked}
      aria-label={label}
    >
      <span className='sr-only'>{label}</span>
      <span
        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full shadow ring-0 transition duration-200 ease-in-out ${checked ? "translate-x-4.5 bg-white" : "translate-x-0.5 bg-gray-300"} ${disabled ? "cursor-not-allowed bg-gray-300" : "cursor-pointer"} `}
      />
    </button>
  );
};

export default ToggleButton;
