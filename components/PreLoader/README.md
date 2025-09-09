# Page Transition Preloader

This preloader system provides smooth transitions between pages in your Next.js application.

## Features

- **Automatic Route Detection**: Shows different loading times based on the route
- **Beautiful Animation**: Modern design with progress bar and loading animations
- **Route-Specific Messages**: Displays appropriate titles for different sections
- **Customizable**: Easy to modify colors, timing, and content

## Files Created

1. **`TimeLoading.tsx`** - Main preloader component with animations
2. **`PageTransitionProvider.tsx`** - Context provider for managing transitions
3. **`TransitionLink.tsx`** - Custom Link component that triggers transitions
4. **`usePageTransition.ts`** - Utility hook and functions

## How It Works

### Automatic Integration
The preloader is automatically integrated into your app through:
- `layout.tsx` - Wraps the app with `PageTransitionProvider`
- `Navbar.tsx` - Uses `TransitionLink` for navigation
- Route changes trigger the loading state automatically

### Navigation Routes Supported
The preloader recognizes and shows appropriate titles for:
- Home (`/`)
- Services (`/Services`)
- Test (`/test`)
- All service pages (e.g., `/Services/cliff-blue-safe-coating`)

### Customization

#### Timing
Edit `usePageTransition.ts` to adjust loading times:
```typescript
export const getRouteLoadingTime = (pathname: string): number => {
  if (pathname === "/") return 2000; // 2 seconds for home
  if (pathname === "/Services") return 1800; // 1.8 seconds for services
  // Add your custom routes here
  return 1800; // default
};
```

#### Styling
The preloader uses Tailwind CSS classes. Key styling is in `TimeLoading.tsx`:
- Background: `bg-gradient-to-br from-black via-gray-900 to-black`
- Brand color: `text-yellow-400` (CLIFF branding)
- Progress bar: Gradient yellow colors

#### Page Titles
Update the `getPageTitle` function in `TimeLoading.tsx` to add new routes:
```typescript
const getPageTitle = (path: string) => {
  if (path === "/your-new-page") return "Your Page Title";
  // Add more routes as needed
};
```

## Usage Examples

### Standard Navigation
Use `TransitionLink` instead of Next.js `Link`:
```tsx
import TransitionLink from "@/components/PreLoader/TransitionLink";

<TransitionLink href="/Services" className="your-classes">
  Go to Services
</TransitionLink>
```

### Manual Trigger
You can also manually trigger transitions:
```tsx
import { usePageTransition } from "@/components/PreLoader/PageTransitionProvider";

const MyComponent = () => {
  const { startTransition } = usePageTransition();
  
  const handleCustomAction = () => {
    startTransition();
    // Your custom navigation logic
  };
};
```

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Framer Motion animations
- Next.js 13+ App Router

## Performance Notes
- Preloader runs only during route transitions, not on initial load
- Uses `sessionStorage` to remember if user has seen the main preloader
- Animations are optimized with `transform` properties for smooth performance
- Background processes don't affect loading times

The preloader enhances user experience by providing visual feedback during page transitions while maintaining your brand identity.
