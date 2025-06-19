import { Banner } from '../banner/Banner';
import './NotFound.scss';
import '../banner/Banner.scss';

export const NotFound = () => {
  return (
    <>
      <Banner className="banner-planets"/>
      <div className="not-found">Sorry, this page was not found</div>
    </>
  )
};
