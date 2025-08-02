# Inteli Blockchain Website

Um site moderno e responsivo para o Inteli Blockchain, desenvolvido com React e design Web3.

## 🚀 Características

- **Design Moderno**: Interface limpa e moderna com gradientes e animações
- **Dark/Light Mode**: Toggle entre modo escuro e claro
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Connect Wallet**: Botão funcional para conectar carteira (simulado)
- **Navegação Suave**: Scroll suave entre seções
- **Animações**: Efeitos visuais modernos e interativos

## 🎨 Seções

### Navbar
- Logo do Inteli Blockchain
- Links de navegação (Home, Parceiros, Conquistas)
- Toggle de tema (Dark/Light Mode)
- Botão Connect Wallet

### Hero Section
- Título principal com gradiente
- Subtítulo e descrição
- Animações de entrada

### Parceiros
- Grid responsivo com cards dos parceiros
- Ícones e descrições
- Efeitos hover

### Conquistas
- Estatísticas do clube
- Números impressionantes
- Cards com ícones

### Footer
- Logo e informações do projeto
- Copyright © 2025 Inteli Blockchain

## 🛠️ Tecnologias Utilizadas

- **React**: Framework JavaScript
- **CSS3**: Estilização moderna com variáveis CSS
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia (Inter + JetBrains Mono)

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout completo com todos os elementos
- **Tablet**: Ajustes no grid e espaçamentos
- **Mobile**: Layout otimizado para telas pequenas

## 🎯 Funcionalidades

### Dark/Light Mode
- Toggle automático baseado na preferência do sistema
- Persistência da escolha no localStorage
- Transições suaves entre os modos

### Connect Wallet
- Simulação de conexão de carteira
- Estado visual de conectado/desconectado
- Animação de shimmer no hover

### Navegação
- Links ativos destacados baseados na seção atual
- Scroll suave entre seções
- Indicador visual de seção ativa

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd ib-club-website
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
cd client
npm start
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 📁 Estrutura do Projeto

```
ib-club-website/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── App.js          # Componente principal
│   │   ├── index.css           # Estilos globais
│   │   ├── index.html          # HTML base
│   │   └── index.js            # Ponto de entrada
│   └── package.json
├── package.json
└── README.md
```

## 🎨 Design System

### Cores
- **Light Mode**: Tons de azul e branco
- **Dark Mode**: Tons de preto e azul escuro
- **Gradientes**: Múltiplos gradientes para elementos especiais

### Tipografia
- **Inter**: Fonte principal para textos
- **JetBrains Mono**: Fonte monospace para elementos técnicos

### Componentes
- Cards com hover effects
- Botões com animações
- Gradientes de texto
- Sombras e bordas arredondadas

## 🔧 Personalização

### Cores
As cores podem ser alteradas editando as variáveis CSS em `client/src/index.css`:

```css
:root {
  --bg-primary-light: #ffffff;
  --accent-primary-light: #3b82f6;
  /* ... outras variáveis */
}
```

### Conteúdo
O conteúdo pode ser modificado editando os arrays `partners` e `achievements` no arquivo `App.js`.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature
3. Fazer commit das suas mudanças
4. Fazer push para a branch
5. Abrir um Pull Request

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato com a equipe do Inteli Blockchain.

---

**Desenvolvido com ❤️ para o Inteli Blockchain** 