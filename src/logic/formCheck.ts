import React from 'react';

export const searchFormCheck = (adresses: IAdressFormat) => {
  const { adress1, adress2 } = adresses;

  type Tests = {
    adress1Exist: boolean;
    adress2Exist: boolean;
    adressesDiffer: boolean;
    allTestsPass: any;
  };
  const tests: Tests = {
    adress1Exist: adress1.length > 0,
    adress2Exist: adress2.length > 0,
    adressesDiffer: adress1 !== adress2,
    allTestsPass: function () {
      console.log(
        (this.adress1Exist === this.adress2Exist) === this.adressesDiffer
      );
      return (this.adress1Exist === this.adress2Exist) === this.adressesDiffer;
    },
  };
  console.log(tests);
  //   console.log(adress2);
  return tests;
};
