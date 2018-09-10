var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

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
	feeSatoshiPerByteBucketMaxima: [5, 10, 25, 50, 100, 150, 200, 250],
	genesisBlockHash: "28d77872e23714562f49a1be792c276623c1bbe3fdcf21b6035cfde78b00b824",
	genesisCoinbaseTransactionId: "ec55b10e2f22adf88cb40df86df4d912687c13e6a4d6289513883adaef2c9191",
	genesisCoinbaseTransaction: {
		"txid":"ec55b10e2f22adf88cb40df86df4d912687c13e6a4d6289513883adaef2c9191",
		"hash":"ec55b10e2f22adf88cb40df86df4d912687c13e6a4d6289513883adaef2c9191",
		"blockhash":"28d77872e23714562f49a1be792c276623c1bbe3fdcf21b6035cfde78b00b824",
		"version":1,
		"locktime":0,
		"size":288,
		"vsize":288,
		"time":1524649713,
		"blocktime":1524649713,
		"vin":[
			{
				"prev_out":{
					"hash":"0000000000000000000000000000000000000000000000000000000000000000",
					"n":743522
				},
				"coinbase":"04ffff001d0104404e592054696d65732030352f4f63742f32303131205374657665204a6f62732c204170706c65e280997320566973696f6e6172792c2044696573206174203536"
			}
		],
		"vout":[
			{
				"value":"50.00000000",
				"n":0,
				"scriptPubKey":{
					"hex":"04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
					"type":"pubkey",
					"reqSigs":1,
					"addresses":[
						""
					]
				}
			}
		]
	},
	historicalData: [
		{
			type: "blockheight",
			date: "2018-04-25",
			blockHeight: 0,
			blockHash: "28d77872e23714562f49a1be792c276623c1bbe3fdcf21b6035cfde78b00b824",
			summary: "The Actinium genesis block.",
			alertBodyHtml: "This is the first block in the Actinium blockchain.",
			referenceUrl: "https://explorer.actinium.org/block-height/0"
		},
	],
	exchangeRateData:{
		jsonUrl:"https://api.coinmarketcap.com/v1/ticker/Actinium/",
		exchangedCurrencyName:"usd",
		responseBodySelectorFunction:function(responseBody) {
			if (responseBody[0] && responseBody[0].price_usd) {
				return responseBody[0].price_usd;
			}
			
			return -1;
		}
	},
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
