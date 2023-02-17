import React, { useState } from "react";
import { Table, Form, Row, Col } from "react-bootstrap";

const COMMANDS = [
  {
    category: "Jogos",
    commands: [
      {
        name: "dsf",
        description: "Um desafio aleatório de verdade ou desafio.",
        parameters: "Nível (-18/+18)",
      },
      {
        name: "vdd",
        description: "Uma pergunta aleatória de verdade e desafio.",
        parameters: "Nível (-18/+18)",
      },
    ],
  },

  {
    category: "Informativos",
    commands: [
      {
        name: "ajuda",
        description: "Alguma dúvida sobre mim? Use esse comando!",
        parameters: "",
      },
      {
        name: "info",
        description: "Veja informações do servidor e usuário!",
        parameters: "user, user_id, server",
      },

      {
        name: "ping",
        description: "Gera uma imagem dinâmica sobre o sistema	",
        parameters: "",
      },
    ],
  },
  {
    category: "Reporte",
    commands: [
      {
        name: "sugestao",
        description:
          "Tem alguma ideia incrível ou sugestão para agregar a mim? Envie para agora!	",
        parameters: "ideia",
      },
    ],
  },

  {
    category: "Pesquisas",
    commands: [
      {
        name: "chatgpt",
        description: "NOVIDADE DO MOMENTO AGORA NO LUARZITO!!!",
        parameters: "mensagem",
      },
      {
        name: "is",
        description: "Image Search - Pesquise Imagens pelo nome",
        parameters: "query",
      },

      {
        name: "pir",
        description:
          "Pesquisa de Imagem Reversa, pesquise o conteúdo de uma imagem pelo link!",
        parameters: "link",
      },

      {
        name: "wiki",
        description: "Pesquise temros pela Wikipedia",
        parameters: "query",
      },
    ],
  },

  {
    category: "Usuários",
    commands: [
      {
        name: "avatar",
        description: "Veja seu avatar ou o de alguém.	",
        parameters: "usuario",
      },
      {
        name: "couple",
        description:
          "Veja fotos lado a lado, é ótimo para ver se a metadinha ficou realmente perfeita.",
        parameters: "fotoesquerda (usuário), fotodireita (usuário)",
      },

      {
        name: "ideia",
        description:
          "Está com algo em mente e deseja abrir uma votação? Use esse comando!",
        parameters: "ideia, destino (canal)",
      },
    ],
  },
];

const LuarzitoCommands = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredCommands = COMMANDS.filter((category) =>
    category.commands.some((command) =>
      command.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  ).filter((category) =>
    selectedCategory ? category.category === selectedCategory : true
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategorySelect = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <Form>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formSearch">
              <Form.Label>Pesquisar comando</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite aqui"
                onChange={handleSearch}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formCategory">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                as="select"
                value={selectedCategory}
                onChange={handleCategorySelect}
              >
                <option value="">Todas as categorias</option>
                {COMMANDS.map((category) => (
                  <option key={category.category} value={category.category}>
                    {category.category}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Table style={{marginTop: 20}} striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Comando</th>
            <th>Descrição</th>
            <th>Parâmetros</th>
          </tr>
        </thead>
        <tbody>
          {filteredCommands.map((category) =>
            category.commands.map((command) => (
              <tr key={command.name}>
                <td>{category.category}</td>
                <td><code>/{command.name}</code></td>
                <td>{command.description}</td>
                <td><code>{command.parameters}</code></td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default LuarzitoCommands;
