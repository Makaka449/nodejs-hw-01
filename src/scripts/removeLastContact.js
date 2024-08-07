import fs from 'fs/promises';
import path from 'node:path';

// Складаємо шлях до файлу з контактами
const PATH_DB = path.join(__dirname, '../db/db.json');

export const removeLastContact = async () => {
    try {
        const info = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(info);

        if (contacts.length > 0) {
            contacts.pop();
            await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
            console.log('Last contact removed successfully.');
        } else {
            console.log('No contacts to remove');
        }
    } catch (err) {
        console.error('Error:', err);
    }
};

removeLastContact()
    .then(() => {
        console.log('finish');
    })
    .catch(err => {
        console.error('Error in removeLastContact:', err);
    });
