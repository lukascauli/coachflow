---
name: preview-landing-page
description: A conversion-optimized, modern preview of a personalized coaching landing page generated from a JSON object
keywords: landing page, preview, coaching, template, sections, customizable
---

#### Preview Landing Page

***Purpose:***
Creates a modern, conversion-optimized preview of a coaching landing page that is clearly recognizable as a configurable template, with interactive UI elements and a fresh, trustworthy appearance.

***Features:***
- Generates a complete landing page preview from a JSON object
- Hero section with headline and subline based on provided data
- Customizable content sections with placeholders
- Sticky call-to-action button that appears when scrolling
- Interactive elements like hover effects and smooth scrolling
- Responsive design that adapts to different screen sizes

***Properties:***
- headlineDe: string - The main headline displayed in the hero section
- nicheDe: string - The coaching niche or specialty area
- targetGroupDe: string - The target audience or ideal clients
- toneDe: string - Optional tone or style of messaging
- landingPageSections: string[] - Array of section names to display
- primaryColor: string - HEX color code for buttons, links, and accents
- secondaryColor: string - HEX color code for backgrounds and subtle elements
- editable: boolean - Enables edit controls and section editing functionality

***Events:***
- ctaClicked: Triggered when the call-to-action button is clicked. No payload.
- editSection: Triggered when a section is clicked in editable mode. Payload: { index: number }
- addSection: Triggered when the "Add Section" button is clicked. No payload.

***Exposed Actions:***
- `scrollToNextSection`: Smoothly scrolls to the first content section

***Notes:***
- The component automatically generates appropriate placeholder text for each section based on its title
- When editable mode is enabled, sections show edit indicators and respond to clicks
- The sticky CTA appears after scrolling past half of the first section
- The design uses CSS custom properties for easy theming and color customization
- Mobile view optimizes the layout and keeps the CTA permanently fixed at the bottom