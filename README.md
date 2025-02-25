# 🚀 Testes Automatizados - Adapt Liviu

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
│   │   ├── cadastro.spec.js             # Testes do formulário de cadastro
│   │   ├── Confira os Planos.cy.js      # Testes para verificação dos planos
│   │   ├── Fala conosco correto.cy.js   # Teste de envio correto do formulário de contato
│   │   ├── Fala conosco incorreto.cy.js # Teste de envio incorreto do formulário de contato
│   │   └── Saiba mais.cy.js             # Testes da funcionalidade "Saiba Mais"
│   └── support/
│       ├── commands.js                  # Comandos customizados (opcional)
│       └── e2e.js                       # Configuração global para testes e2e (Cypress 10+)
├── .gitignore                            # Arquivos e pastas ignorados pelo Git
├── cypress.config.js                      # Configuração do Cypress (Cypress 10+)
├── package.json                           # Gerenciador de dependências e scripts do projeto
├── package-lock.json                      # Arquivo de bloqueio de versões do npm
├── README.md                              # Documentação do projeto
└── node_modules/                          # Dependências instaladas (ignorado pelo Git)


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






   
