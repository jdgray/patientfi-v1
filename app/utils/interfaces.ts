export type IResourceCardType = {
  id: string;
  type: string;
  cardDescription: string | null;
  thumbnailText?: string | null;
  tags?: string[] | null;
  download?: { [key: string]: string } | null;
  thumbnailImage?: { [key: string]: string } | null;
  detailsInfo: {
    title: string;
    channel?: string | null;
    type?: string | null;
    imageSize?: string | null;
    imageDimensions?: string | null;
    detailsDescription?: string | null;
    suggestedUse?: string | null;
    images?: Array<{ [key: string]: string }> | null;
    relatedContent?: Array<{ [key: string]: string }> | null;
  };
};
