# Teacher Portfolio Website — Project Brief
**Owner:** Meralyn P. Matundo  
**Role:** Elementary School Teacher  
**Location:** Bislig City, Philippines

---

## Overview

A personal portfolio website for an elementary school teacher. The site is designed to be professional, formal, and visually refined — suitable for sharing with school administrators, fellow educators, and parents. It serves as a digital resume and teaching portfolio in one.

---

## Design System

### Color Palette

| Role | Color | Hex |
|---|---|---|
| Primary Background | Cream White | `#FAF7F2` |
| Secondary Background | Warm Cream | `#F0EBE0` |
| Primary Accent | Deep Navy Blue | `#1A3A5C` |
| Secondary Accent | Crimson Red | `#C0392B` |
| Highlight / Gold | Warm Gold | `#B8963E` |
| Body Text | Near Black | `#1C1C1C` |
| Muted Text | Medium Gray | `#5A5A5A` |
| White | Pure White | `#FFFFFF` |

### Typography

- **Display / Headings:** Playfair Display (serif) — italic variant for names and elegance
- **Body / UI:** Lato (sans-serif) — weights 300, 400, 700
- **Section Labels:** All-caps, wide letter-spacing, small font size (0.72rem)

### General Style Rules

- White/cream background, never dark body
- Navy blue used for headings and structural elements
- Red used for accents, borders, badges, and CTAs
- Generous whitespace between sections (100px padding top/bottom)
- Sections alternate between white and cream backgrounds for visual rhythm
- Minimal use of borders — prefer subtle shadows and dividers

---

## Layout Structure

### 1. Navigation Bar
- Fixed to the top, full-width
- Background: Deep Navy Blue
- Left: Logo — teacher's name with red accent on last name
- Right: Navigation links (About, Education, Skills, Portfolio, Trainings, Contact)
- Links: uppercase, small, light-colored, hover turns cream
- Height: 64px

---

### 2. Hero Section
- Full viewport height (`100vh`)
- Background: Deep navy blue gradient (dark left to mid-blue right)
- Subtle radial gradient overlays (red tint top-right, gold tint bottom-left)
- Decorative large circle outline (top-right, barely visible)

**Layout (two-column, centered):**

Left side — Profile Photo Area:
- Circular photo frame with red-to-gold gradient border ring
- Inner circle: dark blue gradient with monogram initial ("M") in italic serif
- Small badge below: "Educator" pill in red

Right side — Text Content:
- Overline: location and role in gold, uppercase, wide spacing
- Name: large Playfair Display serif — first name in italic weight, last name bold
- Title: role + credentials, uppercase, muted, letter-spaced
- Red horizontal rule (60px wide, 2px)
- Short professional summary paragraph
- Two CTA buttons: "View Portfolio" (red filled) + "Get In Touch" (outlined)

Bottom strip (full-width, inside hero):
- Semi-transparent dark bar with frosted glass effect
- Three contact items: 📞 Phone, 📧 Email, 📍 Address

**Animations:** Staggered fade-up on load for each hero text element

---

### 3. About Section
- Background: White
- Two-column grid layout

Left column:
- Three paragraphs of professional biography
- Personal Info Table (bordered rows): Full Name, Date of Birth, Place of Birth, Citizenship, Address

Right column:
- Subheading: "Personal Qualities"
- Bulleted list using small red dot as bullet, items separated by bottom border lines

---

### 4. Education Section
- Background: Cream
- Two-column card grid

Each card:
- White background, colored top border (4px)
  - Card 1: Navy top border (BEED)
  - Card 2: Red top border (MAED)
- Degree name (Playfair Display)
- School name (bold, muted)
- Year (red, uppercase, small)
- Tag pill (e.g., "BEED · Honor Graduate")

---

### 5. Teaching Skills Section
- Background: White
- Auto-fill grid (min 280px per card)

Each skill card:
- Cream background, 1.5px border
- Emoji icon
- Skill title in bold navy
- Hover: border turns navy, light box shadow

Skills listed:
1. Lesson Planning & Classroom Instruction
2. Early Literacy & Numeracy Development
3. Classroom Management
4. Student Engagement Strategies
5. Assessment and Evaluation
6. Educational Technology Integration
7. Child-Centered Teaching Approaches
8. Curriculum & Instructional Planning

---

### 6. Credentials Section
- Background: Deep Navy Blue (full dark section)
- Section label in gold
- Section title in cream
- Two-column card grid

Each credential card:
- Semi-transparent dark background with subtle border
- Credential title (cream, serif)
- Description (muted cream)
- Red badge pill at the bottom

Credentials:
1. Honor Graduate Eligibility (HE) — "Academic Distinction"
2. Licensure Examination for Professional Teachers — "Licensed Professional Teacher"

---

### 7. Teaching Portfolio / Projects Section
- Background: Cream
- Brief intro paragraph (max 650px wide)
- Auto-fill grid (min 320px per card)

Each project card:
- White background, drop shadow
- Hover: lifts up 4px, deeper shadow
- **Thumbnail area** (160px tall, gradient by subject color):
  - Emoji icon centered
  - Top-right tag (folder category name)
- **Card body:**
  - Subject label (red, uppercase, small)
  - Project title (Playfair Display, navy)
  - Description (2–3 sentences, muted)
  - Tag pills (cream background, navy text)

Portfolio entries:

| # | Title | Subject | Color Theme |
|---|---|---|---|
| 1 | Kindergarten Daily Lesson Logs | Kindergarten | Navy blue |
| 2 | MATATAG Kinder PowerPoint Presentations | Kindergarten · All Subjects | Crimson red |
| 3 | MAPEH Grade 6 Daily Lesson Logs | MAPEH · Grade 6 | Teal |
| 4 | Araling Panlipunan Lesson Materials | Araling Panlipunan | Gold/brown |
| 5 | Supplementary Independent Activities | Kinder · Literacy | Dark navy |
| 6 | School-Based Lesson Log Collection | F.M. Clar Elementary | Maroon |

---

### 8. Trainings & Seminars Section
- Background: White
- Two-column grid layout

Each training item:
- Left blue border (3px), hover turns red
- Large faded number (serif, gray) on the left
- Training name text on the right

Trainings listed:
1. Early Childhood Development Teacher Skills Development Training
2. Computer Skills Development Training: Improving Classroom Learning Through ICT
3. Upskilling and Reskilling Teaching and Supervision Skills Training
4. Mid-Year Performance Review and Evaluation
5. School-Based INSET on Reflective Practice and Instructional Refinement in the Implementation of Academic Recovery and ARAL Program
6. School Learning Action Cell (SLAC) on Sports Coaching Techniques
7. Kindergarten Festival of Talents
8. School-Based INSET — Academic Recovery and ARAL Program (Instructional Refinement Session)

---

### 9. Professional Development Section
- Background: Warm Cream Dark
- Three-column card grid

Each card:
- White background, centered content
- Bottom border (3px, transparent default → red on hover)
- Emoji icon
- Title (Playfair Display, navy)
- Description paragraph (muted, small)

Cards:
1. **Seminars & Workshops** — participation in educational programs
2. **Curriculum Planning** — instructional planning training aligned with DepEd
3. **Learning Sessions** — collaborative professional learning among teachers

---

### 10. Contact Section
- Background: Deep Navy Blue (dark section)
- Section label in gold
- Two-column grid layout

Left column — Contact Details:
- Introductory paragraph (muted cream)
- Three contact items, each with:
  - Red icon wrapper box (square, semi-transparent)
  - Label (gold, uppercase, small)
  - Value (cream)
- Items: Phone, Email, Address

Right column — Contact Form:
- Two fields side by side: Full Name + Email Address
- Full-width field: Subject
- Full-width textarea: Message (5 rows)
- Full-width red submit button: "Send Message"
- All inputs: semi-transparent dark background, cream text, red border on focus

---

### 11. Footer
- Background: Very dark navy (`#0F1E30`)
- Centered text
- Name + role + location
- Copyright line below

---

## Responsive Behavior

- Below **900px:** Hero switches to single column (stacked); About, Education, Credentials, Contact collapse to single column; navbar links hide
- Below **600px:** Professional Development collapses to single column; contact form to single column; hero name and section titles reduce in size

---

## Interactions & Animations

- **Page load:** Hero elements fade up sequentially (staggered 0.1s delays)
- **Skill cards:** Border and shadow on hover
- **Project cards:** Translate up 4px + deeper shadow on hover
- **Training items:** Left border color changes from navy to red on hover
- **Professional Development cards:** Bottom border reveals in red on hover
- **Buttons:** Darken on hover; outline button brightens border
- **Smooth scrolling:** Enabled site-wide via `scroll-behavior: smooth`

---

## Page Sections Summary

| # | Section | Background | Key Component |
|---|---|---|---|
| 1 | Navigation | Navy | Fixed top bar with logo + links |
| 2 | Hero | Navy gradient | Photo + name + CTA + contact strip |
| 3 | About | White | Bio + info table + personal qualities |
| 4 | Education | Cream | Two bordered cards |
| 5 | Skills | White | Icon grid cards |
| 6 | Credentials | Navy | Dark credential cards |
| 7 | Portfolio | Cream | Thumbnail project cards |
| 8 | Trainings | White | Numbered two-column list |
| 9 | Professional Development | Warm Cream | Three highlight cards |
| 10 | Contact | Navy | Info details + contact form |
| 11 | Footer | Dark Navy | Centered text |
