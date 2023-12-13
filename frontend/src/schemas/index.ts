import * as gameSchemas from './games.schemas'
import * as genericsSchemas from './generics.schema'
import * as platformsSchemas from './platforms.schema'
import * as storesSchemas from './stores.schemas'
import * as sellsSchemas from './sells.schemas'


export const Schemas = {
  ...gameSchemas,
  ...platformsSchemas,
  ...storesSchemas,
  ...genericsSchemas,
  ...sellsSchemas
}
  
  

