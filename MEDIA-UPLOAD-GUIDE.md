# PARFAITRANSIT — Synchronisation des médias

Le site et le script de build sont déjà configurés. Pour ajouter les photos et vidéos réelles :

1. Télécharger les 13 archives `PARFAITRANSIT_MEDIA_PACK_01.zip` à `PARFAITRANSIT_MEDIA_PACK_13.zip`.
2. Dans ce dépôt GitHub, ouvrir **Add file → Upload files**.
3. Sélectionner les 13 archives ZIP et les déposer **à la racine du dépôt** (au même niveau que `index.html` et `build.js`). Ne pas les déposer dans le dossier `media`.
4. Cliquer sur **Commit changes** sur la branche `main`.

Netlify détectera le commit et lancera le déploiement. Le script `build.js` extraira automatiquement les archives dans le dossier de publication. Le manifeste des médias est inclus dans l'archive 01.

Les archives sont volontairement séparées en petits fichiers pour faciliter l'envoi depuis un téléphone. Ne pas renommer les fichiers ZIP.
