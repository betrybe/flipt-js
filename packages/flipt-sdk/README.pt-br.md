# `@betrybe/flipt-sdk`

O `@betrybe/flipt-sdk` tem como foco ser um cliente JavaScript para servidores Flipt, com ele é possível avaliar Feature Flags ativas ou não através de consultas.

## Instalação

Para instalar o `@betrybe/flipt-sdk` é necessário seguir alguns pequenos passos:

1. Adicionar ao arquivo `.npmrc` o _registry_ da organização `@betrybe` para o Github Packages.

```
@betrybe:registry=https://npm.pkg.github.com/
```

2. Instalar o pacote através de seu _package manager_

```bash
npm i @betrybe/flipt-sdk # caso utilize npm
yarn @betrybe/flipt-sdk # caso utilize yarn
pnpm add @betrybe/flipt-sdk # caso utilize pnpm
```

Com estes passos feitos, é possível utilizar a biblioteca `@betrybe/flipt-sdk`.

## API

- `createFliptSDK`

```typescript
createFliptSDK(config: FliptConfig): FlipSDKInstance;
```

Função responsável por instanciar o cliente Flipt, disponibilizando os métodos que realizam a comunicação com o servidor Flipt.

### Métodos

- `evaluate`

```typescript
evaluate(flagKey: string, entityId: string, context: Context, options: RequestOptions): Promise<Evalutation<Context>>;
```

Realiza a avaliação de uma única _flag_.

- `batchEvaluate`

```typescript
batchEvaluate(requests: Request[], options: RequestOptions): Promise<BatchEvalutationResponse<Context>>;
```

Realiza a avaliação de várias _flags_ através de uma única consulta.

## Contribuição

Para contribuir com o projeto você pode resolver issues levantadas por nós ou outras pessoas em nosso repositório através de PRs. Sinta-se livre para contribuir com o que quiser, toda contribuição é sempre bem-vinda! :)

Para executar o projeto localmente, você precisará instalar o `pnpm`. Para isto basta seguir os passos presentes em sua [documentação oficial](https://pnpm.io/installation).

Com isto feito, basta instalar as dependências do projeto e executar o _script_ de build do pacote.

```bash
pnpm i
pnpm run build --filter @betrybe/flipt-sdk
```
