export interface Product {
  id: string;
  name: string;
  price: number;
  portions: string; // Cantidad de porciones (ej: "Rinde 5 porciones")
  ingredients: string[];
  benefits: string[];
  colorTheme: string;
  image: string;
  whatsappMsg: string;
  featured?: boolean | string; // Destaca el producto (true = "Destacado", o un string como "¡Nuevo!")
}

export const products: Product[] = [
     {
    id: "Mix-jugo-verde",
    name: "Mix de Jugo Verde",
    price: 100,
    portions: "5 porciones",
    ingredients: ["Espinaca", "Apio", "Nopal", "Pepino", "Piña"],
    benefits: [
      "Depura y desintoxica el organismo de forma natural",
      "Aporta gran saciedad y ayuda a regular el apetito",
      "Alcaliniza el cuerpo y estimula un metabolismo activo",
      "Mejora significativamente la digestión y desinflama",
      "Excelente fuente de hierro, fibra y antioxidantes naturales"
    ],
    colorTheme: "#27AE60",
    image: "/img/kit_jugo_verde.jpeg",
    whatsappMsg: "Hola NaturaBags, me interesa adquirir el Kit de Jugo Verde de 5 porciones por $100.00.",
    featured: true
  },
   {
    id: "Kit-shots-de-bienestar",
    name: "Concentrado desinflamante",
    price: 100,
    portions: "Bolsa de 450 ml",
    ingredients: ["Cúrcuma", "Jengibre", "Naranja", "Zanahoria", "Limón", "Toque de pimienta"],
    benefits: [
      "Refuerza tus defensas",
      "Antiinflamatorio natural",
      "Aporta energía",
      "Favorece la digestión"
    ],
    colorTheme: "#E67A00",
    image: "/img/shots.jpeg",
    whatsappMsg: "Hola NaturaBags, me interesa adquirir el concentrado por $100.00.",
    featured: true
  },
  {
    id: "Mix-nocturno",
    name: "Mix Quema Grasa Nocturno",
    price: 130,
    portions: "5 porciones",
    ingredients: ["Papaya", "Manzana", "Plátano", "Avena"],
    benefits: [
      "Ayuda a quemar grasa durante la noche",
      "Mejora la digestión and reduce la inflamación",
      "Aporta saciedad y controla los antojos nocturnos",
      "Favorece un sueño reparador y profundo"
    ],
    colorTheme: "#7B4217",
    image: "/img/kit_nocturno.jpeg",
    whatsappMsg: "Hola NaturaBags, me interesa adquirir el Kit Nocturno de 5 porciones por $130.00.",
    featured: true
  },
  {
    id: "Kit-detox-higado",
    name: "Kit de Detox de Hígado",
    price: 130,
    portions: "5 porciones",
    ingredients: ["Espinaca", "Apio", "Perejil", "Zanahoria", "Papaya", "Jengibre", "Curcuma", "Betabel", "Avena"],
    benefits: [
      "Ayuda a eliminar toxinas y sustancias dañinas",
      "Protege y regenera la función hepática",
      "Mejora tu vitalidad y energía",
      "Alivia la inflamación y favorece la digestión"
    ],
    colorTheme: "#991d01",
    image: "/img/kit_higado.jpeg",
    whatsappMsg: "Hola NaturaBags, me interesa adquirir el Kit de Detox de Hígado por $130.00.",
    featured: "¡Nuevo!"
  },
  {
    id: "Mix-jugo-valencia",
    name: "Mix Jugo Valencia",
    price: 200,
    portions: "5 porciones",
    ingredients: ["Arándano", "Jícama", "Piña", "Espinaca", "Cúrcuma", "Jengibre", "Betabel", "Limón", "Toronja"],
    benefits: [
      "Acelera el metabolismo y ayuda a quemar grasa",
      "Poderoso antioxidante y antiinflamatorio",
      "Mejora la digestión y desintoxica el organismo",
      "Fortalece el sistema inmunológico",
      "Aporta energía y vitalidad"
    ],
    colorTheme: "#A22321",
    image: "/img/kit_jugo_valencia.jpg",
    whatsappMsg: "Hola NaturaBags, me interesa adquirir el Kit Jugo Valencia de 5 porciones por $200.00."
  },
  {
    id: "Mix-hielos-de-oro",
    name: "Mix de Hielos de Oro",
    price: 80,
    portions: "6 hielos",
    ingredients: ["Cúrcuma", "Jengibre", "Naranja", "Limón", "Toque de pimienta"],
    benefits: [
      "Anti-inflamatorios naturales y antioxidantes",
      "Fortalecen el sistema inmune contra infecciones",
      "Aportan energía limpia y vitalidad para tu día"
    ],
    colorTheme: "#D9A232",
    image: "/img/kit_hielos_de_oro.jpeg",
    whatsappMsg: "Hola NaturaBags, me interesa adquirir el Kit de Hielos de Oro por $80.00."
  },
  {
    id: "Mix-inmunovital",
    name: "Mix Inmunovital",
    price: 160,
    portions: "5 porciones",
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
    whatsappMsg: "Hola NaturaBags, me interesa adquirir el Kit Inmunovital de 5 porciones por $160.00."
  },
  {
    id: "Mix-cuerpo-en-calma",
    name: "Mix Cuerpo en Calma",
    price: 200,
    portions: "5 porciones",
    ingredients: ["Papaya", "Manzana", "Plátano", "Avena", "Almendras", "Semillas de cacao", "Linaza", "Chía", "Semillas de girasol"],
    benefits: [
      "Vitaminas B1, B2, B3, A, D, E y K",
      "Proteínas y minerales esenciales de origen vegetal",
      "Magnesio para la relajación muscular y energía",
      "Aporte completo de Omega 3, 6 y 9"
    ],
    colorTheme: "#E91E63",
    image: "/img/kit_cuerpo_en_calma.png",
    whatsappMsg: "Hola NaturaBags, me interesa adquirir el Kit Cuerpo en Calma de 5 porciones por $200.00."
  },
  {
    id: "Mix-colesterol",
    name: "Mix para el Colesterol",
    price: 140,
    portions: "5 porciones",
    ingredients: ["Espinaca", "Pepino", "Zanahoria", "Manzana", "Piña", "Betabel"],
    benefits: [
      "Ayuda a regular los niveles de colesterol en sangre",
      "Promueve una salud cardiovascular óptima y limpia las arterias"
    ],
    colorTheme: "#4CAF50",
    image: "/img/kit_colesterol.png",
    whatsappMsg: "Hola NaturaBags, me interesa adquirir el Kit para el Colesterol por $140.00."
  },
  {
    id: "Mix-balance-tiroides",
    name: "Mix Balance Tiroides",
    price: 180,
    portions: "5 porciones",
    ingredients: ["Apio", "Perejil", "Pepino", "Nopal", "Piña", "Manzana", "Chía", "Linaza", "Semilla de girasol", "Semillas de cacao"],
    benefits: [
      "Apoya la función tiroidea y hormonal",
      "Favorece el metabolismo lento",
      "Reduce la inflamación generalizada",
      "Mejora la digestión y el tránsito intestinal",
      "Aporta energía natural sin cafeína"
    ],
    colorTheme: "#1E5631",
    image: "/img/kit_balance_tiroides.jpeg",
    whatsappMsg: "Hola NaturaBags, me interesa adquirir el Kit Balance Tiroides por $180.00."
  },
  {
    id: "Mix-glow-rojo",
    name: "Mix Glow Rojo",
    price: 140,
    portions: "5 porciones",
    ingredients: ["Betabel", "Zanahoria", "Fresa"],
    benefits: [
      "Gran aporte de antioxidantes y nutrientes esenciales para el día",
      "Favorece el cuidado natural de la piel y mejora la salud visual",
      "Aporta frescura, energía y vitamina C de origen natural",
      "Ayuda a combatir el daño celular y promueve la vitalidad"
    ],
    colorTheme: "#C0392B",
    image: "/img/kit_glow_rojo.jpeg",
    whatsappMsg: "Hola NaturaBags, me interesa adquirir el Kit Glow Rojo por $140.00."
  },
  {
    id: "Mix-diabetes",
    name: "Mix para Diabetes",
    price: 100,
    portions: "5 porciones",
    ingredients: ["Espinaca", "Apio", "Perejil", "Nopal", "Pepino", "Limón", "Jengibre", "Chía"],
    benefits: [
      "Apoya el control de glucosa como parte de una alimentación balanceada",
      "Rico en fibra que ayuda a una absorción más lenta del azúcar",
      "Ingredientes frescos, naturales y sin conservadores",
      "Listo para agregar agua y licuar"
    ],
    colorTheme: "#558B2F",
    image: "/img/mix_diabetes.png",
    whatsappMsg: "Hola NaturaBags, me interesa adquirir el Mix para Diabetes de 5 porciones por $100.00."
  },
  {
    id: "Mix-presion-arterial",
    name: "Mix para la Presión Arterial",
    price: 140,
    portions: "5 porciones",
    ingredients: ["Betabel", "Pepino", "Espinaca", "Apio", "Manzana verde", "Limón", "Perejil", "Cúrcuma"],
    benefits: [
      "Apoya una presión arterial saludable como parte de una alimentación balanceada",
      "Rico en potasio y nitratos naturales que favorecen la circulación",
      "Ayuda a reducir la retención de líquidos",
      "Aporte de antioxidantes que cuidan tu corazón"
    ],
    colorTheme: "#1B5E20",
    image: "/img/presion_arterial.png",
    whatsappMsg: "Hola NaturaBags, me interesa adquirir el Mix para la Presión Arterial de 5 porciones por $140.00."
  },
  {
    id: "Mix-bienestar-circulacion",
    name: "Mix Bienestar y Circulación",
    price: 140,
    portions: "5 porciones",
    ingredients: ["Betabel", "Pepino", "Piña", "Espinaca"],
    benefits: [
      "Favorece una buena circulación gracias a los nitratos naturales del betabel",
      "Aporta hierro y antioxidantes que ayudan a combatir el cansancio",
      "Hidrata y refresca el organismo",
      "Mejora la digestión y reduce la inflamación"
    ],
    colorTheme: "#8E244D",
    image: "/img/bienestarcirculacion.png",
    whatsappMsg: "Hola NaturaBags, me interesa adquirir el Mix Bienestar y Circulación de 5 porciones por $140.00."
  },

];
