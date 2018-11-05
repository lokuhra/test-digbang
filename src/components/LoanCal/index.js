import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import Title from './partials/Title';
import Slider from './partials/SliderComponent';
import Result from './partials/Result';

const Box = ({ calcStore }) => (
  <Fragment>
    <Title />
    <Slider
      inputPrefix="$ "
      inputTitle="MONTO TOTAL"
      maxSliderValue={100}
      minSliderValue={0}
      sliderMaxTitle="$ 50.000"
      sliderMinTitle="$ 5.000"
      sliderValue={calcStore.amount}
      typeSliderInput="amount"
    />
    <Slider
      inputPrefix=""
      inputTitle="PLAZO"
      maxSliderValue={24}
      minSliderValue={3}
      sliderMaxTitle="24"
      sliderMinTitle="3"
      sliderValue={calcStore.fees}
      typeSliderInput="fees"
    />
    <Result />
  </Fragment>
);
export default inject('calcStore')(observer(Box));
