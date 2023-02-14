const data = [
    {
      category: "Nível 1",
      questions: [
        {
          question: "O que é a Nota Fiscal Eletrônica?",
          options: [
            "Documento impresso que valida apenas a prestação de serviços",
            "Documento eletrônico que formaliza a venda de produtos e a prestação de serviços",
            "Documento de papel que recebo quando compro livros no Submarino, que não é válido para compras no varejo",
            "Documento eletrônico usado por pequenas e médias empresas para registrar vendas",
          ],
          answer: "Documento eletrônico que formaliza a venda de produtos e a prestação de serviços",
        },
        {
          question: "Quais são os principais tipos de nota fiscal de venda?",
          options: [
            "Nota Fiscal de Serviço Eletrônica (NFS-e), Nota Fiscal de Consumidor Eletrônica (NFC-e), Nota Fiscal de Produto Eletrônica (NF-e) e Nota Fiscal de Pescador Eletrônica (NFP-e)",
            "Nota Fiscal de Serviço Eletrônica (NFS-e), Nota Fiscal de Consumidor Eletrônica (NFC-e) e Nota Fiscal de Produto Eletrônica (NF-e)",
            "Nota Fiscal de Produto Eletrônica (NF-e), Nota Fiscal de Alimentos Eletrônica (NFA-e) e Nota Fiscal de Importação",
            "Manifesto de Documentos Fiscais Eletrônicos (MDF-e), Conhecimento de Transporte Eletrônico (CT-e), Nota Fiscal Triangular e Nota Fiscal de Remessa"
          ],
          answer: "Nota Fiscal de Serviço Eletrônica (NFS-e), Nota Fiscal de Consumidor Eletrônica (NFC-e) e Nota Fiscal de Produto Eletrônica (NF-e)",
        },
        {
          question: "O que é o DANFE?",
          options: [
            "É o XML da Nta Fiscal Eletrônica.", 
            "É a mesma coisa que a Nota Fiscal Eletrônica.", 
            "Nota Fiscal que contém QR Code", 
            "Representação gráfica da Nota Fiscal Eletrônica (Versão Impressa)."
          ],
          answer: "Representação gráfica da Nota Fiscal Eletrônica (Versão Impressa).",
        },
        {
          question: "Quais são as formas possíveis de emitir a Nota Fiscal Eletrônica?",
          options: [
            "Emissão normal e emissão em contingência.", 
            "Emissão online e emissão em papel.", 
            "Só é possível emitir em contingência.", 
            "Emissão normal"],
          answer: "Emissão normal e emissão em contingência.",
        },
        {
          question:
            "Quais são as consequências de não emitir nota fiscal?",
          options: [
            "Multas", 
            "Multas, processos, perda de credibilidade no mercado e, em casos mais sérios, prisão", 
            "Perda de credibilidade no mercado e falta de capital de giro", 
            "Nenhuma, pois a sonegação de impostos é liberada em nosso país"],
          answer: "Multas, processos, perda de credibilidade no mercado e, em casos mais sérios, prisão",
          // tip: "",
        },
      ],
    },
    {
      category: "Nível 2",
      questions: [
        {
          question: "Quem deve emitir nota fiscal eletrônica?",
          options: [
            "MEI (Microempreendedor Individual, ME (Microempresa) e Empresa do Lucro Real", 
            "Empresa do Lucro Real e Empresa do Lucro Presumido", 
            "Pessoa física (em determinados casos) e Qualquer outro tipo de empresa que comercialize produto ou serviço.",
            "Todas as anteriores",
          ],
          answer: "Todas as anteriores",
          // tip: "",
        },
        {
          question: "O que é data de competência?",
          options: [
            "É o dia em que o serviço foi prestado", 
            "É a data de emissão", 
            "É a data que o documento foi impresso", 
            "É o dia em que a nota foi assinada"],
          answer: "É o dia em que o serviço foi prestado",
          tip: "Serviço",
        },
        {
          question: "O que é data de emissão?",
          options: [
            "É a data da alteração", 
            "É quando é gerada a chave", 
            "É o exato momento em que o documento foi enviado para o sistema da Prefeitura", 
            "Não tem data de emissão"],
          answer: "É o exato momento em que o documento foi enviado para o sistema da Prefeitura",
        },
      ],
    },
    {
      category: "Nível 3",
      questions: [
        {
          question: "O que é XML da NF-e?",
          options: [
            "É a versão impressa",
            "É o cupom fiscal",
            "É o email enviado para o cliente",
            "É a versão digital do documento que é padronizado em todo o Brasil.",
          ],
          answer: "É a versão digital do documento que é padronizado em todo o Brasil.",
        },
        {
          question: "O que é RPS?",
          options: [
            "Recibo Provisório de Venda",
            "Substituição permante da NF-e",
            "Substituição temporaria da NF-e",
            "RPS não pode ser convertido em nota fiscal",
          ],
          answer: "Substituição temporaria da NF-e",
          tip: "Recibo Provisório de Serviços",
        },
        {
          question: "O que é nota fiscal denegada?",
          options: [
            "É quando uma nota fiscal eletrônica é emitida.", 
            "É quando a Secretaria de Fazenda (Sefaz) identifica algum problema por parte do emitente ou do destinatário.", 
            "É quando a nota é enviado ao destinatário", 
            "É quando a nota é recebida pelo contribuinte."
          ],
          answer: "É quando a Secretaria de Fazenda (Sefaz) identifica algum problema por parte do emitente ou do destinatário.",
        },
        {
          question: "Que significa NF-e Rejeitada?",
          options: [
            "Significa que um dos campos preenchidos tem um erro.", 
            "significa que um dos campos preenchidos tem um erro..", 
            "Só é possível emitir em contingência.", 
            "Emissão normal"],
          answer: "Significa que um dos campos preenchidos tem um erro.",
        },
        {
          question:
            "Quais são as consequências de não emitir nota fiscal?",
          options: [
            "multas", 
            "multas, processos, perda de credibilidade no mercado e, em casos mais sérios, prisão", 
            "perda de credibilidade no mercado e falta de capital de giro", 
            "Nenhuma, pois a sonegação de impostos é liberada em nosso país"],
          answer: "multas, processos, perda de credibilidade no mercado e, em casos mais sérios, prisão",
        },
      ],
    },
  ];
  
  export default data;