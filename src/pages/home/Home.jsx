import { useState } from "react";
import { Link } from 'react-router-dom';
import { Banner } from '../../components/banner/Banner';
import { DecorLine } from '../../components/decor/DecorLine';
import { Spinner } from "../../components/decor/Spinner";
import { useFetch } from '../../hooks/useFetch';
import { fetchNasaPhoto } from '../../services/nasa';
import { fetchSpaceflightNews } from '../../services/spaceflight';
import './Home.scss';
import '../../components/banner/Banner.scss';

export const Home = () => {
  const { data: dataNasa, loading: loadingNasa, error: errorNasa } = useFetch(fetchNasaPhoto);
  const { data: articles, loading: loadingArticles, error: errorArticles, reload: reloadArticles } = useFetch(fetchSpaceflightNews);

  const { otherArticles, setOtherArticles } = useState(null);

  const onArticlesLoaded = () => {
    reloadArticles();
  };

  return (
    <>
        <Banner className="banner-home">
          <div className="banner-home__info">
              <h1 className="banner-home__info-title">Among The Stars</h1>
              <DecorLine />
              <p className="banner-home__info-desc">"The universe is not only stranger than we imagine, it is stranger than we can imagine."<br /><span>— Arthur C. Clarke</span></p>
          </div> 
        </Banner>
        <section className="daily-photo">
          <h2 className="daily-photo__title">NASA picture of the day</h2>
          <div className="daily-photo__content">
            {errorNasa && <p className="error">Error: {errorNasa}</p>}
            {!loadingNasa && !errorNasa && dataNasa && (
              <>
                <div className="daily-photo__content-img">
                  <img src={dataNasa.img} alt={dataNasa.title} />
                </div>
                <div className="daily-photo__content-info">
                  <h3 className="photo-title">{dataNasa.title}</h3>
                  <p className="photo-desc">{dataNasa.explanation}</p>
                  <p className="photo-data">{dataNasa.date}</p>
                </div>
              </>
            )}
          </div>
        </section>
        <DecorLine className="decor-line-dark" />
        <section className="news">
          <div className="news__content">
            <div className="news__content-title">NEWS TITLE</div>
            <div className="news__content-list">
              {loadingArticles && <Spinner />}
              {errorArticles && <p className="error">Error: {errorArticles}</p>}
              {!loadingArticles && !errorArticles && articles && articles.map(article => (
                <div key={article.id} className="news-item-card">
                  <div className="news-item-card__img">
                    <img src={article.img} alt={article.title} />
                  </div>
                  <div className="news-item-card__info">
                    <div className="news-item-card__info-title">{article.title}</div>
                    <div className="news-item-card__info-summary">
                      {article.summary.split(" ").slice(0, 50).join(" ")}...
                    </div>
                  </div>
                  <Link to={article.url} target="_blank" className="news-item-card__more-btn btn">MORE...</Link>
                </div>          
              ))}
            </div>
            <div className="news__content-btn btn" onClick={onArticlesLoaded}>Show other</div>
          </div>
        </section>    
    </>
  )
};
