import React, { useState } from 'react';

const NameGenerator = () => {
  const prefixes = ['Aero', 'Anti', 'Ash', 'Ast', 'Aster', 'Astro', 'Astra', 'Cos', 'Cosmo', 'Dextro', 'Dextra', 'Galactic', 'Gala', 'Glob', 'Globu', 'Globula', 'Hydra', 'Hydro', 
  'Interstella', 'Luna', 'Lun', 'Lux', 'Lumi', 'Magna', 'Mecha', 'Meta', 'Nebula', 'Neutrino', 'Noct', 'Nova', 'Omni', 'Sol', 'Sphere', 'Stella', 'Sub', 'Super', 'Terra', 'Turbo', 
  'Void', 'Xeno'];

  const suffixes = ['acid', 'acrid', 'adon', 'agogue', 'arch', 'biotic', 'bionic', 'bot', 'botic', 'borg', 'chrome', 'cid', 'crid', 'crpyt', 'drome', 'don', 'droid', 'eidos', 'ergy', 
  'genesis', 'gram', 'hedra', 'hedron', 'ic', 'idon', 'ionic', 'micon', 'morph', 'naut', 'noid', 'omic', 'omicon', 'onic', 'oid', 'phage', 'ploid', 'pod', 'roid', 'saur', 'saurus', 'tome', 
  'toid', 'tron', 'tronic', 'zoid'];

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