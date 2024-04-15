export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  Dimension: { input: any; output: any };
  HexColor: { input: any; output: any };
  JSON: { input: any; output: any };
  Quality: { input: any; output: any };
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  authorCollection?: Maybe<AuthorCollection>;
  componentDuplexCollection?: Maybe<ComponentDuplexCollection>;
  componentHeroBannerCollection?: Maybe<ComponentHeroBannerCollection>;
  componentInfoBlockCollection?: Maybe<ComponentInfoBlockCollection>;
  componentQuoteCollection?: Maybe<ComponentQuoteCollection>;
  contentBlokCollection?: Maybe<ContentBlokCollection>;
  contentBlokMetCtaCollection?: Maybe<ContentBlokMetCtaCollection>;
  contentBlokSplitCollection?: Maybe<ContentBlokSplitCollection>;
  contentCarouselCollection?: Maybe<ContentCarouselCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heroBannerCollection?: Maybe<HeroBannerCollection>;
  imageCarouselCollection?: Maybe<ImageCarouselCollection>;
  seoCollection?: Maybe<SeoCollection>;
  topicPersonCollection?: Maybe<TopicPersonCollection>;
  topicProductCollection?: Maybe<TopicProductCollection>;
};

export type AssetLinkingCollectionsAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsComponentDuplexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsComponentHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsComponentInfoBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsComponentQuoteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsContentBlokCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsContentBlokMetCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsContentBlokSplitCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsContentCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsImageCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsTopicPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsTopicProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/author) */
export type Author = Entry & {
  __typename?: 'Author';
  avatar?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AuthorLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/author) */
export type AuthorAvatarArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/author) */
export type AuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/author) */
export type AuthorNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AuthorCollection = {
  __typename?: 'AuthorCollection';
  items: Array<Maybe<Author>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AuthorLinkingCollections = {
  __typename?: 'AuthorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  heroBannerCollection?: Maybe<HeroBannerCollection>;
};

export type AuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AuthorLinkingCollectionsHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<AuthorLinkingCollectionsHeroBannerCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AuthorLinkingCollectionsHeroBannerCollectionOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  FullWidthAsc = 'fullWidth_ASC',
  FullWidthDesc = 'fullWidth_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAsc = 'test_ASC',
  TestDesc = 'test_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum AuthorOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCta = Entry & {
  __typename?: 'ComponentCta';
  colorPalette?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentCtaLinkingCollections>;
  subline?: Maybe<ComponentCtaSubline>;
  sys: Sys;
  targetPage?: Maybe<ComponentCtaTargetPage>;
  urlParameters?: Maybe<Scalars['String']['output']>;
};

/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCtaColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCtaCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCtaHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCtaInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCtaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCtaSublineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCtaTargetPageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCtaUrlParametersArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentCtaCollection = {
  __typename?: 'ComponentCtaCollection';
  items: Array<Maybe<ComponentCta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentCtaFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentCtaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentCtaFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']['input']>;
  ctaText_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  subline_contains?: InputMaybe<Scalars['String']['input']>;
  subline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subline_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  targetPage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlParameters?: InputMaybe<Scalars['String']['input']>;
  urlParameters_contains?: InputMaybe<Scalars['String']['input']>;
  urlParameters_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlParameters_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlParameters_not?: InputMaybe<Scalars['String']['input']>;
  urlParameters_not_contains?: InputMaybe<Scalars['String']['input']>;
  urlParameters_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type ComponentCtaLinkingCollections = {
  __typename?: 'ComponentCtaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type ComponentCtaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentCtaLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<ComponentCtaLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentCtaLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum ComponentCtaOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlParametersAsc = 'urlParameters_ASC',
  UrlParametersDesc = 'urlParameters_DESC',
}

export type ComponentCtaSubline = {
  __typename?: 'ComponentCtaSubline';
  json: Scalars['JSON']['output'];
  links: ComponentCtaSublineLinks;
};

export type ComponentCtaSublineAssets = {
  __typename?: 'ComponentCtaSublineAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentCtaSublineEntries = {
  __typename?: 'ComponentCtaSublineEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentCtaSublineLinks = {
  __typename?: 'ComponentCtaSublineLinks';
  assets: ComponentCtaSublineAssets;
  entries: ComponentCtaSublineEntries;
  resources: ComponentCtaSublineResources;
};

export type ComponentCtaSublineResources = {
  __typename?: 'ComponentCtaSublineResources';
  block: Array<ComponentCtaSublineResourcesBlock>;
  hyperlink: Array<ComponentCtaSublineResourcesHyperlink>;
  inline: Array<ComponentCtaSublineResourcesInline>;
};

export type ComponentCtaSublineResourcesBlock = ResourceLink & {
  __typename?: 'ComponentCtaSublineResourcesBlock';
  sys: ResourceSys;
};

export type ComponentCtaSublineResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentCtaSublineResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentCtaSublineResourcesInline = ResourceLink & {
  __typename?: 'ComponentCtaSublineResourcesInline';
  sys: ResourceSys;
};

export type ComponentCtaTargetPage = Page;

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDemo) */
export type ComponentDemo = Entry & {
  __typename?: 'ComponentDemo';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ComponentDemoLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDemo) */
export type ComponentDemoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDemo) */
export type ComponentDemoTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentDemoCollection = {
  __typename?: 'ComponentDemoCollection';
  items: Array<Maybe<ComponentDemo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentDemoFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentDemoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentDemoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentDemoLinkingCollections = {
  __typename?: 'ComponentDemoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type ComponentDemoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentDemoOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplex = Entry & {
  __typename?: 'ComponentDuplex';
  bodyText?: Maybe<ComponentDuplexBodyText>;
  colorPalette?: Maybe<Scalars['String']['output']>;
  containerLayout?: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  imageStyle?: Maybe<Scalars['Boolean']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentDuplexLinkingCollections>;
  sys: Sys;
  targetPage?: Maybe<ComponentDuplexTargetPage>;
};

/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexBodyTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexContainerLayoutArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexImageStyleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexTargetPageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentDuplexBodyText = {
  __typename?: 'ComponentDuplexBodyText';
  json: Scalars['JSON']['output'];
  links: ComponentDuplexBodyTextLinks;
};

export type ComponentDuplexBodyTextAssets = {
  __typename?: 'ComponentDuplexBodyTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentDuplexBodyTextEntries = {
  __typename?: 'ComponentDuplexBodyTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentDuplexBodyTextLinks = {
  __typename?: 'ComponentDuplexBodyTextLinks';
  assets: ComponentDuplexBodyTextAssets;
  entries: ComponentDuplexBodyTextEntries;
  resources: ComponentDuplexBodyTextResources;
};

export type ComponentDuplexBodyTextResources = {
  __typename?: 'ComponentDuplexBodyTextResources';
  block: Array<ComponentDuplexBodyTextResourcesBlock>;
  hyperlink: Array<ComponentDuplexBodyTextResourcesHyperlink>;
  inline: Array<ComponentDuplexBodyTextResourcesInline>;
};

export type ComponentDuplexBodyTextResourcesBlock = ResourceLink & {
  __typename?: 'ComponentDuplexBodyTextResourcesBlock';
  sys: ResourceSys;
};

export type ComponentDuplexBodyTextResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentDuplexBodyTextResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentDuplexBodyTextResourcesInline = ResourceLink & {
  __typename?: 'ComponentDuplexBodyTextResourcesInline';
  sys: ResourceSys;
};

export type ComponentDuplexCollection = {
  __typename?: 'ComponentDuplexCollection';
  items: Array<Maybe<ComponentDuplex>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentDuplexFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentDuplexFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentDuplexFilter>>>;
  bodyText_contains?: InputMaybe<Scalars['String']['input']>;
  bodyText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bodyText_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  containerLayout?: InputMaybe<Scalars['Boolean']['input']>;
  containerLayout_exists?: InputMaybe<Scalars['Boolean']['input']>;
  containerLayout_not?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']['input']>;
  ctaText_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageStyle?: InputMaybe<Scalars['Boolean']['input']>;
  imageStyle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageStyle_not?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  sys?: InputMaybe<SysFilter>;
  targetPage_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentDuplexLinkingCollections = {
  __typename?: 'ComponentDuplexLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type ComponentDuplexLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentDuplexLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<ComponentDuplexLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentDuplexLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum ComponentDuplexOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  ContainerLayoutAsc = 'containerLayout_ASC',
  ContainerLayoutDesc = 'containerLayout_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ComponentDuplexTargetPage = Page;

/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBanner = Entry & {
  __typename?: 'ComponentHeroBanner';
  bodyText?: Maybe<ComponentHeroBannerBodyText>;
  colorPalette?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  heroSize?: Maybe<Scalars['Boolean']['output']>;
  image?: Maybe<Asset>;
  imageStyle?: Maybe<Scalars['Boolean']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentHeroBannerLinkingCollections>;
  sys: Sys;
  targetPage?: Maybe<ComponentHeroBannerTargetPage>;
};

/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerBodyTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerHeroSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerImageStyleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerTargetPageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentHeroBannerBodyText = {
  __typename?: 'ComponentHeroBannerBodyText';
  json: Scalars['JSON']['output'];
  links: ComponentHeroBannerBodyTextLinks;
};

export type ComponentHeroBannerBodyTextAssets = {
  __typename?: 'ComponentHeroBannerBodyTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentHeroBannerBodyTextEntries = {
  __typename?: 'ComponentHeroBannerBodyTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentHeroBannerBodyTextLinks = {
  __typename?: 'ComponentHeroBannerBodyTextLinks';
  assets: ComponentHeroBannerBodyTextAssets;
  entries: ComponentHeroBannerBodyTextEntries;
  resources: ComponentHeroBannerBodyTextResources;
};

export type ComponentHeroBannerBodyTextResources = {
  __typename?: 'ComponentHeroBannerBodyTextResources';
  block: Array<ComponentHeroBannerBodyTextResourcesBlock>;
  hyperlink: Array<ComponentHeroBannerBodyTextResourcesHyperlink>;
  inline: Array<ComponentHeroBannerBodyTextResourcesInline>;
};

export type ComponentHeroBannerBodyTextResourcesBlock = ResourceLink & {
  __typename?: 'ComponentHeroBannerBodyTextResourcesBlock';
  sys: ResourceSys;
};

export type ComponentHeroBannerBodyTextResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentHeroBannerBodyTextResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentHeroBannerBodyTextResourcesInline = ResourceLink & {
  __typename?: 'ComponentHeroBannerBodyTextResourcesInline';
  sys: ResourceSys;
};

export type ComponentHeroBannerCollection = {
  __typename?: 'ComponentHeroBannerCollection';
  items: Array<Maybe<ComponentHeroBanner>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentHeroBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentHeroBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentHeroBannerFilter>>>;
  bodyText_contains?: InputMaybe<Scalars['String']['input']>;
  bodyText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bodyText_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']['input']>;
  ctaText_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroSize?: InputMaybe<Scalars['Boolean']['input']>;
  heroSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heroSize_not?: InputMaybe<Scalars['Boolean']['input']>;
  imageStyle?: InputMaybe<Scalars['Boolean']['input']>;
  imageStyle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageStyle_not?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  sys?: InputMaybe<SysFilter>;
  targetPage_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentHeroBannerLinkingCollections = {
  __typename?: 'ComponentHeroBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type ComponentHeroBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentHeroBannerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<ComponentHeroBannerLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentHeroBannerLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum ComponentHeroBannerOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  HeroSizeAsc = 'heroSize_ASC',
  HeroSizeDesc = 'heroSize_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ComponentHeroBannerTargetPage = Page;

/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlock = Entry & {
  __typename?: 'ComponentInfoBlock';
  block1Body?: Maybe<ComponentInfoBlockBlock1Body>;
  block1Image?: Maybe<Asset>;
  block2Body?: Maybe<ComponentInfoBlockBlock2Body>;
  block2Image?: Maybe<Asset>;
  block3Body?: Maybe<ComponentInfoBlockBlock3Body>;
  block3Image?: Maybe<Asset>;
  colorPalette?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentInfoBlockLinkingCollections>;
  subline?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};

/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock1BodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock1ImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock2BodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock2ImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock3BodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock3ImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockSublineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentInfoBlockBlock1Body = {
  __typename?: 'ComponentInfoBlockBlock1Body';
  json: Scalars['JSON']['output'];
  links: ComponentInfoBlockBlock1BodyLinks;
};

export type ComponentInfoBlockBlock1BodyAssets = {
  __typename?: 'ComponentInfoBlockBlock1BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentInfoBlockBlock1BodyEntries = {
  __typename?: 'ComponentInfoBlockBlock1BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentInfoBlockBlock1BodyLinks = {
  __typename?: 'ComponentInfoBlockBlock1BodyLinks';
  assets: ComponentInfoBlockBlock1BodyAssets;
  entries: ComponentInfoBlockBlock1BodyEntries;
  resources: ComponentInfoBlockBlock1BodyResources;
};

export type ComponentInfoBlockBlock1BodyResources = {
  __typename?: 'ComponentInfoBlockBlock1BodyResources';
  block: Array<ComponentInfoBlockBlock1BodyResourcesBlock>;
  hyperlink: Array<ComponentInfoBlockBlock1BodyResourcesHyperlink>;
  inline: Array<ComponentInfoBlockBlock1BodyResourcesInline>;
};

export type ComponentInfoBlockBlock1BodyResourcesBlock = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock1BodyResourcesBlock';
  sys: ResourceSys;
};

export type ComponentInfoBlockBlock1BodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock1BodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentInfoBlockBlock1BodyResourcesInline = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock1BodyResourcesInline';
  sys: ResourceSys;
};

export type ComponentInfoBlockBlock2Body = {
  __typename?: 'ComponentInfoBlockBlock2Body';
  json: Scalars['JSON']['output'];
  links: ComponentInfoBlockBlock2BodyLinks;
};

export type ComponentInfoBlockBlock2BodyAssets = {
  __typename?: 'ComponentInfoBlockBlock2BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentInfoBlockBlock2BodyEntries = {
  __typename?: 'ComponentInfoBlockBlock2BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentInfoBlockBlock2BodyLinks = {
  __typename?: 'ComponentInfoBlockBlock2BodyLinks';
  assets: ComponentInfoBlockBlock2BodyAssets;
  entries: ComponentInfoBlockBlock2BodyEntries;
  resources: ComponentInfoBlockBlock2BodyResources;
};

export type ComponentInfoBlockBlock2BodyResources = {
  __typename?: 'ComponentInfoBlockBlock2BodyResources';
  block: Array<ComponentInfoBlockBlock2BodyResourcesBlock>;
  hyperlink: Array<ComponentInfoBlockBlock2BodyResourcesHyperlink>;
  inline: Array<ComponentInfoBlockBlock2BodyResourcesInline>;
};

export type ComponentInfoBlockBlock2BodyResourcesBlock = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock2BodyResourcesBlock';
  sys: ResourceSys;
};

export type ComponentInfoBlockBlock2BodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock2BodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentInfoBlockBlock2BodyResourcesInline = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock2BodyResourcesInline';
  sys: ResourceSys;
};

export type ComponentInfoBlockBlock3Body = {
  __typename?: 'ComponentInfoBlockBlock3Body';
  json: Scalars['JSON']['output'];
  links: ComponentInfoBlockBlock3BodyLinks;
};

export type ComponentInfoBlockBlock3BodyAssets = {
  __typename?: 'ComponentInfoBlockBlock3BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentInfoBlockBlock3BodyEntries = {
  __typename?: 'ComponentInfoBlockBlock3BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentInfoBlockBlock3BodyLinks = {
  __typename?: 'ComponentInfoBlockBlock3BodyLinks';
  assets: ComponentInfoBlockBlock3BodyAssets;
  entries: ComponentInfoBlockBlock3BodyEntries;
  resources: ComponentInfoBlockBlock3BodyResources;
};

export type ComponentInfoBlockBlock3BodyResources = {
  __typename?: 'ComponentInfoBlockBlock3BodyResources';
  block: Array<ComponentInfoBlockBlock3BodyResourcesBlock>;
  hyperlink: Array<ComponentInfoBlockBlock3BodyResourcesHyperlink>;
  inline: Array<ComponentInfoBlockBlock3BodyResourcesInline>;
};

export type ComponentInfoBlockBlock3BodyResourcesBlock = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock3BodyResourcesBlock';
  sys: ResourceSys;
};

export type ComponentInfoBlockBlock3BodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock3BodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentInfoBlockBlock3BodyResourcesInline = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock3BodyResourcesInline';
  sys: ResourceSys;
};

export type ComponentInfoBlockCollection = {
  __typename?: 'ComponentInfoBlockCollection';
  items: Array<Maybe<ComponentInfoBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentInfoBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentInfoBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentInfoBlockFilter>>>;
  block1Body_contains?: InputMaybe<Scalars['String']['input']>;
  block1Body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block1Body_not_contains?: InputMaybe<Scalars['String']['input']>;
  block1Image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block2Body_contains?: InputMaybe<Scalars['String']['input']>;
  block2Body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block2Body_not_contains?: InputMaybe<Scalars['String']['input']>;
  block2Image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block3Body_contains?: InputMaybe<Scalars['String']['input']>;
  block3Body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block3Body_not_contains?: InputMaybe<Scalars['String']['input']>;
  block3Image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  subline?: InputMaybe<Scalars['String']['input']>;
  subline_contains?: InputMaybe<Scalars['String']['input']>;
  subline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subline_not?: InputMaybe<Scalars['String']['input']>;
  subline_not_contains?: InputMaybe<Scalars['String']['input']>;
  subline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentInfoBlockLinkingCollections = {
  __typename?: 'ComponentInfoBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type ComponentInfoBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentInfoBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<ComponentInfoBlockLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentInfoBlockLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum ComponentInfoBlockOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentProductTable) */
export type ComponentProductTable = Entry & {
  __typename?: 'ComponentProductTable';
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentProductTableLinkingCollections>;
  productsCollection?: Maybe<ComponentProductTableProductsCollection>;
  subline?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};

/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentProductTable) */
export type ComponentProductTableHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentProductTable) */
export type ComponentProductTableInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentProductTable) */
export type ComponentProductTableLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentProductTable) */
export type ComponentProductTableProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<ComponentProductTableProductsCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TopicProductFilter>;
};

/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentProductTable) */
export type ComponentProductTableSublineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentProductTableCollection = {
  __typename?: 'ComponentProductTableCollection';
  items: Array<Maybe<ComponentProductTable>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentProductTableFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentProductTableFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentProductTableFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  products?: InputMaybe<CfTopicProductNestedFilter>;
  productsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subline?: InputMaybe<Scalars['String']['input']>;
  subline_contains?: InputMaybe<Scalars['String']['input']>;
  subline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subline_not?: InputMaybe<Scalars['String']['input']>;
  subline_not_contains?: InputMaybe<Scalars['String']['input']>;
  subline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentProductTableLinkingCollections = {
  __typename?: 'ComponentProductTableLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type ComponentProductTableLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentProductTableOrder {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ComponentProductTableProductsCollection = {
  __typename?: 'ComponentProductTableProductsCollection';
  items: Array<Maybe<TopicProduct>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ComponentProductTableProductsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentQuote) */
export type ComponentQuote = Entry & {
  __typename?: 'ComponentQuote';
  colorPalette?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  imagePosition?: Maybe<Scalars['Boolean']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentQuoteLinkingCollections>;
  quote?: Maybe<ComponentQuoteQuote>;
  quoteAlignment?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
};

/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentQuote) */
export type ComponentQuoteColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentQuote) */
export type ComponentQuoteImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentQuote) */
export type ComponentQuoteImagePositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentQuote) */
export type ComponentQuoteInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentQuote) */
export type ComponentQuoteLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentQuote) */
export type ComponentQuoteQuoteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentQuote) */
export type ComponentQuoteQuoteAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentQuoteCollection = {
  __typename?: 'ComponentQuoteCollection';
  items: Array<Maybe<ComponentQuote>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentQuoteFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentQuoteFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentQuoteFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imagePosition?: InputMaybe<Scalars['Boolean']['input']>;
  imagePosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imagePosition_not?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  quoteAlignment?: InputMaybe<Scalars['Boolean']['input']>;
  quoteAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quoteAlignment_not?: InputMaybe<Scalars['Boolean']['input']>;
  quote_contains?: InputMaybe<Scalars['String']['input']>;
  quote_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quote_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentQuoteLinkingCollections = {
  __typename?: 'ComponentQuoteLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type ComponentQuoteLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentQuoteLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<ComponentQuoteLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ComponentQuoteLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum ComponentQuoteOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  ImagePositionAsc = 'imagePosition_ASC',
  ImagePositionDesc = 'imagePosition_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  QuoteAlignmentAsc = 'quoteAlignment_ASC',
  QuoteAlignmentDesc = 'quoteAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ComponentQuoteQuote = {
  __typename?: 'ComponentQuoteQuote';
  json: Scalars['JSON']['output'];
  links: ComponentQuoteQuoteLinks;
};

export type ComponentQuoteQuoteAssets = {
  __typename?: 'ComponentQuoteQuoteAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentQuoteQuoteEntries = {
  __typename?: 'ComponentQuoteQuoteEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentQuoteQuoteLinks = {
  __typename?: 'ComponentQuoteQuoteLinks';
  assets: ComponentQuoteQuoteAssets;
  entries: ComponentQuoteQuoteEntries;
  resources: ComponentQuoteQuoteResources;
};

export type ComponentQuoteQuoteResources = {
  __typename?: 'ComponentQuoteQuoteResources';
  block: Array<ComponentQuoteQuoteResourcesBlock>;
  hyperlink: Array<ComponentQuoteQuoteResourcesHyperlink>;
  inline: Array<ComponentQuoteQuoteResourcesInline>;
};

export type ComponentQuoteQuoteResourcesBlock = ResourceLink & {
  __typename?: 'ComponentQuoteQuoteResourcesBlock';
  sys: ResourceSys;
};

export type ComponentQuoteQuoteResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentQuoteQuoteResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentQuoteQuoteResourcesInline = ResourceLink & {
  __typename?: 'ComponentQuoteQuoteResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlock) */
export type ContentBlock = Entry & {
  __typename?: 'ContentBlock';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContentBlockLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlock) */
export type ContentBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentBlockCollection = {
  __typename?: 'ContentBlockCollection';
  items: Array<Maybe<ContentBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type ContentBlockLinkingCollections = {
  __typename?: 'ContentBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type ContentBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<ContentBlockLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentBlockLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum ContentBlockOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlok = Entry & {
  __typename?: 'ContentBlok';
  block1Body?: Maybe<ContentBlokBlock1Body>;
  block1Image?: Maybe<Asset>;
  block2Body?: Maybe<ContentBlokBlock2Body>;
  block2Image?: Maybe<Asset>;
  block3Body?: Maybe<ContentBlokBlock3Body>;
  block3Image?: Maybe<Asset>;
  buttonLink?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContentBlokLinkingCollections>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};

/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokBlock1BodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokBlock1ImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokBlock2BodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokBlock2ImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokBlock3BodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokBlock3ImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentBlokBlock1Body = {
  __typename?: 'ContentBlokBlock1Body';
  json: Scalars['JSON']['output'];
  links: ContentBlokBlock1BodyLinks;
};

export type ContentBlokBlock1BodyAssets = {
  __typename?: 'ContentBlokBlock1BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentBlokBlock1BodyEntries = {
  __typename?: 'ContentBlokBlock1BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentBlokBlock1BodyLinks = {
  __typename?: 'ContentBlokBlock1BodyLinks';
  assets: ContentBlokBlock1BodyAssets;
  entries: ContentBlokBlock1BodyEntries;
  resources: ContentBlokBlock1BodyResources;
};

export type ContentBlokBlock1BodyResources = {
  __typename?: 'ContentBlokBlock1BodyResources';
  block: Array<ContentBlokBlock1BodyResourcesBlock>;
  hyperlink: Array<ContentBlokBlock1BodyResourcesHyperlink>;
  inline: Array<ContentBlokBlock1BodyResourcesInline>;
};

export type ContentBlokBlock1BodyResourcesBlock = ResourceLink & {
  __typename?: 'ContentBlokBlock1BodyResourcesBlock';
  sys: ResourceSys;
};

export type ContentBlokBlock1BodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentBlokBlock1BodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentBlokBlock1BodyResourcesInline = ResourceLink & {
  __typename?: 'ContentBlokBlock1BodyResourcesInline';
  sys: ResourceSys;
};

export type ContentBlokBlock2Body = {
  __typename?: 'ContentBlokBlock2Body';
  json: Scalars['JSON']['output'];
  links: ContentBlokBlock2BodyLinks;
};

export type ContentBlokBlock2BodyAssets = {
  __typename?: 'ContentBlokBlock2BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentBlokBlock2BodyEntries = {
  __typename?: 'ContentBlokBlock2BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentBlokBlock2BodyLinks = {
  __typename?: 'ContentBlokBlock2BodyLinks';
  assets: ContentBlokBlock2BodyAssets;
  entries: ContentBlokBlock2BodyEntries;
  resources: ContentBlokBlock2BodyResources;
};

export type ContentBlokBlock2BodyResources = {
  __typename?: 'ContentBlokBlock2BodyResources';
  block: Array<ContentBlokBlock2BodyResourcesBlock>;
  hyperlink: Array<ContentBlokBlock2BodyResourcesHyperlink>;
  inline: Array<ContentBlokBlock2BodyResourcesInline>;
};

export type ContentBlokBlock2BodyResourcesBlock = ResourceLink & {
  __typename?: 'ContentBlokBlock2BodyResourcesBlock';
  sys: ResourceSys;
};

export type ContentBlokBlock2BodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentBlokBlock2BodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentBlokBlock2BodyResourcesInline = ResourceLink & {
  __typename?: 'ContentBlokBlock2BodyResourcesInline';
  sys: ResourceSys;
};

export type ContentBlokBlock3Body = {
  __typename?: 'ContentBlokBlock3Body';
  json: Scalars['JSON']['output'];
  links: ContentBlokBlock3BodyLinks;
};

export type ContentBlokBlock3BodyAssets = {
  __typename?: 'ContentBlokBlock3BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentBlokBlock3BodyEntries = {
  __typename?: 'ContentBlokBlock3BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentBlokBlock3BodyLinks = {
  __typename?: 'ContentBlokBlock3BodyLinks';
  assets: ContentBlokBlock3BodyAssets;
  entries: ContentBlokBlock3BodyEntries;
  resources: ContentBlokBlock3BodyResources;
};

export type ContentBlokBlock3BodyResources = {
  __typename?: 'ContentBlokBlock3BodyResources';
  block: Array<ContentBlokBlock3BodyResourcesBlock>;
  hyperlink: Array<ContentBlokBlock3BodyResourcesHyperlink>;
  inline: Array<ContentBlokBlock3BodyResourcesInline>;
};

export type ContentBlokBlock3BodyResourcesBlock = ResourceLink & {
  __typename?: 'ContentBlokBlock3BodyResourcesBlock';
  sys: ResourceSys;
};

export type ContentBlokBlock3BodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentBlokBlock3BodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentBlokBlock3BodyResourcesInline = ResourceLink & {
  __typename?: 'ContentBlokBlock3BodyResourcesInline';
  sys: ResourceSys;
};

export type ContentBlokCollection = {
  __typename?: 'ContentBlokCollection';
  items: Array<Maybe<ContentBlok>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentBlokFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentBlokFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentBlokFilter>>>;
  block1Body_contains?: InputMaybe<Scalars['String']['input']>;
  block1Body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block1Body_not_contains?: InputMaybe<Scalars['String']['input']>;
  block1Image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block2Body_contains?: InputMaybe<Scalars['String']['input']>;
  block2Body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block2Body_not_contains?: InputMaybe<Scalars['String']['input']>;
  block2Image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block3Body_contains?: InputMaybe<Scalars['String']['input']>;
  block3Body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block3Body_not_contains?: InputMaybe<Scalars['String']['input']>;
  block3Image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentBlokLinkingCollections = {
  __typename?: 'ContentBlokLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type ContentBlokLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentBlokLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<ContentBlokLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentBlokLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Enterprise Content Management [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokMetCta) */
export type ContentBlokMetCta = Entry & {
  __typename?: 'ContentBlokMetCta';
  blockBody?: Maybe<ContentBlokMetCtaBlockBody>;
  blockImage?: Maybe<Asset>;
  buttonLink?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContentBlokMetCtaLinkingCollections>;
  sys: Sys;
};

/** Enterprise Content Management [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokMetCta) */
export type ContentBlokMetCtaBlockBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Enterprise Content Management [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokMetCta) */
export type ContentBlokMetCtaBlockImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Enterprise Content Management [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokMetCta) */
export type ContentBlokMetCtaButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Enterprise Content Management [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokMetCta) */
export type ContentBlokMetCtaButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Enterprise Content Management [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokMetCta) */
export type ContentBlokMetCtaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentBlokMetCtaBlockBody = {
  __typename?: 'ContentBlokMetCtaBlockBody';
  json: Scalars['JSON']['output'];
  links: ContentBlokMetCtaBlockBodyLinks;
};

export type ContentBlokMetCtaBlockBodyAssets = {
  __typename?: 'ContentBlokMetCtaBlockBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentBlokMetCtaBlockBodyEntries = {
  __typename?: 'ContentBlokMetCtaBlockBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentBlokMetCtaBlockBodyLinks = {
  __typename?: 'ContentBlokMetCtaBlockBodyLinks';
  assets: ContentBlokMetCtaBlockBodyAssets;
  entries: ContentBlokMetCtaBlockBodyEntries;
  resources: ContentBlokMetCtaBlockBodyResources;
};

export type ContentBlokMetCtaBlockBodyResources = {
  __typename?: 'ContentBlokMetCtaBlockBodyResources';
  block: Array<ContentBlokMetCtaBlockBodyResourcesBlock>;
  hyperlink: Array<ContentBlokMetCtaBlockBodyResourcesHyperlink>;
  inline: Array<ContentBlokMetCtaBlockBodyResourcesInline>;
};

export type ContentBlokMetCtaBlockBodyResourcesBlock = ResourceLink & {
  __typename?: 'ContentBlokMetCtaBlockBodyResourcesBlock';
  sys: ResourceSys;
};

export type ContentBlokMetCtaBlockBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentBlokMetCtaBlockBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentBlokMetCtaBlockBodyResourcesInline = ResourceLink & {
  __typename?: 'ContentBlokMetCtaBlockBodyResourcesInline';
  sys: ResourceSys;
};

export type ContentBlokMetCtaCollection = {
  __typename?: 'ContentBlokMetCtaCollection';
  items: Array<Maybe<ContentBlokMetCta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentBlokMetCtaFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentBlokMetCtaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentBlokMetCtaFilter>>>;
  blockBody_contains?: InputMaybe<Scalars['String']['input']>;
  blockBody_exists?: InputMaybe<Scalars['Boolean']['input']>;
  blockBody_not_contains?: InputMaybe<Scalars['String']['input']>;
  blockImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type ContentBlokMetCtaLinkingCollections = {
  __typename?: 'ContentBlokMetCtaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type ContentBlokMetCtaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentBlokMetCtaLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<ContentBlokMetCtaLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentBlokMetCtaLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum ContentBlokMetCtaOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ContentBlokOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplit = Entry & {
  __typename?: 'ContentBlokSplit';
  backgroundColor?: Maybe<Scalars['String']['output']>;
  backgroundImage?: Maybe<Asset>;
  button1?: Maybe<ContentBlokSplitButton1>;
  buttonLink?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  fullWidth?: Maybe<Scalars['Boolean']['output']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ContentBlokSplitLinkingCollections>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  text?: Maybe<ContentBlokSplitText>;
  title?: Maybe<Scalars['String']['output']>;
  title2?: Maybe<Scalars['String']['output']>;
};

/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitButton1Args = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitFullWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitTitle2Args = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentBlokSplitButton1 = {
  __typename?: 'ContentBlokSplitButton1';
  json: Scalars['JSON']['output'];
  links: ContentBlokSplitButton1Links;
};

export type ContentBlokSplitButton1Assets = {
  __typename?: 'ContentBlokSplitButton1Assets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentBlokSplitButton1Entries = {
  __typename?: 'ContentBlokSplitButton1Entries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentBlokSplitButton1Links = {
  __typename?: 'ContentBlokSplitButton1Links';
  assets: ContentBlokSplitButton1Assets;
  entries: ContentBlokSplitButton1Entries;
  resources: ContentBlokSplitButton1Resources;
};

export type ContentBlokSplitButton1Resources = {
  __typename?: 'ContentBlokSplitButton1Resources';
  block: Array<ContentBlokSplitButton1ResourcesBlock>;
  hyperlink: Array<ContentBlokSplitButton1ResourcesHyperlink>;
  inline: Array<ContentBlokSplitButton1ResourcesInline>;
};

export type ContentBlokSplitButton1ResourcesBlock = ResourceLink & {
  __typename?: 'ContentBlokSplitButton1ResourcesBlock';
  sys: ResourceSys;
};

export type ContentBlokSplitButton1ResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentBlokSplitButton1ResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentBlokSplitButton1ResourcesInline = ResourceLink & {
  __typename?: 'ContentBlokSplitButton1ResourcesInline';
  sys: ResourceSys;
};

export type ContentBlokSplitCollection = {
  __typename?: 'ContentBlokSplitCollection';
  items: Array<Maybe<ContentBlokSplit>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentBlokSplitFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentBlokSplitFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentBlokSplitFilter>>>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  button1_contains?: InputMaybe<Scalars['String']['input']>;
  button1_exists?: InputMaybe<Scalars['Boolean']['input']>;
  button1_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fullWidth?: InputMaybe<Scalars['Boolean']['input']>;
  fullWidth_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fullWidth_not?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title2?: InputMaybe<Scalars['String']['input']>;
  title2_contains?: InputMaybe<Scalars['String']['input']>;
  title2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title2_not?: InputMaybe<Scalars['String']['input']>;
  title2_not_contains?: InputMaybe<Scalars['String']['input']>;
  title2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentBlokSplitLinkingCollections = {
  __typename?: 'ContentBlokSplitLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type ContentBlokSplitLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentBlokSplitLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<ContentBlokSplitLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentBlokSplitLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum ContentBlokSplitOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  FullWidthAsc = 'fullWidth_ASC',
  FullWidthDesc = 'fullWidth_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  Title2Asc = 'title2_ASC',
  Title2Desc = 'title2_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type ContentBlokSplitText = {
  __typename?: 'ContentBlokSplitText';
  json: Scalars['JSON']['output'];
  links: ContentBlokSplitTextLinks;
};

export type ContentBlokSplitTextAssets = {
  __typename?: 'ContentBlokSplitTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentBlokSplitTextEntries = {
  __typename?: 'ContentBlokSplitTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentBlokSplitTextLinks = {
  __typename?: 'ContentBlokSplitTextLinks';
  assets: ContentBlokSplitTextAssets;
  entries: ContentBlokSplitTextEntries;
  resources: ContentBlokSplitTextResources;
};

export type ContentBlokSplitTextResources = {
  __typename?: 'ContentBlokSplitTextResources';
  block: Array<ContentBlokSplitTextResourcesBlock>;
  hyperlink: Array<ContentBlokSplitTextResourcesHyperlink>;
  inline: Array<ContentBlokSplitTextResourcesInline>;
};

export type ContentBlokSplitTextResourcesBlock = ResourceLink & {
  __typename?: 'ContentBlokSplitTextResourcesBlock';
  sys: ResourceSys;
};

export type ContentBlokSplitTextResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentBlokSplitTextResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentBlokSplitTextResourcesInline = ResourceLink & {
  __typename?: 'ContentBlokSplitTextResourcesInline';
  sys: ResourceSys;
};

/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarousel = Entry & {
  __typename?: 'ContentCarousel';
  autoplay?: Maybe<Scalars['Boolean']['output']>;
  backgroundColor?: Maybe<Scalars['String']['output']>;
  block2Body?: Maybe<ContentCarouselBlock2Body>;
  block2Image?: Maybe<Asset>;
  block3Body?: Maybe<ContentCarouselBlock3Body>;
  block3Image?: Maybe<Asset>;
  blockBody?: Maybe<ContentCarouselBlockBody>;
  blockImage?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContentCarouselLinkingCollections>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};

/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselAutoplayArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock2BodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock2ImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock3BodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock3ImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlockBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlockImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentCarouselBlock2Body = {
  __typename?: 'ContentCarouselBlock2Body';
  json: Scalars['JSON']['output'];
  links: ContentCarouselBlock2BodyLinks;
};

export type ContentCarouselBlock2BodyAssets = {
  __typename?: 'ContentCarouselBlock2BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentCarouselBlock2BodyEntries = {
  __typename?: 'ContentCarouselBlock2BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentCarouselBlock2BodyLinks = {
  __typename?: 'ContentCarouselBlock2BodyLinks';
  assets: ContentCarouselBlock2BodyAssets;
  entries: ContentCarouselBlock2BodyEntries;
  resources: ContentCarouselBlock2BodyResources;
};

export type ContentCarouselBlock2BodyResources = {
  __typename?: 'ContentCarouselBlock2BodyResources';
  block: Array<ContentCarouselBlock2BodyResourcesBlock>;
  hyperlink: Array<ContentCarouselBlock2BodyResourcesHyperlink>;
  inline: Array<ContentCarouselBlock2BodyResourcesInline>;
};

export type ContentCarouselBlock2BodyResourcesBlock = ResourceLink & {
  __typename?: 'ContentCarouselBlock2BodyResourcesBlock';
  sys: ResourceSys;
};

export type ContentCarouselBlock2BodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentCarouselBlock2BodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentCarouselBlock2BodyResourcesInline = ResourceLink & {
  __typename?: 'ContentCarouselBlock2BodyResourcesInline';
  sys: ResourceSys;
};

export type ContentCarouselBlock3Body = {
  __typename?: 'ContentCarouselBlock3Body';
  json: Scalars['JSON']['output'];
  links: ContentCarouselBlock3BodyLinks;
};

export type ContentCarouselBlock3BodyAssets = {
  __typename?: 'ContentCarouselBlock3BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentCarouselBlock3BodyEntries = {
  __typename?: 'ContentCarouselBlock3BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentCarouselBlock3BodyLinks = {
  __typename?: 'ContentCarouselBlock3BodyLinks';
  assets: ContentCarouselBlock3BodyAssets;
  entries: ContentCarouselBlock3BodyEntries;
  resources: ContentCarouselBlock3BodyResources;
};

export type ContentCarouselBlock3BodyResources = {
  __typename?: 'ContentCarouselBlock3BodyResources';
  block: Array<ContentCarouselBlock3BodyResourcesBlock>;
  hyperlink: Array<ContentCarouselBlock3BodyResourcesHyperlink>;
  inline: Array<ContentCarouselBlock3BodyResourcesInline>;
};

export type ContentCarouselBlock3BodyResourcesBlock = ResourceLink & {
  __typename?: 'ContentCarouselBlock3BodyResourcesBlock';
  sys: ResourceSys;
};

export type ContentCarouselBlock3BodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentCarouselBlock3BodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentCarouselBlock3BodyResourcesInline = ResourceLink & {
  __typename?: 'ContentCarouselBlock3BodyResourcesInline';
  sys: ResourceSys;
};

export type ContentCarouselBlockBody = {
  __typename?: 'ContentCarouselBlockBody';
  json: Scalars['JSON']['output'];
  links: ContentCarouselBlockBodyLinks;
};

export type ContentCarouselBlockBodyAssets = {
  __typename?: 'ContentCarouselBlockBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContentCarouselBlockBodyEntries = {
  __typename?: 'ContentCarouselBlockBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContentCarouselBlockBodyLinks = {
  __typename?: 'ContentCarouselBlockBodyLinks';
  assets: ContentCarouselBlockBodyAssets;
  entries: ContentCarouselBlockBodyEntries;
  resources: ContentCarouselBlockBodyResources;
};

export type ContentCarouselBlockBodyResources = {
  __typename?: 'ContentCarouselBlockBodyResources';
  block: Array<ContentCarouselBlockBodyResourcesBlock>;
  hyperlink: Array<ContentCarouselBlockBodyResourcesHyperlink>;
  inline: Array<ContentCarouselBlockBodyResourcesInline>;
};

export type ContentCarouselBlockBodyResourcesBlock = ResourceLink & {
  __typename?: 'ContentCarouselBlockBodyResourcesBlock';
  sys: ResourceSys;
};

export type ContentCarouselBlockBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ContentCarouselBlockBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ContentCarouselBlockBodyResourcesInline = ResourceLink & {
  __typename?: 'ContentCarouselBlockBodyResourcesInline';
  sys: ResourceSys;
};

export type ContentCarouselCollection = {
  __typename?: 'ContentCarouselCollection';
  items: Array<Maybe<ContentCarousel>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentCarouselFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentCarouselFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentCarouselFilter>>>;
  autoplay?: InputMaybe<Scalars['Boolean']['input']>;
  autoplay_exists?: InputMaybe<Scalars['Boolean']['input']>;
  autoplay_not?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  block2Body_contains?: InputMaybe<Scalars['String']['input']>;
  block2Body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block2Body_not_contains?: InputMaybe<Scalars['String']['input']>;
  block2Image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block3Body_contains?: InputMaybe<Scalars['String']['input']>;
  block3Body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block3Body_not_contains?: InputMaybe<Scalars['String']['input']>;
  block3Image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  blockBody_contains?: InputMaybe<Scalars['String']['input']>;
  blockBody_exists?: InputMaybe<Scalars['Boolean']['input']>;
  blockBody_not_contains?: InputMaybe<Scalars['String']['input']>;
  blockImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentCarouselLinkingCollections = {
  __typename?: 'ContentCarouselLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type ContentCarouselLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ContentCarouselLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<ContentCarouselLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentCarouselLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum ContentCarouselOrder {
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenu = Entry & {
  __typename?: 'FooterMenu';
  contentfulMetadata: ContentfulMetadata;
  facebookLink?: Maybe<Scalars['String']['output']>;
  instagramLink?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  legalLinks?: Maybe<MenuGroup>;
  linkedFrom?: Maybe<FooterMenuLinkingCollections>;
  linkedinLink?: Maybe<Scalars['String']['output']>;
  menuItemsCollection?: Maybe<FooterMenuMenuItemsCollection>;
  sys: Sys;
  twitterLink?: Maybe<Scalars['String']['output']>;
};

/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuFacebookLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuInstagramLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuLegalLinksArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MenuGroupFilter>;
};

/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuLinkedinLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterMenuMenuItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuGroupFilter>;
};

/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuTwitterLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FooterMenuCollection = {
  __typename?: 'FooterMenuCollection';
  items: Array<Maybe<FooterMenu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FooterMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  facebookLink?: InputMaybe<Scalars['String']['input']>;
  facebookLink_contains?: InputMaybe<Scalars['String']['input']>;
  facebookLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  facebookLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  facebookLink_not?: InputMaybe<Scalars['String']['input']>;
  facebookLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  facebookLink_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  instagramLink?: InputMaybe<Scalars['String']['input']>;
  instagramLink_contains?: InputMaybe<Scalars['String']['input']>;
  instagramLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  instagramLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instagramLink_not?: InputMaybe<Scalars['String']['input']>;
  instagramLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  instagramLink_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  legalLinks?: InputMaybe<CfMenuGroupNestedFilter>;
  legalLinks_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkedinLink?: InputMaybe<Scalars['String']['input']>;
  linkedinLink_contains?: InputMaybe<Scalars['String']['input']>;
  linkedinLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkedinLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkedinLink_not?: InputMaybe<Scalars['String']['input']>;
  linkedinLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkedinLink_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  menuItems?: InputMaybe<CfMenuGroupNestedFilter>;
  menuItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  twitterLink?: InputMaybe<Scalars['String']['input']>;
  twitterLink_contains?: InputMaybe<Scalars['String']['input']>;
  twitterLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterLink_not?: InputMaybe<Scalars['String']['input']>;
  twitterLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterLink_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type FooterMenuLinkingCollections = {
  __typename?: 'FooterMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type FooterMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type FooterMenuMenuItemsCollection = {
  __typename?: 'FooterMenuMenuItemsCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FooterMenuMenuItemsCollectionOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum FooterMenuOrder {
  FacebookLinkAsc = 'facebookLink_ASC',
  FacebookLinkDesc = 'facebookLink_DESC',
  InstagramLinkAsc = 'instagramLink_ASC',
  InstagramLinkDesc = 'instagramLink_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkedinLinkAsc = 'linkedinLink_ASC',
  LinkedinLinkDesc = 'linkedinLink_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterLinkAsc = 'twitterLink_ASC',
  TwitterLinkDesc = 'twitterLink_DESC',
}

/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBanner = Entry & {
  __typename?: 'HeroBanner';
  backgroundImage?: Maybe<Asset>;
  buttonLink?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  fullWidth?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<HeroBannerLinkingCollections>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  test?: Maybe<Scalars['Int']['output']>;
  testmeer?: Maybe<Author>;
  title?: Maybe<Scalars['String']['output']>;
};

/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerFullWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerTestArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerTestmeerArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AuthorFilter>;
};

/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HeroBannerCollection = {
  __typename?: 'HeroBannerCollection';
  items: Array<Maybe<HeroBanner>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeroBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroBannerFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fullWidth?: InputMaybe<Scalars['Boolean']['input']>;
  fullWidth_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fullWidth_not?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  test?: InputMaybe<Scalars['Int']['input']>;
  test_exists?: InputMaybe<Scalars['Boolean']['input']>;
  test_gt?: InputMaybe<Scalars['Int']['input']>;
  test_gte?: InputMaybe<Scalars['Int']['input']>;
  test_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  test_lt?: InputMaybe<Scalars['Int']['input']>;
  test_lte?: InputMaybe<Scalars['Int']['input']>;
  test_not?: InputMaybe<Scalars['Int']['input']>;
  test_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  testmeer?: InputMaybe<CfAuthorNestedFilter>;
  testmeer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeroBannerLinkingCollections = {
  __typename?: 'HeroBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type HeroBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type HeroBannerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<HeroBannerLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeroBannerLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum HeroBannerOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  FullWidthAsc = 'fullWidth_ASC',
  FullWidthDesc = 'fullWidth_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestAsc = 'test_ASC',
  TestDesc = 'test_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Logo carousel [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/imageCarousel) */
export type ImageCarousel = Entry & {
  __typename?: 'ImageCarousel';
  autoplay?: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  imageCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<ImageCarouselLinkingCollections>;
  sys: Sys;
};

/** Logo carousel [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/imageCarousel) */
export type ImageCarouselAutoplayArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Logo carousel [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/imageCarousel) */
export type ImageCarouselImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

/** Logo carousel [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/imageCarousel) */
export type ImageCarouselLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImageCarouselCollection = {
  __typename?: 'ImageCarouselCollection';
  items: Array<Maybe<ImageCarousel>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ImageCarouselFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImageCarouselFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ImageCarouselFilter>>>;
  autoplay?: InputMaybe<Scalars['Boolean']['input']>;
  autoplay_exists?: InputMaybe<Scalars['Boolean']['input']>;
  autoplay_not?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ImageCarouselLinkingCollections = {
  __typename?: 'ImageCarouselLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type ImageCarouselLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageCarouselLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<ImageCarouselLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ImageCarouselLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum ImageCarouselOrder {
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroup = Entry & {
  __typename?: 'MenuGroup';
  contentfulMetadata: ContentfulMetadata;
  featuredPagesCollection?: Maybe<MenuGroupFeaturedPagesCollection>;
  groupLink?: Maybe<MenuGroupGroupLink>;
  groupName?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<MenuGroupLinkingCollections>;
  sys: Sys;
};

/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroupFeaturedPagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuGroupFeaturedPagesFilter>;
};

/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroupGroupLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MenuGroupGroupLinkFilter>;
};

/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroupGroupNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroupInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenuGroupCollection = {
  __typename?: 'MenuGroupCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MenuGroupFeaturedPagesCollection = {
  __typename?: 'MenuGroupFeaturedPagesCollection';
  items: Array<Maybe<MenuGroupFeaturedPagesItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MenuGroupFeaturedPagesFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuGroupFeaturedPagesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuGroupFeaturedPagesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSection?: InputMaybe<CfextraSectionMultiTypeNestedFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  pageContent?: InputMaybe<CfpageContentMultiTypeNestedFilter>;
  pageContentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topSection?: InputMaybe<CftopSectionMultiTypeNestedFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuGroupFeaturedPagesItem = Page;

export type MenuGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuGroupFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredPages?: InputMaybe<CffeaturedPagesMultiTypeNestedFilter>;
  featuredPagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupLink?: InputMaybe<CfgroupLinkMultiTypeNestedFilter>;
  groupLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupName?: InputMaybe<Scalars['String']['input']>;
  groupName_contains?: InputMaybe<Scalars['String']['input']>;
  groupName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupName_not?: InputMaybe<Scalars['String']['input']>;
  groupName_not_contains?: InputMaybe<Scalars['String']['input']>;
  groupName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  sys?: InputMaybe<SysFilter>;
};

export type MenuGroupGroupLink = Page;

export type MenuGroupGroupLinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuGroupGroupLinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuGroupGroupLinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSection?: InputMaybe<CfextraSectionMultiTypeNestedFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  pageContent?: InputMaybe<CfpageContentMultiTypeNestedFilter>;
  pageContentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topSection?: InputMaybe<CftopSectionMultiTypeNestedFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuGroupLinkingCollections = {
  __typename?: 'MenuGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerMenuCollection?: Maybe<FooterMenuCollection>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
};

export type MenuGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MenuGroupLinkingCollectionsFooterMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<MenuGroupLinkingCollectionsFooterMenuCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MenuGroupLinkingCollectionsNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<MenuGroupLinkingCollectionsNavigationMenuCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MenuGroupLinkingCollectionsFooterMenuCollectionOrder {
  FacebookLinkAsc = 'facebookLink_ASC',
  FacebookLinkDesc = 'facebookLink_DESC',
  InstagramLinkAsc = 'instagramLink_ASC',
  InstagramLinkDesc = 'instagramLink_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkedinLinkAsc = 'linkedinLink_ASC',
  LinkedinLinkDesc = 'linkedinLink_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterLinkAsc = 'twitterLink_ASC',
  TwitterLinkDesc = 'twitterLink_DESC',
}

export enum MenuGroupLinkingCollectionsNavigationMenuCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum MenuGroupOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationMenu) */
export type NavigationMenu = Entry & {
  __typename?: 'NavigationMenu';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<NavigationMenuLinkingCollections>;
  menuItemsCollection?: Maybe<NavigationMenuMenuItemsCollection>;
  sys: Sys;
};

/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationMenu) */
export type NavigationMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationMenu) */
export type NavigationMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationMenu) */
export type NavigationMenuMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationMenuMenuItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuGroupFilter>;
};

export type NavigationMenuCollection = {
  __typename?: 'NavigationMenuCollection';
  items: Array<Maybe<NavigationMenu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  menuItems?: InputMaybe<CfMenuGroupNestedFilter>;
  menuItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationMenuLinkingCollections = {
  __typename?: 'NavigationMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type NavigationMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type NavigationMenuMenuItemsCollection = {
  __typename?: 'NavigationMenuMenuItemsCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavigationMenuMenuItemsCollectionOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum NavigationMenuOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  contentfulMetadata: ContentfulMetadata;
  extraSectionCollection?: Maybe<PageExtraSectionCollection>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  pageContentCollection?: Maybe<PagePageContentCollection>;
  pageName?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  topSectionCollection?: Maybe<PageTopSectionCollection>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageExtraSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageExtraSectionFilter>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PagePageContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PagePageContentFilter>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PagePageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageTopSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageTopSectionFilter>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageExtraSectionCollection = {
  __typename?: 'PageExtraSectionCollection';
  items: Array<Maybe<PageExtraSectionItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageExtraSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageExtraSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageExtraSectionFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  sys?: InputMaybe<SysFilter>;
};

export type PageExtraSectionItem =
  | ComponentCta
  | ComponentDuplex
  | ComponentHeroBanner
  | ComponentInfoBlock
  | ComponentQuote;

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSection?: InputMaybe<CfextraSectionMultiTypeNestedFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  pageContent?: InputMaybe<CfpageContentMultiTypeNestedFilter>;
  pageContentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topSection?: InputMaybe<CftopSectionMultiTypeNestedFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  componentCtaCollection?: Maybe<ComponentCtaCollection>;
  componentDuplexCollection?: Maybe<ComponentDuplexCollection>;
  componentHeroBannerCollection?: Maybe<ComponentHeroBannerCollection>;
  entryCollection?: Maybe<EntryCollection>;
  menuGroupCollection?: Maybe<MenuGroupCollection>;
};

export type PageLinkingCollectionsComponentCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<PageLinkingCollectionsComponentCtaCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageLinkingCollectionsComponentDuplexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<PageLinkingCollectionsComponentDuplexCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageLinkingCollectionsComponentHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<PageLinkingCollectionsComponentHeroBannerCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type PageLinkingCollectionsMenuGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<PageLinkingCollectionsMenuGroupCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageLinkingCollectionsComponentCtaCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlParametersAsc = 'urlParameters_ASC',
  UrlParametersDesc = 'urlParameters_DESC',
}

export enum PageLinkingCollectionsComponentDuplexCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  ContainerLayoutAsc = 'containerLayout_ASC',
  ContainerLayoutDesc = 'containerLayout_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum PageLinkingCollectionsComponentHeroBannerCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  HeroSizeAsc = 'heroSize_ASC',
  HeroSizeDesc = 'heroSize_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum PageLinkingCollectionsMenuGroupCollectionOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum PageOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type PagePageContentCollection = {
  __typename?: 'PagePageContentCollection';
  items: Array<Maybe<PagePageContentItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PagePageContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<PagePageContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PagePageContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type PagePageContentItem =
  | ContentBlock
  | ContentBlok
  | ContentBlokMetCta
  | ContentBlokSplit
  | ContentCarousel
  | HeroBanner
  | ImageCarousel
  | TextBanner
  | Title;

export type PageTopSectionCollection = {
  __typename?: 'PageTopSectionCollection';
  items: Array<Maybe<PageTopSectionItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageTopSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageTopSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageTopSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type PageTopSectionItem =
  | ComponentCta
  | ComponentDuplex
  | ComponentHeroBanner
  | ComponentInfoBlock
  | ComponentQuote
  | HeroBanner;

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  author?: Maybe<Author>;
  authorCollection?: Maybe<AuthorCollection>;
  componentCta?: Maybe<ComponentCta>;
  componentCtaCollection?: Maybe<ComponentCtaCollection>;
  componentDemo?: Maybe<ComponentDemo>;
  componentDemoCollection?: Maybe<ComponentDemoCollection>;
  componentDuplex?: Maybe<ComponentDuplex>;
  componentDuplexCollection?: Maybe<ComponentDuplexCollection>;
  componentHeroBanner?: Maybe<ComponentHeroBanner>;
  componentHeroBannerCollection?: Maybe<ComponentHeroBannerCollection>;
  componentInfoBlock?: Maybe<ComponentInfoBlock>;
  componentInfoBlockCollection?: Maybe<ComponentInfoBlockCollection>;
  componentProductTable?: Maybe<ComponentProductTable>;
  componentProductTableCollection?: Maybe<ComponentProductTableCollection>;
  componentQuote?: Maybe<ComponentQuote>;
  componentQuoteCollection?: Maybe<ComponentQuoteCollection>;
  contentBlock?: Maybe<ContentBlock>;
  contentBlockCollection?: Maybe<ContentBlockCollection>;
  contentBlok?: Maybe<ContentBlok>;
  contentBlokCollection?: Maybe<ContentBlokCollection>;
  contentBlokMetCta?: Maybe<ContentBlokMetCta>;
  contentBlokMetCtaCollection?: Maybe<ContentBlokMetCtaCollection>;
  contentBlokSplit?: Maybe<ContentBlokSplit>;
  contentBlokSplitCollection?: Maybe<ContentBlokSplitCollection>;
  contentCarousel?: Maybe<ContentCarousel>;
  contentCarouselCollection?: Maybe<ContentCarouselCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerMenu?: Maybe<FooterMenu>;
  footerMenuCollection?: Maybe<FooterMenuCollection>;
  heroBanner?: Maybe<HeroBanner>;
  heroBannerCollection?: Maybe<HeroBannerCollection>;
  imageCarousel?: Maybe<ImageCarousel>;
  imageCarouselCollection?: Maybe<ImageCarouselCollection>;
  menuGroup?: Maybe<MenuGroup>;
  menuGroupCollection?: Maybe<MenuGroupCollection>;
  navigationMenu?: Maybe<NavigationMenu>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  seo?: Maybe<Seo>;
  seoCollection?: Maybe<SeoCollection>;
  textBanner?: Maybe<TextBanner>;
  textBannerCollection?: Maybe<TextBannerCollection>;
  title?: Maybe<Title>;
  titleCollection?: Maybe<TitleCollection>;
  topicPerson?: Maybe<TopicPerson>;
  topicPersonCollection?: Maybe<TopicPersonCollection>;
  topicProduct?: Maybe<TopicProduct>;
  topicProductCollection?: Maybe<TopicProductCollection>;
  topicProductFeature?: Maybe<TopicProductFeature>;
  topicProductFeatureCollection?: Maybe<TopicProductFeatureCollection>;
};

export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryAuthorArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AuthorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuthorFilter>;
};

export type QueryComponentCtaArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentCtaFilter>;
};

export type QueryComponentDemoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentDemoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentDemoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentDemoFilter>;
};

export type QueryComponentDuplexArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentDuplexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentDuplexOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentDuplexFilter>;
};

export type QueryComponentHeroBannerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentHeroBannerFilter>;
};

export type QueryComponentInfoBlockArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentInfoBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentInfoBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentInfoBlockFilter>;
};

export type QueryComponentProductTableArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentProductTableCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProductTableOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentProductTableFilter>;
};

export type QueryComponentQuoteArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryComponentQuoteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentQuoteOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ComponentQuoteFilter>;
};

export type QueryContentBlockArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryContentBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentBlockFilter>;
};

export type QueryContentBlokArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryContentBlokCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentBlokOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentBlokFilter>;
};

export type QueryContentBlokMetCtaArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryContentBlokMetCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentBlokMetCtaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentBlokMetCtaFilter>;
};

export type QueryContentBlokSplitArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryContentBlokSplitCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentBlokSplitOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentBlokSplitFilter>;
};

export type QueryContentCarouselArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryContentCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentCarouselOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentCarouselFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryFooterMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryFooterMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FooterMenuFilter>;
};

export type QueryHeroBannerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroBannerFilter>;
};

export type QueryImageCarouselArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryImageCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ImageCarouselOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ImageCarouselFilter>;
};

export type QueryMenuGroupArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryMenuGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuGroupFilter>;
};

export type QueryNavigationMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationMenuFilter>;
};

export type QueryPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageFilter>;
};

export type QuerySeoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuerySeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeoFilter>;
};

export type QueryTextBannerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryTextBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TextBannerFilter>;
};

export type QueryTitleArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryTitleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TitleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TitleFilter>;
};

export type QueryTopicPersonArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryTopicPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicPersonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TopicPersonFilter>;
};

export type QueryTopicProductArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryTopicProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TopicProductFilter>;
};

export type QueryTopicProductFeatureArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryTopicProductFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeatureOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TopicProductFeatureFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type Seo = Entry & {
  __typename?: 'Seo';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<SeoLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  noFollow?: Maybe<Scalars['Boolean']['output']>;
  noIndex?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoNoFollowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoNoIndexArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SeoCollection = {
  __typename?: 'SeoCollection';
  items: Array<Maybe<Seo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SeoLinkingCollections = {
  __typename?: 'SeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type SeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SeoLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<SeoLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SeoLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum SeoOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NoFollowAsc = 'noFollow_ASC',
  NoFollowDesc = 'noFollow_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<
    Array<InputMaybe<Scalars['Float']['input']>>
  >;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Float']['input']>>
  >;
};

/** A full width banner with title and description. [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/textBanner) */
export type TextBanner = Entry & {
  __typename?: 'TextBanner';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TextBannerLinkingCollections>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};

/** A full width banner with title and description. [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/textBanner) */
export type TextBannerDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** A full width banner with title and description. [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/textBanner) */
export type TextBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** A full width banner with title and description. [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/textBanner) */
export type TextBannerSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** A full width banner with title and description. [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/textBanner) */
export type TextBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TextBannerCollection = {
  __typename?: 'TextBannerCollection';
  items: Array<Maybe<TextBanner>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TextBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextBannerFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TextBannerLinkingCollections = {
  __typename?: 'TextBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type TextBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type TextBannerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<TextBannerLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TextBannerLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum TextBannerOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** How we help businesses with their digital growth [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/title) */
export type Title = Entry & {
  __typename?: 'Title';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TitleLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};

/** How we help businesses with their digital growth [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/title) */
export type TitleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** How we help businesses with their digital growth [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/title) */
export type TitleTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TitleCollection = {
  __typename?: 'TitleCollection';
  items: Array<Maybe<Title>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TitleFilter = {
  AND?: InputMaybe<Array<InputMaybe<TitleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TitleFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TitleLinkingCollections = {
  __typename?: 'TitleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type TitleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type TitleLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<TitleLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TitleLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum TitleOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPerson = Entry & {
  __typename?: 'TopicPerson';
  avatar?: Maybe<Asset>;
  bio?: Maybe<TopicPersonBio>;
  cardStyle?: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TopicPersonLinkingCollections>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  website?: Maybe<Scalars['String']['output']>;
};

/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPersonAvatarArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPersonBioArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPersonCardStyleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPersonInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPersonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPersonLocationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPersonNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPersonWebsiteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TopicPersonBio = {
  __typename?: 'TopicPersonBio';
  json: Scalars['JSON']['output'];
  links: TopicPersonBioLinks;
};

export type TopicPersonBioAssets = {
  __typename?: 'TopicPersonBioAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicPersonBioEntries = {
  __typename?: 'TopicPersonBioEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicPersonBioLinks = {
  __typename?: 'TopicPersonBioLinks';
  assets: TopicPersonBioAssets;
  entries: TopicPersonBioEntries;
  resources: TopicPersonBioResources;
};

export type TopicPersonBioResources = {
  __typename?: 'TopicPersonBioResources';
  block: Array<TopicPersonBioResourcesBlock>;
  hyperlink: Array<TopicPersonBioResourcesHyperlink>;
  inline: Array<TopicPersonBioResourcesInline>;
};

export type TopicPersonBioResourcesBlock = ResourceLink & {
  __typename?: 'TopicPersonBioResourcesBlock';
  sys: ResourceSys;
};

export type TopicPersonBioResourcesHyperlink = ResourceLink & {
  __typename?: 'TopicPersonBioResourcesHyperlink';
  sys: ResourceSys;
};

export type TopicPersonBioResourcesInline = ResourceLink & {
  __typename?: 'TopicPersonBioResourcesInline';
  sys: ResourceSys;
};

export type TopicPersonCollection = {
  __typename?: 'TopicPersonCollection';
  items: Array<Maybe<TopicPerson>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TopicPersonFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicPersonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicPersonFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bio_contains?: InputMaybe<Scalars['String']['input']>;
  bio_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bio_not_contains?: InputMaybe<Scalars['String']['input']>;
  cardStyle?: InputMaybe<Scalars['Boolean']['input']>;
  cardStyle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardStyle_not?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  location?: InputMaybe<Scalars['String']['input']>;
  location_contains?: InputMaybe<Scalars['String']['input']>;
  location_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location_not?: InputMaybe<Scalars['String']['input']>;
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  website?: InputMaybe<Scalars['String']['input']>;
  website_contains?: InputMaybe<Scalars['String']['input']>;
  website_exists?: InputMaybe<Scalars['Boolean']['input']>;
  website_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  website_not?: InputMaybe<Scalars['String']['input']>;
  website_not_contains?: InputMaybe<Scalars['String']['input']>;
  website_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TopicPersonLinkingCollections = {
  __typename?: 'TopicPersonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type TopicPersonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TopicPersonOrder {
  CardStyleAsc = 'cardStyle_ASC',
  CardStyleDesc = 'cardStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
}

/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProduct) */
export type TopicProduct = Entry & {
  __typename?: 'TopicProduct';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<TopicProductDescription>;
  featuredImage?: Maybe<Asset>;
  featuresCollection?: Maybe<TopicProductFeaturesCollection>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TopicProductLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sys: Sys;
};

/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProduct) */
export type TopicProductDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProduct) */
export type TopicProductFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProduct) */
export type TopicProductFeaturesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeaturesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TopicProductFeatureFilter>;
};

/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProduct) */
export type TopicProductInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProduct) */
export type TopicProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProduct) */
export type TopicProductNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProduct) */
export type TopicProductPriceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TopicProductCollection = {
  __typename?: 'TopicProductCollection';
  items: Array<Maybe<TopicProduct>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TopicProductDescription = {
  __typename?: 'TopicProductDescription';
  json: Scalars['JSON']['output'];
  links: TopicProductDescriptionLinks;
};

export type TopicProductDescriptionAssets = {
  __typename?: 'TopicProductDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicProductDescriptionEntries = {
  __typename?: 'TopicProductDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicProductDescriptionLinks = {
  __typename?: 'TopicProductDescriptionLinks';
  assets: TopicProductDescriptionAssets;
  entries: TopicProductDescriptionEntries;
  resources: TopicProductDescriptionResources;
};

export type TopicProductDescriptionResources = {
  __typename?: 'TopicProductDescriptionResources';
  block: Array<TopicProductDescriptionResourcesBlock>;
  hyperlink: Array<TopicProductDescriptionResourcesHyperlink>;
  inline: Array<TopicProductDescriptionResourcesInline>;
};

export type TopicProductDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'TopicProductDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type TopicProductDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'TopicProductDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type TopicProductDescriptionResourcesInline = ResourceLink & {
  __typename?: 'TopicProductDescriptionResourcesInline';
  sys: ResourceSys;
};

/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProductFeature) */
export type TopicProductFeature = Entry & {
  __typename?: 'TopicProductFeature';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TopicProductFeatureLinkingCollections>;
  longDescription?: Maybe<TopicProductFeatureLongDescription>;
  name?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<TopicProductFeatureShortDescription>;
  sys: Sys;
};

/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProductFeature) */
export type TopicProductFeatureInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProductFeature) */
export type TopicProductFeatureLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProductFeature) */
export type TopicProductFeatureLongDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProductFeature) */
export type TopicProductFeatureNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProductFeature) */
export type TopicProductFeatureShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TopicProductFeatureCollection = {
  __typename?: 'TopicProductFeatureCollection';
  items: Array<Maybe<TopicProductFeature>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TopicProductFeatureFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicProductFeatureFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicProductFeatureFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  longDescription_contains?: InputMaybe<Scalars['String']['input']>;
  longDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type TopicProductFeatureLinkingCollections = {
  __typename?: 'TopicProductFeatureLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  topicProductCollection?: Maybe<TopicProductCollection>;
};

export type TopicProductFeatureLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type TopicProductFeatureLinkingCollectionsTopicProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<
      InputMaybe<TopicProductFeatureLinkingCollectionsTopicProductCollectionOrder>
    >
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TopicProductFeatureLinkingCollectionsTopicProductCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type TopicProductFeatureLongDescription = {
  __typename?: 'TopicProductFeatureLongDescription';
  json: Scalars['JSON']['output'];
  links: TopicProductFeatureLongDescriptionLinks;
};

export type TopicProductFeatureLongDescriptionAssets = {
  __typename?: 'TopicProductFeatureLongDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicProductFeatureLongDescriptionEntries = {
  __typename?: 'TopicProductFeatureLongDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicProductFeatureLongDescriptionLinks = {
  __typename?: 'TopicProductFeatureLongDescriptionLinks';
  assets: TopicProductFeatureLongDescriptionAssets;
  entries: TopicProductFeatureLongDescriptionEntries;
  resources: TopicProductFeatureLongDescriptionResources;
};

export type TopicProductFeatureLongDescriptionResources = {
  __typename?: 'TopicProductFeatureLongDescriptionResources';
  block: Array<TopicProductFeatureLongDescriptionResourcesBlock>;
  hyperlink: Array<TopicProductFeatureLongDescriptionResourcesHyperlink>;
  inline: Array<TopicProductFeatureLongDescriptionResourcesInline>;
};

export type TopicProductFeatureLongDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'TopicProductFeatureLongDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type TopicProductFeatureLongDescriptionResourcesHyperlink =
  ResourceLink & {
    __typename?: 'TopicProductFeatureLongDescriptionResourcesHyperlink';
    sys: ResourceSys;
  };

export type TopicProductFeatureLongDescriptionResourcesInline = ResourceLink & {
  __typename?: 'TopicProductFeatureLongDescriptionResourcesInline';
  sys: ResourceSys;
};

export enum TopicProductFeatureOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type TopicProductFeatureShortDescription = {
  __typename?: 'TopicProductFeatureShortDescription';
  json: Scalars['JSON']['output'];
  links: TopicProductFeatureShortDescriptionLinks;
};

export type TopicProductFeatureShortDescriptionAssets = {
  __typename?: 'TopicProductFeatureShortDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicProductFeatureShortDescriptionEntries = {
  __typename?: 'TopicProductFeatureShortDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicProductFeatureShortDescriptionLinks = {
  __typename?: 'TopicProductFeatureShortDescriptionLinks';
  assets: TopicProductFeatureShortDescriptionAssets;
  entries: TopicProductFeatureShortDescriptionEntries;
  resources: TopicProductFeatureShortDescriptionResources;
};

export type TopicProductFeatureShortDescriptionResources = {
  __typename?: 'TopicProductFeatureShortDescriptionResources';
  block: Array<TopicProductFeatureShortDescriptionResourcesBlock>;
  hyperlink: Array<TopicProductFeatureShortDescriptionResourcesHyperlink>;
  inline: Array<TopicProductFeatureShortDescriptionResourcesInline>;
};

export type TopicProductFeatureShortDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'TopicProductFeatureShortDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type TopicProductFeatureShortDescriptionResourcesHyperlink =
  ResourceLink & {
    __typename?: 'TopicProductFeatureShortDescriptionResourcesHyperlink';
    sys: ResourceSys;
  };

export type TopicProductFeatureShortDescriptionResourcesInline =
  ResourceLink & {
    __typename?: 'TopicProductFeatureShortDescriptionResourcesInline';
    sys: ResourceSys;
  };

export type TopicProductFeaturesCollection = {
  __typename?: 'TopicProductFeaturesCollection';
  items: Array<Maybe<TopicProductFeature>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TopicProductFeaturesCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type TopicProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicProductFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  features?: InputMaybe<CfTopicProductFeatureNestedFilter>;
  featuresCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  price_gt?: InputMaybe<Scalars['Float']['input']>;
  price_gte?: InputMaybe<Scalars['Float']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  price_lt?: InputMaybe<Scalars['Float']['input']>;
  price_lte?: InputMaybe<Scalars['Float']['input']>;
  price_not?: InputMaybe<Scalars['Float']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TopicProductLinkingCollections = {
  __typename?: 'TopicProductLinkingCollections';
  componentProductTableCollection?: Maybe<ComponentProductTableCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type TopicProductLinkingCollectionsComponentProductTableCollectionArgs =
  {
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Scalars['String']['input']>;
    order?: InputMaybe<
      Array<
        InputMaybe<TopicProductLinkingCollectionsComponentProductTableCollectionOrder>
      >
    >;
    preview?: InputMaybe<Scalars['Boolean']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
  };

export type TopicProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TopicProductLinkingCollectionsComponentProductTableCollectionOrder {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum TopicProductOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfMenuGroupNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfMenuGroupNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMenuGroupNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredPagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupName?: InputMaybe<Scalars['String']['input']>;
  groupName_contains?: InputMaybe<Scalars['String']['input']>;
  groupName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupName_not?: InputMaybe<Scalars['String']['input']>;
  groupName_not_contains?: InputMaybe<Scalars['String']['input']>;
  groupName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  sys?: InputMaybe<SysFilter>;
};

export type CfSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfTopicProductFeatureNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTopicProductFeatureNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTopicProductFeatureNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  longDescription_contains?: InputMaybe<Scalars['String']['input']>;
  longDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfTopicProductNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTopicProductNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTopicProductNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featuresCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  price_gt?: InputMaybe<Scalars['Float']['input']>;
  price_gte?: InputMaybe<Scalars['Float']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  price_lt?: InputMaybe<Scalars['Float']['input']>;
  price_lte?: InputMaybe<Scalars['Float']['input']>;
  price_not?: InputMaybe<Scalars['Float']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfextraSectionMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfextraSectionMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfextraSectionMultiTypeNestedFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  sys?: InputMaybe<SysFilter>;
};

export type CffeaturedPagesMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CffeaturedPagesMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CffeaturedPagesMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  pageContentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfgroupLinkMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfgroupLinkMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfgroupLinkMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  pageContentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfpageContentMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfpageContentMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfpageContentMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type CftopSectionMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CftopSectionMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CftopSectionMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type TextBannerFieldsFragment = {
  __typename: 'TextBanner';
  title?: string | null;
  description?: string | null;
  sys: { __typename?: 'Sys'; id: string };
};

export type CtfTextBannerQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type CtfTextBannerQuery = {
  __typename?: 'Query';
  textBanner?: {
    __typename: 'TextBanner';
    title?: string | null;
    description?: string | null;
    sys: { __typename?: 'Sys'; id: string };
  } | null;
};
