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
  CheckCircle2
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Monitora o scroll para mudar o estilo do header
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
      title: "Parque da Lapa Grande",
      tag: "História & Cavernas",
      level: "Moderado",
      duration: "1 dia",
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600",
      desc: "Exploração de grutas e sítios arqueológicos em Montes Claros."
    },
    {
      title: "Caminhos de Diamantina",
      tag: "Cultura & Natureza",
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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#projeto" className="hover:text-[#E07A5F] transition">O Projeto</a>
            <a href="#expedicoes" className="hover:text-[#E07A5F] transition">Expedições</a>
            <a href="#patrocinio" className="hover:text-[#E07A5F] transition">Seja Parceiro</a>
            <a href="#contato" className="hover:text-[#E07A5F] transition">Contato</a>
            <button className="bg-[#E07A5F] text-white px-6 py-2 rounded-full hover:bg-[#c96a51] transition shadow-lg">
              Agendar Aventura
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white text-slate-800 flex flex-col p-6 gap-4 shadow-xl">
            <a href="#projeto" onClick={() => setIsMenuOpen(false)}>O Projeto</a>
            <a href="#expedicoes" onClick={() => setIsMenuOpen(false)}>Expedições</a>
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
            A Cordilheira do Brasil: Descubra a Alma de Minas Gerais.
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-slate-100 font-light">
            Trekking, Cultura e História na única cordilheira do Brasil. Uma imersão profunda na Reserva da Biosfera da UNESCO.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-[#E07A5F] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#c96a51] transition shadow-2xl flex items-center justify-center gap-2">
              Escolha seu Destino <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition">
              Conheça o Projeto
            </button>
          </div>
        </div>
      </section>

      {/* Mapa Interativo */}
      <section id="projeto" className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-[#E07A5F] font-bold tracking-widest uppercase text-sm mb-4 block">Território Sagrado</span>
            <h2 className="text-4xl font-bold text-[#1B3022] mb-6">Do Quadrilátero Ferrífero ao Sertão</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Explore 1.000km de biodiversidade e história através da espinha dorsal do nosso estado. Clique nas regiões para descobrir os segredos de cada maciço.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {regions.map((region) => (
                <div
                  key={region.id}
                  onMouseEnter={() => setActiveRegion(region)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4 ${activeRegion?.id === region.id ? 'border-[#E07A5F] bg-white shadow-md' : 'border-slate-100 bg-slate-50'}`}
                >
                  <MapPin className={`w-6 h-6 ${activeRegion?.id === region.id ? 'text-[#E07A5F]' : 'text-slate-400'}`} />
                  <div>
                    <h4 className="font-bold text-[#1B3022]">{region.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative bg-[#F4F1DE] p-8 rounded-3xl min-h-[500px] flex items-center justify-center shadow-inner overflow-hidden">
            {activeRegion ? (
              <div className="animate-in fade-in zoom-in duration-500 flex flex-col items-center">
                <img src={activeRegion.img} alt={activeRegion.name} className="w-full h-64 object-cover rounded-2xl mb-6 shadow-lg" />
                <h3 className="text-2xl font-bold text-[#1B3022] mb-2">{activeRegion.name}</h3>
                <p className="text-center text-slate-600 px-4">{activeRegion.desc}</p>
              </div>
            ) : (
              <div className="text-center text-slate-400 opacity-60">
                <MapIcon className="w-20 h-20 mx-auto mb-4" />
                <p className="text-xl font-medium">Selecione uma região no mapa ao lado</p>
              </div>
            )}

            {/* Visual stylization of the "Spine" */}
            <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-transparent via-[#1B3022]/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* Expedições */}
      <section id="expedicoes" className="py-24 bg-[#1B3022] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossas Expedições</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">Roteiros pensados para quem busca o máximo de conexão com a natureza, respeitando os limites do corpo e do meio ambiente.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expeditions.map((exp, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden group shadow-xl">
                <div className="h-64 overflow-hidden relative">
                  <img src={exp.img} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute top-4 left-4 bg-[#E07A5F] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {exp.tag}
                  </div>
                </div>
                <div className="p-6 text-slate-800">
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
      <section id="patrocinio" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[#F4F1DE] rounded-[3rem] p-10 lg:p-20 overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#1B3022]/5 rounded-full blur-3xl" />

            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-[#1B3022] mb-6">Associe sua marca à grandeza do Espinhaço.</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                      <Users className="text-[#E07A5F]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Visibilidade</h4>
                      <p className="text-slate-600">Sua marca presente nos principais destinos de ecoturismo do Brasil e em nossa rede de 50k+ aventureiros.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                      <ShieldCheck className="text-[#E07A5F]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">ESG & Impacto Positivo</h4>
                      <p className="text-slate-600">Apoie diretamente a conservação da Reserva da Biosfera da UNESCO e projetos de educação ambiental locais.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
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
                  <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm">
                    <span className="font-black text-2xl italic text-slate-400">IEF MG</span>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm">
                    <span className="font-black text-2xl italic text-slate-400">UNESCO</span>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm">
                    <span className="font-black text-2xl italic text-slate-400">SECULT</span>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm">
                    <span className="font-black text-2xl italic text-slate-400">BIOBR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-[#FDFCF8]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1000" alt="Group of hikers" className="w-full h-full object-cover" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-[#1B3022] mb-6">Mais que uma agência, uma comunidade.</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nossos guias não são apenas condutores, são entusiastas da história mineira e guardiões da montanha. Segurança total, logística impecável e respeito absoluto à cultura local.
              </p>

              {/* Testemunho Fictício */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#E07A5F] italic">
                <p className="text-slate-700 mb-4">"Atravessar o Espinhaço com a equipe foi transformador. O nível de cuidado e o conhecimento sobre a geologia e história local tornam cada passo uma aula."</p>
                <div className="flex items-center gap-3 not-italic">
                  <div className="w-12 h-12 bg-[#E07A5F] rounded-full flex items-center justify-center text-white font-bold">RM</div>
                  <div>
                    <h5 className="font-bold text-[#1B3022]">Ricardo Mendes</h5>
                    <p className="text-sm text-slate-400">Empresário e Trilheiro</p>
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
              <li><a href="#" className="hover:text-white transition">Expedições</a></li>
              <li><a href="#" className="hover:text-white transition">Agenda 2024</a></li>
              <li><a href="#" className="hover:text-white transition">Seja Parceiro</a></li>
              <li><a href="#" className="hover:text-white transition">Trabalhe Conosco</a></li>
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
