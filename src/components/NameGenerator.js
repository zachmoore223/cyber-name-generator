import React, { useState } from 'react';

const NameGenerator = () => {
  const prefixes = ['Aero', 'Anti', 'Omni', 'Noct','Lux','Lumi','Sphere','Nebula','Nova','Ash','Meta','Astro','Astra','Ast','Galactic','Gala','Hydro','Magna','Turbo','Dextro',
  'Dextra','Globula','Globu','Stella','Interstella','Neutrino','Super','Sub','Mecha','Hydra','Xeno','Terra','Void', 'Aster', 'Luna', 'Lun', 'Sol', 'Cos', 'Cosmo'];

  const suffixes = ['bionic', 'tron','bot','ionic','onic','ic','tronic','botic','borg','acid','cid','adon','idon','don','agogue','ergy','oid','eidos','gram','naut','arch','biotic',
  'crpyt','drome','genesis','hedra','hedron','morph','omicon','chrome','ome','phage','ploid','droid','pod','saur','saurus','tome','zoid','roid','noid','toid','crid','acrid'];

  const [generatedName, setGeneratedName] = useState('');

  const isVowel = (char) => ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());

  const generateRandomName = () => {
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    let randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    // Ensure that if the prefix ends with a vowel, the suffix won't start with a vowel
    if (isVowel(randomPrefix.charAt(randomPrefix.length - 1))) {
      while (isVowel(randomSuffix.charAt(0))) {
        randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
      }
    }

    const newName = randomPrefix + randomSuffix;
    setGeneratedName(newName);
  };

  return (
    <div>
      <h2>Generated Name: {generatedName}</h2>
      <button onClick={generateRandomName}>Generate Name</button>
    </div>
  );
};

export default NameGenerator;