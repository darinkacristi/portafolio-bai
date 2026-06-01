export interface Client {
  name: string;
  emoji: string;
  logo?: string;
}

export const clients: Client[] = [
  { name: "Terramore", emoji: "🏢", logo: "public/clients/logo-terramore-variable-blanco.png" },
  { name: "Estudio Aurora", emoji: "🌿", logo: "/clients/estudio-aurora.png" },
  { name: "Marca X", emoji: "💄", logo: "/clients/marca-x.png" },
];
export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  message: string;
  time: string;
  side: "left" | "right";
}

export const testimonials: Testimonial[] = [
  {
    name: "Valentina M.",
    role: "Beauty Brand",
    avatar: "😊",
    side: "left",
    message:
      "Las fotos quedaron increíbles, exactamente lo que necesitábamos para el lanzamiento. Capturó la esencia de la marca a la perfección ✨",
    time: "Ayer, 11:42",
  },
  {
    name: "Rodrigo P.",
    role: "Productora",
    avatar: "🙌",
    side: "right",
    message:
      "El video superó todas nuestras expectativas. Profesional, creativa y con un ojo increíble para los detalles. ¡Volvemos a trabajar juntos sí o sí! 🎬",
    time: "Lunes, 15:08",
  },
  {
    name: "Camila R.",
    role: "Lifestyle Brand",
    avatar: "🌸",
    side: "left",
    message:
      "Trabajar con Bai fue súper fluido. Entendió nuestra visión desde el primer momento y el resultado fue hermoso 💕",
    time: "Domingo, 10:21",
  },
  {
    name: "Tomás G.",
    role: "Inmobiliaria",
    avatar: "🏡",
    side: "right",
    message:
      "Las fotos de las propiedades generaron más consultas en una semana que en el mes anterior. Excelente inversión 🏆",
    time: "Viernes, 09:55",
  },
  {
    name: "Isidora F.",
    role: "Sello Musical",
    avatar: "🎵",
    side: "left",
    message:
      "El videoclip quedó exactamente como lo soñamos. Bai tiene una sensibilidad artística única, muy recomendada 🎶",
    time: "Jueves, 18:33",
  },
];
