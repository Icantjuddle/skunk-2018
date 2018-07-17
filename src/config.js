import Ajv from 'ajv';
import schema from '../config/config_schema.json';
import config_text from 'config-text';

let ajv = new Ajv();
let validate = ajv.compile(schema);
let valid = validate(config_text);
if (!valid) { console.log(validate.errors); } else { console.log('config good'); }
