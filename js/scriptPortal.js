document.addEventListener('DOMContentLoaded', function() {
    class Chatbot {
        constructor() {
            this.button = document.querySelector('.chatbot-button');
            this.container = document.querySelector('.chatbot-container');
            this.closeBtn = document.querySelector('.close-chat');
            this.messagesContainer = document.querySelector('.chatbot-messages');
            this.input = document.querySelector('.chatbot-input input');
            this.sendBtn = document.querySelector('.send-message');

            if (!this.validateElements()) return;
            
            this.responses = {
                "opciones": [
                    "Puedo ayudarte con las siguientes opciones:\n" +
                    "📚 Matrícula\n" +
                    "📖 Cursos\n" +
                    "🕒 Horarios\n" +
                    "💰 Pagos\n" +
                    "🔧 Problemas técnicos\n" +
                    "❓ Ayuda general\n\n" +
                    "¿Sobre qué tema te gustaría consultar?"
                ],
                "hola": [
                    "¡Hola! 👋 Soy tu asistente virtual de UPRIT. Para comenzar, estas son las opciones en las que puedo ayudarte:\n\n" +
                    "📚 Matrícula\n" +
                    "📖 Cursos\n" +
                    "🕒 Horarios\n" +
                    "💰 Pagos\n" +
                    "🔧 Problemas técnicos\n" +
                    "❓ Ayuda general\n\n" +
                    "¿Sobre qué tema te gustaría consultar?",
                    "¡Buen día! 🌟 Soy tu asistente UPRIT. Puedo ayudarte con:\n\n" +
                    "📚 Matrícula\n" +
                    "📖 Cursos\n" +
                    "🕒 Horarios\n" +
                    "💰 Pagos\n" +
                    "🔧 Problemas técnicos\n" +
                    "❓ Ayuda general\n\n" +
                    "¿Qué información necesitas?"
                ],
                "ayuda": [
                    "🎓 Estoy aquí para ayudarte. Estas son las áreas en las que puedo asistirte:\n\n" +
                    "📚 Matrícula: Proceso y requisitos\n" +
                    "📖 Cursos: Información y registro\n" +
                    "🕒 Horarios: Consulta y disponibilidad\n" +
                    "💰 Pagos: Métodos y fechas\n" +
                    "🔧 Problemas técnicos: Soporte\n\n" +
                    "¿Qué tema te interesa explorar?"
                ],
                "matrícula": [
                    "📚 Proceso de Matrícula:\n\n" +
                    "1️⃣ Ingresa a 'Portal Estudiante'\n" +
                    "2️⃣ Selecciona 'Proceso de Matrícula'\n" +
                    "3️⃣ Verifica requisitos académicos\n" +
                    "4️⃣ Elige tus cursos\n" +
                    "5️⃣ Confirma tu matrícula\n\n" +
                    "📋 Requisitos:\n" +
                    "- DNI vigente\n" +
                    "- No tener deudas pendientes\n" +
                    "- Constancia de ingreso\n\n" +
                    "¿Necesitas ayuda con algún paso específico?"
                ],
                "cursos": [
                    "📖 Información de Cursos:\n\n" +
                    "🔍 Consulta de cursos disponibles:\n" +
                    "- Ingresa a 'Mis Cursos'\n" +
                    "- Filtra por ciclo y carrera\n\n" +
                    "📅 Fechas importantes:\n" +
                    "- Inicio de matrícula: [Fechas según calendario]\n" +
                    "- Período de cambios: Primera semana\n\n" +
                    "💡 Tips:\n" +
                    "- Revisa prerequisitos\n" +
                    "- Verifica créditos disponibles\n" +
                    "- Consulta la malla curricular\n\n" +
                    "¿Qué información adicional necesitas?"
                ],
                "horarios": [
                    "🕒 Consulta de Horarios:\n\n" +
                    "📋 Filtros disponibles:\n" +
                    "- Por ciclo académico\n" +
                    "- Por carrera\n" +
                    "- Por docente\n" +
                    "- Por curso\n\n" +
                    "⚡ Acceso rápido:\n" +
                    "1. Ingresa a 'Horarios'\n" +
                    "2. Selecciona tus filtros\n" +
                    "3. Visualiza disponibilidad\n\n" +
                    "¿Necesitas ayuda para encontrar un horario específico?"
                ],
                "pagos": [
                    "💰 Información de Pagos:\n\n" +
                    "💳 Métodos de pago:\n" +
                    "- Tarjeta crédito/débito\n" +
                    "- Transferencia bancaria\n" +
                    "- Banca móvil\n" +
                    "- Ventanilla bancaria\n\n" +
                    "📅 Fechas de pago:\n" +
                    "- Matrícula: [Fecha]\n" +
                    "- Mensualidades: Día 1 de cada mes\n\n" +
                    "⚠️ Importante:\n" +
                    "- Guarda tus comprobantes\n" +
                    "- Verifica el proceso en 24h\n\n" +
                    "¿Necesitas información sobre algún método de pago específico?"
                ],
                "problemas": [
                    "🔧 Soporte Técnico:\n\n" +
                    "📞 Contacto:\n" +
                    "- Teléfono: 970597183\n" +
                    "- Email: informes@uprit.edu.pe\n\n" +
                    "⏰ Horario de atención:\n" +
                    "- Lunes a Viernes: 8am - 8pm\n" +
                    "- Sábados: 9am - 1pm\n\n" +
                    "🚨 Para emergencias fuera de horario:\n" +
                    "- WhatsApp: +51 970597183\n\n" +
                    "¿Cuál es el inconveniente que estás experimentando?"
                ],
                "default": [
                    "No logro entender tu consulta. 🤔\n\nPuedo ayudarte con:\n" +
                    "📚 Matrícula\n" +
                    "📖 Cursos\n" +
                    "🕒 Horarios\n" +
                    "💰 Pagos\n" +
                    "🔧 Problemas técnicos\n\n" +
                    "¿Podrías especificar tu consulta sobre alguno de estos temas?",
                    "Disculpa, no he entendido bien. 🤔\n\nEstas son las áreas en las que puedo ayudarte:\n" +
                    "📚 Matrícula\n" +
                    "📖 Cursos\n" +
                    "🕒 Horarios\n" +
                    "💰 Pagos\n" +
                    "🔧 Problemas técnicos\n\n" +
                    "¿Sobre cuál te gustaría saber más?"
                ]
            };
            
            this.init();
        }

        validateElements() {
            const elements = {
                button: this.button,
                container: this.container,
                closeBtn: this.closeBtn,
                messagesContainer: this.messagesContainer,
                input: this.input,
                sendBtn: this.sendBtn
            };

            for (const [name, element] of Object.entries(elements)) {
                if (!element) {
                    console.error(`Elemento faltante: ${name}`);
                    return false;
                }
            }
            return true;
        }

        init() {
            this.container.style.display = 'none';
            
            this.button.addEventListener('click', () => this.toggleChat());
            this.closeBtn.addEventListener('click', () => this.toggleChat());
            this.sendBtn.addEventListener('click', () => this.sendMessage());
            this.input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.sendMessage();
            });

            this.addMessage("¡Bienvenido a UPRIT Virtual! 🎓\n\n" +
                "Puedo ayudarte con las siguientes opciones:\n" +
                "📚 Matrícula\n" +
                "📖 Cursos\n" +
                "🕒 Horarios\n" +
                "💰 Pagos\n" +
                "🔧 Problemas técnicos\n" +
                "❓ Ayuda general\n\n" +
                "¿Sobre qué tema te gustaría consultar?", 'bot');
        }

        toggleChat() {
            const isHidden = this.container.style.display === 'none';
            this.container.style.display = isHidden ? 'block' : 'none';
            if (isHidden) {
                this.input.focus();
                this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
            }
        }

        addMessage(text, type) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', `${type}-message`);
            
            const formattedText = text.replace(/\n/g, '<br>');
            messageDiv.innerHTML = formattedText;
            
            this.messagesContainer.appendChild(messageDiv);
            
            this.messagesContainer.scrollTo({
                top: this.messagesContainer.scrollHeight,
                behavior: 'smooth'
            });
        }

        getResponse(message) {
            message = message.toLowerCase().trim();
            
            for (const [key, responses] of Object.entries(this.responses)) {
                if (message.includes(key)) {
                    return responses[Math.floor(Math.random() * responses.length)];
                }
            }
            
            const messageWords = message.split(' ');
            const topics = {
                matrícula: ['matricula', 'inscripcion', 'inscribir', 'registro', 'registrar'],
                cursos: ['curso', 'clase', 'materias', 'asignatura'],
                horarios: ['horario', 'hora', 'tiempo', 'cronograma'],
                pagos: ['pago', 'pagar', 'precio', 'costo', 'deuda', 'factura'],
                problemas: ['problema', 'error', 'falla', 'ayuda', 'soporte']
            };

            for (const [topic, keywords] of Object.entries(topics)) {
                if (messageWords.some(word => keywords.includes(word))) {
                    return this.responses[topic][0];
                }
            }
            
            return this.responses.default[Math.floor(Math.random() * this.responses.default.length)];
        }

        sendMessage() {
            const message = this.input.value.trim();
            if (message) {
                this.addMessage(message, 'user');
                this.input.value = '';
                
                const typingDiv = document.createElement('div');
                typingDiv.classList.add('message', 'bot-message', 'typing');
                typingDiv.textContent = '...';
                this.messagesContainer.appendChild(typingDiv);
                
                // Natural response timing
                const delay = Math.random() * 1000 + 500; // 500-1500ms
                setTimeout(() => {
                    this.messagesContainer.removeChild(typingDiv);
                    const response = this.getResponse(message);
                    this.addMessage(response, 'bot');
                }, delay);
            }
        }
    }

    // Chatbot initialization
    try {
        const chatbot = new Chatbot();
    } catch (error) {
        console.error('Error inicializando chatbot:', error);
    }
});

// Carousel 
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
   // Actualizar los indicadores para que coincidan con el número de diapositivas
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    indicatorsContainer.innerHTML = ''; // Clear existing indicators
    slides.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicatorsContainer.appendChild(indicator);
    });
    
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

 //Función para cambiar diapositiva
    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        currentIndex = index;
        slides[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }

// eventos para botones
    prevButton.addEventListener('click', () => {
        const index = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        goToSlide(index);
    });

    nextButton.addEventListener('click', () => {
        const index = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        goToSlide(index);
    });

    //  eventos para indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });

    // Cambio automático de slide
    setInterval(() => {
        const index = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        goToSlide(index);
    }, 5000);
});