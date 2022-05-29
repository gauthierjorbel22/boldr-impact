// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BOLDR } = initSchema(schema);

export {
  BOLDR
};