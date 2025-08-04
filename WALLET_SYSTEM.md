# Sistema de Conexão de Carteira - Inteli Blockchain

## Visão Geral

O sistema de conexão de carteira foi implementado com funcionalidades completas para conectar e gerenciar carteiras Web3. O sistema suporta múltiplas redes blockchain e oferece uma experiência de usuário moderna e intuitiva.

## Funcionalidades Implementadas

### 🔗 Conexão de Carteira
- **Detecção automática do MetaMask**: Verifica se a extensão está instalada
- **Conexão persistente**: Mantém a conexão mesmo após recarregar a página
- **Múltiplas redes**: Suporte para Ethereum, Polygon, BSC e suas testnets
- **Tratamento de erros**: Mensagens claras para diferentes cenários de erro

### 💰 Informações da Carteira
- **Endereço da carteira**: Exibição formatada (abreviada e completa)
- **Saldo em tempo real**: Mostra o saldo atual da carteira
- **Informações da rede**: Identifica automaticamente a rede conectada
- **Símbolo da moeda**: Exibe o símbolo correto baseado na rede

### 🎨 Interface do Usuário
- **Design responsivo**: Funciona em desktop e mobile
- **Tema escuro/claro**: Adapta-se ao tema do site
- **Animações suaves**: Transições e efeitos visuais
- **Modal informativo**: Detalhes completos da carteira

### 🔄 Funcionalidades Avançadas
- **Mudança de conta**: Detecta automaticamente mudanças de conta
- **Mudança de rede**: Atualiza informações quando a rede muda
- **Copiar endereço**: Funcionalidade para copiar o endereço completo
- **Desconexão segura**: Remove dados da carteira do localStorage

## Redes Suportadas

| Chain ID | Nome da Rede | Símbolo |
|----------|--------------|---------|
| 1 | Ethereum Mainnet | ETH |
| 5 | Goerli Testnet | ETH |
| 11155111 | Sepolia Testnet | ETH |
| 137 | Polygon | MATIC |
| 80001 | Mumbai Testnet | MATIC |
| 56 | BSC | BNB |
| 97 | BSC Testnet | BNB |

## Como Usar

### 1. Conectar Carteira
1. Clique no botão "Conectar" no canto superior direito
2. Se o MetaMask não estiver instalado, uma mensagem de erro será exibida
3. Se o MetaMask estiver instalado, uma janela de conexão será aberta
4. Aprove a conexão no MetaMask

### 2. Visualizar Informações
1. Após conectar, o endereço e saldo serão exibidos
2. Clique no card da carteira para abrir o modal com detalhes completos
3. No modal, você pode:
   - Ver o endereço completo
   - Copiar o endereço para a área de transferência
   - Ver o saldo detalhado
   - Ver informações da rede

### 3. Desconectar
1. Clique no card da carteira para abrir o modal
2. Clique no botão "Desconectar" no modal
3. A carteira será desconectada e os dados removidos

## Estados da Interface

### Não Conectado
- Botão "Conectar" com ícone de carteira
- Estado de carregamento durante a conexão

### Conectado
- Card com endereço abreviado e saldo
- Ícone de carteira no card
- Modal com informações detalhadas

### Estados de Erro
- MetaMask não instalado
- Conexão cancelada pelo usuário
- Erro de conexão genérico

## Tecnologias Utilizadas

- **React**: Framework principal
- **ethers.js**: Biblioteca para interação com Ethereum
- **Font Awesome**: Ícones
- **CSS Custom Properties**: Sistema de temas
- **localStorage**: Persistência de dados

## Estrutura do Código

### Estados Principais
```javascript
const [isWalletConnected, setIsWalletConnected] = useState(false);
const [walletAddress, setWalletAddress] = useState('');
const [walletBalance, setWalletBalance] = useState('');
const [networkInfo, setNetworkInfo] = useState(null);
const [showWalletModal, setShowWalletModal] = useState(false);
```

### Funções Principais
- `connectWallet()`: Inicia o processo de conexão
- `setupWalletConnection()`: Configura a conexão após aprovação
- `disconnectWallet()`: Remove a conexão
- `getNetworkInfo()`: Obtém informações da rede
- `copyToClipboard()`: Copia endereço para área de transferência

## Eventos do MetaMask

O sistema escuta os seguintes eventos do MetaMask:
- `accountsChanged`: Quando o usuário muda de conta
- `chainChanged`: Quando o usuário muda de rede

## Segurança

- **Não armazena chaves privadas**: Apenas o endereço público
- **Persistência limitada**: Apenas o endereço é salvo no localStorage
- **Validação de rede**: Verifica se a rede é suportada
- **Tratamento de erros**: Mensagens claras para o usuário

## Responsividade

O sistema é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- **Desktop**: Layout horizontal com todas as informações visíveis
- **Tablet**: Layout adaptado com informações condensadas
- **Mobile**: Layout vertical com modal otimizado

## Personalização

### Cores e Temas
O sistema usa variáveis CSS que se adaptam automaticamente ao tema:
```css
--bg-primary-light/dark
--text-primary-light/dark
--accent-primary-light/dark
```

### Adicionar Novas Redes
Para adicionar suporte a novas redes, edite o objeto `networks` na função `getNetworkInfo()`:

```javascript
const networks = {
  1: { name: 'Ethereum Mainnet', symbol: 'ETH' },
  // Adicione novas redes aqui
  1234: { name: 'Nova Rede', symbol: 'TOKEN' }
};
```

## Próximas Melhorias

- [ ] Suporte a múltiplas carteiras (WalletConnect, etc.)
- [ ] Histórico de transações
- [ ] Notificações de transações
- [ ] Integração com contratos inteligentes
- [ ] Suporte a NFTs
- [ ] Testes automatizados

## Suporte

Para dúvidas ou problemas com o sistema de carteira, entre em contato com a equipe do Inteli Blockchain. 