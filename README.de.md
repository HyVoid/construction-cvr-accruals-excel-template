[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Monthly Construction Cost Value Reconciliation (CVR) & Baustellen-Accruals Excel-Vorlage — WIP-, Variationsrisiko- & EAC-Prognosetool

[![Lizenz: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![Plattform: Microsoft Excel & kostenloses Web-Tool](https://img.shields.io/badge/Platform-Excel%20%7C%20Web%20Tool-217346.svg)
![Branche: Baustellenkostenkontrolle](https://img.shields.io/badge/Industry-Construction%20%26%20QS-orange.svg)
![Kategorie: CVR, WIP & Accruals](https://img.shields.io/badge/Tool-CVR%20%26%20Accruals-2251FF.svg)

**Eine sofort einsatzbereite monatliche Excel-Vorlage für Construction Cost Value Reconciliation (CVR) und Baustellen-Accruals, entwickelt für Projektteams, Quantity Surveyors (QS) und Auftragnehmer, um zertifizierten Wert, gebuchte Ledigerkosten, nicht fakturierte Baustellen-Verbindlichkeiten, umstrittene Change Orders und Estimate-at-Completion-(EAC)-Prognosen abzugleichen, bevor Rechnungsverzögerungen irreführende Gewinnausweise erzeugen.**

> **Zwei Wege, diesen Rahmen zur Baustellenkostenkontrolle zu nutzen:**
>
> - **Kostenloses Online-Browser-Tool ausprobieren (keine Registrierung, sofortiger Test):** [Den kostenlosen monatlichen CVR- & Accruals-Webrechner starten](https://hyvoid.github.io/construction-cvr-accruals-excel-template/) und die Abstimmungslogik an einem einzelnen Szenario direkt im Browser testen.
> - **Die vollständige wiederverwendbare lokale Excel-Arbeitsmappe herunterladen (Einmalkauf · 30 Tage Geld-zurück-Garantie ohne Wenn und Aber):** [Die komplette monatliche Construction CVR & Accruals Excel-Vorlage auf Theseus Workshop erhalten](https://theseusworkshop.com/l/cnjyy?utm_source=github&utm_medium=GitHub%20README) — mit sich selbst aktualisierenden Formeln vorgebaut, zu 100% lokal auf Ihrem Computer gespeichert für vollständige finanzielle Datensicherheit und ohne wiederkehrende SaaS-Abonnementgebühren.

---

## Was diese Construction CVR- & Accruals-Excel-Vorlage erfasst (Schmerzpunkt-zu-Lösung-Übersicht)

Die Monatsabschluss-Buchhaltung im Bauwesen überschätzt häufig den Projektgewinn, weil der Baustellenverbrauch schneller fortschreitet als die Lieferantenfakturierung. Die folgende Tabelle ordnet häufige Schmerzpunkte der Baustellenkostenkontrolle direkt dem zu, was diese Arbeitsmappe berechnet, und der kaufmännischen Maßnahme, die daraus ausgelöst wird.

| Schmerzpunkt der Baustellenkostenkontrolle | Was diese CVR-Excel-Vorlage erfasst & berechnet | Ergebnis für kaufmännische Entscheidungen |
|---|---|---|
| **Aufgeblähter Buchgewinn vs. echter Prognosegewinn (WIP-Überbewertung)** | Stimmt den Buchhaltungsgewinn mit **zertifiziertem Wert, Rückstellungen (Accruals) und verbleibenden Cost to Complete (CTC)** ab | Trennt sofort die echte Projektumsatzrendite von künstlichem Gewinn durch späte Lieferantenrechnungen und optimistische Umsatzerfassung |
| **Fehlende nicht fakturierte Baustellen-Verbindlichkeiten (Accruals-Lücke im Bauwesen)** | Erfasst **nicht fakturierte Geräte-/Maschinenmiete, Baustellen-Arbeitsstunden, Material auf der Baustelle und Nachunternehmer-Abrechnungsdifferenzen** vor Rechnungseingang | Schließt die Lücke zwischen Baustellenaufwand und Verbindlichkeiten, damit Monatsabschluss-Kostenberichte die echte operative Verbindlichkeit widerspiegeln |
| **Überbewertetes Umsatzrisiko durch Change Orders & Variationen** | Wendet **evidenzbasierte Vertrauensgewichtungen** auf eingereichte, umstrittene und nicht genehmigte Variationen an, statt 100% des Anspruchswerts anzuerkennen | Verhindert, dass nicht abgestimmte Ansprüche die Work-in-Progress-(WIP)-Einnahmen künstlich aufblähen, und macht schwach dokumentierte Ansprüche sichtbar |
| **Verdeckte Gewinnschmelze bei Nachunternehmerpaketen (Margin Drift)** | Verfolgt die **ursprüngliche kaufmännische Zielmarge vs. aktuelle Prognosemarge** über jedes einzelne Gewerk und Nachunternehmerpaket | Deckt blutende Pakete frühzeitig auf — bevor profitierende Gewerke Verluste in projektweiten Gesamtsummen verbergen |
| **Blinde Endkostenprognosen (Estimate at Completion / EAC)** | Konsolidiert **gebuchte Kosten bis dato + Baustellen-Rückstellungen + verbleibende Cost to Complete (CTC)** zu einer **EAC-Prognose auf Paketebene** | Gibt der Führungsebene eine belastbare Prognose der finalen Projektrendite Monate vor der praktischen Fertigstellung |
| **Inselberichte ohne kaufmännisches Follow-up** | Markiert automatisch **hochwertige ungeklärte Variationen und Pakete mit Rot-Alarm-Margin-Drift** in einem Maßnahmenregister | Wandelt monatliche Kostenberichte in konkrete kaufmännische Anweisungen zur Anspruchsdokumentation, Beschaffungssperren oder Zahlungssteuerung um |


## Tabellenkalkulations-Vorschau

Möchten Sie vor dem Download einen genaueren Blick werfen? Sie können die Tabelle in Google Sheets als Vorschau aufrufen, um Layout, Struktur und Berechnungslogik zu erkunden.

**[Tabellenvorschau auf Google Sheets ansehen](https://docs.google.com/spreadsheets/d/1pfwowsXch8fIxNKtaFR8Fk72LO1sItNC/edit?usp=sharing&ouid=108770714531989318327&rtpof=true&sd=true)**

> **Hinweis zur Kompatibilität:** Die Google Sheets-Vorschau kann gelegentlich `#NAME?`-Fehler oder Formelwarnungen anzeigen, da Google Sheets und Microsoft Excel in der Formelkompatibilität unterschiedliche Verhaltensweisen haben. Dies sind nur die Vorschau betreffende Kompatibilitätsprobleme und beeinträchtigen nicht die Funktionalität der ursprünglichen Excel-Arbeitsmappe. Für das vorgesehene Formelverhalten und die volle Funktionalität laden Sie bitte die `.xlsx`-Datei herunter und öffnen Sie sie in Microsoft Excel.

---

## Für wen diese Construction CVR-Excel-Vorlage gebaut ist: Rollen & aufgabenbezogene Anwendungsfälle

Ob Sie Ihre erste monatliche kaufmännische Überprüfung durchführen oder Berichte über mehrere aktive Nachunternehmerpakete standardisieren möchten — diese Arbeitsmappe kombiniert konkrete Branchenrollen mit fertigen Excel-Workflows:

- **Junior Quantity Surveyors (QS) & Assistant QS — *QS CVR Excel-Vorlage*:** Standardisieren Sie monatliche Zwischenabrechnungsabstimmungen, verfolgen Sie zertifizierte vs. eingereichte Werte von Nachunternehmern und erstellen Sie belastbare CVR-Pakete, ohne komplexe Tabellenformeln von Grund auf zu schreiben.
- **Bau-Projektmanager (PMs) — *Tabellenvorlage zur Bau-Projektkostenkontrolle*:** Überwachen Sie Cost to Complete (CTC) auf Paketebene, nicht fakturierte Geräte-/Arbeitskräfte-Rückstellungen und Margenerosion in klar verständlicher Form, ohne wochenlang auf den Abschluss der Zentralbuchhaltung zu warten.
- **Kaufmännische Leiter & Kostenkontrolleure — *Monatliches CVR- & Margin-Drift-Berichtstool*:** Setzen Sie einheitliche Monatsabschluss-Stichtage in Finanz- und Baustellenteams durch, diskontieren Sie risikoreiche Variationsansprüche systematisch und priorisieren Sie kaufmännische Interventionen bei Rot-Markierungen-Paketen.
- **Bau-Projektbuchhalter & Buchhalter — *Construction Accruals & WIP Excel-Tracker*:** Überbrücken Sie die zeitliche Diskrepanz zwischen gebuchten Verbindlichkeiten/Hauptbuch und tatsächlichem Baustellenfortschritt, um sauberere Monatsabschluss-Rückstellungsbuchungen und WIP-Aufstellungen zu erzeugen.
- **Generalunternehmer & kleine bis mittelgroße Bauunternehmen — *Offline-Excel-Alternative zu Bau-ERP-Software*:** Erhalten Sie strukturierte Kostenkontrolle auf Paketebene für Wohnbau-, Gewerbeausbau-, Tiefbau-, Fassaden- und MEP-Projekte, ohne jedes Jahr Tausende für Enterprise-Plattformen wie Procore, Coins oder CMiC zu zahlen.
- **Beschaffungs- & Nachunternehmerverwaltung — *Nachunternehmerpaket-Expositions- & Zahlungssteuerungs-Tracker*:** Erkennen Sie Pakete mit Budgetüberschreitungstendenz früh genug, um Beschaffungsprüfungen, Rückbelastungs-Checks und Zahlungszertifikat-Sperren auszulösen.

---

## Praxisnahe Bau-Szenarien: Wann Sie eine monatliche CVR-, WIP- & Accruals-Prüfung durchführen

Sie brauchen keine Enterprise-Buchhaltungsabteilung, um auf kaufmännische blinde Flecken zu stoßen. Diese sofort einsatzbereite Excel-Vorlage adressiert direkt vier wiederkehrende Baustellen-Szenarien:

1. **Director-Berichterstattung am Monatsende unter Zeitdruck:** Wenn die Geschäftsleitung die echte Projektrendite verlangt, bevor die finalen Nachunternehmerrechnungen eintreffen, und Sie ein wiederholbares monatliches Abstimmungspaket in Minuten benötigen.
2. **Starke Nachunternehmereinbindung & Mehrpaket-Jobs (MEP, Tiefbau, Ausbau, Fassade):** Wenn 10 bis 50+ Gewerbepakete gleichzeitig laufen und ein einzelnes leistungsschwaches Nachunternehmerpaket den Gesamtprojektgewinn zu vernichten droht.
3. **Projekte mit vielen Variationen oder umstrittenem Leistungsumfang:** Wenn ausstehende Change Orders einen großen Anteil der projizierten Einnahmen ausmachen und Sie eine objektive Regel benötigen, um belegte Ansprüche von Wunschdenken zu trennen.
4. **Weg von unverbundenen Ad-hoc-Tabellen:** Wenn ein wachsender Auftragnehmer über die manuelle Rechnungsverfolgung hinauswächst und einen festen, fehlerresistenten monatlichen CVR-Workflow benötigt, den jedes Teammitglied sofort bedienen kann.

---

## Schnellstart-Workflow: Führen Sie eine professionelle monatliche CVR in Minuten durch

Kaufmännische Kostenabstimmung und Accrual-Buchhaltung wirken auf dem Papier komplex, weshalb viele kleine Teams sie aufschieben, bis der Cashflow bricht. **In dieser Excel-Arbeitsmappe sind alle automatischen Zuordnungs-/Suchregeln, Risikogewichtungslogiken und dynamischen Konsolidierungsformeln bereits vorgebaut und aktualisieren sich selbst.** Sie müssen nicht einmal Formeln per Doppelklick nach unten ziehen — fügen Sie einfach Ihre Projektdaten ein und lesen Sie die Entscheidungsausgaben.

### Schritt 1: Die Logik kostenlos online testen oder Ihre monatlichen CVR-Parameter festlegen
Beginnen Sie damit, den Berechnungsfluss im [kostenlosen Online Construction CVR & Accruals Web-Tool](https://hyvoid.github.io/construction-cvr-accruals-excel-template/) zu erkunden, oder öffnen Sie `00_Global Parameters` in der lokalen Excel-Arbeitsmappe. Legen Sie Ihren monatlichen **Stichtag (Cut-off Date)**, das Währungssymbol, die Variation-Vertrauensprozentsätze, die Margin-Drift-Warnschwellen, die Accrual-Alarmgrenzen und die Anspruch-Follow-up-Schwellen fest. Da jede Annahme zentralisiert ist, können Sie kaufmännische Risikoregeln jederzeit anpassen, ohne eine einzige Formel neu zu bauen.

### Schritt 2: Ihre Abrechnungs-, Ledger- & Baustellen-Accrual-Daten per Kopieren-Einfügen übertragen
Fügen Sie Ihre bestehenden Tabellen- oder Buchhaltungsexporte direkt in die drei vorgesehenen Eingabe-Tabs ein:
- `01_Value & Variation Register` — ursprüngliche Vertragswerte pro Paket, zertifizierte Zwischenabrechnungen und ausstehende Change Orders/Variationen mit Evidenzstatus.
- `02_Booked Cost Ledger` — bis zum Stichtag gebuchte Finanz-/Verbindlichkeits-Kostentransaktionen.
- `03_Site Accruals & CTC` — nicht fakturierte Gerätemiete, Baustellen-Arbeitskräfte, Nachunternehmer-Abrechnungsdifferenzen und geschätzte verbleibende Cost to Complete (CTC).

### Schritt 3: Automatisierte CVR, EAC & Margin Drift auf Paketebene prüfen
Öffnen Sie `04_Package CVR Engine`. Die Arbeitsmappe ordnet automatisch jeden Paketcode über alle Eingabeblätter zu, konsolidiert risikoadjustierte Einnahmen, gebuchte Kosten, Baustellen-Rückstellungen und CTC und berechnet **Estimate at Completion (EAC), Prognosegewinn, Prognosemarge %, Margin Drift und Paket-Risikostatus** — ganz ohne manuelles Kopieren von Formeln.

### Schritt 4: Gewinnlecks aufspüren & kaufmännische Steuerungsmaßnahmen auslösen
- Öffnen Sie `05_Profit Reality & Margin Drift Dashboard`, um den Buchgewinn gegen den echten Prognosegewinn zu vergleichen und sofort Ihre leistungsschwächsten Gewerbepakete zu isolieren.
- Öffnen Sie `06_Claims & Procurement Control Orders`, um eine priorisierte Maßnahmenliste hochwertiger ungeklärter Variationen (Nachbelegdokumentation erforderlich) und Rot-Alarm-Pakete (Beschaffungs- oder Zahlungssteuerung erforderlich) zu erzeugen.

### Schritt 5: Einen wiederverwendbaren lokalen Monatsworkflow verankern (Upgrade vom Einzeltest)
Das kostenlose Web-Tool ist für schnelle Einmaltests gebaut. Wenn Sie bereit sind, echte monatliche kaufmännische Steuerung über aktive Projekte hinweg zu betreiben, ohne jeden Monat von vorne zu beginnen, wechseln Sie zur vollständigen lokalen Excel-Arbeitsmappe:

- **Klartext-Entscheidung in 1 Minute für Einsteiger:** Kopieren und fügen Sie Ihre Rohdaten von Baustelle und Ledger einmal ein, um sofort Analysen auf Führungsebene zu erhalten — sodass Sie Gewinnlecks in 1 Minute erkennen und sich in Spitzenzeiten auf die wertschöpfende Bauausführung konzentrieren können.
- **Einfach, fest & lokal wiederverwendbar:** Verwandeln Sie einen komplizierten monatlichen QS-/Buchhaltungskopfschmerz in einen wiederholbaren Kopieren-Einfügen-Excel-Workflow, der direkt auf Ihrer Festplatte für unbegrenzt viele Projekte und Berichtsperioden gespeichert wird.
- **Einmalkauf vs. teure SaaS-Abonnements:** Zahlen Sie einmal — für einen Bruchteil der wiederkehrenden monatlichen oder jährlichen Abonnementkosten, die etablierte Baukostenkontrollsoftware verlangt.
- **100% Offline-Datenschutz:** Sensible Auftragnehmer-Margen, Nachunternehmerpreise und umstrittene Anspruchsbewertungen bleiben strikt auf Ihrem lokalen Gerät — keine Cloud-Sicherheits- und keine Drittanbieter-Datenexpositionsrisiken.
- **Risikofreie Bewertung:** Absicherung durch eine **30-tägige Geld-zurück-Garantie ohne Wenn und Aber**.

> **Bereit, Ihre monatliche Projektkostenkontrolle zu standardisieren?**
> [Die vollständige monatliche Construction CVR & Accruals Excel-Arbeitsmappe herunterladen (Einmalkauf · 30 Tage Geld-zurück-Garantie)](https://theseusworkshop.com/l/cnjyy?utm_source=github&utm_medium=GitHub%20README)

---

## Geschäftslogik & Methodik: Verdeckte kaufmännische blinde Flecken im Bauwesen aufdecken

Viele Bauteams — besonders Nicht-Buchhalter und Projektmanager im ersten Projekt — erkennen erst in den letzten zwei Monaten der Bauausführung, dass ein Job Geld verliert. Das passiert, weil standardmäßige Finanzberichte **drei strukturelle kaufmännische blinde Flecken** enthalten:

1. **Die Rechnungsverzögerungs-Illusion (blinder Fleck: nicht fakturierte Verbindlichkeiten):** Buchhaltungsledger erfassen Kosten erst nach Rechnungsfreigabe und Verbuchung. Auf einer aktiven Baustelle laufen Gerätemiete, Arbeitskräfte und Nachunternehmerleistungen Wochen, bevor die Rechnungen eintreffen. Wer sich rein auf gebuchte Ledgerkosten verlässt, lässt ein Verlustpaket profitabel erscheinen — bis späte Rechnungen die liquiden Reserven auslöschen.
2. **Die 100%-Anspruchsfalle (optimistischer blinder Fleck bei Variationen):** Eine Change Order über $100,000 einzureichen bedeutet nicht, dass der Auftraggeber $100,000 zertifiziert. Umstrittene oder unbelegte Variationen zum vollen Nominalwert zu zählen bläht die heute ausgewiesenen Einnahmen auf und erzwingt plötzliche Wertkorrekturen bei der Schlussabrechnung.
3. **Der Portfolio-Durchschnitts-Blindfleck:** Nur die Gesamtprojektrendite anzusehen verdeckt Misserfolge auf Paketebene. Eine +15% Marge bei Stahlbeton kann einen -25% Ausbruch bei MEP- oder Fassadenunterleistungen verbergen, bis die Arbeiten bereits eingebaut sind und jede kaufmännische Hebelwirkung verloren ist.

### Wie diese Arbeitsmappe sie löst (6-teiliger kaufmännischer Steuerungsrahmen)

Das Modell erzwingt eine klare kaufmännische Regel: **Messen Sie den Projektgewinn anhand vernünftig belegbarer Einnahmen und der Gesamtkosten, die zur Fertigstellung des gesamten Umfangs nötig sind — niemals nur anhand der bisher verarbeiteten Rechnungen.**

- **Stichtags-Ausrichtung:** Zwingt Umsatzzertifizierungen, Ledgerkosten und Baustellen-Rückstellungen auf einen gemeinsamen monatlichen Stichtag, sodass zeitliche Verschiebungen den Gewinn nicht verzerren können.
- **Evidenzgewichtete Variation-Bewertung:** Diskontiert ausstehende Change Orders entsprechend ihrem tatsächlichen Genehmigungs- und Evidenzstatus, sodass unsichere Ansprüche die Prognoseeinnahmen nicht aufblähen.
- **Erfassung von Baustellen-Rückstellungen:** Führt entstandene, aber nicht fakturierte Geräte-, Arbeitskräfte- und Nachunternehmer-Verbindlichkeiten sofort in den Monatsbericht ein und richtet die Finanzzahlen am physischen Baustellenfortschritt aus.
- **Estimate-at-Completion-(EAC)-Prognose:** Kombiniert entstandene gebuchte Kosten, Baustellen-Rückstellungen und verbleibende Cost to Complete (CTC), um die finalen Paketkosten zu projizieren, solange noch Zeit zur Intervention bleibt.
- **Margin-Drift-Monitoring auf Paketebene:** Setzt die aktuelle Prognosemarge für jedes Gewerbepaket gegen das ursprüngliche kaufmännische Ziel, um Margenschwund sofort aufzudecken.
- **Ausnahme-zu-Maßnahme-Steuerungsregister:** Filtert hochwertige umstrittene Variationen und Pakete mit starkem Margin-Drift automatisch in konkrete kaufmännische Aufgaben — Evidenzbeschaffung, Verhandlung über Variationen sowie Beschaffungs-/Zahlungssperren.

---

## Vergleich der Baustellenkostensteuerung: Traditionelle Ledger-Berichte vs. Paketebenen-CVR-Excel-Workflow

| Fehlermodus der Baustellenkostensteuerung | Traditionelle Ledger- & manuelle Tabellenberichte (hohes Margin-Schwund-Risiko) | Automatisierter monatlicher CVR- & Accruals-Excel-Vorlagen-Workflow |
|---|---|---|
| **Rechnungsverzögerung bei Verbindlichkeiten & nicht fakturierte Baustellen-Verbindlichkeiten** | Die Monatsabschluss-GuV überschätzt den Bruttogewinn, weil verbrauchte Gerätemiete, Tagwerk-Arbeitskräfte und Nachunternehmerleistungen noch nicht in den Verbindlichkeiten erfasst sind | Nicht fakturierte Geräte, Arbeitskräfte und Nachunternehmer-Abrechnungsdifferenzen werden systematisch als **monatliche Baustellen-Rückstellungen** erfasst |
| **Nicht abgestimmte Change Orders & umstrittene Variationen** | Eingereichte Variationsanträge werden mit 100% Nominalwert gebucht, was aufgeblähte WIP-Einnahmen und plötzliche Schlussabrechnungsabschreibungen erzeugt | Ausstehende Variationen werden **nach Evidenz und Vertrauensstufe risikoadjustiert**, was realisierbare Einnahmen vs. Anspruchsrisiko offenlegt |
| **Unterschiedliche Stichtage in Finanz & Baustelle** | Abrechnungsanträge, Nachunternehmerzertifikate und Ledgerbuchungen überspannen verschiedene Perioden und verzerren die monatliche kaufmännische Marge | Alle Einnahmen, gebuchte Ledger-Transaktionen und Baustellen-Rückstellungen sind auf einen **einzigen monatlichen Stichtag** gesperrt |
| **Ignorieren der verbleibenden Cost to Complete (CTC)** | Teams betrachten versunkene Kosten bis dato, ohne die noch nötige Liquidität zur Fertigstellung des verbleibenden Paketumfangs zu quantifizieren | **EAC auf Paketebene** kombiniert gebuchte Kosten, Baustellen-Rückstellungen und verbleibende CTC zur Prognose des echten Fertigstellungsgewinns |
| **Projekt-Gesamtwerte verdecken Margenschwund auf Paketebene** | Konsolidierte Projektgewinnsummen verschleiern schwere Kostenüberschreitungen innerhalb einzelner MEP-, Tiefbau- oder Ausbau-Nachunternehmerpakete | Automatisches **Margin-Drift-Tracking auf Paketebene** markiert einzelne Gewerke, die unter ihre ursprüngliche Ausschreibungs-/Zielmarge rutschen |
| **Statische Berichte ohne kaufmännische Durchsetzung** | Monatsabschluss-Kostenberichte liegen in Ordnern, während überfällige Ansprüche ihre Belege verlieren und budgetüberschreitende Nachunternehmer weiter bezahlt werden | Hochrisiko-Variationsansprüche und Rot-Alarm-Pakete füllen automatisch die **Claims & Procurement Control Orders** |

---

## Warum ich diesen monatlichen CVR- & Kostensteuerungsrahmen gebaut habe

Bauprojekte scheitern selten über Nacht wegen einer einzelnen schlechten Ausschreibungszahl. Sie verlieren still Gewinne, weil Baustellenbetrieb, kaufmännische Abrechnungen und Finanzbuchhaltung auf drei verschiedenen Uhren laufen.

Die Finanzabteilung erfasst Kosten, wenn Rechnungen die Verbindlichkeiten passieren. Baustellenteams verbrauchen Geräte, Arbeitskräfte und Nachunternehmerstunden Wochen früher. Kaufmännische Teams reichen Change Orders ein, die monatelang in Verhandlung liegen. Wenn das Management partielle Ledgerkosten mit unverifizierten Variationsansprüchen kombiniert, zeigt der Monatsbericht solange gesunde Gewinne, bis die Schlussabrechnung zusammenbricht.

Ich habe diese Arbeitsmappe gebaut, um diese Abstimmungslücke in eine wiederholbare monatliche Gewohnheit zu verwandeln. Indem zertifizierte Einnahmen, risikoadjustierte Variationen, gebuchte Ledgerkosten, nicht fakturierte Baustellen-Rückstellungen und verbleibende Cost to Complete auf Nachunternehmerpaket-Ebene nebeneinander stehen, können Teams erkennen, wann ein „profitables" Paket bereits in den Verlust gerutscht ist — früh genug, um Beschaffung zu straffen, Ansprüche zu belegen und die Schlussmarge zu schützen, ohne jeden Monat Tabellen neu aufzubauen.

---

## Über Theseus Workshop — leichte lokale Excel-Entscheidungstoolkits

Ich baue praktische, lokal gespeicherte operative Tracker und Excel-Toolkits zur finanziellen Entscheidungsunterstützung für Bauteams, Auftragnehmer und Geschäftsleiter, die mit zu vielen beweglichen Teilen zu tun haben.

Jedes Toolkit ist um eine Frage gebaut: **Welche Zahlen müssen an einem Platz stehen, damit Sie die nächste kaufmännische Entscheidung in Minuten selbstbewusst treffen können?**

Suchen Sie weitere sofort einsatzbereite Excel-Arbeitsmappen zum Einmalkauf für Baukostenschätzung, Projektkostenkontrolle, Cashflow-Prognosen und Betriebsmanagement — ohne wiederkehrende SaaS-Gebühren und mit vollständigem Offline-Datenschutz?

- **[Alle Bau- & Geschäfts-Entscheidungs-Excel-Toolkits auf Theseus Workshop ansehen (theseusworkshop.com)](https://theseusworkshop.com/)**
- **[Die vollständige monatliche Construction CVR & Accruals Excel-Arbeitsmappe herunterladen](https://theseusworkshop.com/l/cnjyy?utm_source=github&utm_medium=GitHub%20README)**
- **[Die Apache-2.0-Repository-Lizenz ansehen](LICENSE)**


## Technische Details

<details>
<summary>Für technische Prüfer, Excel-Praktiker und Mitwirkende</summary>

### Arbeitsmappen-Architektur

Die Arbeitsmappe folgt einer vier-Schichten-Architektur:

| Schicht | Blatt | Verantwortung |
|---|---|---|
| Globale Steuerung | `00_Global Parameters` | Stichtag, Währung, Variation-Vertrauensfaktoren, Margin-Drift-Schwellen, Accrual-Warnschwellen, Anspruch-Follow-up-Schwelle und Zielmarge |
| Dateneingaben | `01_Value & Variation Register` | Paket-Basisdaten, zertifizierter Wert und ausstehende Variationsdaten |
| Dateneingaben | `02_Booked Cost Ledger` | Einträge im Finanz-Kostenledger |
| Dateneingaben | `03_Site Accruals & CTC` | Baustellen-Rückstellungs-Verbindlichkeiten und Cost-to-Complete-Schätzungen |
| Berechnungsengine | `04_Package CVR Engine` | Einnahmenabstimmung auf Paketebene, Kostenaggregation, EAC, Gewinn, Marge, Drift und Status |
| Management-Ausgabe | `05_Profit Reality & Margin Drift Dashboard` | Abstimmung auf Projektebene, Accrual-Gesundheit und Ausnahmen-Ranking |
| Maßnahmen-Ausgabe | `06_Claims & Procurement Control Orders` | Anspruch-Follow-up und Rot-Alarm-Beschaffungs-/Zahlungssteuerungsanweisungen |

#### Datenfluss

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

#### Abstimmungslogik

Die Berechnungsengine nutzt Paketcodes als primären Aggregationsschlüssel.

Für jedes Paket konsolidiert das Modell:

1. Stichtagsgültige zertifizierte Einnahmen.
2. Risikoadjustierte ausstehende Variations-Einnahmen.
3. Gebuchte Finanzkosten.
4. Baustellen-Rückstellungs-Verbindlichkeiten.
5. Verbleibende Cost to Complete.

Die resultierende EAC wird mit der risikoadjustierten Einnahmenprognose verglichen, um Prognosegewinn und Marge auf Paketebene abzuleiten.

### Drei Fallen, die selbst erfahrene Bauleiter erwischen

#### Falle 1 — Fakturierte Kosten als gesamte entstandene Kosten behandeln

**Entscheidung:** Ein Projektmanager schließt, dass ein Nachunternehmerpaket profitabel bleibt, weil der gebuchte Ledger Kosten unterhalb des Budgets zeigt.

**Der versteckte Fehler:** Baustellen-Arbeitskräfte, Gerätemiete und abgeschlossene Nachunternehmerarbeiten sind bereits erfolgt, aber noch nicht fakturiert oder verbucht worden.

**Veranschaulichung:**

| | Betrag |
|---|---:|
| Zertifizierte und ausgewiesene Einnahmen | 1,000,000 |
| Gebuchte Kosten | 700,000 |
| Scheingewinn | 300,000 |
| Nicht fakturierte Baustellen-Rückstellungen | 180,000 |
| Tatsächlich entstandene Kosten | 880,000 |
| Korrigierter entstandener Gewinn | 120,000 |

Der Scheingewinn ist um 180,000 überhöht, noch bevor das verbleibende Arbeitsvolumen berücksichtigt wird.

Der Finanzledger ist nicht zwangsläufig falsch. Er ist für Projektprognosen unvollständig.

Der korrigierte Ansatz ist, Ledgerkosten mit operativen Verbindlichkeiten zu einem gemeinsamen Stichtag abzustimmen. Profitabilität sollte anhand bereits entstandener Kosten bewertet werden, nicht nur anhand bereits verarbeiteter Rechnungen.

<details>
<summary>Formelreferenz — Abstimmung der entstandenen Kosten</summary>

```excel
Booked Cost = SUMIFS(Valid_Booked_Cost, Package_Code)

Accruals = SUMIFS(Valid_Accruals, Package_Code)

Actual Incurred Cost = Booked Cost + Accruals
```

Die Arbeitsmappe implementiert diese Aggregation durch Dynamic-Array-Ausgaben und `SUMIFS`-Logik auf Paketebene.

</details>

#### Falle 2 — Jede ausstehende Variation als vollständig realisierbar behandeln

**Entscheidung:** Ein Projekt weist den vollen Wert eingereichter Variationen als Einnahmen aus.

**Der versteckte Fehler:** Die Variation kann unvollständige Evidenz, ungeklärte Preisstellung, umstrittene Anspruchsberechtigung oder keine formale Anweisung aufweisen.

Ein eingereichter Anspruch ist nicht gleichbedeutend mit einem genehmigten oder realisierbaren Wert.

| Variation-Evidenzstatus | Veranschaulichungs-Vertrauensfaktor |
|---|---:|
| A — Vollständige Evidenz / starke Anweisung | 85% |
| B — Verhandlung oder teilweise unterstützende Evidenz | 50% |
| C — Umstritten oder schwache Evidenz | 10% |

Dies sind konfigurierbare Bewertungsfaktoren, keine vertraglichen Genehmigungswahrscheinlichkeiten oder Buchhaltungsstandards.

Zum Beispiel trägt eine eingereichte Variation von 200,000, bewertet auf Stufe B, unter dem Standardmodell 100,000 zur risikoadjustierten Einnahmenprognose bei.

Der korrigierte Ansatz trennt den eingereichten Betrag vom risikoadjustierten Betrag. Das macht die Unsicherheit sichtbar und verhindert, dass ein ausstehender Anspruch automatisch den Prognosegewinn aufbläht.

<details>
<summary>Formelreferenz — Risikoadjustierung von Variationen</summary>

```excel
Risk-Adjusted Variation =
Submitted Variation Amount
* Confidence Factor
```

Der Vertrauensfaktor wird entsprechend der gewählten Variation-Evidenzstufe zugewiesen.

</details>

#### Falle 3 — Die verbleibenden Cost to Complete ignorieren

**Entscheidung:** Das Management schließt, dass ein Paket akzeptable Profitabilität aufweist, weil die bisher entstandenen Kosten kontrolliert sind.

**Der versteckte Fehler:** Der verbleibende Umfang kann weiterhin erheblichen Aufwand erfordern, und die aktuell entstandenen Kosten stellen nicht die finalen Paketkosten dar.

| | Betrag |
|---|---:|
| Risikoadjustierte Einnahmen | 1,000,000 |
| Gebuchte Kosten | 600,000 |
| Rückstellungen (Accruals) | 100,000 |
| Entstandene Kosten | 700,000 |
| Verbleibende CTC | 250,000 |
| Prognose-EAC | 950,000 |
| Prognosegewinn | 50,000 |

Das Paket weist 300,000 Scheingewinn auf, wenn nur die gebuchten Kosten abgezogen werden. Nach Rückstellungen und CTC beträgt der Prognosegewinn nur noch 50,000.

Der korrigierte Ansatz ist, die Kosten für die Fertigstellung des gesamten Pakets zu prognostizieren. Die kaufmännische Entscheidung sollte auf der final erwarteten Kostenbasis beruhen, nicht auf den bis heute akkumulierten Kosten.

<details>
<summary>Formelreferenz — Estimate at Completion</summary>

```excel
EAC = Booked Cost + Accruals + CTC
```

</details>

### Beispielszenario

Betrachten Sie ein Nachunternehmerpaket mit folgender kaufmännischer Position zum monatlichen Stichtag:

| Posten | Betrag |
|---|---:|
| Basis-Einnahmen | 1,200,000 |
| Basis-Zielkosten | 1,050,000 |
| Zertifizierte Einnahmen | 850,000 |
| Ausstehende Variationen | 200,000 |
| Variation-Evidenzstufe | B |
| Gebuchte Kosten | 720,000 |
| Nicht fakturierte Geräte und Arbeitskräfte | 80,000 |
| QS-Nachunternehmer-Abrechnungsdifferenz | 40,000 |
| Verbleibende CTC | 260,000 |

#### Schritt 1 — Die Basismarge festlegen

Die ursprüngliche Zielmarge basiert auf dem Basiskontraktwert und den Zielkosten.

Die Basismarge des Pakets beträgt 12.5%.

#### Schritt 2 — Ausstehende Variationen risikoadjustieren

Der ausstehende Variationsbetrag von 200,000 wird auf Stufe B bewertet.

Unter dem Standardfaktor von 50% beträgt der risikoadjustierte Variationswert 100,000.

Die risikoadjustierte Prognoseeinnahme lautet:

850,000 + 100,000 = 950,000

#### Schritt 3 — Entstandene Kosten abstimmen

Die gebuchten Kosten betragen 720,000.

Die Baustellen-Rückstellungen umfassen:

- Geräte und Arbeitskräfte: 80,000
- QS-Nachunternehmer-Abrechnungsdifferenz: 40,000

Die tatsächlich entstandenen Kosten betragen 840,000.

#### Schritt 4 — Fertigstellungskosten prognostizieren

Die verbleibende CTC des Pakets beträgt 260,000.

Die EAC lautet:

840,000 + 260,000 = 1,100,000

#### Schritt 5 — Prognose-Profitabilität bewerten

| Kennzahl | Betrag |
|---|---:|
| Risikoadjustierte Einnahmen | 950,000 |
| EAC | 1,100,000 |
| Prognosegewinn | -150,000 |
| Prognosemarge | -15.8% |
| Basismarge | 12.5% |
| Margin Drift | -28.3 Prozentpunkte |

Unter den aktuellen Annahmen wird für das Paket ein Verlust von 150,000 prognostiziert.

Das Problem ist nicht nur, dass das Paket unterdurchschnittlich performt. Die Kombination aus unvollständiger Variationsrealisierung und prognostizierten Fertigstellungskosten hat das Paket deutlich unter sein ursprüngliches kaufmännisches Ziel gedrückt.

Die angemessene Antwort ist eine kaufmännische Überprüfung, ein Anspruch-Evidenz-Follow-up und eine Kostensteuerungsintervention, statt sich weiter auf die ursprüngliche Budgetmarge zu verlassen.

### Formelreferenz

Die folgenden Formeln beschreiben die Berechnungslogik der Arbeitsmappe. Formelgruppen sind nach Quellblatt und Berechnungsschicht organisiert.


<details>
<summary>Formelreferenz — Eingabe- und Berechnungsblätter</summary>

#### Blatt 00 — Global Parameters

Das globale Parameterblatt enthält 11 Parameter, konfiguriert in `C4:C14`.

| Zelle | Parameter | Standard |
|---|---|---:|
| C4 | Währungssymbol | Benutzerdefiniert |
| C5 | Stichtag (Cut-off Date) | 2026-10-31 |
| C6 | Finanzieller Variation-Anerkennungsfaktor | 100% |
| C7 | Stufe-A-Variationsfaktor | 85% |
| C8 | Stufe-B-Variationsfaktor | 50% |
| C9 | Stufe-C-Variationsfaktor | 10% |
| C10 | Margin-Drift-Gelbschwelle | -3.0% |
| C11 | Margin-Drift-Rotschwelle | -5.0% |
| C12 | Accrual-Warnschwelle | 15.0% |
| C13 | Anspruch-Follow-up-Betragsschwelle | 100,000 |
| C14 | Projekt-Zielbruttomarge | 12.0% |

Die Parameterwerte sind die zentrale Konfigurationsquelle der Arbeitsmappe.

#### Blatt 01 — Value & Variation Register

##### Stichtagsgültige zertifizierte Einnahmen

Startzelle: `J5`

```excel
=IF(A5:A5000="", "", IF(G5:G5000<='00_Global Parameters'!$C$5, F5:F5000, 0))
```

Nur zertifizierter Wert mit Datum am oder vor dem monatlichen Stichtag wird anerkannt.

##### Variation-Vertrauensfaktor

Startzelle: `K5`

```excel
=IF(A5:A5000="", "", IF(I5:I5000="A", '00_Global Parameters'!$C$7, IF(I5:I5000="B", '00_Global Parameters'!$C$8, '00_Global Parameters'!$C$9)))
```

Der Vertrauensfaktor wird entsprechend der Variation-Evidenzstufe zugewiesen.

##### Risikoadjustierter Variationswert

Startzelle: `L5`

```excel
=IF(A5:A5000="", "", H5:H5000 * K5#)
```

##### Finanziell anerkannte ausstehende Variation

Startzelle: `M5`

```excel
=IF(A5:A5000="", "", H5:H5000 * '00_Global Parameters'!$C$6)
```

Diese Spalte reproduziert die traditionelle Vollanerkennungsbehandlung unter dem konfigurierten finanziellen Variationsfaktor. Sie dient als Vergleichsbenchmark, nicht als Behauptung der Konformität mit einem bestimmten Buchhaltungsstandard.

#### Blatt 02 — Booked Cost Ledger

##### Stichtagsklassifikation

Startzelle: `G5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, "Included", "Excluded - Future Period"))
```

##### Stichtagsgültige gebuchte Kosten

Startzelle: `H5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, F5:F5000, 0))
```

Die Arbeitsmappe filtert Kosten nach dem tatsächlichen Geschäftsdatum, statt sich ausschließlich auf das Rechnungsverbuchungsdatum zu verlassen.

#### Blatt 03 — Site Accruals & CTC

##### Accrual-Stichtagsklassifikation

Startzelle: `H5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, "Included", "Excluded - Future Period"))
```

##### Gültige Baustellen-Rückstellungen

Startzelle: `I5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, D5:D5000 + E5:E5000 + F5:F5000, 0))
```

Die Rückstellungen umfassen:

- Nicht fakturierte Gerätemiete.
- Ungeregelte Arbeitsstunden.
- QS-geprüfte Nachunternehmer-Abrechnungsdifferenzen.

##### Gültige Cost to Complete

Startzelle: `J5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, G5:G5000, 0))
```

Die CTC-Schätzung stammt aus dem aktuellen Bewertungsdatensatz, der dem Stichtag zugeordnet ist.

#### Blatt 04 — Package CVR Engine

##### 1. Eindeutige Paketcodes

Startzelle: `A5`

```excel
=UNIQUE(TOCOL('01_Value & Variation Register'!A5:A5000, 1))
```

##### 2. Paketname

Startzelle: `B5`

```excel
=XLOOKUP(A5#, '01_Value & Variation Register'!A5:A5000, '01_Value & Variation Register'!B5:B5000, "")
```

##### 3. Basis-Zielmarge

Startzelle: `C5`

```excel
=LET(
    rev, SUMIFS('01_Value & Variation Register'!D5:D5000, '01_Value & Variation Register'!A5:A5000, A5#),
    cost, SUMIFS('01_Value & Variation Register'!E5:E5000, '01_Value & Variation Register'!A5:A5000, A5#),
    IF(rev=0, 0, (rev - cost) / rev)
)
```

##### 4. Finanziell ausgewiesene Einnahmen

Startzelle: `D5`

```excel
=SUMIFS('01_Value & Variation Register'!J5#, '01_Value & Variation Register'!A5:A5000, A5#)
+ SUMIFS('01_Value & Variation Register'!M5#, '01_Value & Variation Register'!A5:A5000, A5#)
```

Dies reproduziert die Vergleichseinnahmen-Messgröße basierend auf stichtagsgültigem zertifiziertem Wert und konfigurierter finanzieller Variation-Anerkennung.

##### 5. Risikoadjustierte CVR-Einnahmen

Startzelle: `E5`

```excel
=SUMIFS('01_Value & Variation Register'!J5#, '01_Value & Variation Register'!A5:A5000, A5#)
+ SUMIFS('01_Value & Variation Register'!L5#, '01_Value & Variation Register'!A5:A5000, A5#)
```

##### 6. Gebuchte Kosten

Startzelle: `F5`

```excel
=SUMIFS('02_Booked Cost Ledger'!H5#, '02_Booked Cost Ledger'!D5:D5000, A5#)
```

##### 7. Rückstellungen (Accruals)

Startzelle: `G5`

```excel
=SUMIFS('03_Site Accruals & CTC'!I5#, '03_Site Accruals & CTC'!B5:B5000, A5#)
```

##### 8. Tatsächlich entstandene Kosten

Startzelle: `H5`

```excel
=F5# + G5#
```

##### 9. Cost to Complete

Startzelle: `I5`

```excel
=SUMIFS('03_Site Accruals & CTC'!J5#, '03_Site Accruals & CTC'!B5:B5000, A5#)
```

##### 10. Estimate at Completion

Startzelle: `J5`

```excel
=H5# + I5#
```

##### 11. Finanziell ausgewiesener Gewinn

Startzelle: `K5`

```excel
=D5# - F5#
```

Dieser Vergleichsgewinn basiert nur auf finanziell anerkannten Einnahmen und gebuchten Kosten.

##### 12. Prognostizierter CVR-Gewinn

Startzelle: `L5`

```excel
=E5# - J5#
```

##### 13. Prognostizierte CVR-Marge

Startzelle: `M5`

```excel
=IF(E5#=0, 0, L5# / E5#)
```

##### 14. Margin Drift

Startzelle: `N5`

```excel
=M5# - C5#
```

Margin Drift wird als Differenz in Prozentpunkten zwischen der Prognosemarge und der ursprünglichen Zielmarge ausgedrückt.

##### 15. Paket-Steuerungsstatus

Startzelle: `O5`

```excel
=IF(N5#<='00_Global Parameters'!$C$11, "RED ALERT - FREEZE PROCUREMENT", IF(N5#<='00_Global Parameters'!$C$10, "YELLOW ALERT - MARGIN DECLINE", "NORMAL"))
```

Der Paketstatus wird durch die konfigurierten roten und gelben Margin-Drift-Schwellen gesteuert.

</details>

<details>
<summary>Formelreferenz — Dashboard- und Maßnahmenblätter</summary>

#### Blatt 05 — Profit Reality & Margin Drift Dashboard

##### 1. Gesamt finanziell ausgewiesener Gewinn

Startzelle: `C5`

```excel
=SUM('04_Package CVR Engine'!K5#)
```

##### 2. Gesamt prognostizierter CVR-Gewinn

Startzelle: `C6`

```excel
=SUM('04_Package CVR Engine'!L5#)
```

##### 3. Gewinnadjustierungsdifferenz

Startzelle: `C7`

```excel
=C5-C6
```

Zusammenfassung der Management-Warnung in `D7`:

```excel
="Warning: Reported profit exceeds the CVR forecast by "&'00_Global Parameters'!$C$4&TEXT(C7,"#,##0.00")&", primarily due to incomplete accruals and variation recognition assumptions."
```

##### 4. Accrual-Gesundheit und Margin-Diagnose

Startzelle: `C8`

```excel
=LET(
    accr_rate, SUM('04_Package CVR Engine'!G5#) / SUM('04_Package CVR Engine'!H5#),
    real_gpm, SUM('04_Package CVR Engine'!L5#) / SUM('04_Package CVR Engine'!E5#),
    accr_msg, IF(accr_rate>'00_Global Parameters'!$C$12, "【Accrual Warning: "&TEXT(accr_rate,"0.0%")&" exceeds threshold】", "【Accrual Health: "&TEXT(accr_rate,"0.0%")&"】"),
    gpm_msg, IF(real_gpm<'00_Global Parameters'!$C$14, "【Project margin below target: "&TEXT(real_gpm,"0.0%")&" < "&TEXT('00_Global Parameters'!$C$14,"0.0%")&"】", "【Project margin meets target: "&TEXT(real_gpm,"0.0%")&"】"),
    accr_msg & " | " & gpm_msg
)
```

Diese Formel bewertet die Accrual-Quote und die prognostizierte Gesamtbruttomarge gegen die konfigurierten Schwellen.

##### 5. Margin-Drift-Ausnahmematrix

Startzelle: `A12`

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

Pakete mit nicht normalem Steuerungsstatus werden gefiltert und nach Margin Drift gerankt.

#### Blatt 06 — Claims & Procurement Control Orders

##### 1. Anspruch-Follow-up-Liste

Startzelle: `A5`

```excel
=FILTER(
    CHOOSECOLS('01_Value & Variation Register'!A5:I5000, 1, 2, 8, 9),
    ('01_Value & Variation Register'!A5:A5000<>"")*
    ('01_Value & Variation Register'!H5:H5000>='00_Global Parameters'!$C$13)*
    ('01_Value & Variation Register'!I5:I5000<>"A"),
    "No claims meet the follow-up threshold"
)
```

Die Liste identifiziert Variationen, die die Betragsschwelle erfüllen, aber keine Stufe-A-Evidenz aufweisen.

##### 2. Anspruch-Evidenz-Maßnahmenanweisung

Startzelle: `E5`

```excel
=LET(
    pkg_codes, INDEX(A5#, 0, 1),
    IF(pkg_codes="No claims meet the follow-up threshold", "No claim follow-up required",
        "【Claim Follow-up】Commercial/QS team to complete supporting site records, signed instructions, and evidence for package "&pkg_codes&" within the current reporting cycle. Submitted variation amount: "&'00_Global Parameters'!$C$4&TEXT(INDEX(A5#, 0, 3),"#,##0.00")&". Evidence level: "&INDEX(A5#, 0, 4)&". Do not treat the full amount as confirmed revenue until entitlement and valuation are supported."
    )
)
```

##### 3. Rot-Alarm-Beschaffungssteuerungsliste

Startzelle: `G5`

```excel
=FILTER(
    CHOOSECOLS('04_Package CVR Engine'!A5:O5000, 1, 2, 12, 14),
    ('04_Package CVR Engine'!A5:A5000<>"")*
    ('04_Package CVR Engine'!N5:N5000<='00_Global Parameters'!$C$11),
    "No package has reached the red alert threshold"
)
```

##### 4. Beschaffungs- und Zahlungssteuerungsanweisung

Startzelle: `K5`

```excel
=LET(
    red_codes, INDEX(G5#, 0, 1),
    sub_name, XLOOKUP(red_codes, '01_Value & Variation Register'!A5:A5000, '01_Value & Variation Register'!C5:C5000, "Unknown Subcontractor"),
    IF(red_codes="No package has reached the red alert threshold", "Procurement and payment release remain subject to normal review",
        "【RED ALERT CONTROL】Freeze new procurement and equipment hire commitments for package "&red_codes&" (Subcontractor: "&sub_name&"). Review payment against verified valuation and approved obligations. Require a package cost review before releasing additional discretionary commitments."
    )
)
```

Die Steuerungsausgabe ist eine Management-Maßnahmeempfehlung. Sie ist keine rechtliche Feststellung, keine vertragliche Aussetzungsanweisung und kein Ersatz für genehmigte Beschaffungs- und Zahlungsverfahren.

</details>

### Validierungsregeln

| Feld / Bereich | Regel | Fehlerverhalten |
|---|---|---|
| Paketcode | Muss dem in der gesamten Arbeitsmappe verwendeten Paketbezeichner entsprechen | Nicht zugeordnete Codes werden ggf. nicht korrekt aggregiert |
| Paketname | Sollte konsistent zum Paketcode bleiben | Doppelte oder inkonsistente Bezeichnungen können Mehrdeutigkeiten erzeugen |
| Basis-Einnahmen | Numerischer Wert | Nicht-numerische Werte verhindern korrekte Margenberechnungen |
| Basiskosten | Numerischer Wert | Nicht-numerische Werte verhindern korrekte Margenberechnungen |
| Zertifizierte Einnahmen | Numerischer Wert mit gültigem Zertifizierungsdatum | Ungültige Daten oder Werte können ausgeschlossen oder falsch klassifiziert werden |
| Zertifizierungsdatum | Muss ein gültiges Excel-Datum sein | Die Stichtagsberechnung kann fehlschlagen, wenn es als Text gespeichert ist |
| Variationsbetrag | Numerischer Wert | Als Text formatierte Beträge können Berechnungsfehler verursachen |
| Variationsstufe | A, B oder C | Ungültige Klassifikationen können zu falscher Vertrauensfaktor-Zuweisung führen |
| Finanzverbuchungsdatum | Gültiges Datum | Ungültige Datumsformate können Transaktionseinträge stören |
| Tatsächliches Geschäftsdatum | Gültiges Datum | Die Stichtagsklassifikation basiert auf diesem Feld |
| Paketcode im Kostenledger | Muss einem existierenden Paketcode entsprechen | Kosten werden ggf. nicht dem vorgesehenen Paket zugeordnet |
| Accrual-Datum | Gültiges Datum | Die Stichtagslogik kann fehlschlagen, wenn das Datum als Text gespeichert ist |
| Geräte-Rückstellung | Numerischer Wert | Als Text formatierte Beträge können Berechnungsfehler verursachen |
| Arbeitskräfte-Rückstellung | Numerischer Wert | Als Text formatierte Beträge können Berechnungsfehler verursachen |
| QS-Abrechnungsdifferenz | Numerischer Wert | Als Text formatierte Beträge können Berechnungsfehler verursachen |
| CTC-Schätzung | Numerischer Wert | Nicht-numerische Werte können die EAC-Berechnung verhindern |
| Stichtag | Gültiges Datum in den globalen Parametern | Alle datumsbasierten Abstimmungsausgaben hängen von diesem Datum ab |
| Währungssymbol | Vom Benutzer konfiguriertes Textsymbol | Zahlenformate müssen ggf. manuell synchronisiert werden |
| Dynamic-Array-Ausgabebereiche | Keine manuell eingegebenen Werte innerhalb von Spill-Bereichen | Blockierte Bereiche können `#SPILL!` auslösen |
| Excel-Berechnungsmodus | Automatische Berechnung empfohlen | Der manuelle Modus kann veraltete Ausgaben hinterlassen |
| Variation-Vertrauensfaktoren | Konfigurierte numerische Prozentsätze | Änderungen wirken sich auf risikoadjustierte Einnahmen aus |
| Margin-Drift-Schwellen | Konfigurierte numerische Prozentsätze | Änderungen wirken sich auf Paketalarme und Beschaffungsausgaben aus |
| Anspruchsschwelle | Numerischer Betrag | Änderungen wirken sich auf die Anspruch-Follow-up-Filterung aus |
| Zielmarge | Numerischer Prozentsatz | Änderungen wirken sich auf die Gesundheitsbewertung auf Projektebene aus |

### Arbeitsmappen-Integritätsprüfung

Die Implementierungsspezifikation enthält eine Kreuzvalidierungsprüfung der Architektur und des Datenwörterbuchs.

| Validierung | Erwartet | Ergebnis |
|---|---:|---|
| Eingabefelder | 26 | Vollständig zugeordnet |
| Schlüssel-Ausgabefelder | 33 | Vollständig zugeordnet |
| Globale Parameterreferenzen | 11 | Auf Berechnungs- oder Präsentationsausgaben zugeordnet |
| Package CVR Engine | 15 Ausgabespalten | Vollständig zugeordnet |
| Dashboard | 5 wichtige Ausgabegruppen | Vollständig zugeordnet |
| Maßnahmenblätter | 4 wichtige Ausgabegruppen | Vollständig zugeordnet |

Die Designspezifikation meldet die Kreuzvalidierung als abgeschlossen. Dies ist eine Zuordnungsprüfung auf Designebene, keine Behauptung, dass jede eingesetzte Arbeitsmappen-Instanz unabhängig getestet wurde.

---


## Monatliche Betriebsprozedur

### Schritt 1 — Stichtag und Parameter aktualisieren

Öffnen Sie `00_Global Parameters`.

Aktualisieren Sie den monatlichen Stichtag und bestätigen Sie das Währungssymbol. Überprüfen Sie die Variation-Vertrauensfaktoren und Alarmschwellen, wenn sich die kaufmännische Steuerungspolitik geändert hat.

### Schritt 2 — Quelldatensätze aktualisieren

Aktualisieren Sie die folgenden Blätter:

- `01_Value & Variation Register` — der QS aktualisiert zertifizierten Wert, ausstehende Variationen und Evidenzstufe.
- `02_Booked Cost Ledger` — die Finanzabteilung importiert die relevanten Kostentransaktionen.
- `03_Site Accruals & CTC` — Baustellen- und kaufmännische Teams aktualisieren nicht fakturierte Verbindlichkeiten und verbleibende Fertigstellungskosten.

### Schritt 3 — Stichtagsklassifikation prüfen

Überprüfen Sie die Stichtagsklassifikationsausgaben im Kostenledger- und Accrual-Blatt.

Bestätigen Sie, dass Transaktionen nach dem Berichtsstichtag ausgeschlossen sind und dass die tatsächlichen Geschäftsdaten die korrekte Berichtsperiode widerspiegeln.

### Schritt 4 — Die Package CVR Engine prüfen

Öffnen Sie `04_Package CVR Engine`.

Überprüfen Sie Paketliste, entstandene Kosten, EAC, Prognosegewinn, Prognosemarge und Margin-Drift-Status.

### Schritt 5 — Management-Ausgaben prüfen

Öffnen Sie `05_Profit Reality & Margin Drift Dashboard`.

Überprüfen Sie die Abstimmungsdifferenz, die Accrual-Gesundheit, die Prognosemarge auf Projektebene und das Ausnahmen-Ranking.

### Schritt 6 — Follow-up-Maßnahmen ausgeben

Öffnen Sie `06_Claims & Procurement Control Orders`.

Überprüfen Sie die Anspruch-Follow-up-Liste und die Rot-Alarm-Beschaffungsliste. Validieren Sie die vorgeschlagenen Maßnahmen gegen Verträge, Baustellenaufzeichnungen, Beschaffungsrichtlinien und Zahlungsfreigabeverfahren, bevor formale Anweisungen ausgegeben werden.

---

## Datenpflege

### Neue Transaktionen hinzufügen

Fügen Sie Einträge in den vorgesehenen Eingabebereichen der Blätter 01, 02 und 03 hinzu.

Fügen Sie Werte per Einfügen in die Eingabebereiche ein. Füllen Sie keine Berechnungsspalten manuell aus.

### Ein neues Paket hinzufügen

Fügen Sie Paketcode und Paketname im Value & Variation Register hinzu.

Der Paketcode wird über die dynamische eindeutige Paketliste automatisch in die CVR-Engine integriert.

### Kaufmännische Schwellen ändern

Passen Sie die Werte der globalen Parameter an.

Die Arbeitsmappe berechnet die Variationsadjustierung, die Margin-Drift-Klassifikation, die Dashboard-Ausgaben und die Maßnahmenlisten neu.

---

## Anforderungen & Einschränkungen

- **Geschäftsbereich:** Paketbasierte Bauprojekte mit Fortschrittsabrechnung, Nachunternehmereinsatz, Kostenakkumulation, Variationsmanagement und Fertigstellungskostenprognose.
- **Aggregationsebene:** Abstimmung auf Paketebene.
- **Formelkapazität:** Standard-Quellbereiche decken bis zu 5,000 Zeilen ab. Administratoren können Bereiche bei Bedarf erweitern.
- **Empfohlenes operatives Datenvolumen:** Die Implementierungsspezifikation empfiehlt, einzelne Transaktionstabellen für den Routinebetrieb unter 50,000 Zeilen zu halten, mit Erweiterung auf bis zu 100,000 Zeilen je nach Arbeitsmappen-Performance und Formelanpassungen.
- **Erforderliche Tabellenumgebung:** Microsoft 365, Excel 2021, Excel 2024 oder eine kompatible WPS-Version, die die in der Arbeitsmappe verwendeten Dynamic-Array-Funktionen unterstützt.
- **Nicht unterstützte Versionen:** Excel 2016 und Excel 2019 oder früher werden von der Dynamic-Array-Implementierung nicht unterstützt.
- **Zusammenarbeit:** Vermeiden Sie während der monatlichen Abstimmung gleichzeitige Bearbeitungen dynamischer Spill-Bereiche. Ein kontrollierter Einzelbearbeiter-Workflow wird während des Abschlusses empfohlen.
- **Buchhalterisches und vertragliches Urteilsvermögen:** Risikofaktoren sind konfigurierbare Management-Annahmen. Sie ersetzen keine Buchhaltungspolitik, keine vertragliche Anspruchsprüfung, keine formale Variationsgenehmigung und kein professionelles Urteilsvermögen.
- **Beschaffungs- und Zahlungssteuerung:** Die generierten Sperren- oder Prüfungsanweisungen sind Managementsteuerungsausgaben. Formale Maßnahmen müssen gegen vertragliche Verpflichtungen und interne Befugnisse geprüft werden.

### Fehlerbehebung

#### `#SPILL!`-Fehler

Ein dynamisches Array kann durch vorhandene Inhalte oder verbundene Zellen blockiert werden.

1. Wählen Sie die Zelle aus, die `#SPILL!` anzeigt.
2. Identifizieren Sie den blockierten Spill-Bereich.
3. Löschen Sie die blockierenden Zellen oder entfernen Sie inkompatible verbundene Zellen.
4. Bestätigen Sie, dass die Ausgabe sich normal erweitert.

#### Kostendaten werden nicht aggregiert

Überprüfen Sie:

- Ob das Transaktionsdatum nach dem Stichtag liegt.
- Ob der Paketcode mit dem Register übereinstimmt.
- Ob Beträge oder Daten als Text gespeichert sind.
- Ob der Excel-Berechnungsmodus auf Automatisch eingestellt ist.

#### `#VALUE!`-Fehler nach dem Import

Externe Buchhaltungsexporte können als Text formatierte Zahlen oder Daten enthalten.

Konvertieren Sie betroffene Werte in numerische bzw. Datumsformate und verwenden Sie, wo angemessen, Werte-einfügen-Workflows.

#### Währungssymbol stimmt nicht überein

Das Ändern des Währungssymbolparameters ändert nicht zwangsläufig die Zahlenformatattribute jeder Excel-Zelle.

Wenn das Projekt die Währung wechselt, synchronisieren Sie die numerischen Anzeigeformate über die relevanten Geldspalten hinweg.

</details>

## Andere Tools dieser Serie

Entdecken Sie weitere leichte Bau- und Projektsteuerungstools in den [Theseus Workshop / HyVoid GitHub-Repositories](https://github.com/HyVoid).

- [Construction Estimating](https://github.com/HyVoid/construction-estimating) — Standardisieren Sie Bauausschreibungs-Kalkulationen und verwandeln Sie fertige Kalkulationen in wiederverwendbare Kostenbibliotheken.
- [AIA Construction Estimating Cost Tracking Workbook](https://github.com/HyVoid/aia-construction-cost-tracker-excel) — Vergleichen Sie Baukalkulationen über die gesamte Projektdauer hinweg mit den tatsächlichen Kosten, in AIA-Standardformaten.
- [Construction Project Management Excel](https://github.com/HyVoid/construction-project-management-excel) — Integrieren Sie Budgets, Change Orders, Fortschrittsfakturierung und Cashflow in einen einzigen Bauprojektsteuerungsrahmen.
- [Residential BOQ Template](https://github.com/HyVoid/residential-boq-template) — Schätzen Sie Wohnbaukosten aus BOQ-Aufmaßen und Preisen und verfolgen Sie genehmigte Budgets gegen die tatsächlichen Ausgaben.
- [Tunnel Drill and Blast Cost Estimation BOQ Engine](https://github.com/HyVoid/tunnel-cost-estimator-boq-excel) — Schätzen Sie Bohr- und Sprengvortrieb, Bohren, Sprengen, Sicherung, Geräte und Arbeitskräfte zu einem vollständigen Projektkosten- und BOQ-Set.
- [DIN 743 Shaft Calculations](https://github.com/HyVoid/DIN-743-Shaft-Calculations) — Wenden Sie die DIN-743-Wellenberechnungsstandards auf technische Designentscheidungen an.

Entwickelt zur Unterstützung von Kalkulation, Kostenverfolgung, Projektmanagement und operativen Entscheidungen — ohne dass eine vollständige Enterprise-Software-Implementierung erforderlich ist.

## Lizenz

Dieses Projekt ist unter der **Apache License 2.0** lizenziert.

Details finden Sie in der Datei [LICENSE](LICENSE).
