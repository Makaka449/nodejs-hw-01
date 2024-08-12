import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
    try {
        const info = await fs.readFile(PATH_DB, 'utf-8');
        const data = JSON.parse(info);
        
        console.log(data);
        console.log('finish');

        return data;  
    } catch (error) {
        console.error('Error reading contacts:', error);
    }
};

await getAllContacts();
