export const links = {
  appBarber: "https://sites.appbarber.com.br/demo-navalha-prime",
  whatsappBarbearia: "https://wa.me/5519999900000?text=Olá,%20quero%20agendar%20meu%20horário.",
  whatsappOlegarioTech: "https://wa.me/5519974059590?text=Olá,%20Alexandre.%20Quero%20uma%20experiência%20premium%20como%20a%20demo%20de%20barbearia.",
  instagram: "#",
  mapsCentro: "https://www.google.com/maps/search/?api=1&query=Valinhos%20SP",
  mapsAurora: "https://www.google.com/maps/search/?api=1&query=Valinhos%20SP"
};

export const services = [
  { category: "Mais pedidos", title: "Corte Masculino Premium", duration: "35 min", price: "R$ 65", image: "assets/images/services/corte-premium.png", description: "Corte alinhado, acabamento limpo e finalização com presença.", cta: "Agendar corte" },
  { category: "Mais pedidos", title: "Barba com Toalha Quente", duration: "35 min", price: "R$ 65", image: "assets/images/services/barba-premium.png", description: "Barba desenhada, navalha precisa e ritual de cuidado masculino.", cta: "Agendar barba" },
  { category: "Combo premium", title: "Cabelo + Barba", duration: "60 min", price: "R$ 130", image: "assets/images/services/combo-premium.png", description: "Visual completo para sair da cadeira pronto para dominar o dia.", cta: "Agendar combo" },
  { category: "Recorrência", title: "Plano Sempre Alinhado", duration: "Mensal", price: "A partir de R$ 120/mês", image: "assets/images/services/assinatura-premium.png", description: "Assinatura para manter agenda, visual e presença sempre em dia.", cta: "Ver planos" }
];

export const barbers = [
  { name: "Rafael Torres", specialty: "Degradê navalhado e corte moderno", image: "assets/images/barbers/barber-01.png", tags: ["Degradê", "Freestyle", "Acabamento"], highlight: "Mais procurado" },
  { name: "Bruno Almeida", specialty: "Barba premium e toalha quente", image: "assets/images/barbers/barber-02.png", tags: ["Barba", "Navalha", "Combo"], highlight: "Barba clássica" },
  { name: "Diego Martins", specialty: "Corte social e executivo", image: "assets/images/barbers/barber-03.png", tags: ["Executivo", "Social", "Agenda rápida"], highlight: "Executivo" },
  { name: "Caio Nogueira", specialty: "Infantil, moderno e desenho", image: "assets/images/barbers/barber-04.png", tags: ["Kids", "Desenho", "Moderno"], highlight: "Família" },
  { name: "Fernanda Silva", specialty: "Corte feminino e técnica de elite", image: "assets/images/barbers/barber-female.png", tags: ["Técnica", "Precisão", "Sofisticação"], highlight: "Elite" }
];

export const plans = [
  { name: "Essencial", price: "R$ 55/mês", description: "1 corte por mês para manter o visual sempre controlado.", features: ["1 corte mensal", "Agenda facilitada", "Lembrete no WhatsApp"] },
  { name: "Barba Alinhada", price: "R$ 150/mês", description: "Para quem cuida da barba como assinatura de presença.", features: ["Barba recorrente", "Toalha quente", "Prioridade na agenda"] },
  { name: "Prime Combo", price: "R$ 210/mês", description: "Cabelo e barba com recorrência para visual sempre premium.", features: ["Corte + barba", "Benefício recorrente", "Atendimento premium"], featured: true }
];

export const testimonials = [
  { name: "Cliente demo", text: "Agendei em menos de um minuto. Escolhi o barbeiro, o serviço e o horário sem precisar ficar perguntando no WhatsApp." },
  { name: "Cliente demo", text: "O site passa outra sensação. Antes de chegar na barbearia, eu já senti que era uma experiência premium." },
  { name: "Cliente demo", text: "A assinatura resolveu minha rotina. Todo mês eu já sei quando vou cortar e manter o visual alinhado." }
];

export const units = [
  { name: "Navalha Prime — Centro", address: "Rua Barão do Café, 188 — Centro — Valinhos/SP", hours: "Seg. a sex.: 09h às 20h • Sáb.: 08h às 16h", map: links.mapsCentro },
  { name: "Navalha Prime — Jardim Aurora", address: "Av. das Palmeiras, 742 — Jardim Aurora — Valinhos/SP", hours: "Seg. a sex.: 10h às 21h • Sáb.: 08h às 17h", map: links.mapsAurora }
];
