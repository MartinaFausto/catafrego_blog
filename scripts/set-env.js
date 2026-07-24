require('dotenv').config();
const fs = require('fs');

const key = process.env.PRIMENG_LICENSE_KEY;

if (!key) {
    throw new Error('PRIMENG_LICENSE_KEY mancante nel file .env');
}

const content = `
export const environment = {
    production: false,
    primeUI: {
        licenseKey: ${JSON.stringify(key)}
    }
};
`;

fs.writeFileSync(
    'src/environments/environment.local.ts',
    content
);

console.log('PrimeNG license caricata in environment.local.ts');