import { useState, useEffect } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Checkbox } from "./ui/checkbox";
import useProducts from "@/hooks/useProducts";
import { X } from "lucide-react";

const FiltersCarpetsHouses = () => {
    const { products, filterProducts } = useProducts();

    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
        material: [],
    });

    const countOccurrences = (values) => {
        const counts = {};
        values.forEach(value => {
            if (value) {
                counts[value] = (counts[value] || 0) + 1;
            }
        });
        return counts;
    };

    const getCategoryValues = () => {
        const categories = countOccurrences(products.map(item => item.category));
        return Object.entries(categories).map(([label, count]) => ({
            label,
            value: label,
            count
        }));
    };

    const filterSections = [
        {
            title: "Uso/Material",
            key: "category",
            items: [
                { label: "Tipo", options: getCategoryValues() }
            ]
        },

    ];

    const handleFilterChange = (key, value) => {
        setSelectedFilters(prevFilters => {
            const newFilters = { ...prevFilters };

            if (newFilters[key].includes(value)) {
                newFilters[key] = newFilters[key].filter(item => item !== value);
            } else {
                newFilters[key] = [...newFilters[key], value];
            }

            return newFilters;
        });
    };

    useEffect(() => {
        const applyFilters = () => {
            const filteredProducts = products.filter(product => {
                const categoryMatch = selectedFilters.category.length === 0 ||
                    selectedFilters.category.includes(product.category);

                const materialMatch = selectedFilters.material.length === 0 ||
                    (product.composicao && selectedFilters.material.includes(product.composicao.material));

                return categoryMatch && materialMatch;
            });

            setFilteredProductsLocal(filteredProducts);
        };

        applyFilters();
    }, [selectedFilters, products]);

    const [filteredProductsLocal, setFilteredProductsLocal] = useState([]);

    useEffect(() => {
        if (filteredProductsLocal.length > 0 || Object.values(selectedFilters).some(arr => arr.length > 0)) {
            filterProducts(null, filteredProductsLocal);
        } else {
            filterProducts(null);
        }
    }, [filteredProductsLocal, filterProducts, selectedFilters]);

    const clearAllFilters = () => {
        setSelectedFilters({
            category: [],
            material: [],
        });
    };

    const hasActiveFilters = Object.values(selectedFilters).some(arr => arr.length > 0);

    return (
        <div className="bg-white rounded-lg">
            <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl text-fofalText font-brandon-800">Filtros</h2>
                {hasActiveFilters && (
                    <button
                        onClick={clearAllFilters}
                        className="flex justify-between items-center text-sm text-fofalText font-brandon-500 cursor-pointer"
                    >
                        Limpar filtros <X size={12} />
                    </button>
                )}
            </div>
            <ScrollArea className="h-full">
                <Accordion type="multiple" className="w-full space-y-4">
                    {filterSections.map((section) => (
                        <AccordionItem key={section.title} value={section.title} className="border-none selection:none">
                            <AccordionTrigger className="text-base text-fofalText font-brandon-800 pt-4 pb-0 hover:no-underline border-t border-fofalText">
                                {section.title}
                            </AccordionTrigger>
                            <AccordionContent>
                                {section.items.map((group) => (
                                    <div key={group.label} className="space-y-2 mt-2">
                                        <ul className="space-y-2">
                                            {group.options.map((option) => (
                                                <li key={option.value} className="flex items-center space-x-2">
                                                    <Checkbox
                                                        id={`${section.key}-${option.value}`}
                                                        className="flex-center w-3 h-3"
                                                        checked={selectedFilters[section.key].includes(option.value)}
                                                        onCheckedChange={() => handleFilterChange(section.key, option.value)}
                                                    />
                                                    <label
                                                        htmlFor={`${section.key}-${option.value}`}
                                                        className="text-base text-fofalText font-brandon-500 hover:text-gray-900 cursor-pointer transition-colors"
                                                    >
                                                        {option.label} ({option.count})
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </ScrollArea>
        </div>
    );
};

export default FiltersCarpetsHouses;