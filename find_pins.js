const pins = [ 
    {name: 'Saravanampatti', x: 105.69, y: 203.72}, 
    {name: 'Hopes', x: 110.69, y: 210.72}, 
    {name: 'Gandhipuram', x: 100.69, y: 210.72}, 
    {name: 'Tirupati', x: 148.69, y: 133.72}, 
    {name: 'Ameerpet', x: 138.69, y: 49.72}, 
    {name: 'Trivandrum', x: 82.69, y: 240.71}, 
    {name: 'Kochi', x: 69.69, y: 209.72}, 
    {name: 'Trichy', x: 128.69, y: 212.72}, 
    {name: 'Salem', x: 123.69, y: 190.72}, 
    {name: 'Dilsukhnagar', x: 148.69, y: 55.72}, 
    {name: 'Vizag', x: 246.69, y: 45.72} 
]; 
pins.forEach(p => console.log(`${p.name}: { top: '${((p.y / 299) * 100).toFixed(2)}%', left: '${((p.x / 307) * 100).toFixed(2)}%' },`));
