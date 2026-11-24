[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Modèle Excel de Réconciliation Mensuelle Coût/Valeur (CVR) de Construction & Ajustements (Accruals) — Outil de Prévision WIP, Risques de Variation & EAC

[![Licence : Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![Plateforme : Microsoft Excel & outil web gratuit](https://img.shields.io/badge/Platform-Excel%20%7C%20Web%20Tool-217346.svg)
![Secteur : Contrôle des coûts de construction](https://img.shields.io/badge/Industry-Construction%20%26%20QS-orange.svg)
![Catégorie : CVR, WIP & ajustements](https://img.shields.io/badge/Tool-CVR%20%26%20Accruals-2251FF.svg)

**Un modèle Excel de réconciliation mensuelle des coûts et valeurs (CVR) de construction et d'ajustements de chantier (accruals) prêt à l'emploi, conçu pour les équipes projet, les métreurs (QS) et les entrepreneurs afin de réconcilier la valeur certifiée, les coûts du grand livre, les dettes de chantier non facturées, les ordres de modification contestés et les prévisions d'Estimate at Completion (EAC) avant que le retard de facturation ne crée des rapports de rentabilité trompeurs.**

> **Deux façons d'utiliser ce cadre de contrôle des coûts de construction :**
>
> - **Essayez l'outil en ligne gratuit dans le navigateur (sans inscription, test immédiat) :** [Lancez la calculatrice web gratuite de CVR mensuel & d'ajustements](https://hyvoid.github.io/construction-cvr-accruals-excel-template/) pour tester la logique de réconciliation sur un scénario unique directement dans votre navigateur.
> - **Téléchargez le classeur Excel local complet et réutilisable (achat unique · garantie de remboursement de 30 jours sans conditions) :** [Obtenez le modèle Excel complet de CVR mensuel de construction & d'ajustements sur Theseus Workshop](https://theseusworkshop.com/l/cnjyy?utm_source=github&utm_medium=GitHub%20README) — pré-construit avec des formules auto-mises à jour, stocké 100% localement sur votre ordinateur pour une confidentialité totale des données financières, sans aucun frais d'abonnement SaaS récurrent.

---

## Ce que ce modèle Excel de CVR & d'ajustements de construction suit (carte des points de douleur vers les solutions)

La comptabilité de construction de fin de mois surestime souvent le bénéfice du projet parce que la consommation du chantier dépasse le rythme de facturation des fournisseurs. Le tableau ci-dessous fait correspondre les points de douleur courants du contrôle des coûts de construction à ce que ce classeur calcule et à l'action commerciale qu'il déclenche.

| Point de douleur du contrôle des coûts de construction | Ce que ce modèle Excel CVR suit et calcule | Résultat en termes de décision commerciale |
|---|---|---|
| **Bénéfice comptable gonflé vs bénéfice prévisionnel réel (surestimation du WIP)** | Réconcilie le bénéfice du grand livre comptable avec la **valeur certifiée, les coûts ajustés et le coût restant pour achèvement (CTC)** | Sépare immédiatement la marge réelle du projet du bénéfice artificiel causé par les factures fournisseurs tardives et la comptabilisation optimiste des revenus |
| **Absence des dettes de chantier non facturées (déficit d'ajustements de construction)** | Capture **la location de matériel/équipement non facturée, les heures de main-d'œuvre de chantier, les matériaux sur site et les écarts d'évaluation des sous-traitants** avant la réception des factures | Comble l'écart entre les dépenses de chantier et les comptes fournisseurs afin que les rapports de coûts de fin de mois reflètent le passif opérationnel réel |
| **Risque de revenus surestimé des ordres de modification et variations** | Applique des **pondérations de confiance fondées sur les preuves** aux ordres de variation soumis, contestés et non approuvés au lieu de reconnaître 100 % de la valeur des réclamations | Empêche les réclamations non acceptées de gonfler artificiellement les revenus des travaux en cours (WIP) et met en évidence les réclamations insuffisamment documentées |
| **Érosion cachée de la marge des lots de sous-traitance (dérive de marge)** | Suit **la marge cible commerciale d'origine vs la marge prévisionnelle actuelle** pour chaque corps d'état et chaque lot de sous-traitance individuellement | Expose précocement les lots qui saignent — avant que des corps d'état rentables ne masquent les pertes dans les totaux consolidés au niveau du projet |
| **Projections de coût final aveugles (Estimate at Completion / EAC)** | Consolide **les coûts comptabilisés à ce jour + les ajustements de chantier + le coût restant pour achèvement (CTC)** en une **prévision EAC** au niveau des lots | Donne à la direction une prévision défendable de la rentabilité finale du projet des mois avant la réception définitive |
| **Rapports déconnectés sans aucun suivi commercial** | Signale automatiquement **les variations à forte valeur non résolues et les lots en alerte rouge de dérive de marge** dans un registre d'actions | Transforme les rapports de coûts mensuels en ordres commerciaux concrets : justification de réclamations, gel des achats ou contrôles de paiement |


## Aperçu du tableur

Vous voulez y regarder de plus près avant de télécharger ? Vous pouvez prévisualiser le tableur dans Google Sheets pour explorer sa mise en page, sa structure et sa logique de calcul.

**[Voir l'aperçu du tableur sur Google Sheets](https://docs.google.com/spreadsheets/d/1pfwowsXch8fIxNKtaFR8Fk72LO1sItNC/edit?usp=sharing&ouid=108770714531989318327&rtpof=true&sd=true)**

> **Remarque sur la compatibilité :** l'aperçu Google Sheets peut afficher occasionnellement des erreurs `#NAME?` ou des avertissements de formule en raison des différences de compatibilité des formules entre Google Sheets et Microsoft Excel. Il s'agit de problèmes de compatibilité liés uniquement à l'aperçu et qui n'affectent pas la fonctionnalité du classeur Excel d'origine. Pour le comportement prévu des formules et la fonctionnalité complète, veuillez télécharger et ouvrir le fichier `.xlsx` dans Microsoft Excel.

---

## À qui est destiné ce modèle Excel de CVR de construction : rôles et cas d'usage par métier

Que vous meniez votre première revue commerciale mensuelle ou que vous standardisiez le reporting sur plusieurs sous-traitances actives, ce classeur associe des rôles sectoriels spécifiques à des flux de travail Excel prêts à l'emploi :

- **Métreurs juniors (QS) & assistants QS — *Modèle Excel CVR pour QS* :** standardisez les réconciliations mensuelles d'évaluation provisoire, suivez les valeurs certifiées vs demandées des sous-traitants, et construisez des dossiers CVR défendables sans écrire des formules complexes à partir de zéro.
- **Chefs de projet construction (PM) — *Tableur de contrôle des coûts de projet de construction* :** surveillez le coût pour achèvement (CTC) au niveau des lots, les ajustements de matériel/main-d'œuvre non facturés et l'érosion des marges en langage clair, sans attendre des semaines la clôture comptable du siège.
- **Responsables commerciaux & contrôleurs de coûts — *Outil de reporting mensuel CVR & dérive de marge* :** imposez des dates de coupure de fin de mois cohérentes entre les équipes finance et chantier, décotez systématiquement les réclamations de variation à haut risque et priorisez l'intervention commerciale sur les lots signalés.
- **Comptables de projet construction & teneurs de livres — *Suivi Excel des ajustements de construction & du WIP* :** comblez le décalage temporel entre le grand livre fournisseurs comptabilisé et l'avancement réel du chantier pour produire des écritures d'ajustement de fin de mois et des états de WIP plus propres.
- **Entrepreneurs généraux & constructeurs petits et moyens — *Alternative Excel hors ligne aux logiciels ERP de construction* :** obtenez un contrôle des coûts structuré au niveau des lots pour les projets résidentiels, d'aménagement commercial (fit-out), de génie civil, de façades et de CVC, sans payer des milliers par an pour des plateformes d'entreprise comme Procore, Coins ou CMiC.
- **Achats & administrateurs de sous-traitance — *Suivi d'exposition des lots de sous-traitance & contrôle des paiements* :** repérez suffisamment tôt les lots qui dérivent au-delà du budget pour déclencher des revues d'achats, des vérifications de refacturations (back-charges) et des retenues d'attestations de paiement.

---

## Scénarios de construction réels : quand effectuer un contrôle mensuel CVR, WIP & ajustements

Vous n'avez pas besoin d'un service comptable d'entreprise pour rencontrer des angles morts commerciaux. Ce modèle Excel prêt à l'emploi répond directement à quatre scénarios de chantier récurrents :

1. **Reporting directionnel de fin de mois sous contrainte de temps :** lorsque la direction demande la marge réelle du projet avant l'arrivée des factures finales des sous-traitants, et que vous avez besoin d'un dossier de réconciliation mensuel reproductible en quelques minutes.
2. **Forte sous-traitance & chantiers multi-lots (CVC, génie civil, fit-out, façades) :** lorsque 10 à plus de 50 lots de corps d'état tournent simultanément et qu'une seule sous-traitance sous-performante menace d'anéantir le bénéfice total du chantier.
3. **Projets à fortes variations ou périmètre contesté :** lorsque les ordres de modification en attente représentent une grande part des revenus projetés, et que vous avez besoin d'une règle objective pour séparer les droits justifiés des souhaits optimistes.
4. **Transition hors des tableurs ad hoc déconnectés :** lorsqu'un entrepreneur en croissance dépasse le suivi manuel des factures et a besoin d'un flux de travail CVR mensuel fixe, résistant aux erreurs, que n'importe quel membre de l'équipe peut opérer immédiatement.

---

## Démarrage rapide : réaliser un CVR mensuel professionnel en quelques minutes

La réconciliation commerciale des coûts et la comptabilité d'ajustement paraissent complexes sur le papier, c'est pourquoi beaucoup de petites équipes les évitent jusqu'à la rupture de trésorerie. **Dans ce classeur Excel, toutes les règles de correspondance automatique, la logique de pondération des risques et les formules de consolidation dynamiques sont déjà pré-construites et auto-mises à jour.** Vous n'avez même pas besoin de double-cliquer pour étirer des formules — collez simplement vos données de projet et lisez les résultats de décision.

### Étape 1 : tester la logique gratuitement en ligne ou définir vos paramètres CVR mensuels
Commencez par explorer le flux de calcul dans l'[outil web gratuit de CVR & d'ajustements de construction](https://hyvoid.github.io/construction-cvr-accruals-excel-template/), ou ouvrez `00_Global Parameters` dans le classeur Excel local. Définissez votre **date de coupure** mensuelle, le symbole monétaire, les pourcentages de confiance des variations, les seuils d'alerte de dérive de marge, les limites d'alerte d'ajustement et les seuils de suivi des réclamations. Comme chaque hypothèse est centralisée, vous pouvez ajuster les règles de risque commercial à tout moment sans reconstruire une seule formule.

### Étape 2 : copier-coller vos données d'évaluation, de grand livre & d'ajustements de chantier
Collez vos tableurs existants ou vos exports comptables directement dans les trois onglets de saisie désignés :
- `01_Value & Variation Register` — valeurs contractuelles d'origine par lot, évaluations provisoires certifiées et ordres de modification/variations en attente avec statut des preuves.
- `02_Booked Cost Ledger` — transactions de coûts du grand livre / fournisseurs comptabilisées jusqu'à la date de coupure.
- `03_Site Accruals & CTC` — location d'équipement non facturée, main-d'œuvre de chantier, écarts d'évaluation des sous-traitants et coût restant pour achèvement (CTC) estimé.

### Étape 3 : examiner le CVR, l'EAC & la dérive de marge automatisés au niveau des lots
Ouvrez `04_Package CVR Engine`. Le classeur apparie automatiquement chaque code de lot sur tous les onglets de saisie, consolide les revenus ajustés au risque, les coûts comptabilisés, les ajustements de chantier et le CTC, et calcule **l'Estimate at Completion (EAC), le bénéfice prévisionnel, la marge prévisionnelle %, la dérive de marge et le statut de risque du lot** sans aucune copie manuelle de formules.

### Étape 4 : repérer les fuites de bénéfices & déclencher les actions de contrôle commercial
- Ouvrez `05_Profit Reality & Margin Drift Dashboard` pour comparer le bénéfice comptable vs le bénéfice prévisionnel réel et isoler immédiatement vos corps d'état les moins performants.
- Ouvrez `06_Claims & Procurement Control Orders` pour générer une liste d'actions priorisée des variations à forte valeur non résolues nécessitant une justification par des preuves et des lots en alerte rouge nécessitant des contrôles d'achats ou de paiement.

### Étape 5 : verrouiller un flux de travail mensuel local réutilisable (passer du test ponctuel à l'usage récurrent)
L'outil web gratuit est conçu pour des tests rapides et ponctuels. Lorsque vous êtes prêt à exécuter un véritable contrôle commercial mensuel sur des projets actifs sans recommencer à zéro chaque mois, passez au classeur Excel local complet :

- **Clarté de décision en 1 minute pour les débutants :** copiez-collez une seule fois vos données brutes de chantier et de grand livre pour obtenir immédiatement une analyse commerciale de niveau direction — repérez les fuites de bénéfices en 1 minute et restez concentré sur la livraison de construction à forte valeur en haute saison.
- **Simple, fixe & réutilisable localement :** transformez un casse-tête mensuel QS/comptable en un flux de travail Excel répétitif de copier-coller, enregistré directement sur votre disque dur pour des projets et des périodes de reporting illimités.
- **Achat unique vs abonnements SaaS coûteux :** payez une fois, pour une fraction du coût d'abonnement mensuel ou annuel récurrent facturé par les logiciels de contrôle des coûts de construction du marché.
- **Confidentialité des données 100 % hors ligne :** les marges sensibles de l'entrepreneur, les tarifs des sous-traitants et les évaluations de réclamations contestées restent strictement sur votre appareil local — éliminant les risques de sécurité du cloud et d'exposition des données à des tiers.
- **Évaluation sans risque :** garanti par une **garantie de remboursement de 30 jours sans conditions**.

> **Prêt à standardiser votre contrôle des coûts de projet mensuel ?**
> [Téléchargez le classeur Excel complet de CVR mensuel de construction & d'ajustements (achat unique · garantie de remboursement de 30 jours)](https://theseusworkshop.com/l/cnjyy?utm_source=github&utm_medium=GitHub%20README)

---

## La logique métier & la méthodologie : exposer les angles morts cachés des bénéfices de construction

Beaucoup d'équipes de construction — surtout les non-comptables et les chefs de projet débutants — ne découvrent qu'un chantier perd de l'argent que dans les deux derniers mois de construction. Cela arrive parce que les rapports financiers standards contiennent **trois angles morts commerciaux structurels** :

1. **L'illusion du décalage de facturation (angle mort des dettes non facturées) :** les grands livres comptables n'enregistrent les coûts qu'après approbation et saisie des factures. Sur un chantier actif, la location de matériel, la main-d'œuvre et le travail des sous-traitants interviennent des semaines avant l'arrivée des factures. Se fier uniquement aux coûts comptabilisés au grand livre fait paraître rentable un lot déficitaire jusqu'à ce que des factures tardives anéantissent les réserves de trésorerie.
2. **Le piège de la réclamation à 100 % (angle mort optimiste des variations) :** soumettre un ordre de modification de 100,000 $ ne signifie pas que le client certifiera 100,000. Comptabiliser des variations contestées ou non justifiées à leur valeur nominale complète gonfle les revenus déclarés aujourd'hui et impose des dépréciations soudaines au règlement définitif du compte.
3. **L'angle mort du lissage par portefeuille :** ne regarder que la marge totale du projet masque les échecs au niveau des lots. Une marge de +15 % sur du béton structurel peut cacher un dépassement de -25 % en CVC ou en sous-traitance de façades jusqu'à ce que les travaux soient déjà installés et que le levier commercial ait disparu.

### Comment ce classeur les résout (cadre de contrôle commercial en 6 parties)

Le modèle impose une règle commerciale directe : **mesurer le bénéfice du projet avec des revenus raisonnablement justifiables et le coût complet nécessaire pour achever l'intégralité du périmètre — jamais seulement les factures traitées à ce jour.**

- **Alignement de la date de coupure :** force les certifications de revenus, les coûts du grand livre et les ajustements de chantier sur une date de coupure mensuelle commune afin que les décalages temporels ne puissent pas fausser le bénéfice.
- **Évaluation des variations pondérée par les preuves :** décote les ordres de modification en attente selon leur statut réel d'approbation et de preuve, empêchant les réclamations incertaines de gonfler les revenus prévisionnels.
- **Reconnaissance des ajustements de chantier :** intègre immédiatement au rapport mensuel les dettes d'équipement, de main-d'œuvre et de sous-traitance encourues mais non facturées, alignant les chiffres financiers sur l'avancement physique du chantier.
- **Prévision de l'Estimate at Completion (EAC) :** combine les coûts comptabilisés encourus, les ajustements de chantier et le coût restant pour achèvement (CTC) pour projeter le coût final du lot tant qu'il est encore temps d'intervenir.
- **Surveillance de la dérive de marge au niveau des lots :** compare la marge prévisionnelle actuelle à la cible commerciale d'origine pour chaque lot de corps d'état, exposant immédiatement l'érosion des marges.
- **Registre de contrôle transformant les exceptions en actions :** filtre automatiquement les variations contestées à forte valeur et les lots en forte dérive de marge en tâches commerciales concrètes — collecte de preuves, négociation de variations et gels d'achats/paiements.

---

## Comparaison du contrôle des coûts de construction : reporting comptable traditionnel vs flux de travail Excel CVR au niveau des lots

| Mode de défaillance du contrôle des coûts de construction | Reporting comptable traditionnel & tableur manuel (risque élevé d'érosion de marge) | Flux de travail automatisé du modèle Excel mensuel CVR & ajustements |
|---|---|---|
| **Décalage des factures fournisseurs & dettes de chantier non facturées** | Le compte de résultat de fin de mois surestime le bénéfice brut parce que la location de matériel consommée, la main-d'œuvre au jour le jour (daywork) et le travail des sous-traitants n'ont pas encore été saisis en comptabilité fournisseurs | La location de matériel, la main-d'œuvre et les écarts d'évaluation des sous-traitants non facturés sont systématiquement capturés comme **ajustements de chantier mensuels** |
| **Ordres de modification non acceptés & variations contestées** | Les demandes de variation soumises sont comptabilisées à 100 % de leur valeur nominale, créant des revenus WIP gonflés et des abandons soudains au règlement du compte définitif | Les variations en attente sont **ajustées au risque selon les preuves et le niveau de confiance**, révélant les revenus récupérables vs l'exposition aux réclamations |
| **Dates de coupure financière et chantier incohérentes** | Les demandes d'évaluation, les attestations des sous-traitants et les écritures comptables s'étendent sur des périodes différentes, faussant la marge commerciale mensuelle | Tous les revenus, transactions comptabilisées et ajustements de chantier sont verrouillés sur une **date de coupure mensuelle unique** |
| **Ignorance du coût restant pour achèvement (CTC)** | Les équipes examinent les coûts passés sans quantifier la trésorerie encore nécessaire pour achever le périmètre restant des lots | **L'EAC au niveau des lots** combine les coûts comptabilisés, les ajustements de chantier et le CTC restant pour prévoir le bénéfice réel à l'achèvement |
| **Masquage de l'érosion de marge des lots par le total du projet** | Les totaux consolidés du bénéfice du projet dissimulent de graves dépassements de coûts dans des sous-traitances individuelles CVC, génie civil ou fit-out | **Le suivi automatisé de la dérive de marge au niveau des lots** signale les corps d'état descendant sous les marges d'origine/cibles du devis |
| **Rapports statiques sans application commerciale** | Les rapports de coûts de fin de mois dorment dans des dossiers tandis que les réclamations échues perdent leur justification et que les sous-traitants en dépassement continuent d'être payés | Les réclamations de variation à haut risque et les lots en alerte rouge alimentent automatiquement **Claims & Procurement Control Orders** |

---

## Pourquoi j'ai construit ce cadre mensuel de CVR & de contrôle des coûts

Les projets de construction échouent rarement du jour au lendemain à cause d'un seul mauvais chiffre de devis. Ils perdent des bénéfices en silence parce que les opérations de chantier, les évaluations commerciales et la comptabilité financière tournent sur trois horloges différentes.

La finance enregistre les coûts lorsque les factures franchissent la comptabilité fournisseurs. Les équipes chantier consomment matériel, main-d'œuvre et heures de sous-traitance des semaines plus tôt. Les équipes commerciales soumettent des ordres de modification qui restent en négociation pendant des mois. Lorsque la direction combine des coûts partiels du grand livre avec des réclamations de variations non vérifiées, le rapport mensuel affiche un bénéfice sain jusqu'à l'effondrement du compte définitif.

J'ai construit ce classeur pour transformer ce déficit de réconciliation en une habitude mensuelle reproductible. En plaçant côte à côte, au niveau de chaque sous-traitance, les revenus certifiés, les variations ajustées au risque, les coûts comptabilisés au grand livre, les ajustements de chantier non facturés et le coût restant pour achèvement, les équipes voient quand un lot « rentable » a déjà glissé vers la perte — suffisamment tôt pour resserrer les achats, justifier les réclamations et protéger la marge finale sans reconstruire des tableurs chaque mois.

---

## À propos de Theseus Workshop — boîtes à outils Excel légères d'aide à la décision locales

Je conçois des trackers opérationnels pratiques stockés localement et des boîtes à outils Excel d'aide à la décision financière pour les équipes de construction, les entrepreneurs et les exploitants confrontés à trop de paramètres mouvants.

Chaque boîte à outils est construite autour d'une question : **quels chiffres doivent se trouver au même endroit pour que vous puissiez prendre la prochaine décision commerciale en toute confiance en quelques minutes ?**

Vous cherchez d'autres classeurs Excel prêts à l'emploi, à achat unique, pour le chiffrage de construction, le contrôle des coûts de projet, la prévision de trésorerie et la gestion opérationnelle — sans frais SaaS récurrents et avec une confidentialité hors ligne complète ?

- **[Parcourir toutes les boîtes à outils Excel de décision construction & entreprise sur Theseus Workshop (theseusworkshop.com)](https://theseusworkshop.com/)**
- **[Télécharger le classeur Excel complet de CVR mensuel de construction & d'ajustements](https://theseusworkshop.com/l/cnjyy?utm_source=github&utm_medium=GitHub%20README)**
- **[Voir la licence Apache 2.0 du dépôt](LICENSE)**


## Détails techniques

<details>
<summary>Pour les réviseurs techniques, praticiens Excel et collaborateurs</summary>

### Architecture du classeur

Le classeur suit une architecture à quatre couches :

| Couche | Feuille | Responsabilité |
|---|---|---|
| Contrôle global | `00_Global Parameters` | Date de coupure, devise, facteurs de confiance des variations, seuils de dérive de marge, seuils d'alerte d'ajustement, seuil de suivi des réclamations et marge cible |
| Entrées de données | `01_Value & Variation Register` | Données de base des lots, valeur certifiée et variations en attente |
| Entrées de données | `02_Booked Cost Ledger` | Enregistrements du grand livre des coûts financiers |
| Entrées de données | `03_Site Accruals & CTC` | Passifs d'ajustement de chantier et estimations de coût pour achèvement |
| Moteur de calcul | `04_Package CVR Engine` | Réconciliation des revenus au niveau des lots, agrégation des coûts, EAC, bénéfice, marge, dérive et statut |
| Sortie de gestion | `05_Profit Reality & Margin Drift Dashboard` | Réconciliation au niveau du projet, santé des ajustements et classement des exceptions |
| Sortie d'actions | `06_Claims & Procurement Control Orders` | Suivi des réclamations et instructions de contrôle des achats/paiements en alerte rouge |

#### Flux de données

```text
                   GLOBAL PARAMETERS
             Cut-off / Risk / Thresholds
                          |
        +-----------------+-----------------+
        |                 |                 |
        v                 v                 v
  VALUE & VO         BOOKED COST       SITE ACCRUALS
  REGISTER            LEDGER              & CTC
        |                 |                 |
        +-----------------+-----------------+
                          |
                          v
                 PACKAGE CVR ENGINE
                          |
          +---------------+---------------+
          |                               |
          v                               v
   MANAGEMENT DASHBOARD           ACTION INSTRUCTION SHEETS
   Profit & Margin Drift          Claims / Procurement / Payment
```

#### Logique de réconciliation

Le moteur de calcul utilise les codes de lot comme clé d'agrégation principale.

Pour chaque lot, le modèle consolide :

1. Les revenus certifiés valides à la date de coupure.
2. Les revenus des variations en attente ajustés au risque.
3. Les coûts financiers comptabilisés.
4. Les passifs d'ajustement de chantier.
5. Le coût restant pour achèvement.

L'EAC résultant est comparé à la prévision de revenus ajustée au risque pour dériver le bénéfice prévisionnel et la marge au niveau du lot.

### Trois pièges qui attrapent même les gestionnaires de construction expérimentés

#### Piège 1 — considérer les coûts facturés comme le coût total encouru

**Décision :** un chef de projet conclut qu'une sous-traitance reste rentable parce que le grand livre comptabilisé affiche des coûts inférieurs au budget.

**Le défaut caché :** la main-d'œuvre de chantier, la location d'équipement et le travail des sous-traitants déjà réalisés n'ont pas encore été facturés ni comptabilisés.

**Illustration :**

| | Montant |
|---|---:|
| Revenus certifiés et déclarés | 1,000,000 |
| Coût comptabilisé | 700,000 |
| Bénéfice apparent | 300,000 |
| Ajustements de chantier non facturés | 180,000 |
| Coût réel encouru | 880,000 |
| Bénéfice encouru corrigé | 120,000 |

Le bénéfice apparent est surestimé de 180,000 avant même de considérer les travaux restants.

Le grand livre financier n'est pas nécessairement faux. Il est incomplet pour la prévision de projet.

L'approche corrigée consiste à réconcilier les coûts du grand livre avec les passifs opérationnels à une coupure commune. La rentabilité doit être évaluée par rapport aux coûts déjà encourus, pas seulement par rapport aux factures déjà traitées.

<details>
<summary>Référence de formule — réconciliation du coût encouru</summary>

```excel
Booked Cost = SUMIFS(Valid_Booked_Cost, Package_Code)

Accruals = SUMIFS(Valid_Accruals, Package_Code)

Actual Incurred Cost = Booked Cost + Accruals
```

Le classeur met en œuvre cette agrégation via des sorties de tableaux dynamiques et une logique `SUMIFS` au niveau des lots.

</details>

#### Piège 2 — considérer chaque variation en attente comme entièrement récupérable

**Décision :** un projet déclare la valeur totale des variations soumises comme revenus.

**Le défaut caché :** la variation peut avoir des preuves incomplètes, un prix non résolu, un droit contesté ou aucune instruction formelle.

Une réclamation soumise n'équivaut pas à une valeur approuvée ou récupérable.

| Statut des preuves de variation | Facteur de confiance illustratif |
|---|---:|
| A — Preuves complètes / instruction forte | 85% |
| B — Négociation ou preuves partielles à l'appui | 50% |
| C — Contesté ou preuves faibles | 10% |

Il s'agit de facteurs d'évaluation configurables, pas de probabilités d'approbation contractuelles ni de normes comptables.

Par exemple, une variation soumise de 200,000 évaluée au niveau B contribue 100,000 à la prévision de revenus ajustée au risque dans le modèle par défaut.

L'approche corrigée sépare le montant soumis du montant ajusté au risque. Cela rend l'incertitude visible et empêche une réclamation en attente de gonfler automatiquement le bénéfice prévisionnel.

<details>
<summary>Référence de formule — ajustement au risque des variations</summary>

```excel
Risk-Adjusted Variation =
Submitted Variation Amount
* Confidence Factor
```

Le facteur de confiance est attribué selon le niveau de preuve de variation sélectionné.

</details>

#### Piège 3 — ignorer le coût restant pour achèvement

**Décision :** la direction conclut qu'un lot a une rentabilité acceptable parce que les coûts encourus à ce jour sont maîtrisés.

**Le défaut caché :** le périmètre restant peut encore nécessiter des dépenses importantes, et le coût encouru actuel ne représente pas le coût final du lot.

| | Montant |
|---|---:|
| Revenus ajustés au risque | 1,000,000 |
| Coût comptabilisé | 600,000 |
| Ajustements | 100,000 |
| Coût encouru | 700,000 |
| CTC restant | 250,000 |
| EAC prévisionnel | 950,000 |
| Bénéfice prévisionnel | 50,000 |

Le lot présente un bénéfice apparent de 300,000 si l'on ne déduit que les coûts comptabilisés. Après ajustements et CTC, le bénéfice prévisionnel n'est plus que de 50,000.

L'approche corrigée consiste à prévoir le coût d'achèvement de l'intégralité du lot. La décision commerciale doit reposer sur le coût final attendu, pas sur le coût accumulé à ce jour.

<details>
<summary>Référence de formule — Estimate at Completion</summary>

```excel
EAC = Booked Cost + Accruals + CTC
```

</details>

### Exemple de scénario

Considérez une sous-traitance présentant la situation commerciale suivante à la coupure mensuelle :

| Élément | Montant |
|---|---:|
| Revenus de référence | 1,200,000 |
| Coût cible de référence | 1,050,000 |
| Revenus certifiés | 850,000 |
| Variations en attente | 200,000 |
| Niveau de preuve de variation | B |
| Coût comptabilisé | 720,000 |
| Équipement et main-d'œuvre non facturés | 80,000 |
| Écart d'évaluation de sous-traitance QS | 40,000 |
| CTC restant | 260,000 |

#### Étape 1 — établir la marge de référence

La marge cible d'origine est fondée sur la valeur contractuelle de référence et le coût cible.

La marge de référence du lot est de 12.5%.

#### Étape 2 — ajuster au risque les variations en attente

Le montant des variations en attente de 200,000 est évalué au niveau B.

Avec le facteur par défaut de 50%, la valeur de variation ajustée au risque est de 100,000.

La prévision de revenus ajustée au risque est :

850,000 + 100,000 = 950,000

#### Étape 3 — réconcilier le coût encouru

Le coût comptabilisé est de 720,000.

Les ajustements de chantier comprennent :

- Équipement et main-d'œuvre : 80,000
- Écart d'évaluation de sous-traitance QS : 40,000

Le coût réel encouru est de 840,000.

#### Étape 4 — prévoir le coût d'achèvement

Le CTC restant du lot est de 260,000.

L'EAC est :

840,000 + 260,000 = 1,100,000

#### Étape 5 — évaluer la rentabilité prévisionnelle

| Indicateur | Montant |
|---|---:|
| Revenus ajustés au risque | 950,000 |
| EAC | 1,100,000 |
| Bénéfice prévisionnel | -150,000 |
| Marge prévisionnelle | -15.8% |
| Marge de référence | 12.5% |
| Dérive de marge | -28.3 points de pourcentage |

Le lot est prévu pour perdre 150,000 selon les hypothèses actuelles.

Le problème n'est pas simplement que le lot sous-performe. La combinaison d'une récupération incomplète des variations et du coût d'achèvement prévisionnel a placé le lot nettement en dessous de sa cible commerciale d'origine.

La réponse appropriée est une revue commerciale, un suivi des preuves de réclamation et une intervention de contrôle des coûts, plutôt qu'une poursuite de la confiance dans la marge budgétaire d'origine.

### Référence des formules

Les formules ci-dessous décrivent la logique de calcul du classeur. Les groupes de formules sont organisés par feuille source et par couche de calcul.


<details>
<summary>Référence des formules — feuilles de saisie et de calcul</summary>

#### Feuille 00 — Global Parameters

La feuille des paramètres globaux contient 11 paramètres, configurés dans `C4:C14`.

| Cellule | Paramètre | Valeur par défaut |
|---|---|---:|
| C4 | Symbole monétaire | Défini par l'utilisateur |
| C5 | Date de coupure | 2026-10-31 |
| C6 | Facteur de reconnaissance financière des variations | 100% |
| C7 | Facteur de variation niveau A | 85% |
| C8 | Facteur de variation niveau B | 50% |
| C9 | Facteur de variation niveau C | 10% |
| C10 | Seuil jaune de dérive de marge | -3.0% |
| C11 | Seuil rouge de dérive de marge | -5.0% |
| C12 | Seuil d'alerte d'ajustement | 15.0% |
| C13 | Seuil de montant de suivi des réclamations | 100,000 |
| C14 | Marge brute cible du projet | 12.0% |

Les valeurs des paramètres constituent la source centrale de configuration du classeur.

#### Feuille 01 — Value & Variation Register

##### Revenus certifiés valides à la coupure

Cellule de départ : `J5`

```excel
=IF(A5:A5000="", "", IF(G5:G5000<='00_Global Parameters'!$C$5, F5:F5000, 0))
```

Seule la valeur certifiée associée à des dates antérieures ou égales à la coupure mensuelle est reconnue.

##### Facteur de confiance de variation

Cellule de départ : `K5`

```excel
=IF(A5:A5000="", "", IF(I5:I5000="A", '00_Global Parameters'!$C$7, IF(I5:I5000="B", '00_Global Parameters'!$C$8, '00_Global Parameters'!$C$9)))
```

Le facteur de confiance est attribué selon le niveau de preuve de variation.

##### Valeur de variation ajustée au risque

Cellule de départ : `L5`

```excel
=IF(A5:A5000="", "", H5:H5000 * K5#)
```

##### Variation en attente financièrement reconnue

Cellule de départ : `M5`

```excel
=IF(A5:A5000="", "", H5:H5000 * '00_Global Parameters'!$C$6)
```

Cette colonne reproduit le traitement traditionnel de reconnaissance intégrale selon le facteur financier de variation configuré. Elle sert de référence de comparaison, et non d'affirmation de conformité à une norme comptable particulière.

#### Feuille 02 — Booked Cost Ledger

##### Classification par coupure

Cellule de départ : `G5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, "Included", "Excluded - Future Period"))
```

##### Coût comptabilisé valide à la coupure

Cellule de départ : `H5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, F5:F5000, 0))
```

Le classeur filtre les coûts en utilisant la date réelle de survenance métier, plutôt que de s'appuyer exclusivement sur la date de comptabilisation de la facture.

#### Feuille 03 — Site Accruals & CTC

##### Classification des ajustements par coupure

Cellule de départ : `H5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, "Included", "Excluded - Future Period"))
```

##### Ajustements de chantier valides

Cellule de départ : `I5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, D5:D5000 + E5:E5000 + F5:F5000, 0))
```

Les ajustements comprennent :

- La location d'équipement non facturée.
- Les heures de main-d'œuvre non réglées.
- Les écarts d'évaluation de sous-traitance approuvés par le QS.

##### Coût pour achèvement valide

Cellule de départ : `J5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, G5:G5000, 0))
```

L'estimation du CTC est issue de l'enregistrement d'évaluation courant associé à la coupure.

#### Feuille 04 — Package CVR Engine

##### 1. Codes de lot uniques

Cellule de départ : `A5`

```excel
=UNIQUE(TOCOL('01_Value & Variation Register'!A5:A5000, 1))
```

##### 2. Nom du lot

Cellule de départ : `B5`

```excel
=XLOOKUP(A5#, '01_Value & Variation Register'!A5:A5000, '01_Value & Variation Register'!B5:B5000, "")
```

##### 3. Marge cible de référence

Cellule de départ : `C5`

```excel
=LET(
    rev, SUMIFS('01_Value & Variation Register'!D5:D5000, '01_Value & Variation Register'!A5:A5000, A5#),
    cost, SUMIFS('01_Value & Variation Register'!E5:E5000, '01_Value & Variation Register'!A5:A5000, A5#),
    IF(rev=0, 0, (rev - cost) / rev)
)
```

##### 4. Revenus financièrement déclarés

Cellule de départ : `D5`

```excel
=SUMIFS('01_Value & Variation Register'!J5#, '01_Value & Variation Register'!A5:A5000, A5#)
+ SUMIFS('01_Value & Variation Register'!M5#, '01_Value & Variation Register'!A5:A5000, A5#)
```

Ceci reproduit la mesure comparative des revenus fondée sur la valeur certifiée valide à la coupure et la reconnaissance financière configurée des variations.

##### 5. Revenus CVR ajustés au risque

Cellule de départ : `E5`

```excel
=SUMIFS('01_Value & Variation Register'!J5#, '01_Value & Variation Register'!A5:A5000, A5#)
+ SUMIFS('01_Value & Variation Register'!L5#, '01_Value & Variation Register'!A5:A5000, A5#)
```

##### 6. Coût comptabilisé

Cellule de départ : `F5`

```excel
=SUMIFS('02_Booked Cost Ledger'!H5#, '02_Booked Cost Ledger'!D5:D5000, A5#)
```

##### 7. Ajustements

Cellule de départ : `G5`

```excel
=SUMIFS('03_Site Accruals & CTC'!I5#, '03_Site Accruals & CTC'!B5:B5000, A5#)
```

##### 8. Coût réel encouru

Cellule de départ : `H5`

```excel
=F5# + G5#
```

##### 9. Coût pour achèvement

Cellule de départ : `I5`

```excel
=SUMIFS('03_Site Accruals & CTC'!J5#, '03_Site Accruals & CTC'!B5:B5000, A5#)
```

##### 10. Estimate at Completion

Cellule de départ : `J5`

```excel
=H5# + I5#
```

##### 11. Bénéfice financièrement déclaré

Cellule de départ : `K5`

```excel
=D5# - F5#
```

Ce bénéfice comparatif est fondé uniquement sur les revenus financièrement reconnus et les coûts comptabilisés.

##### 12. Bénéfice CVR prévisionnel

Cellule de départ : `L5`

```excel
=E5# - J5#
```

##### 13. Marge CVR prévisionnelle

Cellule de départ : `M5`

```excel
=IF(E5#=0, 0, L5# / E5#)
```

##### 14. Dérive de marge

Cellule de départ : `N5`

```excel
=M5# - C5#
```

La dérive de marge s'exprime comme une différence en points de pourcentage entre la marge prévisionnelle et la marge cible d'origine.

##### 15. Statut de contrôle du lot

Cellule de départ : `O5`

```excel
=IF(N5#<='00_Global Parameters'!$C$11, "RED ALERT - FREEZE PROCUREMENT", IF(N5#<='00_Global Parameters'!$C$10, "YELLOW ALERT - MARGIN DECLINE", "NORMAL"))
```

Le statut du lot est piloté par les seuils de dérive de marge rouge et jaune configurés.

</details>

<details>
<summary>Référence des formules — feuilles de tableau de bord et d'actions</summary>

#### Feuille 05 — Profit Reality & Margin Drift Dashboard

##### 1. Bénéfice total financièrement déclaré

Cellule de départ : `C5`

```excel
=SUM('04_Package CVR Engine'!K5#)
```

##### 2. Bénéfice CVR prévisionnel total

Cellule de départ : `C6`

```excel
=SUM('04_Package CVR Engine'!L5#)
```

##### 3. Écart d'ajustement du bénéfice

Cellule de départ : `C7`

```excel
=C5-C6
```

Résumé d'alerte de gestion en `D7` :

```excel
="Warning: Reported profit exceeds the CVR forecast by "&'00_Global Parameters'!$C$4&TEXT(C7,"#,##0.00")&", primarily due to incomplete accruals and variation recognition assumptions."
```

##### 4. Diagnostic de santé des ajustements et de la marge

Cellule de départ : `C8`

```excel
=LET(
    accr_rate, SUM('04_Package CVR Engine'!G5#) / SUM('04_Package CVR Engine'!H5#),
    real_gpm, SUM('04_Package CVR Engine'!L5#) / SUM('04_Package CVR Engine'!E5#),
    accr_msg, IF(accr_rate>'00_Global Parameters'!$C$12, "【Accrual Warning: "&TEXT(accr_rate,"0.0%")&" exceeds threshold】", "【Accrual Health: "&TEXT(accr_rate,"0.0%")&"】"),
    gpm_msg, IF(real_gpm<'00_Global Parameters'!$C$14, "【Project margin below target: "&TEXT(real_gpm,"0.0%")&" < "&TEXT('00_Global Parameters'!$C$14,"0.0%")&"】", "【Project margin meets target: "&TEXT(real_gpm,"0.0%")&"】"),
    accr_msg & " | " & gpm_msg
)
```

Cette formule évalue le ratio d'ajustement et la marge brute prévisionnelle globale par rapport aux seuils configurés.

##### 5. Matrice d'exceptions de dérive de marge

Cellule de départ : `A12`

```excel
=SORT(
    FILTER(
        '04_Package CVR Engine'!A5:O5000,
        ('04_Package CVR Engine'!A5:A5000<>"")*
        ('04_Package CVR Engine'!O5:O5000<>"NORMAL"),
        "All packages are currently within control thresholds"
    ),
    14,
    1
)
```

Les lots au statut de contrôle non normal sont filtrés et classés par dérive de marge.

#### Feuille 06 — Claims & Procurement Control Orders

##### 1. Liste de suivi des réclamations

Cellule de départ : `A5`

```excel
=FILTER(
    CHOOSECOLS('01_Value & Variation Register'!A5:I5000, 1, 2, 8, 9),
    ('01_Value & Variation Register'!A5:A5000<>"")*
    ('01_Value & Variation Register'!H5:H5000>='00_Global Parameters'!$C$13)*
    ('01_Value & Variation Register'!I5:I5000<>"A"),
    "No claims meet the follow-up threshold"
)
```

La liste identifie les variations atteignant le seuil de montant mais dépourvues de preuves de niveau A.

##### 2. Instruction d'action sur les preuves de réclamation

Cellule de départ : `E5`

```excel
=LET(
    pkg_codes, INDEX(A5#, 0, 1),
    IF(pkg_codes="No claims meet the follow-up threshold", "No claim follow-up required",
        "【Claim Follow-up】Commercial/QS team to complete supporting site records, signed instructions, and evidence for package "&pkg_codes&" within the current reporting cycle. Submitted variation amount: "&'00_Global Parameters'!$C$4&TEXT(INDEX(A5#, 0, 3),"#,##0.00")&". Evidence level: "&INDEX(A5#, 0, 4)&". Do not treat the full amount as confirmed revenue until entitlement and valuation are supported."
    )
)
```

##### 3. Liste de contrôle des achats en alerte rouge

Cellule de départ : `G5`

```excel
=FILTER(
    CHOOSECOLS('04_Package CVR Engine'!A5:O5000, 1, 2, 12, 14),
    ('04_Package CVR Engine'!A5:A5000<>"")*
    ('04_Package CVR Engine'!N5:N5000<='00_Global Parameters'!$C$11),
    "No package has reached the red alert threshold"
)
```

##### 4. Instruction de contrôle des achats et des paiements

Cellule de départ : `K5`

```excel
=LET(
    red_codes, INDEX(G5#, 0, 1),
    sub_name, XLOOKUP(red_codes, '01_Value & Variation Register'!A5:A5000, '01_Value & Variation Register'!C5:C5000, "Unknown Subcontractor"),
    IF(red_codes="No package has reached the red alert threshold", "Procurement and payment release remain subject to normal review",
        "【RED ALERT CONTROL】Freeze new procurement and equipment hire commitments for package "&red_codes&" (Subcontractor: "&sub_name&"). Review payment against verified valuation and approved obligations. Require a package cost review before releasing additional discretionary commitments."
    )
)
```

Le résultat du contrôle est une recommandation d'action de gestion. Ce n'est ni une détermination juridique, ni une instruction de suspension contractuelle, ni un substitut aux procédures approuvées d'achats et de paiements.

</details>

### Règles de validation

| Champ / zone | Règle | Comportement en cas d'erreur |
|---|---|---|
| Code de lot | Doit correspondre à l'identifiant de lot utilisé dans tout le classeur | Les codes non appariés peuvent ne pas s'agréger correctement |
| Nom du lot | Doit rester cohérent avec le code du lot | Des descriptions en double ou incohérentes peuvent créer des ambiguïtés |
| Revenus de référence | Valeur numérique | Les valeurs non numériques empêchent des calculs de marge corrects |
| Coût de référence | Valeur numérique | Les valeurs non numériques empêchent des calculs de marge corrects |
| Revenus certifiés | Valeur numérique avec une date de certification valide | Les dates ou valeurs invalides peuvent être exclues ou mal classées |
| Date de certification | Doit être une date Excel valide | Le calcul de coupure peut échouer si la date est stockée en texte |
| Montant de variation | Valeur numérique | Les montants au format texte peuvent provoquer des erreurs de calcul |
| Niveau de variation | A, B ou C | Des classifications invalides peuvent provoquer une attribution incorrecte du facteur de confiance |
| Date de comptabilisation financière | Date valide | Des formats de date invalides peuvent perturber les enregistrements de transactions |
| Date réelle métier | Date valide | La classification par coupure repose sur ce champ |
| Code de lot dans le grand livre des coûts | Doit correspondre à un code de lot existant | Les coûts peuvent ne pas s'agréger au lot visé |
| Date d'ajustement | Date valide | La logique de coupure peut échouer si la date est stockée en texte |
| Ajustement équipement | Valeur numérique | Les montants au format texte peuvent provoquer des erreurs de calcul |
| Ajustement main-d'œuvre | Valeur numérique | Les montants au format texte peuvent provoquer des erreurs de calcul |
| Écart d'évaluation QS | Valeur numérique | Les montants au format texte peuvent provoquer des erreurs de calcul |
| Estimation CTC | Valeur numérique | Les valeurs non numériques peuvent empêcher le calcul de l'EAC |
| Date de coupure | Date valide dans les paramètres globaux | Toutes les sorties de réconciliation fondées sur des dates dépendent de cette date |
| Symbole monétaire | Symbole texte configuré par l'utilisateur | Les formats numériques peuvent nécessiter une synchronisation manuelle |
| Zones de sortie de tableaux dynamiques | Aucune valeur saisie manuellement dans les plages de débordement | Les plages bloquées peuvent déclencher `#SPILL!` |
| Mode de calcul Excel | Calcul automatique recommandé | Le mode manuel peut laisser des sorties obsolètes |
| Facteurs de confiance de variation | Pourcentages numériques configurés | Les modifications affectent les revenus ajustés au risque |
| Seuils de dérive de marge | Pourcentages numériques configurés | Les modifications affectent les alertes de lot et les sorties d'achats |
| Seuil de réclamation | Montant numérique | Les modifications affectent le filtrage du suivi des réclamations |
| Marge cible | Pourcentage numérique | Les modifications affectent l'évaluation de santé au niveau du projet |

### Contrôle d'intégrité du classeur

La spécification d'implémentation inclut une revue de validation croisée de l'architecture et du dictionnaire de données.

| Validation | Attendu | Résultat |
|---|---:|---|
| Champs d'entrée | 26 | Entièrement mappés |
| Champs de sortie clés | 33 | Entièrement mappés |
| Références de paramètres globaux | 11 | Mappées vers des sorties de calcul ou de présentation |
| Moteur CVR des lots | 15 colonnes de sortie | Entièrement mappé |
| Tableau de bord | 5 groupes de sorties clés | Entièrement mappé |
| Feuilles d'actions | 4 groupes de sorties clés | Entièrement mappé |

La spécification de conception rapporte la validation croisée comme complète. Il s'agit d'une revue de mappage au niveau de la conception, et non d'une affirmation que chaque instance déployée du classeur a été testée de manière indépendante.

---


## Procédure d'exploitation mensuelle

### Étape 1 — mettre à jour la coupure et les paramètres

Ouvrez `00_Global Parameters`.

Mettez à jour la date de coupure mensuelle et confirmez le symbole monétaire. Revoyez les facteurs de confiance de variation et les seuils d'alerte si la politique de contrôle commercial a changé.

### Étape 2 — mettre à jour les enregistrements sources

Mettez à jour les feuilles suivantes :

- `01_Value & Variation Register` — le QS met à jour la valeur certifiée, les variations en attente et le niveau de preuve.
- `02_Booked Cost Ledger` — la finance importe les transactions de coûts pertinentes.
- `03_Site Accruals & CTC` — les équipes chantier et commerciales mettent à jour les passifs non facturés et le coût d'achèvement restant.

### Étape 3 — vérifier la classification par coupure

Vérifiez les sorties de classification par coupure dans les feuilles de coûts comptabilisés et d'ajustements.

Confirmez que les transactions postérieures à la coupure de reporting sont exclues et que les dates réelles métier reflètent la bonne période de reporting.

### Étape 4 — examiner le moteur CVR des lots

Ouvrez `04_Package CVR Engine`.

Vérifiez la liste des lots, le coût encouru, l'EAC, le bénéfice prévisionnel, la marge prévisionnelle et le statut de dérive de marge.

### Étape 5 — examiner les sorties de gestion

Ouvrez `05_Profit Reality & Margin Drift Dashboard`.

Revoyez l'écart de réconciliation, la santé des ajustements, la marge prévisionnelle au niveau du projet et le classement des exceptions.

### Étape 6 — émettre les actions de suivi

Ouvrez `06_Claims & Procurement Control Orders`.

Revoyez la liste de suivi des réclamations et la liste des achats en alerte rouge. Validez les actions proposées par rapport aux contrats, aux enregistrements de chantier, aux politiques d'achat et aux procédures d'approbation de paiement avant d'émettre des instructions formelles.

---

## Maintenance des données

### Ajouter de nouvelles transactions

Ajoutez des enregistrements dans les zones de saisie désignées des feuilles 01, 02 et 03.

Collez les valeurs dans les zones de saisie. Ne remplissez pas manuellement les colonnes de calcul.

### Ajouter un nouveau lot

Ajoutez le code et le nom du lot dans le Value & Variation Register.

Le code de lot est automatiquement intégré au moteur CVR via la liste dynamique des lots uniques.

### Modifier les seuils commerciaux

Ajustez les valeurs des paramètres globaux.

Le classeur recalcule l'ajustement des variations, la classification de dérive de marge, les sorties du tableau de bord et les listes d'actions.

---

## Exigences & limites

- **Périmètre métier :** projets de construction par lots avec évaluation d'avancement, sous-traitance, accumulation de coûts, gestion des variations et prévision du coût d'achèvement.
- **Niveau d'agrégation :** réconciliation au niveau des lots.
- **Capacité des formules :** les plages sources par défaut couvrent jusqu'à 5 000 lignes. Les administrateurs peuvent étendre les plages si nécessaire.
- **Volume de données opérationnelles recommandé :** la spécification d'implémentation recommande de maintenir les tables de transactions individuelles sous 50 000 lignes en exploitation courante, avec une extension jusqu'à 100 000 lignes selon les performances du classeur et les ajustements de formules.
- **Environnement tableur requis :** Microsoft 365, Excel 2021, Excel 2024 ou une version compatible de WPS prenant en charge les fonctions de tableaux dynamiques utilisées dans le classeur.
- **Versions non prises en charge :** Excel 2016 et Excel 2019 ou antérieurs ne sont pas pris en charge par l'implémentation des tableaux dynamiques.
- **Collaboration :** pendant la réconciliation mensuelle, évitez les modifications simultanées des zones de débordement dynamiques. Un flux de travail contrôlé à éditeur unique est recommandé pendant la clôture.
- **Jugement comptable et contractuel :** les facteurs de risque sont des hypothèses de gestion configurables. Ils ne remplacent pas la politique comptable, l'évaluation des droits contractuels, l'approbation formelle des variations ni le jugement professionnel.
- **Contrôle des achats et des paiements :** les instructions de gel ou de revue générées sont des sorties de contrôle de gestion. Les actions formelles doivent être revues par rapport aux obligations contractuelles et aux autorités internes.

### Dépannage

#### Erreurs `#SPILL!`

Un tableau dynamique peut être bloqué par du contenu existant ou des cellules fusionnées.

1. Sélectionnez la cellule affichant `#SPILL!`.
2. Identifiez la plage de débordement obstruée.
3. Effacez les cellules bloquantes ou supprimez les cellules fusionnées incompatibles.
4. Confirmez que la sortie s'étend normalement.

#### Les données de coûts ne s'agrégent pas

Vérifiez :

- Si la date de transaction est postérieure à la coupure.
- Si le code de lot correspond au registre.
- Si des montants ou des dates sont stockés en texte.
- Si le mode de calcul d'Excel est réglé sur Automatique.

#### Erreurs `#VALUE!` après import

Les exports comptables externes peuvent contenir des nombres ou des dates au format texte.

Convertissez les valeurs concernées en formats numériques/de dates et utilisez des flux de collage de valeurs uniquement lorsque c'est approprié.

#### Le symbole monétaire ne correspond pas

Modifier le paramètre de symbole monétaire ne change pas nécessairement les attributs de format numérique de chaque cellule Excel.

Si le projet change de devise, synchronisez les formats d'affichage numériques sur les colonnes monétaires concernées.

</details>

## Autres outils de cette série

Explorez d'autres outils légers de construction et de contrôle de projet dans les [dépôts GitHub Theseus Workshop / HyVoid](https://github.com/HyVoid).

- [Chiffrage de construction](https://github.com/HyVoid/construction-estimating) — Standardisez le chiffrage des devis de construction et transformez les chiffrages achevés en bibliothèques de coûts réutilisables.
- [Classeur de suivi des coûts de chiffrage AIA](https://github.com/HyVoid/aia-construction-cost-tracker-excel) — Comparez les chiffrages de construction aux coûts réels tout au long de la livraison du projet selon les formats standard AIA.
- [Excel de gestion de projet de construction](https://github.com/HyVoid/construction-project-management-excel) — Intégrez budgets, ordres de modification, facturation d'avancement et trésorerie dans un cadre unique de contrôle de projet de construction.
- [Modèle BOQ résidentiel](https://github.com/HyVoid/residential-boq-template) — Estimez les coûts de construction résidentielle à partir des avancements BOQ et des prix unitaires, tout en suivant les budgets approuvés par rapport aux dépenses réelles.
- [Moteur BOQ d'estimation de tunnels par creusement et dynamitage](https://github.com/HyVoid/tunnel-cost-estimator-boq-excel) — Estimez les excavations de tunnels par creusement et dynamitage, le forage, le dynamitage, le soutènement, l'équipement et les besoins en main-d'œuvre en un coût de projet et un BOQ complets.
- [Calculs d'arbres DIN 743](https://github.com/HyVoid/DIN-743-Shaft-Calculations) — Appliquez les normes de calcul d'arbres DIN 743 aux décisions de conception d'ingénierie.

Conçus pour soutenir le chiffrage, le suivi des coûts, la gestion de projet et la prise de décision opérationnelle sans nécessiter la mise en œuvre d'un logiciel d'entreprise complet.

## Licence

Ce projet est sous licence **Apache License 2.0**.

Voir le fichier [LICENSE](LICENSE) pour plus de détails.
