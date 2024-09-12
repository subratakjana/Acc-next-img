import { useState } from "react";
import CustomImage from "@Components/Utilities/CustomImage";

export const ProductImage = ({ image, altText, isListView }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="embed-responsive embed-responsive-10by9">
      <CustomImage
        src={imgError ? "/assets/images/demo-placeholder-350-314.png" : `${image}?width=300`}
        alt={altText}
        title={altText}
        onError={() => setImgError(true)}
        layout="fill"
        objectFit="contain"
        objectPosition="center"
        className={`img embed-responsive-item ${isListView ? 'acc-list-img' : ''}`}
      />
    </div>
  );
};