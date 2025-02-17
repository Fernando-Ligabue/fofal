import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
const filterData = [
  {
    id: 'ambiente-interior',
    name: 'Ambiente Interior',
    options: [
      { id: 'tapete-entrada-aluminio-1', label: 'Tapete de Entrada Alumínio' },
      { id: 'tapete-entrada-cairo', label: 'Tapete de Entrada Cairo' },
      { id: 'tapete-entrada-mt113', label: 'Tapete de Entrada MT113' },
      { id: 'tapete-entrada-bt199', label: 'Tapete de Entrada BT199' },
    ],
  },
  {
    id: 'ambiente-exterior',
    name: 'Ambiente Exterior',
    options: [
      { id: 'tapete-entrada-aluminio-2', label: 'Tapete de Entrada Alumínio' },
      { id: 'tapete-entrada-vinil', label: 'Tapete de Entrada Vinil' },
    ],
  },
];
const FilterAlcatifas = () => {
  const [selectedFilters, setSelectedFilters] = React.useState([]);
  const handleFilterChange = (filterId) => {
    setSelectedFilters(prev => 
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };
  return (
    <div className="w-full max-w-xs -mt-1">
      <h1 className="w-full my-2 text-2xl text-fofalText font-brandon-800">Filtros</h1>
      <h3 className='w-full my-2 text-base text-fofalText font-brandon-800 border-b border-fofalText pb-2'>Categoria</h3>
      <div className="space-y-2 border-b border-fofalText">
        <Accordion type="single" collapsible className="w-full">
          {filterData.map((category) => (
            <AccordionItem key={category.id} value={category.id} className="border-none">
              <AccordionTrigger className="hover:no-underline">
                <span className="text-base text-fofalText font-brandon-800">{category.name}</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pt-1">
                  {category.options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={option.id}
                        checked={selectedFilters.includes(option.id)}
                        onCheckedChange={() => handleFilterChange(option.id)}
                        className="data-[state=checked]:bg-gray-900 w-3 h-3 flex-center"
                      />
                      <Label
                        htmlFor={option.id}
                        className="text-sm text-fofalText font-brandon-500 cursor-pointer hover:text-gray-900 transition-colors"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

FilterAlcatifas.propTypes = {
};

export default FilterAlcatifas;