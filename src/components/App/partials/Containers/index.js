import React from 'react';
import Flex from 'react-super-styled/lib/Flex';

const Background = ({ children }) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    styles="background-color: #054575;height: 100vh; font-family: 'Montserrat', sans-serif; color:#FFFFFF"
  >
    <Flex
      alignItems="center"
      justifyContent="center"
      styles="background-color: #003B67; height: 90%; width: 50%"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        styles="height: 100%; width: 80%"
      >
        {children}
      </Flex>
    </Flex>
  </Flex>
);
export default Background;
