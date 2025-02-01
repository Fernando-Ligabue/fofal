import { useEffect, useState } from "react";
import { cn, fetchCountries } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check } from "lucide-react";
import PropTypes from "prop-types";

const SelectCountry = ({ value, onChange }) => {
  const [countries, setCountries] = useState([]);
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    const getCountries = async () => {
      const countriesData = await fetchCountries();
      setCountries(countriesData);
    };

    getCountries();
  }, []);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="input-form w-full justify-between text-left text-folalText"
        >
          {internalValue
            ? countries.find((country) => country.value === internalValue)
                ?.label
            : "Selecione o país..."}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar país..." className="h-9" />
          <CommandList>
            <CommandEmpty>Nenhum país encontrado.</CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.value}
                  onSelect={(currentValue) => {
                    setInternalValue(
                      currentValue === internalValue ? "" : currentValue
                    );
                    onChange(currentValue);
                    setOpen(false);
                  }}
                >
                  <img
                    src={country.flag}
                    alt={country.label}
                    className="mr-2 w-4 h-4 object-cover rounded-full"
                  />
                  {country.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      internalValue === country.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

SelectCountry.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectCountry;
