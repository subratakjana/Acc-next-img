import { useState, useEffect } from "react";
import { I18nLink } from "@Components/Utilities";
import { Button, Container, Modal } from "react-bootstrap";
import useWindowDimensions from "@Hooks/windowDimention";
import CustomImage from "@Components/Utilities/CustomImage";
import dynamic from "next/dynamic";
import styles from "./Banner.module.scss";

const HTMLContent = dynamic(
  () => import("@Components/Utilities/HTMLContent"),
);

const Banner = (props) => {
  const windowSize = useWindowDimensions();
  const [windowObj, updateWindowObj] = useState(false);
  const [show, setShow] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    const getVideoUrl = e.target.getAttribute("data-url");
    setVideoUrl(getVideoUrl);
  };

  useEffect(() => {
    if (windowSize.width !== 0) updateWindowObj(true);
  }, []);

  const { customStyle, bannerList } = props;

  return (
    <>
      {bannerList ? (
        <>
          {windowObj && windowSize.width > 1199 ? (
            <section
              key={`banner_${bannerList.id}`}
              className={`acc-page-main-banner position-relative ${
                customStyle && customStyle
              }`}
            >
              {bannerList.bannerImage
                ? bannerList.bannerImage.map((bannerimage) => (
                    <CustomImage
                      src={bannerimage.url}
                      alt={
                        bannerimage.assetTitle
                          ? bannerimage.assetTitle
                          : bannerimage.url
                      }
                      fill
                      key={`ban_${bannerimage.url}`}
                      wrapClass={styles['acc-page-main-banner-wrap']}
                    />
                  ))
                : null}
              {bannerList.bannerHeading ? (
                <Container>
                  <article className="position-absolute acc-banner-caption">
                    {bannerList.bannerHeading ? (
                      <h2 className="text-white">{bannerList.bannerHeading}</h2>
                    ) : (
                      ""
                    )}
                    {bannerList.bannerDescription2 ? (
                      <HTMLContent
                        className="m-0"
                        content={bannerList.bannerDescription2.html}
                      />
                    ) : (
                      [
                        bannerList.bannerDescription ? (
                          <p key="bnrTag" className="text-white">
                            {bannerList.bannerDescription}
                          </p>
                        ) : null,
                      ]
                    )}
                    {bannerList.bannerButtonText ? (
                      <>
                        {bannerList.bannerLinkType === "Video" ? (
                          <>
                            {windowObj && windowSize.width < 991 ? (
                              <Button
                                variant="primary"
                                data-url={bannerList.bannerButtonLink}
                                onClick={handleShow}
                                className="text-uppercase btn-block"
                              >
                                {bannerList.bannerButtonText}
                              </Button>
                            ) : (
                              <Button
                                variant="primary"
                                data-url={bannerList.bannerButtonLink}
                                onClick={handleShow}
                                className="text-uppercase"
                              >
                                {bannerList.bannerButtonText}
                              </Button>
                            )}
                          </>
                        ) : (
                          <>
                            {windowObj && windowSize.width < 991 ? (
                              <I18nLink href={bannerList.bannerButtonLink}>
                                <Button
                                  variant="primary"
                                  className="text-uppercase btn-block"
                                >
                                  {bannerList.bannerButtonText}
                                </Button>
                              </I18nLink>
                            ) : (
                              <I18nLink href={bannerList.bannerButtonLink}>
                                <Button
                                  variant="primary"
                                  className="text-uppercase"
                                >
                                  {bannerList.bannerButtonText}
                                </Button>
                              </I18nLink>
                            )}
                          </>
                        )}
                      </>
                    ) : null}
                  </article>
                  {videoUrl ? (
                    <Modal
                      size="md"
                      show={show}
                      onHide={handleClose}
                      className="acc-custom-modal"
                    >
                      <Modal.Body className="text-center">
                        <iframe
                          width="100%"
                          height="420"
                          src={videoUrl}
                          title="video"
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </Modal.Body>
                    </Modal>
                  ) : null}
                </Container>
              ) : null}
              {/* banner video link start */}
              {bannerList.bannerVideoLink && (
                <button
                  type="button"
                  className="acc-banner-video-link"
                  data-url={bannerList.bannerVideoLink}
                  onClick={handleShow}
                ></button>
              )}
              {/* banner video link end */}
            </section>
          ) : (
            <section
              key={`banner_${bannerList.id}`}
              className={`acc-page-main-mob-banner ${
                customStyle ? customStyle : ""
              }`}
            >
              {windowObj && windowSize.width < 576 ? (
                <>
                  {(typeof bannerList.bannerMobileImage === "undefined" ||
                    (bannerList.bannerMobileImage &&
                      bannerList.bannerMobileImage.length === 0)) &&
                    bannerList.bannerImage &&
                    bannerList.bannerImage.map((bannerimage) => (
                      <div className="acc-mob-banner-img">
                        <CustomImage
                          src={bannerimage.url}
                          alt={
                            bannerimage.assetTitle
                              ? bannerimage.assetTitle
                              : bannerimage.url
                          }
                          fill
                          key={`ban_${bannerimage.url}`}
                          wrapClass={styles['acc-page-main-banner-wrap']}
                        />
                      </div>
                    ))}

                  {bannerList.bannerMobileImage &&
                    bannerList.bannerMobileImage.map((bannermobileimage) => (
                      <div
                        className={`acc-mob-banner-img ${
                          (bannerList.bannerHeading ||
                            bannerList.bannerDescription2 ||
                            bannerList.bannerDescription ||
                            bannerList.bannerButtonText) &&
                          "acc-mob-banner-overlay"
                        }`}
                      >
                        <CustomImage
                          src={bannermobileimage.url}
                          alt={
                            bannermobileimage.assetTitle
                              ? bannermobileimage.assetTitle
                              : bannermobileimage.url
                          }
                          fill
                          key={`ban_${bannermobileimage.url}`}
                          wrapClass={styles['acc-page-main-banner-wrap']}
                        />
                      </div>
                    ))}
                </>
              ) : (
                bannerList.bannerImage &&
                bannerList.bannerImage.map((bannerimage) => (
                  <div className="acc-mob-banner-img">
                    <CustomImage
                      src={bannerimage.url}
                      alt={
                        bannerimage.assetTitle
                          ? bannerimage.assetTitle
                          : bannerimage.url
                      }
                      fill
                      key={`ban_${bannerimage.url}`}
                      wrapClass={styles['acc-page-main-banner-wrap']}
                    />
                  </div>
                ))
              )}

              {bannerList.bannerHeading ? (
                <Container>
                  <article className="acc-main-banner-mob-caption pt-4">
                    {bannerList.bannerHeading ? (
                      <h2 className="text-dark">{bannerList.bannerHeading}</h2>
                    ) : (
                      ""
                    )}
                    {bannerList.bannerDescription2 ? (
                      <HTMLContent
                        className="m-0"
                        content={bannerList.bannerDescription2.html}
                      />
                    ) : (
                      [
                        bannerList.bannerDescription ? (
                          <p key="bnrTag" className="text-dark">
                            {bannerList.bannerDescription}
                          </p>
                        ) : null,
                      ]
                    )}
                    {bannerList.bannerButtonText ? (
                      <>
                        {bannerList.bannerLinkType === "Video" ? (
                          <>
                            {windowObj && windowSize.width < 991 ? (
                              <Button
                                variant="primary"
                                data-url={bannerList.bannerButtonLink}
                                onClick={handleShow}
                                className="text-uppercase btn-block"
                              >
                                {bannerList.bannerButtonText}
                              </Button>
                            ) : (
                              <Button
                                variant="primary"
                                data-url={bannerList.bannerButtonLink}
                                onClick={handleShow}
                                className="text-uppercase"
                              >
                                {bannerList.bannerButtonText}
                              </Button>
                            )}
                          </>
                        ) : (
                          <>
                            {windowObj && windowSize.width < 991 ? (
                              <I18nLink href={bannerList.bannerButtonLink}>
                                <Button
                                  variant="primary"
                                  className="text-uppercase btn-block"
                                >
                                  {bannerList.bannerButtonText}
                                </Button>
                              </I18nLink>
                            ) : (
                              <I18nLink href={bannerList.bannerButtonLink}>
                                <Button
                                  variant="primary"
                                  className="text-uppercase"
                                >
                                  {bannerList.bannerButtonText}
                                </Button>
                              </I18nLink>
                            )}
                          </>
                        )}
                      </>
                    ) : null}
                  </article>
                </Container>
              ) : null}

              {/* banner video link start */}
              {bannerList.bannerVideoLink && (
                <button
                  type="button"
                  className="acc-banner-video-link"
                  data-url={bannerList.bannerVideoLink}
                  onClick={handleShow}
                ></button>
              )}
              {/* banner video link end */}
            </section>
          )}
          {videoUrl ? (
            <Modal
              size={bannerList.bannerVideoLink ? "xl" : "md"}
              show={show}
              onHide={handleClose}
              className="acc-custom-modal"
            >
              <Modal.Body className="text-center">
                <iframe
                  width="100%"
                  height={
                    bannerList.bannerVideoLink &&
                    windowObj &&
                    windowSize.width > 1199
                      ? 720
                      : 420
                  }
                  src={videoUrl}
                  title="video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Modal.Body>
            </Modal>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default Banner;
