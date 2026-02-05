# JDFit - Dein persönlicher Kraftsport-Begleiter

JDFit ist eine minimalistische, lokale Kraftsport-App, die speziell für die Nutzung im Fitnessstudio optimiert wurde. Sie funktioniert offline, speichert alle Daten sicher auf deinem Gerät und bietet einen reibungslosen Workflow für dein Training.

## ✨ Features

- **Trainingspläne verwalten**: Erstelle und bearbeite deine eigenen Pläne (z.B. Push/Pull/Legs).
- **Intelligenter Workout-Runner**: Führt dich durch dein Training mit Satz-für-Satz-Tracking.
- **Anpassbare Pausenzeiten**: 
  - Rest zwischen den Sätzen.
  - **Neu:** Individueller Override für die Pause nach der letzten Übung (Rest After).
- **PWA Support**: Installiere JDFit als echte App auf deinem Smartphone.
- **Offline-First**: Kein Internet im Gym nötig – alle Daten werden lokal gespeichert.
- **Daten-Kontrolle**: Exportiere und importiere deine Trainingsdaten als JSON, um sie zwischen PC und Handy zu synchronisieren.
- **Dark Mode**: Augenfreundliches Design für jede Umgebung.

## 📱 Installation auf dem Smartphone (PWA)

JDFit muss nicht aus einem App Store geladen werden. So installierst du es:

1. Öffne den Link [https://jeadas.github.io/JDFit/](https://jeadas.github.io/JDFit/) im Browser deines Handys.
2. **Android (Chrome)**: Tippe auf die drei Punkte (⋮) und wähle **"App installieren"** oder **"Zum Startbildschirm hinzufügen"**.
3. **iPhone (Safari)**: Tippe auf das Teilen-Icon (Quadrat mit Pfeil) und wähle **"Zum Home-Bildschirm"**.

Nun findest du JDFit als App-Icon auf deinem Startbildschirm!

## 🔄 Datensynchronisation

Da JDFit deine Daten lokal im Browser speichert, kannst du sie einfach übertragen:
1. Gehe in die **Settings** (Zahnrad).
2. Nutze **Export Data**, um eine Datei zu speichern.
3. Nutze **Import Data** auf einem anderen Gerät, um den Stand zu laden.

## 🛠️ Tech Stack

- HTML5 / CSS3 (Modern & Responsive)
- Vanilla JavaScript (Schnell & Ressourcen-schonend)
- Service Worker & Web App Manifest (PWA-Technologie)
- LocalStorage für persistente Datenspeicherung
