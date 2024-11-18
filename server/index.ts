import {Id, IdAddedOrRemoved} from 'tinybase';
import {
  getWsServerDurableObjectFetch,
  WsServerDurableObject,
} from 'tinybase/synchronizers/synchronizer-ws-server-durable-object';

export class TinyBaseDurableObject extends WsServerDurableObject {
  constructor(ctx: any, env: any) {
    super(ctx, env);
  }

  onPathId(pathId: Id, addedOrRemoved: IdAddedOrRemoved) {
    console.info((addedOrRemoved ? 'Added' : 'Removed') + ` path ${pathId}`);
  }

  onClientId(pathId: Id, clientId: Id, addedOrRemoved: IdAddedOrRemoved) {
    console.info(
      (addedOrRemoved ? 'Added' : 'Removed') +
        ` client ${clientId} on path ${pathId}`,
    );
  }

  // Uncomment this method to preserve data in the Durable Object between
  // client sessions:

  // createPersister() {
  //   return createDurableObjectStoragePersister(
  //     createMergeableStore(),
  //     this.ctx.storage,
  //   );
  // }
}

export default {
  fetch: getWsServerDurableObjectFetch('TinyBaseDurableObjects'),
};
