const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const areas = [
  {
    id: 'id-01',
    rotulo: 'Avicultura',
    cor: '#ad6fea',
  }, {
    id: 'id-02',
    rotulo: 'Pecuária de corte',
    cor: '#7cd851',
  }, {
    id: 'id-03',
    rotulo: 'Pecuária de leite',
    cor: '#75d1e8',
  }, {
    id: 'id-04',
    rotulo: 'Suinocultura',
    cor: '#6f87ea',
  }
];

const fazendas = [
  {
    id: 'id-1',
    area: areas[3],
    dataVistoria: '15/07/2019',
    nome: 'Souza & Silva',
    cnpj: '65.921.065/0001-15',
    contato: '(48) 99852-9051',
    proprietario: 'José de Souza',
    responsavel: 'Juliano da Silva',
    descricao: 'A fazenda trabalha no ramo a mais de 50 anos, possui diversas coperativas afiliadas. Atualmente, atua no ramo de Suinocultura possuindo diversas granjas em todo o Brasil.',
    vistorias: [
      {
        id: 'id-v1',
        data: '01/06/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria, os animais encontravam-se saudáveis.',
      }, {
        id: 'id-v2',
        data: '01/05/2019',
        laudo: 'Foi diagnosticado uma doença infectocontagiosa em 4 animais, estes foram sacrificados.',
      }, {
        id: 'id-v3',
        data: '11/04/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }, {
        id: 'id-v4',
        data: '22/03/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }
    ]
  }, {
    id: 'id-2',
    area: areas[0],
    dataVistoria: '22/08/2019',
    nome: 'Copal',
    cnpj: '55.232.594/0001-58',
    contato: '(48) 99152-1235',
    proprietario: 'Márcio silveira',
    responsavel: 'Odair da luz',
    descricao: 'A fazenda trabalha no ramo a mais de 50 anos, possui diversas coperativas afiliadas. Atualmente, atua no ramo de Suinocultura possuindo diversas granjas em todo o Brasil.',
    vistorias: [
      {
        id: 'id-v3',
        data: '11/04/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }, {
        id: 'id-v4',
        data: '22/03/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }
    ]
  }, {
    id: 'id-3',
    area: areas[2],
    dataVistoria: '19/07/2019',
    nome: 'Aurora',
    cnpj: '55.232.594/0001-58',
    contato: '(48) 91352-1215',
    proprietario: 'Luis Fernando Marques',
    responsavel: 'Maria Cardoso',
    descricao: 'A fazenda trabalha no ramo a mais de 50 anos, possui diversas coperativas afiliadas. Atualmente, atua no ramo de Suinocultura possuindo diversas granjas em todo o Brasil.',
    vistorias: [
      {
        id: 'id-v1',
        data: '01/06/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria, os animais encontravam-se saudáveis.',
      }, {
        id: 'id-v3',
        data: '21/04/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }, {
        id: 'id-v4',
        data: '29/03/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }
    ]
  }, {
    id: 'id-4',
    area: areas[1],
    dataVistoria: '01/08/2019',
    nome: 'Perdigão',
    cnpj: '35.935.656/0001-80',
    contato: '(48) 3245-5412',
    proprietario: 'Marli Felomena',
    responsavel: 'Pedro Henrique',
    descricao: 'A fazenda trabalha no ramo a mais de 50 anos, possui diversas coperativas afiliadas. Atualmente, atua no ramo de Suinocultura possuindo diversas granjas em todo o Brasil.',
    vistorias: [
      {
        id: 'id-v1',
        data: '01/07/2019',
        laudo: 'Alguns animais foram diagnosticados com febre durante a vistoria.',
      }, {
        id: 'id-v3',
        data: '21/04/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }, {
        id: 'id-v4',
        data: '29/03/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }
    ]
  }, {
    id: 'id-5',
    area: areas[3],
    dataVistoria: '02/08/2019',
    nome: 'Sadia',
    cnpj: '48.000.094/0001-25',
    contato: '(48) 3345-2355',
    proprietario: 'Josué Ramires',
    responsavel: 'Carlos Roberto',
    descricao: 'A fazenda trabalha no ramo a mais de 50 anos, possui diversas coperativas afiliadas. Atualmente, atua no ramo de Suinocultura possuindo diversas granjas em todo o Brasil.',
    vistorias: [
      {
        id: 'id-v1',
        data: '14/07/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }, {
        id: 'id-v4',
        data: '29/03/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }, {
        id: 'id-v6',
        data: '09/02/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }, {
        id: 'id-v5',
        data: '11/01/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }
    ]
  }, {
    id: 'id-6',
    area: areas[0],
    dataVistoria: '22/08/2019',
    nome: 'Seara',
    cnpj: '65.253.687/0001-12',
    contato: '(48) 3399-1231',
    proprietario: 'Geraldo Da Silva',
    responsavel: 'Elizabete de Lurdes',
    descricao: 'A fazenda trabalha no ramo a mais de 50 anos, possui diversas coperativas afiliadas. Atualmente, atua no ramo de Suinocultura possuindo diversas granjas em todo o Brasil.',
    vistorias: [
      {
        id: 'id-v1',
        data: '14/07/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }, {
        id: 'id-v4',
        data: '29/03/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }, {
        id: 'id-v6',
        data: '09/02/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }, {
        id: 'id-v5',
        data: '11/01/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }
    ]
  }, {
    id: 'id-7',
    area: areas[2],
    dataVistoria: '02/08/2019',
    nome: 'Copacol',
    cnpj: '63.251.877/0001-75',
    contato: '(48) 3314-6644',
    proprietario: 'Ana Clara Cardoso',
    responsavel: 'Leonardo Vasconselo',
    descricao: 'A fazenda trabalha no ramo a mais de 50 anos, possui diversas coperativas afiliadas. Atualmente, atua no ramo de Suinocultura possuindo diversas granjas em todo o Brasil.',
    vistorias: [
      {
        id: 'id-v1',
        data: '14/07/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }, {
        id: 'id-v4',
        data: '29/03/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }, {
        id: 'id-v6',
        data: '09/02/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }, {
        id: 'id-v5',
        data: '11/01/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }
    ]
  }, {
    id: 'id-8',
    area: areas[3],
    dataVistoria: '02/08/2019',
    nome: 'SuinoExpress',
    cnpj: '16.638.497/0001-08',
    contato: '(48) 3394-3122',
    proprietario: 'Daniel Varella',
    responsavel: 'Taynan Rodrigues',
    descricao: 'A fazenda trabalha no ramo a mais de 50 anos, possui diversas coperativas afiliadas. Atualmente, atua no ramo de Suinocultura possuindo diversas granjas em todo o Brasil.',
    vistorias: [
      {
        id: 'id-v1',
        data: '14/07/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }, {
        id: 'id-v4',
        data: '29/03/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }, {
        id: 'id-v6',
        data: '09/02/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }, {
        id: 'id-v5',
        data: '11/01/2019',
        laudo: 'Não foi encontrado nenhuma inconformidade durante a vistoria.',
      }
    ]
  }
];

app.post('/login', (req, res) => {
  const { usuario, senha } = req.body;

  if (usuario === 'admin' && senha === 'admin1') {
      res.sendStatus(200);
  } else {
      res.sendStatus(401);
  };
});

app.get('/fazendas/:filtro?', (req, res) => {
  const filtro = JSON.parse(req.params.filtro);
  let listaDeFazendas = fazendas;

  listaDeFazendas.sort((a,b) => {
    if (filtro.tipoDeOrdenacao === -1) {
      return parseStringToDate(b.dataVistoria) - parseStringToDate(a.dataVistoria);
    } else {
      return parseStringToDate(a.dataVistoria) - parseStringToDate(b.dataVistoria);
    }
  });

  if (filtro.area) {
    listaDeFazendas = listaDeFazendas.filter(fazenda => fazenda.area.id === filtro.area);
  }
  
  if (filtro.busca) {
    listaDeFazendas = listaDeFazendas.filter(fazenda => JSON.stringify(fazenda).indexOf(filtro.busca) >= 0);
  }

  res.json({
    fazendas: listaDeFazendas,
    paginaAtual: 0,
    totalDePaginas: 1,
  });
});

const parseStringToDate = (data) => {
  data = data.split('/');
  return new Date(data[2], data[1], data[0])
}

app.get('/areas', (req, res) => {
  res.json({areas});
});

app.listen(3000, console.log("running.... (3000) "))