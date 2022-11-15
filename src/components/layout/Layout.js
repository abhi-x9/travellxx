import { Fragment } from 'react';
import MainFooter from '../UI/MainFooter';
import MainHeader from '../UI/MainHeader';

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <MainFooter />
    </Fragment>
  );
};

export default Layout;