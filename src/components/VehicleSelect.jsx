import PropTypes from "prop-types";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";

const VehicleSelects = ({
  options,
  selectedValue,
  onValueChange,
  placeholder,
  disabled = false
}) => {
  return (
    <Select 
      value={selectedValue} 
      onValueChange={onValueChange}
      disabled={disabled}
    >
      <SelectTrigger className="w-[320px] border-none bg-transparent shadow-none outline-none focus:outline-none focus:ring-none focus:ring-offset-none focus:border-none">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{placeholder}:</SelectLabel>
          {options.map((option, index) => (
            <SelectItem
              key={index}
              value={typeof option === 'object' ? option.nome : option.toString()}
            >
              {typeof option === 'object' ? option.nome : option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

VehicleSelects.propTypes = {
  options: PropTypes.array,
  selectedValue: PropTypes.string,
  onValueChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

export default VehicleSelects;