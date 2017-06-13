/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';

import logoUrl from './Logo_ML.png';
import logoUrl2x from './Logo_ML@2x.png';
import logoSearch from './ic_Search.png';
import logoSearch2x from './ic_Search@2x.png';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link className={s.brand} to="/">
            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} alt="MercadoLibre" />
          </Link>
          <div className={s.searchDiv}>
            <input className={s.searchBar} placeholder="Nunca Dejes de Buscar" />
            <img className={s.searchIcon} src={logoSearch} srcSet={`${logoSearch2x} 2x`} alt="MercadoLibre" />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
