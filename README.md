# MyLib

Este é um projeto teste de construção de uma biblioteca de componentes angular, baseados no Angular Material .

## Como gerar um componente na biblioteca

Estando na raiz do projeto

```bash
ng g c nome-componente --project=my-lib
```

## Configurações para utilizar os estilos do Angular Material

### Componentes do Angular Materaial

Para o Storybook reconhecer os componentes do Angular Material, precisamos adicionar o componente do Angular material na sessão `decorators` do arquivo **_.stories_** do nosso componente.

```typescript
// exemplo de um componente com vários componentes do material e do angular
const meta: Meta<FormFielComponent> = {
  title: "components/Form field",
  component: FormFielComponent,
  tags: ["autodocs"],
  render: (args: FormFielComponent) => ({
    props: {
      ...args,
    },
  }),
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
      ],
    }),
  ],
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: formFieldArgtypes, // Os tipos de arumentos foram declarados em um arquivo separado.
};
```

### Estilos do Angular Material

Para o Storybook reconhecer os estilos do Angular Material, precisamos adicionar o caminho para o arquivo _**styles.scss**_, ou ao arquivo de tema do próprio Angular Material, à sessão de **build** do Storybook no arquivo _**angular.json**_.

```json
// adiciona a chave "styles" com o caminho do arquivo de estilo
"storybook": {
          "builder": "@storybook/angular:start-storybook",
          "options": {
            "configDir": "projects/my-lib/.storybook",
            "browserTarget": "my-lib:build",
            "compodoc": false,
            "styles": ["projects/my-lib/src/lib/styles.scss"],
            "port": 6006
          }
        },

// adiciona a chave "styles" com o caminho do tema do Angular Material
"storybook": {
          "builder": "@storybook/angular:start-storybook",
          "options": {
            "configDir": "projects/my-lib/.storybook",
            "browserTarget": "my-lib:build",
            "compodoc": false,
            "styles": ["node_modules/@angular/material/prebuilt-themes/indigo-pink.css"],
            "port": 6006
          }
        },

```

## Instalação de ambiente de teste

Segui o tutorial
<https://storybook.js.org/tutorials/intro-to-storybook/angular/pt/get-started/>

> <https://github.com/geromegrignon/angular-material-storybook/blob/main/projects/showcase/src/main.ts>
