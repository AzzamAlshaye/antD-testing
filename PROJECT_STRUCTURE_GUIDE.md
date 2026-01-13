# Project Structure & File Instructions Guide

This guide provides comprehensive instructions for working with the Marqap project structure, including pages, routes, components, and all other aspects of the application.

## Table of Contents
- [Project Overview](#project-overview)
- [Directory Structure](#directory-structure)
- [Creating New Pages](#creating-new-pages)
- [Adding Routes](#adding-routes)
- [Working with Components](#working-with-components)
- [Using Hooks](#using-hooks)
- [Services & API](#services--api)
- [Utilities](#utilities)
- [Interfaces & Types](#interfaces--types)
- [Assets Management](#assets-management)
- [Configuration](#configuration)
- [Internationalization (i18n)](#internationalization-i18n)
- [Context & Providers](#context--providers)
- [Best Practices](#best-practices)

---

## Project Overview

This is a React + TypeScript application built with:
- **Vite** - Build tool
- **React Router v6** - Routing
- **Ant Design** - UI components
- **Tailwind CSS** - Styling
- **i18next** - Internationalization
- **Keycloak** - Authentication

---

## Directory Structure

```
marqap/
├── environments/          # Environment configuration files
├── nginx/                # Nginx configuration for Docker
├── src/
│   ├── assets/          # Static assets (fonts, icons, locales, SVGs)
│   ├── components/      # Reusable React components
│   ├── config/          # Application configuration
│   ├── context/         # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── interfaces/      # TypeScript interfaces and types
│   ├── pages/           # Page components
│   ├── routes/          # Routing configuration
│   ├── services/        # API services
│   ├── utils/           # Utility functions
│   ├── index.scss       # Global styles
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite type definitions
├── tests/               # E2E tests with Playwright
└── [config files]       # Various configuration files
```

---

## Creating New Pages

### Step 1: Create the Page Directory

Create a new directory under `src/pages/` with your page name:

```bash
src/pages/YourPageName/
```

### Step 2: Create the Page Component

Create an `index.tsx` file in your page directory:

```tsx
// src/pages/YourPageName/index.tsx
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

export default function YourPageName() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>{t('YOUR_PAGE.TITLE')}</h1>
      <Button type="primary">{t('YOUR_PAGE.ACTION')}</Button>
    </div>
  );
}
```

### Step 3: Export the Page (Optional)

If you want to export the page from a barrel file, you can add it to `src/pages/index.ts` (if it exists):

```tsx
export { default as YourPageName } from './YourPageName';
```

---

## Adding Routes

### Step 1: Define the Path

Add your route path to `src/interfaces/IPaths.ts`:

```tsx
// src/interfaces/IPaths.ts
export type AllPaths =
  | 'login'
  | 'logout'
  | 'home'
  | 'test'
  | 'child_test'
  | 'not_authorized'
  | 'page404'
  | 'your_page_name'; // Add your new path here
```

### Step 2: Add Path Configuration

Add the path configuration to `src/routes/paths.tsx`:

```tsx
// src/routes/paths.tsx
export const paths: Paths = {
  // ... existing paths
  
  your_page_name: {
    title: 'ROUTER.YOUR_PAGE_NAME',
    pathname: '/your-page-name',
    breadcrumb: 'ROUTER.YOUR_PAGE_NAME',
  },
};
```

### Step 3: Add the Route

Add the route to `src/routes/index.tsx`:

```tsx
// src/routes/index.tsx
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../components/Layout';
import { paths } from './paths';
import { RouteGuard } from './RouteGuard';
import YourPageName from '@pages/YourPageName'; // Import your page

export const router = createBrowserRouter([
  {
    path: paths.login.pathname,
    element: <Login />,
  },

  {
    path: paths.home.pathname,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: {
          crumb: () =>
            ({
              title: paths.home.breadcrumb,
            }) as BreadcrumbItemType,
        },
      },
      {
        path: paths.your_page_name.pathname,
        element: <RouteGuard requireAuth={true} component={<YourPageName />} />,
        handle: {
          crumb: () =>
            ({
              title: paths.your_page_name.breadcrumb,
            }) as BreadcrumbItemType,
        },
      },
    ],
  },
]);
```

### Route Guard Options

The `RouteGuard` component supports the following options:

```tsx
<RouteGuard 
  requireAuth={true}        // Require authentication
  requiredRoles={['admin']} // Require specific roles
  component={<YourPage />}  // The component to render
/>
```

### Nested Routes

For nested routes, add children to your route configuration:

```tsx
{
  path: paths.parent.pathname,
  element: <RouteGuard requireAuth={true} component={<ParentPage />} />,
  handle: {
    crumb: () => ({ title: paths.parent.breadcrumb }) as BreadcrumbItemType,
  },
  children: [
    {
      path: paths.child.pathname,
      element: <ChildPage />,
      handle: {
        crumb: () => ({ title: paths.child.breadcrumb }) as BreadcrumbItemType,
      },
    },
  ],
}
```

---

## Working with Components

### Creating a New Component

1. Create a directory under `src/components/`:

```bash
src/components/YourComponent/
```

2. Create the component file:

```tsx
// src/components/YourComponent/index.tsx
import { FC } from 'react';

interface YourComponentProps {
  title: string;
  onClick?: () => void;
}

export const YourComponent: FC<YourComponentProps> = ({ title, onClick }) => {
  return (
    <div className="your-component" onClick={onClick}>
      {title}
    </div>
  );
};
```

3. Export from the barrel file (optional):

```tsx
// src/components/index.ts
export { YourComponent } from './YourComponent';
```

### Using Components

Import and use components in your pages or other components:

```tsx
import { YourComponent } from '@components/YourComponent';
// or
import { YourComponent } from '@components';

<YourComponent title="Hello" onClick={() => console.log('clicked')} />
```

### Existing Components

- **Layout**: `MainLayout`, `Header`, `Footer`, `CustomBreadcrumb`
- **Conditional**: Conditional rendering component
- **Loading**: Loading spinner/component

---

## Using Hooks

### Creating a Custom Hook

1. Create a hook file in `src/hooks/`:

```tsx
// src/hooks/useYourHook.ts
import { useState, useEffect } from 'react';

export const useYourHook = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Your effect logic
  }, [initialValue]);

  return { value, setValue };
};
```

2. Export from the barrel file:

```tsx
// src/hooks/index.ts
export { useYourHook } from './useYourHook';
```

### Using Hooks

```tsx
import { useYourHook } from '@hooks';

const { value, setValue } = useYourHook('default');
```

### Available Hooks

- **useIsRTL**: Check if the current language is RTL (Right-to-Left)
- **usePermissions**: Check user permissions

---

## Services & API

### Using the API Service

The project uses a centralized API service located at `src/services/useApi.ts`:

```tsx
import { useApi } from '@services/useApi';

const YourComponent = () => {
  const { data, loading, error, request } = useApi();

  const fetchData = async () => {
    await request({
      method: 'GET',
      url: '/your-endpoint',
    });
  };

  return <div>{/* Your component */}</div>;
};
```

### Creating a New Service

Create a service file in `src/services/`:

```tsx
// src/services/yourService.ts
import { useApi } from './useApi';

export const useYourService = () => {
  const { request } = useApi();

  const getData = async (id: string) => {
    return await request({
      method: 'GET',
      url: `/your-endpoint/${id}`,
    });
  };

  const createData = async (data: any) => {
    return await request({
      method: 'POST',
      url: '/your-endpoint',
      data,
    });
  };

  return { getData, createData };
};
```

---

## Utilities

### Available Utilities

Located in `src/utils/`:

- **ApiErrorHandler**: Handle API errors
- **conditionalBasedData**: Conditional data helpers
- **constant**: Application constants
- **numberFormatter**: Format numbers
- **ObjectHelpers**: Object manipulation utilities
- **roles**: Role-related utilities

### Using Utilities

```tsx
import { formatNumber } from '@utils/numberFormatter';
import { API_BASE_URL } from '@utils/constant';

const formatted = formatNumber(1234.56);
```

### Creating a New Utility

```tsx
// src/utils/yourUtility.ts
export const yourUtility = (input: string): string => {
  return input.toUpperCase();
};
```

Export from `src/utils/index.ts`:

```tsx
export { yourUtility } from './yourUtility';
```

---

## Interfaces & Types

### Creating Interfaces

Create interface files in `src/interfaces/`:

```tsx
// src/interfaces/IYourInterface.ts
export interface YourInterface {
  id: string;
  name: string;
  createdAt: Date;
}

export type YourType = 'option1' | 'option2' | 'option3';
```

### Using Interfaces

```tsx
import { YourInterface } from '@interfaces/IYourInterface';

const yourFunction = (data: YourInterface) => {
  console.log(data.name);
};
```

---

## Assets Management

### Images & SVGs

1. Place SVG files in `src/assets/svg/`
2. Export them from `src/assets/svg/index.ts`:

```tsx
export { default as yourIcon } from './your-icon.svg';
```

3. Use in components:

```tsx
import { yourIcon } from '@assets/svg';

<img src={yourIcon} alt="Your Icon" />
```

### Icons

The project uses an icon system in `src/assets/icons/`:

```tsx
import { IconName } from '@assets/icons';

<IconName />
```

### Fonts

Fonts are located in `src/assets/fonts/`. Import them in `src/index.scss`:

```scss
@font-face {
  font-family: 'YourFont';
  src: url('./assets/fonts/YourFont.woff2') format('woff2');
}
```

---

## Configuration

### Available Configurations

Located in `src/config/`:

- **i18n**: Internationalization configuration
- **keycloak**: Keycloak authentication configuration
- **theme**: Theme configuration

### Using Configuration

```tsx
import { themeConfig } from '@config/theme';
import { keycloakConfig } from '@config/keycloak';
```

### Environment Variables

Environment files are located in the `environments/` directory:

- `.env` - Default environment
- `.env.develop` - Development environment
- `.env.production` - Production environment
- `.env.stage` - Staging environment
- `.env.test` - Testing environment
- `.env.demo` - Demo environment

Access environment variables:

```tsx
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Internationalization (i18n)

### Adding Translations

1. Add translation keys to `src/assets/locales/en/translation.json`:

```json
{
  "YOUR_PAGE": {
    "TITLE": "Your Page Title",
    "DESCRIPTION": "Your page description",
    "ACTION": "Click Me"
  }
}
```

2. Add Arabic translations to `src/assets/locales/ar/translation.json`:

```json
{
  "YOUR_PAGE": {
    "TITLE": "عنوان الصفحة",
    "DESCRIPTION": "وصف الصفحة",
    "ACTION": "اضغط هنا"
  }
}
```

### Using Translations

```tsx
import { useTranslation } from 'react-i18next';

const YourComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('YOUR_PAGE.TITLE')}</h1>
      <p>{t('YOUR_PAGE.DESCRIPTION')}</p>
    </div>
  );
};
```

### RTL Support

Use the `useIsRTL` hook to check for RTL layout:

```tsx
import { useIsRTL } from '@hooks/useIsRTL';

const YourComponent = () => {
  const isRTL = useIsRTL();

  return <div dir={isRTL ? 'rtl' : 'ltr'}>{/* Content */}</div>;
};
```

---

## Context & Providers

### Using Context

The main providers are configured in `src/context/Providers.tsx`:

```tsx
import { Providers } from '@context/Providers';

function App() {
  return (
    <Providers>
      <YourApp />
    </Providers>
  );
}
```

### Creating a New Context

```tsx
// src/context/YourContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface YourContextType {
  value: string;
  setValue: (val: string) => void;
}

const YourContext = createContext<YourContextType | undefined>(undefined);

export const YourProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState('');

  return (
    <YourContext.Provider value={{ value, setValue }}>
      {children}
    </YourContext.Provider>
  );
};

export const useYourContext = () => {
  const context = useContext(YourContext);
  if (!context) {
    throw new Error('useYourContext must be used within YourProvider');
  }
  return context;
};
```

---

## Best Practices

### File Naming

- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useUserData.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Interfaces**: PascalCase with `I` prefix (e.g., `IUserData.ts`)
- **Types**: PascalCase (e.g., `UserRole.ts`)

### Import Order

```tsx
// 1. React & core libraries
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

// 2. Third-party libraries
import { Button, Input } from 'antd';

// 3. Internal imports (absolute paths)
import { YourComponent } from '@components/YourComponent';
import { useYourHook } from '@hooks/useYourHook';
import { YourInterface } from '@interfaces/IYourInterface';

// 4. Relative imports
import { localHelper } from './helpers';
```

### Absolute Path Aliases

The project uses path aliases for cleaner imports:

- `@components` → `src/components`
- `@pages` → `src/pages`
- `@hooks` → `src/hooks`
- `@services` → `src/services`
- `@utils` → `src/utils`
- `@interfaces` → `src/interfaces`
- `@config` → `src/config`
- `@context` → `src/context`
- `@assets` → `src/assets`

### Component Structure

```tsx
// 1. Imports
import { FC } from 'react';

// 2. Types/Interfaces
interface ComponentProps {
  // props definition
}

// 3. Component
export const Component: FC<ComponentProps> = ({ prop1, prop2 }) => {
  // 4. Hooks
  const [state, setState] = useState();

  // 5. Handlers
  const handleClick = () => {
    // handler logic
  };

  // 6. Effects
  useEffect(() => {
    // effect logic
  }, []);

  // 7. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};
```

### Styling

- Use Tailwind CSS classes for styling
- For complex components, create a separate SCSS file
- Follow BEM naming convention for CSS classes when needed

```tsx
// With Tailwind
<div className="flex items-center justify-center p-4">

// With SCSS
import './Component.scss';

<div className="component__container">
```

### Error Handling

Use the `ApiErrorHandler` utility for API errors:

```tsx
import { handleApiError } from '@utils/ApiErrorHandler';

try {
  await apiCall();
} catch (error) {
  handleApiError(error);
}
```

### Accessibility

- Use semantic HTML elements
- Add ARIA labels where necessary
- Ensure keyboard navigation support
- Test with screen readers

```tsx
<button
  onClick={handleClick}
  aria-label="Close dialog"
  role="button"
>
  <CloseIcon />
</button>
```

---

## Quick Reference

### Add a New Page Checklist

- [ ] Create page directory in `src/pages/YourPage/`
- [ ] Create `index.tsx` with page component
- [ ] Add path to `src/interfaces/IPaths.ts`
- [ ] Add path config to `src/routes/paths.tsx`
- [ ] Add route to `src/routes/index.tsx`
- [ ] Add translations to `src/assets/locales/`
- [ ] Test the page

### Add a New Component Checklist

- [ ] Create component directory in `src/components/YourComponent/`
- [ ] Create `index.tsx` with component
- [ ] Define TypeScript interfaces
- [ ] Add styles (Tailwind or SCSS)
- [ ] Export from barrel file (optional)
- [ ] Write tests if needed

### Add a New Route Checklist

- [ ] Define path in `IPaths.ts`
- [ ] Add path configuration in `paths.tsx`
- [ ] Add route in `index.tsx`
- [ ] Add breadcrumb configuration
- [ ] Add RouteGuard if needed
- [ ] Test navigation

---

## Troubleshooting

### Common Issues

**Route not working:**
- Check if path is defined in `IPaths.ts`
- Verify path configuration in `paths.tsx`
- Ensure route is added to `index.tsx`
- Check for typos in pathname

**Translation not showing:**
- Verify translation key exists in both `en` and `ar` files
- Check key format (use dots for nesting)
- Ensure `useTranslation` hook is used

**Component not rendering:**
- Check import path (use absolute aliases)
- Verify component is exported
- Check for TypeScript errors

**Styles not applying:**
- Verify Tailwind class names
- Check if SCSS file is imported
- Ensure CSS is not overridden

---

## Additional Resources

- [React Documentation](https://react.dev)
- [React Router v6](https://reactrouter.com)
- [Ant Design](https://ant.design)
- [Tailwind CSS](https://tailwindcss.com)
- [i18next](https://www.i18next.com)
- [TypeScript](https://www.typescriptlang.org)

---

## Support

For questions or issues related to this project structure, please refer to the project documentation or contact the development team.
