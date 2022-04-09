# `@betrybe/flipt-sdk`

The `@betrybe/flipt-sdk` package is a JavaScript client for Flipt servers, with it you can evaluate if Feature Flags are enabled or not using queries.

## Installing

In order to install `@betrybe/flipt-sdk` you'll have to follow these couple of steps:

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

After following these steps, you should be able to use the `@betrybe/flipt-sdk` library.

## API

- `createFliptSDK`

```typescript
createFliptSDK(config: FliptConfig): FlipSDKInstance;
```

The function that will instantiate the Flipt client, providing the methods to communicate with the Flipt server.

### Métodos

- `evaluate`

```typescript
evaluate(flagKey: string, entityId: string, context: Context, options: RequestOptions): Promise<evaluation<Context>>;
```

Evaluates only one feature flag.

- `batchEvaluate`

```typescript
batchEvaluate(requests: Request[], options: RequestOptions): Promise<BatchevaluationResponse<Context>>;
```

Evaluates many feature flags with a single query.

## Contributing

To contribute to the project you can solve the issues created by us or other people in our repository through PRs. Feel free to contribute however you want, all contributions are heartly welcomed :)

To run the project locally, you'll have to install `pnpm`. For that you can follow the steps in its [official documentation](https://pnpm.io/installation).

With that being done, you'll just have to install the project's dependencies and run the package's `build` script.

```bash
pnpm i
pnpm run build --filter @betrybe/flipt-sdk
```
