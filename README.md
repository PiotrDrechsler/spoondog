## `SectionHeading` Component

The `SectionHeading` component is used to display section headings on our page. Its main purpose is to provide a semantic structure for headings, which improves SEO and enhances content readability.

### Props

- **`sectionTitle?: string`**  
  An optional section title that will be displayed as a paragraph above the main headings. It defaults to an empty string.

- **`sectionMainHeading: React.ReactNode`**  
  The main section heading, rendered as an `<h2>` tag. It is expected that this property will contain significant text, which is important for SEO.

- **`sectionInfo: React.ReactNode`**  
  Additional information about the section, rendered as an `<h3>` tag. HTML tags like `<strong>` can be used for better semantics and SEO.

- **`variant?: "opinions-section" | "default-section"`**  
  An optional prop that controls the layout style of the heading. 
  - When the value is `"opinions-section"`, the main heading (`<h2>`) will have a maximum width of 230px [for mobile devices], which is useful for specific design needs where the heading should be constrained in width.
  - The default value is `"default-section"`, where no specific width is applied to the main heading.

### Example Usage

```jsx
<SectionHeading
  sectionTitle="My Section"
  sectionMainHeading="Main Heading"
  sectionInfo={<>Here is <strong>Very Important Information</strong> for SEO</>}
  variant="opinions-section" // Optional variant for layout control
/>
```

## `OpinionsSection` Component

The `OpinionsSection` component is responsible for rendering a section on the page dedicated to customer opinions. This component organizes and displays customer reviews in a visually appealing manner, enhancing user engagement and trust.

### Props

This component does not accept any props.

### Features

- **Semantic Section**: The component is wrapped in a `<section>` tag with the ID `"opinions"`, which allows for easy navigation and improved SEO.

- **Container**: The entire section is enclosed within a `Container` component to maintain consistent padding and layout across different screen sizes.

- **Section Heading**: The `SectionHeading` component is used to display the title, main heading, and additional information for the opinions section, which helps improve the semantic structure of the content.

- **Google Review Card**: A `GoogleReviewCard` is positioned absolutely within the section, providing visibility to important reviews and enhancing trustworthiness.

- **Swiper for Reviews**: The component utilizes a `Swiper` to create a horizontal scrolling effect for the opinions. This is particularly useful for showcasing multiple reviews in a compact format.

### Child Components

- **`Container`**: This wraps the content of the section to provide proper alignment and spacing.

- **`SectionHeading`**: Displays the section title, main heading, and additional information.

- **`GoogleReviewCard`**: An informational card that presents a Google review, enhancing the credibility of the section.

- **`Swiper`**: A carousel component that enables horizontal scrolling for the `OpinionsCardItem` components.

- **`OpinionsCardItem`**: Represents individual opinion items, each displaying a customer's name and their opinion.

### Example Usage

```jsx
<OpinionsSection />
```

## `OpinionsCardItem` Component

The `OpinionsCardItem` component is responsible for displaying individual customer opinions. It provides a structured layout for the customer's name, their opinion, and a star rating icon, while also ensuring that the opinion text adheres to specified length constraints.

### Props

- **`name: string`**  
  The name of the customer providing the opinion. This will be displayed prominently at the top of the card.

- **`opinion: string`**  
  The customer's opinion or review text. This should not exceed 120 characters for optimal display.

### Features

- **Input Validation**: The component utilizes Zod to validate the opinion length. If the opinion exceeds 120 characters, it will be truncated, and a warning will be logged in the console.

- **Star Rating Icon**: The `IconStars` component is used to visually represent the customer’s rating, adding a graphical element to the opinion card.

### Example Usage

```jsx
<OpinionsCardItem name="John Doe" opinion="This service was excellent! Highly recommend!" />
```

## `GoogleReviewCard` Component

The `GoogleReviewCard` component displays a card featuring Google branding and is designed to showcase customer reviews. It provides a visual element that enhances the credibility of the opinions section.

### Features

- **Card Layout**: The card is styled with a shadow effect, rounded corners, and a white background, making it visually distinct.
- **Typography**: The card includes a bold title "Google" and the text "Opinie," enhancing clarity and readability.
- **Icon Integration**: The `IconGoogle` component is included to visually represent the Google brand, adding to the overall aesthetic.

### Example Usage

```jsx
<GoogleReviewCard />
```





