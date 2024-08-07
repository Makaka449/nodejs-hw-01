import path from 'node:path';
import fs from 'node:fs/promises';


const PATH_DB = path.join(__dirname, '../db/db.json');

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
        console.log('All contacts have been removed.');
    } catch (err) {
        console.log('Error removing contacts:', err);
    }
};

removeAllContacts().then(() => {
    console.log('finish');
});
