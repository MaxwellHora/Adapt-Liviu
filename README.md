# 🚀 Testes Automatizados - Adapt Edtech

Este projeto tem como objetivo automatizar testes na plataforma Adapt Liviu como parte de um teste técnico para a vaga de QA.  

Os testes foram desenvolvidos utilizando Cypress para validar o formulário de cadastro e outras funcionalidades no site AdaptLiviu (https://adaptliviu.com.br).

---

## ⚙️ Tecnologias

- Cypress
- JavaScript
- Node.js


## Estrutura do Projeto


Adapt Liviu/
├── cypress/
│   ├── fixtures/
│   │   └── usuario.json                 # Dados de teste (JSON)
│   ├── e2e/
│   │   ├── cadastro.spec.js             # Testes do cadastro
│   │   ├── planos.cy.js                 # Testes para planos
│   │   ├── contato-correto.cy.js        # Teste de contato correto
│   │   ├── contato-incorreto.cy.js      # Teste de contato incorreto
│   │   └── saiba-mais.cy.js             # Testes "Saiba Mais"
│   └── support/
│       ├── commands.js                  # Comandos customizados
│       └── e2e.js                       # Configuração global para testes
├── .gitignore                            # Arquivos ignorados pelo Git
├── cypress.config.js                     # Configuração do Cypress
├── package.json                          # Gerenciador de dependências
├── package-lock.json                     # Bloqueio de versões do npm
├── README.md                             # Documentação do projeto
└── node_modules/                         # Dependências instaladas


## 🔧 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

Acessando a Pasata do Projeto:

    cd seu-repositorio

 Instale as dependências:
 
    npm install

## Executando os Testes

Interface Gráfica:  

    npx cypress open
    npm test

Linha de Comando:

    npx cypress run






   
