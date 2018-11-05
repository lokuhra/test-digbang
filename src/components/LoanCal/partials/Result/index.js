import React from 'react';
import Flex from 'react-super-styled/lib/Flex';
import Text from 'react-super-styled/lib/Text';
import { inject, observer } from 'mobx-react';

const Result = ({ calcStore }) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    styles="height: 20%; width: 100%; padding-top: 1.5rem; padding-bottom:3rem"
  >
    <Flex
      alignItems="center"
      justifyContent="space-between"
      styles="height: 50%; width: 100%; background-color:#00355D; padding-left:1.1rem; padding-right:1.1rem"
    >
      <Text bold styles="font-size: 1.25rem">
        CUOTA FIJA POR MES
      </Text>
      <Text bold styles="font-size: 2.5rem; margin:0">
        {calcStore.getAmountFee}
      </Text>
    </Flex>
    <Flex
      alignItems="center"
      justifyContent="space-between"
      styles="height: 50%; width: 100%;"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        styles="height: 100%; width: 72%;background-color:#17AA8D"
      >
        <Text bold styles="font-size: 1.5rem">
          OBTENÉ TU CREDITO
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        styles="height: 100%; width: 26%; background-color: #0B548B"
      >
        <Text bold center styles="font-size: 0.80rem">
          VER DETALLES DE CUOTAS
        </Text>
      </Flex>
    </Flex>
  </Flex>
);
export default inject('calcStore')(observer(Result));
