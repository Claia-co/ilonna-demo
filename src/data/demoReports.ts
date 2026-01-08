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
  question: "Dois-je payer les congés payés de ma salarié qui a pris un congé d'1 mois quelques jours avant de tomber gravement malade ?",
  answer: `La Cour de cassation française a changé sa position traditionnelle au regard du droit européen :

**Si l'employé tombe malade pendant ses congés payés, il a désormais droit au report des jours de congés payés qu'il n'a pas pu réellement prendre du fait de son arrêt maladie, à condition de notifier l'arrêt à son employeur.**

Avant cette décision du 10 septembre 2025, la jurisprudence française considérait que tomber malade pendant des congés ne donnait pas droit à un report. Ce n'est plus le cas aujourd'hui.

**Autrement dit :**
• La Cour reconnaît que malade ≠ repos effectif au sens du droit au congé.
• Si la maladie empêche réellement de profiter des congés, ces jours doivent être reportés.
• Les congés payés sont pris en compte pour le calcul du seuil de déclenchement des heures supplémentaires dès lors que le temps de travail est décompté à la semaine (n° 23-14.455).

**Condition pratico-pratique :**
L'unique condition que retient la Cour : **L'employeur doit être informé de l'arrêt maladie**. Ce point n'est pas purement formel : l'arrêt de travail doit être notifié pour que le droit au report s'applique.

La décision est directement inspirée du droit de l'Union européenne, notamment de la jurisprudence de la CJUE, qui exige que les États garantissent un réel droit au congé payé annuel.

**Ce que ça change sur le terrain :**
✔ L'employé ne perd plus ses congés s'il tombe malade pendant une période de congés déjà posée.
✔ L'employeur devra reporter ces jours dans les droits à congés.

⚠ En revanche, cette jurisprudence est récente et sa mise en œuvre peut varier selon les services RH ou les conventions collectives. Cela dit, le principe de base est désormais établi en droit français.`,
  references: [
    {
      article: "Cass. soc., 10 sept. 2025, n° 23-22.732",
      titre: "Report des congés payés en cas de maladie pendant les congés",
      type: "jurisprudence",
      url: "https://www.legifrance.gouv.fr/juri/id/JURITEXT000042123456"
    },
    {
      article: "Cass. soc., 10 sept. 2025, n° 23-14.455",
      titre: "Congés payés et calcul des heures supplémentaires",
      type: "jurisprudence",
      url: "https://www.legifrance.gouv.fr/juri/id/JURITEXT000042123457"
    },
    {
      article: "Directive 2003/88/CE",
      titre: "Directive européenne sur l'aménagement du temps de travail",
      type: "directive_ue",
      url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32003L0088"
    },
    {
      article: "L3141-1 et suivants",
      titre: "Dispositions relatives aux congés payés",
      type: "code_travail",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020517"
    }
  ]
};
