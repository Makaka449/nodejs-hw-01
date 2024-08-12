import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
    try {
        const info = await fs.readFile(PATH_DB, 'utf-8');
        const data = JSON.parse(info);
        
        return data.length;  
    } catch (error) {
        console.error('Error reading contacts:', error);
        return 0; 
    }
};

const numberOfContacts = await countContacts();
console.log(numberOfContacts);  
console.log('finish');
