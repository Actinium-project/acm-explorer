var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

var currencyUnits = [
	{
		type:"native",
		name:"ACM",
		multiplier:1,
		default:true,
		values:["", "acm", "ACM"],
		decimalPlaces:8
	},
	{
		type:"native",
		name:"atom",
		multiplier:1000,
		values:["atom"],
		decimalPlaces:5
	},
	{
		type:"native",
		name:"photon",
		multiplier:1000000,
		values:["photon"],
		decimalPlaces:2
	},
	{
		type:"native",
		name:"actinoshi",
		multiplier:100000000,
		values:["actinoshi", "act"],
		decimalPlaces:0
	},
	{
		type:"exchanged",
		name:"USD",
		multiplier:"usd",
		values:["usd"],
		decimalPlaces:2,
		symbol:"$"
	},
];

module.exports = {
	name:"Actinium",
	logoUrl:"/img/logo/acm.svg",
	siteTitle:"Actinium Explorer",
	nodeTitle:"Actinium Full Node",
	nodeUrl:"https://actinium.org/",
	demoSiteUrl: "https://actinium.org",
	miningPoolsConfigUrls:[
		"https://raw.githubusercontent.com/hashstream/pools/master/pools.json",
	],
	maxBlockWeight: 4000000,
	currencyUnits:[
		{
			name:"ACM",
			multiplier:1,
			default:true,
			values:["", "acm", "ACM"],
			decimalPlaces:8
		},
		{
			name:"atom",
			multiplier:1000,
			values:["atom"],
			decimalPlaces:5
		},
		{
			name:"proton",
			multiplier:1000000,
			values:["proton"],
			decimalPlaces:2
		},
		{
			name:"actinoshi",
			multiplier:100000000,
			values:["actinoshi", "act"],
			decimalPlaces:0
		}
	],
	targetBlockTimeSeconds: 150,
	currencyUnits:currencyUnits,
	currencyUnitsByName:{"ACM":currencyUnits[0], "atom":currencyUnits[1], "photon":currencyUnits[2], "actinoshi":currencyUnits[3]},
	baseCurrencyUnit:currencyUnits[3],
	defaultCurrencyUnit:currencyUnits[0],
	feeSatoshiPerByteBucketMaxima: [5, 10, 25, 50, 100, 150, 200, 250],
	genesisBlockHashesByNetwork:{
		"main":    "28d77872e23714562f49a1be792c276623c1bbe3fdcf21b6035cfde78b00b824",
		"test":    "7c617cc84dc2bff1497836216d6b850cc4e871359ab1afc2d19ef099f9f81f1b"
	},
	genesisCoinbaseTransactionIdsByNetwork: {
		"main":    "ec55b10e2f22adf88cb40df86df4d912687c13e6a4d6289513883adaef2c9191",
		"test":    "ec55b10e2f22adf88cb40df86df4d912687c13e6a4d6289513883adaef2c9191",
	},
	genesisCoinbaseTransactionsByNetwork:{
		"main": {
			"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff5004ffff001d0104484e592054696d65732032342f4170722f3230313820546f726f6e746f2056616e2041747461636b20537573706563742045787072657373656420416e67657220617420576f6d656effffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
			"txid": "ec55b10e2f22adf88cb40df86df4d912687c13e6a4d6289513883adaef2c9191",
			"hash": "ec55b10e2f22adf88cb40df86df4d912687c13e6a4d6289513883adaef2c9191",
			"confirmations": 373107,
			"strippedsize": 288,
			"size": 288,
			"weight": 1152,
			"height": 0,
			"version": 1,
			"versionHex": "00000001",
			"vin": [
				{
					"coinbase": "04ffff001d0104484e592054696d65732032342f4170722f3230313820546f726f6e746f2056616e2041747461636b20537573706563742045787072657373656420416e67657220617420576f6d656e",
					"sequence": 4294967295
				}
			],
			"vout": [
				{
					"value": 50.00000000,
					"n": 0,
					"scriptPubKey": {
						"asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
						"hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
						"type": "pubkey"
					}
				}
			],
			"time": 1524649713,
			"mediantime": 1524649713,
			"nonce": 743522,
			"bits": "1e0ffff0",
			"difficulty": 0.000244140625,
			"chainwork": "0000000000000000000000000000000000000000000000000000000000100010",
			"nTx": 1,
			"blockhash": "28d77872e23714562f49a1be792c276623c1bbe3fdcf21b6035cfde78b00b824"
		},
		"test": {
			"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff5004ffff001d0104484e592054696d65732032342f4170722f3230313820546f726f6e746f2056616e2041747461636b20537573706563742045787072657373656420416e67657220617420576f6d656effffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
			"hash": "ec55b10e2f22adf88cb40df86df4d912687c13e6a4d6289513883adaef2c9191",
			"txid": "ec55b10e2f22adf88cb40df86df4d912687c13e6a4d6289513883adaef2c9191",
			"confirmations": 51843,
			"strippedsize": 288,
			"size": 288,
			"weight": 1152,
			"height": 0,
			"version": 1,
			"versionHex": "00000001",
			"vin": [
				{
					"coinbase": "04ffff001d0104484e592054696d65732032342f4170722f3230313820546f726f6e746f2056616e2041747461636b20537573706563742045787072657373656420416e67657220617420576f6d656e",
					"sequence": 4294967295
				}
			],
			"vout": [
				{
					"value": 50.00000000,
					"n": 0,
					"scriptPubKey": {
						"asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
						"hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
						"type": "pubkey"
					}
				}
			],
			"time": 1524650001,
			"mediantime": 1524650001,
			"nonce": 19905,
			"bits": "1e0ffff0",
			"difficulty": 0.000244140625,
			"chainwork": "0000000000000000000000000000000000000000000000000000000000100010",
			"nTx": 1,
			"blockhash": "7c617cc84dc2bff1497836216d6b850cc4e871359ab1afc2d19ef099f9f81f1b"
		},
	},
	historicalData: [
		{
			type: "blockheight",
			date: "2018-04-25",
			blockHeight: 0,
			blockHash: "28d77872e23714562f49a1be792c276623c1bbe3fdcf21b6035cfde78b00b824",
			summary: "The Actinium genesis block",
			alertBodyHtml: "This is the first block in the Actinium blockchain.",
			referenceUrl: "https://explorer.actinium.org/block-height/0"
		},
                {
                        type: "blockheight",
                        date: "2018-12-20",
                        blockHeight: 140997,
                        blockHash: "88a8d08b5a7a5da8d68e855006bb0fed833521ae92c759bd9e76a8eccb18ffd1",
                        summary: "The golden block",
                        alertBodyHtml: "This is the first block generated with Bitcoin-based wallet that was running on Goldmine Pool.",
                        referenceUrl: "https://explorer.actinium.org/block-height/140997"
                },
	],
	//exchangeRateData:{
	//	jsonUrl:"https://api.coinmarketcap.com/v1/ticker/Actinium/",
	//	exchangedCurrencyName:"usd",
	//	responseBodySelectorFunction:function(responseBody) {
	//		if (responseBody[0] && responseBody[0].price_usd) {
	//			return {"usd":responseBody[0].price_usd};
	//		}
	//		return null;
	//	}
	//},
	blockRewardFunction:function(blockHeight) {
		var eras = [ new Decimal8(50) ];
		for (var i = 1; i < 34; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

		var index = Math.floor(blockHeight / 840000);

		return eras[index];
	}
};
