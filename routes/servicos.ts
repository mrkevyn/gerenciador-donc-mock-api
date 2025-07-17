import { FastifyInstance } from 'fastify';
import servicos from '../mocks/servicos';

export async function servicosRoutes(server: FastifyInstance) {
  server.get("/servicos/listar", async (request, reply) => {
    return reply.send(servicos);
  });

  server.get<{ Params: { id: string } }>("/servicos/:id", async (request, reply) => {
    const id = Number(request.params.id);
    const servico = servicos.find((s: any) => s.id === id);

    if (!servico) {
      return reply.status(404).send({ message: "Serviço não encontrado" });
    }

    return reply.send(servico);
  });

  server.post('/servico/cadastrar', async (request, reply) => {
  const novoServico = request.body as any; // ajuste o tipo conforme necessário

  // Gerar ID novo (exemplo simples)
  const maxId = servicos.length > 0 ? Math.max(...servicos.map(s => s.id)) : 0;
  novoServico.id = maxId + 1;

  // Adicionar ao mock
  servicos.push(novoServico);

  reply.status(201).send(novoServico);
});

server.put<{ Params: { id: string } }>('/servico/atualizar/:id', async (request, reply) => {
  const id = Number(request.params.id);
  const dadosAtualizados = request.body as any;

  const index = servicos.findIndex((s) => s.id === id);

  if (index === -1) {
    return reply.status(404).send({ message: 'Serviço não encontrado' });
  }

  // Atualizar os campos do serviço no mock
  servicos[index] = {
    ...servicos[index],
    ...dadosAtualizados,
    id: servicos[index].id // garante que o ID não seja alterado
  };

  return reply.send(servicos[index]);
});

server.get<{ Params: { id: string } }>('/servico/buscar/:id', async (request, reply) => {
  const id = Number(request.params.id);
  const servico = servicos.find((s) => s.id === id);

  if (!servico) {
    return reply.status(404).send({ message: 'Serviço não encontrado' });
  }

  return reply.send(servico);
});

}