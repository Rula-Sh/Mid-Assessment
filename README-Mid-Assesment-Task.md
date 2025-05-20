# 🧠 Angular 19 Mid-Assessment Project

This project demonstrates Angular 19 best practices through a fully functional multi-page UI including authentication, layout structure, service integration, API consumption, and ESLint setup.

---

## 📁 Project Setup

- Project name: `mid-assessment`
- Styling: SCSS
- Angular version: 19+
- Linting: ESLint via `@angular-eslint`

### 🚀 Install Dependencies

```bash
npm install
```

---

## 🧩 Project Structure

### 🔧 Shared Layout Components
- `app-header`
- `app-sidebar`
- `app-footer`
- `app-logo`

These are reused across all pages and include:
- A logo image from `src/assets/images/iih_ai_logo.jpg`
- A toggle theme button in the header
- A login/logout button in the header
- A footer with the current year and developer name using `app-user-name`

---

## 📄 Pages

### 1. Home Page (`<app-home>`)
- Displays a "Login" button
- Toggles login form on click

### 2. Login Page (`<app-login>`)
- Form:
  - Email (validated)
  - Password
- Logic:
  - If any field is empty → alert `Incorrect email or password`
  - If valid → alert `Hello [email]` then redirect to `/profile`

### 3. Profile Page (`<app-profile>`)
- Shows IIH Logo and company name

### 4. About Us Page (`<app-about-us>`)
- Displays:
  - IIH Logo
  - Company Name
  - Website (clickable)
  - Email: `info@iih.com`
  - Phone Number

### 5. Contact Us Page (`<app-contact-us>`)
- Form:
  - Name, Email, Subject, Message
- On send:
  - If empty → alert `Please fill all required fields`
  - Else → alert `Your message has been sent, Thank you!`

### 6. Add User Page (`<app-add-user>`)
- Form:
  - First Name, Last Name, Email, Password, Confirm Password
- Logic:
  - If empty → alert `Please fill all required message`
  - If passwords mismatch → alert `Password and Confirm Password are mismatch!`
  - Else → alert `User has been added successfully`

### 7. Get Universities Page (`<app-get-universities>`)
- Consumes API: [http://universities.hipolabs.com/search?country=jordan](http://universities.hipolabs.com/search?country=jordan)
- Displays:
  - University Name
  - First web page URL
- Uses:
  - `HttpClient` + service + observable
  - `.subscribe({ next, error })`
  - `@for` directive
- Model: `University` defined in `src/app/models/university.model.ts`

---

## 🔁 Navigation

- Sidebar (`<app-sidebar>`) has:
  - My Profile
  - Contact Us
  - About Us
  - Add User
  - Get Universities

---

## 💡 Theme Toggling

- Implemented in header
- Button toggles between light/dark mode using:
  ```ts
  document.body.classList.toggle('dark-mode')
  ```

---

## 🔐 Authentication Logic

- When logged out → show Login button
- When logged in → show Logout button
- On logout:
  - Show alert: `Thank you for visiting our website, Good Bye`
  - Redirect to login page

---

## 👤 Reusable Components

### `<app-user-name>`
- Inputs: `firstName`, `lastName`
- Reused in Header and Footer

---

## 🧼 ESLint Configuration

### 📦 Installed via:

```bash
ng add @angular-eslint/schematics
```

### ✅ Checks enforced:

- No aliased `@Input('first-name')`
- Buttons must have content
- Consistent naming and style guide usage

Run lint:

```bash
ng lint
```

Auto-fix:

```bash
npm eslint "src/**/*.{ts,html}" --fix
```

---

## 🖼️ Favicon & Logo Setup

- `src/favicon.ico` replaced with custom logo (converted to `.ico`)
- `<link rel="icon" href="favicon.ico">` used in `index.html`
- Logo used in:
  - `<app-logo>`
  - About Us page

---

## ✅ Final Notes

- Uses Angular 19 standalone components
- Follows Angular Style Guide
- Designed for responsive layout and accessibility

---

Good Luck!
