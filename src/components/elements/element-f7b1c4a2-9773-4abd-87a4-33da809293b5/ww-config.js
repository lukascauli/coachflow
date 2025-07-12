export default {
  editor: {
    label: {
      en: 'Preview Landing Page',
      de: 'Vorschau Landing Page'
    },
    icon: 'template',
  },
  properties: {
    headlineDe: {
      label: {
        en: 'Headline',
        de: 'Überschrift'
      },
      type: 'Text',
      bindable: true,
      defaultValue: 'Deine überzeugende Headline',
      section: 'settings',
    },
    nicheDe: {
      label: {
        en: 'Niche',
        de: 'Nische'
      },
      type: 'Text',
      bindable: true,
      defaultValue: 'Coaching',
      section: 'settings',
    },
    targetGroupDe: {
      label: {
        en: 'Target Group',
        de: 'Zielgruppe'
      },
      type: 'Text',
      bindable: true,
      defaultValue: 'für ambitionierte Menschen',
      section: 'settings',
    },
    toneDe: {
      label: {
        en: 'Tone',
        de: 'Tonalität'
      },
      type: 'Text',
      bindable: true,
      defaultValue: '',
      section: 'settings',
    },
    landingPageSections: {
      label: {
        en: 'Page Sections',
        de: 'Seitenbereiche'
      },
      type: 'Array',
      bindable: true,
      section: 'settings',
      defaultValue: ['Über mich', 'Mein Angebot', 'Vorteile', 'Testimonials', 'Kontakt'],
      options: {
        expandable: true,
        getItemLabel(item) {
          return item || 'Sektion';
        },
        item: {
          type: 'Text',
          options: {
            placeholder: 'Sektionsname eingeben'
          }
        }
      },
    },
    primaryColor: {
      label: {
        en: 'Primary Color',
        de: 'Primärfarbe'
      },
      type: 'Color',
      bindable: true,
      defaultValue: '#4E8D7C',
      section: 'style',
    },
    secondaryColor: {
      label: {
        en: 'Secondary Color',
        de: 'Sekundärfarbe'
      },
      type: 'Color',
      bindable: true,
      defaultValue: '#F2E9E1',
      section: 'style',
    },
    editable: {
      label: {
        en: 'Editable Mode',
        de: 'Bearbeitungsmodus'
      },
      type: 'OnOff',
      bindable: true,
      defaultValue: false,
      section: 'settings',
    }
  },
  triggerEvents: [
    {
      name: 'ctaClicked',
      label: {
        en: 'On CTA Click',
        de: 'Bei CTA-Klick'
      },
      event: {}
    },
    {
      name: 'editSection',
      label: {
        en: 'On Section Edit',
        de: 'Bei Bearbeitung einer Sektion'
      },
      event: { index: 0 }
    },
    {
      name: 'addSection',
      label: {
        en: 'On Add Section',
        de: 'Bei Hinzufügen einer Sektion'
      },
      event: {}
    }
  ],
  actions: [
    {
      action: 'scrollToNextSection',
      label: {
        en: 'Scroll to next section',
        de: 'Zur nächsten Sektion scrollen'
      }
    }
  ]
};