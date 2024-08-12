import fs from 'fs/promises'; 
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
    try {
        const info = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(info);

        if (contacts.length > 0) {
            contacts.pop();
            await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
        } else {
            console.log('No contacts to remove');
        }
    } catch (err) {
        console.error('Error:', err);
    }
};


removeLastContact().then(() => {
    console.log('finish');
}).catch(err => {
    console.error('Error in removeLastContact:', err);
});
