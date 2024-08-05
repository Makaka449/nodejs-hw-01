import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async (number) => {
    const info = await fs.readFile(PATH_DB, 'utf-8')
    const data = JSON.parse(info)
    const finishwar = data.slice(0, number)

    return finishwar
        
    
    
};

const blablabla = await countContacts(4);
console.log(blablabla)
console.log('finish')
