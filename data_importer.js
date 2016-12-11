'use strict';

const config = require('./config');
const models = require(config.model_path);

if (process.argv.length < 4) {
    console.log('[USAGE] node data_importer.js <db_table> <data_file> <is_update?>')
    process.exit(1);
}

const data = require(`./${process.argv[3]}`);
let opt = {
    table: process.argv[2],
    isUpdate: !!process.argv[4]
};

for (let key in data) {
    let transaction = {};
    if (opt.table === 'Item') {
        transaction = {
            name: data[key].name,
            image: data[key].img.toString(),
            category: data[key].category,
            sub_category: data[key].subcat,
            price: data[key].price,
            brand: data[key].store,
            pattern: data[key].pattern,
            target: data[key].target,
            serial_no: key,
            created_at: Date.now(),
            updated_at: Date.now()
        };
    } else if (opt.table === 'Combination') {

    } else {
        process.exit(1);
    }

    models[opt.table]
        .create(transaction)
        .then()
        .catch(err => console.error(err));
}
