import { Banner } from '../../components/banner/Banner';
import { DecorLine } from '../../components/decor/DecorLine';
import tempImage from '../../assets/img/temp-image.jpg';
import { useFetch } from '../../hooks/useFetch';
import { fetchNasaPhoto } from '../../services/nasa';
import './Home.scss';
import '../../components/banner/Banner.scss';

export const Home = () => {
  const { data, loading, error } = useFetch(fetchNasaPhoto)

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
          <div className="daily-photo__content">
            {loading && <p>Loading...</p>}
            {error && <p className="error">Error: {error}</p>}
            {!loading && !error && data && (
              <>
                <div className="daily-photo__content-img">
                  <img src={data.img} alt={data.title} />
                </div>
                <div className="daily-photo__content-info">
                  <h3 className="photo-title">{data.title}</h3>
                  <p className="photo-desc">{data.explanation}</p>
                  <p className="photo-data">{data.date}</p>
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
              {/* { newsItems } */}
              <div className="news-item-card">
                <div className="news-item-card__img">
                  <img src={tempImage} alt="news photo" />
                </div>
                <div className="news-item-card__title">News title</div>
                <div className="news-item-card__info">News description</div>
                <div className="news-item-card__more-btn btn">MORE...</div>
              </div>
              <div className="news-item-card">
                <div className="news-item-card__img">
                  <img src={tempImage} alt="news photo" />
                </div>
                <div className="news-item-card__title">News title</div>
                <div className="news-item-card__info">News description</div>
                <div className="news-item-card__more-btn btn">MORE...</div>
              </div>
              <div className="news-item-card">
                <div className="news-item-card__img">
                  <img src={tempImage} alt="news photo" />
                </div>
                <div className="news-item-card__title">News title</div>
                <div className="news-item-card__info">News description</div>
                <div className="news-item-card__more-btn btn">MORE...</div>
              </div>
            </div>
          </div>
        </section>    
    </>
  )
};
