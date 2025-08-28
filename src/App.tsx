import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin, Star, ArrowRight, Instagram } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('quienes-somos');
  const [scrollY, setScrollY] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const timelineScrollRef = useRef<HTMLDivElement>(null);

  const productos = [
    { 
      name: 'Decoración vertical', 
      img: '/DECORACIÓN VERTICAL.jpeg',
      description: 'Desde lo alto, el diseño viste y da voz a tu espacio.',
      modalDescription: 'Descubre acabados perfectos en cortinas tradicionales y técnicas: fruncido, triple pliegue, onda perfecta, estores y mucho más para tu proyecto.'
    },
    { 
      name: 'Cojines decorativos', 
      img: '/COJINES.jpg',
      description: 'Detalle acogedor que crean ambientes memorables.',
      modalDescription: 'Encuentra cojines decorativos con infinitos diseños, texturas y acabados para dar personalidad y confort a tus espacios.'
    },
    { 
      name: 'Plaids', 
      img: '/PLAID.jpeg',
      description: 'Añade personalidad y color en cada habitación.',
      modalDescription: 'Texturas, diseños y acabados únicos que elevan el estilo de una cama. Complementos que transforma un espacio.'
    },
    { 
      name: 'Cubre canapés', 
      img: '/3da560a7ea664774f872c9c37565d0df.jpg',
      description: 'Protegen y embellecen las camas con máximo estilo.',
      modalDescription: 'Dales el toque final a tus camas con cubre canapés que combinen diseño y funcionalidad.'
    },
    { 
      name: 'Colchas', 
      img: '/COLCHA.jpeg',
      description: 'El toque para vestir camas con distinción.',
      modalDescription: 'Las colchas marcan tendencia en estilo y confort. Elige la ideal y transforma una cama en el centro de todas las miradas.'
    },
    { 
      name: 'Mantas decorativas', 
      img: '/MANTA.jpg',
      description: 'Suaves tejidos que invitan a relajarse y a disfrutar más.',
      modalDescription: 'Mantas con tejidos y diseños sleek que elevan proyectos contract fusionando exclusividad y sostenibilidad.'
    },
    { 
      name: 'Tejidos para tapicería', 
      img: '/TAPICERIA.jpeg',
      description: 'Fibras que aportan sofisticación y elegancia.',
      modalDescription: 'Tapicería con texturas naturales y tonos sofisticados que aportan lujo y calidez a proyectos contract. Eleva tus espacios con un estilo único.'
    },
    { 
      name: 'Lencería hostelera', 
      img: '/HOSTELERA.jpeg',
      description: 'La base esencial para la experiencia hotelera.',
      modalDescription: 'El cuidado en cada detalle, desde sábanas hasta toallas, garantiza que la excelencia se sienta en todo el equipamiento textil hotelero.'
    }
  ];

  const teamMembers = [
    {
      name: 'Ramón García',
      role: 'Director Comercial',
      email: 'info@stora.es',
      phone: '+34 678713192'
    },
    {
      name: 'Hugo Bas',
      role: 'Responsable de Proyectos',
      email: 'proyectos@stora.es',
      phone: '+34 667719270'
    },
    {
      name: 'Jose Luis Montalvá',
      role: 'Departamento Comercial',
      email: 'comercial@stora.es',
      phone: '+34 610411241'
    }
  ];

  const clientLogos = [
    { name: 'Captura 1', logo: '/Captura de pantalla 2025-08-06 125714.png', isImage: true },
    { name: 'Captura 2', logo: '/Captura de pantalla 2025-08-06 130049.png', isImage: true },
    { name: 'Logo', logo: '/logo.jpg', isImage: true },
    { name: 'Lopesan Hotel Group', logo: '/Logo_Lopesan_Hotel_Group.png', isImage: true },
    { name: 'Hotel Brand', logo: '/1503687473_original.png', isImage: true },
    { name: 'Hotel Logo', logo: '/1741728428392.jpeg', isImage: true },
    { name: 'Hotel Group', logo: '/1746606887294.png', isImage: true },
    { name: 'Asset 192', logo: '/Asset-192.png', isImage: true },
    { name: 'Hotel Chain', logo: '/c871d6412115e923ecb7efabb8a8ba0427280e18.png', isImage: true },
    { name: 'Hotel Soho Boutique', logo: '/Hotel_Soho_Boutique_Casa_Don_Fernando-logo_lejano-880x977.png', isImage: true },
    { name: 'Hyatt Hotels', logo: '/Hyatt_Hotels_&_Resorts.svg.png', isImage: true },
    { name: 'Hotel Images 1', logo: '/images (1).jpeg', isImage: true },
    { name: 'Hotel Images', logo: '/images.png', isImage: true },
    { name: 'Hotel Image', logo: '/img-d2579fe4.jpg', isImage: true },
    { name: 'NH Hotels', logo: '/NH_HOTELS.png', isImage: true },
    { name: 'Raffles International', logo: '/Raffles_International_Logo.svg.png', isImage: true },
    { name: 'Seaside Collection', logo: '/Seaside-Collection.webp', isImage: true },
    { name: 'W Hotels', logo: '/W_Hotels_logo.svg.png', isImage: true },
    { name: 'Westin Hotels', logo: '/Westin_Hotels_&_Resorts_logo.svg.png', isImage: true },
    { name: 'Captura 3', logo: '/Captura de pantalla 2025-08-06 134317.png', isImage: true },
    { name: 'Captura 4', logo: '/Captura de pantalla 2025-08-06 134806.png', isImage: true },
    { name: 'Captura 5', logo: '/Captura de pantalla 2025-08-06 134856.png', isImage: true },
    { name: 'Hotel Logo 2', logo: '/cbtPWmql_400x400.png', isImage: true },
    { name: 'Enjoy Hotels', logo: '/Enjoy_logo.jpg', isImage: true },
    { name: 'Paradores', logo: '/07paradores.jpg', isImage: true },
    { name: 'Byblos', logo: '/64bea1cfdb29f6d204eb84e1_LOGO - BYBLOS.png', isImage: true },
    { name: 'Sheraton', logo: '/2560px-Sheraton_(1).svg.png', isImage: true },
    { name: 'Belmond', logo: '/7802_belmond.jpg', isImage: true },
    { name: 'Hotel Brand 2', logo: '/339912238_1047757639531646_2595273952654765799_n.jpg', isImage: true }
  ];

  const googleReviews = [
    {
      name: 'Raquel',
      rating: 5,
      text: 'Confío en esta empresa para la ropa de cama de mi vivienda vacacional Es la tercera vez que realizo un periodo y estoy satisfecha con la calidad',
      date: '2 jun 2025'
    },
    {
      name: 'Jesús',
       rating: 5,
      text: 'No hay una empresa a nivel nacional de este sector que los iguale, máxima calidad, seriedad, formalidad y servicio. Enhorabuena.',
      date: '25 jul 2020'
    },
    {
      name: 'Debora',
       rating: 5,
      text: `Calidad y comodidad por un precio fantástico.
Tener la experiencia de un hotel en mi propia casa es increíble. Las toallas son maravillosas y las almohadas comodísimas. La pena es no haber conocido esta empresa antes!`,
      date: '10 mar 2025'
    }
  ];

  const timelineSteps = [
    { 
      title: 'Asesoría a tu medida', 
      desc: 'Transformamos tus ideas en un proyecto textil único. Tenemos los tejidos que buscas para vestir todos los espacios de un hotel.',
      img: '/consultoria.png'
    },
    { 
      title: 'De inspiración a creación', 
      desc: 'Te acompañamos y guiamos en la elección de los mejores materiales, para que tus propuestas destaquen.',
      img: '/idea.png'
    },
    { 
      title: 'Excelencia a puntadas', 
      desc: 'Contamos con un equipo experto, talleres y tejidos de calidad para superar tus expectativas en cada proyecto textil.',
      img: '/produccion.png'
    },
    { 
      title: 'Siempre listos', 
      desc: 'Disponibilidad inmediata de tejidos y de equipamiento textil hotelero para cumplir plazos sin comprometer la calidad.',
      img: '/tiempo.png'
    },
    { 
      title: 'Detalles que hablan', 
      desc: 'Cada una de nuestras instalaciones reflejan nuestro compromiso con la excelencia.',
      img: '/calidad.png'
    },
    { 
      title: 'Siempre a tu lado', 
      desc: 'Estés donde estés, nuestro equipo te acompaña y asesora con la experiencia y conocimientos que nos definen y diferencia.',
      img: '/seguimiento.png'
    },
  ];

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['quienes-somos', 'servicio-360', 'servicios', 'productos', 'equipo', 'resenas', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementTop = element.offsetTop;
      // Account for the fixed navigation height (64px) plus 15px offset
      const navHeight = 64;
      let additionalOffset = 80;
      
      // Add extra 20px for specific sections
      if (sectionId === 'servicio-360') {
        additionalOffset += 0;
      }
      
      if (sectionId === 'servicios') {
        additionalOffset += 40;
      }
      
      // Add 10px for Reseñas and Contacto sections (scroll lower)
      if (sectionId === 'contacto' || sectionId === 'blog') {
        additionalOffset += 10;
      }
      
      window.scrollTo({
        top: elementTop - navHeight + additionalOffset,
        behavior: 'smooth'
      });
    }
  };

  const scrollTimeline = (direction: 'left' | 'right') => {
    if (timelineScrollRef.current) {
      const container = timelineScrollRef.current;
      const cardWidth = 280; // Width of each card
      const gap = 24; // Gap between cards
      const totalCardWidth = cardWidth + gap;
      
      // Check if we're on mobile (screen width < 768px)
      const isMobile = window.innerWidth < 768;
      const visibleCards = isMobile ? 1 : 3;
      
      let currentScrollLeft = container.scrollLeft;
      let newScrollLeft;
      
      if (direction === 'left') {
        newScrollLeft = currentScrollLeft - totalCardWidth;
        // If we're at the beginning, jump to show the last 3 items
        if (newScrollLeft < 0) {
          newScrollLeft = (timelineSteps.length - visibleCards) * totalCardWidth;
        }
      } else {
        newScrollLeft = currentScrollLeft + totalCardWidth;
        // If we're at the end, jump to the beginning
        const maxScroll = (timelineSteps.length - visibleCards) * totalCardWidth;
        if (newScrollLeft > maxScroll) {
          newScrollLeft = 0;
        }
      }
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const openProductModal = (product: any) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const navigateToContact = () => {
    closeProductModal();
    scrollToSection('resenas');
  };

  const menuItems = [
    { id: 'quienes-somos', label: 'Inicio' },
    { id: 'servicio-360', label: 'Quienes Somos' },
    { id: 'servicios', label: 'Productos' },
    { id: 'equipo', label: 'Equipo' },
    { id: 'resenas', label: 'Reseñas' },
    { id: 'contacto', label: 'Contacto' },
    { id: 'blog', label: 'Blog' }
  ];

  return (
    <div className="min-h-screen bg-[#2f3130] text-[#f8f6f3] font-helvetica-light">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-opaque">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img 
                src="/LOGO STORA.png"
                alt="Stora Logo" 
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-lg font-helvetica-light transition-all duration-300 hover:text-[#e8dccc] relative ${
                    activeSection === item.id ? 'text-[#e8dccc]' : 'text-[#f8f6f3]/70'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#e8dccc] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>


      {/* Hero Section - #2f3130 */}
      <section id="quienes-somos" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2f3130]">
        <div 
          className="absolute inset-0 parallax"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img
            src="/Vídeo sin título ‐ Hecho con Clipchamp.gif"
            alt="Stora Interior Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2f3130]/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl px-8">
          <div className="animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <img 
                src="/LOGO STORA.png"
                alt="Stora Logo" 
                className="h-16 w-auto"
              />
            </div>
          </div>
          <div className="animate-fade-in-up stagger-2">
            <p className="text-2xl md:text-3xl mb-4 leading-tight font-helvetica-medium">
              Tejemos ideas para vestir <span className="font-cursive text-[#e8dccc] font-bold">espacios con identidad</span>
            </p>
          </div>
          <div className="animate-fade-in-up stagger-3">
            <p className="text-lg font-helvetica-medium max-w-4xl mx-auto leading-tight mb-6 text-center">
              Soluciones textiles para <span className="font-cursive text-[#e8dccc] font-bold">proyectos contract</span>
            </p>
            <p className="text-base font-helvetica-light max-w-x1 mx-auto leading-tight opacity-90">
              Más de 30 años siendo referentes del sector textil hostelero,ofreciendo
siempre confianza, calidad, confort y exclusividad
            </p>
          </div>
          <div className="animate-fade-in-up stagger-4 mt-10">
            <button 
              onClick={() => scrollToSection('servicio-360')}
              className="btn-primary bg-[#e8dccc] text-[#2f3130] px-8 py-4 rounded-full font-helvetica-medium hover:bg-[#d9ccb8] transition-all duration-300 inline-flex items-center space-x-2 hover-lift"
            >
              <span>Descubre quienes somos</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Quienes somos - #2f3130 */}
      <section id="servicio-360" className="relative pt-20 pb-24 bg-[#2f3130]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-6"> 
            <h2 className="text-4xl font-cursive mb-12 text-[#f8f6f3]">
              Quienes Somos
            </h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 items-center mb-16 max-w-4xl mx-auto">
            <div className="md:order-2 md:col-span-3 mb-4 md:mb-0">
              <p className="text-lg text-[#f8f6f3]/80 font-helvetica-light leading-tight">
                STORA es el aliado estratégico para interioristas que crean proyectos hoteleros únicos.<br /><br />
                Fabricamos e instalamos textiles y lencería sostenibles, duraderos y de alta calidad, pensados para aportar confort y maximizar la rentabilidad.<br /><br />
                Desde decoración vertical, plaids, cubre canapés y cojines, hasta tejidos para tapicería y zonas comunes, personalizamos cada detalle para que tú espacio cuente su propia historia.
              </p>
            </div>
            <div className="md:order-1 md:col-span-2">
              <img 
                src="/161b7b716e9fe4952ab7914e1203626b.jpg"
                alt="Stora Interior Design"
                className="w-full h-48 md:h-64 rounded-xl border border-[#e8dccc]/20 object-cover"
              />
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-cursive text-[#e8dccc] font-bold">
              Nuestra propuesta de valor
            </h3>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div 
              ref={timelineScrollRef}
              className="flex overflow-x-auto space-x-6 pb-4 md:w-auto mx-auto scrollbar-hide"
              style={{ 
                width: window.innerWidth < 768 
                  ? 'calc(1 * 280px)' // Mobile: 1 card width
                  : 'calc(3 * 280px + 2 * 24px)' // Desktop: 3 cards width + gaps
              }}
            >
              {timelineSteps.map((step, index) => (
                <div key={index} className="flex-none w-70 group cursor-pointer">
                  <div className="w-40 h-40 rounded-full bg-[#3a3c3b] overflow-hidden mb-6 shadow-lg border border-[#e8dccc]/20 flex items-center justify-center p-8 mx-auto">
                    <img 
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="bg-[#3a3c3b] p-6 rounded-xl shadow-sm border border-[#e8dccc]/20 w-full min-h-32 flex flex-col justify-center text-center">
                    <h3 className="text-xl font-helvetica-medium mb-3 text-[#f8f6f3]">{step.title}</h3>
                    <p className="text-base text-[#f8f6f3]/70 font-helvetica-light leading-tight">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => scrollTimeline('left')}
              className="services-nav-arrow services-nav-arrow-left absolute bg-[#e8dccc] text-[#2f3130] p-3 rounded-full shadow-lg z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTimeline('right')}
              className="services-nav-arrow services-nav-arrow-right absolute bg-[#e8dccc] text-[#2f3130] p-3 rounded-full shadow-lg z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Servicios - #e8dccc */}
      <section id="servicios" className="relative pt-40 pb-24 bg-[#e8dccc]">
        {/* Second Ornamental Divider - Positioned at top of section */}
        <div className="absolute left-0 right-0 z-0 pointer-events-none top-0">
          <img 
            src="/negro-arriba-der.png"
            alt="Ornamental Divider" 
            className="w-full h-auto object-contain"
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cursive mb-4 text-[#2f3130]">
              Productos
            </h2>
            <p className="text-xl text-[#2f3130]/80 font-helvetica-light leading-tight">
              Inspírate y descubre los tejidos que <span className="font-cursive text-[#2f3130] font-bold">transformarán</span> tu próximo proyecto.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productos.map((product, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group hover-lift border border-[#2f3130]/10 cursor-pointer"
                onClick={() => openProductModal(product)}
              >
                <div className="aspect-[4/3] overflow-hidden image-hover-zoom">
                  <img
                    src={product.img}
                    alt={product.name}
                    className={`w-full h-full object-cover ${
                      product.name === 'Lencería hostelera' ? 'object-[center_75%]' : ''
                   }${
                     product.name === 'Cubre canapés' ? ' object-bottom' : ''
                   }${
                     product.name === 'Tejidos para tapicería' ? ' object-[center_25%]' : ''
                    }`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-helvetica-medium text-[#2f3130] mb-1">{product.name}</h3>
                  <p className="text-[#2f3130]/70 font-helvetica-light leading-tight text-sm">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos - #2f3130 */}
      <section id="equipo" className="relative pt-40 pb-24 bg-[#2f3130]">
        {/* Ornamental Divider - Positioned at top of section */}
        <div className="absolute left-0 right-0 z-0 pointer-events-none" style={{ top: '-1px' }}>
          <img 
            src="/arriba blanco izq26-28.png"
            alt="Ornamental Divider" 
            className="w-full h-auto object-contain"
          />
        </div>
        
        <div className="max-w-5xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cursive mb-4 text-[#f8f6f3]">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-[#f8f6f3]/80 font-helvetica-light leading-tight">
              Profesionales con <span className="font-cursive text-[#e8dccc] font-bold">experiencia</span> que transforman ideas en <span className="font-cursive text-[#e8dccc] font-bold">hoteles excepcionales</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#3a3c3b] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group hover-lift border border-[#e8dccc]/10">
                <div className="aspect-square bg-[#e8dccc]/20"></div>
                <div className="p-4">
                  <h3 className="text-lg font-helvetica-medium text-[#f8f6f3] mb-1">{member.name}</h3>
                  <p className="text-[#f8f6f3]/80 font-helvetica-medium mb-2 text-xs tracking-wide">{member.role}</p>
                  {member.email && member.phone && (
                    <div className="space-y-1">
                      <a 
                        href={`mailto:${member.email}`}
                        className="block text-[#e8dccc] hover:text-[#e8dccc]/80 font-helvetica-light text-sm transition-colors duration-200"
                      >
                        {member.email}
                      </a>
                      <a 
                        href={`tel:${member.phone}`}
                        className="block text-[#e8dccc] hover:text-[#e8dccc]/80 font-helvetica-light text-sm transition-colors duration-200"
                      >
                        {member.phone}
                      </a>
                    </div>
                  )}
                  {member.email && !member.phone && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="block text-[#e8dccc] hover:text-[#e8dccc]/80 font-helvetica-light text-sm transition-colors duration-200"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo - #e8dccc */}
      <section id="resenas" className="relative py-24 bg-[#e8dccc]">
        {/* Fourth Ornamental Divider - Positioned at top of section */}
        <div className="absolute left-0 right-0 z-0 pointer-events-none" style={{ top: '-1px' }}>
          <img 
            src="/negro-arriba-der.png"
            alt="Ornamental Divider" 
            className="w-full h-auto object-contain"
          />
        </div>
        
        <div className="max-w-5xl mx-auto px-12">
          <div className="text-center mb-16 mt-16">
            <h2 className="text-4xl font-cursive mb-4 text-[#2f3130]">
              Reseñas
            </h2>
            <p className="text-xl text-[#2f3130]/80 font-helvetica-light leading-tight mb-12">
              Clientes <span className="font-cursive text-[#2f3130] font-bold">fieles</span> que crecen año tras año, sumándose a nuestra familia
textil
            </p>
          </div>
          
          <div className="relative mb-16">
            <div className="overflow-hidden">
              <div className="flex animate-scroll space-x-3" style={{ width: 'calc(58 * (100px + 12px))' }}>
                {clientLogos.map((client, index) => (
                  <div key={index} className="flex-shrink-0 flex justify-center items-center h-16 w-25">
                    <div className="w-24 h-14 rounded-lg bg-white flex items-center justify-center border border-[#2f3130]/10 p-2 shadow-sm">
                      {client.isImage ? (
                        <img 
                          src={client.logo} 
                          alt={client.name}
                          className={`max-w-full max-h-full ${
                            client.logo.includes('Captura de pantalla 2025-08-06 130049.png') || 
                            client.logo.includes('7802_belmond.jpg') || 
                            client.logo.includes('Westin_Hotels_&_Resorts_logo.svg.png')
                              ? 'object-cover' 
                              : 'object-contain'
                          }`}
                        />
                      ) : (
                        <span className="text-[#2f3130] font-helvetica-medium text-xs">{client.logo}</span>
                      )}
                    </div>
                  </div>
                ))}
                {/* Duplicate logos for seamless infinite scroll */}
                {clientLogos.map((client, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 flex justify-center items-center h-16 w-25">
                    <div className="w-24 h-14 rounded-lg bg-white flex items-center justify-center border border-[#2f3130]/10 p-2 shadow-sm">
                      {client.isImage ? (
                        <img 
                          src={client.logo} 
                          alt={client.name}
                          className={`max-w-full max-h-full ${
                            client.logo.includes('Captura de pantalla 2025-08-06 130049.png') || 
                            client.logo.includes('7802_belmond.jpg') || 
                            client.logo.includes('Westin_Hotels_&_Resorts_logo.svg.png')
                              ? 'object-cover' 
                              : 'object-contain'
                          }`}
                        />
                      ) : (
                        <span className="text-[#2f3130] font-helvetica-medium text-xs">{client.logo}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-helvetica-light text-center mb-8 text-[#2f3130]">
            Reseñas de <span className="font-cursive text-[#2f3130] font-bold">nuestros clientes</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {googleReviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover-lift border border-[#2f3130]/10">
                <div className="flex items-center mb-3">
                  <div className="flex space-x-1 mr-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-[#2f3130]/60 font-helvetica-light">{review.date}</span>
                </div>
                <p className="text-[#2f3130] mb-4 font-helvetica-light leading-tight text-sm">
                  "{review.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#2f3130] rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#e8dccc] font-helvetica-medium text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-[#2f3130] font-helvetica-medium text-sm">— {review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reseñas - #2f3130 */}
      <section id="contacto" className="relative pt-40 pb-24 bg-[#2f3130]">
        {/* Sixth Ornamental Divider - Same as Equipo section */}
        <div className="absolute left-0 right-0 z-0 pointer-events-none" style={{ top: '-1px' }}>
          <img 
            src="/arriba blanco izq26-28.png"
            alt="Ornamental Divider" 
            className="w-full h-auto object-contain transform scale-y-[1]"
          />
        </div>
        
        <div className="max-w-5xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cursive mb-4 text-[#f8f6f3]">
              Contacto
            </h2>
            <p className="text-xl text-[#f8f6f3]/80 font-helvetica-light leading-tight">
              <span className="font-cursive text-[#e8dccc] font-bold">Contáctanos</span> y te acompañaremos en todo tu proyecto
de interiorismo hostelero con <span className="font-cursive text-[#e8dccc] font-bold">excelencia y compromiso</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-helvetica-light mb-3 text-[#f8f6f3]">Hablemos de tu proyecto</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full p-3 border border-[#e8dccc]/30 rounded-lg focus:outline-none focus:border-[#e8dccc] transition-all duration-200 bg-[#3a3c3b] text-[#f8f6f3] placeholder-[#f8f6f3]/60 font-helvetica-light text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-[#e8dccc]/30 rounded-lg focus:outline-none focus:border-[#e8dccc] transition-all duration-200 bg-[#3a3c3b] text-[#f8f6f3] placeholder-[#f8f6f3]/60 font-helvetica-light text-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full p-3 border border-[#e8dccc]/30 rounded-lg focus:outline-none focus:border-[#e8dccc] transition-all duration-200 bg-[#3a3c3b] text-[#f8f6f3] placeholder-[#f8f6f3]/60 font-helvetica-light text-sm"
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos sobre tu proyecto"
                    className="w-full p-3 border border-[#e8dccc]/30 rounded-lg focus:outline-none focus:border-[#e8dccc] transition-all duration-200 resize-none bg-[#3a3c3b] text-[#f8f6f3] placeholder-[#f8f6f3]/60 font-helvetica-light text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full bg-[#e8dccc] text-[#2f3130] py-3 rounded-lg font-helvetica-medium hover:bg-[#d9ccb8] transition-all duration-200 hover-lift text-sm"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-helvetica-light mb-6 text-[#f8f6f3]">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#e8dccc]/10 rounded-full flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[#e8dccc]" />
                    </div>
                    <a 
                      href="tel:+34961366520"
                      className="text-[#f8f6f3] font-helvetica-light text-sm hover:text-[#e8dccc] transition-colors duration-200"
                    >
                      +34 961 366 520
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#e8dccc]/10 rounded-full flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[#e8dccc]" />
                    </div>
                    <a 
                      href="mailto:info@stora.es"
                      className="text-[#f8f6f3] font-helvetica-light text-sm hover:text-[#e8dccc] transition-colors duration-200"
                    >
                      info@stora.es
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#e8dccc]/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[#e8dccc]" />
                    </div>
                    <a 
                      href="https://maps.app.goo.gl/RKTqxF4wB1dpv1X9A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f8f6f3] font-helvetica-light text-sm hover:text-[#e8dccc] transition-colors duration-200"
                    >
                      Calle Louis Pasteur, 2<br />
                      Parque Tecnológico 46980 <br />
                      Paterna, Valencia, España
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <a
                    href="https://instagram.com/stora.decor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
                  >
                    <Instagram className="w-5 h-5 text-[#e8dccc] translate-y-0.5" />
                    <h3 className="text-xl font-cursive text-[#f8f6f3]">@stora.decor</h3>
                  </a>
                </div>
                <div className="flex gap-2 mb-4">
                  {[
                    '/7d4eb42127fe3e66a4cdabc3acba9ea5.jpg',
                    '/c238871dba53bde30e34a4ca6d7b010f.jpg',
                    '/cde5c7744460198965c27f696e6b055e.jpg'
                  ].map((img, index) => (
                    <a
                      key={index}
                      href="https://instagram.com/stora.decor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 image-hover-zoom hover-lift"
                    >
                      <img
                        src={img}
                        alt={`Instagram ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto - #e8dccc */}
      <section id="blog" className="relative pt-40 pb-24 bg-[#e8dccc]">
        {/* Seventh Ornamental Divider - Same as Productos section */}
        <div className="absolute left-0 right-0 z-0 pointer-events-none" style={{ top: '-1px' }}>
          <img 
            src="/negro-arriba-der.png"
            alt="Ornamental Divider" 
            className="w-full h-auto object-contain"
          />
        </div>
        
        <div className="max-w-5xl mx-auto px-12">
          <h2 className="text-3xl font-cursive text-center mb-4 text-[#2f3130]">
            Descubre nuestro Blog
          </h2>
          <p className="text-center text-xl text-[#2f3130]/80 mb-12 font-helvetica-light leading-tight">
            Historias <span className="font-cursive text-[#2f3130] font-bold">hilo a hilo, tendencias y claves</span> en tejidos para proyectos
contract
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/7d4eb42127fe3e66a4cdabc3acba9ea5.jpg',
              '/c238871dba53bde30e34a4ca6d7b010f.jpg',
              '/cde5c7744460198965c27f696e6b055e.jpg',
              '/e7063727a8cc4cfad557335dff4e6d35.jpg'
            ].map((img, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 image-hover-zoom hover-lift">
                <img
                  src={img}
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - #e8dccc */}
      <footer className="relative bg-[#2f3130] text-[#f8f6f3] py-12 border-t border-[#e8dccc]/20">
        <div className="max-w-5xl mx-auto px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/LOGO STORA.png"
                alt="Stora Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="flex space-x-6 text-xs font-helvetica-light">
              <a href="#" className="hover:text-[#e8dccc]/80 transition-colors duration-200">Política de Privacidad</a>
              <a href="#" className="hover:text-[#e8dccc]/80 transition-colors duration-200">Aviso Legal</a>
              <a href="#" className="hover:text-[#e8dccc]/80 transition-colors duration-200">Cookies</a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-[#2f3130]/20 text-center text-xs text-[#f8f6f3]/70 font-helvetica-light">
            © 2024 <img 
              src="/LOGO STORA.png"
              alt="Stora Logo" 
              className="h-3 w-auto inline-block mx-1"
            />. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#2f3130]/90 backdrop-blur-sm"
            onClick={closeProductModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-[#2f3130] rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-[#e8dccc]/20">
            {/* Close Button */}
            <button
              onClick={closeProductModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-[#e8dccc]/10 hover:bg-[#e8dccc]/20 rounded-full flex items-center justify-center transition-all duration-200"
            >
              <span className="text-[#e8dccc] text-xl leading-none -translate-y-0.5">×</span>
            </button>
            
            <div className="grid md:grid-cols-2 gap-0 h-full">
              {/* Left side - Image */}
              <div className="aspect-square md:aspect-auto">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className={`w-full h-full object-cover ${
                    selectedProduct.name === 'Lencería hostelera' ? 'object-bottom' : ''
                  }${
                    selectedProduct.name === 'Cubre canapés' ? ' object-top' : ''
                  }`}
                />
              </div>
              
              {/* Right side - Content */}
              <div className="p-8 flex flex-col justify-start pt-20">
                <div>
                <h3 className="text-3xl font-cursive mb-4 text-[#e8dccc]">
                  {selectedProduct.name}
                </h3>
                  <p className="text-[#f8f6f3]/80 font-helvetica-light leading-relaxed text-lg mb-6">
                  {selectedProduct.modalDescription}
                </p>
                
                <button
                  onClick={navigateToContact}
                  className="btn-primary bg-[#e8dccc] text-[#2f3130] px-8 py-4 rounded-full font-helvetica-medium hover:bg-[#d9ccb8] transition-all duration-300 inline-flex items-center justify-center space-x-2 hover-lift"
                >
                  <span>Pide tu presupuesto</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;