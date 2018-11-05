import React from 'react';
import Flex from 'react-super-styled/lib/Flex';
import Text from 'react-super-styled/lib/Text';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import CurrencyInput from 'react-currency-input';
import _Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

const Input = styled(CurrencyInput)`
  border: 1px solid #ffffff;
  background: transparent;
  font-weight: 700;
  font-size: 1.2rem;
  color: #ffffff;
  padding: 0.5rem 0.5rem 0.5rem 1.1rem;
  width: 25%;
`;

const Slider = styled(_Slider)`
  margin-top: 1rem;
  max-width: 80%;
  margin-bottom: 0.25rem;
`;

const SliderComponent = ({
  calcStore,
  inputTitle,
  inputPrefix,
  sliderMinTitle,
  sliderMaxTitle,
  typeSliderInput,
  sliderValue,
  minSliderValue,
  maxSliderValue,
}) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    styles="height: 20%; width: 100%; margin-bottom: 2rem"
  >
    <Flex
      alignItems="center"
      flexWrap="wrap"
      justifyContent="space-between"
      styles="height: 20%; width: 100%"
    >
      <Text>{inputTitle}</Text>
      <Input
        disabled
        onChangeEvent={e => calcStore.setInputAmountFees(e, typeSliderInput)}
        precision="0"
        prefix={inputPrefix}
        value={sliderValue}
      />
    </Flex>
    <Flex
      alignItems="center"
      flexWrap="wrap"
      justifyContent="center"
      styles="height: 20%; width: 100%"
    >
      <Slider
        max={maxSliderValue}
        min={minSliderValue}
        onChange={e => calcStore.setSliderAmountFees(e, typeSliderInput)}
      />
      <Flex
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
        styles="height: 20%; width: 100%"
      >
        <Flex alignItems="center" justifyContent="center" styles="width: 15%">
          <Text>{sliderMinTitle}</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center" styles="width: 15%">
          <Text>{sliderMaxTitle}</Text>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);
export default inject('calcStore')(observer(SliderComponent));
