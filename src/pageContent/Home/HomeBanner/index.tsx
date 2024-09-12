import React, { useState, useEffect } from 'react';
import useWindowDimensions from '@Hooks/windowDimention';
import { Container, Button, Row, Col } from 'react-bootstrap';
import CustomImage from '@Components/Utilities/CustomImage';
import { I18nLink } from '@Components/Utilities';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import dynamic from 'next/dynamic';
import { ReactSVG } from 'react-svg';
import styles from './HomeBanner.module.scss';
import Slider from 'react-slick';

const HTMLContent = dynamic(() => import('@Components/Utilities/HTMLContent'));

const HomeBanner = ({ data }) => {
  const windowSize = useWindowDimensions();
  const [windowObj, updateWindowObj] = useState(false);

  useEffect(() => {
    if (windowSize.width !== 0) updateWindowObj(true);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    data &&
    data.length && (
      <section
        className={`${styles['acc-homepage-banner']} ${
          data.length > 1 ? styles['acc-homepage-banner-line'] : ''
        }`}
      >
        <Slider
          {...sliderSettings}
          className={styles['acc-home-banner-slider']}
        >
          {data &&
            data.map((item) => (
              <div
                className={`d-block ${
                  styles[
                    `acc-image-${
                      item.buttonPosition
                        ? item.buttonPosition.replace('_', '-')
                        : 'default'
                    }`
                  ]
                }`}
                key={`banner_${item.id}`}
              >
                <div className={styles['acc-home-banner-image-wrap']}>
                  {windowObj && windowSize.width > 767 ? (
                    item.bannerDesktopImage &&
                    item.bannerLink !== null &&
                    item.bannerLink !== '' ? (
                      <I18nLink href={item.bannerLink} isMagentoRoute={0}>
                        <a>
                          <CustomImage
                            src={item.bannerDesktopImage.url}
                            alt={item.bannerDesktopImage.assetTitle}
                            fill
                            priority
                            className={styles['acc-home-banner-image']}
                            wrapClass={styles['acc-home-banner-image-wc']}
                          />
                        </a>
                      </I18nLink>
                    ) : (
                      <CustomImage
                        src={item.bannerDesktopImage.url}
                        alt={item.bannerDesktopImage.assetTitle}
                        fill
                        priority
                        className={styles['acc-home-banner-image']}
                        wrapClass={styles['acc-home-banner-image-wc']}
                      />
                    )
                  ) : (
                    item.bannerMobileImage &&
                    (item.bannerLink !== null ? (
                      <I18nLink href={item.bannerLink} isMagentoRoute={0}>
                        <a>
                          <CustomImage
                            src={item.bannerMobileImage.url}
                            alt={item.bannerMobileImage.assetTitle}
                            fill
                            priority
                            className={styles['acc-home-banner-image']}
                            wrapClass={styles['acc-home-banner-image-wc']}
                          />
                        </a>
                      </I18nLink>
                    ) : (
                      <CustomImage
                        src={item.bannerMobileImage.url}
                        alt={item.bannerMobileImage.assetTitle}
                        fill
                        priority
                        className={styles['acc-home-banner-image']}
                        wrapClass={styles['acc-home-banner-image-wc']}
                      />
                    ))
                  )}
                </div>
                {item.bannerStyle === 'style_01' && (
                  <Container
                    className={`${styles['acc-homepage-banner-caption']} ${styles['acc-homepage-banner-caption-1']}`}
                  >
                    <HTMLContent
                      className="m-0"
                      content={item.bannerCaption.html}
                    />
                  </Container>
                )}
                {item.bannerStyle === 'style_02' && item.buttonText && (
                  <Container
                    fluid
                    className={`${styles['acc-homepage-banner-btn']} ${
                      styles['acc-homepage-banner-caption-2']
                    } ${
                      styles[
                        `acc-${
                          item.buttonPosition
                            ? item.buttonPosition.replace('_', '-')
                            : ''
                        }`
                      ]
                    }`}
                  >
                    <I18nLink href={item.buttonLink} isMagentoRoute={0}>
                      <Button
                        variant="clear"
                        size={
                          windowObj && windowSize.width > 1200
                            ? 'lg'
                            : windowObj && windowSize.width > 991
                            ? ''
                            : 'sm'
                        }
                        className={`btn-${
                          item.buttonStyle
                            ? item.buttonStyle.replace('_', '-').toLowerCase()
                            : ''
                        }`}
                      >
                        {item.buttonText}
                      </Button>
                    </I18nLink>
                  </Container>
                )}
                {item.bannerStyle === 'style_03' && (
                  <Container
                    className={`${styles['acc-homepage-banner-caption']} ${styles['acc-homepage-banner-caption-3']}`}
                  >
                    <Row>
                      {item.logo && item.logo.fileName && (
                        <Col xs={12} lg={6} className="mb-2 mb-lg-0">
                          <div className={styles['acc-banner-caption-logo']}>
                            {item.logo.fileName ? (
                              item.logo.fileName.split('.').pop() === 'svg' ? (
                                <ReactSVG
                                  src={item.logo.url}
                                  className={styles['acc-svg-img']}
                                />
                              ) : (
                                <CustomImage
                                  src={item.logo.url}
                                  alt={item.logo.fileName}
                                  width={783}
                                  height={113}
                                />
                              )
                            ) : (
                              <CustomImage
                                src={item.logo.url}
                                alt={item.logo.fileName}
                                width={783}
                                height={113}
                              />
                            )}
                          </div>
                        </Col>
                      )}
                      <Col xs={12} lg={6}>
                        <HTMLContent content={item.bannerCaption.html} />
                        {item.buttonText && (
                          <I18nLink href={item.buttonLink} isMagentoRoute={0}>
                            <Button
                              variant="clear"
                              size={
                                windowObj && windowSize.width > 1200
                                  ? 'lg'
                                  : windowObj && windowSize.width > 991
                                  ? ''
                                  : 'sm'
                              }
                              className={`btn-${
                                item.buttonStyle
                                  ? item.buttonStyle
                                      .replace('_', '-')
                                      .toLowerCase()
                                  : ''
                              }`}
                            >
                              {item.buttonText}
                            </Button>
                          </I18nLink>
                        )}
                      </Col>
                    </Row>
                  </Container>
                )}
                {item.bannerStyle === 'style_04' && (
                  <Container
                    className={`${styles['acc-homepage-banner-caption']} ${styles['acc-homepage-banner-caption-4']}`}
                  >
                    <Row>
                      {item.logo && item.logo.fileName && (
                        <Col xs={7} sm={6} md={5}>
                          <div
                            className={`${styles['acc-banner-caption-logo']} mb-2 mb-md-3 mb-lg-4`}
                          >
                            {item.logo.fileName ? (
                              item.logo.fileName.split('.').pop() === 'svg' ? (
                                <ReactSVG
                                  src={item.logo.url}
                                  className={styles['acc-svg-img']}
                                />
                              ) : (
                                <CustomImage
                                  src={item.logo.url}
                                  alt={item.logo.fileName}
                                  width="456"
                                  height="48"
                                />
                              )
                            ) : (
                              <CustomImage
                                src={item.logo.url}
                                alt={item.logo.fileName}
                                width="456"
                                height="48"
                              />
                            )}
                          </div>
                          <HTMLContent content={item.bannerCaption.html} />
                          {item.buttonText && (
                            <I18nLink href={item.buttonLink} isMagentoRoute={0}>
                              <Button
                                variant="clear"
                                size={
                                  windowObj && windowSize.width > 1200
                                    ? 'lg'
                                    : windowObj && windowSize.width > 991
                                    ? ''
                                    : 'sm'
                                }
                                className={`btn-${
                                  item.buttonStyle
                                    ? item.buttonStyle
                                        .replace('_', '-')
                                        .toLowerCase()
                                    : ''
                                }`}
                              >
                                {item.buttonText}
                              </Button>
                            </I18nLink>
                          )}
                        </Col>
                      )}
                    </Row>
                  </Container>
                )}
              </div>
            ))}
        </Slider>
      </section>
    )
  );
};

export default HomeBanner;
