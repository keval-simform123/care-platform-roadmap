/**
 * -----------------------------------------------------------------------------
 * CARE PLATFORM ROADMAP — PREMIUM INTERACTIVE ROADMAP LOGIC (V6 DESIGN REVIEW)
 * -----------------------------------------------------------------------------
 * Grounded in Mobile App Development.
 * Includes: IDE stage directories, Compiler Progress reporting, Blinking terminal cursor,
 *           Success status overrides, and Dynamic Column reveal.
 */

// Node Database Configuration with Mobile Dev Specific Specs & Directories
const NODES_DATA = {
  '1': {
    id: 'node-1',
    number: 'stage.01.init',
    title: 'Install development tools',
    track: 'Foundation',
    tech: 'Android Studio, Node.js, Git',
    weight: 'Small (2h)',
    desc: 'Configure your local IDE, setup Git version control, and prepare your terminal for command-line instructions.',
    prereqs: [],
    mentorVoice: "Getting your machine set up is always the most annoying part of any project. If you hit a weird installation error on your OS, don't worry—almost every engineer you know spent hours on this exact step.",
    whyMatters: "Think of this as assembling your workbench. Once the tools are in place, you don't have to think about them again for a long time.",
    activeMsg: "You've got this — let's focus on setting paths and testing the command line.",
    lockedMsg: "Once you unlock this, you'll prepare your workbench for the entire course.",
    completedMsg: "Nice work finishing this — getting tools running is a silent blocker for many!"
  },
  '2': {
    id: 'node-2',
    number: 'stage.02.kotlin',
    title: 'Write your first Kotlin script',
    track: 'Foundation',
    tech: 'Kotlin Basics',
    weight: 'Medium (6h)',
    desc: 'Code a command-line script using variables, loops, conditionals, and basic Kotlin functions to run on JVM.',
    prereqs: ['node-1'],
    mentorVoice: "Variables and loops can feel academic, but this is where your code learns to make decisions. Keep your scripts simple—you don't need to write a masterpiece yet.",
    whyMatters: "Kotlin is your language. Getting comfortable here means you won't be struggling with syntax when we start building actual user interfaces.",
    activeMsg: "Focus on simple logic statements today. Don't worry about complexity yet.",
    lockedMsg: "Once you unlock this, you'll start writing real, execution-logical scripts.",
    completedMsg: "Awesome job. Writing raw script files builds solid foundations."
  },
  '3': {
    id: 'node-3',
    number: 'stage.03.xml-layouts',
    title: 'Build a layout with XML',
    track: 'Foundation',
    tech: 'XML & Views',
    weight: 'Medium (8h)',
    desc: 'Design a structured static screen with text fields, images, margins, and alignment constraints using Android Views.',
    prereqs: ['node-2'],
    mentorVoice: "XML feels rigid and verbose, and aligning elements can feel like fighting gravity. Take your time with spacing, and don't worry if it looks plain at first.",
    whyMatters: "Understanding layout constraints now will save you hundreds of hours of debugging broken designs when we move to dynamic compose interfaces.",
    activeMsg: "Focus on parent-child nesting rules. Visual layout alignment is just practice.",
    lockedMsg: "Once you unlock this, you'll craft your first tactile mobile application screens.",
    completedMsg: "Great work. The visual layout constraints can be tedious, but you mastered it."
  },
  '4': {
    id: 'node-4',
    number: 'stage.04.fetch-json',
    title: 'Fetch JSON data from an API',
    track: 'Foundation',
    tech: 'HttpURLConnection & JSON',
    weight: 'Large (12h)',
    desc: 'Connect your local Android script to a public internet database, parse the incoming HTTP text stream, and display lists. Completing this unlocks both the Mobile and Backend tracks.',
    prereqs: ['node-3'],
    mentorVoice: "This is where your app finally connects to the world. It will feel like magic when the data first loads, but handling network failures is the real skill here.",
    whyMatters: "Almost every modern app is just a wrapper around some database on the internet. Mastering this unlocks the entire specialisation route.",
    activeMsg: "Pay close attention to error boundaries and loading indicators—network dropouts happen.",
    lockedMsg: "Once you unlock this, your application will finally connect to the global web.",
    completedMsg: "Excellent. Bridging layout interfaces with external web data is a major milestone."
  },
  
  // Mobile branch
  'm1': {
    id: 'node-m1',
    number: 'stage.m1.compose',
    title: 'Build an interactive Compose screen',
    track: 'Mobile',
    tech: 'Jetpack Compose',
    weight: 'Medium (8h)',
    desc: 'Replace legacy XML layout elements with modern Kotlin-based declarative Compose components and handle clicks.',
    prereqs: ['node-4'],
    mentorVoice: "Compose shifts the layout mental model from static templates to functional code. If you're used to XML, it will take a few hours to stop thinking in terms of strict constraints.",
    whyMatters: "This is how modern Android interfaces are built. It's faster, cleaner, and uses way less boilerplate than traditional views.",
    activeMsg: "Focus on UI state variables—interfaces rebuild themselves when variables shift.",
    lockedMsg: "Unlock this to discover modern declarative mobile layout principles.",
    completedMsg: "Superb. Declarative screen layouts are the standard everywhere now."
  },
  'm2': {
    id: 'node-m2',
    number: 'stage.m2.viewmodel',
    title: 'Manage state with ViewModel',
    track: 'Mobile',
    tech: 'ViewModel & LiveData',
    weight: 'Large (16h)',
    desc: 'Maintain user form inputs, list changes, and loading status indicators across device rotations and lifecycle shifts.',
    prereqs: ['node-m1'],
    mentorVoice: "State is where mobile apps get complicated. If you rotate the screen and your data disappears, you're experiencing the exact lifecycle bug this model solves.",
    whyMatters: "Users expect apps to feel seamless. Handling state properly is the boundary line between a student project and a commercial app.",
    activeMsg: "Isolate your interface presentation from logical data management rules.",
    lockedMsg: "Unlock this to handle runtime data survival during Android configurations changes.",
    completedMsg: "Spot on. ViewModel architecture is what keeps apps feeling bulletproof."
  },
  'm3': {
    id: 'node-m3',
    number: 'stage.m3.room-db',
    title: 'Persist records locally in Room',
    track: 'Mobile',
    tech: 'Room & SQLite',
    weight: 'Large (20h)',
    desc: 'Write SQL query interfaces wrapped in clean Kotlin DAO classes to cache user history records directly to disk.',
    prereqs: ['node-m2'],
    mentorVoice: "Writing database queries might feel like you're doing backend work, but keeping data offline is crucial. Don't worry if the setup code feels boilerplate-heavy.",
    whyMatters: "An app that only works when the user has 5G is a fragile app. Cache data locally first, and your app will feel instantly fast.",
    activeMsg: "Focus on data schema migrations—what happens when you update columns tomorrow?",
    lockedMsg: "Unlock this to learn how to store database files right on the mobile device disk.",
    completedMsg: "Magnificent. Offline support makes local device operations instantaneous."
  },
  'm4': {
    id: 'node-m4',
    number: 'stage.m4.workmanager',
    title: 'Schedule tasks with WorkManager',
    track: 'Mobile',
    tech: 'WorkManager API',
    weight: 'Medium (10h)',
    desc: 'Register battery-optimized background sync workers that automatically queue data upload runs even when the app is closed.',
    prereqs: ['node-m3'],
    mentorVoice: "Operating systems are aggressive about killing background apps to save battery. WorkManager is how you politely negotiate with the OS to get work done.",
    whyMatters: "Syncing data silently in the background keeps your users up to date without forcing them to wait for loading indicators.",
    activeMsg: "Keep background logic lean—battery efficiency is a critical release metric.",
    lockedMsg: "Unlock this to configure background services that run even when the screen is dark.",
    completedMsg: "Stellar. Background synchronization keeps user interfaces fresh."
  },
  
  // Backend branch
  'b1': {
    id: 'node-b1',
    number: 'stage.b1.express-api',
    title: 'Serve API routes with Express',
    track: 'Backend',
    tech: 'Node.js & Express',
    weight: 'Medium (10h)',
    desc: 'Construct a server that listens on local ports and answers GET and POST requests with custom structured JSON responses.',
    prereqs: ['node-4'],
    mentorVoice: "Creating routes can feel abstract since there is no UI to look at. Use a tool like Postman or curl to inspect your responses—visualizing the JSON makes all the difference.",
    whyMatters: "This server is the backbone of your system. Get this right, and serving web, mobile, or third-party clients becomes identical.",
    activeMsg: "Watch out for HTTP status codes. Setting a proper '404' or '400' matters to clients.",
    lockedMsg: "Unlock this to start hosting network endpoints that respond to web requests.",
    completedMsg: "Excellent server configuration. Endpoint routes are cleanly organized."
  },
  'b2': {
    id: 'node-b2',
    number: 'stage.b2.mongo-db',
    title: 'Connect routes to MongoDB',
    track: 'Backend',
    tech: 'Mongoose & MongoDB Atlas',
    weight: 'Medium (12h)',
    desc: 'Create secure database schemas with Mongoose models and handle write operations safely during client transactions.',
    prereqs: ['node-b1'],
    mentorVoice: "MongoDB is very forgiving, but that freedom can lead to messy data if you aren't careful. Focus on designing clean Mongoose schemas early.",
    whyMatters: "A server without a database is amnesic. Connecting MongoDB ensures your users' records persist long after the server restarts.",
    activeMsg: "Validate your data structures before saving. Bad DB data causes downstream crashes.",
    lockedMsg: "Unlock this to connect your server endpoints to a persistent cloud database.",
    completedMsg: "Great schema work. Database transactions are secure and organized."
  },
  'b3': {
    id: 'node-b3',
    number: 'stage.b3.jwt-auth',
    title: 'Encrypt passwords and sign JWTs',
    track: 'Backend',
    tech: 'Bcrypt & JWT Session',
    weight: 'Large (18h)',
    desc: 'Apply secure hashing functions on raw passwords and issue signed tokens to authorize incoming header calls.',
    prereqs: ['node-b2'],
    mentorVoice: "Security is non-negotiable. Don't try to invent your own cryptography here—stick to standard hashing libraries and verified JWT flows.",
    whyMatters: "Protecting user data builds trust. JWTs are the gold standard for secure, stateless communication between clients and APIs.",
    activeMsg: "Salt and hash passwords correctly. Never store plain credentials anywhere.",
    lockedMsg: "Unlock this to build secure user accounts and manage user sessions.",
    completedMsg: "Fantastic. Session authentication is signed and validated."
  },
  'b4': {
    id: 'node-b4',
    number: 'stage.b4.websockets',
    title: 'Stream live data using Socket.io',
    track: 'Backend',
    tech: 'WebSockets & Socket.io',
    weight: 'Large (16h)',
    desc: 'Setup full-duplex socket tunnels to broadcast real-time messaging updates between clients instantly.',
    prereqs: ['node-b3'],
    mentorVoice: "WebSockets are a different paradigm from HTTP request-response. Managing concurrent connections and connection drops is the real challenge.",
    whyMatters: "Real-time updates (like chat or live feeds) are what make an app feel alive and interactive instead of static.",
    activeMsg: "Set up reconnect logic—network tunnels will occasionally disconnect.",
    lockedMsg: "Unlock this to establish live full-duplex tunnels for instantaneous chat features.",
    completedMsg: "Splendid. Socket tunnels are broadcast-capable and stable."
  },
  
  // Integration & Deployment
  't1': {
    id: 'node-t1',
    number: 'stage.05.integ-tests',
    title: 'Write integration tests',
    track: 'Deployment',
    tech: 'Playwright & Postman',
    weight: 'Large (16h)',
    desc: 'Build testing scripts that run E2E scenarios on both client and backend database nodes, checking negative assertions. Locked until both backend and mobile specialization tracks are complete.',
    prereqs: ['node-m4', 'node-b4'],
    mentorVoice: "Testing always feels like extra homework until your first major code change breaks five unrelated features and a test catches it instantly.",
    whyMatters: "Tests are insurance. They give you the confidence to refactor and expand your code without worrying about collapsing the foundation.",
    activeMsg: "Run tests in automated headless environments. Catch crashes before they hit users.",
    lockedMsg: "Unlock this to verify your API endpoints and mobile modules simultaneously.",
    completedMsg: "Wonderful. Continuous integration protects code health."
  },
  't2': {
    id: 'node-t2',
    number: 'stage.06.security',
    title: 'Audit API security headers',
    track: 'Deployment',
    tech: 'Helmet & CORS Settings',
    weight: 'Small (4h)',
    desc: 'Enforce SSL redirect parameters, lock cross-origin requests to selected domains, and restrict script loading permissions.',
    prereqs: ['node-t1'],
    mentorVoice: "You don't need to be a security researcher to secure your app. Implementing standard security headers blocks 90% of common automated scripts.",
    whyMatters: "A fast app is useless if it's easily compromised. Protecting HTTP headers is the first line of defense in production.",
    activeMsg: "Configure Content Security Policy tags carefully. Lock script loading strictly.",
    lockedMsg: "Unlock this to harden your endpoints against automated scripting injection attacks.",
    completedMsg: "Awesome security audit. Common vulnerabilities are securely patched."
  },
  't3': {
    id: 'node-t3',
    number: 'stage.07.deploy-api',
    title: 'Deploy code to a cloud server',
    track: 'Deployment',
    tech: 'DigitalOcean & Let\'s Encrypt',
    weight: 'Medium (8h)',
    desc: 'Setup domain hosting maps, direct nameservers, configure Linux SSH firewalls, and install free automatic SSL certificates.',
    prereqs: ['node-t2'],
    mentorVoice: "Configuring a Linux server over SSH can feel intimidating if you're used to local environments. Take it step-by-step and write down your commands.",
    whyMatters: "Deploying to raw cloud servers gives you full control over your infrastructure and costs, a key skill for any lead developer.",
    activeMsg: "Lock down SSH ports and use secure keys. Never use root password auth.",
    lockedMsg: "Unlock this to route server domain mappings to a public Linux cloud machine.",
    completedMsg: "Brilliant cloud deployment. Web requests resolve over secure SSL."
  },
  't4': {
    id: 'node-t4',
    number: 'stage.08.play-store',
    title: 'Submit signed bundle to Play Store',
    track: 'Deployment',
    tech: 'Google Play Console',
    weight: 'Large (14h)',
    desc: 'Create release keystore builds, attach legal privacy policies, fill safety questionnaires, and upload to Google Play.',
    prereqs: ['node-t3'],
    mentorVoice: "Submitting to the Play Store is a bureaucratic journey of questionnaires and policies. Be patient—the review process takes time.",
    whyMatters: "This is the finish line. Sharing your app with millions of users makes all the hours of debugging completely worth it.",
    activeMsg: "Test signed bundles on physical release devices before submitting to review.",
    lockedMsg: "Unlock this to prepare your signed application for global app store indexing.",
    completedMsg: "Congratulations! Your application is officially indexed for distribution."
  }
};

// Map Connection Definitions (Node-to-Node Sequenced Route)
const CONNECTIONS = [
  { from: 'node-1', to: 'node-2', track: 'spine' },
  { from: 'node-2', to: 'node-3', track: 'spine' },
  { from: 'node-3', to: 'node-4', track: 'spine' },
  
  // Mobile branch (Branching route starts from 4)
  { from: 'node-4', to: 'node-m1', track: 'mobile' },
  { from: 'node-m1', to: 'node-m2', track: 'mobile' },
  { from: 'node-m2', to: 'node-m3', track: 'mobile' },
  { from: 'node-m3', to: 'node-m4', track: 'mobile' },
  
  // Backend branch (Branching route starts from 4)
  { from: 'node-4', to: 'node-b1', track: 'backend' },
  { from: 'node-b1', to: 'node-b2', track: 'backend' },
  { from: 'node-b2', to: 'node-b3', track: 'backend' },
  { from: 'node-b3', to: 'node-b4', track: 'backend' },
  
  // Merge back (Bridges connection to integration tests 05)
  { from: 'node-m4', to: 'node-t1', track: 'mobile' },
  { from: 'node-b4', to: 'node-t1', track: 'backend' },
  
  // Integration spine
  { from: 'node-t1', to: 'node-t2', track: 'spine' },
  { from: 'node-t2', to: 'node-t3', track: 'spine' },
  { from: 'node-t3', to: 'node-t4', track: 'spine' }
];

// State Variables
let completedNodes = [];
let selectedNodeId = 'node-1';
let lastCompletedNodeId = null;
let onboardingDismissed = false; // Dismiss session state

// Palette Tokens
const COLOR_PINE = '#2B6E5C';
const COLOR_PLUM = '#8B5A6B';
const COLOR_STONE = '#C7C2B8';
const COLOR_GOLD = '#D4A85A';

// Custom Cursor coordinates
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;
let dotX = 0, dotY = 0;
let activeMagneticNode = null;

// Reduced motion media query
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  loadProgress();
  initNodes();
  bindControls();
  initLenis();
  initCustomCursor();
  initBackgroundParallax();
  initBackgroundParticles();
  initOnboarding();
  
  // Interactive Coordinate Inspector Tracker
  const coordDisplay = document.getElementById('coord-display');
  const scrollArea = document.getElementById('map-scroll-area');
  if (scrollArea && coordDisplay) {
    scrollArea.addEventListener('mousemove', (e) => {
      const rect = scrollArea.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left + scrollArea.scrollLeft);
      const y = Math.round(e.clientY - rect.top + scrollArea.scrollTop);
      coordDisplay.textContent = `LOC // X:${x} Y:${y}`;
    });
  }

  // Interactive Legend Highlight Event Listeners
  const legendItems = document.querySelectorAll('.legend-item');
  const tracksGrid = document.querySelector('.tracks-grid');
  if (legendItems && tracksGrid) {
    legendItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const text = item.textContent.trim().toLowerCase();
        if (text.includes('spine') || text.includes('core')) {
          tracksGrid.classList.add('highlight-spine');
        } else if (text.includes('mobile')) {
          tracksGrid.classList.add('highlight-mobile');
        } else if (text.includes('backend')) {
          tracksGrid.classList.add('highlight-backend');
        }
      });
      
      item.addEventListener('mouseleave', () => {
        tracksGrid.className = 'tracks-grid';
      });
    });
  }
  
  // Auto-inspect the active wayfinding target by default on load
  const activeTargetId = getYouAreHereNodeId();
  const activeShortId = Object.keys(NODES_DATA).find(k => NODES_DATA[k].id === activeTargetId);
  inspectNode(activeShortId || '1');

  // Initial draw of paths
  setTimeout(() => {
    drawConnections();
    updateYouAreHereFlag();
  }, 100);

  // Auto-scroll to center the active node in the viewport on load
  setTimeout(() => {
    scrollActiveNodeIntoView(activeTargetId, true);
  }, 300);

  window.addEventListener('resize', () => {
    drawConnections();
    updateYouAreHereFlag();
  });
});

// Smoothly scroll active node into the center of viewport
function scrollActiveNodeIntoView(nodeId, immediate = false) {
  const activeNodeEl = document.getElementById(nodeId);
  const scrollArea = document.getElementById('map-scroll-area');
  if (!activeNodeEl || !scrollArea) return;
  
  // Calculate relative top scroll offset
  const scrollTop = activeNodeEl.offsetTop - (scrollArea.clientHeight / 2) + (activeNodeEl.clientHeight / 2);
  const targetScroll = Math.max(0, scrollTop);
  
  if (immediate || prefersReducedMotion) {
    scrollArea.scrollTop = targetScroll;
  } else {
    if (typeof gsap !== 'undefined') {
      gsap.to(scrollArea, {
        scrollTop: targetScroll,
        duration: 1.1,
        ease: "power2.inOut",
        overwrite: "auto"
      });
    } else {
      scrollArea.scrollTop = targetScroll;
    }
  }
}

// Load state from localStorage
function loadProgress() {
  const saved = localStorage.getItem('care-platform-expedition-completed');
  if (saved) {
    try {
      completedNodes = JSON.parse(saved);
    } catch (e) {
      completedNodes = [];
    }
  }
}

// Save state to localStorage
function saveProgress() {
  localStorage.setItem('care-platform-expedition-completed', JSON.stringify(completedNodes));
}

// Initialize Lenis smooth scroll
function initLenis() {
  const scrollArea = document.getElementById('map-scroll-area');
  if (scrollArea && typeof Lenis !== 'undefined' && !prefersReducedMotion) {
    const lenis = new Lenis({
      wrapper: scrollArea,
      content: scrollArea.querySelector('.tracks-grid'),
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true
    });
    
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);
  }
}

// Onboarding Briefing Card dismissal
function initOnboarding() {
  const callout = document.getElementById('onboarding-callout');
  const dismissBtn = document.getElementById('onboarding-dismiss-btn');
  if (!callout || !dismissBtn) return;

  dismissBtn.addEventListener('click', () => {
    onboardingDismissed = true;
    if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
      gsap.to(callout, {
        opacity: 0,
        y: -15,
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          callout.remove();
          // Re-scroll active node post layout shifts
          const activeTargetId = getYouAreHereNodeId();
          scrollActiveNodeIntoView(activeTargetId, false);
        }
      });
    } else {
      callout.remove();
    }
  });
}

// Custom Cursor implementation with single-loop RAF centering coordinates
// Uses CSS Custom Properties to avoid GSAP translation overwrites on diamond junctions
function initCustomCursor() {
  if (prefersReducedMotion) return;
  
  const cursor = document.getElementById('custom-cursor');
  const ring = document.querySelector('.cursor-ring');
  const dot = document.querySelector('.cursor-dot');
  const cursorText = document.getElementById('cursor-text');
  
  if (!cursor || !ring || !dot) return;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Custom cursor tracking frame loops (ensures no events conflicts override magnetic pulls)
  function updateCursorFrame() {
    let targetRingX = mouseX;
    let targetRingY = mouseY;
    let targetDotX = mouseX;
    let targetDotY = mouseY;

    if (activeMagneticNode && !prefersReducedMotion) {
      const rect = activeMagneticNode.getBoundingClientRect();
      const nodeCenterX = rect.left + rect.width / 2;
      const nodeCenterY = rect.top + rect.height / 2;
      
      const distX = mouseX - nodeCenterX;
      const distY = mouseY - nodeCenterY;
      const distance = Math.hypot(distX, distY);
      
      if (distance < 75) {
        // Pull cursor ring slightly towards node center
        targetRingX = mouseX + (nodeCenterX - mouseX) * 0.45;
        targetRingY = mouseY + (nodeCenterY - mouseY) * 0.45;
        
        // Pull node slightly towards mouse coordinates (Uses CSS custom properties to prevent diamond rotate overrides)
        const nodePullX = distX * 0.22;
        const nodePullY = distY * 0.22;
        gsap.to(activeMagneticNode, {
          '--translate-x': `${nodePullX}px`,
          '--translate-y': `${nodePullY}px`,
          duration: 0.15,
          overwrite: "auto"
        });
      } else {
        // Reset if moved outside node radius
        activeMagneticNode = null;
      }
    }

    // Lerp coordinates
    ringX += (targetRingX - ringX) * 0.16;
    ringY += (targetRingY - ringY) * 0.16;
    
    dotX += (targetDotX - dotX) * 0.45;
    dotY += (targetDotY - dotY) * 0.45;

    // Apply translations using template offset transformations
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(updateCursorFrame);
  }
  requestAnimationFrame(updateCursorFrame);
  
  // Bind hover states for interactive items
  document.querySelectorAll('.map-node').forEach(node => {
    node.addEventListener('mouseenter', () => {
      const isLocked = node.classList.contains('locked');
      const isCompleted = node.classList.contains('completed');
      
      activeMagneticNode = node; // Register active magnetic target
      
      if (isLocked) {
        cursor.className = 'custom-cursor hover-locked';
        cursorText.textContent = 'Locked';
      } else if (isCompleted) {
        cursor.className = 'custom-cursor hover-active';
        cursorText.textContent = 'Built';
      } else {
        cursor.className = 'custom-cursor hover-active';
        cursorText.textContent = 'Build';
      }
    });
    
    node.addEventListener('mouseleave', () => {
      cursor.className = 'custom-cursor';
      cursorText.textContent = 'Build';
      
      // Elastic recoil spring back using custom translate parameters
      activeMagneticNode = null;
      gsap.to(node, {
        '--translate-x': '0px',
        '--translate-y': '0px',
        duration: 0.55,
        ease: "elastic.out(1.1, 0.65)",
        overwrite: true
      });
    });
  });
  
  document.querySelectorAll('.action-btn, a, button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      cursor.className = 'custom-cursor hover-active';
      cursorText.textContent = '';
    });
    
    btn.addEventListener('mouseleave', () => {
      cursor.className = 'custom-cursor';
    });
  });
}

// Bind hover interactions and magnetic node attraction
function initNodes() {
  const nodes = document.querySelectorAll('.map-node');
  
  nodes.forEach(node => {
    // 1. Shaking locked click attempt
    node.addEventListener('click', () => {
      if (node.classList.contains('locked')) {
        node.classList.add('shake');
        node.addEventListener('animationend', () => {
          node.classList.remove('shake');
        }, { once: true });
        return;
      }
      
      const id = node.dataset.id;
      inspectNode(id);
    });

    // 2. Highlight connected path segments on node hover
    node.addEventListener('mouseenter', () => {
      document.querySelectorAll('.wobbly-connector').forEach(path => {
        if (path.dataset.from === node.id || path.dataset.to === node.id) {
          gsap.to(path, {
            strokeWidth: 6,
            filter: "brightness(1.18)",
            duration: 0.25,
            overwrite: "auto"
          });
        }
      });
    });

    node.addEventListener('mouseleave', () => {
      document.querySelectorAll('.wobbly-connector').forEach(path => {
        gsap.to(path, {
          strokeWidth: 4,
          filter: "none",
          duration: 0.25,
          overwrite: "auto"
        });
      });
    });
  });
}

// Background parallax lines relative to cursor
function initBackgroundParallax() {
  const topoBg = document.getElementById('topo-bg');
  if (topoBg && !prefersReducedMotion) {
    const xToTopo = gsap.quickTo(topoBg, "x", { duration: 1.1, ease: "power2.out" });
    const yToTopo = gsap.quickTo(topoBg, "y", { duration: 1.1, ease: "power2.out" });

    document.addEventListener('mousemove', (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * -0.015;
      const moveY = (e.clientY - window.innerHeight / 2) * -0.015;
      xToTopo(moveX);
      yToTopo(moveY);
    });
  }
}

// Inspect details of node
function inspectNode(shortId) {
  const data = NODES_DATA[shortId];
  if (!data) return;
  
  selectedNodeId = data.id;
  
  document.getElementById('detail-placeholder').classList.add('hidden');
  const content = document.getElementById('detail-content');
  content.classList.remove('hidden');
  
  // Handle unlock conditions
  const isUnlocked = checkIsUnlocked(data.id);
  const isCompleted = completedNodes.includes(data.id);
  
  const lockedAlert = document.getElementById('detail-locked-alert');
  const completeBtn = document.getElementById('complete-btn');
  const revertBtn = document.getElementById('revert-btn');
  
  // Transition content slide up + fade (staggered specs vs slower mentor)
  if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
    gsap.fromTo([
      '.node-header-group', 
      '.rhythm-tick',
      '.detail-meta-grid', 
      '.detail-description-section', 
      '.detail-actions', 
      '#detail-locked-alert'
    ], 
      { opacity: 0, y: 8 }, 
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out", stagger: 0.03 }
    );
    
    // Mentor voice loads with a slower, softer delay
    gsap.fromTo('.mentor-section',
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.12, ease: "power3.out" }
    );
  }
  
  // Update texts
  document.getElementById('detail-title').textContent = data.title;
  document.getElementById('detail-track-tag').textContent = data.track;
  document.getElementById('detail-track-tag').className = `node-track-tag track-${data.track.toLowerCase()}`;
  document.getElementById('detail-weight').textContent = data.weight;
  document.getElementById('detail-tech').textContent = data.tech;
  document.getElementById('detail-desc').textContent = data.desc;
  
  // Dynamic Mentor Context Messaging
  document.getElementById('mentor-voice').textContent = `"${data.mentorVoice}"`;
  document.getElementById('mentor-why-matters-text').textContent = data.whyMatters;
  
  const encouragementEl = document.getElementById('mentor-encouragement');
  
  if (isCompleted) {
    completeBtn.classList.add('hidden');
    revertBtn.classList.remove('hidden');
    lockedAlert.classList.add('hidden');
    encouragementEl.textContent = data.completedMsg;
    encouragementEl.style.color = 'var(--color-gold)';
  } else {
    completeBtn.classList.remove('hidden');
    revertBtn.classList.add('hidden');
    
    if (isUnlocked) {
      completeBtn.disabled = false;
      lockedAlert.classList.add('hidden');
      encouragementEl.textContent = data.activeMsg;
      encouragementEl.style.color = 'var(--color-pine)';
    } else {
      completeBtn.disabled = true;
      lockedAlert.classList.remove('hidden');
      encouragementEl.textContent = data.lockedMsg;
      encouragementEl.style.color = 'var(--color-plum)';
      
      // Build prerequisite description (warm tone pass)
      const prereqTitles = data.prereqs.map(pid => {
        const key = Object.keys(NODES_DATA).find(k => NODES_DATA[k].id === pid);
        return key ? `"${NODES_DATA[key].title}"` : '';
      }).filter(Boolean).join(' and ');
      
      document.getElementById('detail-locked-text').textContent = 
        `Finish ${prereqTitles} first, and this route will open right up.`;
    }
  }
  
  // Highlight currently inspected node visually on map
  document.querySelectorAll('.map-node').forEach(el => {
    el.style.borderWidth = '2.5px';
    el.style.boxShadow = '';
  });
  const mapNodeEl = document.getElementById(data.id);
  if (mapNodeEl) {
    mapNodeEl.style.borderWidth = '4px';
    mapNodeEl.style.boxShadow = `0 0 0 4px var(--color-paper), 0 0 0 7px var(--color-gold)`;
  }
}

// Check prerequisite state
function checkIsUnlocked(nodeId) {
  const nodeKey = Object.keys(NODES_DATA).find(k => NODES_DATA[k].id === nodeId);
  if (!nodeKey) return false;
  
  const prereqs = NODES_DATA[nodeKey].prereqs;
  if (!prereqs || prereqs.length === 0) return true;
  
  return prereqs.every(pid => completedNodes.includes(pid));
}

// Bind complete buttons and automatic slide
function bindControls() {
  const completeBtn = document.getElementById('complete-btn');
  const revertBtn = document.getElementById('revert-btn');
  
  completeBtn.addEventListener('click', () => {
    if (!completedNodes.includes(selectedNodeId)) {
      runTerminalBuildSimulation(selectedNodeId, () => {
        lastCompletedNodeId = selectedNodeId;
        completedNodes.push(selectedNodeId);
        saveProgress();
        
        // Spawn tactile particle burst
        triggerSuccessParticles(selectedNodeId);
        
        // Redraw map connections and floating flag
        updateMapUI();
        drawConnections();
        updateYouAreHereFlag();
        
        // Slide detail view to next target automatically
        setTimeout(() => {
          const nextActiveId = getYouAreHereNodeId();
          const nextShortId = Object.keys(NODES_DATA).find(k => NODES_DATA[k].id === nextActiveId);
          inspectNode(nextShortId || '1');
          scrollActiveNodeIntoView(nextActiveId, false); // Auto center next active node
        }, 750);
      });
    }
  });
  
  revertBtn.addEventListener('click', () => {
    const consoleBody = document.getElementById('console-body');
    if (consoleBody) {
      consoleBody.innerHTML = '';
      const line1 = document.createElement('div');
      line1.className = 'console-line command';
      line1.textContent = `$ git reset --hard HEAD~1`;
      consoleBody.appendChild(line1);
      
      const line2 = document.createElement('div');
      line2.className = 'console-line system';
      line2.textContent = `Rolling back module integrations...`;
      consoleBody.appendChild(line2);
      
      setTimeout(() => {
        const line3 = document.createElement('div');
        line3.className = 'console-line success';
        line3.textContent = `HEAD is now at previous target commit.`;
        consoleBody.appendChild(line3);
        consoleBody.scrollTop = consoleBody.scrollHeight;
      }, 300);
    }

    completedNodes = completedNodes.filter(id => id !== selectedNodeId);
    
    // Lock cascading nodes
    let changed = true;
    while (changed) {
      changed = false;
      for (const key in NODES_DATA) {
        const node = NODES_DATA[key];
        if (completedNodes.includes(node.id) && !checkIsUnlocked(node.id)) {
          completedNodes = completedNodes.filter(id => id !== node.id);
          changed = true;
        }
      }
    }
    
    lastCompletedNodeId = null;
    saveProgress();
    
    updateMapUI();
    drawConnections();
    updateYouAreHereFlag();
    
    const shortId = Object.keys(NODES_DATA).find(k => NODES_DATA[k].id === selectedNodeId);
    inspectNode(shortId);
    scrollActiveNodeIntoView(selectedNodeId, false);
  });
}

// Gradle compile build simulation
function runTerminalBuildSimulation(nodeId, callback) {
  const consoleBox = document.getElementById('console-box');
  const consoleBody = document.getElementById('console-body');
  const completeBtn = document.getElementById('complete-btn');
  
  if (!consoleBox || !consoleBody) {
    callback();
    return;
  }
  
  // Disable button during compile simulation
  completeBtn.disabled = true;
  consoleBox.classList.add('building');
  
  // Find node name
  const nodeKey = Object.keys(NODES_DATA).find(k => NODES_DATA[k].id === nodeId);
  const data = NODES_DATA[nodeKey];
  const stageName = data.number;
  
  const logs = [
    { text: `$ ./gradlew compile:${stageName}`, type: 'command' },
    { text: `[gradle] Executing tasks: [:${stageName}:assembleDebug]`, type: 'system' },
    { text: `[compiler] compiling ${data.tech || 'Kotlin sources'}...`, type: 'compile' },
    { text: `[compiler] processing layout assets and resources`, type: 'compile' },
    { text: `[testing] running unit tests for ${stageName}...`, type: 'compile' },
    { text: `[gradle] BUILD SUCCESSFUL in 890ms`, type: 'success' },
    { text: `[git] staging changes...`, type: 'system' },
    { text: `[git] commit -m "module ${stageName} integrated successfully"`, type: 'command' },
    { text: `[system] target commit successful.`, type: 'success' }
  ];
  
  consoleBody.innerHTML = '';
  let index = 0;
  
  function printNextLine() {
    if (index < logs.length) {
      const log = logs[index];
      const line = document.createElement('div');
      line.className = `console-line ${log.type}`;
      line.textContent = log.text;
      consoleBody.appendChild(line);
      consoleBody.scrollTop = consoleBody.scrollHeight;
      
      // Update compiler progress bar live as compile steps run
      const completedCount = completedNodes.length; 
      const interimCount = completedCount + (index / logs.length);
      const interimPct = (interimCount / 16) * 100;
      
      const progressFillEl = document.getElementById('custom-progress-fill');
      if (progressFillEl) progressFillEl.style.width = `${interimPct}%`;
      const pctTextEl = document.getElementById('terminal-percentage');
      if (pctTextEl) pctTextEl.textContent = `${interimPct.toFixed(1)}%`;
      
      index++;
      setTimeout(printNextLine, 90);
    } else {
      consoleBox.classList.remove('building');
      completeBtn.disabled = false;
      callback();
    }
  }
  
  printNextLine();
}

// Confetti burst success particles
function triggerSuccessParticles(nodeId) {
  const nodeEl = document.getElementById(nodeId);
  const scrollArea = document.getElementById('map-scroll-area');
  if (!nodeEl || !scrollArea || typeof gsap === 'undefined' || prefersReducedMotion) return;
  
  const rect = nodeEl.getBoundingClientRect();
  const scrollRect = scrollArea.getBoundingClientRect();
  
  const centerX = rect.left - scrollRect.left + scrollArea.scrollLeft + rect.width / 2;
  const centerY = rect.top - scrollRect.top + scrollArea.scrollTop + rect.height / 2;
  
  const colors = [COLOR_PINE, COLOR_PLUM, COLOR_GOLD];
  
  for (let i = 0; i < 24; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.left = `${centerX}px`;
    particle.style.top = `${centerY}px`;
    particle.style.width = `${Math.random() * 8 + 6}px`;
    particle.style.height = `${Math.random() * 8 + 6}px`;
    particle.style.borderRadius = '50%';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '100';
    
    scrollArea.appendChild(particle);
    
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 95 + 45;
    
    gsap.to(particle, {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance - 25,
      opacity: 0,
      scale: 0.1,
      duration: Math.random() * 0.9 + 0.6,
      ease: "power2.out",
      onComplete: () => {
        particle.remove();
      }
    });
  }
}

// Update Map class mappings based on complete/active/available/locked states
function updateMapUI() {
  let completedCount = 0;
  
  // Find current active node ID (first unlocked and not complete)
  const currentActiveId = getYouAreHereNodeId();
  
  // Handle dynamically dimming/un-dimming branches (Stage 04 check)
  const isStage4Complete = completedNodes.includes('node-4');
  const colMobile = document.getElementById('col-mobile');
  const colBackend = document.getElementById('col-backend');
  
  if (isStage4Complete) {
    if (colMobile && colMobile.classList.contains('inactive-branch')) {
      colMobile.classList.remove('inactive-branch');
      if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
        gsap.fromTo(colMobile, 
          { opacity: 0.35, filter: "grayscale(0.8) blur(0.2px)" }, 
          { opacity: 1, filter: "grayscale(0) blur(0px)", duration: 0.85, ease: "power2.out" }
        );
      }
    }
    if (colBackend && colBackend.classList.contains('inactive-branch')) {
      colBackend.classList.remove('inactive-branch');
      if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
        gsap.fromTo(colBackend, 
          { opacity: 0.35, filter: "grayscale(0.8) blur(0.2px)" }, 
          { opacity: 1, filter: "grayscale(0) blur(0px)", duration: 0.85, ease: "power2.out" }
        );
      }
    }
  } else {
    colMobile?.classList.add('inactive-branch');
    colBackend?.classList.add('inactive-branch');
  }
  
  for (const key in NODES_DATA) {
    const data = NODES_DATA[key];
    const nodeEl = document.getElementById(data.id);
    if (!nodeEl) continue;
    
    const isCompleted = completedNodes.includes(data.id);
    const isUnlocked = checkIsUnlocked(data.id);
    
    // Clear dynamic states, keep base
    nodeEl.className = 'map-node';
    
    // Maintain track classes
    if (data.id.startsWith('node-m')) {
      nodeEl.classList.add('node-mobile');
    } else if (data.id.startsWith('node-b')) {
      nodeEl.classList.add('node-backend');
    } else if (data.id.startsWith('node-t')) {
      nodeEl.classList.add('node-deployment');
    } else {
      nodeEl.classList.add('node-foundation');
    }
    
    // Core decision node junction styling (diamond shape preservation)
    if (data.id === 'node-4') {
      nodeEl.classList.add('node-junction');
    }
    
    // Apply state-appropriate classes
    if (isCompleted) {
      nodeEl.classList.add('completed');
      completedCount++;
    } else if (data.id === currentActiveId) {
      if (data.id.startsWith('node-m')) {
        nodeEl.classList.add('active-mobile');
      } else if (data.id.startsWith('node-b')) {
        nodeEl.classList.add('active-backend');
      } else {
        nodeEl.classList.add('active-spine');
      }
    } else if (isUnlocked) {
      nodeEl.classList.add('available');
    } else {
      nodeEl.classList.add('locked');
    }
  }
  
  // Progress calculations (Monospace compiler status)
  const progressTextEl = document.getElementById('progress-text');
  if (progressTextEl) {
    progressTextEl.textContent = `${completedCount}/16 modules built`;
  }
  const fillPct = (completedCount / 16) * 100;
  const progressFillEl = document.getElementById('custom-progress-fill');
  if (progressFillEl) {
    progressFillEl.style.width = `${fillPct}%`;
  }
  const pctTextEl = document.getElementById('terminal-percentage');
  if (pctTextEl) {
    pctTextEl.textContent = `${fillPct.toFixed(1)}%`;
  }
  
  // Plain language remaining stages status update
  const remainingCount = 16 - completedCount;
  const remainingTextEl = document.getElementById('remaining-text');
  if (remainingTextEl) {
    remainingTextEl.textContent = `${remainingCount} stage${remainingCount !== 1 ? 's' : ''} remaining`;
  }
}

// Retrieve active uncompleted target
function getYouAreHereNodeId() {
  const sequence = [
    'node-1', 'node-2', 'node-3', 'node-4',
    'node-m1', 'node-m2', 'node-m3', 'node-m4',
    'node-b1', 'node-b2', 'node-b3', 'node-b4',
    'node-t1', 'node-t2', 'node-t3', 'node-t4'
  ];
  
  for (const id of sequence) {
    if (checkIsUnlocked(id) && !completedNodes.includes(id)) {
      return id;
    }
  }
  return 'node-t4';
}

// Reposition floating flag
function updateYouAreHereFlag() {
  const activeId = getYouAreHereNodeId();
  const targetNode = document.getElementById(activeId);
  const flag = document.getElementById('you-are-here-flag');
  const scrollArea = document.getElementById('map-scroll-area');
  
  if (!targetNode || !flag || !scrollArea) return;
  
  const rect = targetNode.getBoundingClientRect();
  const scrollRect = scrollArea.getBoundingClientRect();
  
  const left = rect.left - scrollRect.left + scrollArea.scrollLeft + rect.width / 2;
  const top = rect.top - scrollRect.top + scrollArea.scrollTop + rect.height / 2;
  
  if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
    gsap.to(flag, {
      left: left,
      top: top,
      duration: 0.55,
      ease: "power2.out",
      overwrite: "auto"
    });
  } else {
    flag.style.left = `${left}px`;
    flag.style.top = `${top}px`;
  }
  flag.classList.add('visible');
  
  const nodeKey = Object.keys(NODES_DATA).find(k => NODES_DATA[k].id === activeId);
  if (nodeKey) {
    const data = NODES_DATA[nodeKey];
    document.getElementById('active-node-title').textContent = data.title;
    document.getElementById('active-node-badge').textContent = data.number;
  }
}

// Draw wobbly connectors with ScrollTrigger scroll scrub binding
function drawConnections() {
  const svg = document.getElementById('map-svg');
  const g = document.getElementById('paths-group');
  const scrollArea = document.getElementById('map-scroll-area');
  
  if (!svg || !g || !scrollArea) return;
  
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.getAll().forEach(t => t.kill());
  }
  
  svg.setAttribute('width', scrollArea.scrollWidth);
  svg.setAttribute('height', scrollArea.scrollHeight);
  
  const scrollRect = scrollArea.getBoundingClientRect();
  g.innerHTML = '';
  
  CONNECTIONS.forEach(conn => {
    const fromEl = document.getElementById(conn.from);
    const toEl = document.getElementById(conn.to);
    
    if (!fromEl || !toEl) return;
    
    const fromRect = fromEl.getBoundingClientRect();
    const toRect = toEl.getBoundingClientRect();
    
    const x1 = fromRect.left - scrollRect.left + scrollArea.scrollLeft + fromRect.width / 2;
    const y1 = fromRect.top - scrollRect.top + scrollArea.scrollTop + fromRect.height / 2;
    const x2 = toRect.left - scrollRect.left + scrollArea.scrollLeft + toRect.width / 2;
    const y2 = toRect.top - scrollRect.top + scrollArea.scrollTop + toRect.height / 2;
    
    const pathD = getWobblyPath(x1, y1, x2, y2);
    
    // Determine connection state: is traversable, active, or complete?
    const isFromCompleted = completedNodes.includes(conn.from);
    const isToCompleted = completedNodes.includes(conn.to);
    
    // 1. Draw Background single continuous route line (reduced opacity stone gray)
    const bgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    bgPath.setAttribute('d', pathD);
    bgPath.setAttribute('stroke', COLOR_STONE);
    bgPath.setAttribute('stroke-width', '2.5');
    bgPath.setAttribute('stroke-opacity', '0.24');
    bgPath.setAttribute('fill', 'none');
    bgPath.setAttribute('stroke-linecap', 'round');
    bgPath.setAttribute('stroke-linejoin', 'round');
    g.appendChild(bgPath);
    
    // 2. Draw Foreground wobbly route overlay (active color sequence)
    if (isFromCompleted) {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute('d', pathD);
      path.setAttribute('class', 'wobbly-connector');
      
      path.dataset.from = conn.from;
      path.dataset.to = conn.to;
      
      const strokeColor = conn.track === 'spine' ? COLOR_PINE : COLOR_PLUM;
      path.setAttribute('stroke', strokeColor);
      path.setAttribute('stroke-width', '4');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      g.appendChild(path);
      
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      
      if (prefersReducedMotion) {
        path.style.strokeDashoffset = '0';
      } else {
        if (conn.from === lastCompletedNodeId) {
          gsap.fromTo(path, 
            { strokeDashoffset: length }, 
            { strokeDashoffset: 0, duration: 0.5, ease: "power1.out" }
          );
        } else if (isToCompleted) {
          path.style.strokeDashoffset = '0';
        } else {
          // Scroll Triggered active progression scrub
          gsap.fromTo(path, 
            { strokeDashoffset: length },
            {
              strokeDashoffset: 0,
              ease: "none",
              scrollTrigger: {
                trigger: fromEl,
                start: "bottom center",
                end: () => `+=${toEl.getBoundingClientRect().top - fromEl.getBoundingClientRect().bottom}`,
                scrub: 0.3
              }
            }
          );
        }
      }
    }
  });
  
  // Refresh UI states
  updateMapUI();
}

// Wobbly route points generator
function getWobblyPath(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy);
  
  if (dist < 15) return `M ${x1} ${y1} L ${x2} ${y2}`;
  
  // Straightened wobble lines for sequential deliberate route appearance
  const numSegments = Math.max(4, Math.floor(dist / 20));
  const points = [];
  points.push({ x: x1, y: y1 });
  
  const nx = -dy / dist;
  const ny = dx / dist;
  
  for (let i = 1; i < numSegments; i++) {
    const t = i / numSegments;
    const px = x1 + dx * t;
    const py = y1 + dy * t;
    
    // Muted wave offset for subtle organic feeling that stays legible as a path
    const wave = Math.sin(t * Math.PI) * 2.8;
    const noise = (Math.random() - 0.5) * 1.0;
    const offset = wave + noise;
    
    points.push({
      x: px + nx * offset,
      y: py + ny * offset
    });
  }
  points.push({ x: x2, y: y2 });
  
  let d = `M ${x1} ${y1}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i+1];
    const mx = (p1.x + p2.x) / 2;
    const my = (p1.y + p2.y) / 2;
    d += ` Q ${p1.x} ${p1.y} ${mx} ${my}`;
  }
  d += ` L ${x2} ${y2}`;
  return d;
}

// Interactive background canvas particle trailing engine
function initBackgroundParticles() {
  if (prefersReducedMotion) return;
  
  const canvas = document.getElementById('particle-canvas');
  const scrollArea = document.getElementById('map-scroll-area');
  if (!canvas || !scrollArea) return;
  
  const ctx = canvas.getContext('2d');
  
  // Resize canvas to cover full scrollable area and match style dimensions exactly
  function resizeCanvas() {
    canvas.width = scrollArea.scrollWidth;
    canvas.height = scrollArea.scrollHeight;
    canvas.style.width = scrollArea.scrollWidth + 'px';
    canvas.style.height = scrollArea.scrollHeight + 'px';
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Listen for mutations/resizes to the scroll container to resize canvas
  const resizeObserver = new ResizeObserver(() => {
    resizeCanvas();
  });
  resizeObserver.observe(scrollArea);
  
  let particles = [];
  const symbols = ['{', '}', '[', ']', '<', '>', '0', '1', '+', '-', 'x', 'y', 'db', 'api', 'ws', 'git', 'kt', 'xml'];
  const colors = ['#2B6E5C', '#8B5A6B', '#D4A85A', '#C7C2B8'];
  
  // Track last spawn position to limit rate
  let lastX = 0;
  let lastY = 0;
  
  scrollArea.addEventListener('mousemove', (e) => {
    const rect = scrollArea.getBoundingClientRect();
    const x = e.clientX - rect.left + scrollArea.scrollLeft;
    const y = e.clientY - rect.top + scrollArea.scrollTop;
    
    // Check distance moved to prevent spawning too many particles
    const dist = Math.hypot(x - lastX, y - lastY);
    if (dist > 8) {
      spawnParticle(x, y);
      lastX = x;
      lastY = y;
    }
  });
  
  scrollArea.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const rect = scrollArea.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left + scrollArea.scrollLeft;
      const y = e.touches[0].clientY - rect.top + scrollArea.scrollTop;
      spawnParticle(x, y);
    }
  }, { passive: true });
  
  function spawnParticle(x, y) {
    const isChar = Math.random() > 0.45;
    particles.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 2.0,
      vy: (Math.random() - 0.5) * 2.0 - 0.5, // upward float drift
      alpha: 0.9,
      decay: Math.random() * 0.01 + 0.006,
      scale: Math.random() * 0.7 + 0.6,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.05,
      color: colors[Math.floor(Math.random() * colors.length)],
      isChar: isChar,
      text: symbols[Math.floor(Math.random() * symbols.length)]
    });
    
    // Cap maximum particles for performance
    if (particles.length > 200) {
      particles.shift();
    }
  }
  
  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.angle += p.spin;
      p.alpha -= p.decay;
      
      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }
      
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      
      if (p.isChar) {
        ctx.font = `bold ${Math.round(15 * p.scale)}px "Space Mono", monospace`;
        ctx.fillText(p.text, 0, 0);
      } else {
        // Draw a small custom pixelated square or circle
        const size = 8 * p.scale;
        ctx.fillRect(-size/2, -size/2, size, size);
      }
      
      ctx.restore();
    }
    
    requestAnimationFrame(animateParticles);
  }
  
  requestAnimationFrame(animateParticles);
}
