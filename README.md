# estudos_react

## Criação do projeto

1. Executar o comando de criação do app, usando o template de typescript e usando o npm.

```npx create-react-app --template typescript --use-npm . my_app  ```

    * npx create-react-app é o pacote que vamos executar;
    * --template typescript é o template Typescript para nosso projeto;
    * --use-npm informa explicitamente que queremos usar o NPM para gerenciar os pacotes;

2. Entre na pasta do projeto e execute: 

```npm start  ```

## Estrutura do código

- **package.json**: padrão para qualquer projeto que utiliza o NPM, e tem o nome do projeto, a versão, as dependências que está usando e se ele é privado ou não. 
- **package-lock.json** é um arquivo fechado que nunca vamos alterar. Normalmente quando instalamos alguma dependência ou coisas do tipo, todo o histórico é feito nesse arquivo.
- A pasta **node_modules** contém literalmente todos os pacotes que foram instalados no projeto. Nós também não vamos alterar o conteúdo dessa pasta, pois ele é gerenciado pelo NPM.
- **.gitignore** é um arquivo do Git, referente a tudo que o Git irá ignorar quando fizermos commits
- **tsconfig.json** possui algumas configurações de Typescript
- **App.tsx**  tem os códigos HTML da página, incluindo o logo e o texto que está sendo exibido na tela.


## Componentes

1. Criar pasta *_components_* dentro de *_src_*
2. Dentro de *_components_* criar uma pasta *_Botao_* 
2. Dentro da pasta *_Botao_*, criar um arquivo *_index.tsx_*
3. No arquivo *_index.tsx_*, importar o react
~~~javascript
 import React from 'react';
 ~~~
4. Criar a classe Botao
~~~javascript

class Botao extends React.Component {
    render(){
        return (
            <button>Botão</button>
        )
    }
}
~~~
5. Exportar o botão

~~~javascript
export default Botao;
~~~

6. Voltando para *_App.tsx_*, importar o Botao.

~~~javascript
import Botao from './components/Botao';
~~~

7. Renderizar o Botao

~~~javascript
function App() {
  return (
    <div className="App">
      <Botao />
    </div>
  );
}
~~~

## Listas 

1. Dentro de *_components_* criar uma pasta *_Lista_* 
2. Dentro da pasta *_Lista_*, criar um arquivo *_index.tsx_*
3. No arquivo *_index.tsx_*, importar o react
~~~javascript
 import React from 'react';
 ~~~
4. Desta vez usando function_components, criar a função Lista
~~~javascript
    function Lista(){
        return (
            <aside>
            </aside>
        )
    }
    export default Lista;
~~~

5. Criar as tags para incrementar a função

~~~javascript
    function Lista(){
        return (
            <aside>
                <h2>Estudos do dia</h2>
                <ul>
                    <li>
                        <h3>React</h3>
                        <span>02:00:00</span>
                    </li>
                    <li>
                        <h3>Javascript</h3>
                        <span>01:00:00</span>
                    </li>
                </ul>
            </aside>
        )
    }
    export default Lista;
~~~
6. No arquivo App.tsx, importe a nova função

~~~javascript
    import Lista from './components/Lista'
~~~

7. Renderize a função

~~~javascript
    function App() {
  return (
    <div className="App">
      <Formulario />
      <Lista />
    </div>
  );
}
~~~

## Estilizando 

### Utilizando Sass

1. Instalar o Sass.
~~~javascript
npm install --save-dev sass
~~~
2. No arquivo index.css, adicione os reset's
3. Crie uma pasta em *_src_* chamada *_pages_* e mova o arquivo *_App.tsx_* para dentro dela. 
4. Crie um novo arquivo chamado *_style.scss_*
5. No arquivo *_App.tsx_*, importe o *_style.scss_*

### Utilizando CSS Modules

1. Instalar o css modules.
~~~javascript
npm install -D typescript-plugin-css-modules
~~~

2. Adicionar o plugion no tsconfig.json
~~~javascript
{
  "compilerOptions": {
    "plugins": [{ "name": "typescript-plugin-css-modules" }]
  }
}
~~~
3. No arquivo index.css, adicione os reset's
4. Crie uma pasta em *_src_* chamada *_pages_* e mova o arquivo *_App.tsx_* para dentro dela. 
5.  Crie um novo arquivo chamado *_app.mudule.scss_*
6. No arquivo *_App.tsx_*, importe o *_app.module.scss_*
~~~javascript
import style from './app.module.scss'
~~~
7. Altere o className como no exemplo:
~~~javascript
<div className='{style.AppStyle}'>
~~~

## Props

1. Entre no arquivo *_src/components/Botao/index.tsx_*

2. Na função render, referencie a prop
~~~javascript
<button className={style.botao}>{this.props.children}</button>

~~~
3. Entre no arquivo *_src/components/Formulario/index.tsx_*
4. Crie uma prop
~~~javascript
<Botao
    Adicionar
/>

~~~

## Estados

1. Altere o array tarefas para obter o estado: 
~~~javascript
const [tarefas, setTarefas] = useState([{
    ....
}]);

~~~

2. Para criar uma nova tarefa, por exemplo, adicione a propriedade *_onClick_* dentro da lista:

~~~javascript
<h2 onClick={() => {
    tarefas = [...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}]
}}>Estudos do dia</h2>

~~~