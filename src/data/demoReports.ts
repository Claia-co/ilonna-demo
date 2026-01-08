// Rapports de démonstration statiques
export interface Violation {
  id: string;
  clause: string;
  label: string;
  severity: 'critique' | 'élevé' | 'moyen' | 'faible';
  details: string;
  correction: string;
  article_principal?: string;
  fondement_juridique?: string;
}

export interface DemoReport {
  id: string;
  analysis_id: string;
  document_name: string;
  contract_type: string;
  created_at: string;
  corrected_at?: string;
  compliance_score: number;
  total_violations: number;
  critical_errors: number;
  corrections_applied?: number;
  violations: Violation[];
  executive_summary: string;
}

export const demoReports: DemoReport[] = [
  {
    id: "1",
    analysis_id: "analysis_brigad_2026_001",
    document_name: "Sarah-Id-Hamou-CDI-Sales-FR_original.docx",
    contract_type: "CDI (Contrat à Durée Indéterminée)",
    created_at: "2026-01-08T01:23:00Z",
    compliance_score: 72,
    total_violations: 4,
    critical_errors: 1,
    violations: [
      {
        id: "v1",
        clause: "Clause de non-concurrence",
        label: "Contrepartie financière insuffisante",
        severity: "critique",
        details: "La clause de non-concurrence prévoit une contrepartie financière de 15% du salaire mensuel, ce qui est insuffisant selon la jurisprudence qui exige généralement au moins 33% du salaire.",
        correction: "Porter la contrepartie financière à minimum 33% du salaire mensuel brut, versée mensuellement pendant toute la durée de l'interdiction.",
        article_principal: "Cass. soc., 10 juillet 2002",
        fondement_juridique: "La contrepartie financière doit être proportionnée aux restrictions imposées au salarié."
      },
      {
        id: "v2",
        clause: "Période d'essai",
        label: "Durée excessive",
        severity: "élevé",
        details: "La période d'essai de 6 mois pour un poste de commercial est excessive. Pour les cadres, la durée maximale est de 4 mois renouvelable une fois.",
        correction: "Réduire la période d'essai à 4 mois, renouvelable une fois pour une durée de 4 mois maximum, soit 8 mois au total.",
        article_principal: "L1221-19",
        fondement_juridique: "Code du travail - Durée maximale de la période d'essai pour les cadres."
      },
      {
        id: "v3",
        clause: "Clause de mobilité",
        label: "Zone géographique trop étendue",
        severity: "moyen",
        details: "La clause de mobilité couvre l'ensemble du territoire national sans précision de la zone géographique, ce qui pourrait être considéré comme abusif.",
        correction: "Délimiter précisément la zone de mobilité (ex: Île-de-France et régions limitrophes) et prévoir un délai de prévenance raisonnable.",
        article_principal: "Cass. soc., 14 octobre 2008"
      },
      {
        id: "v4",
        clause: "Rémunération variable",
        label: "Objectifs non définis",
        severity: "faible",
        details: "Les objectifs pour le calcul de la part variable ne sont pas précisément définis dans le contrat.",
        correction: "Ajouter une annexe détaillant les objectifs quantifiables et les modalités de calcul de la rémunération variable.",
        article_principal: "L3121-4"
      }
    ],
    executive_summary: "Ce contrat CDI pour un poste commercial présente plusieurs points d'attention. La clause de non-concurrence nécessite une révision urgente de la contrepartie financière. La période d'essai dépasse les limites légales pour les cadres."
  },
  {
    id: "2",
    analysis_id: "fa02a263",
    document_name: "contrat-de-travail-CDI-BERRADA-Imane_original.docx",
    contract_type: "CDI (Contrat à Durée Indéterminée)",
    created_at: "2026-01-08T01:30:00Z",
    corrected_at: "2026-01-04T14:00:00Z",
    corrections_applied: 4,
    compliance_score: 95,
    total_violations: 4,
    critical_errors: 0,
    violations: [
      {
        id: "v1",
        clause: "Durée du travail",
        label: "Mention du forfait jours incomplète",
        severity: "moyen",
        details: "Le forfait jours est mentionné mais le nombre exact de jours travaillés par an n'est pas précisé (convention de 218 jours maximum).",
        correction: "Préciser le nombre de jours travaillés par an (ex: 218 jours) et les modalités de suivi de la charge de travail.",
        article_principal: "L3121-58"
      },
      {
        id: "v2",
        clause: "Convention collective",
        label: "IDCC non mentionné",
        severity: "faible",
        details: "La convention collective applicable est mentionnée mais le numéro IDCC n'est pas précisé.",
        correction: "Ajouter le numéro IDCC de la convention collective applicable (ex: IDCC 1486 pour les bureaux d'études).",
        article_principal: "L2261-22"
      },
      {
        id: "v3",
        clause: "Propriété intellectuelle",
        label: "Cession des droits imprécise",
        severity: "moyen",
        details: "La clause de cession des droits de propriété intellectuelle ne précise pas les modes d'exploitation ni la durée de la cession.",
        correction: "Détailler les droits cédés (reproduction, représentation, adaptation), les supports, la durée et le territoire de la cession.",
        article_principal: "L131-3 CPI"
      },
      {
        id: "v4",
        clause: "Confidentialité",
        label: "Durée post-contractuelle non limitée",
        severity: "faible",
        details: "L'obligation de confidentialité post-contractuelle n'a pas de limite de durée, ce qui pourrait être considéré comme excessif.",
        correction: "Limiter l'obligation de confidentialité à une durée raisonnable après la fin du contrat (ex: 2 à 5 ans selon la nature des informations)."
      }
    ],
    executive_summary: "Contrat globalement conforme après corrections. Les 4 corrections appliquées le 4 janvier 2026 ont permis d'atteindre un score de conformité de 95%. Points mineurs restants sur le forfait jours et la propriété intellectuelle."
  },
  {
    id: "3",
    analysis_id: "693a1f8a",
    document_name: "Cdi-ryan-chaabane-original (2)_original.docx",
    contract_type: "CDI",
    created_at: "2026-01-08T01:31:00Z",
    compliance_score: 50,
    total_violations: 5,
    critical_errors: 2,
    violations: [
      {
        id: "v1",
        clause: "Clause de non-concurrence",
        label: "Absence de contrepartie financière",
        severity: "critique",
        details: "La clause de non-concurrence ne prévoit aucune contrepartie financière, ce qui la rend nulle de plein droit.",
        correction: "Ajouter une contrepartie financière d'au moins 33% du salaire mensuel brut, versée pendant toute la durée de l'interdiction.",
        article_principal: "Cass. soc., 10 juillet 2002",
        fondement_juridique: "Toute clause de non-concurrence doit comporter une contrepartie financière pour être valide."
      },
      {
        id: "v2",
        clause: "Période d'essai",
        label: "Renouvellement non conforme",
        severity: "critique",
        details: "Le renouvellement de la période d'essai n'est pas subordonné à un accord de branche étendu, rendant la clause potentiellement inopposable.",
        correction: "Vérifier que la convention collective applicable autorise le renouvellement et en rappeler les termes dans le contrat.",
        article_principal: "L1221-23",
        fondement_juridique: "Le renouvellement n'est possible que si un accord de branche étendu le prévoit expressément."
      },
      {
        id: "v3",
        clause: "Rémunération",
        label: "Salaire inférieur au minimum conventionnel",
        severity: "élevé",
        details: "Le salaire brut mensuel de 1 900€ semble inférieur au minimum conventionnel pour la catégorie et le coefficient mentionnés.",
        correction: "Vérifier le minimum conventionnel applicable et ajuster le salaire en conséquence. Consulter la grille des salaires de la convention collective.",
        article_principal: "L2253-1"
      },
      {
        id: "v4",
        clause: "Lieu de travail",
        label: "Adresse du lieu de travail imprécise",
        severity: "moyen",
        details: "Le lieu de travail n'est pas suffisamment précisé, ce qui pourrait poser problème en cas de changement d'affectation.",
        correction: "Indiquer l'adresse complète du lieu de travail habituel et, le cas échéant, mentionner la possibilité de déplacements."
      },
      {
        id: "v5",
        clause: "Horaires de travail",
        label: "Absence de mention des horaires",
        severity: "faible",
        details: "Les horaires de travail ne sont pas mentionnés dans le contrat.",
        correction: "Ajouter une mention des horaires habituels ou renvoyer au règlement intérieur de l'entreprise."
      }
    ],
    executive_summary: "Ce contrat présente des non-conformités majeures nécessitant une correction urgente. L'absence de contrepartie financière pour la clause de non-concurrence et les problèmes liés à la période d'essai constituent des risques juridiques importants. Score de conformité critique à 50%."
  }
];

// Données pour le chat juridique
export const demoLegalChat = {
  question: "Quels sont les nouveaux salaires d'apprentis suite à la suppression d'exonérations apprentis ?",
  answer: `Suite au décret du 1er janvier 2025, les rémunérations minimales des apprentis ont été revalorisées. Voici les nouveaux montants applicables :

**Apprentis de moins de 18 ans :**
- 1ère année : 27% du SMIC (soit 477,07€)
- 2ème année : 39% du SMIC (soit 689,10€)
- 3ème année : 55% du SMIC (soit 971,81€)

**Apprentis de 18 à 20 ans :**
- 1ère année : 43% du SMIC (soit 759,77€)
- 2ème année : 51% du SMIC (soit 901,13€)
- 3ème année : 67% du SMIC (soit 1 183,84€)

**Apprentis de 21 à 25 ans :**
- 1ère année : 53% du SMIC (soit 936,47€)
- 2ème année : 61% du SMIC (soit 1 077,82€)
- 3ème année : 78% du SMIC (soit 1 378,20€)

**Apprentis de 26 ans et plus :**
- 100% du SMIC (soit 1 766,92€) ou du salaire minimum conventionnel s'il est plus favorable

La suppression partielle des exonérations spécifiques aux apprentis signifie que les employeurs doivent désormais s'acquitter des cotisations patronales sur une assiette plus large, ce qui peut augmenter le coût total d'un apprenti pour l'entreprise.`,
  references: [
    {
      article: "D6222-26 à D6222-33",
      titre: "Rémunération minimale des apprentis",
      type: "code_travail",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006904567"
    },
    {
      article: "Décret n°2024-1234",
      titre: "Revalorisation du SMIC au 1er janvier 2025",
      type: "decret",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000048123456"
    },
    {
      article: "L6243-1",
      titre: "Dispositions relatives à l'apprentissage",
      type: "code_travail",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037385810"
    },
    {
      article: "Circulaire DSS/5B/2024",
      titre: "Cotisations sociales applicables aux contrats d'apprentissage",
      type: "circulaire",
      url: "https://www.legifrance.gouv.fr/circulaire/id/45678"
    }
  ]
};
