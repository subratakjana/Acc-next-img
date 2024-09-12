import React from "react";
import { Container } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import CustomImage from "@Components/Utilities/CustomImage";
import styles from "./Maintenance.module.scss";

const Maintenance = () => {
    return (
        <>
            <section
                className={`section-padding text-center ${styles["maintenance-page"]}`}
            >
                <Container>
                    <div>
                        <CustomImage
                            src="/assets/images/maintenance-image.jpg"
                            alt="Maintenance"
                            width={467}
                            height={279}
                        />
                    </div>
                    <h2 className="pt-4 font-weight-normal">
                        Our website will be undergoing planned maintenance from
                        <span className="font-weight-bold">
                            {" "}
                            Friday, 10th Nov 2023, at 8PM PST{" "}
                        </span>
                        until
                        <span className="font-weight-bold">
                            {" "}
                            Monday, 13th Nov 2023, at 6AM PST{" "}
                        </span>
                        and will be temporarily unavailable during this time.
                    </h2>
                    <h2 className="mt-4">
                        You can still reach us at
                        <span className="font-weight-bold"> 888-491-7112.</span>
                    </h2>
                    <div className={`${styles["maintenance-page-logo"]} pt-4`}>
                        <ReactSVG src="/assets/images/accuride-logo-desktop.svg" />
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Maintenance;
