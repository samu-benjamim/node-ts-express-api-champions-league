# ⚽ API Champions League

API desenvolvida em **Node.js + Express + TypeScript** para gerenciar jogadores e clubes da Champions League.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Cors](https://www.npmjs.com/package/cors)

## 📂 Estrutura do Projeto

```
src/
 ├── app.ts                # Configuração do servidor
 ├── routes/               # Definição das rotas
 ├── controllers/          # Camada de controle
 ├── services/             # Regras de negócio
 ├── models/               # Modelos de dados
 └── utils/                # Funções auxiliares
```

## 📌 Endpoints

### Players

- `GET /api/players` → Lista todos os jogadores
- `GET /api/players/:id` → Retorna um jogador específico
- `POST /api/players` → Cria um novo jogador
- `PATCH /api/players/:id` → Atualiza estatísticas de um jogador
- `DELETE /api/players/:id` → Remove um jogador

### Clubs

- `GET /api/clubs` → Lista todos os clubes
- `GET /api/clubs/:id` → Retorna informações de um clube

## 🤝 Contribuição

Sinta-se à vontade para abrir issues e pull requests.
