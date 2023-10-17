# Tabela do Braisleirão

Uma tabela do brasileirão, utilizando o framework de node.js Fastify e MongoDB como banco de dados para o backend service e React.js como framework no frontend.

### Status de desenvolvimento

* Backend:
    * Criando todos os testes 
* Frontend:
    * Aplicando estilização aos dados

### Tecnologias utilizadas

![Static Badge](https://img.shields.io/badge/Code-Node.js-grey?logo=Node.js&color=%233C873A)
![Static Badge](https://img.shields.io/badge/Code-JavaScript-grey?logo=JavaScript&color=%23f7df1e)
![Static Badge](https://img.shields.io/badge/Code-TypeScript-grey?logo=TypeScript&color=%23007acc)
![Static Badge](https://img.shields.io/badge/Code-React-grey?logo=React&color=%2361DBFB)
![Static Badge](https://img.shields.io/badge/Style-Bootstrap-grey?logo=Bootstrap&logoColor=%23684D95&color=%23684D95)

## Backend

Uma API do tipo Rest que é capaz de escrever, atualiazar e buscar dados em um bando de dados não relacional (MongoDB).

### Tabela de conteúdos

* [Pré-Requisitos](####Pré-Requisitos)
* [Instalação](####Instalação)
* [Modelo do Banco de Dados](####ModelodoBancodeDados)
* [Rotas](####Rotas)
* [Testes](####Testes)

#### Pré-Requisitos

- Node.js 18.x or higher
- Windows, macOS, or Linux operating system

#### Instalação

```
git clone https://github.com/JoaoFelipe4/tabela-brasileirao.git
cd tabela-brasileirao/Backend
npm install
```

#### Modelo do Banco de dados

O projeto contém 3 modelos, um para aramazenar as informações relativas à estádios utilizados no campeonato, outro com as informações dos times inscritos e outro com as informações de cada rodada, jogo a jogo.

![dbDiagram drawio](https://github.com/JoaoFelipe4/tabela-brasileirao/assets/142893060/13c1674b-d999-4cab-a0cf-d4b7263f2e42)

PayLoads

1- Novo Time

```
{
"nome":"Example Team",
"estadios": ["std1","std2"...]
}
```

2- Novo Estádio

```
{
	"nome":"Kleber Andrade",
	"cidade":"Cariacica",
	"estado":"Espirito Santo"
}
```

3- Nova Rodada

```
{
	"rodada":19,
	"1":{"team1":"Botafogo","score1":null,"team2":"Internacional","score2":null,"arena":null,"time":"2023-08-12T21:00:00"},
	"2":{"team1":"Atlético-MG","score1":null,"team2":"Bahia","score2":null,"arena":"Mineirão","time":"2023-08-13T11:00:00"},
	"3":{"team1":"Corinthians","score1":null,"team2":"Coritiba","score2":null,"arena":null,"time":"2023-08-13T16:00:00"},
	"4":{"team1":"Grêmio","score1":null,"team2":"Fluminense","score2":null,"arena":null,"time":"2023-08-13T16:00:00"},
	"5":{"team1":"América-MG","score1":null,"team2":"Goiás","score2":null,"arena":null,"time":"2023-08-13T16:00:00"},
	"6":{"team1":"Flamengo","score1":null,"team2":"São Paulo","score2":null,"arena":null,"time":"2023-08-13T18:30:00"},
	"7":{"team1":"Fortaleza","score1":null,"team2":"Santos","score2":null,"arena":null,"time":"2023-08-13T18:30:00"},
	"8":{"team1":"Palmeiras","score1":null,"team2":"Cruzeiro","score2":null,"arena":null,"time":"2023-08-14T19:00:00"},
	"9":{"team1":"Bragantino","score1":null,"team2":"Vasco","score2":null,"arena":null,"time":"2023-08-14T21:00:00"},
	"10":{"team1":"Athletico-PR","score1":null,"team2":"Cuiabá","score2":null,"arena":null,"time":"2023-08-15T20:00:00"}
}
```

4- Atualizar nome de time

```
{
	"updatedTeam":"new team",
	"nome":"old team"
}
```

5- Atualizar nome do estádio

```
{
	"updatedTeam":"new stadium name",
	"nome":"old stadium name"
}
```

6- Atualizar qualquer dado das rodadas
```
{
	"round":1,
	"game1": {"score1":4,...,"time":"2023-08-12T21:00:00"},
    .
    .
    .
	"game10": {"score1":0,...,"time":"2023-08-12T21:00:00"}
}
```

#### Rotas

Rota|PayLoad|Retorno
----|-------|-------
"/"|none|Retorna os dados de tabela e jogos do campeonato
"/newTeam"|1- Novo Time|none
"/newStadium"|2- Novo Estádio|none
"/newRound"|3- Nova Rodada|none
"/updateData/team"|4- Atualizar nome de time|none
"/updateData/stadium"|5- Atualizar nome do estádio|none
"/updateData/round"|6- Atualizar qualquer dado das rodadas|none


#### Testes

testes feitos utilizando a biblioteca "tap"

1 - teste de status da rota "/"

```
------------------|---------|----------|---------|---------|-----------------------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-----------------------------------
All files         |   55.01 |      100 |      50 |   55.01 |                                   
 backend          |   95.45 |      100 |     100 |   95.45 |                                   
  buildServer.js  |   95.45 |      100 |     100 |   95.45 | 12                                
 backend/routes   |   46.62 |      100 |   44.44 |   46.62 | 
  devRoutes.js    |   12.56 |      100 |   16.66 |   12.56 | 10-29,34-53,58-98,102-177,182-198
------------------|---------|----------|---------|---------|-----------------------------------
```

## Frontend

:wrench: Loading ...
