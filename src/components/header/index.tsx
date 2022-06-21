import React, { useEffect, useRef, useState } from 'react';
import Navigation from './shared/navigation';
import Link from 'next/link';
import classNames from 'classnames';
import { renderThemeClass } from '@common/functions';

const Header = ({ theme }: { theme?: 'primary' | 'secondary' | 'third' | 'fourth' }) => {
  const [isOpenNavMobile, setIsOpenNavMobile] = useState<boolean>(false);

  return (
    <>
      <div className="header-spacing" />
      <header>
        <div className="container">
          <div className="header-wrapper">
            <Link href="/">
              <a className="header-logo">
              </a>
            </Link>
            <Navigation isOpenNavMobile={isOpenNavMobile} setIsOpenNavMobile={setIsOpenNavMobile} />
            <div className="header-icons">
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
