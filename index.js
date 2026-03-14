// ============================================
// FEATURE 1: RESPONSIVE HAMBURGER MENU
// ============================================

function initHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
    
    // Close menu when a nav link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
  }
}

// ============================================
// FEATURE 3: BACK TO TOP BUTTON
// ============================================

function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  
  if (backToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    
    // Smooth scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ============================================
// FEATURE 4: DYNAMIC CONTENT RENDERING
// ============================================

// Game features data - at least 6 items with 3+ properties each
const gameFeatures = [
  {
    name: "Branching Narrative",
    category: "story",
    icon: "✉︎",
    description: "Your choices shape the story across multiple paths and endings"
  },
  {
    name: "Hand-Painted Art",
    category: "visuals",
    icon: "⋆˚꩜｡",
    description: "Every scene lovingly crafted with detailed backgrounds and characters"
  },
  {
    name: "Original Soundtrack",
    category: "audio",
    icon: "♬⋆.˚",
    description: "Emotional, atmospheric music that enhances every moment"
  },
  {
    name: "Character Development",
    category: "story",
    icon: "⋆˚✿˖°",
    description: "Deep, nuanced characters who grow and change based on your interactions"
  },
  {
    name: "Multiple Endings",
    category: "story",
    icon: "⋆˚꩜｡",
    description: "Over 5 distinct endings based on the relationships you build"
  },
  {
    name: "Voice Acting",
    category: "audio",
    icon: "‧₊˚♪",
    description: "Full voice acting from talented indie voice actors"
  },
  {
    name: "Atmospheric Effects",
    category: "visuals",
    icon: "ʚĭɞೃ",
    description: "Dynamic lighting and particle effects bring scenes to life"
  },
  {
    name: "Memory System",
    category: "gameplay",
    icon: "-`♡´-",
    description: "Track which memories you've saved and which have faded away"
  }
];

// Render features dynamically
function renderFeatures(featuresToRender = gameFeatures) {
  const container = document.querySelector('.features-grid');
  
  if (!container) return;
  
  // Clear existing content
  container.innerHTML = '';
  
  // Create and append each feature card
  featuresToRender.forEach(feature => {
    const card = document.createElement('div');
    card.className = 'feature-card';
    card.setAttribute('data-category', feature.category);
    
    card.innerHTML = `
      <div class="feature-icon">${feature.icon}</div>
      <h3>${feature.name}</h3>
      <p class="feature-category">${feature.category}</p>
      <p class="feature-description">${feature.description}</p>
    `;
    
    container.appendChild(card);
  });
}

// ============================================
// FEATURE 6: LIVE FILTERING
// ============================================

function initFilterButtons() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get the filter category
      const filterCategory = button.getAttribute('data-filter');
      
      // Filter and render
      if (filterCategory === 'all') {
        renderFeatures(gameFeatures);
      } else {
        const filtered = gameFeatures.filter(feature => feature.category === filterCategory);
        renderFeatures(filtered);
      }
    });
  });
}

// ============================================
// FEATURE 7: FETCH QUOTE API
// ============================================

// AI-assisted: Used ChatGPT to understand async/await syntax for API calls
async function fetchDailyQuote() {
  const quoteContainer = document.querySelector('.daily-quote');
  
  if (!quoteContainer) return;
  
  // Show loading state
  quoteContainer.innerHTML = '<p class="loading">Loading inspiration...</p>';
  
  try {
    // Using Quotable API (no key required) - filtered for inspirational quotes
    const response = await fetch(
      'https://api.quotable.io/random?tags=inspirational|wisdom|life'
    );
    
    if (!response.ok) {
      throw new Error('Quote unavailable');
    }
    
    const data = await response.json();
    
    quoteContainer.innerHTML = `
      <div class="quote-content">
        <div class="quote-icon">💭</div>
        <blockquote class="quote-text">"${data.content}"</blockquote>
        <p class="quote-author">— ${data.author}</p>
        <p class="quote-label">Today's Inspiration</p>
      </div>
    `;
    
  } catch (error) {
    // Handle errors gracefully
    quoteContainer.innerHTML = `
      <div class="quote-content">
        <p class="quote-fallback">
          ✎ᝰ. "Every story begins with a single choice." - Whimsitales Studios
        </p>
      </div>
    `;
    console.error('Quote fetch error:', error);
  }
}

// ============================================
// INITIALIZE ALL FEATURES ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initHamburgerMenu();
  initBackToTop();
  renderFeatures(); // Render features dynamically
  initFilterButtons(); // Set up filtering
  fetchDailyQuote(); // Load inspirational quote
});
