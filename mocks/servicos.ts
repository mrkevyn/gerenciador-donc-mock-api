export default [
  {
    id: 1,
    nome: "Emissão de Carteira de Identidade",
    descricao: "Serviço destinado à emissão da primeira e segunda via da carteira de identidade.",
    publicoDestinado: "Cidadãos brasileiros maiores de 5 anos.",
    formasSolicitacao: "Presencialmente nas unidades do Poupatempo ou agendamento online.",
    documentacaoNecessaria: "Certidão de nascimento ou casamento original, comprovante de residência, foto 3x4 recente.",
    custos: "Gratuito para a primeira via. Segunda via: R$ 42,00.",
    etapas: "1. Agendamento, 2. Atendimento presencial, 3. Entrega do documento.",
    requisitos: "Ser brasileiro nato ou naturalizado, possuir documentos originais.",
    formasAcompanhamento: "Acompanhamento pelo site ou aplicativo do Poupatempo.",
    prazoAtendimento: "Até 10 dias úteis após o atendimento presencial.",
    prioridades: "Atendimento prioritário para idosos, gestantes e pessoas com deficiência.",
    horarioAtendimento: "Segunda a sexta das 8h às 17h, sábado das 8h às 13h.",
    legislacao: "Lei nº 7.116/1983 - Dispõe sobre a Carteira de Identidade.",
    orgao: { nome: "Secretaria municipal" }, //select
    categoria: { nome:"Viva cidadão" }, //select
    setorLotacao: "Departamento de Identificação Civil",
    modeloRequerimento: "modelo-identidade.pdf",
    persona: "Cidadão", //Checkbox
    visivel: true, // radio
    ativo: true //radio
  },
  {
    id: 2,
    nome: "Solicitação de Alvará de Funcionamento",
    descricao: "Serviço para obtenção do alvará de funcionamento de empresas e estabelecimentos comerciais.",
    publicoDestinado: "Empreendedores e empresas de pequeno, médio e grande porte.",
    formasSolicitacao: "Via portal da prefeitura com envio de documentação digital.",
    documentacaoNecessaria: "Contrato social, CNPJ, comprovante de endereço do estabelecimento.",
    custos: "Taxa de emissão de R$ 120,00.",
    etapas: "1. Cadastro no portal, 2. Envio de documentos, 3. Análise, 4. Emissão do alvará.",
    requisitos: "Estabelecimento regularizado, atividade permitida em zona de atuação.",
    formasAcompanhamento: "Portal do contribuinte com login e senha.",
    prazoAtendimento: "Em até 15 dias úteis.",
    prioridades: "Processamento prioritário para MEIs e empresas de baixo risco.",
    horarioAtendimento: "Atendimento online 24h. Suporte presencial de segunda a sexta, das 9h às 16h.",
    legislacao: "Lei Complementar nº 123/2006 - Estatuto da Microempresa.",
    orgao: { nome: "Secretaria ficticia" },
    categoria: { nome: "Secretaria da fazenda" },
    setorLotacao: "Secretaria Municipal da Fazenda",
    modeloRequerimento: "modelo-alvara.pdf",
    persona: "Empreendedor",
    visivel: true,
    ativo: true
  }
];
