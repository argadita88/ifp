/**
 * CORE PROMPT COMPILATION ENGINE
 * Menggabungkan seluruh modul prompt secara deterministik dan terstruktur.
 */

import {
  PROMPT_SYSTEM_ROLE,
  buildIdentitySection,
  buildSourceMaterialSection,
  buildWorksheetTypesSection,
  buildLearningModelSection,
  buildActivitiesSection,
  buildPedagogicalFeaturesSection,
  buildVisualDesignSection,
  buildIllustrationsSection,
  buildAssessmentSection,
  buildOutputFormatSection,
  buildQualityRulesSection
} from './promptTemplates';

export function generateMasterPrompt(config) {
  if (!config) return '';

  const sections = [
    PROMPT_SYSTEM_ROLE,
    buildIdentitySection(config),
    buildSourceMaterialSection(config),
    buildWorksheetTypesSection(config),
    buildLearningModelSection(config),
    buildActivitiesSection(config),
    buildPedagogicalFeaturesSection(config),
    buildVisualDesignSection(config),
    buildIllustrationsSection(config),
    buildAssessmentSection(config),
    buildOutputFormatSection(config),
    buildQualityRulesSection()
  ];

  // Filter out empty sections and join with double newlines
  return sections.filter((sec) => sec && sec.trim().length > 0).join('\n\n');
}
