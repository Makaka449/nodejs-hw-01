import path from 'node:path';
import fs from 'node:fs/promises';

const PATH_DB = path.join(__dirname, '../db/db.json');

export const getAllContacts = async () => {
    try {
        const info = await fs.readFile(PATH_DB, 'utf-8');
        const data = JSON.parse(info);

        return data;
        
    } catch (error) {
        console.error('Error reading contacts:', error);
        return [];
    }
};

const contacts = await getAllContacts();
console.log(contacts);
console.log('finish');
