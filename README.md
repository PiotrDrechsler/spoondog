This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## `SectionHeading` Component Description

The `SectionHeading` component is used to display section headings on our page. Its main purpose is to provide a semantic structure for headings, which improves SEO and enhances content readability.

### Props

The component accepts the following properties:

- **`sectionTitle?: string`**: An optional section title that will be displayed as a paragraph above the main headings. It defaults to an empty string.

- **`sectionMainHeading: React.ReactNode`**: The main section heading, rendered as an `<h2>` tag. It is expected that this property will contain significant text, which is important for SEO.

- **`sectionInfo: React.ReactNode`**: Additional information about the section, rendered as an `<h3>` tag. HTML tags like `<strong>` can be used for better semantics and SEO.

### Example Usage

```jsx
<SectionHeading
  sectionTitle="My Section"
  sectionMainHeading="Main Heading"
  sectionInfo={<> Here is<strong>Very Important Information</strong>for SEO </>}
/>

