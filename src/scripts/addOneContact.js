import path from 'node:path';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const PATH_DB = path.join(__dirname, '../db/db.json');

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        const newContact = createFakeContact();
        contacts.push(newContact);
        
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
        console.log('finish');
    } catch (error) {
        console.error('Error generating contacts:', error);
    }
};

addOneContact();
