import express from "express";

const app = express();
app.use(express.json());

const users = [];

app.post("/usuarios", (request, response) => {
  users.push(request.body);

  response.send("Usuario criado com sucesso!!");
});

app.get("/usuarios", (request, response) => {
  response.json(users);
});

app.listen(3000);

// Criar nossa API de usuarios

// Criar um usuario
// listar todos os usuarios
// Editar um usuario
// Deletar um usuario
