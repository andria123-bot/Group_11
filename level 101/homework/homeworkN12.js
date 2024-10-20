const currencies = new Map([
  ['USD', 'Dollar'],
  ['EUR', 'Euro'],
  ['GEL', 'Lari']
]);

for (const [code, name] of currencies) {
  console.log(`${code} => ${name}`);
}
