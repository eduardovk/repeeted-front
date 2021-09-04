const sanitize = require("sanitize-filename");

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export function generateImgURL(artist, lang) {
    const S3URL = lang === 'pt-BR' ? process.env.REACT_APP_S3_SA_URL : process.env.REACT_APP_S3_US_URL;
    if (artist.on_s3 !== 1) return `${S3URL}default.jpg`;
    const sanitizedSlug = sanitize(artist.slug);
    return `${S3URL}${artist.id}-${sanitizedSlug}.jpg`;
}