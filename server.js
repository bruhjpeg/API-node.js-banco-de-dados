import express from "express";
import { PrismaClient } from "./generated/prisma/";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

const users = [];

app.post("/usuarios", async (request, response) => {
  // funcoes assincronas precisam desse await na frente!
  // e toda vez que tiver await, a minha funcao precisa ser assincrona

  await prisma.user.create({
    data: {
      name: request.body.name,
      age: request.body.age,
      email: request.body.email,
    },
  });

  response.status(201).json(request.body);
});

app.get("/usuarios", (request, response) => {
  response.status(200).json(users);
});

app.listen(3000);

// Criar nossa API de usuarios

// Criar um usuario
// listar todos os usuarios
// Editar um usuario
// Deletar um usuario
