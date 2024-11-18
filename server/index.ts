import {createMergeableStore, Id, IdAddedOrRemoved} from 'tinybase';
import {createDurableObjectStoragePersister} from 'tinybase/persisters/persister-durable-object-storage';
import {
  getWsServerDurableObjectFetch,
  WsServerDurableObject,
} from 'tinybase/synchronizers/synchronizer-ws-server-durable-object';

// Whether to persist data in the Durable Object between client sessions.
//
// If false, the Durable Object only provides synchronization between clients
// (which are assumed to persist their own data).
const PERSIST_TO_DURABLE_OBJECT = false;

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

  createPersister() {
    if (PERSIST_TO_DURABLE_OBJECT) {
      return createDurableObjectStoragePersister(
        createMergeableStore(),
        this.ctx.storage,
      );
    }
  }
}

export default {
  fetch: getWsServerDurableObjectFetch('TinyBaseDurableObjects'),
};
