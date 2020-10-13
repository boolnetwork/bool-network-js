# Bool Network js

## Usage

Its dependencies should be installed via yarn, not via npm.

```
yarn add bool-network-js
```
Then you will get lastest version
***
### Get account information

```
const { CreateApi } = require('bool-network-js');

run = async () => {
  let api = await CreateApi();
  let a = await api.query.system.account('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY');
  console.log(a.toString());
}

run()
```
####Providers
Focusing on the construction, any API requires a provider and we create one via the const `wsProvider = new WsProvider(...)`. By default,if none is provided to the API it will consruct a default  `WsProvider` instance to connect to *`ws://127.0.0.1:9944`*

###Proiect structure
```
├── README.md              //readme
├── jestconfig.json
├── package.json           //project dependencies and script
├── src
│   ├── api.ts             //injection you custom type and rpc
│   ├── index.ts
│   └── interfaces
│       ├── augment-types.ts
│       ├── authorx
│       ├── btcBridge
│       ├── citaBridge
│       ├── dao
│       ├── definitions.ts
│       ├── dex
│       ├── ethBridge
│       ├── feed
│       ├── genericErc20
│       ├── index.ts
│       ├── jsonrpc.ts
│       ├── stablecoin
│       ├── token
│       ├── types.ts
│       ├── uniswap
│       └── witness
├── tsconfig.json
├── tslint.json
└── yarn.lock
```
### Examples

## TODO

- [x] types
- [x] test : add module testing ? or integration testing
- [ ] docs
