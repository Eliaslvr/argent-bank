# Argent Bank — Application bancaire en ligne

🎯 **Ma mission**  
Développer et améliorer l’interface front-end de l’application bancaire, en intégrant React et Redux pour une expérience utilisateur dynamique et réactive. L’objectif principal est de connecter le front-end avec le back-end via des appels API et de gérer les données globales de l’application.

---

🧰 **Technologies utilisées**  

🔹 **Langages**  
- JavaScript (ES6+)  
- HTML5  
- CSS3  

🔹 **Frameworks et bibliothèques**  
- React  
- Redux  
- Node.js  
- MongoDB  

🔹 **Outils & méthodes**  
- VS Code  
- Git / GitHub  
- Swagger pour documenter l’API  

---

💡 **Le projet**  
BanqueApp est une application bancaire full-stack. Elle permet aux utilisateurs de consulter leurs informations financières, effectuer des transactions et gérer leur compte. Le front-end est développé avec React pour une interface moderne et responsive, tandis que le back-end est géré avec Node.js et MongoDB pour stocker et manipuler les données.

---

📱 **Fonctionnalités principales**  
- Interface responsive pour desktop et mobile  
- Connexion et inscription utilisateur (2 comptes test disponibles) :  

| Prénom | Nom | Email | Password |
|--------|-----|-------|----------|
| Tony   | Stark | tony@stark.com | password123 |
| Steve  | Rogers | steve@rogers.com | password456 |

- Tableau de bord complet avec transactions et informations du compte  
- Communication front-end / back-end via API REST  
- Gestion globale des données avec Redux  
- Documentation des routes API avec Swagger  

---

## ⚙️ Installation du projet

1️⃣ Ouvrir le terminal  

2️⃣ Cloner le dépôt GitHub :  
```bash
git clone https://github.com/Eliaslvr/argent-bank.git
```

3️⃣ Installer et lancer le backend :

Aller dans le dossier service :

```bash
cd service
```
Vérifier que Node.js et MongoDB sont installés :

```bash
node -v
mongo --version
```

Installer les dépendances :

```bash
npm install
```

Lancer le serveur en mode développement :

```bash
npm run dev:server
```


Remplir la base de données avec les données test :

```bash
npm run populate-db
```


4️⃣ Installer et lancer le frontend :

Aller dans le dossier web-client :

```bash
cd web-client
```


Installer les dépendances :

```bash
npm install
```

Lancer le frontend :

```bash
npm start
```

