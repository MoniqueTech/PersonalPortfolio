# Personal Portfolio – Monique Lotriet

## Site Purpose
A personal, story-driven portfolio that showcases my 3-month learning journey from semantic HTML and responsive CSS to JavaScript interactivity.  
This site will continue to grow into a full professional portfolio.

## Theme & Design
I chose a **professional theme with a bold + fun edge** to showcase my journey.  
My design tokens/colors are consistent across the site:  
- **Primary:** Royal Purple `#6D28D9`  
- **Background:** Off-white `#FAFAF9`  
- **Text:** Dark Gray `#111827`  
- **Muted:** Cool Gray `#4B5563`  
- **Accent:** Bright Coral `#F43F5E`  

This palette gives the site a modern, approachable feel while keeping it professional and easy to read.

## Pages / Sitemap
- **Home (index.html):** intro, highlights, and CTAs to Projects/About
- **About (about.html):** my story, skills, and learning timeline (Task 1 → Task 4)
- **Projects (projects.html):** project block with screenshots and “Read more” interactivity
- **Footer (footer.html):** shared footer file, pulled into each page with JavaScript to avoid duplication

## Challenges & Solutions
The biggest challenge was deciding what I actually wanted to include on each page and choosing the right theme.  
From a technical perspective, I found that if I kept a clear order (first HTML, then CSS, then JS) everything flowed more easily.  
I also learned the importance of keeping class names simple and not over using them, so the project stays manageable.  

Another new challenge for me was adding the **“Read more” button** in the projects section. This was my first time trying something like that, and I was proud to get it working.  

Instead of copy-pasting the footer into every page, I decided to keep it in a **separate `footer.html` file** and load it with JavaScript. This leaves less room for error and gives me one place to update content if anything changes.

## JavaScript Features
- **Welcome Popup (index.html):** A one-time popup greets the user when the homepage loads.  
- **Read More Toggle (projects.html):** Expands and collapses extra project details and images with a button.  
- **Shared Footer Loader:** A single `footer.html` file is dynamically loaded into all pages using JavaScript, reducing duplication and leaving only one place to update content.  


## Accessibility & Semantic HTML
I focused on building the site with good structure and accessibility:
- Semantic tags used throughout
- Alt text for all images.
- Clear heading hierachy.

These small steps ensure the site works for more people and follows best practices.

## Links
- **Live site (GitHub Pages): [https://moniquetech.github.io/PersonalPortfolio/index.html](https://moniquetech.github.io/PersonalPortfolio/index.html)
- **Public repository:** [https://github.com/MoniqueTech/PersonalPortfolio](https://github.com/MoniqueTech/PersonalPortfolio)
