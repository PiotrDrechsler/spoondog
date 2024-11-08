# Table of Contents

1. **[SectionHeading Component](#sectionheading-component)**
2. **[OpinionsSection Component](#opinionssection-component)**
3. **[OpinionsCardItem Component](#opinionscarditem-component)**
4. **[GoogleReviewCard Component](#googlereviewcard-component)**
5. **[Swiper and SwiperButton Components](#swiper-and-swiperbutton-components)**
6. **[LightboxGallery Component](#lightboxgallery-component)**
7. **[PetCardItem Component](#petcarditem-component)**

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

## `LightboxGallery` Component

The `LightboxGallery` component is used to display images in a modal lightbox view, allowing users to navigate through images within a specified list of slides. The component leverages the `yet-another-react-lightbox` library and includes support for setting an initial slide index and tracking the current slide index.

### Props

- **`isOpen: boolean`**  
  Controls whether the lightbox is open or closed. Pass `true` to display the lightbox, or `false` to hide it.

- **`onClose: () => void`**
  Callback function that closes the lightbox when called.

- **`index: number`**  
  The starting index of the slide to be displayed when the lightbox opens. This prop is also used to track the current slide index when the lightbox is open. The default value for `index` is `0`, and in most cases, you can omit it as the lightbox manages its state internally.

- **`slides: ImageSource[]`**
  An array of image sources to be displayed within the lightbox. Each item in the array should be a URL or `StaticImageData` (from `next/image`), which represents the image source. This prop determines the content of the lightbox gallery.

### Features

- **Image Navigation**: Allows users to navigate through a gallery of images with previous and next buttons.
- **Dynamic Content Handling**: Accepts an array of image sources in different formats (`string` or `StaticImageData`), making it flexible for various image sources.

### useLightbox Hook

The `useLightbox` hook is a custom hook that manages the state for opening and closing the lightbox, as well as setting the starting slide index. This hook simplifies controlling the `LightboxGallery` component.

### Hook Usage

- **`isOpen: boolean`**  
  A boolean value that indicates if the lightbox is currently open.

- **`photoIndex: number`**  
  Represents the index of the current slide in the lightbox. This value is updated when the `openLightbox` function is called.

- **`openLightbox: (index: number) => void`**
  Function to open the lightbox and set the initial slide index.

- **`closeLightbox: () => void`**
  Function to close the lightbox.

### Example Usage

```jsx
const GalleryComponent = () => {
  const { isOpen, photoIndex, openLightbox, closeLightbox } = useLightbox();
  const images = ["/images/photo1.jpg", "/images/photo2.jpg"];

  return (
    <div>
      <button onClick={() => openLightbox(0)}>Open Gallery</button>

      <LightboxGallery
        isOpen={isOpen}
        onClose={closeLightbox}
        index={photoIndex}
        slides={images}
      />
    </div>
  );
};
```

## `PetCardItem` Component

The `PetCardItem` component displays detailed information about a pet, including its name, gender, and image. It also includes a button to view the pet's story. This component is designed with responsive styles and offers a visually structured card for each pet.

### Props

- **`name: string`**  
  The name of the pet. It will be prominently displayed on the card as the pet's identifier.

- **`gender: string`**  
  The gender of the pet, which can be either "female" or "male". Based on the value, an icon with a color specific to the gender is rendered to indicate the pet's gender.

- **`image: string`**  
  The URL for the pet's image. This image will be displayed within a rounded, framed area, providing a clear and appealing visual representation of the pet.

### Features

- **Responsive Card Design**  
  The component is styled with Tailwind CSS to ensure it adapts to different screen sizes. The card layout, padding, and font sizes adjust based on device width for an optimized display.

- **Semantic Accessibility**  
  The card includes `aria-labels` to provide accessible descriptions for screen readers. This includes descriptive text for the pet's name and gender, enhancing usability for visually impaired users.

- **Icon Integration**  
  The `IconPetGender` component is used to represent the pet's gender visually. The icon color changes based on the gender—pink for female pets and blue for male pets—using a utility class from a helper function (`cn`).

- **Button for Navigation**  
  A `Button` component labeled "Poznaj historię" ("Learn the story") navigates to the pet's story page. This button is styled for prominence and includes an accessible `aria-label` for screen readers, describing the action with the pet's name for better context.

### Example Usage

```jsx
<PetCardItem
  name="Lizi"
  gender="female"
  image="/images/fromLove/lizi/lizi01.jpg"
/>
```
