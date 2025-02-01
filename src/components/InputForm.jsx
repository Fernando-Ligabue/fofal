import { Eye, EyeClosed } from "lucide-react";
import PropTypes from "prop-types";

const InputForm = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  label,
  autocomplete,
  icon: Icon,
  showPassword,
  toggleShowPassword,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-brandon-500 text-fofalText"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-zinc-300" aria-hidden="true" />
          </div>
        )}
        <input
          id={id}
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          className="input-form w-full"
          placeholder={placeholder}
          autoComplete={autocomplete}
        />
        {type === "password" && (
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={toggleShowPassword}
          >
            {showPassword ? (
              <EyeClosed className="h-5 w-5 text-zinc-300" aria-hidden="true" />
            ) : (
              <Eye className="h-5 w-5 text-zinc-300" aria-hidden="true" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

InputForm.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  autocomplete: PropTypes.string,
  icon: PropTypes.elementType,
  showPassword: PropTypes.bool,
  toggleShowPassword: PropTypes.func,
};

export default InputForm;
