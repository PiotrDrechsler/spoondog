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

