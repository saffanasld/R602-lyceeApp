# 🎓 LycéeApp - Île-de-France

LycéeApp est une application mobile développée avec **React Native** et **Expo**. Elle permet d'explorer et de visualiser les données des établissements scolaires d'Île-de-France à travers différentes statistiques et listes filtrées.

Ce projet a été réalisé dans le cadre du **TP R602 – Routage et API**.

## 🚀 Fonctionnalités

L'application répond aux consignes suivantes :

Créer un nouveau projet React-N, nommé lyceeApp.
Proposer un premier screen d'accueil de cette application.

Créer les pages suivantes :
- Liste des lycées de l'académie de Créteil.
- Liste des lycées privés de la région parisienne.
- Nombre de chaque type de lycées : LP PR, LPO, LGT.
- Les adresses mail des lycée de l'académie de Versailles.
- Le nombre de lycées des académies de la région parisienne.

La navigation entre les différentes pages se fera via la librairie expo-router.

## 💻 Installation et lancement

1.  **Cloner le projet** :
    ```bash
    git clone https://github.com/saffanasld/R602-lyceeApp.git
    cd R602-lyceeApp
    ```

2.  **Installer les dépendances** :
    ```bash
    npm install
    ```

3.  **Lancer l'application** :
    ```bash
    npx expo start
    ```

4.  **Scanner le QR Code** avec l'application **Expo Go** (Android/iOS).

## 📂 Structure du projet

* `app/(tabs)/` : Contient toutes les routes de l'application.
* `components/` : Composants réutilisables (`Liste.tsx`, `Description.tsx`, `Diagramme.tsx`).
* `assets/` : Contient le fichier `data.json` (API).

## 🎨 Palette de Couleurs

| Couleur | Code Hexa | 
| :--- | :--- |
| **Marron** | `#5B3B1E` | 
| **Orange** | `#BC5727` | 
| **Vert** | `#979E6C` |
| **Beige** | `#EAE1CB` |
