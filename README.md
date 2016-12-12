# Clothet-DataImporter

import data into database

## Usage

```bash
$ cp config-template.js config.js
$ vim config.js # fil in model path 
$ node data_importer.js <db_table> <data_file> <is_update?>
```

## Example

```bash
node data_importer.js Item data/style.json 0
node data_importer.js Item_style data/products.V2.json 0
node data_importer.js Item_combination data/recommend.V2.json 0
```