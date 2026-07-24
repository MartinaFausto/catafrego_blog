const fs = require('fs');

const key = process.env.PRIMENG_LICENSE_KEY;

if (!key) {
    throw new Error('Missing PRIMENG_LICENSE_KEY');
}

const file = 'src/environments/environment.prod.ts';

let content = `
export const environment = {
    production: true,
    primengLicenseKey: '${key}'
};
`;

fs.writeFileSync(file, content);

console.log('PrimeNG license injected');