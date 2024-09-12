import { useEffect, useState } from "react";
import { Button, Carousel, Modal } from "react-bootstrap";
import { I18nLink } from "@Components/Utilities";
import CustomImage from "@Components/Utilities/CustomImage";
import styles from "./BgImageSlider.module.scss";

const BgImageSlider = (props) => {
  const { data, winSize, customStyle } = props;
  const [windowObj, updateWindowObj] = useState(false);
  useEffect(() => {
    if (winSize.width !== 0) updateWindowObj(true);
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow({
      show: true,
      videoLink: e.bannerVideoUrl,
      title: e.bannerTitle,
    });
  };
  return (
    <>
      {data ? (
        <section className={`acc-slider-banner-bg-image ${customStyle}`}>
          {props.bgImage ? (
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                {props.bgImage ? (
                  <span className="bgImageWraper">
                    <CustomImage
                      src={props.bgImage.url}
                      alt=""
                      fill
                      className="img"
                    />
                  </span>
                ) : null}
                <Carousel.Caption>
                  <h1
                    className={`${
                      windowObj && winSize.width > 991 ? "text-white" : ""
                    }`}
                  >
                    {data.bannerTitle}
                  </h1>
                  {props.bannerDescription ? (
                    <p
                      className={`${
                        windowObj && winSize.width > 991 ? "text-white" : ""
                      }`}
                    >
                      {data.bannerDescription.text}
                    </p>
                  ) : (
                    ""
                  )}
                  {data.bannerButtonLink ? (
                    <I18nLink href={data.bannerButtonLink}>
                      <Button
                        variant="primary"
                        className={`text-uppercase border border-medium ${
                          windowObj && winSize.width < 991 ? "btn-block" : ""
                        }`}
                      >
                        {data.bannerButtonLabel}
                      </Button>
                    </I18nLink>
                  ) : (
                    [
                      data.bannerVideoUrl ? (
                        <Button
                          onClick={() => handleShow(data)}
                          onKeyDown={() => handleShow(data)}
                          variant="primary"
                          className={`text-uppercase border border-medium ${
                            windowObj && winSize.width < 991 ? "btn-block" : ""
                          }`}
                        >
                          {data.bannerButtonLabel}
                        </Button>
                      ) : (
                        ""
                      ),
                    ]
                  )}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          ) : (
            <Carousel controls={false} indicators>
              {data.map((item) => (
                <Carousel.Item key={`itm_${item.id}`}>
                  {item.bannerImage ? (
                    <span className="bgImageWraper">
                      <CustomImage
                        src={item.bannerImage.url}
                        alt=""
                        fill
                        className=""
                        wrapClass={styles["acc-slider-banner-bg-wc"]}
                      />
                    </span>
                  ) : null}
                  <Carousel.Caption>
                    <h1
                      className={`${
                        windowObj && winSize.width > 991 ? "text-white" : ""
                      }`}
                    >
                      {item.bannerTitle}
                    </h1>
                    {item.bannerDescription ? (
                      <p
                        className={`${
                          windowObj && winSize.width > 991 ? "text-white" : ""
                        }`}
                      >
                        {item.bannerDescription.text}
                      </p>
                    ) : (
                      ""
                    )}
                    {item.bannerButtonLink ? (
                      <I18nLink href={item.bannerButtonLink}>
                        <Button
                          variant="primary"
                          className={`text-uppercase border border-medium ${
                            windowObj && winSize.width < 991 ? "btn-block" : ""
                          }`}
                        >
                          {item.bannerButtonLabel}
                        </Button>
                      </I18nLink>
                    ) : (
                      [
                        item.bannerVideoUrl ? (
                          <Button
                            key={`bimgs_btn${item.id}`}
                            onClick={() => handleShow(item)}
                            onKeyDown={() => handleShow(item)}
                            variant="primary"
                            className={`text-uppercase border border-medium ${
                              windowObj && winSize.width < 991
                                ? "btn-block"
                                : ""
                            }`}
                          >
                            {item.bannerButtonLabel}
                          </Button>
                        ) : (
                          ""
                        ),
                      ]
                    )}
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
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
                src={show.videoLink}
                title={show.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Modal.Body>
          </Modal>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default BgImageSlider;
