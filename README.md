# Livraria API – Backend REST com Node.js, Express e MongoDB

# Integrantes
- Ana Clara Lima — 24214290070 — responsável pelos CRUDs de Livro, Estoque e Fornecedor e README.md.
- Luíza Eduarda Batista - 24214290026 — responsável pelos CRUDs de Funcionário, Departamento, Cargo, Pedido, e Issues do GitHub.
- Ana Carolina Rosendo - 24214290018 — responsável pelo CRUDs de Cliente, Venda, Item e a Documentação Postman.

# GIT USERS
- Ana Clara - commit-ana
- Luíza Eduarda - Lu-2112
- Ana Carolina - carolinaarosendo

# Tecnologias Utilizadas
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Yup
- Dotenv
- Git & GitHub
- Postman

# Descrição do Sistema

A Livraria API é um sistema backend desenvolvido para gerenciar os principais processos de uma livraria.
O projeto implementa CRUDs completos, relacionamentos entre collections, validação de dados, persistência em MongoDB Atlas e documentação no Postman.

O sistema contempla operações essenciais como cadastro de livros, controle de estoque, registro de fornecedores, além de entidades complementares como clientes, pedidos, cargos, vendas, itens, departamento e funcionários.
O objetivo é aplicar práticas profissionais de desenvolvimento backend, seguindo padrões REST, organização modular e versionamento Git colaborativo.

# Funcionalidades Implementadas

-Cadastro, listagem, atualização e remoção de livros
-Cadastro de fornecedores e vínculo com livros
-Controle de estoque
-Cadastro de clientes com CPF
-Criação de pedidos relacionados a clientes
-Itens de pedido vinculados a produtos (livros)
-Cadastro de editoras
-Validações com Yup e Mongoose
-Estrutura modular de rotas, controllers, models e validators
-Documentação completa no Postman
-Conexão segura com o MongoDB Atlas via .env

# Lista de Endpoints com Exemplos

| Método | Rota          | Descrição       |
| ------ | ------------- | --------------- |
| POST   | `/livros`     | Cadastrar livro |
| GET    | `/livros`     | Listar todos    |
| GET    | `/livros/:id` | Buscar por ID   |
| PUT    | `/livros/:id` | Atualizar       |
| DELETE | `/livros/:id` | Remover         |

Exemplos:
{
  "titulo": "A Vida Invisível",
  "autor": "V. Schwab",
  "preco": 45.90,
  "categoria": "6754eab123456",
  "fornecedor": "678ac8910abcde",
  "editora": "675abd8721ff21"
}

# Fornecedores
| Método | Rota              |
| ------ | ----------------- |
| POST   | /fornecedores     |
| GET    | /fornecedores     |
| GET    | /fornecedores/:id |
| PUT    | /fornecedores/:id |
| DELETE | /fornecedores/:id |

- Outras entidades seguem a mesma estrutura CRUD:

/clientes
/pedidos
/itens
/estoque
/fornecedor
/funcionarios
/cargo
/departamentos
/vendas

#  Breve Descrição das Collections e Relacionamentos

modificar****

✔ Livro
Relacionado com: Fornecedor
Relacionado com: ItemPedido e Estoque

✔ Fornecedor
Fornece um ou vários livros


# Diagrama de Modelagem

modificar ***
![Diagrama do Banco de Dados](./docs/diagrama-livraria.png)

# Instalação, Configuração e Execução
- 1️º Clonar o repositório
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
cd NOME_DO_REPOSITORIO

- 2️º Instalar dependências
npm install

- 3️º Configurar variáveis de ambiente
Criar arquivo .env:
DB_HOST=clusterdb1.sai4tem.mongodb.net
DB_USER=claralimadb
DB_PASS=SUA_SENHA
DB_NAME=livrariaDB
PORT=3000

4️º Executar o servidor
npm start

# Comunicação com o Banco de Dados

A comunicação com o MongoDB Atlas é feita usando:
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

- O Mongoose gerencia:
-conexão
-schemas
-validações
-interações CRUD

# Descrição Detalhada das Contribuições
Ana Lima
modificar ***
Desenvolvimento completo das collections:

Livro
Fornecedor
Estoque

Implementação dos CRUDs e rotas correspondentes

Criação de validações com Yup e Mongoose

Organização das pastas de rotas, controllers, validators e models

Documentação de endpoints no Postman

Parte principal do README.md

Resolução de issues:

CRUD Livro

CRUD Fornecedor

CRUD Estoque

Padronização das rotas

Conexão com o MongoDB Atlas

Membro 2

(preencher depois)

Membro 3

(preencher depois)

