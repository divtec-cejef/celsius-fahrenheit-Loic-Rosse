/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  let temperature = Number(prompt('Entrez une température'));

  if (isNaN(temperature)){
    alert('Veuillez entrer un nombre');
  }else {
    alert(`la température est de : ${temperature = temperature * 9 / 5 + 32}`);
  }


}()); // Main IIFE

