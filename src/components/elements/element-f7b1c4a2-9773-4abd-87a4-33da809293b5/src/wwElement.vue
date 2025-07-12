<template>
  <div 
    class="preview-landing-page" 
    :style="{ 
      '--primary-color': content.primaryColor || '#4E8D7C', 
      '--secondary-color': content.secondaryColor || '#F2E9E1' 
    }"
  >
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="headline">{{ content.headlineDe || 'Deine überzeugende Headline' }}</h1>
        <p class="subline">
          {{ generateSubline }}
        </p>
        <button class="cta-button primary" @click="handleCtaClick">
          Jetzt starten
        </button>
      </div>
      <div class="scroll-indicator" @click="scrollToNextSection">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13L12 18L17 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7 7L12 12L17 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </section>

    <!-- Content Sections -->
    <div class="content-sections">
      <section 
        v-for="(section, index) in landingPageSections" 
        :key="index"
        class="content-section"
        :class="{ 'editable': isEditable }"
        @click="isEditable ? handleEditSection(index) : null"
      >
        <div class="section-header">
          <h2>
            {{ getSectionTitle(index) }}
            <small v-if="isEditable" class="edit-icon" title="Bearbeiten">🖉</small>
          </h2>
        </div>
        <div class="section-content">
          <p class="placeholder">
            {{ getSectionPlaceholder(index) }}
          </p>
        </div>
      </section>

      <!-- Add Section Button (only when editable) -->
      <div v-if="isEditable" class="add-section-container">
        <button class="add-section-button" @click="handleAddSection">
          <span>+</span> Sektion hinzufügen
        </button>
      </div>
    </div>

    <!-- Sticky CTA -->
    <div class="sticky-cta" :class="{ 'visible': showStickyCta }">
      <button class="cta-button primary" @click="handleCtaClick">
        Jetzt personalisieren und starten
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

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
    // Editor state
    const isEditing = computed(() => {
      // eslint-disable-next-line no-unreachable
      return false;
    });

    // Computed properties for content
    const isEditable = computed(() => props.content?.editable || false);
    
    const landingPageSections = computed(() => {
      return props.content?.landingPageSections || defaultSections.value;
    });
    
    const defaultSections = ref([
      'Über mich',
      'Mein Angebot',
      'Vorteile',
      'Testimonials',
      'Kontakt'
    ]);
    
    const generateSubline = computed(() => {
      const niche = props.content?.nicheDe || 'Coaching';
      const targetGroup = props.content?.targetGroupDe || 'für ambitionierte Menschen';
      const tone = props.content?.toneDe || '';
      
      return `${niche} ${targetGroup} ${tone}`.trim();
    });
    
    // Scroll handling for sticky CTA
    const showStickyCta = ref(false);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      
      // Show sticky CTA after scrolling past half of the first section
      showStickyCta.value = scrollPosition > windowHeight / 2;
    };
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
    
    // Helper functions for sections
    const getSectionTitle = (index) => {
      return landingPageSections.value[index] || `Sektion ${index + 1}`;
    };
    
    const getSectionPlaceholder = (index) => {
      const placeholders = {
        'Über mich': 'Hier kannst du dich und deine Expertise vorstellen – z.B. deinen Hintergrund, deine Qualifikationen und was dich besonders macht...',
        'Mein Angebot': 'Hier kannst du dein Angebot beschreiben – z.B. Formate, Dauer, Preise...',
        'Vorteile': 'Hier kannst du die Vorteile deines Angebots hervorheben – z.B. was deine Kunden davon haben...',
        'Testimonials': 'Hier kannst du Kundenstimmen einfügen – z.B. Erfahrungsberichte, Erfolgsgeschichten...',
        'Kontakt': 'Hier kannst du deine Kontaktdaten angeben – z.B. E-Mail, Telefon, Social Media...'
      };
      
      const sectionTitle = getSectionTitle(index);
      return placeholders[sectionTitle] || 'Hier kannst du deinen Text später anpassen...';
    };
    
    // Event handlers
    const handleCtaClick = () => {
      if (isEditing.value) return;
      
      emit('trigger-event', {
        name: 'ctaClicked',
        event: {}
      });
    };
    
    const handleEditSection = (index) => {
      if (isEditing.value) return;
      
      emit('trigger-event', {
        name: 'editSection',
        event: { index }
      });
    };
    
    const handleAddSection = () => {
      if (isEditing.value) return;
      
      emit('trigger-event', {
        name: 'addSection',
        event: {}
      });
    };
    
    const scrollToNextSection = () => {
      if (isEditing.value) return;
      
      const firstSection = document.querySelector('.content-section');
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    return {
      isEditable,
      landingPageSections,
      generateSubline,
      showStickyCta,
      getSectionTitle,
      getSectionPlaceholder,
      handleCtaClick,
      handleEditSection,
      handleAddSection,
      scrollToNextSection
    };
  }
};
</script>

<style lang="scss" scoped>
.preview-landing-page {
  --primary-color: #4E8D7C;
  --secondary-color: #F2E9E1;
  --text-color: #333333;
  --light-text: #666666;
  --background: #ffffff;
  --section-background: #fafafa;
  --border-radius: 8px;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  --transition: all 0.3s ease;
  
  font-family: 'Inter', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: var(--text-color);
  line-height: 1.6;
  max-width: 100%;
  overflow-x: hidden;
  
  * {
    box-sizing: border-box;
  }
  
  // Hero Section
  .hero-section {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;
    background-color: var(--background);
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100px;
      background: linear-gradient(to bottom, transparent, var(--secondary-color) 90%);
      opacity: 0.3;
      z-index: 0;
    }
    
    .hero-content {
      max-width: 800px;
      width: 100%;
      text-align: center;
      z-index: 1;
    }
    
    .headline {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      color: var(--text-color);
      
      @media (max-width: 768px) {
        font-size: 2.2rem;
      }
    }
    
    .subline {
      font-size: 1.25rem;
      max-width: 600px;
      margin: 0 auto 2.5rem;
      color: var(--light-text);
      
      @media (max-width: 768px) {
        font-size: 1.1rem;
      }
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
      animation: bounce 2s infinite;
      color: var(--primary-color);
      z-index: 2;
      
      &:hover {
        opacity: 0.8;
      }
    }
  }
  
  // Content Sections
  .content-sections {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .content-section {
    margin-bottom: 4rem;
    padding: 2rem;
    background-color: var(--section-background);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    transition: var(--transition);
    
    &.editable {
      cursor: pointer;
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      }
    }
    
    .section-header {
      margin-bottom: 1.5rem;
      position: relative;
      
      h2 {
        font-size: 1.75rem;
        font-weight: 600;
        color: var(--text-color);
        margin: 0;
        display: flex;
        align-items: center;
        
        &::after {
          content: '';
          display: block;
          width: 60px;
          height: 3px;
          background-color: var(--primary-color);
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
        }
        
        .edit-icon {
          margin-left: 0.5rem;
          font-size: 1rem;
          opacity: 0.6;
          transition: var(--transition);
        }
      }
    }
    
    .section-content {
      .placeholder {
        color: var(--light-text);
        font-style: italic;
        opacity: 0.8;
      }
    }
  }
  
  .add-section-container {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
  
  .add-section-button {
    background-color: transparent;
    border: 2px dashed var(--primary-color);
    color: var(--primary-color);
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius);
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    
    span {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
    
    &:hover {
      background-color: rgba(78, 141, 124, 0.1);
    }
  }
  
  // CTA Button
  .cta-button {
    padding: 0.875rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    
    &.primary {
      background-color: var(--primary-color);
      color: white;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(78, 141, 124, 0.3);
      }
    }
  }
  
  // Sticky CTA
  .sticky-cta {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    z-index: 100;
    transition: var(--transition);
    opacity: 0;
    
    &.visible {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    
    .cta-button {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
    
    @media (max-width: 768px) {
      bottom: 1rem;
      width: calc(100% - 2rem);
      
      .cta-button {
        width: 100%;
        padding: 1rem;
        font-size: 0.9rem;
      }
    }
  }
  
  // Animations
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
}
</style>