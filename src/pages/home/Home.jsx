import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Banner } from '../../components/banner/Banner';
import { DecorLine } from '../../components/decor/DecorLine';
import { Spinner } from "../../components/decor/Spinner";
import { useFetch } from '../../hooks/useFetch';
import { fetchNasaPhoto } from '../../services/nasa';
import { fetchSpaceflightNews } from '../../services/spaceflight';
import './Home.scss';
import '../../components/banner/Banner.scss';

export const Home = () => {
  const todayDate = new Date().toISOString().slice(0, 10);
  const [currentDate, setCurrentDate] = useState(todayDate);

  const { data: dataNasa, loading: loadingNasa, error: errorNasa, reload: reloadNasa } = useFetch(() => fetchNasaPhoto(currentDate));
  const { data: articles, loading: loadingArticles, error: errorArticles, reload: reloadArticles } = useFetch(fetchSpaceflightNews);

  useEffect(() => {
    reloadNasa(currentDate);
  }, [currentDate]);
  
  const onArticlesLoaded = () => reloadArticles();

  const changeDate = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    const formatted = newDate.toISOString().slice(0, 10);

    if (newDate > new Date()) return;

    setCurrentDate(formatted);
  };

  const onToday = () => {
    if (currentDate !== todayDate) {
      setCurrentDate(todayDate);
    }
  }

  return (
    <>
        <Banner className="banner-home">
          <div className="banner-home__info">
              <motion.h1
                className="banner-home__info-title"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                Among The Stars
              </motion.h1>
              <DecorLine />
              <motion.p
                className="banner-home__info-desc"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                "The universe is not only stranger than we imagine, it is stranger than we can imagine."<br /><span>— Arthur C. Clarke</span>
              </motion.p>
          </div> 
        </Banner>
        <section className="daily-photo">
          <h2 className="daily-photo__title">NASA picture of the day</h2>
          <div className="daily-photo__content">
            {loadingNasa && <Spinner />}
            {errorNasa &&
              <div className="error-box">
                <p className="error">Error: { errorNasa }</p>
                <p className="error">NASA API Service Outages Possible</p>
                <p className="error">Please, try again later</p>
                <img src="https://api.nasa.gov/assets/img/general/apod.jpg" alt="example image"/>
              </div>
            }
            {!loadingNasa && !errorNasa && dataNasa && (
              <>
                <div className="daily-photo__content-img">
                  <img src={dataNasa.img} alt={dataNasa.title} />
                </div>
                <div className="daily-photo__content-info">
                  <h3 className="photo-title">{ dataNasa.title }</h3>
                  <p className="photo-desc">{ dataNasa.explanation }</p>
                  <p className="photo-date">{ currentDate }</p>
                  <div className="buttons">
                    <div className="btn-prev btn" onClick={() => changeDate(-1)}>Previous</div>
                    <div
                      className={`btn-next btn ${currentDate === todayDate ? "disabled" : ""}`}
                      onClick={() => changeDate(1)}
                    >
                      Next
                    </div>
                    <div
                      className={`btn-today btn ${currentDate === todayDate ? "disabled" : ""}`}
                      onClick={onToday}
                    >
                      Today
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
        <DecorLine className="decor-line-dark" />
        <section className="news">
          <div className="news__content">
            <div className="news__content-title">Spaceflight news</div>
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
                  <Link to={article.url} target="_blank" className="news-item-card__more-btn btn">More...</Link>
                </div>          
              ))}
            </div>
            <div className="news__content-btn btn" onClick={onArticlesLoaded}>Show other</div>
          </div>
        </section>    
    </>
  )
};
