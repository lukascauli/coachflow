// ===========================================
// 1. ERWEITERTE WW-CONFIG.JS
// ===========================================

export default {
  editor: {
    label: {
      en: 'AI-Powered Multi-Design Landing Page',
      de: 'KI-gestützte Multi-Design Landing Page'
    },
    icon: 'template',
  },
  properties: {
    
    // ===========================================
    // AI-PERSONALISIERTE FELDER (READ-ONLY)
    // ===========================================
    
    // Basis-Personalisierung
    coachName: {
      label: { en: 'Coach Name', de: 'Coach-Name' },
      type: 'Text',
      bindable: true,
      readonly: true,
      defaultValue: '[Wird automatisch generiert]',
      section: 'ai-generated',
    },
    
    yearsExperience: {
      label: { en: 'Years Experience', de: 'Jahre Erfahrung' },
      type: 'Number',
      bindable: true,
      readonly: true,
      defaultValue: 5,
      section: 'ai-generated',
    },
    
    clientsHelped: {
      label: { en: 'Clients Helped', de: 'Begleitete Klienten' },
      type: 'Number',
      bindable: true,
      readonly: true,
      defaultValue: 200,
      section: 'ai-generated',
    },
    
    // Content (AI-generiert)
    headlineDe: {
      label: { en: 'Headline (German)', de: 'Überschrift (Deutsch)' },
      type: 'LongText',
      bindable: true,
      readonly: true,
      defaultValue: 'Entfalte deinen Selbstwert: Emotionale Heilung für ein erfülltes Leben',
      section: 'ai-generated',
    },
    
    headlineEn: {
      label: { en: 'Headline (English)', de: 'Überschrift (Englisch)' },
      type: 'LongText',
      bindable: true,
      readonly: true,
      defaultValue: 'Unlock Your Self-Worth: Emotional Healing for a Fulfilling Life',
      section: 'ai-generated',
    },
    
    nicheDe: {
      label: { en: 'Niche (German)', de: 'Nische (Deutsch)' },
      type: 'Text',
      bindable: true,
      readonly: true,
      defaultValue: 'Selbstwert-Coaching & emotionale Heilung',
      section: 'ai-generated',
    },
    
    nicheEn: {
      label: { en: 'Niche (English)', de: 'Nische (Englisch)' },
      type: 'Text',
      bindable: true,
      readonly: true,
      defaultValue: 'Self-worth coaching & emotional healing',
      section: 'ai-generated',
    },
    
    targetGroupDe: {
      label: { en: 'Target Group (German)', de: 'Zielgruppe (Deutsch)' },
      type: 'LongText',
      bindable: true,
      readonly: true,
      defaultValue: 'Frauen, die an ihrem Selbstwert arbeiten und unterdrückte Gefühle transformieren möchten',
      section: 'ai-generated',
    },
    
    targetGroupEn: {
      label: { en: 'Target Group (English)', de: 'Zielgruppe (Englisch)' },
      type: 'LongText',
      bindable: true,
      readonly: true,
      defaultValue: 'Women seeking to strengthen their self-worth and transform suppressed emotions',
      section: 'ai-generated',
    },
    
    personalStoryDe: {
      label: { en: 'Personal Story (German)', de: 'Persönliche Geschichte (Deutsch)' },
      type: 'LongText',
      bindable: true,
      readonly: true,
      defaultValue: 'Als ich selbst den Weg zu mehr Selbstwert und emotionaler Freiheit gegangen bin...',
      section: 'ai-generated',
    },
    
    personalStoryEn: {
      label: { en: 'Personal Story (English)', de: 'Persönliche Geschichte (Englisch)' },
      type: 'LongText',
      bindable: true,
      readonly: true,
      defaultValue: 'Having walked the path to greater self-worth and emotional freedom myself...',
      section: 'ai-generated',
    },
    
    uniqueMethodDe: {
      label: { en: 'Unique Method (German)', de: 'Einzigartige Methode (Deutsch)' },
      type: 'Text',
      bindable: true,
      readonly: true,
      defaultValue: 'Yomio-Methode: Körperorientierte Selbsterfahrung & emotionale Integration',
      section: 'ai-generated',
    },
    
    uniqueMethodEn: {
      label: { en: 'Unique Method (English)', de: 'Einzigartige Methode (Englisch)' },
      type: 'Text',
      bindable: true,
      readonly: true,
      defaultValue: 'Yomio Method: Somatic self-exploration & emotional integration',
      section: 'ai-generated',
    },
    
    mainBenefitDe: {
      label: { en: 'Main Benefit (German)', de: 'Hauptvorteil (Deutsch)' },
      type: 'LongText',
      bindable: true,
      readonly: true,
      defaultValue: 'Du gewinnst inneren Frieden, mehr Selbstvertrauen und die Fähigkeit, authentisch zu leben.',
      section: 'ai-generated',
    },
    
    mainBenefitEn: {
      label: { en: 'Main Benefit (English)', de: 'Hauptvorteil (Englisch)' },
      type: 'LongText',
      bindable: true,
      readonly: true,
      defaultValue: 'You gain inner peace, greater self-confidence, and the ability to live authentically.',
      section: 'ai-generated',
    },
    
    offerDescriptionDe: {
      label: { en: 'Offer Description (German)', de: 'Angebotsbeschreibung (Deutsch)' },
      type: 'LongText',
      bindable: true,
      readonly: true,
      defaultValue: 'Individuelles Online-Coaching: 1:1 Sitzungen (60 Minuten), wöchentlich oder zweiwöchentlich...',
      section: 'ai-generated',
    },
    
    offerDescriptionEn: {
      label: { en: 'Offer Description (English)', de: 'Angebotsbeschreibung (Englisch)' },
      type: 'LongText',
      bindable: true,
      readonly: true,
      defaultValue: 'Individual online coaching: 1:1 sessions (60 minutes), weekly or bi-weekly...',
      section: 'ai-generated',
    },
    
    ctaTextDe: {
      label: { en: 'CTA Text (German)', de: 'CTA Text (Deutsch)' },
      type: 'Text',
      bindable: true,
      readonly: true,
      defaultValue: 'Vereinbare jetzt dein kostenfreies Kennenlerngespräch',
      section: 'ai-generated',
    },
    
    ctaTextEn: {
      label: { en: 'CTA Text (English)', de: 'CTA Text (Englisch)' },
      type: 'Text',
      bindable: true,
      readonly: true,
      defaultValue: 'Book your free discovery call now',
      section: 'ai-generated',
    },
    
    // AI-generierte Arrays
    credentialsDe: {
      label: { en: 'Credentials (German)', de: 'Qualifikationen (Deutsch)' },
      type: 'Array',
      bindable: true,
      readonly: true,
      section: 'ai-generated',
      defaultValue: [
        'Zertifizierte Coachin für emotionale Heilung',
        'Weiterbildung in körperorientierter Therapie',
        'Erfahrung in der Begleitung von Frauen auf dem Weg zu mehr Selbstwert'
      ],
    },
    
    credentialsEn: {
      label: { en: 'Credentials (English)', de: 'Qualifikationen (Englisch)' },
      type: 'Array',
      bindable: true,
      readonly: true,
      section: 'ai-generated',
      defaultValue: [
        'Certified coach for emotional healing',
        'Training in somatic therapy',
        'Experience supporting women on their journey to greater self-worth'
      ],
    },
    
    testimonialTextDe: {
      label: { en: 'Testimonials (German)', de: 'Kundenstimmen (Deutsch)' },
      type: 'Array',
      bindable: true,
      readonly: true,
      section: 'ai-generated',
      defaultValue: [
        'Claudia hat mir geholfen, meine verdrängten Gefühle liebevoll anzunehmen.',
        'Durch das Coaching habe ich meinen Selbstwert entdeckt und traue mich, authentisch zu leben.'
      ],
    },
    
    testimonialTextEn: {
      label: { en: 'Testimonials (English)', de: 'Kundenstimmen (Englisch)' },
      type: 'Array',
      bindable: true,
      readonly: true,
      section: 'ai-generated',
      defaultValue: [
        'Claudia helped me embrace my suppressed emotions with compassion.',
        'Through the coaching, I discovered my self-worth and now dare to live authentically.'
      ],
    },
    
    // AI-generierte Design-spezifische Inhalte
    webinarBenefits: {
      label: { en: 'Webinar Benefits', de: 'Webinar-Vorteile' },
      type: 'Array',
      bindable: true,
      readonly: true,
      section: 'ai-generated',
      defaultValue: [
        { title: 'Die 3-Schritte-Formel für unerschütterlichen Selbstwert', description: '...', icon: '🗝️' },
        { title: 'Erkenne und löse deine unsichtbaren Selbstwert-Blockaden', description: '...', icon: '🔓' },
        { title: 'Der Emotions-Kompass: Gefühle als Wegweiser nutzen', description: '...', icon: '🧭' }
      ],
    },
    
    clarityValuePoints: {
      label: { en: 'Clarity Value Points', de: 'Klarheits-Wertpunkte' },
      type: 'Array',
      bindable: true,
      readonly: true,
      section: 'ai-generated',
      defaultValue: [
        'Klarheit über deine aktuelle Situation',
        'Identifikation deiner größten Hindernisse',
        'Einen konkreten ersten Schritt',
        'Gefühl für meine Arbeitsweise'
      ],
    },
    
    freebieContents: {
      label: { en: 'Freebie Contents', de: 'Freebie-Inhalte' },
      type: 'Array',
      bindable: true,
      readonly: true,
      section: 'ai-generated',
      defaultValue: [
        '15 Seiten geballtes Wissen',
        'Selbstwert-Assessment',
        '7 kraftvolle Übungen',
        'Affirmations-Sammlung',
        'Wochenplan für mehr Selbstliebe'
      ],
    },
    
    // AI-Farbempfehlungen
    primaryColor: {
      label: { en: 'Primary Color (AI)', de: 'Primärfarbe (KI)' },
      type: 'Color',
      bindable: true,
      readonly: true,
      defaultValue: '#7D5BA6',
      section: 'ai-generated',
    },
    
    secondaryColor: {
      label: { en: 'Secondary Color (AI)', de: 'Sekundärfarbe (KI)' },
      type: 'Color',
      bindable: true,
      readonly: true,
      defaultValue: '#F5E9F7',
      section: 'ai-generated',
    },
    
    // AI-Icon-Empfehlungen  
    suggestedIcons: {
      label: { en: 'AI Icon Suggestions', de: 'KI-Icon-Vorschläge' },
      type: 'Object',
      bindable: true,
      readonly: true,
      section: 'ai-generated',
      defaultValue: {
        primary: '💜',
        secondary: '✨',
        success: '🎯'
      },
    },
    
    // AI-Design-Empfehlung
    recommendedDesign: {
      label: { en: 'AI Design Recommendation', de: 'KI-Design-Empfehlung' },
      type: 'TextSelect',
      bindable: true,
      readonly: true,
      defaultValue: 'webinar',
      section: 'ai-generated',
      options: {
        options: [
          { value: 'webinar', label: 'Webinar Funnel 🎥' },
          { value: 'clarity', label: 'Klarheitsgespräch 💬' },
          { value: 'freebie', label: 'Freebie Download 🎁' }
        ]
      }
    },
    
    // ===========================================
    // USER-ANPASSBARE FELDER
    // ===========================================
    
    // Design Selection (kann vom AI-Vorschlag abweichen)
    designType: {
      label: { en: 'Active Design Type', de: 'Aktiver Design-Typ' },
      type: 'TextSelect',
      bindable: true,
      defaultValue: 'webinar',
      section: 'design',
      options: {
        options: [
          { value: 'webinar', label: 'Webinar Funnel 🎥' },
          { value: 'clarity', label: 'Klarheitsgespräch 💬' },
          { value: 'freebie', label: 'Freebie Download 🎁' }
        ]
      }
    },

    // Media-Uploads
    heroImage: {
      label: { en: 'Hero Image', de: 'Hero-Bild' },
      type: 'Image',
      bindable: true,
      section: 'media',
    },
    
    heroVideo: {
      label: { en: 'Hero Video URL', de: 'Hero-Video URL' },
      type: 'Text',
      bindable: true,
      section: 'media',
    },
    
    profileImage: {
      label: { en: 'Profile Image', de: 'Profilbild' },
      type: 'Image',
      bindable: true,
      section: 'media',
    },
    
    logoImage: {
      label: { en: 'Logo', de: 'Logo' },
      type: 'Image',
      bindable: true,
      section: 'media',
    },

    // Icon Customization (kann AI-Vorschläge überschreiben)
    primaryIcon: {
      label: { en: 'Primary Icon (Emoji)', de: 'Primäres Icon (Emoji)' },
      type: 'Text',
      bindable: true,
      defaultValue: '💜',
      section: 'styling',
    },
    
    secondaryIcon: {
      label: { en: 'Secondary Icon (Emoji)', de: 'Sekundäres Icon (Emoji)' },
      type: 'Text',
      bindable: true,
      defaultValue: '✨',
      section: 'styling',
    },
    
    successIcon: {
      label: { en: 'Success Icon (Emoji)', de: 'Erfolgs-Icon (Emoji)' },
      type: 'Text',
      bindable: true,
      defaultValue: '🎯',
      section: 'styling',
    },

    // Custom Colors (kann AI-Farben überschreiben)
    customPrimaryColor: {
      label: { en: 'Custom Primary Color', de: 'Benutzerdefinierte Primärfarbe' },
      type: 'Color',
      bindable: true,
      section: 'styling',
    },
    
    customSecondaryColor: {
      label: { en: 'Custom Secondary Color', de: 'Benutzerdefinierte Sekundärfarbe' },
      type: 'Color',
      bindable: true,
      section: 'styling',
    },
    
    accentColor: {
      label: { en: 'Accent Color', de: 'Akzentfarbe' },
      type: 'Color',
      bindable: true,
      defaultValue: '#E6D7F0',
      section: 'styling',
    },

    // Typography
    fontFamily: {
      label: { en: 'Font Family', de: 'Schriftart' },
      type: 'TextSelect',
      bindable: true,
      defaultValue: 'Inter',
      section: 'styling',
      options: {
        options: [
          { value: 'Inter', label: 'Inter (Modern)' },
          { value: 'Roboto', label: 'Roboto (Clean)' },
          { value: 'Poppins', label: 'Poppins (Friendly)' },
          { value: 'Playfair Display', label: 'Playfair Display (Elegant)' },
          { value: 'Merriweather', label: 'Merriweather (Traditional)' }
        ]
      }
    },
    
    headlineSize: {
      label: { en: 'Headline Size', de: 'Überschrift-Größe' },
      type: 'TextSelect',
      bindable: true,
      defaultValue: 'large',
      section: 'styling',
      options: {
        options: [
          { value: 'small', label: 'Klein' },
          { value: 'medium', label: 'Mittel' },
          { value: 'large', label: 'Groß' },
          { value: 'xlarge', label: 'Extra Groß' }
        ]
      }
    },

    // Layout Options
    heroLayout: {
      label: { en: 'Hero Layout', de: 'Hero-Layout' },
      type: 'TextSelect',
      bindable: true,
      defaultValue: 'centered',
      section: 'layout',
      options: {
        options: [
          { value: 'centered', label: 'Zentriert' },
          { value: 'split', label: 'Geteilt' },
          { value: 'fullwidth', label: 'Vollbreite' }
        ]
      }
    },
    
    containerMaxWidth: {
      label: { en: 'Container Max Width (px)', de: 'Container Max. Breite (px)' },
      type: 'Number',
      bindable: true,
      defaultValue: 1200,
      section: 'layout',
    },
    
    sectionSpacing: {
      label: { en: 'Section Spacing', de: 'Sektion-Abstand' },
      type: 'TextSelect',
      bindable: true,
      defaultValue: 'normal',
      section: 'layout',
      options: {
        options: [
          { value: 'compact', label: 'Kompakt' },
          { value: 'normal', label: 'Normal' },
          { value: 'spacious', label: 'Großzügig' }
        ]
      }
    },

    // Button Styling
    buttonStyle: {
      label: { en: 'Button Style', de: 'Button-Stil' },
      type: 'TextSelect',
      bindable: true,
      defaultValue: 'rounded',
      section: 'styling',
      options: {
        options: [
          { value: 'rounded', label: 'Abgerundet' },
          { value: 'sharp', label: 'Eckig' },
          { value: 'pill', label: 'Pill-Form' }
        ]
      }
    },

    // Animation Controls
    enableAnimations: {
      label: { en: 'Enable Animations', de: 'Animationen aktivieren' },
      type: 'OnOff',
      bindable: true,
      defaultValue: true,
      section: 'styling',
    },
    
    enableFloatingElements: {
      label: { en: 'Floating Background Elements', de: 'Schwebende Hintergrund-Elemente' },
      type: 'OnOff',
      bindable: true,
      defaultValue: true,
      section: 'styling',
    },

    // Social Proof Customization
    attendeeCountMin: {
      label: { en: 'Min Attendees (Social Proof)', de: 'Min. Teilnehmer (Social Proof)' },
      type: 'Number',
      bindable: true,
      defaultValue: 850,
      section: 'social-proof',
    },
    
    attendeeCountMax: {
      label: { en: 'Max Attendees (Social Proof)', de: 'Max. Teilnehmer (Social Proof)' },
      type: 'Number',
      bindable: true,
      defaultValue: 1050,
      section: 'social-proof',
    },
    
    availableSlots: {
      label: { en: 'Available Slots (Urgency)', de: 'Verfügbare Plätze (Dringlichkeit)' },
      type: 'Number',
      bindable: true,
      defaultValue: 5,
      section: 'social-proof',
    },
    
    urgencyText: {
      label: { en: 'Urgency Text', de: 'Dringlichkeits-Text' },
      type: 'Text',
      bindable: true,
      defaultValue: 'Nur noch wenige Plätze verfügbar!',
      section: 'social-proof',
    },

    // Design-specific Settings
    webinarDate: {
      label: { en: 'Webinar Date', de: 'Webinar-Datum' },
      type: 'DateTime',
      bindable: true,
      section: 'webinar',
      hidden: { type: 'binding', binding: 'content.designType', value: 'webinar', operator: '!=' }
    },
    
    webinarDuration: {
      label: { en: 'Webinar Duration (minutes)', de: 'Webinar-Dauer (Minuten)' },
      type: 'Number',
      bindable: true,
      defaultValue: 60,
      section: 'webinar',
      hidden: { type: 'binding', binding: 'content.designType', value: 'webinar', operator: '!=' }
    },
    
    clarityCallDuration: {
      label: { en: 'Call Duration (minutes)', de: 'Gespräch-Dauer (Minuten)' },
      type: 'Number',
      bindable: true,
      defaultValue: 30,
      section: 'clarity',
      hidden: { type: 'binding', binding: 'content.designType', value: 'clarity', operator: '!=' }
    },
    
    freebieTitle: {
      label: { en: 'Freebie Title', de: 'Freebie-Titel' },
      type: 'Text',
      bindable: true,
      defaultValue: 'Der Selbstwert-Kompass',
      section: 'freebie',
      hidden: { type: 'binding', binding: 'content.designType', value: 'freebie', operator: '!=' }
    },
    
    freebiePageCount: {
      label: { en: 'Number of Pages', de: 'Anzahl Seiten' },
      type: 'Number',
      bindable: true,
      defaultValue: 15,
      section: 'freebie',
      hidden: { type: 'binding', binding: 'content.designType', value: 'freebie', operator: '!=' }
    },

    // Custom Sections
    additionalSections: {
      label: { en: 'Additional Sections', de: 'Zusätzliche Sektionen' },
      type: 'Array',
      bindable: true,
      section: 'layout',
      defaultValue: [],
      options: {
        expandable: true,
        getItemLabel(item) {
          return item?.title || 'Neue Sektion';
        },
        item: {
          type: 'Object',
          options: {
            item: {
              title: {
                type: 'Text',
                options: { placeholder: 'Sektions-Titel' }
              },
              content: {
                type: 'LongText',
                options: { placeholder: 'Sektions-Inhalt' }
              },
              type: {
                type: 'TextSelect',
                options: {
                  options: [
                    { value: 'text', label: 'Text' },
                    { value: 'benefits', label: 'Vorteile' },
                    { value: 'testimonials', label: 'Testimonials' },
                    { value: 'faq', label: 'FAQ' },
                    { value: 'contact', label: 'Kontakt' }
                  ]
                }
              }
            }
          }
        }
      },
    },

    // Settings
    language: {
      label: { en: 'Language', de: 'Sprache' },
      type: 'TextSelect',
      bindable: true,
      defaultValue: 'de',
      section: 'settings',
      options: {
        options: [
          { value: 'de', label: 'Deutsch' },
          { value: 'en', label: 'English' }
        ]
      }
    },
    
    editable: {
      label: { en: 'Editable Mode', de: 'Bearbeitungsmodus' },
      type: 'OnOff',
      bindable: true,
      defaultValue: false,
      section: 'settings',
    },
    
    showStickyCta: {
      label: { en: 'Show Sticky CTA', de: 'Sticky CTA anzeigen' },
      type: 'OnOff',
      bindable: true,
      defaultValue: true,
      section: 'settings',
    },

    // SEO & Meta
    metaTitle: {
      label: { en: 'Meta Title', de: 'Meta-Titel' },
      type: 'Text',
      bindable: true,
      section: 'seo',
    },
    
    metaDescription: {
      label: { en: 'Meta Description', de: 'Meta-Beschreibung' },
      type: 'LongText',
      bindable: true,
      section: 'seo',
    },
    
    metaKeywords: {
      label: { en: 'Meta Keywords', de: 'Meta-Keywords' },
      type: 'Text',
      bindable: true,
      section: 'seo',
    }
  },

  triggerEvents: [
    {
      name: 'ctaClicked',
      label: { en: 'On CTA Click', de: 'Bei CTA-Klick' },
      event: { design: 'webinar' }
    },
    {
      name: 'designChanged',
      label: { en: 'On Design Change', de: 'Bei Design-Wechsel' },
      event: { design: 'webinar' }
    },
    {
      name: 'editSection',
      label: { en: 'On Section Edit', de: 'Bei Bearbeitung einer Sektion' },
      event: { index: 0 }
    },
    {
      name: 'deleteSection',
      label: { en: 'On Section Delete', de: 'Bei Löschen einer Sektion' },
      event: { index: 0 }
    },
    {
      name: 'addSection',
      label: { en: 'On Add Section', de: 'Bei Hinzufügen einer Sektion' },
      event: { section: {} }
    },
    {
      name: 'mediaEdited',
      label: { en: 'On Media Edit', de: 'Bei Medien-Bearbeitung' },
      event: { type: 'image', url: '' }
    },
    {
      name: 'textEdited',
      label: { en: 'On Text Edit', de: 'Bei Text-Bearbeitung' },
      event: { target: '', text: '' }
    }
  ],

  actions: [
    {
      action: 'scrollToNextSection',
      label: { en: 'Scroll to next section', de: 'Zur nächsten Sektion scrollen' }
    },
    {
      action: 'switchDesign',
      label: { en: 'Switch design', de: 'Design wechseln' },
      args: ['designType']
    },
    {
      action: 'openMediaEditor',
      label: { en: 'Open media editor', de: 'Medien-Editor öffnen' },
      args: ['mediaType']
    },
    {
      action: 'openTextEditor',
      label: { en: 'Open text editor', de: 'Text-Editor öffnen' },
      args: ['target']
    }
  ]
};
