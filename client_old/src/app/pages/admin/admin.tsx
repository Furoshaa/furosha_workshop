"use client";

import { useState } from "react";
import styles from "./admin.module.css";

export default function AdminPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "editor",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données soumises:", formData);
    // Ici vous pourriez ajouter une logique d'authentification ou d'envoi de données
    alert("Formulaire soumis avec succès!");
  };

  return (
    <div className={styles["admin-container"]}>
      <h1>Administration</h1>
      <form onSubmit={handleSubmit} className={styles["admin-form"]}>
        <div className={styles["form-group"]}>
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles["form-group"]}>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles["form-group"]}>
          <label htmlFor="role">Rôle</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="admin">Administrateur</option>
            <option value="editor">Éditeur</option>
            <option value="viewer">Lecteur</option>
          </select>
        </div>
        
        <div className={styles["form-actions"]}>
          <button type="submit" className={styles["submit-btn"]}>Connexion</button>
          <button type="reset" className={styles["reset-btn"]}>Réinitialiser</button>
        </div>
      </form>
    </div>
  );
}