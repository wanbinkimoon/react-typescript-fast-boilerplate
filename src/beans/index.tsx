export type Article = {
  title: string;
  contentType: 'Le mostre' | 'Le iniziative culturali' | 'Gli studi' | 'Gli articoli';
  hero?: ImgAsset;
  extract: string;
  firma?: string;
  richBodyText?: string;
  fotogallery?: ImgAsset[];
  pdf?: PDFAsset[];
};

export type Strillo = {
  occhiello?: string;
  title: string;
  extract?: string;
  firma?: string;
  sort?: number;
  internalRef: Article;
  externalRef: string;
};

export type ImgAsset = Asset & {
  details: {
    size: number;
    image: {
      width: number;
      height: number;
    };
  };
};

export type PDFAsset = Asset & {};

type Asset = {
  title: string;
  file: {
    fileName: string;
    url: string;
    contentType: string;
  };
};
