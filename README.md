# 🍽️ Digital Menu - Expressoft

This project is a simplified **Digital Menu App** built with **ReactJS**. It's meant to simulate a food ordering interface for a restaurant.

---
npm install
npm run dev
---


## Completed Assignment Tasks

1. **Menu Display by Category**: Rendered the categories and list products beneath each one.

2. **Product Card**
   Each product is showing:
   - Name
   - Description
   - Price
   - Availability indicator (“Not available” badge)
    
3. **Filter by Category** Added checkbox filters products shown by category.

4. **Toggle Product Availability**
   Added a toggle to visualize only available products.

5. **"Add to Order" Button**
   Users can add available products to a simulated “order cart”. Also added a Cart page showing a summary with:
   - Product name
   - Quantity
   - Subtotal
   - Total price

6. **A welcoming home page**
   Created a home page

---

Completed Bonus assignment tasks:

- **Search bar**: Added a search bar to filter products by name
- **Sort dropdown** Added a sort dropdown to filter by price, increasing or decreasing
- **Responsive layout** The web app has a responsive layout, allowing mobile users to use the app 
- **Modal** for viewing full product details

---

### Key Folders and Files

#### `src/components/`
This folder contains reusable React components.

- **`menuitem/`**: Contains the `MenuItem` component and its associated styles.
  - `menuitem.tsx`
  - `menuitem.css`

#### `src/data/`

- `cartData.tsx`
- `menuData.tsx`

#### `src/pages/`
This folder contains the main pages of the application.

- `Menu.tsx`
- `Home.tsx`
- `Cart.tsx`

#### `src/styles/`
This folder contains global and page-specific CSS files.
