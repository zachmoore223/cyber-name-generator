import React, { useState } from 'react';

const NameGenerator = () => {
  const prefixes = [
  'Aero', 'Ash', 'Ast', 'Aster', 'Astro', 'Astra', 'Cometo', 'Comet', 'Cos', 'Cosmo', 'Cryo', 'Crypt', 'Crypto', 'Dextro', 'Dextra', 
  'Dyno', 'Dynamo', 'Eclip', 'Eclipto', 'Eclipt', 'Exo', 'Exoplaneto', 'Equa', 
  'Galactic', 'Gala', 'Galacto', 'Galac','Galaga', 'Galag', 'Glob', 'Geo', 'Globu', 'Globula', 'Helio', 'Hel', 'Heli', 'Heliaco', 'Hydra', 'Hydro', 
  'Hyper', 'Hypo', 'Interstella', 'Interstellar', 'Inter', 'Intra', 
  'Luna', 'Lun', 'Lux', 'Luxa', 'Luxo', 'Lumi', 'Macro', 'Mac', 'Magna', 'Magneto', 'Magnet',
  'Mecha', 'Meso', 'Meteor', 'Meteora', 'Meteoro', 'Meta', 'Micro', 'Mechan', 'Mechano', 'Mecho',
  'Mic', 'Neo', 'Nebula', 'Neutrino', 'Noct', 'Nocto', 'Nova', 'Novo', 'Novum', 
  'Omni', 'Paleo', 'Pale', 'Poly', 'Pol', 'Planet', 'Plasma', 'Plasm', 'Proto', 'Quasar', 'Radio', 'Radi', 'Supernov', 'Supernova', 'Solar', 
  'Sidero', 'Stellaro', 'Sol', 'Sphere', 'Stella', 'Sub', 'Sublo', 'Super', 'Tele', 'Terr', 'Terra', 'Thermo', 'Turbo', 'Uranus', 'Ven', 
  'Volcan', 'Volcano', 'Vulcan', 'Velo', 'Vel', 
  'Vena', 'Veno', 'Void', 'Xeno', 'Zod', 'Zoda', 'Zedo', 'Zeno'];

  const suffixes = [
  'acid', 'acrid', 'adon', 'agogue', 'aplex', 'arch', 'abiotic', 'abionic', 'abot', 'achrome', 'adon', 'atron', 'asaur', 'asaurus', 'atome', 
  'atoid', 'atron', 'atronic', 'azoid', 'aborg', 'abit', 'abyte', 'ablob', 'abrok', 'ablock',  'abric', 'ablic', 'arium', 'anom', 'amon', 'aton',
  'aburn', 'burn',
  'biotic', 'bit', 'bionic', 'blob', 'block', 'blic', 'bot', 'botic', 'borg', 'brok', 'bric', 'byte', 'chrome',   'cid', 'crid', 'crpyt', 
  'dome', 'drome', 'don', 'droid', 'eidos', 'ellite', 'ergy', 'genesis', 'gram', 'hedra', 'hedron', 'ic', 'idon', 'ionic', 'ium', 
  'micon', 'morph', 'mon', 'naut', 'noid', 'nom', 'obot', 'ochrome', 'odon', 'omic', 'omicon', 'onaut', 'onic', 'oplex', 'oid', 'otron', 'oton',
  'ocid', 'ocrid', 'odon', 'oplex', 'obiotic', 'obionic', 'osaur', 'osaurus', 'otome', 'obyte', 'obrok', 'orium', 'obrun',
  'otoid', 'otron', 'otronic', 'ozoid', 'oborg', 'obit', 'oblob', 'oblock', 'obric', 'oblic', 'onom', 'omon',
  'phage', 'plex', 'ploid', 'pod', 'rium', 'roid', 'saur', 'saurus', 'tome', 'toid', 'tron', 'tronic', 'ton', 'um', 'zoid'
];

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
      <h1> {generatedName}</h1>
      <button onClick={generateRandomName}>Generate Cyber Name</button>
    </div>
  );
};

export default NameGenerator;