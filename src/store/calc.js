import { observable, action, decorate, computed } from "mobx";

import range from "lodash/range";

class Calc {
  amount = 5000;
  fees = 3;
  tax = 1.35;

  setAmount = amount => (this.amount = amount);
  setFees = fees => (this.fees = fees);

  setSliderAmountFees = (event, typeSlider) => {
    switch (typeSlider) {
      case "amount":
        return this.setAmount(range(5000, 50450, 450)[event]);
      case "fees":
        return this.setFees((this.fees = event));
      default:
        return null;
    }
  };

  setInputAmountFees = (event, typeSliderInput) => {
    switch (typeSliderInput) {
      case "amount":
        return (this.amount = event.target.value);
      case "fees":
        return (this.fees = event.target.value);
      default:
        return null;
    }
  };

  get getAmountFee() {
    const total = (this.amount * this.tax) / this.fees;
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    });
    formatter.format(total);

    return formatter.format(total);
  }
}
decorate(Calc, {
  amount: observable,
  fees: observable,
  setAmount: action,
  setFees: action,
  setSliderAmountFees: action,
  setInputAmountFees: action,
  getAmountFee: computed
});

export default Calc;
