# Lab 6: Preferences & Auth App

**React Native Lab 6: State Management & Local Persistence**

## Student Information
* **Name:** [Alireza Bagheri]
* **Student ID:** [210408910]

## Overview
[cite_start]This project is a multi-screen React Native application designed to demonstrate real-world state management patterns[cite: 7]. [cite_start]It moves beyond isolated examples to show how state flows through a complete app using Context API and local persistence[cite: 14].

## Features
* [cite_start]**Authentication Flow:** Mock login and logout functionality using global state[cite: 33].
* [cite_start]**Global State Management:** Uses React Context API to eliminate prop drilling and manage user data globally[cite: 11, 136].
* **Data Persistence:**
    * [cite_start]**Session:** Login state is saved to `AsyncStorage`, allowing the user to remain logged in even after the app is restarted[cite: 34, 173].
    * [cite_start]**Theming:** User preference for Light/Dark mode is persisted locally[cite: 36].
* [cite_start]**Custom Hooks:** Logic for theming and authentication is encapsulated in reusable custom hooks[cite: 13, 197].

## Tech Stack
* **Framework:** React Native (Expo)
* **Navigation:** React Navigation (Native Stack)
* **Storage:** @react-native-async-storage/async-storage
* **State Management:** `useState`, `useEffect`, `useContext`

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository** (if downloaded from GitHub).
2. **Navigate to the project directory:**
   ```bash
   cd PreferencesApp
