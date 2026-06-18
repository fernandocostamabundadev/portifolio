```markdown
# 🚀 Portfólio Pessoal - Fernando Mabunda

![Portfólio Preview](./assets/img/preview.png)

Portfólio profissional desenvolvido para apresentar meus projetos, habilidades e experiência como Desenvolvedor Full-Stack. O site foi construído com foco em **design moderno**, **responsividade** e **acessibilidade**, seguindo as melhores práticas de desenvolvimento web.

---

## 📋 Sobre o Projeto

Este é meu portfólio pessoal, criado para:

- 🎯 Apresentar meu trabalho de forma profissional
- 💼 Demonstrar minhas habilidades técnicas em HTML, CSS e JavaScript
- 🔗 Ser um ponto central para recrutadores e clientes
- 📊 Mostrar projetos reais com links para repositórios
- 📱 Oferecer uma experiência impecável em todos os dispositivos

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia     | Descrição                       |
|----------------|---------------------------------|
| **HTML5**      | Estrutura semântica e acessível |
| **CSS3**       | Estilização com variáveis, flexbox, grid e animações |
| **JavaScript** | Interatividade, menu mobile e validação de formulário |
| **Formspree**  | Backend para envio de formulários (sem servidor) |
| **Netlify**    | Hospedagem e deploy contínuo |
| **Git**        | Controle de versão |

---

## 📁 Estrutura de Pastas

```
portfolio/
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css          # Arquivo principal (importa todos)
│   │   ├── variables.css      # Variáveis CSS (cores, espaçamentos)
│   │   ├── reset.css          # Reset CSS
│   │   ├── base.css           # Estilos base
│   │   ├── global.css         # Estilos globais (container, buttons)
│   │   ├── typography.css     # Tipografia
│   │   ├── header.css         # Header e navegação desktop
│   │   ├── mobile-menu.css    # Menu mobile
│   │   ├── animations.css     # Animações e keyframes
│   │   ├── responsive.css     # Responsividade geral
│   │   ├── about.css          # Seção Sobre
│   │   ├── skills.css         # Seção Habilidades
│   │   ├── projects.css       # Seção Projetos
│   │   ├── contact.css        # Seção Contato
│   │   └── footer.css         # Rodapé
│   ├── js/
│   │   └── script.js          # JavaScript principal
│   └── img/
│       ├── foto-perfil.jpg
│       └── projects/
│           ├── barber-hub.jpg
│           ├── weather-app.jpg
│           └── auth-system.jpg
└── README.md
```

---

## 🎨 Features

### ✅ Design
- Layout moderno e limpo
- Paleta de cores profissional (tons de marrom e bege)
- Animações suaves e interativas
- Design responsivo (Mobile First)
- Tipografia elegante (Poppins + Merriweather)

### ✅ Funcionalidades
- Menu mobile com animação slide-in
- Scroll suave entre seções
- Link ativo baseado na seção visível (Scroll Spy)
- Formulário de contato com validação em tempo real
- Integração com Formspree para envio de emails
- Header com efeito de scroll (blur e sombra)
- Animações de entrada com Intersection Observer
- Galeria de projetos com cards interativos

### ✅ Acessibilidade
- Atributos ARIA para navegação
- Focus trap no menu mobile
- Suporte completo para teclado (ESC, Tab)
- Labels descritivos nos formulários
- Contraste de cores adequado (WCAG)
- Preferência por movimento reduzido (`prefers-reduced-motion`)
- Skip link para navegação por teclado

### ✅ SEO
- Meta tags Open Graph
- Meta description e keywords otimizadas
- Estrutura semântica (header, main, section, article)
- URLs amigáveis
- Dados estruturados (JSON-LD)

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Editor de código (VS Code, Sublime, etc.)
- Git (opcional)

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/fernandocostamabundadev/portfolio.git
cd portfolio
```

2. **Abra no navegador**
```bash
# Clique duas vezes no arquivo index.html
# Ou use o Live Server do VS Code
```

3. **Edite o código**
```bash
# Abra no seu editor favorito
code .
```

---

## 📱 Responsividade

| Breakpoint         | Dispositivo      | Ajustes                      |
|--------------------|------------------|------------------------------|
| **> 1200px**       | Desktop          | Layout completo com 2 colunas |
| **992px - 1199px** | Tablets          | Ajustes de grid e espaçamento |
| **768px - 991px**  | Tablets pequenos | Menu mobile ativado           |
| **576px - 767px**  | Mobile grande    | Layout em coluna única        |
| **< 576px**        | Mobile           | Layout otimizado para telas pequenas |

---

## 🔧 Configuração do Formulário

O formulário usa **Formspree** para envio de emails.

1. Crie uma conta em [formspree.io](https://formspree.io)
2. Crie um novo formulário
3. Substitua a URL no `script.js`:

```javascript
// script.js - linha 95
const FORMSPREE_URL = 'https://formspree.io/f/seu-id-aqui';
```

---

## 📦 Deploy

### Netlify (Recomendado)
```bash
# 1. Faça login no Netlify
# 2. Conecte seu repositório GitHub
# 3. Configure o build:
#    - Build command: (nenhum, é HTML estático)
#    - Publish directory: ./
# 4. Clique em Deploy
```

### Vercel
```bash
# Instale o Vercel CLI
npm install -g vercel

# Faça o deploy
vercel
```

### GitHub Pages
```bash
# 1. Vá para Settings > Pages
# 2. Selecione a branch main
# 3. Clique em Save
# 4. Acesse: https://fernando-mabunda.github.io/portfolio
```

---

## 🎯 Próximas Melhorias

- [ ] Adicionar blog com posts técnicos
- [ ] Implementar dark mode
- [ ] Adicionar testes automatizados
- [ ] Otimizar imagens com WebP
- [ ] Adicionar PWA (Progressive Web App)
- [ ] Implementar analytics
- [ ] Adicionar animações com scroll
- [ ] Criar versão em inglês

---

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos:

1. Fork o projeto
2. Crie sua branch: `git checkout -b feature/nova-feature`
3. Commit: `git commit -m 'Add: nova feature'`
4. Push: `git push origin feature/nova-feature`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📬 Contato

- **Autor**: Fernando C. Mabunda
- **Email**: fernando.mabunda@email.com
- **LinkedIn**: [linkedin.com/in/fernando-mabunda](https://linkedin.com/in/fernando-mabunda)
- **GitHub**: [github.com/fernando-mabunda](https://github.com/fernandocostamabundadev)
- **Portfólio**: [fernandomabunda.dev](https://fernandomabunda.dev)
- **WhatsApp**: (+258) 84 53 84 097

---

## Agradecimentos

- [Google Fonts](https://fonts.google.com) - Fontes Poppins e Merriweather
- [Font Awesome](https://fontawesome.com) - Ícones
- [Formspree](https://formspree.io) - Backend de formulários
- [Netlify](https://netlify.com) - Deploy gratuito
- [Pexels](https://pexels.com) - Imagens gratuitas
- [MDN Web Docs](https://developer.mozilla.org) - Documentação

---

## 📊 Status do Projeto

![Status](https://img.shields.io/badge/status-ativo-success)
![Versão](https://img.shields.io/badge/version-1.0.0-blue)
![Licença](https://img.shields.io/badge/license-MIT-green)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Responsivo](https://img.shields.io/badge/responsivo-sim-brightgreen)
![Acessível](https://img.shields.io/badge/acessível-sim-brightgreen)

---

## 🖥️ Visualização

### Desktop
![Desktop Preview](./assets/img/preview-desktop.png)

### Mobile
![Mobile Preview](./assets/img/preview-mobile.png)

### Tablet
![Tablet Preview](./assets/img/preview-tablet.png)

---

## 📱 Teste de Responsividade

| Dispositivo   | Tamanho        | Status |
|---------------|----------------|--------|
| Desktop       | > 1200px       | ✅     |
| Laptop        | 992px - 1199px | ✅     |
| Tablet        | 768px - 991px  | ✅     |
| Mobile Grande | 576px - 767px  | ✅     |
| Mobile        | < 576px        | ✅     |

---

**Feito com dedicacao por [Fernando C. Mabunda](https://github.com/fernando-mabunda)**

---

## 🏆 Diferenciais do Projeto

- ✅ **Código modularizado** - CSS dividido em arquivos específicos
- ✅ **Mobile First** - Prioridade para dispositivos móveis
- ✅ **Acessível** - Segue diretrizes WCAG
- ✅ **Performático** - Otimizado para carregamento rápido
- ✅ **SEO Ready** - Meta tags e dados estruturados
- ✅ **Manutenível** - Código limpo e organizado
- ✅ **Profissional** - Design e conteúdo de alto nível

---

## 📝 Notas do Desenvolvedor

Este projeto foi desenvolvido com paixão e dedicação, buscando entregar uma experiência digital que reflita minha personalidade e habilidades técnicas. Cada detalhe foi pensado para causar uma boa impressão e facilitar o contato com potenciais clientes e recrutadores.

---

**© 2026 Fernando C. Mabunda - Todos os direitos reservados**
```