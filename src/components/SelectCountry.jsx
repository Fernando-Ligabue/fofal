import { useEffect, useState } from 'react'
import { cn, fetchCountries } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check } from "lucide-react";

const SelectCountry = () => {
    const [countries, setCountries] = useState([]);
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    useEffect(() => {
        const getCountries = async () => {
            const countriesData = await fetchCountries();
            setCountries(countriesData);
        };

        getCountries();
    }, []);


    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="input-form w-full justify-between text-left text-folalText"
                >
                    {value
                        ? countries.find((country) => country.value === value)?.label
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
                                        setValue(currentValue === value ? "" : currentValue);
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
                                            value === country.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default SelectCountry