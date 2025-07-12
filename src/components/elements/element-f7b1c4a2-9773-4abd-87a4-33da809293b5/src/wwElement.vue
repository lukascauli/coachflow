<template>
  <div 
    class="modern-coach-landing" 
    :style="{ 
      '--primary-color': content.primaryColor || '#FF6B35', 
      '--secondary-color': content.secondaryColor || '#004E89',
      '--accent-color': content.accentColor || '#FFE66D'
    }"
  >
    <!-- Hero Section mit Video Background Effect -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="animated-gradient"></div>
        <div class="floating-elements">
          <div class="float-element" v-for="n in 6" :key="n"></div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="trust-badges">
          <span class="badge">⭐ 500+ Erfolgreiche Klienten</span>
          <span class="badge">🏆 Zertifiziert & Erfahren</span>
        </div>
        
        <h1 class="hero-headline">
          <span class="headline-highlight">{{ getPersonalizedHeadline }}</span>
          <span class="headline-main">{{ content.headlineDe || 'Verwandle dein Leben in nur 90 Tagen' }}</span>
        </h1>
        
        <p class="hero-subline">
          {{ getPersonalizedSubline }}
        </p>
        
        <div class="social-proof-mini">
          <div class="client-avatars">
            <div class="avatar" v-for="n in 4" :key="n">{{ String.fromCharCode(65 + n) }}</div>
          </div>
          <span class="proof-text">Bereits <strong>{{ getClientCount }}+ Menschen</strong> haben ihr Leben verändert</span>
        </div>
        
        <div class="cta-container">
          <button class="cta-primary" @click="handleCtaClick">
            <span class="cta-icon">🚀</span>
            Kostenlose Strategie-Session sichern
            <span class="cta-subtext">Limitiert: Nur noch {{ getSlotsLeft }} Plätze diesen Monat</span>
          </button>
          
          <div class="urgency-timer">
            <span class="timer-label">Angebot läuft ab in:</span>
            <div class="timer">
              <span class="time-unit">{{ timeLeft.hours }}</span>:
              <span class="time-unit">{{ timeLeft.minutes }}</span>:
              <span class="time-unit">{{ timeLeft.seconds }}</span>
            </div>
          </div>
        </div>
        
        <div class="guarantee-badge">
          <span class="guarantee-icon">🛡️</span>
          100% Zufriedenheitsgarantie oder Geld zurück
        </div>
      </div>
      
      <div class="scroll-indicator" @click="scrollToNextSection">
        <div class="scroll-arrow"></div>
        <span>Erfolgsgeschichten ansehen</span>
      </div>
    </section>

    <!-- Problem & Solution Section -->
    <section class="problem-solution-section">
      <div class="container">
        <div class="section-intro">
          <h2 class="section-title">
            Kennst du das auch?
          </h2>
        </div>
        
        <div class="problems-grid">
          <div class="problem-card" v-for="(problem, index) in getProblems" :key="index">
            <div class="problem-icon">{{ problem.icon }}</div>
            <h3>{{ problem.title }}</h3>
            <p>{{ problem.description }}</p>
          </div>
        </div>
        
        <div class="solution-bridge">
          <div class="bridge-arrow">⬇️</div>
          <h3 class="bridge-text">Es gibt eine bewährte Lösung!</h3>
        </div>
      </div>
    </section>

    <!-- Method/Process Section -->
    <section class="method-section">
      <div class="container">
        <h2 class="section-title">
          Die {{ content.nicheDe || 'Coaching' }}-Methode:
          <span class="title-highlight">In 3 Schritten zum Erfolg</span>
        </h2>
        
        <div class="method-steps">
          <div class="step" v-for="(step, index) in getMethodSteps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
              <div class="step-result">
                <strong>Ergebnis:</strong> {{ step.result }}
              </div>
            </div>
            <div class="step-icon">{{ step.icon }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Results & Testimonials -->
    <section class="results-section">
      <div class="container">
        <h2 class="section-title">
          Echte Ergebnisse von echten Menschen
        </h2>
        
        <div class="results-grid">
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
            <div class="result-highlight">
              {{ testimonial.result }}
            </div>
          </div>
        </div>
        
        <div class="stats-row">
          <div class="stat" v-for="stat in getStats" :key="stat.label">
            <div class="stat-number">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Me Section (Authority Building) -->
    <section class="about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-image">
            <div class="placeholder-image">
              <span class="image-placeholder">Dein Foto</span>
            </div>
            <div class="credentials">
              <div class="credential" v-for="cred in getCredentials" :key="cred">
                ✅ {{ cred }}
              </div>
            </div>
          </div>
          
          <div class="about-text">
            <h2 class="section-title">
              Warum du mir vertrauen kannst
            </h2>
            <p class="intro-text">
              {{ getPersonalIntro }}
            </p>
            
            <div class="expertise-points">
              <div class="point" v-for="point in getExpertisePoints" :key="point">
                <span class="point-icon">🎯</span>
                {{ point }}
              </div>
            </div>
            
            <div class="personal-story">
              <h3>Meine Geschichte</h3>
              <p>{{ getPersonalStory }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Offer Section -->
    <section class="offer-section">
      <div class="container">
        <h2 class="section-title">
          Was du in deiner kostenlosen Strategie-Session erhältst:
        </h2>
        
        <div class="offer-grid">
          <div class="offer-item" v-for="(item, index) in getOfferItems" :key="index">
            <div class="offer-icon">{{ item.icon }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <div class="value-tag">Wert: {{ item.value }}</div>
          </div>
        </div>
        
        <div class="total-value">
          <span class="total-label">Gesamtwert:</span>
          <span class="total-amount">€497</span>
          <span class="free-badge">HEUTE KOSTENLOS</span>
        </div>
        
        <div class="final-cta">
          <button class="cta-primary large" @click="handleCtaClick">
            <span class="cta-icon">🚀</span>
            Jetzt kostenlose Session sichern
            <span class="cta-subtext">Klicke hier für sofortigen Zugang</span>
          </button>
          
          <p class="cta-disclaimer">
            💯 Keine Verpflichtungen • 💯 Kein Verkaufsgespräch • 💯 Sofortiger Mehrwert garantiert
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
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

    <!-- Sticky CTA Bar -->
    <div class="sticky-cta-bar" :class="{ 'visible': showStickyCta }">
      <div class="sticky-content">
        <div class="sticky-urgency">
          <span class="urgency-text">⏰ Nur noch {{ getSlotsLeft }} Plätze verfügbar!</span>
        </div>
        <button class="cta-sticky" @click="handleCtaClick">
          Kostenlose Session sichern
        </button>
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
    const timeLeft = ref({ hours: 23, minutes: 59, seconds: 59 });
    
    // Timer countdown
    const startCountdown = () => {
      setInterval(() => {
        if (timeLeft.value.seconds > 0) {
          timeLeft.value.seconds--;
        } else if (timeLeft.value.minutes > 0) {
          timeLeft.value.minutes--;
          timeLeft.value.seconds = 59;
        } else if (timeLeft.value.hours > 0) {
          timeLeft.value.hours--;
          timeLeft.value.minutes = 59;
          timeLeft.value.seconds = 59;
        }
      }, 1000);
    };
    
    // Computed properties
    const getPersonalizedHeadline = computed(() => {
      const niche = props.content?.nicheDe || 'Life';
      return `${niche}-Coach`;
    });
    
    const getPersonalizedSubline = computed(() => {
      const targetGroup = props.content?.targetGroupDe || 'ambitionierte Menschen';
      const niche = props.content?.nicheDe || 'Coaching';
      return `Speziell entwickelt für ${targetGroup}, die durch ${niche} ihre Ziele schneller erreichen und dabei mehr Erfüllung finden möchten.`;
    });
    
    const getClientCount = computed(() => {
      return Math.floor(Math.random() * 200) + 300; // 300-500
    });
    
    const getSlotsLeft = computed(() => {
      return Math.floor(Math.random() * 5) + 3; // 3-8
    });
    
    const getProblems = computed(() => {
      const niche = props.content?.nicheDe?.toLowerCase() || 'life';
      
      const problemSets = {
        'business': [
          { icon: '📉', title: 'Umsatz stagniert', description: 'Du arbeitest härter, aber die Zahlen steigen nicht' },
          { icon: '⏰', title: 'Keine Work-Life-Balance', description: 'Du bist ständig beschäftigt, aber nicht produktiv' },
          { icon: '🤔', title: 'Entscheidungsparalyse', description: 'Zu viele Optionen, keine klare Richtung' }
        ],
        'life': [
          { icon: '😰', title: 'Ständiger Stress', description: 'Du fühlst dich überwältigt und ausgebrannt' },
          { icon: '🎯', title: 'Keine klaren Ziele', description: 'Du weißt nicht, wo du in 5 Jahren stehen willst' },
          { icon: '⚖️', title: 'Unausgeglichenes Leben', description: 'Arbeit dominiert alles andere in deinem Leben' }
        ],
        'karriere': [
          { icon: '🚫', title: 'Berufliche Stagnation', description: 'Du steckst in deiner Position fest' },
          { icon: '💰', title: 'Unterbezahlt', description: 'Du verdienst nicht, was du wert bist' },
          { icon: '😞', title: 'Keine Erfüllung', description: 'Dein Job macht dich nicht glücklich' }
        ]
      };
      
      return problemSets[niche] || problemSets['life'];
    });
    
    const getMethodSteps = computed(() => {
      return [
        {
          title: 'Klarheit schaffen',
          description: 'Wir identifizieren deine wahren Ziele und Hindernisse',
          result: 'Du weißt genau, was du willst und was dich bisher zurückgehalten hat',
          icon: '🎯'
        },
        {
          title: 'Strategie entwickeln',
          description: 'Gemeinsam erstellen wir deinen persönlichen Aktionsplan',
          result: 'Du hast einen klaren Fahrplan für die nächsten 90 Tage',
          icon: '📋'
        },
        {
          title: 'Durchführung & Support',
          description: 'Ich begleite dich bei der Umsetzung und halte dich accountable',
          result: 'Du erreichst deine Ziele nachhaltig und mit Leichtigkeit',
          icon: '🚀'
        }
      ];
    });
    
    const getTestimonials = computed(() => {
      return [
        {
          text: 'Innerhalb von 3 Monaten konnte ich mein Einkommen um 150% steigern und habe endlich die Work-Life-Balance gefunden, von der ich geträumt habe.',
          name: 'Sarah M.',
          role: 'Unternehmerin',
          initials: 'SM',
          result: '+150% Einkommen'
        },
        {
          text: 'Das Coaching hat mein Leben komplett verändert. Ich bin selbstbewusster, klarer in meinen Zielen und endlich wirklich glücklich.',
          name: 'Michael K.',
          role: 'Manager',
          initials: 'MK',
          result: 'Traumjob gefunden'
        },
        {
          text: 'Nach Jahren der Orientierungslosigkeit habe ich endlich meinen Weg gefunden. Die Methoden sind praktisch und sofort umsetzbar.',
          name: 'Anna L.',
          role: 'Freelancerin',
          initials: 'AL',
          result: '+200% Zufriedenheit'
        }
      ];
    });
    
    const getStats = computed(() => {
      return [
        { value: '95%', label: 'Erfolgsrate' },
        { value: '90 Tage', label: 'Bis zum Durchbruch' },
        { value: '500+', label: 'Erfolgreiche Klienten' },
        { value: '4.9/5', label: 'Kundenbewertung' }
      ];
    });
    
    const getCredentials = computed(() => {
      return [
        '5+ Jahre Erfahrung',
        'Zertifizierter Coach',
        '500+ erfolgreiche Klienten',
        'Regelmäßige Weiterbildungen'
      ];
    });
    
    const getPersonalIntro = computed(() => {
      const niche = props.content?.nicheDe || 'Life-Coaching';
      return `Als erfahrener ${niche}-Experte habe ich bereits über 500 Menschen dabei geholfen, ihre Ziele zu erreichen und ein erfüllteres Leben zu führen.`;
    });
    
    const getExpertisePoints = computed(() => {
      return [
        'Individuelle Strategien für nachhaltige Veränderung',
        'Bewährte Methoden aus der Positiven Psychologie',
        'Praktische Tools für den Alltag',
        'Kontinuierliche Unterstützung und Motivation'
      ];
    });
    
    const getPersonalStory = computed(() => {
      return 'Vor Jahren stand ich selbst an dem Punkt, an dem du jetzt stehst. Überwältigt, ohne klare Richtung und mit dem Gefühl, mein Potenzial nicht auszuschöpfen. Durch die Arbeit an mir selbst und das Studium bewährter Coaching-Methoden konnte ich nicht nur mein eigenes Leben transformieren, sondern auch eine Methode entwickeln, die bereits hunderten Menschen geholfen hat.';
    });
    
    const getOfferItems = computed(() => {
      return [
        {
          icon: '🔍',
          title: 'Persönliche Ziel-Analyse',
          description: 'Wir identifizieren deine wahren Wünsche und Hindernisse',
          value: '€147'
        },
        {
          icon: '📋',
          title: 'Individueller 90-Tage-Plan',
          description: 'Du erhältst einen maßgeschneiderten Aktionsplan',
          value: '€197'
        },
        {
          icon: '🎯',
          title: 'Erfolgs-Framework',
          description: 'Bewährte Strategien für nachhaltige Veränderung',
          value: '€97'
        },
        {
          icon: '🚀',
          title: 'Bonus: Quick-Start-Guide',
          description: 'Sofort umsetzbare Techniken für den ersten Schub',
          value: '€56'
        }
      ];
    });
    
    const getFaqs = computed(() => {
      return [
        {
          question: 'Ist die Strategie-Session wirklich kostenlos?',
          answer: 'Ja, absolut! Es ist ein echtes kostenloses Beratungsgespräch, in dem du bereits wertvollen Input erhältst. Kein versteckter Verkauf.'
        },
        {
          question: 'Wie lange dauert eine Session?',
          answer: 'Die Strategie-Session dauert ca. 45-60 Minuten. Genug Zeit, um deine Situation zu verstehen und dir konkrete nächste Schritte zu geben.'
        },
        {
          question: 'Findet das online oder offline statt?',
          answer: 'Die Sessions finden online via Zoom statt, sodass du bequem von zu Hause teilnehmen kannst. Du bekommst den Link nach der Anmeldung.'
        },
        {
          question: 'Was passiert nach der kostenlosen Session?',
          answer: 'Du entscheidest! Wenn du merkst, dass wir gut zusammenpassen und du Unterstützung möchtest, können wir über eine Zusammenarbeit sprechen. Wenn nicht, hast du trotzdem wertvollen Input erhalten.'
        }
      ];
    });
    
    // Methods
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
        event: {}
      });
    };
    
    const scrollToNextSection = () => {
      const problemSection = document.querySelector('.problem-solution-section');
      if (problemSection) {
        problemSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    // Lifecycle
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      startCountdown();
    });
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
    
    return {
      showStickyCta,
      activeFaq,
      timeLeft,
      getPersonalizedHeadline,
      getPersonalizedSubline,
      getClientCount,
      getSlotsLeft,
      getProblems,
      getMethodSteps,
      getTestimonials,
      getStats,
      getCredentials,
      getPersonalIntro,
      getExpertisePoints,
      getPersonalStory,
      getOfferItems,
      getFaqs,
      handleCtaClick,
      scrollToNextSection,
      toggleFaq
    };
  }
};
</script>

<style lang="scss" scoped>
.modern-coach-landing {
  --primary-color: #FF6B35;
  --secondary-color: #004E89;
  --accent-color: #FFE66D;
  --success-color: #10B981;
  --text-dark: #1F2937;
  --text-light: #6B7280;
  --bg-light: #F9FAFB;
  --white: #FFFFFF;
  --shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.15);
  --gradient: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  --border-radius: 12px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--text-dark);
  
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
  
  // Hero Section
  .hero-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 2rem;
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
        animation: gradientShift 8s ease-in-out infinite;
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
          background: var(--accent-color);
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
          
          &:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
          &:nth-child(2) { top: 60%; left: 80%; animation-delay: 1s; }
          &:nth-child(3) { top: 30%; left: 70%; animation-delay: 2s; }
          &:nth-child(4) { top: 80%; left: 20%; animation-delay: 3s; }
          &:nth-child(5) { top: 10%; left: 50%; animation-delay: 4s; }
          &:nth-child(6) { top: 70%; left: 40%; animation-delay: 5s; }
        }
      }
    }
    
    .hero-content {
      max-width: 800px;
      text-align: center;
      z-index: 1;
      
      .trust-badges {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
        
        .badge {
          background: var(--white);
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 600;
          box-shadow: var(--shadow);
          color: var(--text-dark);
        }
      }
      
      .hero-headline {
        margin-bottom: 1.5rem;
        
        .headline-highlight {
          display: block;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .headline-main {
          display: block;
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--text-dark);
          line-height: 1.1;
          
          @media (max-width: 768px) {
            font-size: 2.5rem;
          }
        }
      }
      
      .hero-subline {
        font-size: 1.25rem;
        color: var(--text-light);
        margin-bottom: 2rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
      
      .social-proof-mini {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 2.5rem;
        flex-wrap: wrap;
        
        .client-avatars {
          display: flex;
          gap: -0.5rem;
          
          .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--gradient);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            border: 3px solid white;
            margin-left: -0.5rem;
            
            &:first-child {
              margin-left: 0;
            }
          }
        }
        
        .proof-text {
          font-size: 0.95rem;
          color: var(--text-light);
        }
      }
      
      .cta-container {
        margin-bottom: 2rem;
        
        .cta-primary {
          background: var(--gradient);
          color: white;
          border: none;
          padding: 1.25rem 2.5rem;
          border-radius: var(--border-radius);
          font-size: 1.125rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          box-shadow: var(--shadow-lg);
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          min-width: 320px;
          
          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
          }
          
          .cta-icon {
            margin-bottom: 0.25rem;
            font-size: 1.5rem;
          }
          
          .cta-subtext {
            font-size: 0.8rem;
            font-weight: 400;
            opacity: 0.9;
            margin-top: 0.25rem;
          }
        }
        
        .urgency-timer {
          margin-top: 1rem;
          text-align: center;
          
          .timer-label {
            display: block;
            font-size: 0.9rem;
            color: var(--text-light);
            margin-bottom: 0.5rem;
          }
          
          .timer {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color);
            font-family: 'Courier New', monospace;
            
            .time-unit {
              background: var(--bg-light);
              padding: 0.25rem 0.5rem;
              border-radius: 6px;
              margin: 0 0.125rem;
            }
          }
        }
      }
      
      .guarantee-badge {
        background: var(--success-color);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
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
      
      &:hover {
        color: var(--primary-color);
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
  
  // Section Base Styles
  section:not(.hero-section) {
    padding: 5rem 0;
    
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
    
    .title-highlight {
      color: var(--primary-color);
      display: block;
      font-size: 0.8em;
    }
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  // Problem Solution Section
  .problem-solution-section {
    background: var(--bg-light);
    
    .problems-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
      
      .problem-card {
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
        
        .problem-icon {
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
    
    .solution-bridge {
      text-align: center;
      margin: 3rem 0;
      
      .bridge-arrow {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      
      .bridge-text {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--primary-color);
      }
    }
  }
  
  // Method Section
  .method-section {
    .method-steps {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      max-width: 800px;
      margin: 0 auto;
      
      .step {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 2rem;
        align-items: center;
        background: white;
        padding: 2rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        
        @media (max-width: 768px) {
          grid-template-columns: 1fr;
          text-align: center;
        }
        
        .step-number {
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
        
        .step-content {
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
          
          .step-result {
            color: var(--success-color);
            font-weight: 600;
          }
        }
        
        .step-icon {
          font-size: 3rem;
        }
      }
    }
  }
  
  // Results Section
  .results-section {
    background: var(--bg-light);
    
    .results-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
      
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
          margin-bottom: 1rem;
          
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
        
        .result-highlight {
          background: var(--success-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.875rem;
          font-weight: 600;
          display: inline-block;
        }
      }
    }
    
    .stats-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      text-align: center;
      
      .stat {
        background: white;
        padding: 2rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          color: var(--text-light);
          font-weight: 600;
        }
      }
    }
  }
  
  // About Section
  .about-section {
    .about-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 4rem;
      align-items: start;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .about-image {
        .placeholder-image {
          aspect-ratio: 1;
          background: var(--bg-light);
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          
          .image-placeholder {
            color: var(--text-light);
            font-size: 1.125rem;
          }
        }
        
        .credentials {
          .credential {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
            color: var(--text-dark);
          }
        }
      }
      
      .about-text {
        .intro-text {
          font-size: 1.125rem;
          color: var(--text-light);
          margin-bottom: 2rem;
        }
        
        .expertise-points {
          margin-bottom: 2rem;
          
          .point {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1rem;
            
            .point-icon {
              font-size: 1.25rem;
            }
          }
        }
        
        .personal-story {
          h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--text-dark);
          }
          
          p {
            color: var(--text-light);
            line-height: 1.7;
          }
        }
      }
    }
  }
  
  // Offer Section
  .offer-section {
    background: var(--bg-light);
    
    .offer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
      
      .offer-item {
        background: white;
        padding: 2rem;
        border-radius: var(--border-radius);
        text-align: center;
        box-shadow: var(--shadow);
        position: relative;
        
        .offer-icon {
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
          margin-bottom: 1.5rem;
        }
        
        .value-tag {
          background: var(--accent-color);
          color: var(--text-dark);
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.875rem;
        }
      }
    }
    
    .total-value {
      text-align: center;
      margin-bottom: 3rem;
      
      .total-label {
        font-size: 1.125rem;
        color: var(--text-light);
        margin-right: 1rem;
      }
      
      .total-amount {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-dark);
        text-decoration: line-through;
        margin-right: 1rem;
      }
      
      .free-badge {
        background: var(--primary-color);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 25px;
        font-weight: 700;
        font-size: 1.125rem;
      }
    }
    
    .final-cta {
      text-align: center;
      
      .cta-primary.large {
        font-size: 1.25rem;
        padding: 1.5rem 3rem;
        margin-bottom: 1rem;
      }
      
      .cta-disclaimer {
        color: var(--text-light);
        font-size: 0.9rem;
        margin: 0;
      }
    }
  }
  
  // FAQ Section
  .faq-section {
    .faq-list {
      max-width: 800px;
      margin: 0 auto;
      
      .faq-item {
        background: white;
        border-radius: var(--border-radius);
        margin-bottom: 1rem;
        box-shadow: var(--shadow);
        cursor: pointer;
        
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
          }
        }
        
        .faq-answer {
          padding: 0 2rem 1.5rem;
          color: var(--text-light);
          animation: fadeIn 0.3s ease;
        }
        
        &.active {
          .faq-question {
            border-bottom: 1px solid #E5E7EB;
          }
        }
      }
    }
  }
  
  // Sticky CTA Bar
  .sticky-cta-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
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
      
      .sticky-urgency {
        .urgency-text {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 0.9rem;
        }
      }
      
      .cta-sticky {
        background: var(--gradient);
        color: white;
        border: none;
        padding: 0.875rem 2rem;
        border-radius: var(--border-radius);
        font-weight: 600;
        cursor: pointer;
        transition: var(--transition);
        
        &:hover {
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }
  
  // Animations
  @keyframes gradientShift {
    0%, 100% { transform: translateX(-50px) translateY(-50px) rotate(0deg); }
    50% { transform: translateX(50px) translateY(50px) rotate(180deg); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
}
</style>