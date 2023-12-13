<h1 align="center">
  <p>Smart Games<p>
</h1>

## Sobre 📙
  Smart games é uma loja ficticia, inventada para focar estudo em backend com node e express.

<div>
  <img class="styleImg" width="200" height="400" src="/frontend/src/asset/filter.png">
  <img class="styleImg" width="200" height="400" src="/frontend/src/asset/listGames.png">
  <img class="styleImg" width="200" height="400" src="/frontend/src/asset/sell.png">
</div>

## Banco de dados 🪑🎲
  - [MySQL](https://www.mysql.com/)
  - um pouco do que eu abstrai sobre as relação durante o desenvolvimento:
<div>
  <img class="styleImg" width="1000" height="700" src="/backend/src/infra/ModeloRelacional.png">
</div>

🚨🚨🚨os comandos a seguir deve ser feitos em IDE's separadas🚨🚨🚨
🚨🚨🚨ou utilizando o recurso do VS Code WorkSpace, para fins🚨🚨🚨
🚨🚨🚨      evitar conflitos de commandos do terminal       🚨🚨🚨

## Ferramentas Backend🔨
  - [Node](https://nodejs.org/en)
  - [Typescript](https://www.typescriptlang.org/)
  - [Express](https://expressjs.com/pt-br/)
  - [yup](https://www.npmjs.com/package/yup)
  - [msql2](https://www.npmjs.com/package/mysql2)

## Ferramentas Frontend🔨
  - [Node](https://nodejs.org/en)
  - [React.js](https://react.dev/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Ionic](https://ionicframework.com/)
  - [axios](https://axios-http.com/ptbr/docs/intro)
  - [yup](https://www.npmjs.com/package/yup)


## Instalação e configuração do projeto 💻🖱️
  - Execute git clone em `https://github.com/brennoAmaral/SmartGamesLtda`
  - Abra seu manipulador de banco de dados
  - Importe no seu manipulador de banco de dados o arquiv `Dump20231213.sql` que está no caminho `backend / src / infra / Dump20231213.sql`
  - No diretório `Backend` execute `npm run dev`, a resposta do comando deve ser no console a seguinte messange `backend running 3000`
  - No diretório `SmartGamesLtda`, execute  `npm install`
  - No diretório `frontend`, execute `npm install -g @ionic/cli`
  - Execute `npm run build`
  - Execute `npx cap add android`
  - Execute `npx cap sync`
  - Execute `ionic serve`, observe o console e abra a porta indicada exemplo: `https://localhost:PORTA_INDICADA_NO_CONSOLE`

## Mobile 🤖
  - Ative o modo desenvolvedor do seu celular
  - Ative a depuração em tempo real
  - Com um cabo USB conecte seu celular no seu computador
  - No diretório frontend, execute `npx cap run android`
