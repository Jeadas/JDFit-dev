# JDFit Dev - Entwicklungsversion

Dies ist das **Development-Repository** für JDFit. Hier werden neue Features getestet, bevor sie in die stabile Version übernommen werden.

## ⚠️ Warnung
Diese Version kann instabil sein oder experimentelle Funktionen enthalten. Für den produktiven Einsatz im Training wird die stabile Version empfohlen.

## 🔗 Links
- **Stabile Version (JDFit)**: [https://github.com/Jeadas/JDFit](https://github.com/Jeadas/JDFit)
- **Live Test-URL (Dev)**: [https://jeadas.github.io/JDFit-dev/](https://jeadas.github.io/JDFit-dev/)

## 📱 Installation (Dev-Version)
Um die Dev-Version separat auf deinem Handy zu installieren (erkenntlich am orangefarbenen Design):
1. Öffne [https://jeadas.github.io/JDFit-dev/](https://jeadas.github.io/JDFit-dev/) im Browser.
2. Wähle **"Zum Home-Bildschirm hinzufügen"**.
3. Die App wird als **"JDFit Dev"** auf deinem Startbildschirm gespeichert.

## 🛠️ Entwicklung
Änderungen in diesem Repository werden nach erfolgreichem Test manuell in das Haupt-Repository (JDFit) überführt.

## 🧪 Testing mit Playwright

In dieser Dev-Version ist **Playwright** für End-to-End Tests integriert. Damit kannst du automatisierte Tests schreiben und ausführen.

### Vorbereitung (Lokal auf deinem PC)
1. Klone dieses Repository oder lade die neuesten Dateien herunter.
2. Installiere die Abhängigkeiten:
   ```bash
   npm install
   ```
3. Installiere die Playwright-Browser:
   ```bash
   npx playwright install
   ```

### Tests ausführen
- **Alle Tests im Terminal**:
  ```bash
  npm test
  ```
- **Tests mit UI (Interaktiv)**:
  ```bash
  npm run test:ui
  ```
- **Test-Report ansehen**:
  ```bash
  npm run test:report
  ```

Die Test-Dateien befinden sich im Ordner `tests/`. Du kannst dort eigene `.spec.js` Dateien erstellen, um neue Features zu testen.
