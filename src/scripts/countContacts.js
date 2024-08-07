import path from 'node:path';
import fs from 'node:fs/promises';

const PATH_DB = path.join(__dirname, '../db/db.json');

export const countContacts = async () => {
    try {
        const info = await fs.readFile(PATH_DB, 'utf-8');
        const data = JSON.parse(info);
        return data.length;
    } catch (error) {
        console.error('Error counting contacts:', error);
        return 0;
    }
};

const totalContacts = await countContacts();
console.log(`Total number of contacts: ${totalContacts}`);
console.log('finish');
