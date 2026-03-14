# Echoes of Twilight Website - Assignment 3

**Name:** Peace Jolayemi  
**Student Number:** 101378520 
**Course:** IMD1005 - Web Development  
**Assignment:** 03 - Adding Interactivity with JavaScript  

---

## Project Overview

This is an interactive website for *Echoes of Twilight*, an indie visual novel by Whimsitales Studios. Building on Assignments 1 and 2, I've added 7 JavaScript features to make the site dynamic and user-friendly.

The site continues to focus on building trust with skeptical casual gamers through honest presentation and clear functionality.

---

## 7 Interactive Features - Checklist

### Feature 1: Responsive Navigation with Hamburger Menu

**What I Built:**
- Desktop: Full navigation visible
- Mobile (≤768px): Navigation collapses into hamburger menu (three horizontal lines)
- Clicking hamburger toggles menu open/closed
- Clicking a nav link closes the menu
- Smooth slide-in animation from the right

**Challenges:**
- Making sure the hamburger icon animated smoothly when clicked (rotating the lines into an X)
- Preventing the menu from covering important content on small screens
- Ensuring the z-index layering worked properly

**Files:** All HTML pages, all CSS files, all JS files

---

### Feature 2: Form Validation with Error Messages

**What I Built:**
- Validates 3 fields: name (min 2 characters), email (proper format), message (min 10 characters)
- Real-time validation - errors appear as user types and disappear when corrected
- Error messages display *below* each field (not in alert boxes)
- Prevents form submission if errors exist using `event.preventDefault()`
- Success message appears when form is valid: "✓ Thanks! We'll get back to you soon."

**Challenges:**
- Getting the email regex pattern right
- Making error messages appear/disappear smoothly without jarring the layout
- Balancing helpful error messages without being annoying

**Files:** `contact.html`, `contact.css`, `contact.js`

---

### Feature 3: Back to Top Button

**What I Built:**
- Button is hidden when page loads
- Appears after scrolling 300px down
- Fixed position in bottom-right corner
- Smooth scroll animation back to top when clicked
- Hover effect with color change and slight lift

**Challenges:**
- Positioning the button so it doesn't cover other content
- Making the scroll animation smooth (used `behavior: 'smooth'` in `window.scrollTo()`)
- Ensuring it works across all three pages

**Files:** All HTML pages, all CSS files, all JS files

---

### Feature 4: Dynamic Content Rendering from Data

**What I Built:**
- Created array of 8 game features (exceeds minimum of 6)
- Each feature has 4 properties: name, category, icon, description
- Features section is **completely empty in HTML** - JavaScript builds it entirely
- Uses `createElement()` and `appendChild()` to dynamically generate feature cards
- Each card displays icon, name, category tag, and description

**Data Structure:**
```javascript
const gameFeatures = [
  {
    name: "Branching Narrative",
    category: "story",
    icon: " ",
    description: "Your choices shape the story across multiple paths and endings"
  },
  // ... 7 more features
];
```

**Challenges:**
- Deciding what content fit the game studio theme
- Structuring the data in a way that made sense for filtering later
- Making sure the cards looked good when dynamically generated

**Files:** `index.html`, `index.css`, `index.js`

---

###  Feature 5: Tabbed Content Section

**What I Built:**
- 3 tabs on the About page: "Story", "Features", "Team"
- Clicking a tab shows its content and hides others
- Active tab is visually highlighted with purple bottom border and background
- First tab ("Story") is active by default on page load
- Smooth fade-in animation when switching tabs

**Challenges:**
- Making sure only one tab is active at a time
- Getting the active state styling to look good
- Creating smooth transitions between tab content

**Files:** `about.html`, `about.css`, `about.js`

---

### Feature 6: Live Filtering

**What I Built:**
- Filter buttons for categories: "All Features", "Story", "Visuals", "Audio", "Gameplay"
- Clicking a filter re-renders only matching items using `Array.filter()`
- "All Features" button shows everything
- Active filter is highlighted with purple background and glow effect
- Filtering works seamlessly with the dynamically rendered content from Feature 4

**Challenges:**
- Making the filter and render functions work together
- Ensuring the active button state updated properly
- Handling the "All" filter case separately

**Files:** `index.html`, `index.css`, `index.js`

---

### Feature 7: Fetch and Display Data from Public API

**What I Built:**
- Uses Quotable API (no auth required) for inspirational quotes
- Fetches random quotes filtered by inspirational/wisdom/life tags
- Displays quote text, author, and "Today's Inspiration" label
- Shows loading state: "Loading inspiration..."
- Handles errors gracefully with fallback quote from Whimsitales Studios
- Uses `async/await` syntax for clean async code

**Creative Integration:**
Instead of generic data, I integrated inspirational quotes that fit the emotional storytelling theme of the visual novel. The quotes serve as daily inspiration for visitors, reinforcing the narrative-focused nature of the game.

**Challenges:**
- Understanding how to use the Fetch API with async/await
- Handling the case where the API might fail or be slow
- Making the quote integration feel thematic rather than generic
- Styling the quote to look elegant and fit the overall design

**Files:** `index.html`, `index.css`, `index.js`

---

## Improvements from Assignment 2

Based on feedback that visual design was lacking (15/20 points), I made significant improvements:

### Visual Design Enhancements:

1. **Animated Background** - Subtle twinkling stars effect creates depth and atmosphere
2. **Gradient Accents** - Purple gradient text for headings using `background-clip: text`
3. **Glassmorphism** - Frosted glass effect with `backdrop-filter: blur()` on cards and navigation
4. **Smooth Animations** - Hover effects, floating logo, shimmer effects, and smooth transitions
5. **Enhanced Typography** - Larger, bolder headings with better hierarchy
6. **Modern Cards** - Elevated card designs with shadows, borders, and hover states
7. **Better Color Palette** - Consistent use of purple theme (`#8b5cf6`, `#c4b5fd`, `#a78bfa`)
8. **Professional CTAs** - Gradient buttons with shine effects and proper hover states
9. **Stats Section** - Added game statistics cards (8-12 hours, 5+ endings, 100% hand-painted)
10. **Improved Spacing** - Better use of white space and padding throughout

### Technical Improvements:

1. **Better code organization** - Clear sections with comments
2. **Accessibility** - ARIA labels on buttons
3. **Performance** - Optimized animations using CSS transforms
4. **Responsive design** - Mobile-first approach with proper breakpoints
5. **Consistency** - Same design language across all 3 pages

---

## Technical Requirements Met

-  **External JS:** All JavaScript in separate `.js` files (no inline `onclick`)
-  **Functions:** Code organized into clear, reusable functions
-  **No console errors:** Cleaned up all `console.log` statements
-  **Consistent code style:** Meaningful names, consistent indentation, helpful comments

---

## AI Usage Documentation

### Tools Used:
- **ChatGPT** - Used for learning some concepts (youtube for other) and debugging and writing read me.

### What AI Helped With:

1. **Understanding `async/await` syntax** (Feature 7)
   - I asked ChatGPT to explain the difference between `.then()` and `async/await`
   - Learned that `async/await` is cleaner for error handling with `try/catch`
   - **AI-assisted comment in code:** Line 159 of `index.js`

2. **Debugging event listener issue**
   - I had a bug where clicking filter buttons wasn't working
   - Asked ChatGPT why my `addEventListener` wasn't firing
   - Learned I was calling `initFilterButtons()` before the DOM loaded
   - **Solution:** Moved it inside `DOMContentLoaded` event

3. **Regular expression for email validation**
   - Asked for explanation of email regex pattern: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
   - Learned what each part means (no whitespace, must have @, must have domain)
   - Used this in `validateEmail()` function in `contact.js`

4. **CSS Grid responsive behavior**
   - Asked about `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`
   - Learned this creates responsive columns without media queries
   - Applied to features grid on home page

### What I Wrote Myself:
- **All HTML structure** (100%)
- **All CSS styling** (100%)
- **All JavaScript logic and functions** (100%)
- **Data structures** (gameFeatures array, weather mood mapping)
- **Feature integration** (how all 7 features work together)
- **Creative decisions** (feature categories, tab content)

**Percentage Breakdown:** ~85% my own code, ~15% concepts explained by AI

---

## File Structure

```
├── index.html          # Home page with dynamic features and weather
├── index.css           # Styles for home page
├── index.js            # JS for hamburger, back-to-top, dynamic content, filtering.
├── about.html          # About page with tabbed content
├── about.css           # Styles for about page
├── about.js            # JS for hamburger, back-to-top, tabs
├── contact.html        # Contact page with validated form
├── contact.css         # Styles for contact page
├── contact.js          # JS for hamburger, back-to-top, form validation
└── README.md           # This file
```

---

## Testing

**Browsers Tested:**
- Chrome (latest)
- Firefox (latest)
- Opera (latest)

**Devices Tested:**
- Desktop (1920x1080)
- Tablet (iPad, 768px)
- Mobile (iPhone, 375px)

**Features Verified:**
- Hamburger menu works on mobile
-  Back to top button appears/disappears correctly
-  Form validation shows/hides errors properly
-  Dynamic content renders on page load
-  Filtering updates the grid correctly
-  Tabs switch smoothly
-  Weather API loads (with graceful error handling if it fails)

---

## Known Issues / Future Improvements

2. **Filter animation** - Could add fade-in effect when features are filtered
3. **Mobile navigation** - Could add swipe gesture to close menu
4. **Form** - Could add more fields (phone number, dropdown for inquiry type)
5. **Accessibility** - Could add more ARIA labels for screen readers

---

## Submission Links

**GitHub Repository:** [https://github.com/PeaceJolayemi/Echoes-of-Twighlight-website-assignment-3-]  
**Live Site (GitHub Pages):** [https://peacejolayemi.github.io/Echoes-of-Twighlight-website-assignment-3-/]

---

## Reflection

Assignment 3 was challenging but rewarding. The hardest parts were:

1. **Understanding async/await** - The weather API feature took the longest because I had to learn how promises work (Had to cut it out)
2. **Coordinating features** - Making sure the dynamic rendering (Feature 4) and filtering (Feature 6) worked together required careful planning
3. **Mobile responsiveness** - The hamburger menu took several iterations to get right

What I'm most proud of:
- How all 7 features work together cohesively
- The improvement in visual design from Assignment 2

This assignment taught me that JavaScript isn't just about making things move, it's about creating better user experiences through thoughtful interactivity.
