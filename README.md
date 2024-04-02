## Interactions

Here's a quick guide to add a new interaction to the website.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start adding a new folder within `app/(demos)`, each folder should contain the following files:

- A `page.tsx` file that will contain the entry point of the interaction and page.
- A `components` folder that will contain the components used in the interaction.

Add the entry in `demos.ts` file inside `(demos)`, to show the interaction in the main page.

### Submitting a Pull Request

When you're ready to submit your interaction, push your changes to a new branch and submit a pull request.

## Learn More

This interactions are built using [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://gsap.com).
