---
title: Berechtigungen
---

In diesem Bereich können Sie alle Funktionen konfigurieren, die etwas mit Zugriffsberechtigungen zu tun haben.

### Nutzer Berechtigungen

Hier legen Sie fest welcher Nutzer welche Rollen haben soll, damit er auf die unterschiedlichen Bereiche der Software zugreifen kann.

### Nutzer nur mit Leserechten

Sie können festlegen, dass Nutzer nur Leserechte haben sollen. Damit werden alle Aktionen, die ein Verändern von Datensätzen auslösen, verhindert.

### Nutzerregistrierung

Hier können Sie einstellen, wie sich neue Nutzer in dem System registrieren können. Standardmäßig ist hier eine Self-Service aktiv.
Möchten Sie das nicht, können Sie auch festlegen, dass neue Accounts nur durch Administratoren angelegt werden können.

#### Self-Service

Hier legen Sie fest, ob sich neue Nutzer selbständig registrieren können, oder ob sie nur durch Administratoren angelegt werden können.

##### Erlaubte Domains

Um den Zugriff für die Registrierung neuer Nutzer einzuschränken, können Sie hier festlegen mit welchen E-Mail Schemata sich neue Nutzer anmelden können.
Konkret wird überprüft, ob die **Endung** eines neuen Nutzernames (E-Mail Adresse) in der Liste der erlaubten Domains auftaucht.
Wenn die Liste leer ist, ist das Registrieren von neuen Nutzern nicht möglich.

###### Beispiele

- Tragen Sie z.B. <code>@firma.de</code> ein, damit sich max.mustermann@firma.de als neuer Nutzer registrieren kann.
- Wenn Sie z.B. nur <code>.de</code> eingeben kann sich mustermann@gmx.de und mustermann@firma.de registrieren.
- Wenn Sie z.B. <code>'max.mustermann@firma.de'</code> eintragen kann sich max.mustermann@firma.de registrieren. Es könnte sich jedoch auch minimax.mustermann@firma.de registrieren, da nur die enden überprüft werden und mini somit in diesem Fall ignoriert wird.

> Nicht sinnvoll ist hier das Hinterlegen von öffentlichen E-Mail Domains z.B. @gmail.com.

#### Externe Logins

[Weitere Informationen](/docs/account/account-externalLogin)

### Rollen

### Gruppen

Nutzer werden einer oder mehreren Gruppen zugeordnet. Gruppen erhalten eine Reihe von Berechtigungen, die den verschiedenen Berechtigungen entsprechen, die die Gruppenmitglieder benötigen, um ihre Funktion auszuführen.

<!--
The relationships between Users, Groups, and Roles, for the sake of our application, are more complex than they might first appear.

Our Users-Groups-Roles structure is actually performing a bit of an illusion. It may appear, when we are done, that Roles will “belong” to groups, and that Users, by virtue of membership in a particular group, gain access to the Roles of that Group. However, what is really going on is that, when a User is assigned to a particular group, our application is then adding that user to each Role within the Group.

This is a subtle, but important distinction.

Let’s assume we have an existing Group with two Roles assigned – “CanEditAccount” and “CanViewAccount.” Let’s further assume that there are three users in this group. Finally, let’s say we want to add another (already existing) Role to this group – “CanDeleteAccount.” What needs to happen?

1. We assign the role to the group
2. We need to add each member or the group to the new role

On the face of it, that is relatively straightforward. However, each User can belong to more than one group. Also, a Role can be assigned to more than one group. What if we want to remove a Role from a group?

1. Remove each User in the Group from the Role, except when they are also a member of another group which also has that same role
2. Remove the Role from the Group

This is a little more complicated. A similar situation arises if we wish to remove a User from a Group:

1. Remove the User from all Roles in the Group, except when the user also belongs to another Group with the same role
2. Remove the User from the Group

And so on. In order to get the predictable, intuitive behavior from our application which will be expected by the end user, there is more going on than meets the eye.
-->
