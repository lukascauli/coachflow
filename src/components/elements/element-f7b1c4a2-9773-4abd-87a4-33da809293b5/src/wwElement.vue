<template>
  <div 
    class="multi-design-landing" 
    :class="[`design-${currentDesign}`, { 'editable-mode': content.editable }]"
    :style="cssVariables"
  >
    <!-- Design Selector (only in editable mode) -->
    <div v-if="content.editable" class="design-selector">
      <div class="design-options">
        <button 
          v-for="design in designOptions" 
          :key="design.value"
          :class="['design-option', { 'active': currentDesign === design.value }]"
          @click="switchDesign(design.value)"
        >
          <span class="design-icon">{{ design.icon }}</span>
          <span class="design-name">{{ design.label }}</span>
        </button>
      </div>
    </div>

    <!-- WEBINAR DESIGN -->
    <div v-if="currentDesign === 'webinar'" class="webinar-design">
      <section class="hero-section webinar-hero">
        <div class="hero-background">
          <div class="animated-gradient"></div>
          <div class="floating-elements">
            <div class="float-element" v-for="n in 6" :key="n"></div>
          </div>
        </div>
        
        <div class="container">
          <div class="hero-content">
            <div class="urgency-banner">
              <span class="urgency-icon">⚡</span>
              <span>KOSTENFREIES LIVE-WEBINAR</span>
              <span class="date-info">{{ getNextWebinarDate }}</span>
            </div>
            
            <h1 class="hero-headline">
              <span class="pre-headline">{{ getWebinarPreHeadline }}</span>
              <span class="main-headline">{{ content.headlineDe || 'Die 3 Geheimnisse für unerschütterlichen Selbstwert' }}</span>
              <span class="sub-headline">{{ getWebinarSubHeadline }}</span>
            </h1>
            
            <div class="unique-method-highlight" v-if="content.uniqueMethodDe">
              <span class="method-icon">⚡</span>
              <span class="method-text">{{ content.uniqueMethodDe }}</span>
            </div>
            
            <div class="hero-media">
              <div class="video-placeholder" @click="content.editable && handleMediaEdit('hero-video')">
                <div v-if="content.editable" class="edit-overlay">
                  <span class="edit-icon">📹</span>
                  Video bearbeiten
                </div>
                <div class="play-button">▶</div>
                <span class="video-label">Webinar-Vorschau (2:30 Min.)</span>
              </div>
            </div>
            
            <div class="registration-form">
              <h3>🎯 Sichere dir jetzt deinen kostenlosen Platz!</h3>
              <div class="form-fields">
                <input type="text" placeholder="Dein Vorname" class="form-input">
                <input type="email" placeholder="Deine E-Mail" class="form-input">
                <button class="cta-primary" @click="handleCtaClick">
                  <span class="cta-icon">🚀</span>
                  Jetzt kostenlos anmelden
                </button>
              </div>
              <p class="form-disclaimer">
                💯 100% kostenlos • 💯 Keine Verpflichtung • 💯 Sofort umsetzbare Tipps
              </p>
            </div>
            
            <div class="social-proof">
              <div class="attendee-count">
                <strong>{{ getAttendeeCount }}+ Frauen</strong> haben sich bereits angemeldet
              </div>
              <div class="testimonial-mini">
                "Das Webinar hat mein Leben verändert!" - Sarah M.
              </div>
            </div>
          </div>
        </div>
        
        <div class="scroll-indicator" @click="scrollToNextSection">
          <div class="scroll-arrow"></div>
          <span>Mehr erfahren</span>
        </div>
      </section>

      <section class="content-section benefits-section">
        <div class="container">
          <h2 class="section-title">Was du im Webinar lernst:</h2>
          <div class="benefits-grid">
            <div class="benefit-item" v-for="(benefit, index) in getWebinarBenefits" :key="index">
              <div class="benefit-number">{{ index + 1 }}</div>
              <div class="benefit-content">
                <div class="benefit-icon">{{ benefit.icon }}</div>
                <h3>{{ benefit.title }}</h3>
                <p>{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section about-section">
        <div class="container">
          <div class="about-content">
            <div class="about-image" @click="content.editable && handleMediaEdit('host-image')">
              <div v-if="content.editable" class="edit-overlay">
                <span class="edit-icon">📷</span>
                Foto bearbeiten
              </div>
              <div class="placeholder-image">
                <span class="image-placeholder">Dein Foto</span>
              </div>
            </div>
            <div class="about-text">
              <h2>Deine Webinar-Gastgeberin</h2>
              <p class="about-intro">{{ getPersonalIntro }}</p>
              <div class="credentials">
                <div class="credential" v-for="cred in getCredentials" :key="cred">
                  ✅ {{ cred }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- CLARITY DESIGN -->
    <div v-if="currentDesign === 'clarity'" class="clarity-design">
      <section class="hero-section clarity-hero">
        <div class="hero-background">
          <div class="animated-gradient"></div>
          <div class="floating-elements">
            <div class="float-element" v-for="n in 6" :key="n"></div>
          </div>
        </div>
        
        <div class="container">
          <div class="hero-grid">
            <div class="hero-content">
              <div class="trust-badge">
                <span class="badge-icon">🏆</span>
                <span>Kostenfreies Klarheitsgespräch</span>
              </div>
              
              <h1 class="hero-headline">
                <span class="main-headline">{{ content.headlineDe || 'Finde Klarheit über deinen Weg zu mehr Selbstwert' }}</span>
                <span class="sub-headline">{{ getClaritySubHeadline }}</span>
              </h1>
              
              <div class="value-proposition">
                <h3>💎 In 30 Minuten erhältst du:</h3>
                <div class="value-points">
                  <div class="value-point" v-for="point in getClarityValuePoints" :key="point">
                    <span class="point-icon">✨</span>
                    {{ point }}
                  </div>
                </div>
              </div>
              
              <div class="main-benefit-highlight" v-if="content.mainBenefitDe">
                <h4>🎯 Dein Hauptgewinn:</h4>
                <p>{{ content.mainBenefitDe }}</p>
              </div>
              
              <div class="offer-details" v-if="content.offerDescriptionDe">
                <h4>📋 Das erwartet dich:</h4>
                <p>{{ content.offerDescriptionDe }}</p>
              </div>
              
              <button class="cta-primary" @click="handleCtaClick">
                <span class="cta-icon">💬</span>
                {{ content.ctaTextDe || 'Termin vereinbaren' }}
              </button>
              
              <div class="guarantee">
                <span class="guarantee-icon">🛡️</span>
                100% kostenfrei & unverbindlich
              </div>
            </div>
            
            <div class="hero-image" @click="content.editable && handleMediaEdit('clarity-hero-image')">
              <div v-if="content.editable" class="edit-overlay">
                <span class="edit-icon">📷</span>
                Bild bearbeiten
              </div>
              <div class="placeholder-image">
                <span class="image-placeholder">Coaching-Bild</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="scroll-indicator" @click="scrollToNextSection">
          <div class="scroll-arrow"></div>
          <span>Prozess ansehen</span>
        </div>
      </section>

      <section class="content-section process-section">
        <div class="container">
          <h2 class="section-title">So läuft dein Klarheitsgespräch ab:</h2>
          <div class="process-timeline">
            <div class="process-step" v-for="(step, index) in getClarityProcess" :key="index">
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-content">
                <h3>{{ step.title }}</h3>
                <p>{{ step.description }}</p>
                <div class="step-duration">⏱️ {{ step.duration }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section testimonials-section">
        <div class="container">
          <h2 class="section-title">Was andere sagen:</h2>
          <div class="testimonials-grid">
            <div class="testimonial-card" v-for="(testimonial, index) in getTestimonials" :key="index">
              <div class="quote-mark">"</div>
              <p class="testimonial-text">{{ testimonial.text }}</p>
              <div class="client-info">
                <div class="client-avatar">{{ testimonial.initials }}</div>
                <div class="client-details">
                  <strong>{{ testimonial.name }}</strong>
                  <span>{{ testimonial.role }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- FREEBIE DESIGN -->
    <div v-if="currentDesign === 'freebie'" class="freebie-design">
      <section class="hero-section freebie-hero">
        <div class="hero-background">
          <div class="animated-gradient"></div>
          <div class="floating-elements">
            <div class="float-element" v-for="n in 6" :key="n"></div>
          </div>
        </div>
        
        <div class="container">
          <div class="hero-content">
            <div class="freebie-badge">
              <span class="badge-icon">🎁</span>
              <span>KOSTENLOSES WORKBOOK</span>
            </div>
            
            <h1 class="hero-headline">
              <span class="main-headline">{{ content.headlineDe || 'Der Selbstwert-Kompass' }}</span>
              <span class="sub-headline">{{ getFreebieSubHeadline }}</span>
            </h1>
            
            <div class="unique-method-highlight" v-if="content.uniqueMethodDe">
              <span class="method-icon">🔥</span>
              <span class="method-text">Basierend auf der {{ content.uniqueMethodDe }}</span>
            </div>
            
            <div class="main-benefit-preview" v-if="content.mainBenefitDe">
              <h3>🌟 Was du erreichen wirst:</h3>
              <p>{{ content.mainBenefitDe }}</p>
            </div>
            
            <div class="freebie-preview">
              <div class="preview-image" @click="content.editable && handleMediaEdit('freebie-preview')">
                <div v-if="content.editable" class="edit-overlay">
                  <span class="edit-icon">📄</span>
                  Vorschau bearbeiten
                </div>
                <div class="workbook-mockup">
                  <div class="mockup-cover">{{ getFreebieTitle }}</div>
                </div>
              </div>
              
              <div class="preview-content">
                <h3>🌟 Das erwartet dich im Workbook:</h3>
                <div class="freebie-contents">
                  <div class="content-item" v-for="item in getFreebieContents" :key="item">
                    <span class="content-icon">📋</span>
                    {{ item }}
                  </div>
                </div>
                
                <div class="download-form">
                  <h4>💎 Jetzt kostenlos herunterladen:</h4>
                  <div class="offer-preview" v-if="content.offerDescriptionDe">
                    <p class="offer-text">{{ content.offerDescriptionDe }}</p>
                  </div>
                  <input type="email" placeholder="Deine E-Mail-Adresse" class="form-input">
                  <button class="cta-primary" @click="handleCtaClick">
                    <span class="cta-icon">📥</span>
                    Workbook herunterladen
                  </button>
                  <p class="form-disclaimer">
                    💯 Sofortiger Download • 💯 Keine Kosten • 💯 Kein Spam
                  </p>
                </div>
              </div>
            </div>
            
            <div class="social-proof">
              <div class="download-count">
                <strong>{{ getDownloadCount }}+</strong> Downloads
              </div>
              <div class="rating">
                <span class="stars">⭐⭐⭐⭐⭐</span>
                <span>4.9/5 Sterne (127 Bewertungen)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="scroll-indicator" @click="scrollToNextSection">
          <div class="scroll-arrow"></div>
          <span>Vorteile ansehen</span>
        </div>
      </section>

      <section class="content-section benefits-section">
        <div class="container">
          <h2 class="section-title">Was du mit dem Workbook erreichst:</h2>
          <div class="benefits-grid">
            <div class="benefit-card" v-for="(benefit, index) in getFreebieBenefits" :key="index">
              <div class="benefit-icon">{{ benefit.icon }}</div>
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section about-section">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2>Über die Autorin</h2>
              <p class="about-intro">{{ getPersonalIntro }}</p>
              <p class="personal-story">{{ getPersonalStory }}</p>
            </div>
            <div class="about-image" @click="content.editable && handleMediaEdit('about-image')">
              <div v-if="content.editable" class="edit-overlay">
                <span class="edit-icon">📷</span>
                Foto bearbeiten
              </div>
              <div class="placeholder-image">
                <span class="image-placeholder">Dein Foto</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- FAQ Section (shared) -->
    <section class="content-section faq-section">
      <div class="container">
        <h2 class="section-title">Häufige Fragen</h2>
        <div class="faq-list">
          <div 
            class="faq-item" 
            v-for="(faq, index) in getFaqs" 
            :key="index"
            :class="{ 'active': activeFaq === index }"
            @click="toggleFaq(index)"
          >
            <div class="faq-question">
              <span>{{ faq.question }}</span>
              <span class="faq-toggle">{{ activeFaq === index ? '−' : '+' }}</span>
            </div>
            <div class="faq-answer" v-if="activeFaq === index">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dynamic Sections -->
    <section 
      v-for="(section, index) in additionalSections" 
      :key="`section-${index}`"
      class="content-section dynamic-section"
      @click="content.editable && handleSectionClick(index)"
    >
      <div class="container">
        <div v-if="content.editable" class="edit-overlay">
          <button class="edit-button" @click.stop="handleSectionEdit(index)">
            ✏️ {{ section.title }} bearbeiten
          </button>
          <button class="delete-button" @click.stop="handleSectionDelete(index)">
            🗑️
          </button>
        </div>
        <h2 class="section-title">{{ section.title }}</h2>
        <div class="section-content">
          <p>{{ section.content || 'Hier würde der Inhalt stehen. Klicke zum Bearbeiten.' }}</p>
        </div>
      </div>
    </section>

    <!-- Add Section Button -->
    <section v-if="content.editable" class="add-section" @click="handleAddSection">
      <div class="container">
        <div class="add-section-button">
          <span class="add-icon">➕</span>
          Neue Sektion hinzufügen
        </div>
      </div>
    </section>

    <!-- Sticky CTA -->
    <div class="sticky-cta-bar" :class="{ 'visible': showStickyCta }">
      <div class="sticky-content">
        <div class="sticky-message">
          <span class="sticky-icon">{{ getStickyIcon }}</span>
          <span class="sticky-text">{{ getStickyText }}</span>
        </div>
        <button class="cta-sticky" @click="handleCtaClick">
          {{ getStickyButtonText }}
        </button>
      </div>
    </div>

    <!-- Media Editor Modal -->
    <div v-if="content.editable && showMediaEditor" class="media-editor-modal" @click="closeMediaEditor">
      <div class="media-editor-content" @click.stop>
        <div class="editor-header">
          <h3>{{ currentMediaType }} bearbeiten</h3>
          <button class="close-button" @click="closeMediaEditor">×</button>
        </div>
        <div class="editor-body">
          <div class="upload-area">
            <span class="upload-icon">📁</span>
            <p>Datei hier ablegen oder klicken zum Hochladen</p>
            <small>Unterstützte Formate: JPG, PNG, MP4, SVG</small>
          </div>
          <input type="text" placeholder="Oder URL eingeben..." class="url-input">
          <div class="control-buttons">
            <button class="save-button">Speichern</button>
            <button class="cancel-button" @click="closeMediaEditor">Abbrechen</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Text Editor Modal -->
    <div v-if="content.editable && showTextEditor" class="text-editor-modal" @click="closeTextEditor">
      <div class="text-editor-content" @click.stop>
        <div class="editor-header">
          <h3>Text bearbeiten</h3>
          <button class="close-button" @click="closeTextEditor">×</button>
        </div>
        <div class="editor-body">
          <textarea v-model="currentEditText" class="text-input" rows="6" placeholder="Text eingeben..."></textarea>
          <div class="editor-controls">
            <button class="save-button" @click="saveTextEdit">Speichern</button>
            <button class="cancel-button" @click="closeTextEditor">Abbrechen</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';

export default {
  props: {
    content: { 
      type: Object, 
      required: true 
    },
    uid: { 
      type: String, 
      required: true 
    },
  },
  
  emits: ['trigger-event'],
  
  setup(props, { emit }) {
    // Reactive data
    const showStickyCta = ref(false);
    const activeFaq = ref(null);
    const currentDesign = ref(props.content?.designType || 'webinar');
    const showMediaEditor = ref(false);
    const showTextEditor = ref(false);
    const currentMediaType = ref('');
    const currentEditText = ref('');
    const currentEditTarget = ref('');
    const additionalSections = ref([]);
    
    // Design options
    const designOptions = [
      { value: 'webinar', label: 'Webinar', icon: '🎥' },
      { value: 'clarity', label: 'Klarheit', icon: '💬' },
      { value: 'freebie', label: 'Freebie', icon: '🎁' }
    ];
    
    // Computed properties
    const cssVariables = computed(() => ({
      '--primary-color': props.content?.customPrimaryColor || props.content?.primaryColor || '#7D5BA6',
      '--secondary-color': props.content?.customSecondaryColor || props.content?.secondaryColor || '#F5E9F7',
      '--accent-color': props.content?.accentColor || '#E6D7F0',
      '--text-dark': props.content?.textDark || '#1F2937',
      '--text-light': props.content?.textLight || '#6B7280',
    }));
    
    const getNextWebinarDate = computed(() => {
      const date = new Date();
      date.setDate(date.getDate() + 3);
      return date.toLocaleDateString('de-DE', { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long'
      });
    });
    
    const getWebinarPreHeadline = computed(() => {
      return `Live am ${getNextWebinarDate.value}`;
    });
    
    const getWebinarSubHeadline = computed(() => {
      return props.content?.targetGroupDe || 'Für Frauen, die endlich ihren wahren Wert erkennen möchten';
    });
    
    const getAttendeeCount = computed(() => {
      return Math.floor(Math.random() * 200) + 850;
    });
    
    const getWebinarBenefits = computed(() => {
      // Use AI-generated benefits if available, otherwise fallback
      if (props.content?.webinarBenefits && Array.isArray(props.content.webinarBenefits)) {
        return props.content.webinarBenefits;
      }
      
      return [
        {
          title: 'Die 3-Schritte-Formel für unerschütterlichen Selbstwert',
          description: 'Entdecke das bewährte System, mit dem bereits über 1000 Frauen ihr Selbstvertrauen aufgebaut haben',
          icon: '🗝️'
        },
        {
          title: 'Erkenne und löse deine unsichtbaren Selbstwert-Blockaden',
          description: 'Lerne die versteckten Muster kennen, die dich klein halten und wie du sie dauerhaft auflöst',
          icon: '🔓'
        },
        {
          title: 'Der Emotions-Kompass: Gefühle als Wegweiser nutzen',
          description: 'Verwandle unterdrückte Emotionen in deine größte Kraftquelle für authentisches Leben',
          icon: '🧭'
        }
      ];
    });
    
    const getClaritySubHeadline = computed(() => {
      return 'In einem kostenlosen 30-Minuten-Gespräch findest du heraus, welcher Weg für dich der richtige ist.';
    });
    
    const getClarityValuePoints = computed(() => {
      // Use AI-generated value points if available
      if (props.content?.clarityValuePoints && Array.isArray(props.content.clarityValuePoints)) {
        return props.content.clarityValuePoints;
      }
      
      return [
        'Klarheit über deine aktuelle Situation',
        'Identifikation deiner größten Hindernisse',
        'Einen konkreten ersten Schritt',
        'Gefühl für meine Arbeitsweise'
      ];
    });
    
    const getClarityProcess = computed(() => [
      {
        title: 'Kennenlernen & Ist-Analyse',
        description: 'Wir schauen uns deine aktuelle Situation an und identifizieren deine Herausforderungen',
        duration: '10 Min.'
      },
      {
        title: 'Zielfindung & Vision',
        description: 'Wir entwickeln eine klare Vorstellung davon, wo du hinmöchtest',
        duration: '10 Min.'
      },
      {
        title: 'Strategie & nächste Schritte',
        description: 'Du erhältst konkrete Handlungsempfehlungen für deinen Weg',
        duration: '10 Min.'
      }
    ]);
    
    const getFreebieSubHeadline = computed(() => {
      return 'Das ultimative Workbook für deine Reise zu unerschütterlichem Selbstvertrauen';
    });
    
    const getFreebieTitle = computed(() => {
      return props.content?.freebieTitle || 'Der Selbstwert-Kompass';
    });
    
    const getFreebieContents = computed(() => {
      // Use AI-generated contents if available
      if (props.content?.freebieContents && Array.isArray(props.content.freebieContents)) {
        return props.content.freebieContents;
      }
      
      return [
        '15 Seiten geballtes Wissen',
        'Selbstwert-Assessment',
        '7 kraftvolle Übungen',
        'Affirmations-Sammlung',
        'Wochenplan für mehr Selbstliebe'
      ];
    });
    
    const getDownloadCount = computed(() => {
      return Math.floor(Math.random() * 500) + 2500;
    });
    
    const getFreebieBenefits = computed(() => [
      {
        title: 'Erkenne deinen aktuellen Selbstwert-Status',
        description: 'Mit dem Assessment findest du heraus, wo du stehst',
        icon: '📊'
      },
      {
        title: 'Praktische Übungen für jeden Tag',
        description: '7 wissenschaftlich fundierte Techniken für den Alltag',
        icon: '💪'
      },
      {
        title: 'Dein persönlicher Transformationsplan',
        description: 'Ein strukturierter Plan führt dich zu mehr Selbstliebe',
        icon: '📅'
      }
    ]);
    
    const getPersonalIntro = computed(() => {
      return `Als erfahrene Coachin für ${props.content?.nicheDe || 'Selbstwert-Coaching & emotionale Heilung'} begleite ich Frauen dabei, zu ihrem wahren Selbst zu finden.`;
    });
    
    const getPersonalStory = computed(() => {
      return props.content?.personalStoryDe || 'Als ich selbst den Weg zu mehr Selbstwert und emotionaler Freiheit gegangen bin, habe ich erfahren, wie transformierend ehrliche Selbstbegegnung wirkt.';
    });
    
    const getCredentials = computed(() => {
      return props.content?.credentialsDe || [
        'Zertifizierte Coachin für emotionale Heilung',
        'Weiterbildung in körperorientierter Therapie',
        'Über 500 erfolgreich begleitete Frauen'
      ];
    });
    
    const getTestimonials = computed(() => {
      const testimonialTexts = props.content?.testimonialTextDe || [
        'Das Klarheitsgespräch hat mir die Augen geöffnet. Zum ersten Mal hatte ich das Gefühl, dass jemand mich wirklich versteht.',
        'Nach nur 30 Minuten wusste ich genau, was mein nächster Schritt ist. Die Klarheit war unbezahlbar.'
      ];
      
      return testimonialTexts.map((text, index) => ({
        text: text,
        name: ['Maria S.', 'Sarah K.'][index] || `Klientin ${index + 1}`,
        role: ['Unternehmerin', 'Führungskraft'][index] || 'Coaching-Teilnehmerin',
        initials: [['MS'], ['SK']][index] || [`K${index + 1}`]
      }));
    });
    
    const getFaqs = computed(() => [
      {
        question: 'Ist das Angebot wirklich kostenlos?',
        answer: 'Ja, absolut! Es entstehen keinerlei Kosten für dich.'
      },
      {
        question: 'Wie lange dauert das Gespräch?',
        answer: 'Das Gespräch dauert etwa 30 Minuten und findet online statt.'
      },
      {
        question: 'Ist das ein Verkaufsgespräch?',
        answer: 'Nein! Es ist ein echtes Beratungsgespräch ohne Verkaufsdruck.'
      }
    ]);
    
    const getStickyIcon = computed(() => {
      const icons = {
        webinar: '🎥',
        clarity: '💬',
        freebie: '🎁'
      };
      return icons[currentDesign.value];
    });
    
    const getStickyText = computed(() => {
      const texts = {
        webinar: 'Jetzt zum kostenlosen Webinar anmelden!',
        clarity: 'Sichere dir dein kostenloses Klarheitsgespräch!',
        freebie: 'Lade dir das kostenlose Workbook herunter!'
      };
      return texts[currentDesign.value];
    });
    
    const getStickyButtonText = computed(() => {
      const texts = {
        webinar: 'Anmelden',
        clarity: 'Termin buchen',
        freebie: 'Download'
      };
      return texts[currentDesign.value];
    });
    
    // Methods
    const switchDesign = (designType) => {
      currentDesign.value = designType;
      emit('trigger-event', {
        name: 'designChanged',
        event: { design: designType }
      });
    };
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      showStickyCta.value = scrollPosition > windowHeight * 0.8;
    };
    
    const toggleFaq = (index) => {
      activeFaq.value = activeFaq.value === index ? null : index;
    };
    
    const handleCtaClick = () => {
      emit('trigger-event', {
        name: 'ctaClicked',
        event: { design: currentDesign.value }
      });
    };
    
    const handleMediaEdit = (mediaType) => {
      if (!props.content.editable) return;
      currentMediaType.value = mediaType;
      showMediaEditor.value = true;
    };
    
    const closeMediaEditor = () => {
      showMediaEditor.value = false;
      currentMediaType.value = '';
    };
    
    const handleTextEdit = (target) => {
      if (!props.content.editable) return;
      currentEditTarget.value = target;
      currentEditText.value = 'Hier steht der aktuelle Text...';
      showTextEditor.value = true;
    };
    
    const saveTextEdit = () => {
      emit('trigger-event', {
        name: 'textEdited',
        event: { 
          target: currentEditTarget.value, 
          text: currentEditText.value 
        }
      });
      closeTextEditor();
    };
    
    const closeTextEditor = () => {
      showTextEditor.value = false;
      currentEditTarget.value = '';
      currentEditText.value = '';
    };
    
    const handleSectionClick = (index) => {
      emit('trigger-event', {
        name: 'editSection',
        event: { index }
      });
    };
    
    const handleSectionEdit = (index) => {
      emit('trigger-event', {
        name: 'editSection',
        event: { index }
      });
    };
    
    const handleSectionDelete = (index) => {
      additionalSections.value.splice(index, 1);
      emit('trigger-event', {
        name: 'deleteSection',
        event: { index }
      });
    };
    
    const handleAddSection = () => {
      const newSection = {
        title: 'Neue Sektion',
        content: 'Hier steht der Inhalt der neuen Sektion.'
      };
      additionalSections.value.push(newSection);
      emit('trigger-event', {
        name: 'addSection',
        event: { section: newSection }
      });
    };
    
    const scrollToNextSection = () => {
      const nextSection = document.querySelector('.content-section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    // Lifecycle
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
    
    return {
      currentDesign,
      designOptions,
      showStickyCta,
      activeFaq,
      showMediaEditor,
      showTextEditor,
      currentMediaType,
      currentEditText,
      additionalSections,
      cssVariables,
      getNextWebinarDate,
      getWebinarPreHeadline,
      getWebinarSubHeadline,
      getAttendeeCount,
      getWebinarBenefits,
      getClaritySubHeadline,
      getClarityValuePoints,
      getClarityProcess,
      getFreebieSubHeadline,
      getFreebieTitle,
      getFreebieContents,
      getDownloadCount,
      getFreebieBenefits,
      getPersonalIntro,
      getPersonalStory,
      getCredentials,
      getTestimonials,
      getFaqs,
      getStickyIcon,
      getStickyText,
      getStickyButtonText,
      switchDesign,
      handleCtaClick,
      handleMediaEdit,
      handleTextEdit,
      handleSectionClick,
      handleSectionEdit,
      handleSectionDelete,
      handleAddSection,
      toggleFaq,
      closeMediaEditor,
      closeTextEditor,
      saveTextEdit,
      scrollToNextSection
    };
  }
};
</script>

<style lang="scss" scoped>
.multi-design-landing {
  --primary-color: #7D5BA6;
  --secondary-color: #F5E9F7;
  --accent-color: #E6D7F0;
  --success-color: #10B981;
  --warning-color: #F59E0B;
  --danger-color: #EF4444;
  --text-dark: #1F2937;
  --text-light: #6B7280;
  --bg-light: #F9FAFB;
  --white: #FFFFFF;
  --shadow: 0 10px 25px rgba(125, 91, 166, 0.1);
  --shadow-lg: 0 20px 40px rgba(125, 91, 166, 0.15);
  --gradient: linear-gradient(135deg, var(--primary-color), #9B7CB8);
  --border-radius: 12px;
  --transition: all 0.3s ease;
  
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--text-dark);
  position: relative;
  
  * {
    box-sizing: border-box;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  // Design Selector
  .design-selector {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1001;
    background: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-lg);
    padding: 1rem;
    
    .design-options {
      display: flex;
      gap: 0.5rem;
      
      .design-option {
        background: var(--bg-light);
        border: 2px solid transparent;
        border-radius: var(--border-radius);
        padding: 0.75rem;
        cursor: pointer;
        transition: var(--transition);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        
        &:hover {
          border-color: var(--primary-color);
        }
        
        &.active {
          background: var(--primary-color);
          color: white;
        }
        
        .design-icon {
          font-size: 1.5rem;
        }
        
        .design-name {
          font-size: 0.75rem;
          font-weight: 600;
        }
      }
    }
  }

  // Hero Section Base
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    
    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      
      .animated-gradient {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--gradient);
        opacity: 0.05;
        animation: gradientShift 12s ease-in-out infinite;
      }
      
      .floating-elements {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
        .float-element {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--primary-color);
          opacity: 0.1;
          animation: float 8s ease-in-out infinite;
          
          &:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
          &:nth-child(2) { top: 20%; left: 80%; animation-delay: 1s; }
          &:nth-child(3) { top: 60%; left: 70%; animation-delay: 2s; }
          &:nth-child(4) { top: 80%; left: 20%; animation-delay: 3s; }
          &:nth-child(5) { top: 30%; left: 50%; animation-delay: 4s; }
          &:nth-child(6) { top: 70%; left: 40%; animation-delay: 5s; }
        }
      }
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
      text-align: center;
      color: var(--text-light);
      transition: var(--transition);
      z-index: 2;
      
      &:hover {
        color: var(--primary-color);
        transform: translateX(-50%) translateY(-5px);
      }
      
      .scroll-arrow {
        width: 24px;
        height: 24px;
        border-right: 2px solid currentColor;
        border-bottom: 2px solid currentColor;
        transform: rotate(45deg);
        margin: 0 auto 0.5rem;
        animation: bounce 2s infinite;
      }
      
      span {
        font-size: 0.875rem;
        font-weight: 500;
      }
    }
  }
  
  .content-section {
    padding: 5rem 0;
    position: relative;
    
    &:nth-child(even) {
      background: var(--secondary-color);
    }
    
    @media (max-width: 768px) {
      padding: 3rem 0;
    }
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--text-dark);
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  // WEBINAR DESIGN
  .webinar-hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: white;
    
    .urgency-banner {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      padding: 1rem 2rem;
      border-radius: 50px;
      text-align: center;
      margin-bottom: 3rem;
      font-weight: 700;
      
      .urgency-icon {
        margin-right: 0.5rem;
        animation: pulse 2s infinite;
      }
      
      .date-info {
        margin-left: 1rem;
        font-size: 0.9rem;
      }
    }
    
    .hero-headline {
      text-align: center;
      margin-bottom: 2rem;
      
      .pre-headline {
        display: block;
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
        opacity: 0.9;
      }
      
      .main-headline {
        display: block;
        font-size: 3.5rem;
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 1.5rem;
        
        @media (max-width: 768px) {
          font-size: 2.5rem;
        }
      }
      
      .sub-headline {
        display: block;
        font-size: 1.25rem;
        opacity: 0.9;
      }
    }
    
    .unique-method-highlight {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      padding: 1rem 2rem;
      border-radius: var(--border-radius);
      text-align: center;
      margin-bottom: 3rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
      
      .method-icon {
        font-size: 1.5rem;
        margin-right: 0.75rem;
      }
      
      .method-text {
        font-size: 1.125rem;
        font-weight: 600;
      }
    }
    
    .hero-media {
      text-align: center;
      margin-bottom: 4rem;
      
      .video-placeholder {
        position: relative;
        max-width: 600px;
        margin: 0 auto;
        aspect-ratio: 16/9;
        background: rgba(0, 0, 0, 0.4);
        border-radius: var(--border-radius);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: var(--transition);
        border: 2px solid rgba(255, 255, 255, 0.2);
        
        &:hover {
          transform: scale(1.02);
        }
        
        .play-button {
          font-size: 4rem;
          color: white;
          background: rgba(255, 255, 255, 0.2);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        
        .video-label {
          background: rgba(0, 0, 0, 0.7);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
        }
      }
    }
    
    .registration-form {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      padding: 3rem;
      border-radius: var(--border-radius);
      max-width: 500px;
      margin: 0 auto 3rem;
      
      h3 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 1.5rem;
      }
      
      .form-fields {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        
        .form-input {
          width: 100%;
          padding: 1.25rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--border-radius);
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          
          &::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }
          
          &:focus {
            outline: none;
            border-color: rgba(255, 255, 255, 0.5);
          }
        }
        
        .cta-primary {
          background: var(--warning-color);
          color: white;
          border: none;
          padding: 1.5rem;
          border-radius: var(--border-radius);
          font-size: 1.125rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          
          &:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-lg);
          }
          
          .cta-icon {
            margin-right: 0.5rem;
          }
        }
      }
      
      .form-disclaimer {
        text-align: center;
        font-size: 0.875rem;
        opacity: 0.9;
        margin-top: 1.5rem;
      }
    }
    
    .social-proof {
      text-align: center;
      
      .attendee-count {
        font-size: 1.125rem;
        margin-bottom: 1rem;
        
        strong {
          font-size: 1.5rem;
          color: var(--warning-color);
        }
      }
      
      .testimonial-mini {
        background: rgba(255, 255, 255, 0.1);
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        font-style: italic;
      }
    }
  }

  // Benefits Grid
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    
    .benefit-item {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 2rem;
      align-items: center;
      background: white;
      padding: 2rem;
      border-radius: var(--border-radius);
      box-shadow: var(--shadow);
      transition: var(--transition);
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
      }
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
      }
      
      .benefit-number {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: var(--gradient);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 700;
      }
      
      .benefit-content {
        .benefit-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        
        h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }
        
        p {
          color: var(--text-light);
        }
      }
    }
    
    .benefit-card {
      background: white;
      padding: 2rem;
      border-radius: var(--border-radius);
      text-align: center;
      box-shadow: var(--shadow);
      transition: var(--transition);
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
      }
      
      .benefit-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      
      h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: var(--text-dark);
      }
      
      p {
        color: var(--text-light);
      }
    }
  }

  // CLARITY DESIGN
  .clarity-hero {
    background: linear-gradient(135deg, var(--bg-light) 0%, var(--secondary-color) 100%);
    
    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .hero-content {
        .trust-badge {
          background: var(--success-color);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }
        
        .hero-headline {
          margin-bottom: 2rem;
          
          .main-headline {
            display: block;
            font-size: 3rem;
            font-weight: 700;
            color: var(--text-dark);
            line-height: 1.2;
            margin-bottom: 1rem;
            
            @media (max-width: 768px) {
              font-size: 2.25rem;
            }
          }
          
          .sub-headline {
            display: block;
            font-size: 1.125rem;
            color: var(--text-light);
          }
        }
        
        .value-proposition {
          background: white;
          padding: 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          margin-bottom: 2rem;
          
          h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: var(--text-dark);
          }
          
          .value-points {
            .value-point {
              display: flex;
              align-items: center;
              gap: 0.75rem;
              margin-bottom: 1rem;
              
              .point-icon {
                font-size: 1.25rem;
              }
            }
          }
        }
        
        .cta-primary {
          background: var(--primary-color);
          color: white;
          border: none;
          padding: 1.25rem 2rem;
          border-radius: var(--border-radius);
          font-size: 1.125rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          margin-bottom: 1.5rem;
          width: 100%;
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
            filter: brightness(1.1);
          }
          
          .cta-icon {
            margin-right: 0.5rem;
          }
        }
        
        .main-benefit-highlight, .offer-details {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          border-radius: var(--border-radius);
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          
          h4 {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            color: white;
          }
          
          p {
            font-size: 1rem;
            line-height: 1.6;
            opacity: 0.95;
            margin: 0;
          }
        }
        
        .guarantee {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--success-color);
        }
      }
      
      .hero-image {
        position: relative;
        
        .placeholder-image {
          aspect-ratio: 4/5;
          background: var(--accent-color);
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          
          .image-placeholder {
            color: var(--text-light);
            font-size: 1.125rem;
          }
        }
      }
    }
  }

  .process-timeline {
    max-width: 800px;
    margin: 0 auto;
    
    .process-step {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 2rem;
      margin-bottom: 3rem;
      
      .step-number {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 700;
      }
      
      .step-content {
        background: white;
        padding: 2rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        
        h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }
        
        p {
          color: var(--text-light);
          margin-bottom: 1rem;
        }
        
        .step-duration {
          color: var(--primary-color);
          font-weight: 600;
        }
      }
    }
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    
    .testimonial-card {
      background: white;
      padding: 2rem;
      border-radius: var(--border-radius);
      box-shadow: var(--shadow);
      position: relative;
      
      .quote-mark {
        font-size: 4rem;
        color: var(--primary-color);
        opacity: 0.3;
        position: absolute;
        top: 1rem;
        left: 1.5rem;
        font-family: serif;
      }
      
      .testimonial-text {
        font-style: italic;
        margin-bottom: 1.5rem;
        padding-left: 2rem;
        color: var(--text-dark);
      }
      
      .client-info {
        display: flex;
        align-items: center;
        gap: 1rem;
        
        .client-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--gradient);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        
        .client-details {
          strong {
            display: block;
            color: var(--text-dark);
          }
          
          span {
            color: var(--text-light);
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  // FREEBIE DESIGN
  .freebie-hero {
    background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
    
    .hero-content {
      max-width: 1000px;
      margin: 0 auto;
      text-align: center;
      
      .freebie-badge {
        background: var(--primary-color);
        color: white;
        padding: 0.75rem 2rem;
        border-radius: 25px;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
        
        .badge-icon {
          font-size: 1.25rem;
        }
      }
      
      .hero-headline {
        margin-bottom: 2rem;
        
        .main-headline {
          display: block;
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--text-dark);
          line-height: 1.1;
          margin-bottom: 1rem;
          
          @media (max-width: 768px) {
            font-size: 2.5rem;
          }
        }
        
        .sub-headline {
          display: block;
          font-size: 1.25rem;
          color: var(--text-light);
        }
      }
      
      .unique-method-highlight {
        background: rgba(255, 255, 255, 0.9);
        padding: 1rem 2rem;
        border-radius: var(--border-radius);
        margin-bottom: 2rem;
        border-left: 4px solid var(--primary-color);
        
        .method-icon {
          font-size: 1.5rem;
          margin-right: 0.75rem;
        }
        
        .method-text {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-dark);
        }
      }
      
      .main-benefit-preview {
        background: rgba(255, 255, 255, 0.95);
        padding: 2rem;
        border-radius: var(--border-radius);
        margin-bottom: 3rem;
        box-shadow: var(--shadow);
        
        h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }
        
        p {
          font-size: 1.125rem;
          color: var(--text-light);
          line-height: 1.6;
          margin: 0;
        }
      }
      
      .freebie-preview {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
        margin-bottom: 3rem;
        
        @media (max-width: 768px) {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .preview-image {
          .workbook-mockup {
            width: 300px;
            height: 400px;
            margin: 0 auto;
            background: var(--gradient);
            border-radius: var(--border-radius);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
            font-weight: 600;
            box-shadow: var(--shadow-lg);
            
            .mockup-cover {
              text-align: center;
              padding: 2rem;
            }
          }
        }
        
        .preview-content {
          text-align: left;
          
          h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: var(--text-dark);
          }
          
          .freebie-contents {
            margin-bottom: 2rem;
            
            .content-item {
              display: flex;
              align-items: center;
              gap: 0.75rem;
              margin-bottom: 1rem;
              
              .content-icon {
                font-size: 1.25rem;
              }
            }
          }
          
          .download-form {
            background: white;
            padding: 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            
            h4 {
              font-size: 1.25rem;
              font-weight: 600;
              margin-bottom: 1.5rem;
              color: var(--text-dark);
            }
            
            .form-input {
              width: 100%;
              padding: 1rem;
              border: 2px solid var(--accent-color);
              border-radius: var(--border-radius);
              font-size: 1rem;
              margin-bottom: 1rem;
              
              &:focus {
                outline: none;
                border-color: var(--primary-color);
              }
            }
            
            .cta-primary {
              background: var(--gradient);
              color: white;
              border: none;
              padding: 1.25rem;
              border-radius: var(--border-radius);
              font-size: 1.125rem;
              font-weight: 700;
              cursor: pointer;
              transition: var(--transition);
              width: 100%;
              margin-bottom: 1rem;
              
              &:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow-lg);
              }
              
              .cta-icon {
                margin-right: 0.5rem;
              }
            }
            
            .form-disclaimer {
              text-align: center;
              font-size: 0.875rem;
              color: var(--text-light);
            }
          }
        }
      }
      
      .social-proof {
        display: flex;
        justify-content: center;
        gap: 3rem;
        
        @media (max-width: 768px) {
          flex-direction: column;
          gap: 1rem;
        }
        
        .download-count {
          font-size: 1.125rem;
          
          strong {
            font-size: 1.5rem;
            color: var(--primary-color);
          }
        }
        
        .rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          
          .stars {
            color: var(--warning-color);
          }
        }
      }
    }
  }

  // About Section
  .about-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    align-items: center;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .about-image {
      position: relative;
      
      .placeholder-image {
        aspect-ratio: 1;
        background: var(--accent-color);
        border-radius: var(--border-radius);
        display: flex;
        align-items: center;
        justify-content: center;
        
        .image-placeholder {
          color: var(--text-light);
          font-size: 1.125rem;
        }
      }
    }
    
    .about-text {
      h2 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: var(--text-dark);
      }
      
      .about-intro {
        font-size: 1.125rem;
        color: var(--text-light);
        margin-bottom: 1.5rem;
        line-height: 1.7;
      }
      
      .personal-story {
        color: var(--text-light);
        line-height: 1.7;
        margin-bottom: 2rem;
      }
      
      .credentials {
        .credential {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          font-weight: 500;
        }
      }
    }
  }

  // FAQ Section
  .faq-list {
    max-width: 800px;
    margin: 0 auto;
    
    .faq-item {
      background: white;
      border-radius: var(--border-radius);
      margin-bottom: 1rem;
      box-shadow: var(--shadow);
      cursor: pointer;
      transition: var(--transition);
      
      &:hover {
        box-shadow: var(--shadow-lg);
      }
      
      .faq-question {
        padding: 1.5rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        color: var(--text-dark);
        
        .faq-toggle {
          font-size: 1.5rem;
          color: var(--primary-color);
          transition: var(--transition);
        }
      }
      
      .faq-answer {
        padding: 0 2rem 1.5rem;
        color: var(--text-light);
        line-height: 1.7;
        animation: fadeIn 0.3s ease;
      }
      
      &.active {
        .faq-question {
          border-bottom: 1px solid var(--accent-color);
          
          .faq-toggle {
            transform: rotate(180deg);
          }
        }
      }
    }
  }

  // Edit Overlays
  .edit-overlay {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--primary-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.875rem;
    font-weight: 600;
    opacity: 0;
    transition: var(--transition);
    z-index: 10;
    cursor: pointer;
    
    &:hover {
      opacity: 1;
    }
    
    .edit-icon {
      margin-right: 0.5rem;
    }
    
    .edit-button, .delete-button {
      background: none;
      border: none;
      color: white;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      cursor: pointer;
      transition: var(--transition);
      font-size: 0.875rem;
      
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
    
    .delete-button:hover {
      background: var(--danger-color);
    }
  }

  .content-section.editable:hover .edit-overlay {
    opacity: 1;
  }

  // Add Section
  .add-section {
    padding: 2rem 0;
    background: var(--bg-light);
    cursor: pointer;
    transition: var(--transition);
    border: 2px dashed var(--accent-color);
    margin: 2rem 0;
    
    &:hover {
      background: var(--secondary-color);
      border-color: var(--primary-color);
    }
    
    .add-section-button {
      text-align: center;
      color: var(--primary-color);
      font-weight: 600;
      font-size: 1.125rem;
      
      .add-icon {
        margin-right: 0.5rem;
        font-size: 1.5rem;
      }
    }
  }

  // Sticky CTA
  .sticky-cta-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 -5px 20px rgba(125, 91, 166, 0.15);
    z-index: 1000;
    transform: translateY(100%);
    transition: var(--transition);
    
    &.visible {
      transform: translateY(0);
    }
    
    .sticky-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .sticky-message {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        
        .sticky-icon {
          font-size: 1.25rem;
        }
        
        .sticky-text {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 0.9rem;
        }
      }
      
      .cta-sticky {
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 0.875rem 2rem;
        border-radius: var(--border-radius);
        font-weight: 600;
        cursor: pointer;
        transition: var(--transition);
        
        &:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }
        
        @media (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }

  // Modals
  .media-editor-modal, .text-editor-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    
    .media-editor-content, .text-editor-content {
      background: white;
      border-radius: var(--border-radius);
      max-width: 600px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
      
      .editor-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        border-bottom: 1px solid var(--accent-color);
        
        h3 {
          margin: 0;
          color: var(--text-dark);
        }
        
        .close-button {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--text-light);
          
          &:hover {
            color: var(--text-dark);
          }
        }
      }
      
      .editor-body {
        padding: 1.5rem;
        
        .upload-area {
          border: 2px dashed var(--accent-color);
          border-radius: var(--border-radius);
          padding: 3rem;
          text-align: center;
          margin-bottom: 1.5rem;
          cursor: pointer;
          transition: var(--transition);
          
          &:hover {
            border-color: var(--primary-color);
            background: var(--bg-light);
          }
          
          .upload-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            display: block;
          }
          
          p {
            margin-bottom: 0.5rem;
            color: var(--text-dark);
            font-weight: 600;
          }
          
          small {
            color: var(--text-light);
          }
        }
        
        .url-input, .text-input {
          width: 100%;
          padding: 1rem;
          border: 2px solid var(--accent-color);
          border-radius: var(--border-radius);
          font-size: 1rem;
          margin-bottom: 1.5rem;
          
          &:focus {
            outline: none;
            border-color: var(--primary-color);
          }
        }
        
        .text-input {
          font-family: inherit;
          resize: vertical;
        }
        
        .control-buttons, .editor-controls {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          
          .save-button, .cancel-button {
            padding: 0.75rem 1.5rem;
            border-radius: var(--border-radius);
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
          }
          
          .save-button {
            background: var(--primary-color);
            color: white;
            border: none;
            
            &:hover {
              background: #6D4996;
            }
          }
          
          .cancel-button {
            background: var(--bg-light);
            color: var(--text-dark);
            border: 2px solid var(--accent-color);
            
            &:hover {
              background: var(--accent-color);
            }
          }
        }
      }
    }
  }

  // Editable Mode
  &.editable-mode {
    .placeholder-image, .video-placeholder, .workbook-mockup {
      border: 2px dashed var(--primary-color);
      transition: var(--transition);
      
      &:hover {
        background: rgba(125, 91, 166, 0.05);
      }
    }
    
    .section-title, .section-content {
      cursor: text;
      border-radius: 4px;
      transition: var(--transition);
      
      &:hover {
        background: rgba(125, 91, 166, 0.05);
        outline: 1px dashed var(--primary-color);
      }
    }
  }

  // Animations
  @keyframes gradientShift {
    0%, 100% { 
      transform: translateX(-50px) translateY(-50px) rotate(0deg);
    }
    50% { 
      transform: translateX(50px) translateY(50px) rotate(180deg);
    }
  }
  
  @keyframes float {
    0%, 100% { 
      transform: translateY(0px) rotate(0deg);
    }
    50% { 
      transform: translateY(-20px) rotate(180deg);
    }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { 
      transform: translateY(0); 
    }
    40% { 
      transform: translateY(-10px); 
    }
    60% { 
      transform: translateY(-5px); 
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes fadeIn {
    from { 
      opacity: 0; 
      transform: translateY(-10px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }

  // Responsive
  @media (max-width: 768px) {
    .design-selector {
      position: relative;
      top: auto;
      right: auto;
      margin-bottom: 2rem;
      
      .design-options {
        justify-content: center;
        
        .design-option .design-name {
          display: none;
        }
      }
    }
    
    .hero-section {
      min-height: auto;
      padding: 3rem 0;
    }
    
    .hero-grid {
      grid-template-columns: 1fr !important;
    }
    
    .freebie-preview {
      grid-template-columns: 1fr !important;
    }
    
    .about-content {
      grid-template-columns: 1fr !important;
    }
  }
}
</style>