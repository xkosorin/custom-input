# Custom Input Component

This project demonstrates a custom input component built with React, TypeScript, and CSS Modules. The component provides a styled and reusable input field with a label, offering enhanced control over appearance and behavior.

## Technologies Used

*   **React:** JavaScript library for building user interfaces.
*   **TypeScript:** Typed superset of JavaScript that compiles to plain JavaScript.
*   **CSS Modules:** CSS files where all class names and animation names are scoped locally by default.
*   **clsx:** Tiny (225B) utility for constructing `className` strings conditionally.
*   **Vite:** Next Generation Frontend Tooling.

## Getting Started

### Prerequisites

*   Node.js (version 20+)
*   npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone git@github.com:xkosorin/custom-input.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd custom-input-component
    ```

3.  Install dependencies:

    ```bash
    npm install  # or yarn install
    ```

### Development

1.  Start the development server:

    ```bash
    npm run dev # or yarn dev
    ```

    This will start the Vite development server, and you can view the application in your browser at `http://localhost:5173` (or the port shown in the console).

### Building for Production

1.  Build the project for production:

    ```bash
    npm run build # or yarn build
    ```

    This will create an optimized production build in the `dist` directory.

## Usage

The `CustomInput` component can be imported and used in other React components. Here's an example:

```tsx
import React from 'react';
import CustomInput from './components/CustomInput'; // Adjust path as needed

const MyComponent: React.FC = () => {
  return (
    <div>
      <CustomInput
        id="my-input"
        label="My Label"
        placeholder="Enter text here"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default MyComponent;
```

### Props

The `CustomInput` component accepts the following props:

*   `id`: `string` (**Required**) A unique ID for the input field. Required for label association and accessibility.
*   `label`: `string` (**Required**) The text to display as the label for the input field.
*   `value`: `string` The current value of the input. Use this prop for controlled components.
*   `type`: `string` The type of the input field (e.g., "text", "email", "password", "number"). Leverages React's built-in input type definitions for comprehensive type support. Defaults to `"text"`.
*   `errorMessage`: `string` Optional error message to display below the input when `variant="error"`. This message will be associated with the input for accessibility purposes.
*   `secondaryLabel`: `string` Optional secondary label text displayed next to the main label.
*   `variant`: `"default"` | `"warning"` | `"error"` The visual style of the input. Use `"warning"` to indicate a warning state and `"error"` to indicate an error state. Defaults to `"default"`.
*   `onChange`: `(e: React.ChangeEvent<HTMLInputElement>) => void` A callback function that is called when the input value changes. Required for controlled components.
*   `...props`: `Omit<React.ComponentProps<"input">, "id" | "type">` All other standard HTML input attributes (e.g., `placeholder`, `required`, `disabled`, `name`, etc.). The `id` and `type` props are managed separately by `CustomInput`.

## CSS Customization

The appearance of the `CustomInput` component can be customized by modifying the CSS in `src/components/CustomInput.module.css`. This file uses CSS Modules, so styles are scoped locally to the component.
