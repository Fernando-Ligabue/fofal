export const userData = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  birthDate: "1990-01-01",
  password: "teste123",
  phone: "123456789",
  address: "Rua da Fofal, 123",
  city: "Lisboa",
  country: "Portugal",
  postalCode: "1234-567",

  orders: [
    {
      id: "O001",
      product: "Coberturas Universais Automovel - Tam- XL",
      price: 165.00,
      purchaseDate: "2025-04-10",
      statusOrder:"Em processamento",
    },
    {
      id: "O002",
      product: "Tapete de entrada - Vinil - 3m2",
      price: 313.65,
      purchaseDate: "2025-04-12",
      statusOrder:"Em processamento",
    },
  ],

  orderHistory: [
    {
      id: "O001",
      product: "Coberturas Universais Automovel - Tam- S",
      price: 100.00,
      purchaseDate: "2025-04-10",
      statusOrder:"Entregue",
    },
    {
      id: "O002",
      product: "Tapete de entrada - MT113 - 3m2",
      price: 332.04,
      purchaseDate: "2025-04-12",
      statusOrder:"Entregue",
    }
  ]
}

// export const userData = null;

// export const coberturasData = [
//   {
//     id: 1,
//     title: "Coberturas Universais Automóvel",
//     category: "Tamanho S",
//     description: "As coberturas universais são a escolha ideal para quem busca uma solução prática e acessível para proteger o. Projetadas para se adaptar a uma ampla gama de modelos e tamanhos de veículos, elas oferecem proteção completa contra fatores externos, como poeira, chuva, raios UV, excrementos de pássaros e seiva de árvores.",
//     segmento: "cobertura-universal",
//     setor: "auto",
//     size: "S",
//     dimensions: "400 x 160 x 120 cm (Comprimento x Largura x Altura)",
//     color: "Cinza Clara",
//     aditionalInfo: "Composição: Polietileno (60%) + Polipropileno (40%)",
//     price: 100.00,
//     images: [
//       'https://dummyjson.com/image/200x100',
//       'https://dummyjson.com/image/200x100',
//       'https://dummyjson.com/image/200x100',
//     ],
//     isNew: true
//   },
//   {
//     id: 2,
//     title: "Coberturas Universais Automóvel",
//     category: "Tamanho M",
//     description: "As coberturas universais são a escolha ideal para quem busca uma solução prática e acessível para proteger o. Projetadas para se adaptar a uma ampla gama de modelos e tamanhos de veículos, elas oferecem proteção completa contra fatores externos, como poeira, chuva, raios UV, excrementos de pássaros e seiva de árvores.",
//     segmento: "cobertura-universal",
//     setor: "auto",
//     size: "M",
//     dimensions: "430 x 160 x 120 cm (Comprimento x Largura x Altura)",
//     color: "Cinza Clara",
//     aditionalInfo: "Composição: Polietileno (60%) + Polipropileno (40%)",
//     price: 130.00,
//     images: [
//       'https://dummyjson.com/image/200x100',
//       'https://dummyjson.com/image/200x100',
//       'https://dummyjson.com/image/200x100',
//     ],
//     isNew: true
//   },
//   {
//     id: 3,
//     title: "Coberturas Universais Automóvel",
//     category: "Tamanho L",
//     description: "As coberturas universais são a escolha ideal para quem busca uma solução prática e acessível para proteger o. Projetadas para se adaptar a uma ampla gama de modelos e tamanhos de veículos, elas oferecem proteção completa contra fatores externos, como poeira, chuva, raios UV, excrementos de pássaros e seiva de árvores.",
//     segmento: "cobertura-universal",
//     setor: "auto",
//     size: "L",
//     dimensions: "480 x 175 x 120 cm (Comprimento x Largura x Altura)",
//     color: "Cinza Clara",
//     aditionalInfo: "Composição: Polietileno (60%) + Polipropileno (40%)",
//     price: 140.00,
//     images: [
//       'https://dummyjson.com/image/200x100',
//       'https://dummyjson.com/image/200x100',
//       'https://dummyjson.com/image/200x100',
//     ],
//     isNew: true
//   },
//   {
//     id: 4,
//     title: "Coberturas Universais Automóvel",
//     category: "Tamanho XL",
//     description: "As coberturas universais são a escolha ideal para quem busca uma solução prática e acessível para proteger o. Projetadas para se adaptar a uma ampla gama de modelos e tamanhos de veículos, elas oferecem proteção completa contra fatores externos, como poeira, chuva, raios UV, excrementos de pássaros e seiva de árvores.",
//     segmento: "cobertura-universal",
//     setor: "auto",
//     size: "XL",
//     dimensions: "530 x 175 x 120 cm (Comprimento x Largura x Altura)",
//     color: "Cinza Clara",
//     aditionalInfo: "Composição: Polietileno (60%) + Polipropileno (40%)",
//     price: 165.00,
//     images: [
//       'https://dummyjson.com/image/200x100',
//       'https://dummyjson.com/image/200x100',
//       'https://dummyjson.com/image/200x100',
//     ],
//     isNew: true
//   },
//   {
//     id: 5,
//     title: "Coberturas Universais Automóvel",
//     category: "Tamanho XXL1",
//     description: "As coberturas universais são a escolha ideal para quem busca uma solução prática e acessível para proteger o. Projetadas para se adaptar a uma ampla gama de modelos e tamanhos de veículos, elas oferecem proteção completa contra fatores externos, como poeira, chuva, raios UV, excrementos de pássaros e seiva de árvores.",
//     segmento: "cobertura-universal",
//     setor: "auto",
//     size: "XXL1",
//     dimensions: "463 x 173 x 143 cm (Comprimento x Largura x Altura)",
//     color: "Cinza Clara",
//     aditionalInfo: "Composição: Polietileno (60%) + Polipropileno (40%)",
//     price: 170.00,
//     images: [
//       'https://dummyjson.com/image/200x100',
//       'https://dummyjson.com/image/200x100',
//       'https://dummyjson.com/image/200x100',
//     ],
//     isNew: true
//   },
//   {
//     id: 6,
//     title: "Coberturas Universais Automóvel",
//     category: "Tamanho XXL2",
//     description: "As coberturas universais são a escolha ideal para quem busca uma solução prática e acessível para proteger o. Projetadas para se adaptar a uma ampla gama de modelos e tamanhos de veículos, elas oferecem proteção completa contra fatores externos, como poeira, chuva, raios UV, excrementos de pássaros e seiva de árvores.",
//     segmento: "cobertura-universal",
//     setor: "auto",
//     size: "XXL2",
//     dimensions: "491 x 194 x 146 cm (Comprimento x Largura x Altura)",
//     color: "Cinza Clara",
//     aditionalInfo: "Composição: Polietileno (60%) + Polipropileno (40%)",
//     price: 160.00,
//     images: [
//       'https://dummyjson.com/image/200x100',
//       'https://dummyjson.com/image/200x100',
//       'https://dummyjson.com/image/200x100',
//     ],
//     isNew: true
//   },
//   {
//     id: 7,
//     title: "Coberturas Universais Automóvel",
//     category: "Tamanho XXL3",
//     description: "As coberturas universais são a escolha ideal para quem busca uma solução prática e acessível para proteger o. Projetadas para se adaptar a uma ampla gama de modelos e tamanhos de veículos, elas oferecem proteção completa contra fatores externos, como poeira, chuva, raios UV, excrementos de pássaros e seiva de árvores.",
//     segmento: "cobertura-universal",
//     setor: "auto",
//     size: "XXL3",
//     dimensions: "508 x 198 x 145 cm (Comprimento x Largura x Altura)",
//     color: "Cinza Clara",
//     aditionalInfo: "Composição: Polietileno (60%) + Polipropileno (40%)",
//     price: 165.00,
//     images: [
//       'https://dummyjson.com/image/200x100',
//       'https://dummyjson.com/image/200x100',
//       'https://dummyjson.com/image/200x100',
//     ],
//     isNew: true
//   },
// ];

// export const alcatifasData = [
//   {
//     id: 1,
//     title: "Alcatifa",
//     type: "Holmes",
//     category: "Curta duração",
//     description: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     features: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     customization: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     segmento: "alcatifas-eventos",
//     setor: "comercio-industria",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "2.00mt x 60.00mt x 2.5mm",
//     colors: ["Preto", "Charcoal", "Cinza", "Bege", "Mel", "Castanho", "Areia", "Taupé", "Verde", "Vermelho", "Vermelho Mesclado", "Azul", "Branco"],
//     price: 6.00,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "Holmes"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 2,
//     title: "Alcatifa",
//     type: "Holmes",
//     category: "curta duração",
//     description: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     features: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     customization: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     segmento: "alcatifas-eventos",
//     setor: "comercio-industria",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "4.00mt x 60.00mt x 2.5mm",
//     colors: ["Preto", "Charcoal", "Cinza", "Bege", "Mel", "Castanho", "Areia", "Taupé", "Verde", "Vermelho", "Vermelho Mesclado", "Azul", "Branco"],
//     price: 6.00,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "Holmes"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 3,
//     title: "Alcatifa",
//     type: "Plat",
//     category: "média duração",
//     description: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     features: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     customization: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     segmento: "alcatifas-eventos",
//     setor: "comercio-industria",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "2.00mt x 30.00mt x 2.5mm",
//     colors: ["Preto", "Charcoal", "Cinza", "Bege", "Mel", "Castanho", "Areia", "Taupé", "Verde", "Vermelho", "Vermelho Mesclado", "Azul", "Branco"],
//     price: 8.00,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "Plat"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 4,
//     title: "Alcatifa Salsa",
//     type: "Salsa",
//     category: "longa duração",
//     description: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     features: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     customization: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     segmento: "alcatifas-eventos",
//     setor: "comercio-industria",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "2.00mt x 25.00mt x 5mm",
//     colors: ["Preto", "Charcoal", "Cinza", "Bege", "Mel", "Castanho", "Areia", "Taupé", "Verde", "Vermelho", "Vermelho Mesclado", "Azul", "Branco"],
//     price: 20.00,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "Salsa"
//     },
//     isSoldPerSquareMeter: true,
//   },
    
// ];

// export const tapetesEntranceComercialData = [
//   {
//     id: 1,
//     title: "Tapete de entrada",
//     type: "MT113",
//     category: "Interior",
//     description: [
//       "Alcatifa bastante resistente e recomendada para tráfego intenso, não abate, não desfia e não quebra.Apresenta 11mm de espessura, mas à qual pode ser acoplada uma espuma própria para perfazer a altura pretendida.Estes tapetes não carecem de acabamento, no entanto, pode ser adicionada uma orla em toda a volta.",
//       "Este material tem sido fornecido em alternativa ao Cairo na área de hotelaria, espaços residenciais e comerciais, estabelecimentos de ensino, entre outros. Estes tapetes constituem uma solução criativa a integrar nas entradas independentemente do tipo de tráfego e da dimensão da área a revestir. Nos espaços residenciais, este material tem a particularidade de se integrar quer em espaços tradicionais ou rústicos, enriquecendo-os, quer em ambientes mais modernos, tanto nos de maior simplicidade como em situações mais elaboradas. Pode ser um elemento a coordenar com o conjunto ou a realçar-se como uma peça de destaque, em função do local onde é colocado, da dimensão e das cores selecionadas"
//     ],
//     features: [
//       "Adequado para tráfego intenso - centros comerciais, aeroportos, hospitais, hotéis,bancos, restaurantes, instalações de golf, vestiários, instalações de ski, recintos patinagem, stands de automóveis, entre outros", "Espessura 11mm, com possibilidade de acoplação de espuma para preenchimento de caixa", "Peso 3,2 Kg/m2", "Largura máxima de 2.00 MT (podem ser efectuadas junções de tapetes se necessário)", "Uso em Ambiente Interior e Exterior Coberto", "Grande retenção de humidades", "Resistente ao bolor e míldio, estabilizada aos raios U.V., resistente ao esmagamento e dotada de grande estabilidade quando exposta a condições climáticas extremas", "Textura que favorece a raspagem da sujidade do calçado", "Não carece de remate, contudo, existe a opção de se colocar orla (rampeada) de borracha", "Base em Borracha Sintética", "Limpeza por aspiração ou injecção/extracção",
//     ],
//     customization: [
//       "A personalização não é feita por impressão mas sim realizada manualmente “tapete com tapete”. Ou seja, neste material não se recorre à pintura, mas sim ao recorte e preenchimento com o mesmo material do tapete, de outra cor, para se criar o grafismo/lettering. Este tipo de personalização é vantajosa, na medida em que a longevidade da personalização se torna equivalente à do tapete. Tendo em conta esta forma de personalização, as cores para as mesmas estão dependentes das cores existentes neste material.", "Para encomendas de tapetes personalizados por favor enviar e-mail para comercial@fofal.pt."
//     ],
//     segmento: "tapetes-entrada",
//     setor: "comercio-industria",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 2.00mt",
//     colors: ["Preto", "Charcoal", "Cinza", "Bege", "Mel", "Castanho", "Areia", "Taupé", "Verde", "Vermelho", "Vermelho Mesclado", "Azul", "Branco"],
//     price: 73.80,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "MT113"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 2,
//     title: "Tapete de entrada",
//     type: "MT113",
//     category: "Interior",
//     description: [
//       "Alcatifa bastante resistente e recomendada para tráfego intenso, não abate, não desfia e não quebra.Apresenta 11mm de espessura, mas à qual pode ser acoplada uma espuma própria para perfazer a altura pretendida.Estes tapetes não carecem de acabamento, no entanto, pode ser adicionada uma orla em toda a volta.",
//       "Este material tem sido fornecido em alternativa ao Cairo na área de hotelaria, espaços residenciais e comerciais, estabelecimentos de ensino, entre outros. Estes tapetes constituem uma solução criativa a integrar nas entradas independentemente do tipo de tráfego e da dimensão da área a revestir. Nos espaços residenciais, este material tem a particularidade de se integrar quer em espaços tradicionais ou rústicos, enriquecendo-os, quer em ambientes mais modernos, tanto nos de maior simplicidade como em situações mais elaboradas. Pode ser um elemento a coordenar com o conjunto ou a realçar-se como uma peça de destaque, em função do local onde é colocado, da dimensão e das cores selecionadas"
//     ],
//     features: [
//       "Adequado para tráfego intenso - centros comerciais, aeroportos, hospitais, hotéis,bancos, restaurantes, instalações de golf, vestiários, instalações de ski, recintos patinagem, stands de automóveis, entre outros", "Espessura 11mm, com possibilidade de acoplação de espuma para preenchimento de caixa", "Peso 3,2 Kg/m2", "Largura máxima de 2.00 MT (podem ser efectuadas junções de tapetes se necessário)", "Uso em Ambiente Interior e Exterior Coberto", "Grande retenção de humidades", "Resistente ao bolor e míldio, estabilizada aos raios U.V., resistente ao esmagamento e dotada de grande estabilidade quando exposta a condições climáticas extremas", "Textura que favorece a raspagem da sujidade do calçado", "Não carece de remate, contudo, existe a opção de se colocar orla (rampeada) de borracha", "Base em Borracha Sintética", "Limpeza por aspiração ou injecção/extracção",
//     ],
//     customization: [
//       "A personalização não é feita por impressão mas sim realizada manualmente “tapete com tapete”. Ou seja, neste material não se recorre à pintura, mas sim ao recorte e preenchimento com o mesmo material do tapete, de outra cor, para se criar o grafismo/lettering. Este tipo de personalização é vantajosa, na medida em que a longevidade da personalização se torna equivalente à do tapete. Tendo em conta esta forma de personalização, as cores para as mesmas estão dependentes das cores existentes neste material.", "Para encomendas de tapetes personalizados por favor enviar e-mail para comercial@fofal.pt."
//     ],
//     segmento: "tapetes-entrada",
//     setor: "comercio-industria",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 1.00mt",
//     colors: ["Preto", "Charcoal", "Cinza", "Bege", "Mel", "Castanho", "Areia", "Taupé", "Verde", "Vermelho", "Vermelho Mesclado", "Azul", "Branco"],
//     price: 86.10,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "MT113"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 3,
//     title: "Tapete de entrada",
//     type: "Vinil",
//     category: "Interior",
//     description: ["Existem vários tipos de vinil no mercado. A nossa solução passa por Vinil de qualidade superior, com as mesmas características que o Vinil da marca 3M. Apresenta 15mm de espessura, não dando para aumentar a altura do mesmo. Esta altura recomenda-se para tráfego intenso.", "São tapetes de PVC em forma de esparguete, pelo que os laços raspam as sujidades, e detritos provenientes do calçado, ficando retidos no tapete. Aconselhados essencialmente para ambiente exterior uma vez que não absorvem água - o facto de não serem munidos de base permite que a água escorra para se processar a sua drenagem.", "O material usado para o seu fabrico é muito durável, flexível, resistente aos raios UV, comportando-se eficazmente em diferentes climas, apresentando ainda uma grande capacidade de adaptação a qualquer tipo de pavimento.", "Estes tapetes não carecem de acabamento, no entanto, pode ser adicionada uma orla em toda a volta."],
//     features: ["Adequado para Tráfego Intenso", "Espessura 15mm", "Peso: 5,5 Kg/m2", "Adequado para ambiente exterior", "Largura máxima de 1,20 MT (podem ser efectuadas junções de tapetes se necessário)", "Uso em Ambiente Exterior", "Resistente à acção dos raios UV e à chuva", "Lavável com água",],
//     customization: ["No caso de personalização do Vinil, é executada uma fusão de cores diferentes do mesmo aterial e não uma impressão ou pintura, logo a personalização terá a mesma durabilidade que o tapete. Tendo em conta esta forma de personalização, as cores para as mesmas estão dependentes das cores existentes neste material.", "Para encomendas de tapetes personalizados por favor enviar e-mail para comercial@fofal.pt."],
//     segmento: "tapetes-entrada",
//     setor: "comercio-industria",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 1.20mt , A x 15mm",
//     colors: [],
//     price: 104.55,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "Vinil"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 4,
//     title: "Tapete de entrada",
//     type: "Cairo",
//     category: "Interior",
//     description: ["O Cairo é um tapete bastante utilizado em entradas, constituído 100% por fibra de côco natural, cujo material que forma a base é PVC. Apresenta actualmente a designação de Cairo Mecânico.", "Este material, dependendo da altura e densidade pode ser aconselhado para tráfego ligeiro ou intenso, havendo disponíveis as alturas de 17mm e de 23mm."],
//     features: ["Tráfego ligeiro (Cairo 17mm doméstico), Tráfego Intenso (Cairo 23mm Doméstico e 17mm Comercial)", "Alturas de 17mm e 23mm", "Peso aproximadamente 6,5Kg/m2", "Uso em Ambiente Interior e Exterior Coberto", "Aconselha-se limpeza com regularidade através de aspiração"],
//     customization: ["Os tapetes de Cairo com PVC não são personalizados devido às fibras do próprio material que se vão soltando com o tempo, fazendo com que a personalização apresente pouca durabilidade."],
//     segmento: "tapetes-entrada",
//     setor: "comercio-industria",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 2.00mt , A x 17mm",
//     colors: [],
//     price: 76.02,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "Cairo"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 5,
//     title: "Tapete de entrada",
//     type: "Cairo",
//     category: "Interior",
//     description: ["O Cairo é um tapete bastante utilizado em entradas, constituído 100% por fibra de côco natural, cujo material que forma a base é PVC. Apresenta actualmente a designação de Cairo Mecânico.", "Este material, dependendo da altura e densidade pode ser aconselhado para tráfego ligeiro ou intenso, havendo disponíveis as alturas de 17mm e de 23mm."],
//     features: ["Tráfego ligeiro (Cairo 17mm doméstico), Tráfego Intenso (Cairo 23mm Doméstico e 17mm Comercial)", "Alturas de 17mm e 23mm", "Peso aproximadamente 6,5Kg/m2", "Uso em Ambiente Interior e Exterior Coberto", "Aconselha-se limpeza com regularidade através de aspiração"],
//     customization: ["Os tapetes de Cairo com PVC não são personalizados devido às fibras do próprio material que se vão soltando com o tempo, fazendo com que a personalização apresente pouca durabilidade."],
//     segmento: "tapetes-entrada",
//     setor: "comercio-industria",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 1.00mt , A x 17mm",
//     colors: [],
//     price: 98.40,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "Cairo"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 6,
//     title: "Tapete de entrada",
//     type: "BT200",
//     category: "Interior | Exterior",
//     description: [
//       "A referência BT200 é uma excelente opção se procura um tapete personalizado para uma zona de tráfego mais elevada. Na sua composição tem uma combinação de fibras mais suaves com fibras mais rígidas, efectuando assim a secagem e raspagem do calçado.", "Disponível em 45 cores brilhantes como padrão. Graças à inovadora tecnologia Chromojet, todas as cores Pantone ou cores especiais misturadas personalizadas podem ser criadas. Adequado para zonas com tráfego mais exigente e intensivo."
//     ],
//     features: [
//       "Tráfego Intenso", "Uso Ambiente Interior", "Peso: 3,4Kg/m2", "Altura: Aprox. 10mm", "Base de Borracha", "Fibras de Poliamida 6.6", "Lavável até 40ºC (Não usar hidrocarboneto clorado)", "Reacção ao Fogo: Bfl-s1", "Medida Máxima: 2.00 x 7.50m", "Todo o tapete é acompanhado por uma orla de borracha", "Possibilidade de Personalização através de Impressão"],
//     customization: ["No caso de personalização do BT 200 é executada uma impressão de cores desde a raíz até à ponta final da fibra. Não sendo uma personalização superficial, a personalização terá uma grande durabilidade. Tendo em conta esta forma de personalização, as cores disponíveis para a mesma são de uma grande variedade", "Para encomendas de tapetes personalizados por favor enviar e-mail para comercial@fofal.pt"],
//     segmento: "tapetes-entrada",
//     setor: "comercio-industria",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 2.00mt , A x 10mm",
//     colors: [],
//     price: 295.00,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "BT 200"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 7,
//     title: "Tapete de entrada",
//     type: "BT INDOOR",
//     category: "Interior | Exterior",
//     description: [
//       "A referência BT200 é uma excelente opção se procura um tapete personalizado para uma zona de tráfego mais elevada. Na sua composição tem uma combinação de fibras mais suaves com fibras mais rígidas, efectuando assim a secagem e raspagem do calçado.", "Disponível em 45 cores brilhantes como padrão. Graças à inovadora tecnologia Chromojet, todas as cores Pantone ou cores especiais misturadas personalizadas podem ser criadas. Adequado para zonas com tráfego mais exigente e intensivo."
//     ],
//     features: [
//       "Tráfego Intenso", "Uso Ambiente Interior", "Peso: 3,4Kg/m2", "Altura: Aprox. 10mm", "Base de Borracha", "Fibras de Poliamida 6.6", "Lavável até 40ºC (Não usar hidrocarboneto clorado)", "Reacção ao Fogo: Bfl-s1", "Medida Máxima: 2.00 x 7.50m", "Todo o tapete é acompanhado por uma orla de borracha", "Possibilidade de Personalização através de Impressão"],
//     customization: ["No caso de personalização do BT 200 é executada uma impressão de cores desde a raíz até à ponta final da fibra. Não sendo uma personalização superficial, a personalização terá uma grande durabilidade. Tendo em conta esta forma de personalização, as cores disponíveis para a mesma são de uma grande variedade", "Para encomendas de tapetes personalizados por favor enviar e-mail para comercial@fofal.pt"],
//     segmento: "tapetes-entrada",
//     setor: "comercio-industria",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 2.00mt , A x 9mm",
//     colors: [],
//     price: 243.54,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "BT INDOOR (9mm)"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 8,
//     title: "Tapete de entrada",
//     type: "BT INDOOR",
//     category: "Interior | Exterior",
//     description: [
//       "A referência BT200 é uma excelente opção se procura um tapete personalizado para uma zona de tráfego mais elevada. Na sua composição tem uma combinação de fibras mais suaves com fibras mais rígidas, efectuando assim a secagem e raspagem do calçado.", "Disponível em 45 cores brilhantes como padrão. Graças à inovadora tecnologia Chromojet, todas as cores Pantone ou cores especiais misturadas personalizadas podem ser criadas. Adequado para zonas com tráfego mais exigente e intensivo."
//     ],
//     features: [
//       "Tráfego Intenso", "Uso Ambiente Interior", "Peso: 3,4Kg/m2", "Altura: Aprox. 10mm", "Base de Borracha", "Fibras de Poliamida 6.6", "Lavável até 40ºC (Não usar hidrocarboneto clorado)", "Reacção ao Fogo: Bfl-s1", "Medida Máxima: 2.00 x 7.50m", "Todo o tapete é acompanhado por uma orla de borracha", "Possibilidade de Personalização através de Impressão"],
//     customization: ["No caso de personalização do BT 200 é executada uma impressão de cores desde a raíz até à ponta final da fibra. Não sendo uma personalização superficial, a personalização terá uma grande durabilidade. Tendo em conta esta forma de personalização, as cores disponíveis para a mesma são de uma grande variedade", "Para encomendas de tapetes personalizados por favor enviar e-mail para comercial@fofal.pt"],
//     segmento: "tapetes-entrada",
//     setor: "comercio-industria",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 0.85mt ou L x 1.15mt ou L x 1.50mt, A x 9mm",
//     colors: [],
//     price: 201.73,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "BT INDOOR (9mm)"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 9,
//     title: "Tapete de entrada",
//     type: "Alumínio",
//     category: "Interior | Exterior",
//     description: ["Os tapetes de Alumínio são enroláveis e fabricados à medida. O conjunto é conectado através de peças de junção em PVC que mantém toda a estrutura estável e fixa, bem como um afastamento constante entre perfis. Este material pode ser utilizado no interior e exterior dependendo do tipo de conjugação pela qual optar para a barras de alumínio. O alumínio, dependendo do tipo de conjugação que se pretende apresenta também alturas diferentes.", "Dispomos ainda da opção de alumínios insonorizados e/ou anodizados para um maior conforto e durabilidade.", "Para adquirir este produto deve entrar em contacto com comercial@fofal.pt."],
//     features: ["Tráfego Intenso",
//       "Tapetes de Utilização Mista (Interior e Exterior)",
//       "A limpeza deve ser efetuada regularmente – aspirar e utilizar água com detergente, para limpeza mais profunda. As peças de junção em PVC permitem que o tapete possa ser enrolado sobre si mesmo para maior comodidade de limpeza da face inferior do tapete e do pavimento onde este está aplicado", "Opções Disponíveis a Colocar nas Barras de Alumínio: PVC, Alcatifa e Escovas"],
//     customization: ["Os tapetes de Alumínio podem ser personalizados, sendo a sua personalização feita ou em Barra de Inox ou em todo o tapete caso apresente Alcatifa na sua conjugação. Para encomendas de tapetes personalizados por favor enviar e-mail para comercial@fofal.pt."],
//     segmento: "tapetes-entrada",
//     setor: "comercio-industria",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "Sob consulta",
//     colors: [],
//     price: 0,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "Alumínio"
//     },
//     isSoldPerSquareMeter: true,
//   },
// ];

// export const alcatifasHousesData = [
//   {
//     id: 1,
//     title: "Alcatifa",
//     type: "Holmes",
//     category: "Curta duração",
//     description: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     features: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     customization: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     segmento: "alcatifas-casa",
//     setor: "casas",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "2.00mt x 60.00mt x 2.5mm",
//     colors: ["Preto", "Charcoal", "Cinza", "Bege", "Mel", "Castanho", "Areia", "Taupé", "Verde", "Vermelho", "Vermelho Mesclado", "Azul", "Branco"],
//     price: 6.00,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: false,
//     composicao: {
//       material: "Holmes"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 2,
//     title: "Alcatifa",
//     type: "Holmes",
//     category: "curta duração",
//     description: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     features: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     customization: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     segmento: "alcatifas-casa",
//     setor: "casas",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "4.00mt x 60.00mt x 2.5mm",
//     colors: ["Preto", "Charcoal", "Cinza", "Bege", "Mel", "Castanho", "Areia", "Taupé", "Verde", "Vermelho", "Vermelho Mesclado", "Azul", "Branco"],
//     price: 6.00,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: false,
//     composicao: {
//       material: "Holmes"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 3,
//     title: "Alcatifa",
//     type: "Plat",
//     category: "média duração",
//     description: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     features: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     customization: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     segmento: "alcatifas-casa",
//     setor: "casas",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "2.00mt x 30.00mt x 2.5mm",
//     colors: ["Preto", "Charcoal", "Cinza", "Bege", "Mel", "Castanho", "Areia", "Taupé", "Verde", "Vermelho", "Vermelho Mesclado", "Azul", "Branco"],
//     price: 8.00,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: false,
//     composicao: {
//       material: "Plat"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 4,
//     title: "Alcatifa Salsa",
//     type: "Salsa",
//     category: "longa duração",
//     description: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     features: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     customization: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos culpa beatae tempora quisquam veritatis optio debitis delectus, molestias quo."],
//     segmento: "alcatifas-casa",
//     setor: "casas",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "2.00mt x 25.00mt x 5mm",
//     colors: ["Preto", "Charcoal", "Cinza", "Bege", "Mel", "Castanho", "Areia", "Taupé", "Verde", "Vermelho", "Vermelho Mesclado", "Azul", "Branco"],
//     price: 20.00,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: false,
//     composicao: {
//       material: "Salsa"
//     },
//     isSoldPerSquareMeter: true,
//   },
    
// ];

// export const tapetesEntranceHousesData = [
//   {
//     id: 1,
//     title: "Tapete de entrada",
//     type: "MT113",
//     category: "Interior",
//     description: [
//       "Alcatifa bastante resistente e recomendada para tráfego intenso, não abate, não desfia e não quebra.Apresenta 11mm de espessura, mas à qual pode ser acoplada uma espuma própria para perfazer a altura pretendida.Estes tapetes não carecem de acabamento, no entanto, pode ser adicionada uma orla em toda a volta.",
//       "Este material tem sido fornecido em alternativa ao Cairo na área de hotelaria, espaços residenciais e comerciais, estabelecimentos de ensino, entre outros. Estes tapetes constituem uma solução criativa a integrar nas entradas independentemente do tipo de tráfego e da dimensão da área a revestir. Nos espaços residenciais, este material tem a particularidade de se integrar quer em espaços tradicionais ou rústicos, enriquecendo-os, quer em ambientes mais modernos, tanto nos de maior simplicidade como em situações mais elaboradas. Pode ser um elemento a coordenar com o conjunto ou a realçar-se como uma peça de destaque, em função do local onde é colocado, da dimensão e das cores selecionadas"
//     ],
//     features: [
//       "Adequado para tráfego intenso - centros comerciais, aeroportos, hospitais, hotéis,bancos, restaurantes, instalações de golf, vestiários, instalações de ski, recintos patinagem, stands de automóveis, entre outros", "Espessura 11mm, com possibilidade de acoplação de espuma para preenchimento de caixa", "Peso 3,2 Kg/m2", "Largura máxima de 2.00 MT (podem ser efectuadas junções de tapetes se necessário)", "Uso em Ambiente Interior e Exterior Coberto", "Grande retenção de humidades", "Resistente ao bolor e míldio, estabilizada aos raios U.V., resistente ao esmagamento e dotada de grande estabilidade quando exposta a condições climáticas extremas", "Textura que favorece a raspagem da sujidade do calçado", "Não carece de remate, contudo, existe a opção de se colocar orla (rampeada) de borracha", "Base em Borracha Sintética", "Limpeza por aspiração ou injecção/extracção",
//     ],
//     customization: [
//       "A personalização não é feita por impressão mas sim realizada manualmente “tapete com tapete”. Ou seja, neste material não se recorre à pintura, mas sim ao recorte e preenchimento com o mesmo material do tapete, de outra cor, para se criar o grafismo/lettering. Este tipo de personalização é vantajosa, na medida em que a longevidade da personalização se torna equivalente à do tapete. Tendo em conta esta forma de personalização, as cores para as mesmas estão dependentes das cores existentes neste material.", "Para encomendas de tapetes personalizados por favor enviar e-mail para comercial@fofal.pt."
//     ],
//     segmento: "tapetes-entrada",
//     setor: "casas",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 2.00mt",
//     colors: ["Preto", "Charcoal", "Cinza", "Bege", "Mel", "Castanho", "Areia", "Taupé", "Verde", "Vermelho", "Vermelho Mesclado", "Azul", "Branco"],
//     price: 73.80,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "MT113"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 2,
//     title: "Tapete de entrada",
//     type: "MT113",
//     category: "Interior",
//     description: [
//       "Alcatifa bastante resistente e recomendada para tráfego intenso, não abate, não desfia e não quebra.Apresenta 11mm de espessura, mas à qual pode ser acoplada uma espuma própria para perfazer a altura pretendida.Estes tapetes não carecem de acabamento, no entanto, pode ser adicionada uma orla em toda a volta.",
//       "Este material tem sido fornecido em alternativa ao Cairo na área de hotelaria, espaços residenciais e comerciais, estabelecimentos de ensino, entre outros. Estes tapetes constituem uma solução criativa a integrar nas entradas independentemente do tipo de tráfego e da dimensão da área a revestir. Nos espaços residenciais, este material tem a particularidade de se integrar quer em espaços tradicionais ou rústicos, enriquecendo-os, quer em ambientes mais modernos, tanto nos de maior simplicidade como em situações mais elaboradas. Pode ser um elemento a coordenar com o conjunto ou a realçar-se como uma peça de destaque, em função do local onde é colocado, da dimensão e das cores selecionadas"
//     ],
//     features: [
//       "Adequado para tráfego intenso - centros comerciais, aeroportos, hospitais, hotéis,bancos, restaurantes, instalações de golf, vestiários, instalações de ski, recintos patinagem, stands de automóveis, entre outros", "Espessura 11mm, com possibilidade de acoplação de espuma para preenchimento de caixa", "Peso 3,2 Kg/m2", "Largura máxima de 2.00 MT (podem ser efectuadas junções de tapetes se necessário)", "Uso em Ambiente Interior e Exterior Coberto", "Grande retenção de humidades", "Resistente ao bolor e míldio, estabilizada aos raios U.V., resistente ao esmagamento e dotada de grande estabilidade quando exposta a condições climáticas extremas", "Textura que favorece a raspagem da sujidade do calçado", "Não carece de remate, contudo, existe a opção de se colocar orla (rampeada) de borracha", "Base em Borracha Sintética", "Limpeza por aspiração ou injecção/extracção",
//     ],
//     customization: [
//       "A personalização não é feita por impressão mas sim realizada manualmente “tapete com tapete”. Ou seja, neste material não se recorre à pintura, mas sim ao recorte e preenchimento com o mesmo material do tapete, de outra cor, para se criar o grafismo/lettering. Este tipo de personalização é vantajosa, na medida em que a longevidade da personalização se torna equivalente à do tapete. Tendo em conta esta forma de personalização, as cores para as mesmas estão dependentes das cores existentes neste material.", "Para encomendas de tapetes personalizados por favor enviar e-mail para comercial@fofal.pt."
//     ],
//     segmento: "tapetes-entrada",
//     setor: "casas",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 1.00mt",
//     colors: ["Preto", "Charcoal", "Cinza", "Bege", "Mel", "Castanho", "Areia", "Taupé", "Verde", "Vermelho", "Vermelho Mesclado", "Azul", "Branco"],
//     price: 86.10,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "MT113"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 3,
//     title: "Tapete de entrada",
//     type: "Vinil",
//     category: "Interior",
//     description: ["Existem vários tipos de vinil no mercado. A nossa solução passa por Vinil de qualidade superior, com as mesmas características que o Vinil da marca 3M. Apresenta 15mm de espessura, não dando para aumentar a altura do mesmo. Esta altura recomenda-se para tráfego intenso.", "São tapetes de PVC em forma de esparguete, pelo que os laços raspam as sujidades, e detritos provenientes do calçado, ficando retidos no tapete. Aconselhados essencialmente para ambiente exterior uma vez que não absorvem água - o facto de não serem munidos de base permite que a água escorra para se processar a sua drenagem.", "O material usado para o seu fabrico é muito durável, flexível, resistente aos raios UV, comportando-se eficazmente em diferentes climas, apresentando ainda uma grande capacidade de adaptação a qualquer tipo de pavimento.", "Estes tapetes não carecem de acabamento, no entanto, pode ser adicionada uma orla em toda a volta."],
//     features: ["Adequado para Tráfego Intenso", "Espessura 15mm", "Peso: 5,5 Kg/m2", "Adequado para ambiente exterior", "Largura máxima de 1,20 MT (podem ser efectuadas junções de tapetes se necessário)", "Uso em Ambiente Exterior", "Resistente à acção dos raios UV e à chuva", "Lavável com água",],
//     customization: ["No caso de personalização do Vinil, é executada uma fusão de cores diferentes do mesmo aterial e não uma impressão ou pintura, logo a personalização terá a mesma durabilidade que o tapete. Tendo em conta esta forma de personalização, as cores para as mesmas estão dependentes das cores existentes neste material.", "Para encomendas de tapetes personalizados por favor enviar e-mail para comercial@fofal.pt."],
//     segmento: "tapetes-entrada",
//     setor: "casas",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 1.20mt , A x 15mm",
//     colors: [],
//     price: 104.55,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "Vinil"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 4,
//     title: "Tapete de entrada",
//     type: "Cairo",
//     category: "Interior",
//     description: ["O Cairo é um tapete bastante utilizado em entradas, constituído 100% por fibra de côco natural, cujo material que forma a base é PVC. Apresenta actualmente a designação de Cairo Mecânico.", "Este material, dependendo da altura e densidade pode ser aconselhado para tráfego ligeiro ou intenso, havendo disponíveis as alturas de 17mm e de 23mm."],
//     features: ["Tráfego ligeiro (Cairo 17mm doméstico), Tráfego Intenso (Cairo 23mm Doméstico e 17mm Comercial)", "Alturas de 17mm e 23mm", "Peso aproximadamente 6,5Kg/m2", "Uso em Ambiente Interior e Exterior Coberto", "Aconselha-se limpeza com regularidade através de aspiração"],
//     customization: ["Os tapetes de Cairo com PVC não são personalizados devido às fibras do próprio material que se vão soltando com o tempo, fazendo com que a personalização apresente pouca durabilidade."],
//     segmento: "tapetes-entrada",
//     setor: "casas",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 2.00mt , A x 17mm",
//     colors: [],
//     price: 110.70,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "Cairo"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 5,
//     title: "Tapete de entrada",
//     type: "Cairo",
//     category: "Interior",
//     description: ["O Cairo é um tapete bastante utilizado em entradas, constituído 100% por fibra de côco natural, cujo material que forma a base é PVC. Apresenta actualmente a designação de Cairo Mecânico.", "Este material, dependendo da altura e densidade pode ser aconselhado para tráfego ligeiro ou intenso, havendo disponíveis as alturas de 17mm e de 23mm."],
//     features: ["Tráfego ligeiro (Cairo 17mm doméstico), Tráfego Intenso (Cairo 23mm Doméstico e 17mm Comercial)", "Alturas de 17mm e 23mm", "Peso aproximadamente 6,5Kg/m2", "Uso em Ambiente Interior e Exterior Coberto", "Aconselha-se limpeza com regularidade através de aspiração"],
//     customization: ["Os tapetes de Cairo com PVC não são personalizados devido às fibras do próprio material que se vão soltando com o tempo, fazendo com que a personalização apresente pouca durabilidade."],
//     segmento: "tapetes-entrada",
//     setor: "casas",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 2.00mt , P x 1.00mt , A x 17mm",
//     colors: [],
//     price: 56.66,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "Cairo"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 6,
//     title: "Tapete de entrada",
//     type: "Cairo",
//     category: "Interior",
//     description: ["O Cairo é um tapete bastante utilizado em entradas, constituído 100% por fibra de côco natural, cujo material que forma a base é PVC. Apresenta actualmente a designação de Cairo Mecânico.", "Este material, dependendo da altura e densidade pode ser aconselhado para tráfego ligeiro ou intenso, havendo disponíveis as alturas de 17mm e de 23mm."],
//     features: ["Tráfego ligeiro (Cairo 17mm doméstico), Tráfego Intenso (Cairo 23mm Doméstico e 17mm Comercial)", "Alturas de 17mm e 23mm", "Peso aproximadamente 6,5Kg/m2", "Uso em Ambiente Interior e Exterior Coberto", "Aconselha-se limpeza com regularidade através de aspiração"],
//     customization: ["Os tapetes de Cairo com PVC não são personalizados devido às fibras do próprio material que se vão soltando com o tempo, fazendo com que a personalização apresente pouca durabilidade."],
//     segmento: "tapetes-entrada",
//     setor: "casas",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 2.00mt , A x 24mm",
//     colors: [],
//     price: 93.48,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "Cairo"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 7,
//     title: "Tapete de entrada",
//     type: "Cairo",
//     category: "Interior",
//     description: ["O Cairo é um tapete bastante utilizado em entradas, constituído 100% por fibra de côco natural, cujo material que forma a base é PVC. Apresenta actualmente a designação de Cairo Mecânico.", "Este material, dependendo da altura e densidade pode ser aconselhado para tráfego ligeiro ou intenso, havendo disponíveis as alturas de 17mm e de 23mm."],
//     features: ["Tráfego ligeiro (Cairo 17mm doméstico), Tráfego Intenso (Cairo 23mm Doméstico e 17mm Comercial)", "Alturas de 17mm e 23mm", "Peso aproximadamente 6,5Kg/m2", "Uso em Ambiente Interior e Exterior Coberto", "Aconselha-se limpeza com regularidade através de aspiração"],
//     customization: ["Os tapetes de Cairo com PVC não são personalizados devido às fibras do próprio material que se vão soltando com o tempo, fazendo com que a personalização apresente pouca durabilidade."],
//     segmento: "tapetes-entrada",
//     setor: "casas",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 1.00mt , A x 17mm",
//     colors: [],
//     price: 110.70,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "Cairo"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 8,
//     title: "Tapete de entrada",
//     type: "BT200",
//     category: "Interior | Exterior",
//     description: [
//       "O BT INDOOR é feito de fibra da marca ECONYL® de alta qualidade e durabilidade e é caracterizado pela alta absorção de sujidade e humidade. Graças à sua capacidade de impressão individual, o BT INDOOR também tem um excelente efeito publicitário. O processo de fabrico ECONYL® é amigo do ambiente utilizando os resíduos de nylon, como as redes de pesca inutilizáveis por exemplo, para transformação em novos fios. Dos resíduos obtém-se um fio 100% regenerado que possui as mesmas características do nylon proveniente de novas matérias-primas.",
//     ],
//     features: ["Tráfego Moderado", "Uso Ambiente Interior", "Peso: 2,7Kg/m2", "Altura: 9-10mm", "Base de Borracha", "Fibras de Nylon Recicladas", "Absorção de Água: 3-4L/m2", "Lavável até 60ºC", "Reacção ao Fogo: Cfl-s1", "Medida Máxima: 2.00 x 5.00 m", "Todo o tapete é acompanhado por uma orla de borracha", "Possibilidade de Personalização através de Impressão"],
//     customization: ["No caso de personalização do BT Indoor é executada uma impressão de cores desde a raíz até à ponta final da fibra. Não sendo uma personalização superficial, a personalização terá uma grande durabilidade. Tendo em conta esta forma de personalização, as cores disponíveis para a mesma são de uma grande variedade.", "Para encomendas de tapetes personalizados por favor enviar e-mail para comercial@fofal.pt"],
//     segmento: "tapetes-entrada",
//     setor: "casas",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 2.00mt , A x 10mm",
//     colors: [],
//     price: 295.00,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "BT 200"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 9,
//     title: "Tapete de entrada",
//     type: "BT INDOOR",
//     category: "Interior | Exterior",
//     description: [
//       "A referência BT200 é uma excelente opção se procura um tapete personalizado para uma zona de tráfego mais elevada. Na sua composição tem uma combinação de fibras mais suaves com fibras mais rígidas, efectuando assim a secagem e raspagem do calçado.", 
//       "Disponível em 45 cores brilhantes como padrão. Graças à inovadora tecnologia Chromojet, todas as cores Pantone ou cores especiais misturadas personalizadas podem ser criadas. Adequado para zonas com tráfego mais exigente e intensivo."
//     ],
//     features: [
//       "Tráfego Intenso", "Uso Ambiente Interior", "Peso: 3,4Kg/m2", "Altura: Aprox. 10mm", "Base de Borracha", "Fibras de Poliamida 6.6", "Lavável até 40ºC (Não usar hidrocarboneto clorado)", "Reacção ao Fogo: Bfl-s1", "Medida Máxima: 2.00 x 7.50m", "Todo o tapete é acompanhado por uma orla de borracha", "Possibilidade de Personalização através de Impressão"],
//     customization: ["No caso de personalização do BT 200 é executada uma impressão de cores desde a raíz até à ponta final da fibra. Não sendo uma personalização superficial, a personalização terá uma grande durabilidade. Tendo em conta esta forma de personalização, as cores disponíveis para a mesma são de uma grande variedade", "Para encomendas de tapetes personalizados por favor enviar e-mail para comercial@fofal.pt"],
//     segmento: "tapetes-entrada",
//     setor: "casas",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 2.00mt , A x 9mm",
//     colors: [],
//     price: 243.54,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "BT INDOOR (9mm)"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 10,
//     title: "Tapete de entrada",
//     type: "BT INDOOR",
//     category: "Interior | Exterior",
//     description: [
//       "O BT INDOOR é feito de fibra da marca ECONYL® de alta qualidade e durabilidade e é caracterizado pela alta absorção de sujidade e humidade. Graças à sua capacidade de impressão individual, o BT INDOOR também tem um excelente efeito publicitário. O processo de fabrico ECONYL® é amigo do ambiente utilizando os resíduos de nylon, como as redes de pesca inutilizáveis por exemplo, para transformação em novos fios. Dos resíduos obtém-se um fio 100% regenerado que possui as mesmas características do nylon proveniente de novas matérias-primas.",
//     ],
//     features: ["Tráfego Moderado", "Uso Ambiente Interior", "Peso: 2,7Kg/m2", "Altura: 9-10mm", "Base de Borracha", "Fibras de Nylon Recicladas", "Absorção de Água: 3-4L/m2", "Lavável até 60ºC", "Reacção ao Fogo: Cfl-s1", "Medida Máxima: 2.00 x 5.00 m", "Todo o tapete é acompanhado por uma orla de borracha", "Possibilidade de Personalização através de Impressão"],
//     customization: ["No caso de personalização do BT Indoor é executada uma impressão de cores desde a raíz até à ponta final da fibra. Não sendo uma personalização superficial, a personalização terá uma grande durabilidade. Tendo em conta esta forma de personalização, as cores disponíveis para a mesma são de uma grande variedade.", "Para encomendas de tapetes personalizados por favor enviar e-mail para comercial@fofal.pt"],
//     segmento: "tapetes-entrada",
//     setor: "casas",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "L x 0.85mt ou L x 1.15mt ou L x 1.50mt, A x 9mm",
//     colors: [],
//     price: 201.73,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "BT INDOOR (9mm)"
//     },
//     isSoldPerSquareMeter: true,
//   },
//   {
//     id: 11,
//     title: "Tapete de entrada",
//     type: "Alumínio",
//     category: "Interior | Exterior",
//     description: ["Os tapetes de Alumínio são enroláveis e fabricados à medida. O conjunto é conectado através de peças de junção em PVC que mantém toda a estrutura estável e fixa, bem como um afastamento constante entre perfis. Este material pode ser utilizado no interior e exterior dependendo do tipo de conjugação pela qual optar para a barras de alumínio. O alumínio, dependendo do tipo de conjugação que se pretende apresenta também alturas diferentes.", "Dispomos ainda da opção de alumínios insonorizados e/ou anodizados para um maior conforto e durabilidade.", "Para adquirir este produto deve entrar em contacto com comercial@fofal.pt."],
//     features: ["Tráfego Intenso",
//       "Tapetes de Utilização Mista (Interior e Exterior)",
//       "A limpeza deve ser efetuada regularmente – aspirar e utilizar água com detergente, para limpeza mais profunda. As peças de junção em PVC permitem que o tapete possa ser enrolado sobre si mesmo para maior comodidade de limpeza da face inferior do tapete e do pavimento onde este está aplicado", "Opções Disponíveis a Colocar nas Barras de Alumínio: PVC, Alcatifa e Escovas"],
//     customization: ["Os tapetes de Alumínio podem ser personalizados, sendo a sua personalização feita ou em Barra de Inox ou em todo o tapete caso apresente Alcatifa na sua conjugação. Para encomendas de tapetes personalizados por favor enviar e-mail para comercial@fofal.pt."],
//     segmento: "tapetes-entrada",
//     setor: "casas",
//     size: "Produto vendido a metro quadrado.",
//     dimensions: "Sob consulta",
//     colors: [],
//     price: 0,
//     images: [
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//       'https://dummyjson.com/image/300x200',
//     ],
//     isNew: true,
//     composicao: {
//       material: "Alumínio"
//     },
//     isSoldPerSquareMeter: true,
//   },
// ];

export const tapetesMedidaData = [
  {
    "Marcas": [
      {
        "nome": "Renault",
        "modelos": ["Clio", "Megane", "Twingo", "Captur", "Scenic"]
      },
      {
        "nome": "Peugeot",
        "modelos": ["205", "208", "308", "3008", "5008"]
      },
      {
        "nome": "Volkswagen",
        "modelos": ["Golf", "Polo", "Passat", "Tiguan", "T-Roc"]
      },
      {
        "nome": "BMW",
        "modelos": ["Série 1", "Série 3", "Série 5", "X1", "X3"]
      },
      {
        "nome": "Mercedes-Benz",
        "modelos": ["Classe A", "Classe C", "Classe E", "GLA", "GLC"]
      },
      {
        "nome": "Toyota",
        "modelos": ["Corolla", "Yaris", "Auris", "C-HR", "RAV4"]
      }
    ],
    "Anos": [
      1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
      1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
      2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
      2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
      2020, 2021, 2022, 2023, 2024, 2025
    ]
  }
]