export interface Product {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
  benefits: string[];
  colorTheme: string;
  image: string;
  whatsappMsg: string;
}

export const products: Product[] = [
  {
    id: "kit-jugo-verde",
    name: "Kit de Jugo Verde",
    price: 100,
    ingredients: ["Espinaca", "Apio", "Nopal", "Pepino", "Manzana verde", "Piña", "Limón", "Jengibre", "Perejil"],
    benefits: [
      "Espinaca: Rica en fibra y hierro, aporta saciedad",
      "Apio: Diurético natural, ayuda a eliminar toxinas",
      "Nopal: Controla el azúcar en sangre y mejora la digestión",
      "Pepino: Hidratante y bajo en calorías, desinflama",
      "Manzana verde: Aporta fibra pectina, regula el apetito",
      "Piña: Contiene bromelina, enzima que ayuda a quemar grasa",
      "Limón: Alcaliniza el cuerpo y estimula el metabolismo",
      "Jengibre: Acelera el metabolismo y reduce la inflamación",
      "Perejil: Potente diurético y desintoxicante"
    ],
    colorTheme: "#27AE60",
    image: "/img/kit_jugo_verde.png",
    whatsappMsg: "Hola Natura Bags, me interesa adquirir el Kit de Jugo Verde de 5 porciones por $100.00."
  },
  {
    id: "kit-jugo-valencia",
    name: "Kit Jugo Valencia",
    price: 170,
    ingredients: ["Arándano", "Jícama", "Piña", "Espinaca", "Cúrcuma", "Jengibre", "Betabel", "Limón", "Toronja"],
    benefits: [
      "Acelera el metabolismo y ayuda a quemar grasa",
      "Poderoso antioxidante y antiinflamatorio",
      "Mejora la digestión y desintoxica el organismo",
      "Fortalece el sistema inmunológico",
      "Aporta energía y vitalidad"
    ],
    colorTheme: "#A22321",
    image: "/img/kit_jugo_valencia.png",
    whatsappMsg: "Hola Natura Bags, me interesa adquirir el Kit Jugo Valencia de 5 porciones por $170.00."
  },
  {
    id: "kit-nocturno",
    name: "Kit Nocturno",
    price: 130,
    ingredients: ["Papaya", "Manzana", "Plátano", "Avena"],
    benefits: [
      "Ayuda a quemar grasa durante la noche",
      "Mejora la digestión and reduce la inflamación",
      "Aporta saciedad y controla los antojos nocturnos",
      "Favorece un sueño reparador y profundo"
    ],
    colorTheme: "#7B4217",
    image: "/img/kit_nocturno.png",
    whatsappMsg: "Hola Natura Bags, me interesa adquirir el Kit Nocturno de 5 porciones por $130.00."
  },
  {
    id: "kit-hielos-de-oro",
    name: "Kits de Hielos de Oro",
    price: 80,
    ingredients: ["Cúrcuma", "Jengibre", "Naranja", "Limón", "Toque de pimienta"],
    benefits: [
      "Anti-inflamatorios naturales y antioxidantes",
      "Fortalecen el sistema inmune contra infecciones",
      "Aportan energía limpia y vitalidad para tu día"
    ],
    colorTheme: "#D9A232",
    image: "/img/kit_hielos_de_oro.png",
    whatsappMsg: "Hola Natura Bags, me interesa adquirir el Kit de Hielos de Oro por $80.00."
  },
  {
    id: "kit-inmunovital",
    name: "Kit Inmunovital",
    price: 160,
    ingredients: ["Betabel", "Espinaca", "Plátano", "Naranja", "Zanahoria", "Almendras"],
    benefits: [
      "Potencia tus defensas y previene enfermedades",
      "Ideal para personas con bajo peso y anemia",
      "Sumamente nutritivo, rico en vitaminas y minerales",
      "Aumenta tu energía y combate la fatiga",
      "Mejora la circulación y la salud de la piel"
    ],
    colorTheme: "#E67E22",
    image: "/img/kit_inmunovital.png",
    whatsappMsg: "Hola Natura Bags, me interesa adquirir el Kit Inmunovital de 5 porciones por $160.00."
  },
  {
    id: "kit-cuerpo-en-calma",
    name: "Kit Cuerpo en Calma",
    price: 200,
    ingredients: ["Papaya", "Manzana", "Plátano", "Avena", "Almendras", "Semillas de cacao", "Linaza", "Chía", "Semillas de girasol"],
    benefits: [
      "Vitaminas B1, B2, B3, A, D, E y K",
      "Proteínas y minerales esenciales de origen vegetal",
      "Magnesio para la relajación muscular y energía",
      "Aporte completo de Omega 3, 6 y 9"
    ],
    colorTheme: "#E91E63",
    image: "/img/kit_cuerpo_en_calma.png",
    whatsappMsg: "Hola Natura Bags, me interesa adquirir el Kit Cuerpo en Calma de 5 porciones por $200.00."
  },
  {
    id: "kit-colesterol",
    name: "Kit para el Colesterol",
    price: 150,
    ingredients: ["Espinaca", "Pepino", "Zanahoria", "Manzana", "Piña", "Betabel"],
    benefits: [
      "Ayuda a regular los niveles de colesterol en sangre",
      "Promueve una salud cardiovascular óptima y limpia las arterias"
    ],
    colorTheme: "#4CAF50",
    image: "/img/kit_colesterol.png",
    whatsappMsg: "Hola Natura Bags, me interesa adquirir el Kit para el Colesterol por $150.00."
  },
  {
    id: "kit-balance-tiroides",
    name: "Kit Balance Tiroides",
    price: 120,
    ingredients: ["Apio", "Perejil", "Pepino", "Nopal", "Piña", "Manzana", "Chía", "Linaza", "Semilla de girasol", "Semillas de cacao"],
    benefits: [
      "Apoya la función tiroidea y hormonal",
      "Favorece el metabolismo lento",
      "Reduce la inflamación generalizada",
      "Mejora la digestión y el tránsito intestinal",
      "Aporta energía natural sin cafeína"
    ],
    colorTheme: "#1E5631",
    image: "/img/kit_balance_tiroides.png",
    whatsappMsg: "Hola Natura Bags, me interesa adquirir el Kit Balance Tiroides por $120.00."
  },
  {
    id: "kit-glow-rojo",
    name: "Kit Glow Rojo",
    price: 140,
    ingredients: ["Betabel", "Zanahoria", "Fresa"],
    benefits: [
      "Betabel: Rico en antioxidantes y fuente natural de nutrientes",
      "Zanahoria: Fuente de vitamina A, que contribuye al cuidado de la piel y la vista",
      "Fresa: Rica en vitamina C y antioxidantes, aporta frescura y sabor natural"
    ],
    colorTheme: "#C0392B",
    image: "/img/kit_glow_rojo.png",
    whatsappMsg: "Hola Natura Bags, me interesa adquirir el Kit Glow Rojo por $140.00."
  }
];
