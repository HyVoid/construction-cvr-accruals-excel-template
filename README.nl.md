[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Maandelijkse Bouw Cost Value Reconciliation (CVR) & Accruals Excel-sjabloon — WIP-, Variatierisico- & EAC-Forecastingtool

[![Licentie: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![Platform: Microsoft Excel & Gratis Webtool](https://img.shields.io/badge/Platform-Excel%20%7C%20Web%20Tool-217346.svg)
![Sector: Bouwkostenbeheersing](https://img.shields.io/badge/Industry-Construction%20%26%20QS-orange.svg)
![Categorie: CVR, WIP & Accruals](https://img.shields.io/badge/Tool-CVR%20%26%20Accruals-2251FF.svg)

**Een kant-en-klare maandelijkse Construction Cost Value Reconciliation (CVR)- en bouwplaats-toerekeningen Excel-sjabloon, ontworpen voor projectteams, quantity surveyors (QS) en aannemers om gecertificeerde waarde, geboekte grootboekkosten, niet-gefactureerde bouwplaatsverplichtingen, betwiste wijzigingsopdrachten en Estimate at Completion (EAC)-prognoses op elkaar af te stemmen voordat factuurvertraging misleidende winstrapporten veroorzaakt.**

> **Twee manieren om dit bouwkostenbeheersingskader te gebruiken:**
>
> - **Probeer de gratis online browsertool (geen registratie, direct testen):** [Start de gratis Maandelijkse CVR- & Accruals-webcalculator](https://hyvoid.github.io/construction-cvr-accruals-excel-template/) om de afstemmingslogica op één scenario direct in je browser te testen.
> - **Download de volledige herbruikbare lokale Excel-werkmap (eenmalige aankoop · 30-dagen geld-terug-garantie zonder vragen):** [Verkrijg het volledige Maandelijkse Bouw-CVR & Accruals Excel-sjabloon op Theseus Workshop](https://theseusworkshop.com/l/cnjyy?utm_source=github&utm_medium=GitHub%20README) — voorzien van zelf-updateformules, 100% lokaal op je computer opgeslagen voor volledige privacy van financiële gegevens, zonder terugkerende SaaS-abonnementskosten.

---

## Wat deze Bouw-CVR & Accruals Excel-sjabloon bijhoudt (pijnpunt-naar-oplossing-overzicht)

Financiële maandafsluiting in de bouw overschat vaak de projectwinst omdat het verbruik op de bouwplaats sneller verloopt dan de facturatie door leveranciers. De tabel hieronder koppelt veelvoorkomende pijnpunten in bouwkostenbeheersing rechtstreeks aan wat deze werkmap berekent en aan de commerciële actie die dat oproept.

| Pijnpunt bouwkostenbeheersing | Wat deze CVR Excel-sjabloon bijhoudt & berekent | Commerciële beslisuitkomst |
|---|---|---|
| **Opgeblazen geboekte winst vs. echte prognosewinst (WIP-overwaardering)** | Stemt de grootboekwinst af tegen **gecertificeerde waarde, toegekende kosten en resterende Cost to Complete (CTC)** | Scheidt onmiddellijk echte projectmarge van kunstmatige winst door late leveranciersfacturen en optimistische omzetboekingen |
| **Ontbrekende niet-gefactureerde bouwplaatsverplichtingen (bouwaccruals-gat)** | Legt **niet-gefactureerde materieel-/apparatuurhuur, bouwplaatsarbeidsuren, materialen op locatie en onderaannemersvaluatiesverschillen** vast vóór ontvangst van de factuur | Sluit het gat tussen bouwplaatsuitgaven en crediteuren, zodat maandafsluitingskostenrapporten de werkelijke operationele verplichting weergeven |
| **Overwaardeerd wijzigingsopdracht- & variatieomzetrisico** | Past **op bewijs gebaseerde vertrouwenswegingsfactoren** toe op ingediende, betwiste en niet-goedgekeurde variatieopdrachten in plaats van 100% van de claimwaarde te erkennen | Voorkomt dat niet-overeengekomen claims de Work in Progress (WIP)-omzet kunstmatig opblazen en brengt onderbedocumenteerde claims aan het licht |
| **Verborgen marge-erosie van onderaannemingspakketten (margedrift)** | Volgt **oorspronkelijke commerciële doelmarge vs. huidige prognosemarge** voor elk afzonderlijk vak- en onderaannemingspakket | Legt verliesgevende pakketten vroeg bloot—voordat winstgevende vakken verliezen verhullen binnen projectbrede subtotalen |
| **Blinde eindkostenprojecties (Estimate at Completion / EAC)** | Consolideert **geboekte kosten tot op heden + bouwplaats-toerekeningen + resterende Cost to Complete (CTC)** tot een **EAC-prognose** op pakketniveau | Geeft leiderschap maanden vóór praktische oplevering een verdedigbare prognose van de eindwinstbaarheid van het project |
| **Losgekoppelde rapportage zonder commerciële opvolging** | Vlagt automatisch **hoogwaardige onopgeloste variaties en rood-alarm-margedrift-pakketten** in een actieregister | Zet maandelijkse kostenrapporten om in concrete commerciële opdrachten voor claimonderbouwing, inkoopstops of betalingsbeheersing |


## Spreadsheetvoorbeeld

Wil je vóór het downloaden eerst wat beter kijken? Je kunt het spreadsheet in Google Sheets bekijken om de indeling, structuur en rekenlogica te verkennen.

**[Bekijk het spreadsheetvoorbeeld op Google Sheets](https://docs.google.com/spreadsheets/d/1pfwowsXch8fIxNKtaFR8Fk72LO1sItNC/edit?usp=sharing&ouid=108770714531989318327&rtpof=true&sd=true)**

> **Opmerking over compatibiliteit:** De Google Sheets-voorbeeldweergave kan af en toe `#NAME?`-fouten of formulewaarschuwingen tonen door verschillen in formulecompatibiliteit tussen Google Sheets en Microsoft Excel. Dit zijn compatibiliteitsproblemen die alleen bij de voorbeeldweergave horen en hebben geen invloed op de functionaliteit van de oorspronkelijke Excel-werkmap. Voor het beoogde formulegedrag en de volledige functionaliteit kun je het `.xlsx`-bestand downloaden en openen in Microsoft Excel.

---

## Voor wie deze Bouw-CVR Excel-sjabloon is gebouwd: rollen & functiespecifieke gebruiksscenario's

Of je nu je eerste maandelijkse commerciële review draait of rapportage standaardiseert over meerdere actieve onderaannemingspakketten, deze werkmap koppelt specifieke sectorrollen aan kant-en-klare Excel-werkstromen:

- **Junior quantity surveyors (QS) & assistent-QS — *QS CVR Excel-sjabloon*:** Standaardiseer maandelijkse tussentijdse waarderingsafstemmingen, houd de gecertificeerde vs. aangevraagde waarden van onderaannemers bij en bouw verdedigbare CVR-pakketten zonder complexe spreadsheetformules vanaf nul te schrijven.
- **Bouwprojectmanagers (PM's) — *Bouwproject-kostenbeheersingsspreadsheet*:** Monitor Cost to Complete (CTC) op pakketniveau, niet-gefactureerde materieel-/arbeidstoerekeningen en marge-erosie in gewone taal, zonder weken te wachten op de financiële afsluiting van het hoofdkantoor.
- **Commerciële managers & kostenbeheerders — *Maandelijkse CVR- & margedrift-rapportagetool*:** Handhaaf consistente maandelijkse afsluitdata tussen financiële en bouwplaatsteams, kort hoogrisico-variatieclaims systematisch af en geef commerciële interventie op roodgevlagde pakketten prioriteit.
- **Bouwprojectaccountants & boekhouders — *Bouwaccruals- & WIP-Excel-tracker*:** Overbrug de timingmismatch tussen het geboekte crediteuren-/grootboek en de werkelijke bouwplaatsvoortgang om schonere maandelijkse toerekeningsjournaals en WIP-overzichten te produceren.
- **Hoofdaannemers & kleine tot middelgrote bouwers — *Offline Excel-alternatief voor bouw-ERP-software*:** Krijg gestructureerde kostenbeheersing op pakketniveau voor woon-, utiliteits-fit-out-, civiele-, gevel- en MEP-projecten zonder duizenden per jaar te betalen voor enterpriseplatforms zoals Procore, Coins of CMiC.
- **Inkoop- & onderaannemingsbeheerders — *Onderaannemingspakket-blootstellings- & betalingsbeheerstracker*:** Signaleer pakketten die over budget dreigen te gaan vroeg genoeg om inkoopreviews, terugbelastingcontroles en betalingscertificaatstops te activeren.

---

## Praktijksituaties in de bouw: wanneer voer je een maandelijkse CVR-, WIP- & toerekeningencheck uit

Je hebt geen enterprise-accountantsafdeling nodig om commerciële blinde vlekken tegen te komen. Deze kant-en-klare Excel-sjabloon pakt direct vier terugkerende bouwplaasscenario's aan:

1. **Directierapportage op maandafsluiting onder tijdsdruk:** Wanneer het senior management de echte projectmarge wil zien vóórdat de laatste onderaannemersfacturen binnenkomen en je binnen enkele minuten een herhaalbaar maandelijkse afstemmingspakket nodig hebt.
2. **Zware onderaanneming & multipakketprojecten (MEP, civiel, fit-out, gevel):** Wanneer 10 tot 50+ vakpakketten tegelijk draaien en één ondermaats presterende onderaanneming dreigt de totale projectwinst te wissen.
3. **Projecten met veel variaties of betwiste scope:** Wanneer openstaande wijzigingsopdrachten een groot deel van de verwachte omzet vormen en je een objectieve regel nodig hebt om onderbouwde aanspraken te scheiden van wishful thinking.
4. **Overstap van losse ad-hocspreadsheets:** Wanneer een groeiende aannemer ontgroeit aan handmatige factuurvolgsystemen en een vaste, foutbestendige maandelijkse CVR-werkstroom nodig heeft die elk teamlid direct kan bedienen.

---

## Snelle start-werkstroom: voer binnen enkele minuten een professionele maandelijkse CVR uit

Commerciële kostenafstemming en toerekeningsboekhouding lijken op papier complex, waardoor veel kleine teams het uitstellen tot de cashflow breekt. **In deze Excel-werkmap zijn alle automatische koppelingsregels, risicoweeglogica en dynamische consolidatieformules al voorgebouwd en zelf-updateformules.** Je hoeft niet eens te dubbelklikken om formules naar beneden te trekken—plak simpelweg je projectdata en lees de beslisoutputs.

### Stap 1: Test de logica gratis online of stel je maandelijkse CVR-parameters in
Begin met het verkennen van de rekenstroom in de [gratis online Bouw-CVR & Accruals-webtool](https://hyvoid.github.io/construction-cvr-accruals-excel-template/), of open `00_Global Parameters` in de lokale Excel-werkmap. Stel je maandelijkse **afsluitdatum**, valutasymbool, variatievertrouwenspercentages, margedrift-waarschuwingsdrempels, toerekeningsalarmgrenzen en claimopvolgingsdrempels in. Omdat elke aanname gecentraliseerd is, kun je commerciële risicoregels op elk moment aanpassen zonder ook maar één formule te herbouwen.

### Stap 2: Kopieer en plak je waarderings-, grootboek- & bouwplaats-toerekeningsdata
Plak je bestaande spreadsheet- of boekhoudexports rechtstreeks in de drie daarvoor bestemde invoertabbladen:
- `01_Value & Variation Register` — oorspronkelijke contractwaarden per pakket, gecertificeerde tussentijdse waarderingen en openstaande wijzigingsopdrachten/variaties met bewijsstatus.
- `02_Booked Cost Ledger` — financiële grootboek-/crediteurenkosttransacties geboekt tot de afsluitdatum.
- `03_Site Accruals & CTC` — niet-gefactureerde apparatuurhuur, bouwplaatsarbeid, onderaannemersvaluatiesverschillen en geschatte resterende Cost to Complete (CTC).

### Stap 3: Bekijk de automatische CVR, EAC & margedrift op pakketniveau
Open `04_Package CVR Engine`. De werkmap koppelt automatisch elke pakketcode over alle invoerbladen, consolideert risico-geadjusteerde omzet, geboekte kosten, bouwplaats-toerekeningen en CTC, en berekent **Estimate at Completion (EAC), prognosewinst, prognosemarge %, margedrift en pakketrisicostatus** zonder ook maar één formule handmatig te kopiëren.

### Stap 4: Signaleer winstlekken & activeer commerciële beheersacties
- Open `05_Profit Reality & Margin Drift Dashboard` om geboekte winst vs. echte prognosewinst te vergelijken en direct je slechtst presterende vakpakketten te isoleren.
- Open `06_Claims & Procurement Control Orders` om een geprioriteerde actielijst te genereren van hoogwaardige onopgeloste variaties die bewijsonderbouwing nodig hebben en van rood-alarm-pakketten die inkoop- of betalingsbeheersing vereisen.

### Stap 5: Zet een herbruikbare lokale maandwerkstroom vast (upgrade van eenmalig testen)
De gratis webtool is gebouwd voor snelle eenmalige tests. Wanneer je klaar bent om echte maandelijkse commerciële beheersing over actieve projecten te draaien zonder elke maand opnieuw te beginnen, stap dan over naar de volledige lokale Excel-werkmap:

- **In 1 minuut beslisklarheid voor beginners:** Plak één keer je ruwe bouwplaats- en grootboekdata en krijg direct analyses op directieniveau—waardoor je binnen 1 minuut winstlekken signaleert en je tijdens piekseizoenen gefocust blijft op hoogwaardige bouwuitvoering.
- **Eenvoudig, vast & lokaal herbruikbaar:** Verander een ingewikkelde maandelijkse QS-/boekhoudhoofdpijn in een herhaalbare kopieer-plak-Excel-werkstroom die rechtstreeks op je harde schijf wordt opgeslagen, voor onbeperkt veel projecten en rapportageperioden.
- **Eenmalige aankoop vs. dure SaaS-abonnementen:** Betaal één keer voor een fractie van de terugkerende maand- of jaarkosten die gangbare bouwkostenbeheersoftware in rekening brengt.
- **100% offline gegevensprivacy:** Gevoelige aannemersmarges, onderaannemerstarieven en betwiste claimwaarderingen blijven strikt op je lokale apparaat—sluit cloudbeveiligingsrisico's en gegevensblootstelling aan derden uit.
- **Risicovrije evaluatie:** Ondersteund door een **30-dagen geld-terug-garantie zonder vragen**.

> **Klaar om je maandelijkse projectkostenbeheersing te standaardiseren?**
> [Download de volledige Maandelijkse Bouw-CVR & Accruals Excel-werkmap (eenmalige aankoop · 30-dagen geld-terug-garantie)](https://theseusworkshop.com/l/cnjyy?utm_source=github&utm_medium=GitHub%20README)

---

## De bedrijfslogica & methodologie: verborgen commerciële blinde vlekken in de bouw blootleggen

Veel bouwteams—vooral niet-boekhoudkundigen en beginnende projectmanagers—ontdekken pas in de laatste twee bouwmaanden dat een project verlies draait. Dat gebeurt omdat standaard financiële rapporten **drie structurele commerciële blinde vlekken** bevatten:

1. **De factuurvertragingsillusie (blinde vlek voor niet-gefactureerde verplichtingen):** Grootboeken leggen kosten pas vast nadat facturen zijn goedgekeurd en ingevoerd. Op een actieve bouwplaats vinden materieelhuur, arbeid en onderaannemingswerk weken plaats vóórdat de rekeningen binnenkomen. Uitsluitend vertrouwen op geboekte grootboekkosten laat een verliesgevend pakket winstgevend lijken totdat late facturen de kasreserves opeten.
2. **De 100%-claimval (optimistische variatieblinde vlek):** Een wijzigingsopdracht van $100.000 indienen betekent niet dat de opdrachtgever $100.000 certificeert. Betwiste of niet-onderbouwde variaties tegen volle nominale waarde meerekenen blaast de vandaag gerapporteerde omzet op en dwingt tot plotselinge afschrijvingen bij de eindafrekening.
3. **De blinde vlek van portefeuillegemiddelden:** Alleen naar de totale projectmarge kijken verbergt falen op pakketniveau. Een marge van +15% op constructiebeton kan een uitschieter van -25% op MEP- of gevelonderaanneming verhullen totdat het werk al is geïnstalleerd en de commerciële slagkracht verdwenen is.

### Hoe deze werkmap ze oplost (commercieel beheerskader in 6 delen)

Het model dwingt een heldere commerciële regel af: **meet projectwinst met redelijk onderbouwbare omzet en de volledige kosten die nodig zijn om de hele scope af te ronden—nooit alleen de tot nu toe verwerkte facturen.**

- **Afsluitdatum-afstemming:** Dwingt omzetcertificeringen, grootboekkosten en bouwplaats-toerekeningen naar één gezamenlijke maandelijkse afsluitdatum, zodat timingmismatches de winst niet kunnen vertekenen.
- **Op bewijs gewogen variatiewaardering:** Kort openstaande wijzigingsopdrachten af op basis van hun werkelijke goedkeurings- en bewijsstatus, zodat onzekere claims de prognoseomzet niet kunnen opblazen.
- **Toerekening van bouwplaatskosten:** Haalt opgelopen maar niet-gefactureerde materieel-, arbeids- en onderaannemingsverplichtingen direct in het maandrapport, zodat financiële cijfers aansluiten op de fysieke bouwplaatsvoortgang.
- **EAC-forecasting (Estimate at Completion):** Combineert opgelopen geboekte kosten, bouwplaats-toerekeningen en resterende Cost to Complete (CTC) om de eindpakketkosten te projecteren terwijl er nog tijd is om in te grijpen.
- **Margedrift-monitoring op pakketniveau:** Legt de huidige prognosemarge van elk vakpakket naast de oorspronkelijke commerciële doelmarge en signaleert marge-erosie onmiddellijk.
- **Uitzondering-naar-actie-beheersregister:** Filtert hoogwaardige betwiste variaties en ernstige margedrift-pakketten automatisch in concrete commerciële taken—bewijsverzameling, variatieonderhandeling en inkoop-/betalingsstops.

---

## Bouwkostenbeheersing in vergelijking: traditionele grootboekrapportage vs. CVR Excel-werkstroom op pakketniveau

| Faalmodus bouwkostenbeheersing | Traditionele grootboek- & handmatige spreadsheetrapportage (hoog marge-erosierisico) | Geautomatiseerde Maandelijkse CVR & Accruals Excel-sjabloon-werkstroom |
|---|---|---|
| **Crediteurenfactuurvertraging & niet-gefactureerde bouwplaatsverplichtingen** | De maandafsluitings-P&L overschat de brutowinst omdat verbruikte materieelhuur, dagwerk-arbeid en onderaannemingswerk nog niet in de crediteurenadministratie zijn opgenomen | Niet-gefactureerde materieel-, arbeids- en onderaannemersvaluatiesverschillen worden systematisch vastgelegd als **maandelijkse bouwplaats-toerekeningen** |
| **Niet-overeengekomen wijzigingsopdrachten & betwiste variaties** | Ingediende variatieaanvragen worden tegen 100% nominale waarde geboekt, wat opgeblazen WIP-omzet en plotselinge eindafrekening-afschrijvingen oplevert | Openstaande variaties worden **risico-geadjusteerd op bewijs- en vertrouwensniveau**, waardoor herstelbare omzet vs. claimblootstelling zichtbaar wordt |
| **Niet-passende financiële & bouwplaats-afsluitdata** | Waarderingsaanvragen, onderaannemerscertificaten en grootboekboekingen vallen in verschillende perioden, wat de maandelijkse commerciële marge vertekent | Alle omzet, geboekte grootboektransacties en bouwplaats-toerekeningen worden vergrendeld op **één enkele maandelijkse afsluitdatum** |
| **Negeert de resterende Cost to Complete (CTC)** | Teams bekijken verzonken kosten tot op heden zonder te kwantificeren hoeveel geld nog nodig is om de resterende pakketscope af te ronden | **EAC op pakketniveau** combineert geboekte kosten, bouwplaats-toerekeningen en resterende CTC om de echte winst bij oplevering te prognosticeren |
| **Projecttotaal maskeert margedrift op pakketniveau** | Geconsolideerde projectwinsttotalen verhullen ernstige kostenoverschrijdingen binnen afzonderlijke MEP-, civiele of fit-out onderaannemingspakketten | Geautomatiseerde **margedrift-tracking op pakketniveau** vlagt afzonderlijke vakken die onder de oorspronkelijke aanbestedings-/doelmarges zakken |
| **Statische rapporten zonder commerciële handhaving** | Maandafsluitingskostenrapporten liggen in mappen terwijl achterstallige claims hun onderbouwing verliezen en over-budget onderaannemers gewoon betaald blijven | Hoogrisico-variatieclaims en rood-alarm-pakketten vullen automatisch de **Claims & Procurement Control Orders** |

---

## Waarom ik dit maandelijkse CVR- & kostenbeheerskader heb gebouwd

Bouwprojecten vallen zelden van de ene op de andere dag om door één slecht aanbestedingscijfer. Ze lekken stilletjes winst omdat bouwplaatsoperaties, commerciële waarderingen en financiële boekhouding op drie verschillende klokken draaien.

De financiële administratie boekt kosten pas wanneer facturen door crediteuren zijn verwerkt. Bouwplaatsteams verbruiken materieel, arbeid en onderaannemingsuren weken eerder. Commerciële teams dienen wijzigingsopdrachten in die maandenlang in onderhandeling liggen. Wanneer management deels geboekte grootboekkosten combineert met ongeverifieerde variatieclaims, toont het maandrapport een gezonde winst tot de eindafrekening instort.

Ik heb deze werkmap gebouwd om die afstemmingskloof om te zetten in een herhaalbare maandgewoonte. Door gecertificeerde omzet, risico-geadjusteerde variaties, geboekte grootboekkosten, niet-gefactureerde bouwplaats-toerekeningen en resterende Cost to Complete naast elkaar te zetten op onderaannemingspakketniveau, kunnen teams zien wanneer een "winstgevend" pakket al in verlies is weggezakt—vroeg genoeg om inkoop aan te scherpen, claims te onderbouwen en de eindmarge te beschermen zonder elke maand spreadsheets te herbouwen.

---

## Over Theseus Workshop — lichtgewicht lokale Excel-beslissingsinstrumenten

Ik bouw praktische, lokaal opgeslagen operationele trackers en financiële beslissingsondersteunende Excel-toolkits voor bouwteams, aannemers en bedrijfsvoerders die met te veel bewegende onderdelen werken.

Elke toolkit is gebouwd rond één vraag: **Welke cijfers moeten op één plek staan zodat je de volgende commerciële beslissing binnen enkele minuten vertrouwd kunt nemen?**

Zoek je meer kant-en-klare, eenmalig te kopen Excel-werkmappen voor bouwcalculatie, projectkostenbeheersing, cashflowprognoses en operationeel beheer—zonder terugkerende SaaS-kosten en met volledige offline privacy?

- **[Blader door alle bouw- & zakelijke beslissings-Excel-toolkits op Theseus Workshop (theseusworkshop.com)](https://theseusworkshop.com/)**
- **[Download de volledige Maandelijkse Bouw-CVR & Accruals Excel-werkmap](https://theseusworkshop.com/l/cnjyy?utm_source=github&utm_medium=GitHub%20README)**
- **[Bekijk de Apache 2.0-repositorylicentie](LICENSE)**


## Technische details

<details>
<summary>Voor technische reviewers, Excel-practitioners en medewerkers</summary>

### Werkmaparchitectuur

De werkmap volgt een architectuur met vier lagen:

| Laag | Blad | Verantwoordelijkheid |
|---|---|---|
| Globale beheersing | `00_Global Parameters` | Afsluitdatum, valuta, variatievertrouwensfactoren, margedrift-drempels, toerekeningswaarschuwingsdrempels, claimopvolgingsdrempel en doelmarge |
| Gegevensinvoer | `01_Value & Variation Register` | Pakketbasislijn, gecertificeerde waarde en openstaande variatiegegevens |
| Gegevensinvoer | `02_Booked Cost Ledger` | Financiële kosten-grootboekregistraties |
| Gegevensinvoer | `03_Site Accruals & CTC` | Bouwplaats-toerekeningsverplichtingen en schattingen van nog te maken kosten |
| Rekenengine | `04_Package CVR Engine` | Omzetafstemming op pakketniveau, kostenaggregatie, EAC, winst, marge, drift en status |
| Managementoutput | `05_Profit Reality & Margin Drift Dashboard` | Projectniveau-afstemming, toerekeningsgezondheid en uitzonderingsranglijst |
| Actie-output | `06_Claims & Procurement Control Orders` | Claimopvolging en rood-alarm-inkoop-/betalingsbeheersinstructies |

#### Gegevensstroom

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

#### Afstemmingslogica

De rekenengine gebruikt pakketcodes als primaire aggregatiesleutel.

Voor elk pakket consolideert het model:

1. Afsluitgeldige gecertificeerde omzet.
2. Risico-geadjusteerde openstaande variatieomzet.
3. Geboekte financiële kosten.
4. Bouwplaats-toerekeningsverplichtingen.
5. Resterende nog te maken kosten.

De resulterende EAC wordt vergeleken met de risico-geadjusteerde omzetprognose om prognosewinst en marge op pakketniveau af te leiden.

### Drie valkuilen die zelfs ervaren bouwmanagers vangen

#### Valkuil 1 — Gefactureerde kosten behandelen als de totale opgelopen kosten

**Beslissing:** Een projectmanager concludeert dat een onderaannemingspakket winstgevend blijft omdat het geboekte grootboek kosten onder het budget toont.

**De verborgen fout:** Bouwplaatsarbeid, apparatuurhuur en voltooid onderaannemingswerk hebben al plaatsgevonden, maar zijn nog niet gefactureerd of geboekt.

**Illustratie:**

| | Bedrag |
|---|---:|
| Gecertificeerde en gerapporteerde omzet | 1.000.000 |
| Geboekte kosten | 700.000 |
| Schijnbare winst | 300.000 |
| Niet-gefactureerde bouwplaats-toerekeningen | 180.000 |
| Werkelijk opgelopen kosten | 880.000 |
| Gecorrigeerde opgelopen winst | 120.000 |

De schijnbare winst is 180.000 te hoog nog voordat het resterende werk wordt meegenomen.

Het financiële grootboek is niet per se fout. Het is onvolledig voor projectprognoses.

De gecorrigeerde aanpak is om grootboekkosten af te stemmen op operationele verplichtingen op een gezamenlijke afsluitdatum. Winstbaarheid moet worden beoordeeld op basis van al opgelopen kosten, niet alleen op basis van al verwerkte facturen.

<details>
<summary>Formulereferentie — afstemming van opgelopen kosten</summary>

```excel
Booked Cost = SUMIFS(Valid_Booked_Cost, Package_Code)

Accruals = SUMIFS(Valid_Accruals, Package_Code)

Actual Incurred Cost = Booked Cost + Accruals
```

De werkmap implementeert deze aggregatie via dynamische-array-outputs en `SUMIFS`-logica op pakketniveau.

</details>

#### Valkuil 2 — Elke openstaande variatie als volledig herstelbaar behandelen

**Beslissing:** Een project rapporteert de volledige waarde van ingediende variaties als omzet.

**De verborgen fout:** De variatie kan onvolledig bewijs, onopgeloste prijzen, betwiste aanspraak of geen formele instructie hebben.

Een ingediende claim is niet gelijk aan een goedgekeurde of herstelbare waarde.

| Variatiebewijsstatus | Illustratieve vertrouwensfactor |
|---|---:|
| A — Volledig bewijs / sterke instructie | 85% |
| B — Onderhandeling of gedeeltelijk ondersteunend bewijs | 50% |
| C — Betwist of zwak bewijs | 10% |

Dit zijn configureerbare beoordelingsfactoren, geen contractuele goedkeuringskansen of boekhoudstandaarden.

Bijvoorbeeld: een ingediende variatie van 200.000, beoordeeld op niveau B, levert onder het standaardmodel 100.000 op in de risico-geadjusteerde omzetprognose.

De gecorrigeerde aanpak scheidt het ingediende bedrag van het risico-geadjusteerde bedrag. Dit maakt de onzekerheid zichtbaar en voorkomt dat een openstaande claim automatisch de prognosewinst opblaast.

<details>
<summary>Formulereferentie — variatierisico-afstemming</summary>

```excel
Risk-Adjusted Variation =
Submitted Variation Amount
* Confidence Factor
```

De vertrouwensfactor wordt toegewezen op basis van het gekozen variatiebewijsniveau.

</details>

#### Valkuil 3 — De resterende nog te maken kosten negeren

**Beslissing:** Management concludeert dat een pakket acceptabele winstbaarheid heeft omdat de tot nu toe opgelopen kosten beheerst zijn.

**De verborgen fout:** De resterende scope kan nog aanzienlijke uitgaven vereisen, en de huidige opgelopen kosten vertegenwoordigt niet de eindpakketkosten.

| | Bedrag |
|---|---:|
| Risico-geadjusteerde omzet | 1.000.000 |
| Geboekte kosten | 600.000 |
| Toerekeningen | 100.000 |
| Opgelopen kosten | 700.000 |
| Resterende CTC | 250.000 |
| Prognose-EAC | 950.000 |
| Prognosewinst | 50.000 |

Het pakket heeft 300.000 schijnbare winst wanneer alleen de geboekte kosten worden afgetrokken. Na toerekeningen en CTC is de prognosewinst slechts 50.000.

De gecorrigeerde aanpak is om de kosten van het voltooien van het hele pakket te prognosticeren. De commerciële beslissing moet gebaseerd zijn op de verwachte eindkosten, niet op de tot op heden opgehoopte kosten.

<details>
<summary>Formulereferentie — Estimate at Completion</summary>

```excel
EAC = Booked Cost + Accruals + CTC
```

</details>

### Voorbeeldscenario

Bekijk een onderaannemingspakket met de volgende commerciële positie op de maandelijkse afsluitdatum:

| Onderdeel | Bedrag |
|---|---:|
| Basislijnomzet | 1.200.000 |
| Basislijn-doelkosten | 1.050.000 |
| Gecertificeerde omzet | 850.000 |
| Openstaande variaties | 200.000 |
| Variatiebewijsniveau | B |
| Geboekte kosten | 720.000 |
| Niet-gefactureerde apparatuur en arbeid | 80.000 |
| QS-onderaannemersvaluatiesverschil | 40.000 |
| Resterende CTC | 260.000 |

#### Stap 1 — Bepaal de basislijnmarge

De oorspronkelijke doelmarge is gebaseerd op de contractwaarde en doelkosten van de basislijn.

De basislijnmarge van het pakket is 12,5%.

#### Stap 2 — Risico-adjudiceer openstaande variaties

Het openstaande variatiebedrag van 200.000 is beoordeeld op niveau B.

Onder de standaardfactor van 50% is de risico-geadjusteerde variatiewaarde 100.000.

De risico-geadjusteerde prognoseomzet is:

850.000 + 100.000 = 950.000

#### Stap 3 — Stem de opgelopen kosten af

De geboekte kosten zijn 720.000.

Bouwplaats-toerekeningen omvatten:

- Apparatuur en arbeid: 80.000
- QS-onderaannemersvaluatiesverschil: 40.000

De werkelijk opgelopen kosten zijn 840.000.

#### Stap 4 — Prognosticeer de voltooiingskosten

De resterende CTC van het pakket is 260.000.

De EAC is:

840.000 + 260.000 = 1.100.000

#### Stap 5 — Beoordeel de prognosewinstbaarheid

| Metriek | Bedrag |
|---|---:|
| Risico-geadjusteerde omzet | 950.000 |
| EAC | 1.100.000 |
| Prognosewinst | -150.000 |
| Prognosemarge | -15,8% |
| Basislijnmarge | 12,5% |
| Margedrift | -28,3 procentpunten |

Onder de huidige aannames wordt verwacht dat het pakket 150.000 verliest.

Het probleem is niet alleen dat het pakket ondermaats presteert. De combinatie van onvolledig variatieherstel en de prognose van de voltooiingskosten heeft het pakket wezenlijk onder zijn oorspronkelijke commerciële doel gebracht.

De juiste reactie is een commerciële review, opvolging van claimbewijs en een kostenbeheersinterventie, in plaats van door te gaan op de oorspronkelijke budgetmarge.

### Formulereferentie

De formules hieronder beschrijven de rekenlogica van de werkmap. Formulegroepen zijn georganiseerd per bronblad en rekenlaag.


<details>
<summary>Formulereferentie — Invoer- en rekenbladen</summary>

#### Blad 00 — Global Parameters

Het globale parameterblad bevat 11 parameters, geconfigureerd in `C4:C14`.

| Cel | Parameter | Standaard |
|---|---|---:|
| C4 | Valutasymbool | Door gebruiker gedefinieerd |
| C5 | Afsluitdatum | 2026-10-31 |
| C6 | Financiële variatieerkenningfactor | 100% |
| C7 | Niveau A-variatiefactor | 85% |
| C8 | Niveau B-variatiefactor | 50% |
| C9 | Niveau C-variatiefactor | 10% |
| C10 | Margedrift-gele drempel | -3,0% |
| C11 | Margedrift-rode drempel | -5,0% |
| C12 | Toerekeningswaarschuwingsdrempel | 15,0% |
| C13 | Claimopvolgingsbedragdrempel | 100.000 |
| C14 | Doel-brutomarge project | 12,0% |

De parameterwaarden vormen de centrale configuratiebron van de werkmap.

#### Blad 01 — Value & Variation Register

##### Afsluitgeldige gecertificeerde omzet

Begincel: `J5`

```excel
=IF(A5:A5000="", "", IF(G5:G5000<='00_Global Parameters'!$C$5, F5:F5000, 0))
```

Alleen gecertificeerde waarde die hoort bij datums op of vóór de maandelijkse afsluitdatum wordt erkend.

##### Variatievertrouwensfactor

Begincel: `K5`

```excel
=IF(A5:A5000="", "", IF(I5:I5000="A", '00_Global Parameters'!$C$7, IF(I5:I5000="B", '00_Global Parameters'!$C$8, '00_Global Parameters'!$C$9)))
```

De vertrouwensfactor wordt toegewezen op basis van het variatiebewijsniveau.

##### Risico-geadjusteerde variatiewaarde

Begincel: `L5`

```excel
=IF(A5:A5000="", "", H5:H5000 * K5#)
```

##### Financieel erkende openstaande variatie

Begincel: `M5`

```excel
=IF(A5:A5000="", "", H5:H5000 * '00_Global Parameters'!$C$6)
```

Deze kolom reproduceert de traditionele volledige-erkenningbenadering onder de geconfigureerde financiële variatiefactor. Ze dient als vergelijkingsbenchmark, niet als bewering dat aan een bepaalde boekhoudstandaard wordt voldaan.

#### Blad 02 — Booked Cost Ledger

##### Afsluitclassificatie

Begincel: `G5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, "Included", "Excluded - Future Period"))
```

##### Afsluitgeldige geboekte kosten

Begincel: `H5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, F5:F5000, 0))
```

De werkmap filtert kosten op basis van de zakelijke werkelijke datum, in plaats van uitsluitend te vertrouwen op de factuurboekingsdatum.

#### Blad 03 — Site Accruals & CTC

##### Toerekeningsafsluitclassificatie

Begincel: `H5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, "Included", "Excluded - Future Period"))
```

##### Geldige bouwplaats-toerekeningen

Begincel: `I5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, D5:D5000 + E5:E5000 + F5:F5000, 0))
```

Toerekeningen omvatten:

- Niet-gefactureerde apparatuurhuur.
- Onverrekende arbeidsuren.
- QS-goedgekeurde onderaannemersvaluatiesverschillen.

##### Geldige Cost to Complete

Begincel: `J5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, G5:G5000, 0))
```

De CTC-schatting komt uit de huidige beoordelingsregistratie die bij de afsluitdatum hoort.

#### Blad 04 — Package CVR Engine

##### 1. Unieke pakketcodes

Begincel: `A5`

```excel
=UNIQUE(TOCOL('01_Value & Variation Register'!A5:A5000, 1))
```

##### 2. Pakketnaam

Begincel: `B5`

```excel
=XLOOKUP(A5#, '01_Value & Variation Register'!A5:A5000, '01_Value & Variation Register'!B5:B5000, "")
```

##### 3. Basislijn-doelmarge

Begincel: `C5`

```excel
=LET(
    rev, SUMIFS('01_Value & Variation Register'!D5:D5000, '01_Value & Variation Register'!A5:A5000, A5#),
    cost, SUMIFS('01_Value & Variation Register'!E5:E5000, '01_Value & Variation Register'!A5:A5000, A5#),
    IF(rev=0, 0, (rev - cost) / rev)
)
```

##### 4. Financieel gerapporteerde omzet

Begincel: `D5`

```excel
=SUMIFS('01_Value & Variation Register'!J5#, '01_Value & Variation Register'!A5:A5000, A5#)
+ SUMIFS('01_Value & Variation Register'!M5#, '01_Value & Variation Register'!A5:A5000, A5#)
```

Dit reproduceert de vergelijkingsomzetmaatstaf op basis van afsluitgeldige gecertificeerde waarde en geconfigureerde financiële variatieerkenning.

##### 5. Risico-geadjusteerde CVR-omzet

Begincel: `E5`

```excel
=SUMIFS('01_Value & Variation Register'!J5#, '01_Value & Variation Register'!A5:A5000, A5#)
+ SUMIFS('01_Value & Variation Register'!L5#, '01_Value & Variation Register'!A5:A5000, A5#)
```

##### 6. Geboekte kosten

Begincel: `F5`

```excel
=SUMIFS('02_Booked Cost Ledger'!H5#, '02_Booked Cost Ledger'!D5:D5000, A5#)
```

##### 7. Toerekeningen

Begincel: `G5`

```excel
=SUMIFS('03_Site Accruals & CTC'!I5#, '03_Site Accruals & CTC'!B5:B5000, A5#)
```

##### 8. Werkelijk opgelopen kosten

Begincel: `H5`

```excel
=F5# + G5#
```

##### 9. Nog te maken kosten

Begincel: `I5`

```excel
=SUMIFS('03_Site Accruals & CTC'!J5#, '03_Site Accruals & CTC'!B5:B5000, A5#)
```

##### 10. Estimate at Completion

Begincel: `J5`

```excel
=H5# + I5#
```

##### 11. Financieel gerapporteerde winst

Begincel: `K5`

```excel
=D5# - F5#
```

Deze vergelijkingswinst is uitsluitend gebaseerd op financieel erkende omzet en geboekte kosten.

##### 12. Prognose-CVR-winst

Begincel: `L5`

```excel
=E5# - J5#
```

##### 13. Prognose-CVR-marge

Begincel: `M5`

```excel
=IF(E5#=0, 0, L5# / E5#)
```

##### 14. Margedrift

Begincel: `N5`

```excel
=M5# - C5#
```

Margedrift wordt uitgedrukt als verschil in procentpunten tussen de prognosemarge en de oorspronkelijke doelmarge.

##### 15. Pakketbeheersstatus

Begincel: `O5`

```excel
=IF(N5#<='00_Global Parameters'!$C$11, "RED ALERT - FREEZE PROCUREMENT", IF(N5#<='00_Global Parameters'!$C$10, "YELLOW ALERT - MARGIN DECLINE", "NORMAL"))
```

De pakketstatus wordt bepaald door de geconfigureerde rode en gele margedrift-drempels.

</details>

<details>
<summary>Formulereferentie — Dashboard- en actiebladen</summary>

#### Blad 05 — Profit Reality & Margin Drift Dashboard

##### 1. Totaal financieel gerapporteerde winst

Begincel: `C5`

```excel
=SUM('04_Package CVR Engine'!K5#)
```

##### 2. Totaal prognose-CVR-winst

Begincel: `C6`

```excel
=SUM('04_Package CVR Engine'!L5#)
```

##### 3. Winstaanpassingsverschil

Begincel: `C7`

```excel
=C5-C6
```

Managementsamenvattingswaarschuwing in `D7`:

```excel
="Warning: Reported profit exceeds the CVR forecast by "&'00_Global Parameters'!$C$4&TEXT(C7,"#,##0.00")&", primarily due to incomplete accruals and variation recognition assumptions."
```

##### 4. Toerekeningsgezondheid en marge-diagnostiek

Begincel: `C8`

```excel
=LET(
    accr_rate, SUM('04_Package CVR Engine'!G5#) / SUM('04_Package CVR Engine'!H5#),
    real_gpm, SUM('04_Package CVR Engine'!L5#) / SUM('04_Package CVR Engine'!E5#),
    accr_msg, IF(accr_rate>'00_Global Parameters'!$C$12, "【Accrual Warning: "&TEXT(accr_rate,"0.0%")&" exceeds threshold】", "【Accrual Health: "&TEXT(accr_rate,"0.0%")&"】"),
    gpm_msg, IF(real_gpm<'00_Global Parameters'!$C$14, "【Project margin below target: "&TEXT(real_gpm,"0.0%")&" < "&TEXT('00_Global Parameters'!$C$14,"0.0%")&"】", "【Project margin meets target: "&TEXT(real_gpm,"0.0%")&"】"),
    accr_msg & " | " & gpm_msg
)
```

Deze formule beoordeelt de toerekeningsratio en de algemene prognose-brutomarge tegen de geconfigureerde drempels.

##### 5. Margedrift-uitzonderingsmatrix

Begincel: `A12`

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

Pakketten met een niet-normale beheersstatus worden gefilterd en gerangschikt op margedrift.

#### Blad 06 — Claims & Procurement Control Orders

##### 1. Claimopvolgingslijst

Begincel: `A5`

```excel
=FILTER(
    CHOOSECOLS('01_Value & Variation Register'!A5:I5000, 1, 2, 8, 9),
    ('01_Value & Variation Register'!A5:A5000<>"")*
    ('01_Value & Variation Register'!H5:H5000>='00_Global Parameters'!$C$13)*
    ('01_Value & Variation Register'!I5:I5000<>"A"),
    "No claims meet the follow-up threshold"
)
```

De lijst identificeert variaties die aan de bedragdrempel voldoen maar geen niveau A-bewijs hebben.

##### 2. Claimbewijs-actie-instructie

Begincel: `E5`

```excel
=LET(
    pkg_codes, INDEX(A5#, 0, 1),
    IF(pkg_codes="No claims meet the follow-up threshold", "No claim follow-up required",
        "【Claim Follow-up】Commercial/QS team to complete supporting site records, signed instructions, and evidence for package "&pkg_codes&" within the current reporting cycle. Submitted variation amount: "&'00_Global Parameters'!$C$4&TEXT(INDEX(A5#, 0, 3),"#,##0.00")&". Evidence level: "&INDEX(A5#, 0, 4)&". Do not treat the full amount as confirmed revenue until entitlement and valuation are supported."
    )
)
```

##### 3. Rood-alarm-inkoopbeheerslijst

Begincel: `G5`

```excel
=FILTER(
    CHOOSECOLS('04_Package CVR Engine'!A5:O5000, 1, 2, 12, 14),
    ('04_Package CVR Engine'!A5:A5000<>"")*
    ('04_Package CVR Engine'!N5:N5000<='00_Global Parameters'!$C$11),
    "No package has reached the red alert threshold"
)
```

##### 4. Inkoop- en betalingsbeheersinstructie

Begincel: `K5`

```excel
=LET(
    red_codes, INDEX(G5#, 0, 1),
    sub_name, XLOOKUP(red_codes, '01_Value & Variation Register'!A5:A5000, '01_Value & Variation Register'!C5:C5000, "Unknown Subcontractor"),
    IF(red_codes="No package has reached the red alert threshold", "Procurement and payment release remain subject to normal review",
        "【RED ALERT CONTROL】Freeze new procurement and equipment hire commitments for package "&red_codes&" (Subcontractor: "&sub_name&"). Review payment against verified valuation and approved obligations. Require a package cost review before releasing additional discretionary commitments."
    )
)
```

De beheersoutput is een managementactie-aanbeveling. Het is geen juridische vaststelling, contractuele opschortingsinstructie of vervanging van goedgekeurde inkoop- en betalingsprocedures.

</details>

### Validatieregels

| Veld / gebied | Regel | Foutgedrag |
|---|---|---|
| Pakketcode | Moet overeenkomen met de pakketidentificator die in de hele werkmap wordt gebruikt | Niet-gekoppelde codes worden mogelijk niet correct geaggregeerd |
| Pakketnaam | Moet consistent blijven met de pakketcode | Dubbele of inconsistente omschrijvingen kunnen ambiguïteit veroorzaken |
| Basislijnomzet | Numerieke waarde | Niet-numerieke waarden verhinderen correcte margeberekeningen |
| Basislijnkosten | Numerieke waarde | Niet-numerieke waarden verhinderen correcte margeberekeningen |
| Gecertificeerde omzet | Numerieke waarde met een geldige certificeringsdatum | Ongeldige datums of waarden kunnen worden uitgesloten of verkeerd geclassificeerd |
| Certificeringsdatum | Moet een geldige Excel-datum zijn | De afsluitberekening kan mislukken als de datum als tekst is opgeslagen |
| Variatiebedrag | Numerieke waarde | Als tekst opgemaakte bedragen kunnen rekenfouten veroorzaken |
| Variatieniveau | A, B of C | Ongeldige classificaties kunnen leiden tot een verkeerde vertrouwensfactortoewijzing |
| Financiële boekingsdatum | Geldige datum | Ongeldige datumnotaties kunnen transactieregistraties verstoren |
| Zakelijke werkelijke datum | Geldige datum | De afsluitclassificatie is afhankelijk van dit veld |
| Pakketcode in het kosten-grootboek | Moet overeenkomen met een bestaande pakketcode | Kosten worden mogelijk niet bij het beoogde pakket geaggregeerd |
| Toerekeningsdatum | Geldige datum | Afsluitlogica kan mislukken als de datum als tekst is opgeslagen |
| Apparatuurtoerekening | Numerieke waarde | Als tekst opgemaakte bedragen kunnen rekenfouten veroorzaken |
| Arbeidstoerekening | Numerieke waarde | Als tekst opgemaakte bedragen kunnen rekenfouten veroorzaken |
| QS-valuatiesverschil | Numerieke waarde | Als tekst opgemaakte bedragen kunnen rekenfouten veroorzaken |
| CTC-schatting | Numerieke waarde | Niet-numerieke waarden kunnen de EAC-berekening verhinderen |
| Afsluitdatum | Geldige datum in de globale parameters | Alle datumgebaseerde afstemmingsoutputs zijn van deze datum afhankelijk |
| Valutasymbool | Tekstsymbool geconfigureerd door de gebruiker | Numerieke notaties moeten mogelijk handmatig worden gesynchroniseerd |
| Dynamische array-outputgebieden | Geen handmatig ingevoerde waarden binnen spill-bereiken | Geblokkeerde bereiken kunnen `#SPILL!` activeren |
| Excel-rekenmodus | Automatische berekening aanbevolen | Handmatige modus kan outputs verouderd laten |
| Variatievertrouwensfactoren | Geconfigureerde numerieke percentages | Wijzigingen beïnvloeden de risico-geadjusteerde omzet |
| Margedrift-drempels | Geconfigureerde numerieke percentages | Wijzigingen beïnvloeden pakketalarmen en de inkoopoutput |
| Claimdrempel | Numeriek bedrag | Wijzigingen beïnvloeden het filteren van claimopvolging |
| Doelmarge | Numeriek percentage | Wijzigingen beïnvloeden de gezondheidsbeoordeling op projectniveau |

### Werkmapintegriteitscontrole

De implementatiespecificatie omvat een kruisvalidatiereview van de architectuur en de gegevensdictionary.

| Validatie | Verwacht | Resultaat |
|---|---:|---|
| Invoervelden | 26 | Volledig in kaart gebracht |
| Kernoutputvelden | 33 | Volledig in kaart gebracht |
| Verwijzingen naar globale parameters | 11 | In kaart gebracht naar reken- of presentatieoutputs |
| Package CVR engine | 15 outputkolommen | Volledig in kaart gebracht |
| Dashboard | 5 kernoutputgroepen | Volledig in kaart gebracht |
| Actiebladen | 4 kernoutputgroepen | Volledig in kaart gebracht |

De ontwerpspecificatie meldt de kruisvalidatie als voltooid. Dit is een mapping-review op ontwerpniveau, geen bewering dat elke gedeployde werkmapinstantie onafhankelijk is getest.

---


## Maandelijkse bedrijfsprocedure

### Stap 1 — Werk de afsluitdatum en parameters bij

Open `00_Global Parameters`.

Werk de maandelijkse afsluitdatum bij en bevestig het valutasymbool. Bekijk de variatievertrouwensfactoren en alarmdrempels als het commerciële beheersbeleid is gewijzigd.

### Stap 2 — Werk de bronregistraties bij

Werk de volgende bladen bij:

- `01_Value & Variation Register` — de QS werkt gecertificeerde waarde, openstaande variaties en bewijsniveau bij.
- `02_Booked Cost Ledger` — de financiële administratie importeert de relevante kosttransacties.
- `03_Site Accruals & CTC` — de bouwplaats- en commerciële teams werken niet-gefactureerde verplichtingen en resterende voltooiingskosten bij.

### Stap 3 — Controleer de afsluitclassificatie

Controleer de afsluitclassificatie-outputs op de geboekte kosten- en toerekeningsbladen.

Bevestig dat transacties na de rapportage-afsluitdatum zijn uitgesloten en dat de zakelijke werkelijke datums de juiste rapportageperiode weerspiegelen.

### Stap 4 — Controleer de Package CVR Engine

Open `04_Package CVR Engine`.

Controleer de pakketlijst, opgelopen kosten, EAC, prognosewinst, prognosemarge en de margedrift-status.

### Stap 5 — Controleer de managementoutputs

Open `05_Profit Reality & Margin Drift Dashboard`.

Bekijk het afstemmingsverschil, de toerekeningsgezondheid, de prognosemarge op projectniveau en de uitzonderingsranglijst.

### Stap 6 — Geef opvolgacties uit

Open `06_Claims & Procurement Control Orders`.

Bekijk de claimopvolgingslijst en de rood-alarm-inkooplijst. Valideer de voorgestelde acties tegen contracten, bouwplaatsregistraties, inkoopbeleid en betalingsgoedkeuringsprocedures voordat je formele instructies uitgeeft.

---

## Gegevensonderhoud

### Nieuwe transacties toevoegen

Voeg registraties toe in de daarvoor bestemde invoergebieden van de bladen 01, 02 en 03.

Plak waarden in de invoergebieden. Vul rekenkolommen niet handmatig in.

### Een nieuw pakket toevoegen

Voeg de pakketcode en -naam toe in het Value & Variation Register.

De pakketcode wordt automatisch in de CVR-engine opgenomen via de dynamische unieke pakketlijst.

### Commerciële drempels wijzigen

Pas de waarden van de globale parameters aan.

De werkmap herberekent de variatieaanpassing, de margedrift-classificatie, de dashboard-outputs en de actielijsten.

---

## Vereisten & beperkingen

- **Zakelijke scope:** Op pakketten gebaseerde bouwprojecten met voortgangswaardering, onderaanneming, kostenaccumulatie, variatiebeheer en voltooiingskostenprognoses.
- **Aggregatieniveau:** Afstemming op pakketniveau.
- **Formulecapaciteit:** Standaard dekken bronbereiken tot 5.000 rijen. Beheerders kunnen de bereiken indien nodig uitbreiden.
- **Aanbevolen operationeel gegevensvolume:** De implementatiespecificatie raadt aan om afzonderlijke transactietabellen onder de 50.000 rijen te houden voor routinematige werking, met uitbreiding tot 100.000 rijen afhankelijk van werkmapprestaties en formuleaanpassingen.
- **Vereiste spreadsheetomgeving:** Microsoft 365, Excel 2021, Excel 2024 of een compatibele versie van WPS die de in de werkmap gebruikte dynamische-arrayfuncties ondersteunt.
- **Niet-ondersteunde versies:** Excel 2016 en Excel 2019 of ouder worden niet ondersteund door de dynamische-arrayimplementatie.
- **Samenwerking:** Vermijd tijdens de maandelijkse afstemming gelijktijdige bewerkingen van dynamische spill-gebieden. Een beheerste werkstroom met één editor wordt aanbevolen tijdens de afsluiting.
- **Boekhoudkundig en contractueel oordeel:** Risicofactoren zijn configureerbare managementaannames. Ze vervangen geen boekhoudbeleid, contractuele aanspraakbeoordeling, formele variatiegoedkeuring of professioneel oordeel.
- **Inkoop- en betalingsbeheersing:** De gegenereerde stop- of reviewinstructies zijn managementbeheersoutputs. Formele acties moeten worden getoetst aan contractuele verplichtingen en interne bevoegdheden.

### Probleemoplossing

#### `#SPILL!`-fouten

Een dynamische array kan worden geblokkeerd door bestaande inhoud of samengevoegde cellen.

1. Selecteer de cel die `#SPILL!` toont.
2. Identificeer het geblokkeerde spill-bereik.
3. Wis de blokkerende cellen of verwijder incompatibele samengevoegde cellen.
4. Bevestig dat de output normaal uitbreidt.

#### Kostendata wordt niet geaggregeerd

Controleer:

- Of de transactiedatum na de afsluitdatum valt.
- Of de pakketcode overeenkomt met het register.
- Of bedragen of datums als tekst zijn opgeslagen.
- Of de Excel-rekenmodus op Automatisch staat.

#### `#VALUE!`-fouten na import

Externe boekhoudexports kunnen als tekst opgemaakte getallen of datums bevatten.

Converteer getroffen waarden naar numerieke/datumnotaties en gebruik waar passend kopieer-plak-als-waarden-werkstromen.

#### Valutasymbool komt niet overeen

Het wijzigen van de valutasymboolparameter verandert niet noodzakelijk de getalnotatie-attributen van elke Excel-cel.

Als het project van valuta wisselt, synchroniseer dan de numerieke weergavenotaties over de relevante geldkolommen.

</details>

## Andere tools in deze serie

Bekijk andere lichtgewicht bouw- en projectbeheersingstools in de [Theseus Workshop / HyVoid GitHub-repository's](https://github.com/HyVoid).

- [Bouwcalculatie (Construction Estimating)](https://github.com/HyVoid/construction-estimating) — Standaardiseer bouwaanbestedingscalculaties en transformeer voltooide calculaties in herbruikbare kostenbibliotheken.
- [AIA Bouwcalculatie Kostentracker-werkmap](https://github.com/HyVoid/aia-construction-cost-tracker-excel) — Vergelijk bouwcalculaties gedurende de hele projectuitvoering met de werkelijke kosten, met AIA-standaardformaten.
- [Bouwprojectmanagement Excel](https://github.com/HyVoid/construction-project-management-excel) — Integreer budgetten, wijzigingsopdrachten, voortgangsfacturatie en cashflow in één bouwprojectbeheerskader.
- [Woningbouw-BOQ-sjabloon](https://github.com/HyVoid/residential-boq-template) — Calculeer woonbouwkosten vanuit BOQ-opnames en tarieven, terwijl je goedgekeurde budgetten tegen werkelijke uitgaven bewaakt.
- [Tunnel boor- en schietkostenraming BOQ-engine](https://github.com/HyVoid/tunnel-cost-estimator-boq-excel) — Ram boor- en schiettunnelgraving, boren, springen, ondersteuning, apparatuur en arbeidsvereisten tot een volledige projectkosten- en BOQ-opgave.
- [DIN 743 as-berekeningen](https://github.com/HyVoid/DIN-743-Shaft-Calculations) — Pas DIN 743 asberekeningsnormen toe op technische ontwerpbeslissingen.

Ontworpen om calculatie, kostentracking, projectmanagement en operationele besluitvorming te ondersteunen zonder een volledige enterprise-softwareimplementatie.

## Licentie

Dit project is gelicenseerd onder de **Apache License 2.0**.

Zie het [LICENSE](LICENSE)-bestand voor details.