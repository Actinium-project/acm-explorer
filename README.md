# Actinium Explorer

[![npm version][npm-ver-img]][npm-ver-url] [![NPM downloads][npm-dl-img]][npm-dl-url]


Simple, database-free Bitcoin blockchain explorer, via RPC. Built with Node.js, express, bootstrap-v4.

Available at:

* ACM: https://explorer.actinium.org

# Features

* Browse blocks
* View block details
* View transaction details, with navigation "backward" via spent transaction outputs
* View JSON content used to generate most pages
* Search by transaction ID, block hash/height, and address
* Optional transaction history for addresses by querying from ElectrumX, blockchain.com, blockchair.com, or blockcypher.com
* Mempool summary, with fee, size, and age breakdowns
* RPC command browser and terminal
* Currently supports BTC, LTC (support for any Bitcoin-RPC-protocol-compliant coin can be added easily)

# Getting started

The below instructions are geared toward BTC, but can be adapted easily to other coins.

## Prerequisites

1. Install and run a full, archiving node - [instructions](https://bitcoin.org/en/full-node). Ensure that your bitcoin node has full transaction indexing enabled (`txindex=1`) and the RPC server enabled (`server=1`).
2. Synchronize your node with the Bitcoin network.
3. "Recent" version of Node.js (8+ recommended).

## Instructions

```bash
npm install -g btc-rpc-explorer
btc-rpc-explorer
```

If you're running on mainnet with the default datadir and port, this Should Just Work.
Open [http://127.0.0.1:3002/](http://127.0.0.1:3002/) to view the explorer.

You may set configuration options in a `.env` file or using CLI args.
See [configuration](#configuration) for details.

### Configuration

Configuration options may be passed as environment variables
or by creating an env file at `~/.config/btc-rpc-explorer.env`
or at `.env` in the working directory.
See [.env-sample](.env-sample) for a list of the options and details for formatting `.env`.

You may also pass options as CLI arguments, for example:

```bash
btc-rpc-explorer --port 8080 --bitcoind-port 18443 --bitcoind-cookie ~/.bitcoin/regtest/.cookie
```

See `btc-rpc-explorer --help` for the full list of CLI options.

## Run via Docker

1. `docker build -t btc-rpc-explorer .`
2. `docker run -p 3002:3002 -it btc-rpc-explorer`

<<<<<<< HEAD
# Screenshots

<table>
  <tr>
    <td valign="top">
      <h4>Homepage (list of recent blocks)</h4>
      <img src="public/img/screenshots/home.png" style="margin-right:5px; border: 1px solid #ccc;" />
    </td>
    <td valign="top">
      <h4>Node Details</h4>
      <img src="public/img/screenshots/node-details.png" style="margin-right:5px; border: 1px solid #ccc;" />
    </td>
    <td valign="top">
      <h4>Transaction Details</h4>
      <img src="public/img/screenshots/transaction.png" style="margin-right:5px; border: 1px solid #ccc;" />
    </td>
  </tr>
  <tr>
    <td valign="top">
      <h4>Browse Blocks</h4>
      <img src="public/img/screenshots/blocks.png" style="margin-right:5px; border: 1px solid #ccc;" />
    </td>
    <td valign="top">
      <h4>Block Details</h4>
      <img src="public/img/screenshots/block.png" style="margin-right:5px; border: 1px solid #ccc;" />
    </td>
    <td valign="top">
      <h4>Mempool Summary</h4>
      <img src="public/img/screenshots/mempool-summary.png" style="margin-right:5px; border: 1px solid #ccc;" />
    </td>
  </tr>
  <tr>
    <td valign="top">
      <h4>Transaction, Raw JSON</h4>
      <img src="public/img/screenshots/transaction-raw.png" style="margin-right:5px; border: 1px solid #ccc;" />
    </td>
    <td valign="top">
      <h4>RPC Browser</h4>
      <img src="public/img/screenshots/rpc-browser.png" style="margin-right:5px; border: 1px solid #ccc;" />
    </td>
    <td valign="top">
      <h4>Connect via RPC</h4>
      <img src="public/img/screenshots/connect.png" style="margin-right:5px; border: 1px solid #ccc;" />
    </td>
  </tr>
</table>

# Donate to the author of the original software!

To support continued development of this tool and/or to support the hosting of the live demo site:

* [Bitcoin](bitcoin:3NPGpNyLLmVKCEcuipBs7G4KpQJoJXjDGe): 3NPGpNyLLmVKCEcuipBs7G4KpQJoJXjDGe
* [Litecoin](litecoin:ME4pXiXuWfEi1ANBDo9irUJVcZBhsTx14i): ME4pXiXuWfEi1ANBDo9irUJVcZBhsTx14i

