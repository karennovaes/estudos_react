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
