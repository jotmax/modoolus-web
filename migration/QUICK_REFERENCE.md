# Quick Reference - Design System Migration

## 🎨 Color Quick Reference

```tsx
// Primary Actions (Orange)
bg-primary-600        // Main brand color
hover:bg-primary-700  // Hover state
text-primary-600      // Text color

// Secondary Actions (Purple)
bg-secondary-600      // Complementary
text-secondary-600    // Text

// Backgrounds
bg-beige             // #F6F2E8 (existing)
bg-gray-50           // Light gray
bg-gray-900          // Dark (footer)

// Text Colors
text-gray-900        // Primary text (replaces text-black)
text-gray-600        // Secondary text (replaces text-black/70)
text-gray-500        // Tertiary text

// Borders
border-gray-200      // Subtle (replaces border-black/10)
border-gray-300      // Default
```

---

## 📝 Typography Quick Reference

```tsx
// Headings (use font-display)
<h1 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900">
<h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
<h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900">

// Body Text
<p className="text-base text-gray-600 leading-relaxed">

// Small Text
<p className="text-sm text-gray-500">

// Caption
<span className="text-xs text-gray-400">
```

---

## 🎯 Button Quick Reference

```tsx
// Primary Button
<button className="rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white hover:bg-primary-700 hover:shadow-primary hover:-translate-y-0.5 transition-all duration-200">

// Outline Button
<button className="rounded-lg border-2 border-primary-600 px-6 py-3 text-base font-semibold text-primary-600 hover:bg-primary-50 transition-all duration-200">

// Ghost Button
<button className="px-4 py-2 text-base font-semibold text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
```

---

## 🃏 Card Quick Reference

```tsx
// Basic Card
<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

// Hoverable Card
<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary-300 hover:-translate-y-1 transition-all duration-200">
```

---

## 🏷️ Badge Quick Reference

```tsx
<span className="badge badge-primary">Beginner</span>
<span className="badge badge-warning">Intermediate</span>
<span className="badge badge-error">Advanced</span>
<span className="badge badge-info">12 weeks</span>
<span className="badge badge-success">Active</span>
```

---

## 🎭 Common Patterns

### Hover Effect on Links
```tsx
className="hover:text-primary-600 transition-colors duration-200"
```

### Hover Effect on Cards
```tsx
className="hover:shadow-lg hover:border-primary-300 hover:-translate-y-1 transition-all duration-200"
```

### Hover Effect on Buttons
```tsx
className="hover:bg-primary-700 hover:shadow-primary hover:-translate-y-0.5 transition-all duration-200"
```

### Image Zoom on Hover
```tsx
// On image container
className="overflow-hidden"

// On image
className="group-hover:scale-105 transition-transform duration-300"
```

---

## 🔍 Find & Replace Patterns

### In VS Code (Cmd+Shift+H):

1. `bg-\[#1E4ED8\]` → `bg-primary-600`
2. `bg-\[#1B3FA6\]` → `bg-secondary-700`
3. `bg-\[#F6F2E8\]` → `bg-beige`
4. `text-black/70` → `text-gray-600`
5. `text-black/80` → `text-gray-700`
6. `text-black(?![/])` → `text-gray-900`
7. `border-black/10` → `border-gray-200`
8. `rounded-md` → `rounded-lg`
9. `hover:opacity-90` → `hover:bg-primary-700 transition-all duration-200`

---

## 📏 Spacing Reference

```tsx
// Padding
p-4    // 16px
p-6    // 24px
p-8    // 32px

// Margin
mt-4   // 16px
mb-6   // 24px
my-8   // 32px

// Gap
gap-4  // 16px
gap-6  // 24px
```

---

## 🎨 Gradient Examples

```tsx
// Hero Text Gradient
className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"

// Background Gradient
className="bg-gradient-to-br from-primary-400 to-secondary-400"

// Subtle Background
className="bg-gradient-to-t from-black/20 to-transparent"
```

---

## ⚡ Animation Utilities

```tsx
// Smooth transitions
transition-all duration-200
transition-colors duration-200
transition-transform duration-300

// Hover transforms
hover:-translate-y-1
hover:-translate-y-0.5
hover:scale-105

// Combined
className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
```

---

## 📱 Responsive Patterns

```tsx
// Text sizes
text-2xl md:text-3xl lg:text-4xl

// Grid layouts
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6

// Padding
px-4 md:px-6 lg:px-8
py-8 md:py-12 lg:py-16

// Hide on mobile
hidden md:flex
```

---

## 🎯 Common Component Patterns

### Section Wrapper
```tsx
<section className="bg-beige">
  <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
    {/* Content */}
  </div>
</section>
```

### Section Header
```tsx
<div className="text-center">
  <h6 className="text-xs font-semibold tracking-widest text-primary-600 uppercase mb-3">
    Category
  </h6>
  <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
    Main Heading
  </h2>
  <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
    Description text here
  </p>
</div>
```

### Icon + Text
```tsx
<div className="flex items-center gap-2 text-sm text-gray-600">
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    {/* icon path */}
  </svg>
  <span className="font-medium">Text</span>
</div>
```

---

## 💡 Pro Tips

1. **Always use transitions** on hover effects
2. **Group hover effects** with `group` and `group-hover:`
3. **Use font-display** for all headings
4. **Prefer bg-primary-600** over hex colors
5. **Add loading states** with skeleton screens
6. **Test on mobile** regularly
7. **Use semantic color names** (success, warning, error)
8. **Keep spacing consistent** with the 4px grid

---

## 🚀 Performance Tips

1. **Optimize images** with Next.js Image component
2. **Use CSS variables** for dynamic theming
3. **Minimize Tailwind** by using only what you need
4. **Lazy load** below-the-fold content
5. **Use transitions sparingly** on mobile

---

## 📋 Component Checklist

When creating new components:

- [ ] Use design system colors
- [ ] Use font-display for headings
- [ ] Add hover states with transitions
- [ ] Test responsive breakpoints
- [ ] Verify accessibility (contrast, focus states)
- [ ] Use semantic HTML
- [ ] Add loading states if needed
- [ ] Optimize images
- [ ] Test on mobile devices

---

Print this and keep it by your desk! 📌
