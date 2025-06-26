/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { carPositions } from "@/lib/constants";
import shipping from "/images/home/shipping.svg";
import safeOrder from "/images/home/safe-order.svg";
import specialists from "/images/home/specialists.svg";
import { tapetesMedidaData } from "@/lib/mock";

import { ChevronRight, Minus, Plus } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import VehicleSelects from "./VehicleSelect";
import useCart from "@/hooks/useCart";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const AutoTapetesMedida = () => {
    const { addCustomAutoCarpetToCart } = useCart();
    const [activeTab, setActiveTab] = useState("");
    const [openSection, setOpenSection] = useState(null);

    const [anoSelecionado, setAnoSelecionado] = useState('');
    const [marcaSelecionada, setMarcaSelecionada] = useState('');
    const [modeloSelecionado, setModeloSelecionado] = useState('');
    const [materialSelecionado, setMaterialSelecionado] = useState('');
    const [cores, setCores] = useState(['', '', '']);
    const [fixacoes, setFixacoes] = useState(false);
    const [bordado, setBordado] = useState("condutor");
    const [orientation, setOrientation] = useState(false);
    const [acabamento, setAcabamento] = useState("debruado_fio");

    const isRubberMaterial = () => {
        return materialSelecionado === 'rubber-hexa' || materialSelecionado === 'rubber-flex';
    };

    const modelosDaMarca = (marca) => {
        const marcaEncontrada = tapetesMedidaData[0].Marcas.find(m => m.nome === marca);
        return marcaEncontrada ? marcaEncontrada.modelos : [];
    };

    useEffect(() => {
        if (marcaSelecionada) {
            setModeloSelecionado('');
        }
    }, [marcaSelecionada]);

    useEffect(() => {
        if (isRubberMaterial()) {
            setBordado(false);
            setAcabamento("Material não permite esta seleção");
        } else {
            setAcabamento("debruado_fio");
        }
    }, [materialSelecionado]);


    const [selectedMats, setSelectedMats] = useState({
        frontRight: false,
        frontLeft: false,
        rearRight: false,
        rearLeft: false
    });

    const [selectionTitle, setSelectionTitle] = useState("Selecione os tapetes a personalizar");

    useEffect(() => {
        const savedMats = localStorage.getItem('selectedCarMats');

        if (savedMats) {
            setSelectedMats(JSON.parse(savedMats));
            updateSelectionTitle(JSON.parse(savedMats));
        }
    }, []);

    const updateSelectionTitle = (selections) => {
        const { frontLeft, frontRight, rearLeft, rearRight } = selections;

        const selectedCount = Object.values(selections).filter(Boolean).length;

        if (selectedCount === 0) {
            setSelectionTitle("Selecione os tapetes a personalizar");
            return;
        }

        if (selectedCount === 4) {
            setSelectionTitle("Conjunto completo");
            return;
        }

        if (rearLeft && rearRight && !frontLeft && !frontRight) {
            setSelectionTitle("Tapetes traseiros");
            return;
        }

        if (frontLeft && frontRight && !rearLeft && !rearRight) {
            setSelectionTitle("Tapetes dianteiros");
            return;
        }

        const selectedPositions = [];

        if (frontLeft) selectedPositions.push("Condutor");
        if (frontRight) selectedPositions.push("Passageiro");
        if (rearLeft) selectedPositions.push("Traseiro esquerdo");
        if (rearRight) selectedPositions.push("Traseiro direito");

        setSelectionTitle(selectedPositions.join(", "));
    };

    const toggleMatSelection = (position) => {
        const updatedSelections = {
            ...selectedMats,
            [position]: !selectedMats[position]
        };

        setSelectedMats(updatedSelections);
        localStorage.setItem('selectedCarMats', JSON.stringify(updatedSelections));

        updateSelectionTitle(updatedSelections);
    };

    const getSelectedItemsCount = () => {
        return Object.values(selectedMats).filter(Boolean).length;
    };

    const clearAllSelections = () => {
        const clearedSelections = {
            frontRight: false,
            frontLeft: false,
            rearRight: false,
            rearLeft: false
        };

        setSelectedMats(clearedSelections);
        localStorage.setItem('selectedCarMats', JSON.stringify(clearedSelections));
        updateSelectionTitle(clearedSelections);
    };

    const handleColorChange = (index, value) => {
        const newCores = [...cores];
        newCores[index] = value;
        setCores(newCores);
    };

    const handleAddToCart = () => {
        const carpetData = {
            selectedMats,
            marca: marcaSelecionada,
            modelo: modeloSelecionado,
            ano: anoSelecionado,
            material: materialSelecionado,
            cores: cores.filter(cor => cor.trim() !== ''),
            fixacoes: fixacoes,
            orientation: orientation,
            bordado: isRubberMaterial() ? "Material não permite esta seleção" : bordado,
            acabamento: isRubberMaterial() ? "Material não permite esta seleção" : acabamento
        };

        const addedProduct = addCustomAutoCarpetToCart(carpetData);

        if (addedProduct) {
            clearAllSelections();

            setMarcaSelecionada('');
            setModeloSelecionado('');
            setAnoSelecionado('');
            setMaterialSelecionado('');

            setCores(['', '', '']);

            setFixacoes(false);
            setOrientation(false);
            setBordado(false);
            setAcabamento("debruado_fio");

            setOpenSection(null);
        }
    };

    return (
        <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto gap-8 p-4 mt-14">
            <div className="w-full space-y-6">
                <div className="flex justify-start items-center gap-6">
                    <h2 className="text-4xl font-bold font-brandon-800">Seleção dos tapetes</h2>
                    {getSelectedItemsCount() > 0 && (
                        <button
                            onClick={clearAllSelections}
                            className="text-sm font-brandon-500 text-fofalYellow"
                        >
                            Limpar seleção
                        </button>
                    )}
                </div>

                <div className="space-y-6 flex flex-col xl:flex-row gap-10 w-full flex-1 md:sticky relative md:top-10">
                    <div className="flex flex-col w-full max-w-72">
                        <h3 className="text-3xl text-fofalText font-brandon-500">Posições selecionadas: <br /><span className="text-xl text-fofalText font-brandon-500">{selectionTitle}</span></h3>

                        {/* Resumo das seleções */}
                        {getSelectedItemsCount() > 0 && (
                            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                                <h4 className="font-medium mb-2">Itens selecionados ({getSelectedItemsCount()})</h4>
                                <ul className="text-sm text-gray-600">
                                    {selectedMats.frontLeft && <li>• Tapete do condutor</li>}
                                    {selectedMats.frontRight && <li>• Tapete do passageiro</li>}
                                    {selectedMats.rearLeft && <li>• Tapete traseiro esquerdo</li>}
                                    {selectedMats.rearRight && <li>• Tapete traseiro direito</li>}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <img
                            src={carPositions}
                            alt="Car outline"
                            className="mx-auto w-full max-w-80 p-4 selec-none"
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-4 mt-24">
                                {/* Frente esquerda (Condutor) */}
                                <div
                                    className={`w-16 h-28 border-2 bg-gray-100 ${selectedMats.frontLeft ? 'border-red-500 bg-gray-100' : 'border-gray-300'} flex items-center justify-center cursor-pointer`}
                                    onClick={() => toggleMatSelection('frontLeft')}
                                >
                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedMats.frontLeft ? 'bg-red-500 text-white' : 'bg-gray-300'}`}>
                                        {selectedMats.frontLeft ? <Minus /> : <Plus />}
                                    </span>
                                </div>

                                {/* Frente direita (Passageiro) */}
                                <div
                                    className={`w-16 h-28 border-2 bg-gray-100 ${selectedMats.frontRight ? 'border-red-500 bg-gray-100' : 'border-gray-300'} flex items-center justify-center cursor-pointer`}
                                    onClick={() => toggleMatSelection('frontRight')}
                                >
                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedMats.frontRight ? 'bg-red-500 text-white' : 'bg-gray-300'}`}>
                                        {selectedMats.frontRight ? <Minus /> : <Plus />}
                                    </span>
                                </div>

                                {/* Traseira esquerda */}
                                <div
                                    className={`w-16 h-28 border-2 bg-gray-100 ${selectedMats.rearLeft ? 'border-red-500 bg-gray-100' : 'border-gray-300'} flex items-center justify-center cursor-pointer`}
                                    onClick={() => toggleMatSelection('rearLeft')}
                                >
                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedMats.rearLeft ? 'bg-red-500 text-white' : 'bg-gray-300'}`}>
                                        {selectedMats.rearLeft ? <Minus /> : <Plus />}
                                    </span>
                                </div>

                                {/* Traseira direita */}
                                <div
                                    className={`w-16 h-28 border-2 bg-gray-100 ${selectedMats.rearRight ? 'border-red-500 bg-gray-100' : 'border-gray-300'} flex items-center justify-center cursor-pointer`}
                                    onClick={() => toggleMatSelection('rearRight')}
                                >
                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedMats.rearRight ? 'bg-red-500 text-white' : 'bg-gray-300'}`}>
                                        {selectedMats.rearRight ? <Minus /> : <Plus />}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção de personalização - Lado direito */}
            <div className="w-full lg:max-w-[40%] flex flex-col justify-start items-start space-y-6 lg:px-4">
                <span className="text-lg text-fofalText font-brandon-400 mb-10">
                    Loja
                </span>
                <h1 className="font-brandon-800 text-4xl sm:text-5xl text-fofalText text-left">
                    Tapetes Auto
                    <br />
                    à medida
                </h1>

                <div className="w-full flex justify-start items-center gap-4 border-b border-fofalText py-4">
                    <span
                        onClick={() => setActiveTab(prev => prev === "info-add" ? "" : "info-add")}
                        className={`font-brandon-500 text-fofalText text-xs gap-4 uppercase cursor-pointer ${activeTab === "info-add" ? "font-bold" : ""
                            } select-none`}
                    >
                        Informação Adicional
                    </span>
                    <span
                        onClick={() => setActiveTab(prev => prev === "materiaisT" ? "" : "materiaisT")}
                        className={`font-brandon-500 text-fofalText text-xs gap-4 uppercase cursor-pointer ${activeTab === "materiaisT" ? "font-bold" : ""
                            } select-none`}
                    >
                        Diferenças entre materiais
                    </span>
                </div>
                <div>
                    {activeTab === "info-add" && (
                        <div className={`space-y-6 mb-14`}>
                            <div className="flex flex-col gap-2">
                                <p className="font-brandon-400 text-base text-fofalText">As <strong>personalizações</strong> que efectuamos são no âmbito automóvel (marca e ou modelo da viatura), pelo que se pretender algo fora deste tema deverá contactar-nos. As fixações apenas deverá adicionar, caso a viatura apresentar os pontos de fixação correspondentes na alcatifa da chapa do carro.</p>

                                <p className="font-brandon-400 text-base text-fofalText">O <strong>acabamento em volta do tapete (debruado)</strong> pode também ser personalizado. O acabamento mais simples é o Fio (incluído no valor), no entanto, dispomos de acabamentos mais resistentes como o <strong>Nobuk e Napel</strong>.</p>

                                <p className="font-brandon-400 text-base text-fofalText">As <strong>Fixações</strong> nos tapetes apenas deverão ser adicionadas caso a viatura apresente este istema de origem.</p>

                                <p className="font-brandon-400 text-base text-fofalText">Podemos também colocar um <strong>Reforço no tapete do condutor</strong> (oferta) nos tapetes de alcatifa, de forma a prolongar a resistência do tapete à abrasão do calçado aquando da condução.</p>
                            </div>
                        </div>
                    )}
                    {activeTab === "materiaisT" && (
                        <div className={`space-y-6 mb-14`}>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-brandon-800 text-lg text-fofalText">Alcatifa BASIC</h3>
                                <p className="font-brandon-400 text-base text-fofalText">Alcatifa com menor gramagem, constituída por fibras de polipropileno. Trata-se de uma alcatifa com carácter mais temporário.</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="font-brandon-800 text-lg text-fofalText">Alcatifa ECO</h3>
                                <p className="font-brandon-400 text-base text-fofalText">Constituída pelo mesmo material da BASIC (fibras de polipropileno), contudo, possui uma gramagem superior sendo por isso considerada uma gama de qualidade intermédia.</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="font-brandon-800 text-lg text-fofalText">Alcatifa VELUDO</h3>
                                <p className="font-brandon-400 text-base text-fofalText">Gama que mais se assemelha a alguns tapetes de origem, constituída por fibras de poliamida, mais resistente, com maior facilidade de limpeza e com base antiderrapante. Não enrola com o passar do tempo, é considerada uma gama de qualidade superior.</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="font-brandon-800 text-lg text-fofalText">Alcatifa MERCEDES</h3>
                                <p className="font-brandon-400 text-base text-fofalText">Detém esta designação por serem alcatifas já usadas pela marca, apresentando uma textura muito característica. Devido à sua textura não é possível personalizar este material com inscrições. Apresentam base de espuma anti-derrapante e estão inseridas na categoria de gama superior.</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="font-brandon-800 text-lg text-fofalText">Alcatifa VELUDO TWIST</h3>
                                <p className="font-brandon-400 text-base text-fofalText">Constituída por poliamida como a de VELUDO, contudo na sua confeção é feito um ponto em torção (twist) que lhe confere mais resistência. Alcatifa muito suave e com ligeiro brilho. Apresenta base de espuma anti-derrapante. </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="font-brandon-800 text-lg text-fofalText">Alcatifa CONFORTMIX</h3>
                                <p className="font-brandon-400 text-base text-fofalText">É a que possui a gramagem superior de todas os materiais, no entanto é uma alcatifa bastante peculiar sendo mais usada em carros clássicos como reprodução das alcatifas antigas de ráfia ou em carros de transporte/trabalho, sendo um aterial de longa duração e muito resistente. Esta alcatifa não leva acabamento em volta  não é possível de personalizar</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="font-brandon-800 text-lg text-fofalText">Borracha HEXA e Borracha FLEX</h3>
                                <p className="font-brandon-400 text-base text-fofalText"> material de borracha muito resistente e uma excelente opção para uma limpeza mais simples ou para proteger os seus tapetes de alcatifa. Nenhuma das borrachas apresenta cheiro característico de borracha, sendo apropriadas para o habitáculo e bagageiras. Ambas as borrachas apresentam uma textura que ajuda a criar aderência ao calçado e à mercadoria e, caso haja derrame de líquidos auxilia na sua contenção. </p>
                                <p className="font-brandon-400 text-base text-fofalText">As borrachas não levam acabamento em volta e não fazem bacia, não sendo possível também de personalizar.</p>
                                <p className="font-brandon-400 text-base text-fofalText">A Borracha FLEX apresenta “pítons” na sua base, sendo mais aconselhada quando pretende colocá-la por cima de tapetes de alcatifa que já estejam na sua viatura.</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-2 space-y-6 ">

                    {/* quadro de servicos/icons */}
                    <div className="flex justify-around items-center gap-4">
                        <div className="flex-center flex-col gap-2">
                            <img className="w-full max-w-6" src={shipping} alt="FOFAL" />
                            <p className="text-sm font-brandon-500 text-zinc-400">Envios Nacionais</p>
                        </div>
                        <div className="flex-center flex-col gap-2">
                            <img className="w-full max-w-5" src={safeOrder} alt="FOFAL" />
                            <p className="text-sm font-brandon-500 text-zinc-400">Compra Segura</p>
                        </div>
                        <div className="flex-center flex-col gap-2">
                            <img className="w-full max-w-6" src={specialists} alt="FOFAL" />
                            <p className="text-sm font-brandon-500 text-zinc-400">Somos Especialistas</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-brandon-800 text-2xl text-fofalText text-left mb-4">Dados da viatura</h3>
                        <div className="pb-1">
                            <p
                                className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4 cursor-pointer"
                                onClick={() => setOpenSection(openSection === 'brand' ? null : 'brand')}
                            >
                                <span className="font-brandon-800">Marca</span>
                                <ChevronRight
                                    className={`w-5 h-5 transition-all ease-in-out duration-300 ${openSection ? "rotate-90" : "rotate-0"
                                        }`}
                                />
                            </p>
                            {openSection === 'brand' && (
                                <div className="w-full flex justify-start items-start flex-col gap-1 p-2">
                                    <VehicleSelects
                                        options={tapetesMedidaData[0].Marcas}
                                        selectedValue={marcaSelecionada}
                                        onValueChange={setMarcaSelecionada}
                                        placeholder="Selecione a marca da viatura"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="pb-1">
                            <p
                                className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4 cursor-pointer"
                                onClick={() => setOpenSection(openSection === 'models' ? null : 'models')}
                            >
                                <span className="font-brandon-800">Modelo</span>
                                <ChevronRight
                                    className={`w-5 h-5 transition-all ease-in-out duration-300 ${openSection ? "rotate-90" : "rotate-0"
                                        }`}
                                />
                            </p>
                            {openSection === 'models' && (
                                <div className="w-full flex justify-start items-start flex-col gap-1 p-2">
                                    <VehicleSelects
                                        options={modelosDaMarca(marcaSelecionada)}
                                        selectedValue={modeloSelecionado}
                                        onValueChange={setModeloSelecionado}
                                        placeholder="Selecione o modelo da viatura"
                                        disabled={!marcaSelecionada}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="pb-1">
                            <p
                                className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4 cursor-pointer"
                                onClick={() => setOpenSection(openSection === 'year' ? null : 'year')}
                            >
                                <span className="font-brandon-800">Ano</span>
                                <ChevronRight
                                    className={`w-5 h-5 transition-all ease-in-out duration-300 ${openSection ? "rotate-90" : "rotate-0"
                                        }`}
                                />
                            </p>
                            {openSection === 'year' && (
                                <div className="w-full flex justify-start items-start flex-col gap-1 p-2">
                                    <VehicleSelects
                                        options={tapetesMedidaData[0].Anos}
                                        selectedValue={anoSelecionado}
                                        onValueChange={setAnoSelecionado}
                                        placeholder="Selecione o ano da viatura"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="pb-1">
                            <p
                                className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4 cursor-pointer"
                                onClick={() => setOpenSection(openSection === 'material' ? null : 'material')}
                            >
                                <span className="font-brandon-800">Material</span>
                                <ChevronRight
                                    className={`w-5 h-5 transition-all ease-in-out duration-300 ${openSection ? "rotate-90" : "rotate-0"
                                        }`}
                                />
                            </p>
                            {openSection === 'material' && (
                                <div className="w-full flex justify-start items-start flex-col gap-1 p-2">
                                    <div className="flex items-center gap-1">
                                        <Select onValueChange={setMaterialSelecionado} value={materialSelecionado}>
                                            <SelectTrigger className="w-[320px] border-none bg-transparent shadow-none outline-none focus:outline-none focus:ring-none focus:ring-offset-none focus:border-none">
                                                <SelectValue placeholder="Selecione o material" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Material</SelectLabel>
                                                    <SelectItem value="basic">Alcatifa BASIC</SelectItem>
                                                    <SelectItem value="eco">Alcatifa ECO</SelectItem>
                                                    <SelectItem value="veludo">Alcatifa VELUDO</SelectItem>
                                                    <SelectItem value="mercedes">Alcatifa MERCEDES</SelectItem>
                                                    <SelectItem value="veludo-twist">Alcatifa VELUDO TWIST</SelectItem>
                                                    <SelectItem value="confortmix">Alcatifa CONFORTMIX</SelectItem>
                                                    <SelectItem value="rubber-hexa">Borracha HEXA</SelectItem>
                                                    <SelectItem value="rubber-flex">Borracha FLEX</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="pb-1">
                            <p
                                className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4 cursor-pointer"
                                onClick={() => setOpenSection(openSection === 'cores' ? null : 'cores')}
                            >
                                <span className="font-brandon-800">Cor da personalização</span>
                                <ChevronRight
                                    className={`w-5 h-5 transition-all ease-in-out duration-300 ${openSection ? "rotate-90" : "rotate-0"
                                        }`}
                                />
                            </p>
                            {openSection === 'cores' && (
                                <div className="w-full flex justify-start items-start flex-col gap-1 p-2">
                                    {isRubberMaterial() ? (
                                        <p className="text-sm text-gray-500">Material não permite esta personalização.</p>
                                    ) : (
                                        <div className="flex flex-col items-center gap-1">
                                            <input
                                                type="text"
                                                className="border border-zinc-400 rounded-[4px] p-0.5"
                                                placeholder="Cor escolhida: 1"
                                                value={cores[0]}
                                                onChange={(e) => handleColorChange(0, e.target.value)}
                                            />
                                            <input
                                                type="text"
                                                className="border border-zinc-400 rounded-[4px] p-0.5"
                                                placeholder="Cor escolhida: 2"
                                                value={cores[1]}
                                                onChange={(e) => handleColorChange(1, e.target.value)}
                                            />
                                            <input
                                                type="text"
                                                className="border border-zinc-400 rounded-[4px] p-0.5"
                                                placeholder="Cor escolhida: 3"
                                                value={cores[2]}
                                                onChange={(e) => handleColorChange(2, e.target.value)}
                                            />
                                            <small className="font-brandon-300 text-[12px] text-fofalText">* máximo 3 cores permitidas</small>
                                        </div>)}

                                </div>
                            )}
                        </div>

                        <div className="pb-1">
                            <p
                                className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4 cursor-pointer"
                                onClick={() => setOpenSection(openSection === 'fixacao' ? null : 'fixacao')}
                            >
                                <span className="font-brandon-800">Fixações</span>
                                <ChevronRight
                                    className={`w-5 h-5 transition-all ease-in-out duration-300 ${openSection ? "rotate-90" : "rotate-0"}`}
                                />
                            </p>
                            {openSection === 'fixacao' && (
                                <div className="w-full flex justify-start items-start flex-col gap-3 p-2">
                                    <>
                                        <p className="font-brandon-400 text-fofalText">Selecione a peça com fixação:</p>
                                        <RadioGroup value={fixacoes} onValueChange={(value) => setFixacoes(value)}>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="condutor" id="ficaxao-condutor" />
                                                <Label htmlFor="ficaxao-condutor">Condutor</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="passageiro" id="ficaxao-passageiro" />
                                                <Label htmlFor="ficaxao-passageiro">Passageiro</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="ambos" id="ficaxao-ambos" />
                                                <Label htmlFor="ficaxao-ambos">Ambos</Label>
                                            </div>
                                        </RadioGroup>
                                    </>
                                    <small className="font-brandon-300 text-[12px] text-fofalText">* Adicione apenas se a viatura apresentar pontos de fixação correspondentes</small>
                                </div>
                            )}
                        </div>

                        <div className="pb-1">
                            <p
                                className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4 cursor-pointer"
                                onClick={() => setOpenSection(openSection === 'bordado' ? null : 'bordado')}
                            >
                                <span className="font-brandon-800">Bordado (personalização)</span>
                                <ChevronRight
                                    className={`w-5 h-5 transition-all ease-in-out duration-300 ${openSection === 'bordado' ? "rotate-90" : "rotate-0"}`}
                                />
                            </p>
                            {openSection === 'bordado' && (
                                <div className="w-full flex justify-start items-start flex-col gap-2 p-2">
                                    {isRubberMaterial() ? (
                                        <p className="text-sm text-gray-500">Material não permite bordado</p>
                                    ) : (
                                        <>
                                            <p className="font-brandon-400 text-fofalText">Selecione a peça com bordado:</p>
                                            <RadioGroup value={bordado} onValueChange={(value) => setBordado(value)}>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="condutor" id="bordado-condutor" />
                                                    <Label htmlFor="bordado-condutor">Condutor</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="passageiro" id="bordado-passageiro" />
                                                    <Label htmlFor="bordado-passageiro">Passageiro</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="ambos" id="bordado-ambos" />
                                                    <Label htmlFor="bordado-ambos">Ambos</Label>
                                                </div>
                                            </RadioGroup>
                                        </>
                                    )}
                                    <small className="font-brandon-300 text-[12px] text-fofalText">* Não disponível para borrachas e alguns materiais específicos</small>
                                </div>
                            )}
                        </div>

                        <div className="pb-1">
                            <p
                                className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4 cursor-pointer"
                                onClick={() => setOpenSection(openSection === 'orientation' ? null : 'orientation')}
                            >
                                <span className="font-brandon-800">Orientação (bordado)</span>
                                <ChevronRight
                                    className={`w-5 h-5 transition-all ease-in-out duration-300 ${openSection === 'orientation' ? "rotate-90" : "rotate-0"}`}
                                />
                            </p>
                            {openSection === 'orientation' && (
                                <div className="w-full flex justify-start items-start flex-col gap-2 p-2">
                                    {isRubberMaterial() ? (
                                        <p className="text-sm text-gray-500">Material não permite bordado</p>
                                    ) : (
                                        <>
                                            <p className="font-brandon-400 text-fofalText">Selecione a orientação do bordado:</p>
                                            <RadioGroup value={orientation} onValueChange={(value) => setOrientation(value)}>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="condutor" id="orientation-condutor" />
                                                    <Label htmlFor="orientation-condutor">Condutor</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="passageiro" id="orientation-passageiro" />
                                                    <Label htmlFor="orientation-passageiro">Passageiro</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="ambos" id="orientation-ambos" />
                                                    <Label htmlFor="orientation-ambos">Ambos</Label>
                                                </div>
                                            </RadioGroup>
                                        </>
                                    )}
                                    <small className="font-brandon-300 text-[12px] text-fofalText">* Não disponível para borrachas e alguns materiais específicos</small>
                                </div>
                            )}
                        </div>

                        <div className="pb-1">
                            <p
                                className="flex justify-between items-center font-brandon-500 text-lg text-fofalText border-t border-fofalText py-4 cursor-pointer"
                                onClick={() => setOpenSection(openSection === 'acabamento' ? null : 'acabamento')}
                            >
                                <span className="font-brandon-800">Debruado (acabamento em volta)</span>
                                <ChevronRight
                                    className={`w-5 h-5 transition-all ease-in-out duration-300 ${openSection === 'acabamento' ? "rotate-90" : "rotate-0"}`}
                                />
                            </p>
                            {openSection === 'acabamento' && (
                                <div className="w-full flex justify-start items-start flex-col gap-3 p-2">
                                    {isRubberMaterial() ? (
                                        <p className="text-sm text-gray-500">Material não permite acabamento</p>
                                    ) : (
                                        <RadioGroup value={acabamento} onValueChange={setAcabamento}>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="debruado_fio" id="acabamento-fio" />
                                                <Label htmlFor="acabamento-fio">Debruado Fio (Incluído)</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="debruado_nobuk" id="acabamento-nobuk" />
                                                <Label htmlFor="acabamento-nobuk">Debruado Nobuk</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="debruado_napel" id="acabamento-napel" />
                                                <Label htmlFor="acabamento-napel">Debruado Napel</Label>
                                            </div>
                                        </RadioGroup>
                                    )}
                                    <small className="font-brandon-300 text-[12px] text-fofalText">* Nem todos os materiais são compatíveis com todos os acabamentos</small>
                                </div>
                            )}
                        </div>

                        <p className="text-fofalText font-brandon-500 py-4">A FOFAL dispõe de vários moldes, contudo, poderá acontecer
                            não deter o molde de uma determinada viatura. Se for o caso,
                            entraremos em contacto com o cliente para resolver a questão.</p>

                        <div className="w-full flex-center gap-4 p-4">
                            <button
                                type="button"
                                className="w-full max-w-80 bg-gradient-auto rounded-full font-brandon-500 text-base text-white py-2 px-6"
                                onClick={handleAddToCart}
                            >
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AutoTapetesMedida;