import React, { useState, useEffect } from 'react';
import {
  Mountain,
  Map as MapIcon,
  Compass,
  Users,
  ShieldCheck,
  ArrowRight,
  Download,
  Instagram,
  Youtube,
  MessageCircle,
  Menu,
  X,
  MapPin,
  Calendar,
  CheckCircle2,
  Navigation,
  Smartphone,
  Store,
  Utensils,
  Hotel,
  Camera,
  Music,
  Church,
  TreePine
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState(null);
  const [activeCity, setActiveCity] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const regions = [
    { id: 'quadrilatero', name: 'Ouro Branco & Gandarela', desc: 'O início da jornada ao sul, onde o ferro e o verde se encontram.', img: 'https://images.unsplash.com/photo-1590532938153-f38b0f1648a8?auto=format&fit=crop&q=80&w=600' },
    { id: 'cipo', name: 'Serra do Cipó', desc: 'O jardim do Brasil. Solo pedregoso e as maiores cachoeiras de Minas.', img: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=600' },
    { id: 'diamantina', name: 'Diamantina & Serro', desc: 'História colonial esculpida em quartzo e cultura viva.', img: 'https://images.unsplash.com/photo-1582299532506-69a486576856?auto=format&fit=crop&q=80&w=600' },
    { id: 'graomogol', name: 'Grão Mogol & Itacambira', desc: 'O sertão das cordilheiras. Paisagens rústicas e isolamento total.', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600' }
  ];

  const northCities = [
    {
      id: 'montesclaros',
      name: 'Montes Claros',
      subtitle: 'Portal do Norte de Minas',
      img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600',
      attractions: ['Parque Municipal Guimarães Rosa', 'Lapa Grande', 'Mercado Municipal'],
      commerce: ['Restaurante Dona Lucinha', 'Hotel Ibituruna', 'Artesanato Regional'],
      events: [
        { date: '15 Fev', name: 'Festival de Inverno' },
        { date: '20 Mar', name: 'Feira de Artesanato' }
      ]
    },
    {
      id: 'diamantina',
      name: 'Diamantina',
      subtitle: 'Patrimônio da Humanidade UNESCO',
      img: 'https://images.unsplash.com/photo-1582299532506-69a486576856?auto=format&fit=crop&q=80&w=600',
      attractions: ['Centro Histórico', 'Casa de Juscelino', 'Caminho dos Escravos'],
      commerce: ['Pousada do Garimpo', 'Restaurante Apocalipse', 'Loja de Cristais'],
      events: [
        { date: '10 Mar', name: 'Vesperata' },
        { date: '05 Abr', name: 'Festival de Música' }
      ]
    },
    {
      id: 'janauba',
      name: 'Janaúba',
      subtitle: 'Terra da Jabuticaba',
      img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600',
      attractions: ['Fazendas Históricas', 'Cachoeira do Riachão', 'Praça da Matriz'],
      commerce: ['Restaurante Sabor do Cerrado', 'Hotel Janaúba', 'Feira Livre'],
      events: [
        { date: '25 Fev', name: 'Festa da Jabuticaba' },
        { date: '12 Abr', name: 'Rodeio Regional' }
      ]
    },
    {
      id: 'itacambira',
      name: 'Itacambira',
      subtitle: 'Berço das Águas',
      img: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=600',
      attractions: ['Cachoeiras', 'Trilhas Ecológicas', 'Mirante do Cruzeiro'],
      commerce: ['Pousada das Cachoeiras', 'Restaurante Mineiro', 'Artesanato Local'],
      events: [
        { date: '18 Mar', name: 'Encontro de Trilheiros' },
        { date: '22 Abr', name: 'Festa do Padroeiro' }
      ]
    },
    {
      id: 'botumirim',
      name: 'Botumirim',
      subtitle: 'Natureza Preservada',
      img: 'https://images.unsplash.com/photo-1527489377706-5bf97e608852?auto=format&fit=crop&q=80&w=600',
      attractions: ['Parque Estadual', 'Cachoeira do Lajeado', 'Grutas'],
      commerce: ['Camping Ecológico', 'Bar e Restaurante Central', 'Guias Locais'],
      events: [
        { date: '08 Mar', name: 'Caminhada Ecológica' },
        { date: '30 Abr', name: 'Festival de Ecoturismo' }
      ]
    },
    {
      id: 'graomogol',
      name: 'Grão Mogol',
      subtitle: 'Capital do Cristal',
      img: 'https://images.unsplash.com/photo-1590532938153-f38b0f1648a8?auto=format&fit=crop&q=80&w=600',
      attractions: ['Cachoeira do Itacambiruçu', 'Minas de Cristal', 'Trilha do Pico'],
      commerce: ['Pousada Sempre Viva', 'Restaurante Sabor da Serra', 'Loja de Cristais'],
      events: [
        { date: '14 Mar', name: 'Feira de Cristais' },
        { date: '28 Abr', name: 'Festival das Sempre-Vivas' }
      ]
    }
  ];

  const expeditions = [
    {
      title: "Travessia Lapinha-Tabuleiro",
      tag: "O Clássico",
      level: "Difícil",
      duration: "3 dias",
      img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=600",
      desc: "A travessia mais icônica do Espinhaço, culminando na maior queda d'água de MG."
    },
    {
      title: "Rota do Norte de Minas",
      tag: "Cultura & Natureza",
      level: "Moderado",
      duration: "7 dias",
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600",
      desc: "Circuito completo pelas 6 cidades: Montes Claros, Diamantina, Janaúba, Itacambira, Botumirim e Grão Mogol."
    },
    {
      title: "Caminhos de Diamantina",
      tag: "Patrimônio UNESCO",
      level: "Fácil",
      duration: "2 dias",
      img: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?auto=format&fit=crop&q=80&w=600",
      desc: "Caminhadas leves por trilhas de garimpo e banhos em águas cristalinas."
    }
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-[#FDFCF8]">

      {/* Header */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 text-white'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <Mountain className={`w-8 h-8 ${scrolled ? 'text-[#1B3022]' : 'text-white'}`} />
            <span className="font-bold text-xl tracking-tighter uppercase">Cordilheira do Espinhaço</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#projeto" className="hover:text-[#E07A5F] transition">O Projeto</a>
            <a href="#rota-norte" className="hover:text-[#E07A5F] transition">Rota do Norte</a>
            <a href="#agenda" className="hover:text-[#E07A5F] transition">Agenda</a>
            <a href="#app" className="hover:text-[#E07A5F] transition">App</a>
            <a href="#patrocinio" className="hover:text-[#E07A5F] transition">Seja Parceiro</a>
            <button className="bg-[#E07A5F] text-white px-6 py-2 rounded-full hover:bg-[#c96a51] transition shadow-lg">
              Agendar Aventura
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white text-slate-800 flex flex-col p-6 gap-4 shadow-xl">
            <a href="#projeto" onClick={() => setIsMenuOpen(false)}>O Projeto</a>
            <a href="#rota-norte" onClick={() => setIsMenuOpen(false)}>Rota do Norte</a>
            <a href="#agenda" onClick={() => setIsMenuOpen(false)}>Agenda</a>
            <a href="#app" onClick={() => setIsMenuOpen(false)}>App</a>
            <a href="#patrocinio" onClick={() => setIsMenuOpen(false)}>Seja Parceiro</a>
            <button className="bg-[#E07A5F] text-white px-6 py-3 rounded-md">Agendar Aventura</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover brightness-50"
            alt="Serra do Espinhaço landscape"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            A Cordilheira do Brasil: Descubra o Norte de Minas Gerais.
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-slate-100 font-light">
            Rota completa por 6 cidades históricas. Trekking, Cultura e História na Reserva da Biosfera da UNESCO.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-[#E07A5F] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#c96a51] transition shadow-2xl flex items-center justify-center gap-2">
              Explorar Rota do Norte <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition">
              Baixar App de Navegação
            </button>
          </div>
        </div>
      </section>

      {/* Rota do Norte de Minas - 6 Cidades */}
      <section id="rota-norte" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#E07A5F] font-bold tracking-widest uppercase text-sm mb-4 block">Circuito Completo</span>
            <h2 className="text-4xl font-bold text-[#1B3022] mb-6">Rota das 6 Cidades do Norte de Minas</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Um roteiro integrado conectando história, natureza e cultura. De Montes Claros a Grão Mogol, cada cidade revela um pedaço único do Espinhaço.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {northCities.map((city, idx) => (
              <div
                key={city.id}
                onMouseEnter={() => setActiveCity(city)}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 transition-all cursor-pointer ${activeCity?.id === city.id ? 'border-[#E07A5F] scale-105' : 'border-slate-100'}`}
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={city.img} alt={city.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-[#E07A5F] text-white px-3 py-1 rounded-full text-xs font-bold">
                    Cidade {idx + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1B3022] mb-1">{city.name}</h3>
                  <p className="text-sm text-[#E07A5F] mb-4 font-medium">{city.subtitle}</p>

                  <div className="mb-4">
                    <h4 className="font-bold text-sm text-slate-700 mb-2 flex items-center gap-2">
                      <Camera className="w-4 h-4" /> O que Encontrar:
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {city.attractions.slice(0, 3).map((attr, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-[#E07A5F] mt-1 flex-shrink-0" />
                          <span>{attr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-sm text-slate-700 mb-2 flex items-center gap-2">
                      <Store className="w-4 h-4" /> Parceiros Locais:
                    </h4>
                    <ul className="text-xs text-slate-500 space-y-1">
                      {city.commerce.map((com, i) => (
                        <li key={i}>• {com}</li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-[#1B3022] text-white py-2 rounded-lg text-sm font-bold hover:bg-[#2c4d36] transition">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#F4F1DE] rounded-3xl p-10 text-center">
            <Navigation className="w-12 h-12 text-[#E07A5F] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#1B3022] mb-4">Planeje sua Rota Completa</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Nosso app de navegação conecta as 6 cidades com rotas otimizadas, pontos de parada estratégicos e informações em tempo real sobre eventos e comércio local.
            </p>
            <button className="bg-[#1B3022] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-[#2c4d36] transition">
              <Smartphone className="w-5 h-5" /> Baixar App Gratuito
            </button>
          </div>
        </div>
      </section>

      {/* Agenda de Eventos */}
      <section id="agenda" className="py-24 bg-[#1B3022] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Agenda de Eventos 2024</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">Festivais, feiras e celebrações nas 6 cidades do Norte de Minas. Planeje sua visita e participe da cultura local.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {northCities.map((city) => (
              <div key={city.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#E07A5F]" />
                  {city.name}
                </h3>
                <p className="text-sm text-slate-400 mb-4">{city.subtitle}</p>

                <div className="space-y-3">
                  {city.events.map((event, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg">
                      <div className="bg-[#E07A5F] px-3 py-2 rounded-lg text-center min-w-[60px]">
                        <div className="text-xs font-bold">{event.date.split(' ')[1]}</div>
                        <div className="text-lg font-black">{event.date.split(' ')[0]}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm">{event.name}</h4>
                        <p className="text-xs text-slate-400">Evento cultural local</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-[#E07A5F] text-white px-8 py-4 rounded-full font-bold hover:bg-[#c96a51] transition">
              Ver Calendário Completo 2024
            </button>
          </div>
        </div>
      </section>

      {/* App de Rota */}
      <section id="app" className="py-24 bg-[#F4F1DE]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-[#E07A5F] font-bold tracking-widest uppercase text-sm mb-4 block">Tecnologia & Aventura</span>
              <h2 className="text-4xl font-bold text-[#1B3022] mb-6">App de Navegação Cordilheira do Espinhaço</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Navegue com segurança pelas rotas do Norte de Minas. GPS offline, pontos de interesse, parceiros comerciais e agenda de eventos integrada.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Navigation className="w-6 h-6 text-[#E07A5F]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Rotas Otimizadas</h4>
                    <p className="text-slate-600">Conecte as 6 cidades com o melhor trajeto, incluindo paradas estratégicas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <MapPin className="w-6 h-6 text-[#E07A5F]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Pontos de Interesse</h4>
                    <p className="text-slate-600">Cachoeiras, mirantes, restaurantes, hotéis e comércio local mapeados.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Calendar className="w-6 h-6 text-[#E07A5F]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Agenda Integrada</h4>
                    <p className="text-slate-600">Eventos culturais e festivais sincronizados com sua rota.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="bg-[#1B3022] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#2c4d36] transition">
                  <Download className="w-5 h-5" /> Download iOS
                </button>
                <button className="bg-[#1B3022] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#2c4d36] transition">
                  <Download className="w-5 h-5" /> Download Android
                </button>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-3xl shadow-2xl">
                <div className="bg-slate-100 rounded-2xl h-[500px] flex items-center justify-center">
                  <div className="text-center text-slate-400">
                    <Smartphone className="w-24 h-24 mx-auto mb-4" />
                    <p className="text-lg font-medium">Preview do App</p>
                    <p className="text-sm">Interface de navegação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expedições */}
      <section id="expedicoes" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#1B3022]">Nossas Expedições</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Roteiros pensados para quem busca o máximo de conexão com a natureza, respeitando os limites do corpo e do meio ambiente.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expeditions.map((exp, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden group shadow-xl border border-slate-100">
                <div className="h-64 overflow-hidden relative">
                  <img src={exp.img} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute top-4 left-4 bg-[#E07A5F] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                    {exp.tag}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1 uppercase tracking-widest">
                      <Compass className="w-3 h-3" /> {exp.level}
                    </span>
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1 uppercase tracking-widest">
                      <Calendar className="w-3 h-3" /> {exp.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#1B3022]">{exp.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm">{exp.desc}</p>
                  <button className="w-full border-2 border-[#1B3022] text-[#1B3022] py-3 rounded-lg font-bold hover:bg-[#1B3022] hover:text-white transition">
                    Ver Roteiro Detalhado
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Section - Patrocinadores */}
      <section id="patrocinio" className="py-24 bg-[#F4F1DE]">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-10 lg:p-20 overflow-hidden relative shadow-xl">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#1B3022]/5 rounded-full blur-3xl" />

            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-[#1B3022] mb-6">Associe sua marca à grandeza do Espinhaço.</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-[#F4F1DE] p-3 rounded-xl shadow-sm h-fit">
                      <Users className="text-[#E07A5F]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Visibilidade</h4>
                      <p className="text-slate-600">Sua marca presente nos principais destinos de ecoturismo do Brasil e em nossa rede de 50k+ aventureiros.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-[#F4F1DE] p-3 rounded-xl shadow-sm h-fit">
                      <ShieldCheck className="text-[#E07A5F]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">ESG & Impacto Positivo</h4>
                      <p className="text-slate-600">Apoie diretamente a conservação da Reserva da Biosfera da UNESCO e projetos de educação ambiental locais.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-[#F4F1DE] p-3 rounded-xl shadow-sm h-fit">
                      <CheckCircle2 className="text-[#E07A5F]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Engajamento B2B</h4>
                      <p className="text-slate-600">Conecte sua empresa a um público apaixonado por saúde, superação e sustentabilidade.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <button className="bg-[#1B3022] text-white px-8 py-4 rounded-full font-bold shadow-xl flex items-center gap-2 hover:bg-[#2c4d36] transition">
                    Quero ser Parceiro
                  </button>
                  <button className="bg-transparent border-2 border-[#1B3022] text-[#1B3022] px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#1B3022] hover:text-white transition">
                    <Download className="w-5 h-5" /> Baixar Mídia Kit
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 text-center">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Parceiros Estratégicos</p>
                <div className="grid grid-cols-2 gap-8 opacity-40 grayscale hover:grayscale-0 transition duration-500">
                  <div className="flex items-center justify-center p-4 bg-[#F4F1DE] rounded-xl shadow-sm">
                    <span className="font-black text-2xl italic text-slate-400">IEF MG</span>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-[#F4F1DE] rounded-xl shadow-sm">
                    <span className="font-black text-2xl italic text-slate-400">UNESCO</span>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-[#F4F1DE] rounded-xl shadow-sm">
                    <span className="font-black text-2xl italic text-slate-400">SECULT</span>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-[#F4F1DE] rounded-xl shadow-sm">
                    <span className="font-black text-2xl italic text-slate-400">BIOBR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-[#1B3022] text-white pt-20 pb-10">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Mountain className="w-8 h-8 text-[#E07A5F]" />
              <span className="font-bold text-xl uppercase tracking-tighter">Cordilheira</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">Explorando e protegendo a única cordilheira do Brasil. Operadora oficial da Reserva da Biosfera da UNESCO.</p>
            <div className="flex gap-4">
              <Instagram className="w-6 h-6 hover:text-[#E07A5F] cursor-pointer transition" />
              <Youtube className="w-6 h-6 hover:text-[#E07A5F] cursor-pointer transition" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Navegação</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#expedicoes" className="hover:text-white transition">Expedições</a></li>
              <li><a href="#rota-norte" className="hover:text-white transition">Rota do Norte</a></li>
              <li><a href="#agenda" className="hover:text-white transition">Agenda 2024</a></li>
              <li><a href="#app" className="hover:text-white transition">App de Navegação</a></li>
              <li><a href="#patrocinio" className="hover:text-white transition">Seja Parceiro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Receba dicas exclusivas de trekking e nosso calendário oficial.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Seu e-mail" className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#E07A5F]" />
              <button className="bg-[#E07A5F] px-4 py-2 rounded-lg font-bold">Ok</button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Certificações</h4>
            <div className="flex flex-wrap gap-4 opacity-70">
              <div className="bg-white/5 p-2 rounded flex flex-col items-center">
                <span className="text-[10px] font-bold">CADASTUR</span>
                <span className="text-[8px]">Certificado</span>
              </div>
              <div className="bg-white/5 p-2 rounded flex flex-col items-center">
                <span className="text-[10px] font-bold">ABETA</span>
                <span className="text-[8px]">Segurança</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="bg-white p-2 rounded-lg inline-block">
                <div className="w-24 h-24 bg-slate-200 flex items-center justify-center text-slate-800 text-[10px] font-bold text-center">
                  QR CODE<br />WHATSAPP
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center text-slate-500 text-xs">
          <p>© 2024 Cordilheira do Espinhaço Expedições. CNPJ: 00.000.000/0001-00. Made with focus on Nature.</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5538998269295"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition z-[60]"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
};

export default App;
