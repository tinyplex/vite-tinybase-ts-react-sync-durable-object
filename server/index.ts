import {Id, IdAddedOrRemoved} from 'tinybase';
import {
  getWsServerDurableObjectFetch,
  WsServerDurableObject,
} from 'tinybase/synchronizers/synchronizer-ws-server-durable-object';

export class TinyBaseDurableObject extends WsServerDurableObject {
  onPathId(pathId: Id, addedOrRemoved: IdAddedOrRemoved) {
    console.info((addedOrRemoved ? 'Added' : 'Removed') + ` path ${pathId}`);
  }

  onClientId(pathId: Id, clientId: Id, addedOrRemoved: IdAddedOrRemoved) {
    console.info(
      (addedOrRemoved ? 'Added' : 'Removed') +
        ` client ${clientId} on path ${pathId}`,
    );
  }
}

export default {
  fetch: getWsServerDurableObjectFetch('TinyBaseDurableObjects'),
};
