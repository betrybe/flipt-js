# `@betrybe/flipt-react`

The `@betrybe/flipt-react` package is a React client for Flipt servers, with it you can evaluate if Feature Flags are enabled or not using the available components and hooks.

## Installing

In order to install `@betrybe/flipt-react` you'll have to follow these couple of steps:

1. Add the `@betrybe` registry to the `.npmrc` file for the Github Packages.

```
@betrybe:registry=https://npm.pkg.github.com/
```

2. Install the package using your package manager

```bash
npm i @betrybe/flipt-react # if you're using npm
yarn @betrybe/flipt-react # if you're using yarn
pnpm add @betrybe/flipt-react # if you're using pnpm
```

After following these steps, you should be able to use the `@betrybe/flipt-react` library.

## API

### Hooks

- `useEvaluation`

```typescript
useEvaluation(
    flagKey: string, 
    { 
        entityId: string,
        context: Record<string, string>,
        requestId?
    }: EvaluationConfig): {
    loading: boolean;
    match: boolean;
    value: string | null;
    error: unknown;
};
```

- `useLazyEvaluation`

```typescript
useEvaluation(
    flagKey: string, 
    { 
        entityId: string,
        context: Record<string, string>,
        requestId?
    }: EvaluationConfig): {
    evaluate: () => Promise<void>;
    loading: boolean;
    match: boolean;
    value: string | null;
    error: unknown;
};
```

- `useBatchEvaluation`
```typescript
type Request = {
  flag_key: string;
  entity_id: string;
  context: Context;
  request_id?: string;
};

useBatchEvaluation(requests: Request[], config?: Pick<EvaluationConfig, 'requestId'>): {
    loading: boolean;
    match: Evaluation<Record<string, string>>[];
    error: unknown;
};
```

- `useLazyBatchEvaluation`

```typescript
type Request = {
  flag_key: string;
  entity_id: string;
  context: Context;
  request_id?: string;
};

useLazyBatchEvaluation(requests: Request[], { requestId }: Pick<EvaluationConfig, 'requestId'>): {
    evaluate: () => Promise<void>;
    loading: boolean;
    match: Evaluation<Record<string, string>>[];
    error: unknown;
};
```

### Components

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

## Contributing

To contribute to the project you can solve the issues created by us or other people in our repository through PRs. Feel free to contribute however you want, all contributions are heartly welcomed :)

To run the project locally, you'll have to install `pnpm`. For that you can follow the steps in its [official documentation](https://pnpm.io/installation).

With that being done, you'll just have to install the project's dependencies and run the package's `build` script.

```bash
pnpm i
pnpm run build --filter @betrybe/flipt-react
```
