# vite-tinybase-ts-react-sync-durable-object

This is a [Vite](https://vitejs.dev/) template for a simple
[TinyBase](https://tinybase.org/) app, using TypeScript and React, demonstrating
the TinyBase ui-react-dom module UI components, and also synchronizing between
disparate browser windows using Cloudflare Durable Objects.

The server can be configured to store TinyBase state, so even if all clients 
have been disconnected (and their browser storage cleared) synced data will still 
be available on the server for future connecting clients.

<img width="847" alt="image" src="https://github.com/user-attachments/assets/c63f2789-94dd-4fd3-a5eb-e929c7b4897c">

## Instructions

1. Make a copy of this template into a new directory:

```sh
npx tiged tinyplex/vite-tinybase-ts-react-sync-durable-object my-tinybase-app
```

2. Go into the client directory:

```sh
cd my-tinybase-app/client
```

3. Install the dependencies:

```sh
npm install
```

4. Run the application:

```sh
npm run dev
```

5. Go the URL shown and enjoy!

## Run your own server

This template uses a lightweight socket server on `vite.tinybase.cloud` to
synchronize data between clients. This is fine for a demo but not intended as a
production server for your apps!

If you wish to run your own instance, see the `server` directory and start from
there.

The `vite.tinybase.cloud` server is hosted on Cloudflare and so if you choose to
use that, you can reuse the wrangler.toml configuration in the server directory.
Just remember to update it to match your account, domains, and required
configuration. In the `index.ts` file, you can configure whether data will be
stored in the Durable Object or just synchronized between clients.

You will also have to have your client communicate with your new server by
configuring the `SERVER` constant at the top of the client's `App.tsx` file.

## Other templates

There are eleven templates for TinyBase, of which this is one:

|     | Template                                                                                                             | Language   | React | Plus                   |
| --- | -------------------------------------------------------------------------------------------------------------------- | ---------- | ----- | ---------------------- |
|     | [vite-tinybase](https://github.com/tinyplex/vite-tinybase)                                                           | JavaScript | No    |                        |
|     | [vite-tinybase-ts](https://github.com/tinyplex/vite-tinybase-ts)                                                     | TypeScript | No    |                        |
|     | [vite-tinybase-react](https://github.com/tinyplex/vite-tinybase-react)                                               | JavaScript | Yes   |                        |
|     | [vite-tinybase-ts-react](https://github.com/tinyplex/vite-tinybase-ts-react)                                         | TypeScript | Yes   |                        |
|     | [vite-tinybase-ts-react-sync](https://github.com/tinyplex/vite-tinybase-ts-react-sync)                               | TypeScript | Yes   | Synchronization        |
| 👉  | [vite-tinybase-ts-react-sync-durable-object](https://github.com/tinyplex/vite-tinybase-ts-react-sync-durable-object) | TypeScript | Yes   | Sync & Durable Objects |
|     | [vite-tinybase-ts-react-pglite](https://github.com/tinyplex/vite-tinybase-ts-react-pglite)                           | TypeScript | Yes   | PGlite                 |
|     | [vite-tinybase-ts-react-crsqlite](https://github.com/tinyplex/vite-tinybase-ts-react-crsqlite)                       | TypeScript | Yes   | CR-SQLite              |
|     | [tinybase-ts-react-partykit](https://github.com/tinyplex/tinybase-ts-react-partykit)                                 | TypeScript | Yes   | PartyKit               |
|     | [tinybase-ts-react-electricsql](https://github.com/tinyplex/tinybase-ts-react-electricsql)                           | TypeScript | Yes   | ElectricSQL            |
|     | [expo/examples/with-tinybase](https://github.com/expo/examples/tree/master/with-tinybase)                            | JavaScript | Yes   | React Native & Expo    |

## License

This template has no license, and so you can use it however you want!
[TinyBase](https://github.com/tinyplex/tinybase/blob/main/LICENSE) and
[Vite](https://github.com/vitejs/vite/blob/main/LICENSE) themselves are both MIT
licensed.
