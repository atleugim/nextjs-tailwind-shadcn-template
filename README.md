# Next.js Template

This is a [Next.js](https://nextjs.org/) project with some base configurations and code formatting.

## Getting Started

Install the dependencies:

```bash
npm install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn-UI](https://ui.shadcn.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/)
- [Lint-Staged](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#readme)

## Deployment

This project can be deployed on [Vercel](https://vercel.com/).

## Folder Structure

```
├── src
│   ├── app
│   ├── core
│   │   ├── components
│   │   |   ├── common
│   │   |   ├── ui
│   │   ├── config
│   │   |   ├── request
│   │   ├── hooks
│   │   ├── providers
│   │   ├── repositories
│   │   ├── styles
│   │   ├── types
```

## Components

### The `ui` folder

This folder is very important, it contains all the components from the [shadcn-ui](https://ui.shadcn.com/) library, but with some modifications to adapt them to the project, modify them could affect the entire project., so be careful.

### How to create new components

If the component is common through the app (see: `src/core/components/common`).

If the component belongs to any of the already created folders components (see: `src/core/components/${folder-name}`).

- Create a new folder (name must be `kebab-case`), and inside create the component.
- Note that the main component must be named `index.tsx`

If the component does not belong to any of the already created folders components.

- Create a new folder in `src/core/components/${page}` with the required feature name (example: `src/core/components/${page}/${feature}`).
- Then follow the steps in the first condition.

## Repositories

### How to create new API queries

If the required query belongs to any of the already created repositories (see: `src/core/repositories`).

- Create a new method in the repository with the required query.
- Note that you must type the request parameters and the response data (see: `src/core/types`) for types or create a new one there (please don't be redundant).

If the required query does not belong to any of the already created repositories.

- Create a new repository in `src/core/repositories` with the required query (example: `src/core/repositories/${new-repository}.ts`).
- Then follow the steps in the first condition.

### How to consume the Repositories methods

- Inside the component where you want to consume the repository method create a new function with a try-catch block and use the `request` function from `src/core/config/request`, which also has the capability of parsing the response data to the passed type with the `ky` library.

- You can handle loading and error states with the `useState` hook.
- ⚠️ If you have too many requests and need some caching or a core complex features use the `useQuery` hook from [TanStack Query](https://tanstack.com/query/latest/).

## Errors

### How to handle API errors

By default the repositories do not control the errors thrown, you must contain them where you use the methods with a try-catch block.

- If your api responds in english you can do the following:
  - Create an errors.ts file inside the `~/core/config` folder.
  - Inside the file we will use a Record:
  ```ts
  export const errorsMap: Record<string, string> = {
    'Error, email is used by other user': 'El correo electrónico ya está en uso'
  };
  ```
  - The record key is the api error in English and the value is the error in Spanish to show to the user.
- Then use the `toast.error()` of [sonner](https://sonner.emilkowal.ski/) to display the error message.
