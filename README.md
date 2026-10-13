Ajouter une tâche : un titre (obligatoire), une description et une date d'échéance (facultatives).
Validation du titre : le bouton « Ajouter » n'est actif que si le titre contient au moins 3 caractères, espaces non comptés.
Validation de la date : une échéance ne peut pas être dans le passé. Le calendrier bloque les jours passés et le code vérifie aussi la date saisie à la main.
Lister les tâches : les tâches à faire et les tâches faites sont affichées dans deux sections séparées, avec un compteur « X à faire / Y faites ».
Cocher / décocher : une tâche cochée passe dans la section « Tâches faites », et revient dans « À faire » si on la décoche.
Modifier une tâche : le titre, la description et l'échéance peuvent être changés, avec des messages d'erreur visibles.
Supprimer une tâche.
Persistance : les tâches sont enregistrées dans le localStorage du navigateur et retrouvées après un rechargement.
Page de statistiques (/stats) : total, tâches faites, tâches à faire et pourcentage de tâches terminées (0 % si la liste est vide).
Technologies
Angular 22 (composants standalone, nouvelle syntaxe @if et @for)
TypeScript, HTML, CSS
Angular Router pour la navigation entre les pages
localStorage pour la sauvegarde des données
