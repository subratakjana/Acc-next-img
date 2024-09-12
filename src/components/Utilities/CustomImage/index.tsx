import Image, { ImageProps } from 'next/image';

interface CustomImageProps extends ImageProps {
    wrapClass?: string | undefined
}

const CustomImage: React.FC<CustomImageProps> = ({ style, alt, className, wrapClass, ...props }) => {
    return (
        <span className={wrapClass ? `${wrapClass}` : undefined}>

        <Image
            {...props}
            style={ { color: undefined, position: undefined, height: undefined, width: undefined, inset: undefined, left: undefined, top: undefined, right: undefined, bottom: undefined }}
            className={className ? `${className}` : undefined}
            alt={alt}
        />
        </span>
    );
};

export default CustomImage;
