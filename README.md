# Bool Network js

## Usage

Its dependencies should be installed via yarn, not via npm.

```
yarn add bool-network-js
```

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

## TODO

- [x] types
- [x] test : add module testing ? or integration testing
- [ ] docs
