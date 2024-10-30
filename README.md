# Table of Contents

1. **[SectionHeading Component](#sectionheading-component)**
2. **[OpinionsSection Component](#opinionssection-component)**
3. **[OpinionsCardItem Component](#opinionscarditem-component)**
4. **[GoogleReviewCard Component](#googlereviewcard-component)**
5. **[Swiper and SwiperButton Components](#swiper-and-swiperbutton-components)**

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
  sectionInfo={
    <>
      Here is <strong>Very Important Information</strong> for SEO
    </>
  }
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
<OpinionsCardItem
  name="John Doe"
  opinion="This service was excellent! Highly recommend!"
/>
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

## `Swiper` and `SwiperButton` Components

The `Swiper` component is a wrapper around the Swiper.js library that provides a customizable carousel/slider functionality. It's designed to work seamlessly with the `SwiperButton` component for navigation controls.

### Props

- **`children: React.ReactNode`**  
  The content to be displayed within the slider. Each child will be automatically wrapped in a `SwiperSlide` component.

- **`arrowVisibility?: "always" | "largeScreen"`**  
  Controls when the navigation arrows are visible:

  - `"always"`: Navigation arrows are always visible
  - `"largeScreen"`: Navigation arrows are only visible on desktop screens
  - If not provided, navigation arrows will not be rendered

- **`slidesPerView?: number | "auto"`**  
  The number of slides to show at once. Defaults to `1.2`.

  - Can be a number (e.g., `1`, `2`, `3`)
  - Can be `"auto"` to allow the slides to take their natural width

- **`spaceBetween?: number`**  
  The space between slides in pixels. Defaults to `10`.

- **`breakpoints?: { [width: number]: any }`**  
  Responsive breakpoints configuration. Default breakpoints are:

  ```typescript
  {
    640: { slidesPerView: 2.2, spaceBetween: 20 },
    768: { slidesPerView: 3.2, spaceBetween: 30 },
    1024: { slidesPerView: 4, spaceBetween: 40 }
  }
  ```

- **`loop?: boolean`**
  Whether to enable continuous loop mode.

- **`removePaddingBottom?: boolean`**
  When `true`, removes the bottom padding (defaults to `false`).
  - Default padding is `pb-9` for mobile and `pb-12` for desktop
  - When enabled, sets padding to `pb-0` for all screen sizes

### Features

- **Modular Design:** Integrates with Swiper.js modules including Navigation, Pagination, and A11y
- **Responsive:** Built-in breakpoints for different screen sizes
- **Customizable Navigation:** Optional navigation arrows with visibility control
- **Pagination:** Built-in pagination dots
- **Flexible Layout:** Configurable slides per view and spacing

### `SwiperButton` Component

The `SwiperButton` component provides navigation controls for the `Swiper` component.

### Props

- **`direction: "next" | "prev"`**
  Specifies the button's direction:

  - `"next"`: Shows next slide
  - `"prev"`: Shows previous slide

- **`arrowVisibility?: "always" | "largeScreen"`**  
  Controls when the button is visible visible:

  - `"always"`: Button is always visible
  - `"largeScreen"`: Button is only visible on desktop screens
  - If not provided, button will not be rendered

### Features

- **Positioning:** Automatically positioned on the left or right side of the swiper
- **Responsive:** Can be configured to show/hide based on screen size
- **Interactive:** Includes hover state with opacity change
- **Accessible:** Includes appropriate aria-labels for screen readers

### Example Usage

```jsx
<Swiper arrowVisibility="largeScreen" slidesPerView={3} loop>
  <img src="slide1.jpg" alt="Slide 1" />
  <img src="slide2.jpg" alt="Slide 2" />
  <img src="slide3.jpg" alt="Slide 3" />
</Swiper>
```
