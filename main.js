import './style.css'

const KIWIFY_URL = 'https://pay.kiwify.com.br/sua-link-aqui'

document.querySelector('#app').innerHTML = `
  <nav class="navbar" id="navbar">
    <div class="container">
      <a href="#hero" class="nav-brand">Advogada 10K<span>®</span></a>
      <ul class="nav-links" id="navLinks">
        <li><a href="#problema">O Problema</a></li>
        <li><a href="#sobre">A Mentora</a></li>
        <li><a href="#pilares">Pilares</a></li>
        <li><a href="#programa">Programa</a></li>
        <li><a href="#faq">Dúvidas</a></li>
        <li><a href="${KIWIFY_URL}" class="nav-cta" target="_blank" rel="noopener">Quero Participar</a></li>
      </ul>
      <button class="nav-toggle" id="navToggle" aria-label="Abrir menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero" id="hero">
    <div class="container">
      <div class="hero-content reveal">
        <div class="hero-badge">
          <span class="dot"></span>
          Mentoria individual com Priscila Zanetti
        </div>
        <h1>Sua advocacia não cresce como deveria? Talvez o problema não seja <em>falta de clientes</em>.</h1>
        <p class="hero-tagline">
          Conhecimento jurídico é essencial. Mas organização, posicionamento e execução
          são fundamentais para transformar conhecimento em atuação profissional.
          Menos improviso. Mais método.
        </p>
        <div class="hero-cta-group">
          <a href="${KIWIFY_URL}" class="btn btn-primary" target="_blank" rel="noopener">Quero Participar</a>
          <a href="#programa" class="btn btn-outline">Conhecer o Programa</a>
        </div>
        <div class="hero-trust">
          <div class="hero-trust-item">
            <strong>2009</strong>
            <span>Na advocacia desde</span>
          </div>
          <div class="hero-trust-item">
            <strong>4</strong>
            <span>Encontros individuais</span>
          </div>
          <div class="hero-trust-item">
            <strong>100%</strong>
            <span>Personalizado</span>
          </div>
        </div>
      </div>
      <div class="hero-image reveal">
        <img src="/WhatsApp_Image_2026-09-19_at_23.12.16_(2).jpeg" alt="Priscila Zanetti, advogada e mentora" />
      </div>
    </div>
  </section>

  <!-- PROBLEM / CENTRAL MESSAGE -->
  <section class="problem" id="problema">
    <div class="container reveal">
      <span class="section-label">A Mensagem Central</span>
      <h2>Você não precisa apenas de mais clientes. Você precisa de estrutura para construir uma advocacia que consiga crescer.</h2>
      <p>
        Muitas advogadas não precisam necessariamente de mais conhecimento jurídico.
        Precisam de estrutura para transformar conhecimento em atuação profissional.
      </p>
      <p class="highlight">
        Transforme contatos em oportunidades, oportunidades em processos organizados
        e sua atuação em uma carreira mais estruturada.
      </p>
    </div>
  </section>

  <!-- ABOUT / MENTOR -->
  <section class="about" id="sobre">
    <div class="container">
      <div class="about-image reveal">
        <img src="/WhatsApp_Image_2026-10-22_at_18.18.57.jpeg" alt="Priscila Zanetti em ambiente profissional" />
      </div>
      <div class="about-text reveal">
        <span class="section-label">A Mentora</span>
        <h2 class="section-title">Priscila Zanetti</h2>
        <p>
          Advogada e mentora, com atuação na advocacia desde 2009. Desenvolveu sua
          experiência especialmente nas áreas de Direito das Famílias e Sucessões,
          aliando conhecimento técnico à vivência prática da construção de uma
          carreira jurídica.
        </p>
        <p>
          Ao longo de sua trajetória, compreendeu que muitas advogadas possuem
          capacidade e conhecimento, mas enfrentam dificuldades para estruturar a
          própria atuação. Foi a partir dessa visão que nasceu a Mentoria
          Advogada 10K®, criada para ajudar profissionais a desenvolverem maior
          clareza, posicionamento, organização, processo de atendimento e visão
          estratégica sobre a própria carreira.
        </p>
        <ul class="about-credentials">
          <li>Na advocacia desde 2009</li>
          <li>Direito das Famílias e Sucessões</li>
          <li>Atuação em Direito Bancário</li>
          <li>Mentoria individual e personalizada</li>
          <li>Linguagem realista e prática</li>
          <li>Sem promessas de fórmulas mágicas</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- PILARES -->
  <section class="pilars" id="pilares">
    <div class="container">
      <div class="pilars-header reveal">
        <span class="section-label">Metodologia</span>
        <h2 class="section-title">Os pilares da Mentoria</h2>
        <p class="section-subtitle">
          A Mentoria Advogada 10K® é construída sobre pilares que trabalham
          a passagem do improviso para o método.
        </p>
      </div>
      <div class="pilars-grid">
        <div class="pilar-card reveal">
          <div class="pilar-icon">🎯</div>
          <h3>Posicionamento</h3>
          <p>Compreender quem você é profissionalmente, quais problemas resolve e como deseja ser percebida.</p>
          <ul>
            <li>Identidade profissional</li>
            <li>Áreas de atuação</li>
            <li>Comunicação clara</li>
          </ul>
        </div>
        <div class="pilar-card reveal">
          <div class="pilar-icon">👁️</div>
          <h3>Presença e Visibilidade</h3>
          <p>Deixar de ser invisível profissionalmente com estratégias éticas de comunicação e networking.</p>
          <ul>
            <li>Ativação da rede de contatos</li>
            <li>Presença nas redes sociais</li>
            <li>Divulgação ética</li>
          </ul>
        </div>
        <div class="pilar-card reveal">
          <div class="pilar-icon">🌱</div>
          <h3>Geração Ética de Oportunidades</h3>
          <p>Desenvolver um olhar ativo para reconhecer e gerar oportunidades legítimas, sem captação agressiva.</p>
          <ul>
            <li>Reconhecimento de oportunidades</li>
            <li>Networking profissional</li>
            <li>Canais compatíveis</li>
          </ul>
        </div>
        <div class="pilar-card reveal">
          <div class="pilar-icon">🗂️</div>
          <h3>Processo e Organização</h3>
          <p>Oportunidade sem acompanhamento se perde. Aprenda a organizar contatos, follow-up e fluxo de atendimento.</p>
          <ul>
            <li>Cadastro e classificação de contatos</li>
            <li>Follow-up e retornos</li>
            <li>Controle de propostas e contratos</li>
          </ul>
        </div>
        <div class="pilar-card reveal">
          <div class="pilar-icon">🤝</div>
          <h3>Conversão e Atendimento</h3>
          <p>Organizar uma experiência profissional desde o primeiro contato até a formalização da contratação.</p>
          <ul>
            <li>Escuta profissional</li>
            <li>Apresentação de honorários</li>
            <li>Formalização e fidelização</li>
          </ul>
        </div>
        <div class="pilar-card reveal">
          <div class="pilar-icon">🧭</div>
          <h3>Desenvolvimento e Mentalidade</h3>
          <p>Trabalhar responsabilidade pessoal, consistência, disciplina e construção de uma nova identidade profissional.</p>
          <ul>
            <li>Autorregulação e hábitos</li>
            <li>Tomada de decisão</li>
            <li>Confiança profissional</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ENCONTROS / PROGRAMA -->
  <section class="encontros" id="programa">
    <div class="container">
      <div class="encontros-header reveal">
        <span class="section-label">Estrutura da Mentoria</span>
        <h2 class="section-title">Quatro encontros individuais</h2>
        <p class="section-subtitle">
          Cada encontro é personalizado para o momento profissional da advogada,
          com materiais complementares práticos.
        </p>
      </div>
      <div class="encontros-timeline">
        <div class="encontro-item reveal">
          <div class="encontro-num">1</div>
          <div class="encontro-content">
            <h3>Diagnóstico e Estratégia Imediata</h3>
            <p>Diagnóstico do momento profissional, direcionamento, posicionamento estratégico e primeiras ações práticas.</p>
            <ul class="topics">
              <li>Direcionamento profissional</li>
              <li>Posicionamento estratégico</li>
              <li>Definição de prioridades</li>
            </ul>
            <span class="encontro-material">Material: Plano de Crescimento – Advogada 10K®</span>
          </div>
        </div>
        <div class="encontro-item reveal">
          <div class="encontro-num">2</div>
          <div class="encontro-content">
            <h3>Prospecção Ética e Inteligente</h3>
            <p>Enxergar oportunidades, ativar rede de contatos, networking, comunicação profissional e presença digital.</p>
            <ul class="topics">
              <li>Onde gerar oportunidades</li>
              <li>Ativação da rede</li>
              <li>Presença digital</li>
            </ul>
            <span class="encontro-material">Materiais: Exercícios, scripts de comunicação e lista de fontes</span>
          </div>
        </div>
        <div class="encontro-item reveal">
          <div class="encontro-num">3</div>
          <div class="encontro-content">
            <h3>CRM Jurídico e Funil de Conversão</h3>
            <p>Transformar contatos e oportunidades em um processo organizado com CRM, classificação e acompanhamento.</p>
            <ul class="topics">
              <li>Construção do CRM jurídico</li>
              <li>Classificação de oportunidades</li>
              <li>Follow-up e controle</li>
            </ul>
            <span class="encontro-material">Material: CRM Jurídico Simplificado – Advogada 10K®</span>
          </div>
        </div>
        <div class="encontro-item reveal">
          <div class="encontro-num">4</div>
          <div class="encontro-content">
            <h3>Encantamento, Atendimento e Fechamento</h3>
            <p>Experiência do cliente: do primeiro contato à formalização, pós-atendimento e fidelização.</p>
            <ul class="topics">
              <li>Escuta profissional</li>
              <li>Apresentação de honorários</li>
              <li>Fechamento e fidelização</li>
            </ul>
            <span class="encontro-material">Material: Cliente Encantado® – Guia Prático de Atendimento</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="testimonials" id="depoimentos">
    <div class="container">
      <div class="testimonials-header reveal">
        <span class="section-label">Depoimentos</span>
        <h2 class="section-title">O que dizem as mentoradas</h2>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card reveal">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"Saí da mentoria com clareza que não tinha em anos de formada. O CRM jurídico mudou minha forma de acompanhar contatos. Hoje não perco oportunidades por falta de follow-up."</p>
          <div class="testimonial-author">
            <strong>Advogada — início de carreira</strong>
            <span>Saiu do CLT para a advocacia independente</span>
          </div>
        </div>
        <div class="testimonial-card reveal">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"Eu dependia exclusivamente de indicações e não sabia como mudar isso. Aprendi a ativar minha rede e a me posicionar sem parecer que estava vendendo. Ético e eficaz."</p>
          <div class="testimonial-author">
            <strong>Advogada — 5 anos de OAB</strong>
            <span>Antes dependia só de indicações</span>
          </div>
        </div>
        <div class="testimonial-card reveal">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-text">"A parte de atendimento e honorários era meu maior bloqueio. Hoje conduzo a reunião com segurança, apresento os valores com clareza e o cliente sente confiança. Transformador."</p>
          <div class="testimonial-author">
            <strong>Advogada — Direito das Famílias</strong>
            <span>Tinha insegurança no atendimento</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <section class="cta-banner">
    <div class="container reveal">
      <h2>Você não precisa fazer tudo sozinha e no improviso.</h2>
      <p>Construa uma advocacia com clareza, organização e direção estratégica.</p>
      <a href="${KIWIFY_URL}" class="btn btn-gold" target="_blank" rel="noopener">Quero Participar da Mentoria</a>
    </div>
  </section>

  <!-- FAQ -->
  <section class="faq" id="faq">
    <div class="container">
      <div class="faq-header reveal">
        <span class="section-label">Dúvidas Frequentes</span>
        <h2 class="section-title">Perguntas e respostas</h2>
      </div>
      <div class="faq-list">
        <div class="faq-item reveal">
          <button class="faq-question">
            A Mentoria Advogada 10K® é um curso gravado?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <p>Não. É uma mentoria individual, com encontros ao vivo e direcionamento personalizado para o momento profissional de cada advogada. Não se trata de um curso gravado e genérico.</p>
          </div>
        </div>
        <div class="faq-item reveal">
          <button class="faq-question">
            A mentoria promete faturamento de 10 mil reais?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <p>Não. O nome representa uma meta de construção e organização profissional. A mentoria não promete faturamento garantido, mas ajuda a desenvolver clareza, método e estratégias éticas para buscar crescimento e melhores resultados.</p>
          </div>
        </div>
        <div class="faq-item reveal">
          <button class="faq-question">
            Para quem a mentoria é indicada?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <p>Para advogadas em início de carreira, profissionais que desejam sair do CLT, que dependem exclusivamente de indicações, que têm dificuldade de se posicionar, que perdem oportunidades por falta de acompanhamento, ou que desejam construir uma advocacia mais organizada e previsível.</p>
          </div>
        </div>
        <div class="faq-item reveal">
          <button class="faq-question">
            O que vou construir durante a mentoria?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <p>Você vai trabalhar posicionamento, presença e visibilidade, geração ética de oportunidades, CRM jurídico, funil de conversão, atendimento, apresentação de honorários e próximos passos para continuar executando depois do encerramento da mentoria.</p>
          </div>
        </div>
        <div class="faq-item reveal">
          <button class="faq-question">
            A mentoria substitui acompanhamento psicológico?
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <p>Não. Os conteúdos de desenvolvimento profissional apoiam reflexão, autorregulação e execução, sem substituir acompanhamento psicológico, terapêutico ou médico. A abordagem é responsável e sem promessas terapêuticas ou científicas que não possam ser comprovadas.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="final-cta" id="contato">
    <div class="container reveal">
      <h2>Pronta para construir uma advocacia com método?</h2>
      <p>
        Menos improviso. Mais método. Agende sua participação na Mentoria
        Advogada 10K® e dê o primeiro passo rumo a uma atuação profissional
        mais estruturada, visível e sustentável.
      </p>
      <a href="${KIWIFY_URL}" class="kiwify-btn" target="_blank" rel="noopener">
        Quero Participar
      </a>
      <p class="kiwify-note">Pagamento seguro via Kiwify · Vagas limitadas — mentoria individual</p>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div>
        <div class="footer-brand">Advogada 10K<span>®</span></div>
        <p>Priscila Araújo Zanetti — Advogada e Mentora<br>
        Atuação desde 2009 | Direito das Famílias e Sucessões<br>
        Priscila Zanetti Advocacia</p>
      </div>
      <div>
        <h4>Navegação</h4>
        <ul>
          <li><a href="#problema">O Problema</a></li>
          <li><a href="#sobre">A Mentora</a></li>
          <li><a href="#pilares">Pilares</a></li>
          <li><a href="#programa">Programa</a></li>
          <li><a href="#faq">Dúvidas</a></li>
        </ul>
      </div>
      <div>
        <h4>Contato</h4>
        <ul>
          <li><a href="${KIWIFY_URL}" target="_blank" rel="noopener">Participar da Mentoria</a></li>
          <li><a href="#contato">Agendar conversa</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Mentoria Advogada 10K® · Priscila Zanetti Advocacia. Todos os direitos reservados.</p>
    </div>
  </footer>
`

/* ============================================================
   Interactions
   ============================================================ */

const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

const navToggle = document.getElementById('navToggle')
const navLinks = document.getElementById('navLinks')

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active')
  navLinks.classList.toggle('open')
})

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active')
    navLinks.classList.remove('open')
  })
})

document.querySelectorAll('.faq-question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement
    const isOpen = item.classList.contains('open')

    document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'))

    if (!isOpen) {
      item.classList.add('open')
    }
  })
})

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
)

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))
