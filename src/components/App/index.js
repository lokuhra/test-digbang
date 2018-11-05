import React, { Fragment } from 'react';
import { Normalize } from 'styled-normalize';
import { Provider as MobxProvider } from 'mobx-react';
import stores from '../../store';
import Helmet from './partials/Helmet';
import Containers from './partials/Containers';
import LoanCal from '../LoanCal';


const Btn = () => (
  <Fragment>
    <Normalize />
    <Helmet />
    <MobxProvider {...stores}>
      <Containers>
        <LoanCal />
      </Containers>
    </MobxProvider>
  </Fragment>
);

export default Btn;
