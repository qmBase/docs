---
id: general
title: Einschränkungen
---

In diesem Artikel werden die Benennungsregeln, Konventionen und Einschränkungen für qmBase-Komponenten beschrieben.
Benennungsregeln, Einschränkungen und Konventionen tragen dazu bei, eine konsistente Benutzererfahrung zu gewährleisten und Kompatibilität mit anderen Anwendungen zu gewährleisten.

## Allgemeine Hinweise

Zu den üblichen Einschränkungen gehören die Begrenzung der Zeichenlänge für Namen, das Verbot von Sonderzeichen und die Einhaltung der Eindeutigkeit von Namen innerhalb einer Objektgruppe.
Sollte es in einzelnen Apps gesonderte Einschränkungen geben, werden diese dort separat beschrieben.

### Titel

**Minimale Titellänge**: `2` Zeichen.  
Ein Titel ist Pflicht und muss mindestens 2 Zeichen haben, sonst kann er nicht gespeichert werden.

**Maximale Titellänge**: `250` Zeichen  
Längere Titel werden abgelehnt, damit sie in allen Ansichten vollständig angezeigt werden können.

### Beschreibung

**Maximale Länge der Beschreibung**: `100.000` Zeichen  
Sehr lange Texte sind möglich. Überschreitet der Text diese Grenze, kann er nicht gespeichert werden. 100.000 Zeichen entsprechen in etwa 50 DIN A4 Seiten.

### Berechtigungen

**Anzahl individueller Zugriffe pro Element**: `10`  
Das System unterstützt bis zu 10 unterschiedliche Nutzer oder Gruppen mit individuellem Zugriff pro Element. Weitere Abstufungen sind nicht möglich.

### Custom Fields und Formulare

**Maximale Felder pro benutzerdefiniertem Formular**: `128`  
Wenn mehr Felder benötigt werden, müssen Inhalte auf mehrere Formulare aufgeteilt werden.

**Maximale benutzerdefinierte Felder pro Anwendung**: `32`  
Stehen mehr Informationen an, sollten bestehende Felder optimiert oder konsolidiert werden.

### Verknüpfte Elemente

**Max. Verknüpfungen pro Element**: `100`  
Pro Element (z.B. Schulung, Maßnahme etc.) können bis zu 100 Elemente gleichzeitig verknüpft werden.

### Datei-Uploads

**Maximale Anzahl Dateien pro Upload**: `20`  
Müssen mehr Dateien hochgeladen werden, können diese in mehreren Uploads nacheinander übertragen werden.

### Datenimporte

**Maximale Anzahl Einträge pro Importvorgang**: `1.000`  
Größere Datenmengen müssen auf mehrere Importläufe verteilt werden.
