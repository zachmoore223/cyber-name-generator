import React, { useState } from 'react';

const NameGenerator = () => {
  const prefixes = [
'Aero', 'Anti', 'Omni', 'Noct','Lux','Lumi','Shpere','Nebula','Nova','Ash','Meta','Astro','Astra','Galactic','Gala','Hydro','Magna','Turbo','Dextro','Dextra','Globula','Globu',
'Stella','Interstella','Neutrino','Super','Sub','Mecha','Hydra','Xeno','Terra','Void',
  ];
  const suffixes = ['tron','bot','ionic','onic','ic','tronic','botic','borg','acid','cid','adon','idon','don','agogue','ergy','oid','eidos','gram','naut','arch','biotic',
  'crpyt','drome','genesis','hedra','hedron','morph','omicon','chrome','ome','phage','ploid','droid','pod','saur','saurus','tome','zoid','roid','noid','toid','crid','acrid'
    
    
    ];

  const [generatedName, setGeneratedName] = useState('');

  const generateRandomName = () => {
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const newName = randomPrefix + randomSuffix;
    setGeneratedName(newName);
  };

  return (
    <div>
      <h2>{generatedName}</h2>
      <button onClick={generateRandomName}>Generated Name</button>
    </div>
  );
};

export default NameGenerator;
