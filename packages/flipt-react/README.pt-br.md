# `@betrybe/flipt-react`

O `@betrybe/flipt-react` tem como foco ser um cliente React para servidores Flipt, com ele é possível avaliar Feature Flags ativas ou não através dos componentes e hooks disponíveis.

## Instalação

Para instalar o `@betrybe/flipt-react` é necessário seguir alguns pequenos passos:

1. Adicionar ao arquivo `.npmrc` o _registry_ da organização `@betrybe` para o Github Packages.

```
@betrybe:registry=https://npm.pkg.github.com/
```

2. Instalar o pacote através de seu _package manager_

```bash
npm i @betrybe/flipt-react # caso utilize npm
yarn @betrybe/flipt-react # caso utilize yarn
pnpm add @betrybe/flipt-react # caso utilize pnpm
```

Com estes passos feitos, é possível utilizar a biblioteca `@betrybe/flipt-react`.

## API

### Hooks

- `useEvaluation`

```typescript
useEvaluation(flagKey: string, config: EvaluationConfig): {
    loading: boolean;
    match: boolean;
    error: unknown;
};
```

- `useLazyEvaluation`

```typescript
useEvaluation(flagKey: string, { entityId, context, requestId }: EvaluationConfig): {
    evaluate: () => Promise<void>;
    loading: boolean;
    match: boolean;
    error: unknown;
};
```

- `useBatchEvaluation`

```typescript
useBatchEvaluation(requests: Request[], config: Pick<EvaluationConfig, 'requestId'>): {
    loading: boolean;
    match: Evaluation<Record<string, string>>[];
    error: unknown;
};
```

- `useLazyBatchEvaluation`

```typescript
useLazyBatchEvaluation(requests: Request[], { requestId }: Pick<EvaluationConfig, 'requestId'>): {
    evaluate: () => Promise<void>;
    loading: boolean;
    match: Evalutation<Record<string, string>>[];
    error: unknown;
};
```

### Componentes

- `Evaluate`

```typescript
function Evaluate({
  children,
  loading: LoadingComponent,
  flagKey,
  context,
  entityId,
  requestId,
}: EvaluateProps): ReactNode;
```

## Contribuição

Para contribuir com o projeto você pode resolver issues levantadas por nós ou outras pessoas em nosso repositório através de PRs. Sinta-se livre para contribuir com o que quiser, toda contribuição é sempre bem-vinda! :)

Para executar o projeto localmente, você precisará instalar o `pnpm`. Para isto basta seguir os passos presentes em sua [documentação oficial](https://pnpm.io/installation).

Com isto feito, basta instalar as dependências do projeto e executar o _script_ de build do pacote.

```bash
pnpm i
pnpm run build --filter @betrybe/flipt-react
```
