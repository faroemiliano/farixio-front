export const chatbotResponses = [
  {
    keywords: ["precio", "costo", "valor"],
    response:
      "Creamos páginas web, sistemas SaaS y soluciones personalizadas. Puedes contactarnos para recibir una propuesta.",
  },
  {
    keywords: ["servicio", "servicios", "hacen", "ofrecen"],
    response:
      "Desarrollamos páginas web, sistemas SaaS, sistemas de reservas, paneles administrativos y automatizaciones.",
  },
  {
    keywords: ["tecnologia", "tecnología", "stack"],
    response: "Trabajamos con React, TypeScript, Python, FastAPI y PostgreSQL.",
  },
  {
    keywords: ["contacto", "whatsapp", "hablar"],
    response: "Puedes contactarnos directamente desde el botón de WhatsApp.",
  },
];

export function getBotResponse(message: string) {
  const text = message.toLowerCase();

  const result = chatbotResponses.find((item) =>
    item.keywords.some((keyword) => text.includes(keyword)),
  );

  return result
    ? result.response
    : "No entendí tu consulta. Puedes preguntar por servicios, precios, tecnologías o contacto.";
}
