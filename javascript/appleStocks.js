function maxProfit1(stockPrices) {
  let maxProfit = stockPrices[1] - stockPrices[0];
  for (let i = 2; i < stockPrices.length; i++) {
    const currentProfit = stockPrices[i] - stockPrices[i - 1];
    const newMaxProfit = currentProfit + maxProfit;
    if (newMaxProfit < maxProfit) {
      maxProfit = Math.max(currentProfit, maxProfit);
    }
    if (newMaxProfit > maxProfit) {
      if (currentProfit > newMaxProfit) {
        maxProfit = currentProfit;
      } else {
        maxProfit = newMaxProfit;
      }
    }
    console.log('max profit up to this point: ', maxProfit);
  }
  console.log('MAX PROFIT: ', maxProfit);
  return maxProfit;
}

function maxProfit2(stockPrices) {
  let maxProfit = stockPrices[1] - stockPrices[0];
  for (i = 0; i < stockPrices.length - 1; i++) {
    let currentMaxProfit = stockPrices[i + 1] - stockPrices[i];
    for (j = i + 1; j < stockPrices.length; j++) {
      const currentProfit = stockPrices[j] - stockPrices[i];
      if (currentProfit > currentMaxProfit) {
        currentMaxProfit = currentProfit;
      }
    }
    console.log('Max Profit if Bought at ' + stockPrices[i] + ': ' + currentMaxProfit);
    if (currentMaxProfit > maxProfit) {
      maxProfit = currentMaxProfit;
    }
  }
  console.log('Max Profit: ', maxProfit);
  return maxProfit;
}

function maxProfit3(stockPrices) {
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (i = 2; i < stockPrices.length; i++) {
    const currentProfit = stockPrices[i] - minPrice;
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }

    if (stockPrices[i] < minPrice) {
      minPrice = stockPrices[i];
    }
  }

  console.log('MAX PROFIT', maxProfit);
  return maxProfit;
}

const stockPrices = [10, 7, 5, 8, 11, 9];

maxProfit1(stockPrices);
maxProfit1([5, 4, 3, 2, 1]);
maxProfit1([5, 5, 4, 3, 2, 1]);
maxProfit1([5, 5, 5, 5, 5, 5]);

maxProfit2(stockPrices);
maxProfit2([5, 4, 3, 2, 1]);
maxProfit2([5, 5, 5, 5, 5, 5]);
maxProfit2([5, 5, 4, 3, 2, 1]);

maxProfit3(stockPrices);
maxProfit3([5, 4, 3, 2, 1]);
maxProfit3([5, 5, 5, 5, 5, 5]);
maxProfit3([5, 5, 4, 3, 2, 1]);
maxProfit3([5, 5, 4, 3, 2, 1,5]);

