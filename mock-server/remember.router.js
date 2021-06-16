const router = require("express").Router();
const _ = require("lodash");

const data={remember:[{
  id:1,
title:'cryptocurenncy',
date:'2020/12/12',
pic:'https://www.tradingview.com/i/TM7QujQf/',
desc:`The last major upgrade for Bitcoin is was called Segregated Witness and happened 4 years ago (in August 2017), before the major bull run.

We are likely to see Bitcoin going to new highs by the end of 2021 or in 2022 after the Taproot upgrade goes into effect.
We are likely to see Bitcoin going to new highs by the end of 2021 
We have a bright future ahead for the cryptocurrency markets.
We are likely to see Bitcoin going to new highs by the end of 2021 
Thanks a lot for your continued support.`
},
{
  id:2,
title:'forex',
date:'2020/12/13',
pic:'https://s3.tradingview.com/l/LBxMF3V7_mid.png',
desc:`The last major upgrade for Bitcoin is was called Segregated Witness and happened 4 years ago (in August 2017), before the major bull run.

We are likely to see Bitcoin going to new highs by the end of 2021 or in 2022 after the Taproot upgrade goes into effect.

We have a bright future ahead for the cryptocurrency markets.
We have a bright future ahead for the cryptocurrency markets.
Thanks a lot for your continued support.
We have a bright future ahead for the cryptocurrency markets.`
},
{
  id:3,
title:'cryptocurenncy',
date:'2020/12/14',
pic:'https://www.tradingview.com/i/ztOxu8Hm',
desc:`The last major upgrade for Bitcoin is was called Segregated Witness and happened 4 years ago (in August 2017), before the major bull run.

We are likely to see Bitcoin going to new highs by the end of 2021 or in 2022 after the Taproot upgrade goes into effect.

We have a bright future ahead for the cryptocurrency markets.
We have a bright future ahead for the cryptocurrency markets.
We have a bright future ahead for the cryptocurrency markets.
Thanks a lot for your continued support.`
}
,
{
  id:4,
title:'forex',
date:'2020/12/15',
pic:'https://s3.tradingview.com/d/dLvKPgj4_mid.png',
desc:`The last major upgrade for Bitcoin is was called Segregated Witness and happened 4 years ago (in August 2017), before the major bull run.

We are likely to see Bitcoin going to new highs by the end of 2021 or in 2022 after the Taproot upgrade goes into effect.

We have a bright future ahead for the cryptocurrency markets.

Thanks a lot for your continued support.
Thanks a lot for your continued support.
Thanks a lot for your continued support.
Thanks a lot for your continued support.`
}
,
{
  id:5,
title:'cryptocurenncy',
date:'2020/12/16',
pic:'https://daytradereview.com/wp-content/uploads/2017/05/Tradingview-Automated-Analysis.png',
desc:`The last major upgrade for Bitcoin is was called Segregated Witness and happened 4 years ago (in August 2017), before the major bull run.

We are likely to see Bitcoin going to new highs by the end of 2021 or in 2022 after the Taproot upgrade goes into effect.

We have a bright future ahead for the cryptocurrency markets.
Thanks a lot for your continued support.
Thanks a lot for your continued support.
Thanks a lot for your continued support.`
}
,
{
  id:6,
title:'forex',
date:'2020/12/17',
pic:'https://assets.thehansindia.com/h-upload/2020/04/12/961342-trading.webp',
desc:`The last major upgrade for Bitcoin is was called Segregated Witness and happened 4 years ago (in August 2017), before the major bull run.

We are likely to see Bitcoin going to new highs by the end of 2021 or in 2022 after the Taproot upgrade goes into effect.

We have a bright future ahead for the cryptocurrency markets.
Thanks a lot for your continued support.
Thanks a lot for your continued support.`
}
]}
router.get("/", (req, res) => {
  res.json(data.products);
});

router.get("/:id", (req, res) => {
  res.json(_.find(data.products, {id: req.params.id}));
});

module.exports = router;
