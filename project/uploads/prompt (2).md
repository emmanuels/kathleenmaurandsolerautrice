# Brief — Site vitrine autrice (Kathleen Maurand Soler) — v4

## Contexte

Site vitrine personnel pour une autrice publiée chez des éditeurs (pas d'autoédition) :
- **Hatier Jeunesse** : ouvrages sur la pédagogie Montessori
- **Mango Éditions** : *Ikigaï*, livre sur la quête de sens, **qui sort dans quelques jours** (Amazon, Fnac, librairies)

Kathleen est aussi professeure d'anglais et tient le blog blogdemamank.com.

Objectif : une vitrine professionnelle qui centralise bio, bibliographie, actualités et contact. Les livres sont vendus via les éditeurs et les libraires, pas de boutique en ligne.

**Priorité n°1 : le lancement de l'Ikigaï.** Le site doit d'abord donner envie d'acheter ce livre et orienter vers les points de vente.

Point de départ : la maquette `site-autrice-v2-4.html` (fournie). On garde son identité visuelle, on améliore le design et la structure.

## Fusion avec le template « Claire Vannier » (nouveau)

Base de travail : la maquette v3 déjà produite dans Claude Design (7 écrans : accueil desktop/mobile, page livre, actualités remplie/vide, à propos, image OG). **On la garde comme socle** (palette, bulles, composants, contenu) et on y intègre ce qui plaît à Kathleen dans le template https://majestic-creponne-a51a11.netlify.app.

### À emprunter au template
- **Titres éditoriaux avec un mot en italique serif** : ex. « Écrire ce qui nous *relie.* », « Observer. *Écouter.* Écrire. ». À transposer : « Des mots qui font *grandir.* », « Trouver ce qui *nous met en mouvement.* ». Tester l'italique en Lora dans les titres Space Grotesk.
- **Signature typographique dans la nav** : nom avec le patronyme en italique, et un monogramme « KMS » (réutilisable en favicon).
- **Bibliographie numérotée** (01, 02, 03…) avec, par livre : genre + année, une citation de presse ou de lecteur mise en exergue, et une distinction ou mention (« Traduit en… », « Sélection… ») quand elle existe.
- **Couvertures typographiques générées en CSS** (nom, titre, genre) comme solution de secours tant que les vraies couvertures ne sont pas fournies.
- **Chiffres clés** en gros caractères : ex. « Depuis [année] », « [n] livres », « [n] rencontres ».
- **Interlude citation plein cadre** entre deux sections (ex. une phrase forte tirée de l'Ikigaï).
- **Section « Rencontres & ateliers »** sur le modèle de « Conférences » : formats proposés (rencontre en librairie, atelier Ikigaï, intervention Montessori pour parents/écoles) avec durée et courte description. **À confirmer avec Kathleen** : propose-t-elle ce type d'interventions ?
- **Ton du bloc contact** : phrase d'appel personnelle (« Une rencontre à imaginer ? ») et délai de réponse indicatif.

### À ne pas reprendre
- Le formulaire de contact : toujours pas en v1 (mailto uniquement).
- Le positionnement « romancière / conférencière en entreprise » : Kathleen reste autrice de transmission et de développement personnel.
- Le site d'une seule page : on conserve l'arborescence multi-pages.

### À corriger dans la maquette v3
- En mode « elle », le titre de la section À propos est vide : prévoir un titre (ex. « L'autrice »).
- Le bloc contact de la page À propos affiche une adresse Gmail personnelle au lieu de `contact@kathleenmaurandsoler.fr` : harmoniser partout.
- La page **Presse** figure dans la nav mais n'est pas dessinée : la concevoir (photo HD, bios courte/longue, communiqué, couvertures téléchargeables).
- L'entrée **Contact** de la nav doit pointer vers l'ancre du bloc contact.

### Écrans attendus pour cette itération
Accueil desktop et mobile fusionnés, page livre Ikigaï, page Presse, et la section Rencontres & ateliers (si validée). Proposer **2 variantes de hero** : l'une fidèle aux bulles actuelles, l'autre plus éditoriale inspirée du template.

## Direction visuelle (inchangée)

- **Style graphique et vivant** (préféré à une piste littéraire/contemplative)
- **Motif central** : nuage de bulles/formes rondes dans le hero, animé d'un léger flottement ascendant, chaque bulle avec sa vitesse et son décalage propres (mouvement organique, pas mécanique). Animation désactivée si `prefers-reduced-motion`.
- **Palette** : vert mousse `#4C7A56`, moutarde `#D9A441`, rose poudré `#E7B7B0`, sur fond crème `#FBF7ED`, encre `#333A45`. Piste doré / bleu ardoise avec halos écartée (trop « planètes »).
- **Typographies** : titres en Space Grotesk, texte courant en Lora
- **Structure** : bandeaux de couleur pleine, cartes à ombre portée franche, formes arrondies, bandeau sombre pour le contact

Libre à Claude Design d'affiner (hiérarchie, rythme, respiration, détails), tant que cette identité reste reconnaissable.

## Ce qui doit changer par rapport à la v2

**Mise en avant de l'Ikigaï**
- Le hero annonce le nouveau livre : badge « Nouveau », couverture, titre, date de sortie, accroche
- Boutons d'achat : Amazon, Fnac, et une option librairie indépendante (Place des Libraires ou leslibraires.fr)
- Les vraies couvertures remplacent les rectangles de couleur

**Corrections**
- Supprimer le tutoiement résiduel (« tes dédicaces »)
- Choisir une seule voix : première personne (« je ») **ou** troisième (« elle ») partout. *À confirmer avec Kathleen ; en attendant, proposer la première personne.*
- Retirer « Maquette réalisée avec Claude » du footer
- Ajouter un menu mobile (burger) : aujourd'hui la navigation disparaît sur mobile
- Mentionner dans la bio son métier de professeure d'anglais et son blog

**Contact**
- **Pas de formulaire en v1.** Un bloc contact avec l'e-mail (`contact@kathleenmaurandsoler.fr`) et le lien vers le blog, présent en bas de chaque page.

## Arborescence (multi-pages)

- `/` — Accueil : hero Ikigaï + boutons d'achat, bio courte, livres, prochaines actualités, bloc contact
- `/livres/[slug]` — une page par livre : couverture, résumé, extraits/citations, infos (éditeur, date, ISBN), où l'acheter
- `/a-propos` — bio longue, photo, parcours
- `/actualites` — dédicaces, salons, interviews ; événements passés regroupés en « Archives »
- `/presse` — photo HD, bio courte et longue, communiqué (peut arriver en v1.1)
- `/mentions-legales` — éditrice du site, hébergeur (Vercel Inc.)

Merci de concevoir : l'accueil, une page livre (sur l'Ikigaï), la page Actualités (état vide **et** état avec quelques événements), la page À propos, et le rendu mobile de l'accueil.

## Contraintes techniques (pour que le design soit directement intégrable)

Le site sera développé ensuite en **Astro**, hébergé sur **Vercel**, contenu en fichiers Markdown (une fiche par livre, une par actualité). Donc :

- Penser en **composants réutilisables** : Nav, Footer/bloc contact, Hero livre, carte livre, boutons d'achat, élément d'actualité, badge
- Tous les livres utilisent le même gabarit ; le livre « en avant » alimente le hero
- Site statique, **JavaScript minimal** (menu mobile uniquement)
- Pas de dépendances externes à l'exécution : polices auto-hébergées, pas de Google Fonts, pas de cookies ni de bandeau cookies
- Prévoir une image de partage Open Graph (1200×630) aux couleurs du site et un favicon

## Contenu

**Nom / signature** : Kathleen Maurand Soler
**Localisation** : près de Bagnols-sur-Cèze

**Bio actuelle** (à adapter selon la voix retenue et à compléter avec prof d'anglais + blog) :
> Kathleen Maurand Soler écrit sur ce qui fait grandir : la transmission, la connaissance de soi et la quête de sens. Autrice d'ouvrages autour de la pédagogie Montessori (publiés chez Hatier Jeunesse), elle partage dans son dernier livre un cheminement intime où se mêlent réflexions, expériences et propositions concrètes pour habiter sa vie avec plus de justesse.

**Bibliographie** :
1. *Ikigaï — Découvrir et cultiver ce qui donne sens à sa vie* — Mango Éditions — sortie imminente — [fiche](https://www.mangoeditions.com/contributor/12584-kathleen-maurand-soler)
2. *80 activités familiales Montessori* — Hatier Jeunesse — [fiche](https://www.editions-hatier.fr/auteur/kathleen-maurand-soler)
3. *(autres titres Hatier éventuels à compléter)*

## Éléments encore à fournir (utiliser des placeholders clairement identifiables)

- Date de sortie exacte, ISBN et couverture HD de l'Ikigaï
- Liens Amazon, Fnac et librairie indépendante
- Liste complète des livres Hatier et leurs couvertures
- Photo portrait (+ photo HD pour la presse)
- Réseaux sociaux éventuels
- Choix définitif « je » / « elle »
- Extraits ou citations de l'Ikigaï
- Citations de presse ou de lecteurs, distinctions éventuelles
- Formats d'interventions proposés (rencontres, ateliers), si elle en fait
- Chiffres clés à afficher (année de début, nombre de livres, de rencontres)
