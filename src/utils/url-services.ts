export enum URLServices {
  //Preço do ouro
  CURRENT_GOLDPRICE = 'http://api.nbp.pl/api/cenyzlota',
  //Essa API retorna a taxa de fundos federais diária, semanal e mensal (taxa de juros) dos Estados Unidos.
  CURRENTTYPE_OF_EXANGES_RATES = 'https://www.alphavantage.co/query?function=FEDERAL_FUNDS_RATE&interval=monthly&apikey=YAXOOY9AAPYMVG3C',
  //Essa API retorna as taxas anuais de inflação (preços ao consumidor) dos Estados Unidos.
  INFLATION = 'https://www.alphavantage.co/query?function=INFLATION&apikey=YAXOOY9AAPYMVG3C'
}
