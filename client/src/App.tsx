import React, { StrictMode } from 'react';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { createMergeableStore, MergeableStore } from 'tinybase';
import { createSessionPersister } from 'tinybase/persisters/persister-browser';
import { createWsSynchronizer } from 'tinybase/synchronizers/synchronizer-ws-client';
import {
  Provider,
  useCreateMergeableStore,
  useCreatePersister,
  useCreateSynchronizer,
} from 'tinybase/ui-react';
import {
  SortedTableInHtmlTable,
  ValuesInHtmlTable,
} from 'tinybase/ui-react-dom';
import { Inspector } from 'tinybase/ui-react-inspector';
import { Buttons } from './Buttons';

const SERVER_SCHEME = 'wss://';
const SERVER = 'vite.tinybase.cloud';

export const App = () => {
  const serverPathId = location.pathname;

  const store = useCreateMergeableStore(() => createMergeableStore());

  useCreatePersister(
    store,
    (store) =>
      createSessionPersister(store, 'local://' + SERVER + serverPathId),
    [],
    async (persister) => {
      await persister.startAutoLoad([
        {
          pets: { '0': { name: 'fido', species: 'dog' } },
          species: {
            dog: { price: 5 },
            cat: { price: 4 },
            fish: { price: 2 },
            worm: { price: 1 },
            parrot: { price: 3 },
          },
        },
        { counter: 0 },
      ]);
      await persister.startAutoSave();
    }
  );

  useCreateSynchronizer(store, async (store: MergeableStore) => {
    const synchronizer = await createWsSynchronizer(
      store,
      new ReconnectingWebSocket(SERVER_SCHEME + SERVER + serverPathId),
      1
    );
    await synchronizer.startSync();
    return synchronizer;
  });

  return (
    <StrictMode>
      <Provider store={store}>
        <header>
          <h1>
            <img src='/favicon.svg' />
            TinyBase & Synchronization
          </h1>
          To demonstrate synchronization,{' '}
          <a href={serverPathId}>open this exact URL</a> in multiple incognito
          browser windows, or even other browsers altogether.
        </header>
        <Buttons />
        <div>
          <h2>Values</h2>
          <ValuesInHtmlTable />
        </div>
        <div>
          <h2>Pets Table</h2>
          <SortedTableInHtmlTable
            tableId='pets'
            cellId='name'
            limit={5}
            sortOnClick={true}
            className='sortedTable'
            paginator={true}
          />
        </div>
        <Inspector />
      </Provider>
    </StrictMode>
  );
};
