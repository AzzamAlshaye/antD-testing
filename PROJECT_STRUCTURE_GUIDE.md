# Project Structure Guide - Marqap React Application

## Overview
This guide provides detailed instructions on how to structure components, pages, and assets in the Marqap React project to ensure seamless integration when moving components between projects.

## Table of Contents
1. [Project Architecture](#project-architecture)
2. [Router Structure](#router-structure)
3. [SVG Import/Export System](#svg-importexport-system)
4. [Component Organization](#component-organization)
5. [Page Structure](#page-structure)
6. [Path Aliases](#path-aliases)
7. [File Naming Conventions](#file-naming-conventions)
8. [Step-by-Step Component Creation](#step-by-step-component-creation)

## Project Architecture

### Root Structure
```
marqap/
├── src/
│   ├── assets/          # Static assets (SVGs, fonts, locales)
│   ├── components/      # Reusable React components
│   ├── config/          # Configuration files
│   ├── context/         # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── interfaces/      # TypeScript interfaces and types
│   ├── pages/           # Page components (routed)
│   ├── routes/          # Router configuration
│   ├── services/        # API services and utilities
│   ├── ui/              # UI component library
│   └── utils/           # Utility functions
├── tests/               # Test files
└── environments/        # Environment configuration files
```

## Router Structure

### Main Router Configuration
**File:** `src/routes/index.tsx`

The router uses React Router v6 with a hierarchical structure:

```typescript
// Pattern for adding new routes
{
  path: paths.newPage.pathname,      // Use paths object for consistency
  element: <NewPage />,              // Page component
  handle: {
    crumb: () => ({                   // Breadcrumb configuration
      title: paths.newPage.breadcrumb,
    }) as BreadcrumbItemType,
  },
}
```

### Route Paths Configuration
**File:** `src/routes/paths.tsx`

All routes are defined in the `paths` object with consistent structure:

```typescript
export const paths: Paths = {
  newPage: {
    title: 'ROUTER.NEW_PAGE',        // Translation key
    pathname: '/new-page',           // URL path
    breadcrumb: 'ROUTER.NEW_PAGE',   // Breadcrumb text
  },
}
```

### Route Guard
**File:** `src/routes/RouteGuard.tsx`

Use RouteGuard for authentication/authorization:
```typescript
<RouteGuard requireAuth={true} component={<ProtectedPage />} />
```

## SVG Import/Export System

### SVG Structure
**Folder:** `src/assets/svg/`

1. **Place SVG files** directly in the `src/assets/svg/` folder
2. **Import in index.ts** using the `?react` suffix for SVGR support:

```typescript
// src/assets/svg/index.ts
import NewIcon from './new-icon.svg?react';

export {
  NewIcon,  // Export for use in components
};
```

### Using SVGs in Components
```typescript
import { NewIcon } from '@assets/svg';

// Use as React component
<NewIcon />
```

## Component Organization

### Component Folder Structure
**Pattern:** `src/components/[Category]/`

```
src/components/
├── CategoryName/
│   ├── ComponentName.tsx      # Main component
│   ├── ComponentName.scss     # Component styles (if needed)
│   └── index.ts              # Barrel export file
```

### Component Index File (Barrel Export)
**File:** `src/components/CategoryName/index.ts`

```typescript
// Export component as default
export { default as ComponentName } from './ComponentName';

// Export types if component has them
export { type ComponentType } from './ComponentName';
```

### Main Components Index
**File:** `src/components/index.ts`

Only export components that are used across multiple categories:

```typescript
export { Loading } from './Loading';
export { MainLayout } from './Layout';
```

## Page Structure

### Page Folder Structure
**Pattern:** `src/pages/PageName/`

```
src/pages/
├── PageName/
│   ├── index.tsx         # Main page component (default export)
│   ├── components/       # Page-specific components (optional)
│   └── utils/           # Page-specific utilities (optional)
```

### Page Component Pattern
**File:** `src/pages/PageName/index.tsx`

```typescript
// Default export for pages
export default function PageName(): React.JSX.Element {
  // Component logic
  return (
    <div>
      {/* Page content */}
    </div>
  );
}
```

### Page-Specific Components
If a component is only used by one page, place it in:
`src/pages/PageName/components/ComponentName.tsx`

## Path Aliases

### Available Aliases (from vite.config.mts)
```typescript
'@pages': './src/pages'
'@components': './src/components'
'@hooks': './src/hooks'
'@interfaces': './src/interfaces'
'@context': './src/context'
'@routes': './src/routes'
'@services': './src/services'
'@utils': './src/utils'
'@ui': './src/ui'
'@assets': './src/assets'
'@styles': './src/styles'
'@config': './src/config'
```

### Import Examples
```typescript
// Good - use path aliases
import { Button } from '@ui/Button';
import { useAppLocale } from '@hooks/useAppLocale';

// Avoid - relative paths
import { Button } from '../../../ui/Button';
```

## File Naming Conventions

### Components
- **File names:** `PascalCase.tsx` (e.g., `UserProfile.tsx`)
- **Component names:** `PascalCase` (e.g., `UserProfile`)
- **Default exports:** Use for page components and main components
- **Named exports:** Use for utility functions and types

### Types and Interfaces
- **Interface files:** `I[Name].ts` (e.g., `IUser.ts`)
- **Type exports:** Use named exports
- **Location:** `src/interfaces/`

### Styles
- **Component styles:** `ComponentName.scss` (same folder as component)
- **Global styles:** `src/index.scss`

## Step-by-Step Component Creation

### Creating a New Reusable Component

1. **Create component folder:**
   ```
   src/components/NewCategory/
   ```

2. **Create component file:**
   ```typescript
   // src/components/NewCategory/MyComponent.tsx
   import React from 'react';
   
   interface MyComponentProps {
     title: string;
   }
   
   const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
     return <div>{title}</div>;
   };
   
   export default MyComponent;
   export type { MyComponentProps };
   ```

3. **Create index.ts for barrel export:**
   ```typescript
   // src/components/NewCategory/index.ts
   export { default as MyComponent } from './MyComponent';
   export { type MyComponentProps } from './MyComponent';
   ```

4. **Add to main components index if widely used:**
   ```typescript
   // src/components/index.ts
   export { MyComponent } from './NewCategory';
   ```

### Creating a New Page

1. **Create page folder:**
   ```
   src/pages/NewPage/
   ```

2. **Create page component:**
   ```typescript
   // src/pages/NewPage/index.tsx
   import React from 'react';
   import { useTranslation } from 'react-i18next';
   
   export default function NewPage(): React.JSX.Element {
     const { t } = useTranslation();
     
     return (
       <div>
         <h1>{t('newPage.title')}</h1>
       </div>
     );
   }
   ```

3. **Add route to paths:**
   ```typescript
   // src/routes/paths.tsx
   export const paths: Paths = {
     // ... existing paths
     newPage: {
       title: 'ROUTER.NEW_PAGE',
       pathname: '/new-page',
       breadcrumb: 'ROUTER.NEW_PAGE',
     },
   }
   ```

4. **Add route to router:**
   ```typescript
   // src/routes/index.tsx
   {
     path: paths.newPage.pathname,
     element: <NewPage />,
     handle: {
       crumb: () => ({
         title: paths.newPage.breadcrumb,
       }) as BreadcrumbItemType,
     },
   }
   ```

5. **Add translations:**
   ```json
   // src/assets/locales/en/translation.json
   {
     "ROUTER": {
       "NEW_PAGE": "New Page"
     },
     "newPage": {
       "title": "New Page Title"
     }
   }
   ```

### Adding a New SVG Icon

1. **Place SVG file:**
   ```
   src/assets/svg/new-icon.svg
   ```

2. **Add to SVG index:**
   ```typescript
   // src/assets/svg/index.ts
   import NewIcon from './new-icon.svg?react';
   
   export {
     // ... existing exports
     NewIcon,
   };
   ```

3. **Use in component:**
   ```typescript
   import { NewIcon } from '@assets/svg';
   
   <NewIcon />
   ```

## Best Practices

### Component Development
1. **Always use TypeScript** for type safety
2. **Use functional components** with React.FC type
3. **Export types** for component props
4. **Use translation keys** instead of hardcoded text
5. **Follow existing patterns** for consistency

### File Organization
1. **Keep related files together** (component, styles, tests)
2. **Use barrel exports** (index.ts) for clean imports
3. **Avoid deep nesting** - max 2-3 levels
4. **Use path aliases** instead of relative paths

### Styling
1. **Use Tailwind CSS** classes primarily
2. **Use SCSS modules** for complex component-specific styles
3. **Follow existing color schemes** and spacing patterns
4. **Use responsive design** patterns (mobile-first)

### Testing
1. **Create test files** alongside components: `ComponentName.test.tsx`
2. **Use Playwright** for e2e tests in `tests/e2e/`
3. **Test utilities** go in `tests/utils/`

## Common Pitfalls to Avoid

1. **Don't** create components without TypeScript types
2. **Don't** use relative imports when path aliases are available
3. **Don't** forget to add translations for new pages/components
4. **Don't** place page-specific components in the global components folder
5. **Don't** forget to export types from component index files
6. **Don't** use different naming conventions - stick to PascalCase

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Run e2e tests
npm run test:e2e
```

## Integration Checklist

When moving components from another project:

- [ ] Component uses correct file naming (PascalCase.tsx)
- [ ] Types are properly defined and exported
- [ ] Uses path aliases instead of relative paths
- [ ] Follows existing import patterns
- [ ] Includes necessary translations
- [ ] Uses Tailwind CSS classes consistently
- [ ] Exports component in appropriate index.ts file
- [ ] Follows the same component structure pattern
- [ ] Uses React.FC with proper TypeScript types
- [ ] Includes proper error handling

This guide ensures that components can be seamlessly moved between projects while maintaining consistency and following established patterns.
