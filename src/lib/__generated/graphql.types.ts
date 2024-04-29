export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
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
  languageMetadataCollection?: Maybe<LanguageMetadataCollection>;
  seoCollection?: Maybe<SeoCollection>;
  topicPersonCollection?: Maybe<TopicPersonCollection>;
  topicProductCollection?: Maybe<TopicProductCollection>;
};


export type AssetLinkingCollectionsAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentDuplexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentInfoBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentQuoteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsContentBlokCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsContentBlokMetCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsContentBlokSplitCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsContentCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsImageCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsLanguageMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsTopicPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsTopicProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/author) */
export type Author = Entry & {
  __typename?: 'Author';
  avatar?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AuthorLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/author) */
export type AuthorAvatarArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/author) */
export type AuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/author) */
export type AuthorNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AuthorCollection = {
  __typename?: 'AuthorCollection';
  items: Array<Maybe<Author>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AuthorLinkingCollections = {
  __typename?: 'AuthorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  heroBannerCollection?: Maybe<HeroBannerCollection>;
};


export type AuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AuthorLinkingCollectionsHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AuthorLinkingCollectionsHeroBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AuthorLinkingCollectionsHeroBannerCollectionOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  FullWidthAsc = 'fullWidth_ASC',
  FullWidthDesc = 'fullWidth_DESC',
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
  TestAsc = 'test_ASC',
  TestDesc = 'test_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCta = Entry & {
  __typename?: 'ComponentCta';
  colorPalette?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentCtaLinkingCollections>;
  subline?: Maybe<ComponentCtaSubline>;
  sys: Sys;
  targetPage?: Maybe<ComponentCtaTargetPage>;
  urlParameters?: Maybe<Scalars['String']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCtaColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCtaCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCtaHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCtaInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCtaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCtaSublineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCtaTargetPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentCta) */
export type ComponentCtaUrlParametersArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentCtaCollection = {
  __typename?: 'ComponentCtaCollection';
  items: Array<Maybe<ComponentCta>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentCtaFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentCtaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentCtaFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']>;
  ctaText_contains?: InputMaybe<Scalars['String']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaText_not?: InputMaybe<Scalars['String']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subline_contains?: InputMaybe<Scalars['String']>;
  subline_exists?: InputMaybe<Scalars['Boolean']>;
  subline_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  targetPage_exists?: InputMaybe<Scalars['Boolean']>;
  urlParameters?: InputMaybe<Scalars['String']>;
  urlParameters_contains?: InputMaybe<Scalars['String']>;
  urlParameters_exists?: InputMaybe<Scalars['Boolean']>;
  urlParameters_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  urlParameters_not?: InputMaybe<Scalars['String']>;
  urlParameters_not_contains?: InputMaybe<Scalars['String']>;
  urlParameters_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentCtaLinkingCollections = {
  __typename?: 'ComponentCtaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentCtaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentCtaLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC'
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
  UrlParametersDesc = 'urlParameters_DESC'
}

export type ComponentCtaSubline = {
  __typename?: 'ComponentCtaSubline';
  json: Scalars['JSON'];
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

/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplex = Entry & {
  __typename?: 'ComponentDuplex';
  bodyText?: Maybe<ComponentDuplexBodyText>;
  colorPalette?: Maybe<Scalars['String']>;
  containerLayout?: Maybe<Scalars['Boolean']>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  imageStyle?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentDuplexLinkingCollections>;
  sys: Sys;
  targetPage?: Maybe<ComponentDuplexTargetPage>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexBodyTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexContainerLayoutArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexImageStyleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentDuplex) */
export type ComponentDuplexTargetPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentDuplexBodyText = {
  __typename?: 'ComponentDuplexBodyText';
  json: Scalars['JSON'];
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
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentDuplexFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentDuplexFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentDuplexFilter>>>;
  bodyText_contains?: InputMaybe<Scalars['String']>;
  bodyText_exists?: InputMaybe<Scalars['Boolean']>;
  bodyText_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  containerLayout?: InputMaybe<Scalars['Boolean']>;
  containerLayout_exists?: InputMaybe<Scalars['Boolean']>;
  containerLayout_not?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']>;
  ctaText_contains?: InputMaybe<Scalars['String']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaText_not?: InputMaybe<Scalars['String']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageStyle?: InputMaybe<Scalars['Boolean']>;
  imageStyle_exists?: InputMaybe<Scalars['Boolean']>;
  imageStyle_not?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  targetPage_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentDuplexLinkingCollections = {
  __typename?: 'ComponentDuplexLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentDuplexLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentDuplexLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentDuplexLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC'
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentDuplexTargetPage = Page;

/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBanner = Entry & {
  __typename?: 'ComponentHeroBanner';
  bodyText?: Maybe<ComponentHeroBannerBodyText>;
  colorPalette?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  heroSize?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Asset>;
  imageStyle?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentHeroBannerLinkingCollections>;
  sys: Sys;
  targetPage?: Maybe<ComponentHeroBannerTargetPage>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerBodyTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerHeroSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerImageStyleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentHeroBanner) */
export type ComponentHeroBannerTargetPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentHeroBannerBodyText = {
  __typename?: 'ComponentHeroBannerBodyText';
  json: Scalars['JSON'];
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
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentHeroBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentHeroBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentHeroBannerFilter>>>;
  bodyText_contains?: InputMaybe<Scalars['String']>;
  bodyText_exists?: InputMaybe<Scalars['Boolean']>;
  bodyText_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']>;
  ctaText_contains?: InputMaybe<Scalars['String']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaText_not?: InputMaybe<Scalars['String']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroSize?: InputMaybe<Scalars['Boolean']>;
  heroSize_exists?: InputMaybe<Scalars['Boolean']>;
  heroSize_not?: InputMaybe<Scalars['Boolean']>;
  imageStyle?: InputMaybe<Scalars['Boolean']>;
  imageStyle_exists?: InputMaybe<Scalars['Boolean']>;
  imageStyle_not?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  targetPage_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentHeroBannerLinkingCollections = {
  __typename?: 'ComponentHeroBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentHeroBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentHeroBannerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroBannerLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC'
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
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
  colorPalette?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentInfoBlockLinkingCollections>;
  subline?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock1BodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock1ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock2BodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock2ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock3BodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock3ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentInfoBlock) */
export type ComponentInfoBlockSublineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentInfoBlockBlock1Body = {
  __typename?: 'ComponentInfoBlockBlock1Body';
  json: Scalars['JSON'];
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
  json: Scalars['JSON'];
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
  json: Scalars['JSON'];
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
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentInfoBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentInfoBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentInfoBlockFilter>>>;
  block1Body_contains?: InputMaybe<Scalars['String']>;
  block1Body_exists?: InputMaybe<Scalars['Boolean']>;
  block1Body_not_contains?: InputMaybe<Scalars['String']>;
  block1Image_exists?: InputMaybe<Scalars['Boolean']>;
  block2Body_contains?: InputMaybe<Scalars['String']>;
  block2Body_exists?: InputMaybe<Scalars['Boolean']>;
  block2Body_not_contains?: InputMaybe<Scalars['String']>;
  block2Image_exists?: InputMaybe<Scalars['Boolean']>;
  block3Body_contains?: InputMaybe<Scalars['String']>;
  block3Body_exists?: InputMaybe<Scalars['Boolean']>;
  block3Body_not_contains?: InputMaybe<Scalars['String']>;
  block3Image_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subline?: InputMaybe<Scalars['String']>;
  subline_contains?: InputMaybe<Scalars['String']>;
  subline_exists?: InputMaybe<Scalars['Boolean']>;
  subline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subline_not?: InputMaybe<Scalars['String']>;
  subline_not_contains?: InputMaybe<Scalars['String']>;
  subline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentInfoBlockLinkingCollections = {
  __typename?: 'ComponentInfoBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentInfoBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentInfoBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentInfoBlockLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC'
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentProductTable) */
export type ComponentProductTable = Entry & {
  __typename?: 'ComponentProductTable';
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentProductTableLinkingCollections>;
  productsCollection?: Maybe<ComponentProductTableProductsCollection>;
  subline?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentProductTable) */
export type ComponentProductTableHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentProductTable) */
export type ComponentProductTableInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentProductTable) */
export type ComponentProductTableLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentProductTable) */
export type ComponentProductTableProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProductTableProductsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicProductFilter>;
};


/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentProductTable) */
export type ComponentProductTableSublineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentProductTableCollection = {
  __typename?: 'ComponentProductTableCollection';
  items: Array<Maybe<ComponentProductTable>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentProductTableFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentProductTableFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentProductTableFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  products?: InputMaybe<CfTopicProductNestedFilter>;
  productsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  subline?: InputMaybe<Scalars['String']>;
  subline_contains?: InputMaybe<Scalars['String']>;
  subline_exists?: InputMaybe<Scalars['Boolean']>;
  subline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subline_not?: InputMaybe<Scalars['String']>;
  subline_not_contains?: InputMaybe<Scalars['String']>;
  subline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentProductTableLinkingCollections = {
  __typename?: 'ComponentProductTableLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentProductTableLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentProductTableProductsCollection = {
  __typename?: 'ComponentProductTableProductsCollection';
  items: Array<Maybe<TopicProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentQuote) */
export type ComponentQuote = Entry & {
  __typename?: 'ComponentQuote';
  colorPalette?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  imagePosition?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentQuoteLinkingCollections>;
  quote?: Maybe<ComponentQuoteQuote>;
  quoteAlignment?: Maybe<Scalars['Boolean']>;
  sys: Sys;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentQuote) */
export type ComponentQuoteColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentQuote) */
export type ComponentQuoteImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentQuote) */
export type ComponentQuoteImagePositionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentQuote) */
export type ComponentQuoteInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentQuote) */
export type ComponentQuoteLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentQuote) */
export type ComponentQuoteQuoteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/componentQuote) */
export type ComponentQuoteQuoteAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentQuoteCollection = {
  __typename?: 'ComponentQuoteCollection';
  items: Array<Maybe<ComponentQuote>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentQuoteFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentQuoteFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentQuoteFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imagePosition?: InputMaybe<Scalars['Boolean']>;
  imagePosition_exists?: InputMaybe<Scalars['Boolean']>;
  imagePosition_not?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  quoteAlignment?: InputMaybe<Scalars['Boolean']>;
  quoteAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  quoteAlignment_not?: InputMaybe<Scalars['Boolean']>;
  quote_contains?: InputMaybe<Scalars['String']>;
  quote_exists?: InputMaybe<Scalars['Boolean']>;
  quote_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentQuoteLinkingCollections = {
  __typename?: 'ComponentQuoteLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentQuoteLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentQuoteLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentQuoteLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC'
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentQuoteQuote = {
  __typename?: 'ComponentQuoteQuote';
  json: Scalars['JSON'];
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
  contentBlockCtaCollection?: Maybe<ContentBlockContentBlockCtaCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContentBlockLinkingCollections>;
  sys: Sys;
  testField?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlock) */
export type ContentBlockContentBlockCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlock) */
export type ContentBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlock) */
export type ContentBlockTestFieldArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentBlockCollection = {
  __typename?: 'ContentBlockCollection';
  items: Array<Maybe<ContentBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContentBlockContentBlockCtaCollection = {
  __typename?: 'ContentBlockContentBlockCtaCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContentBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentBlockFilter>>>;
  contentBlockCtaCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  testField?: InputMaybe<Scalars['String']>;
  testField_contains?: InputMaybe<Scalars['String']>;
  testField_exists?: InputMaybe<Scalars['Boolean']>;
  testField_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testField_not?: InputMaybe<Scalars['String']>;
  testField_not_contains?: InputMaybe<Scalars['String']>;
  testField_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentBlockLinkingCollections = {
  __typename?: 'ContentBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ContentBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentBlockLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC'
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
  TestFieldAsc = 'testField_ASC',
  TestFieldDesc = 'testField_DESC'
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
  buttonLink?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContentBlokLinkingCollections>;
  subtitle?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokBlock1BodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokBlock1ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokBlock2BodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokBlock2ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokBlock3BodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokBlock3ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Join us! [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlok) */
export type ContentBlokTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentBlokBlock1Body = {
  __typename?: 'ContentBlokBlock1Body';
  json: Scalars['JSON'];
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
  json: Scalars['JSON'];
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
  json: Scalars['JSON'];
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
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContentBlokFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentBlokFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentBlokFilter>>>;
  block1Body_contains?: InputMaybe<Scalars['String']>;
  block1Body_exists?: InputMaybe<Scalars['Boolean']>;
  block1Body_not_contains?: InputMaybe<Scalars['String']>;
  block1Image_exists?: InputMaybe<Scalars['Boolean']>;
  block2Body_contains?: InputMaybe<Scalars['String']>;
  block2Body_exists?: InputMaybe<Scalars['Boolean']>;
  block2Body_not_contains?: InputMaybe<Scalars['String']>;
  block2Image_exists?: InputMaybe<Scalars['Boolean']>;
  block3Body_contains?: InputMaybe<Scalars['String']>;
  block3Body_exists?: InputMaybe<Scalars['Boolean']>;
  block3Body_not_contains?: InputMaybe<Scalars['String']>;
  block3Image_exists?: InputMaybe<Scalars['Boolean']>;
  buttonLink?: InputMaybe<Scalars['String']>;
  buttonLink_contains?: InputMaybe<Scalars['String']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentBlokLinkingCollections = {
  __typename?: 'ContentBlokLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ContentBlokLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentBlokLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentBlokLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC'
}

/** Enterprise Content Management [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokMetCta) */
export type ContentBlokMetCta = Entry & {
  __typename?: 'ContentBlokMetCta';
  blockBody?: Maybe<ContentBlokMetCtaBlockBody>;
  blockImage?: Maybe<Asset>;
  blockTitle?: Maybe<Scalars['String']>;
  buttonLink?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContentBlokMetCtaLinkingCollections>;
  sys: Sys;
};


/** Enterprise Content Management [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokMetCta) */
export type ContentBlokMetCtaBlockBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Enterprise Content Management [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokMetCta) */
export type ContentBlokMetCtaBlockImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Enterprise Content Management [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokMetCta) */
export type ContentBlokMetCtaBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Enterprise Content Management [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokMetCta) */
export type ContentBlokMetCtaButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Enterprise Content Management [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokMetCta) */
export type ContentBlokMetCtaButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Enterprise Content Management [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokMetCta) */
export type ContentBlokMetCtaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentBlokMetCtaBlockBody = {
  __typename?: 'ContentBlokMetCtaBlockBody';
  json: Scalars['JSON'];
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
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContentBlokMetCtaFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentBlokMetCtaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentBlokMetCtaFilter>>>;
  blockBody_contains?: InputMaybe<Scalars['String']>;
  blockBody_exists?: InputMaybe<Scalars['Boolean']>;
  blockBody_not_contains?: InputMaybe<Scalars['String']>;
  blockImage_exists?: InputMaybe<Scalars['Boolean']>;
  blockTitle?: InputMaybe<Scalars['String']>;
  blockTitle_contains?: InputMaybe<Scalars['String']>;
  blockTitle_exists?: InputMaybe<Scalars['Boolean']>;
  blockTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blockTitle_not?: InputMaybe<Scalars['String']>;
  blockTitle_not_contains?: InputMaybe<Scalars['String']>;
  blockTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLink?: InputMaybe<Scalars['String']>;
  buttonLink_contains?: InputMaybe<Scalars['String']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type ContentBlokMetCtaLinkingCollections = {
  __typename?: 'ContentBlokMetCtaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ContentBlokMetCtaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentBlokMetCtaLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentBlokMetCtaLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC'
}

export enum ContentBlokMetCtaOrder {
  BlockTitleAsc = 'blockTitle_ASC',
  BlockTitleDesc = 'blockTitle_DESC',
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
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
  TitleDesc = 'title_DESC'
}

/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplit = Entry & {
  __typename?: 'ContentBlokSplit';
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<Asset>;
  button1?: Maybe<ContentBlokSplitButton1>;
  buttonLink?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  fullWidth?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ContentBlokSplitLinkingCollections>;
  subtitle?: Maybe<Scalars['String']>;
  sys: Sys;
  text?: Maybe<ContentBlokSplitText>;
  title?: Maybe<Scalars['String']>;
  title2?: Maybe<Scalars['String']>;
};


/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitButton1Args = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitFullWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Expert advice [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentBlokSplit) */
export type ContentBlokSplitTitle2Args = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentBlokSplitButton1 = {
  __typename?: 'ContentBlokSplitButton1';
  json: Scalars['JSON'];
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
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContentBlokSplitFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentBlokSplitFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentBlokSplitFilter>>>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']>;
  button1_contains?: InputMaybe<Scalars['String']>;
  button1_exists?: InputMaybe<Scalars['Boolean']>;
  button1_not_contains?: InputMaybe<Scalars['String']>;
  buttonLink?: InputMaybe<Scalars['String']>;
  buttonLink_contains?: InputMaybe<Scalars['String']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fullWidth?: InputMaybe<Scalars['Boolean']>;
  fullWidth_exists?: InputMaybe<Scalars['Boolean']>;
  fullWidth_not?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title2?: InputMaybe<Scalars['String']>;
  title2_contains?: InputMaybe<Scalars['String']>;
  title2_exists?: InputMaybe<Scalars['Boolean']>;
  title2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title2_not?: InputMaybe<Scalars['String']>;
  title2_not_contains?: InputMaybe<Scalars['String']>;
  title2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentBlokSplitLinkingCollections = {
  __typename?: 'ContentBlokSplitLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ContentBlokSplitLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentBlokSplitLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentBlokSplitLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC'
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
  TitleDesc = 'title_DESC'
}

export type ContentBlokSplitText = {
  __typename?: 'ContentBlokSplitText';
  json: Scalars['JSON'];
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
  autoplay?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  block2Body?: Maybe<ContentCarouselBlock2Body>;
  block2Image?: Maybe<Asset>;
  block2JobTitle?: Maybe<Scalars['String']>;
  block2Name?: Maybe<Scalars['String']>;
  block3Body?: Maybe<ContentCarouselBlock3Body>;
  block3Image?: Maybe<Asset>;
  block3JobTitle?: Maybe<Scalars['String']>;
  block3Name?: Maybe<Scalars['String']>;
  blockBody?: Maybe<ContentCarouselBlockBody>;
  blockImage?: Maybe<Asset>;
  blockJobTitle?: Maybe<Scalars['String']>;
  blockName?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContentCarouselLinkingCollections>;
  subtitle?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselAutoplayArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock2BodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock2ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock2JobTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock2NameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock3BodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock3ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock3JobTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlock3NameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlockBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlockImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlockJobTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselBlockNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Why AmeXio [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/contentCarousel) */
export type ContentCarouselTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentCarouselBlock2Body = {
  __typename?: 'ContentCarouselBlock2Body';
  json: Scalars['JSON'];
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
  json: Scalars['JSON'];
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
  json: Scalars['JSON'];
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
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ContentCarouselFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentCarouselFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentCarouselFilter>>>;
  autoplay?: InputMaybe<Scalars['Boolean']>;
  autoplay_exists?: InputMaybe<Scalars['Boolean']>;
  autoplay_not?: InputMaybe<Scalars['Boolean']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  block2Body_contains?: InputMaybe<Scalars['String']>;
  block2Body_exists?: InputMaybe<Scalars['Boolean']>;
  block2Body_not_contains?: InputMaybe<Scalars['String']>;
  block2Image_exists?: InputMaybe<Scalars['Boolean']>;
  block2JobTitle?: InputMaybe<Scalars['String']>;
  block2JobTitle_contains?: InputMaybe<Scalars['String']>;
  block2JobTitle_exists?: InputMaybe<Scalars['Boolean']>;
  block2JobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  block2JobTitle_not?: InputMaybe<Scalars['String']>;
  block2JobTitle_not_contains?: InputMaybe<Scalars['String']>;
  block2JobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  block2Name?: InputMaybe<Scalars['String']>;
  block2Name_contains?: InputMaybe<Scalars['String']>;
  block2Name_exists?: InputMaybe<Scalars['Boolean']>;
  block2Name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  block2Name_not?: InputMaybe<Scalars['String']>;
  block2Name_not_contains?: InputMaybe<Scalars['String']>;
  block2Name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  block3Body_contains?: InputMaybe<Scalars['String']>;
  block3Body_exists?: InputMaybe<Scalars['Boolean']>;
  block3Body_not_contains?: InputMaybe<Scalars['String']>;
  block3Image_exists?: InputMaybe<Scalars['Boolean']>;
  block3JobTitle?: InputMaybe<Scalars['String']>;
  block3JobTitle_contains?: InputMaybe<Scalars['String']>;
  block3JobTitle_exists?: InputMaybe<Scalars['Boolean']>;
  block3JobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  block3JobTitle_not?: InputMaybe<Scalars['String']>;
  block3JobTitle_not_contains?: InputMaybe<Scalars['String']>;
  block3JobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  block3Name?: InputMaybe<Scalars['String']>;
  block3Name_contains?: InputMaybe<Scalars['String']>;
  block3Name_exists?: InputMaybe<Scalars['Boolean']>;
  block3Name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  block3Name_not?: InputMaybe<Scalars['String']>;
  block3Name_not_contains?: InputMaybe<Scalars['String']>;
  block3Name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blockBody_contains?: InputMaybe<Scalars['String']>;
  blockBody_exists?: InputMaybe<Scalars['Boolean']>;
  blockBody_not_contains?: InputMaybe<Scalars['String']>;
  blockImage_exists?: InputMaybe<Scalars['Boolean']>;
  blockJobTitle?: InputMaybe<Scalars['String']>;
  blockJobTitle_contains?: InputMaybe<Scalars['String']>;
  blockJobTitle_exists?: InputMaybe<Scalars['Boolean']>;
  blockJobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blockJobTitle_not?: InputMaybe<Scalars['String']>;
  blockJobTitle_not_contains?: InputMaybe<Scalars['String']>;
  blockJobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blockName?: InputMaybe<Scalars['String']>;
  blockName_contains?: InputMaybe<Scalars['String']>;
  blockName_exists?: InputMaybe<Scalars['Boolean']>;
  blockName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blockName_not?: InputMaybe<Scalars['String']>;
  blockName_not_contains?: InputMaybe<Scalars['String']>;
  blockName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  subtitle?: InputMaybe<Scalars['String']>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not?: InputMaybe<Scalars['String']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentCarouselLinkingCollections = {
  __typename?: 'ContentCarouselLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ContentCarouselLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ContentCarouselLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentCarouselLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC'
}

export enum ContentCarouselOrder {
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  Block2JobTitleAsc = 'block2JobTitle_ASC',
  Block2JobTitleDesc = 'block2JobTitle_DESC',
  Block2NameAsc = 'block2Name_ASC',
  Block2NameDesc = 'block2Name_DESC',
  Block3JobTitleAsc = 'block3JobTitle_ASC',
  Block3JobTitleDesc = 'block3JobTitle_DESC',
  Block3NameAsc = 'block3Name_ASC',
  Block3NameDesc = 'block3Name_DESC',
  BlockJobTitleAsc = 'blockJobTitle_ASC',
  BlockJobTitleDesc = 'blockJobTitle_DESC',
  BlockNameAsc = 'blockName_ASC',
  BlockNameDesc = 'blockName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenu = Entry & {
  __typename?: 'FooterMenu';
  contentfulMetadata: ContentfulMetadata;
  facebookLink?: Maybe<Scalars['String']>;
  instagramLink?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  legalLinks?: Maybe<MenuGroup>;
  linkedFrom?: Maybe<FooterMenuLinkingCollections>;
  linkedinLink?: Maybe<Scalars['String']>;
  menuItemsCollection?: Maybe<FooterMenuMenuItemsCollection>;
  sys: Sys;
  twitterLink?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuFacebookLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuInstagramLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuLegalLinksArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MenuGroupFilter>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuLinkedinLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterMenuMenuItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuGroupFilter>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuTwitterLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/footerMenu) */
export type FooterMenuYoutubeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FooterMenuCollection = {
  __typename?: 'FooterMenuCollection';
  items: Array<Maybe<FooterMenu>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  facebookLink?: InputMaybe<Scalars['String']>;
  facebookLink_contains?: InputMaybe<Scalars['String']>;
  facebookLink_exists?: InputMaybe<Scalars['Boolean']>;
  facebookLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebookLink_not?: InputMaybe<Scalars['String']>;
  facebookLink_not_contains?: InputMaybe<Scalars['String']>;
  facebookLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagramLink?: InputMaybe<Scalars['String']>;
  instagramLink_contains?: InputMaybe<Scalars['String']>;
  instagramLink_exists?: InputMaybe<Scalars['Boolean']>;
  instagramLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagramLink_not?: InputMaybe<Scalars['String']>;
  instagramLink_not_contains?: InputMaybe<Scalars['String']>;
  instagramLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  legalLinks?: InputMaybe<CfMenuGroupNestedFilter>;
  legalLinks_exists?: InputMaybe<Scalars['Boolean']>;
  linkedinLink?: InputMaybe<Scalars['String']>;
  linkedinLink_contains?: InputMaybe<Scalars['String']>;
  linkedinLink_exists?: InputMaybe<Scalars['Boolean']>;
  linkedinLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedinLink_not?: InputMaybe<Scalars['String']>;
  linkedinLink_not_contains?: InputMaybe<Scalars['String']>;
  linkedinLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  menuItems?: InputMaybe<CfMenuGroupNestedFilter>;
  menuItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  twitterLink?: InputMaybe<Scalars['String']>;
  twitterLink_contains?: InputMaybe<Scalars['String']>;
  twitterLink_exists?: InputMaybe<Scalars['Boolean']>;
  twitterLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterLink_not?: InputMaybe<Scalars['String']>;
  twitterLink_not_contains?: InputMaybe<Scalars['String']>;
  twitterLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtube?: InputMaybe<Scalars['String']>;
  youtube_contains?: InputMaybe<Scalars['String']>;
  youtube_exists?: InputMaybe<Scalars['Boolean']>;
  youtube_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  youtube_not?: InputMaybe<Scalars['String']>;
  youtube_not_contains?: InputMaybe<Scalars['String']>;
  youtube_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterMenuLinkingCollections = {
  __typename?: 'FooterMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FooterMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type FooterMenuMenuItemsCollection = {
  __typename?: 'FooterMenuMenuItemsCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
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
  YoutubeAsc = 'youtube_ASC',
  YoutubeDesc = 'youtube_DESC'
}

/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBanner = Entry & {
  __typename?: 'HeroBanner';
  backgroundImage?: Maybe<Asset>;
  buttonLink?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  fullWidth?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<HeroBannerLinkingCollections>;
  subtitle?: Maybe<HeroBannerSubtitle>;
  sys: Sys;
  test?: Maybe<Scalars['Int']>;
  testmeer?: Maybe<Author>;
  title?: Maybe<Scalars['String']>;
};


/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerFullWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerTestArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerTestmeerArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AuthorFilter>;
};


/** Your Partner in Digital Transformation [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/heroBanner) */
export type HeroBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type HeroBannerCollection = {
  __typename?: 'HeroBannerCollection';
  items: Array<Maybe<HeroBanner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeroBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroBannerFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']>;
  buttonLink?: InputMaybe<Scalars['String']>;
  buttonLink_contains?: InputMaybe<Scalars['String']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText?: InputMaybe<Scalars['String']>;
  buttonText_contains?: InputMaybe<Scalars['String']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not?: InputMaybe<Scalars['String']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fullWidth?: InputMaybe<Scalars['Boolean']>;
  fullWidth_exists?: InputMaybe<Scalars['Boolean']>;
  fullWidth_not?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_contains?: InputMaybe<Scalars['String']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  test?: InputMaybe<Scalars['Int']>;
  test_exists?: InputMaybe<Scalars['Boolean']>;
  test_gt?: InputMaybe<Scalars['Int']>;
  test_gte?: InputMaybe<Scalars['Int']>;
  test_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  test_lt?: InputMaybe<Scalars['Int']>;
  test_lte?: InputMaybe<Scalars['Int']>;
  test_not?: InputMaybe<Scalars['Int']>;
  test_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  testmeer?: InputMaybe<CfAuthorNestedFilter>;
  testmeer_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeroBannerLinkingCollections = {
  __typename?: 'HeroBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type HeroBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type HeroBannerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC'
}

export enum HeroBannerOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  FullWidthAsc = 'fullWidth_ASC',
  FullWidthDesc = 'fullWidth_DESC',
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
  TestAsc = 'test_ASC',
  TestDesc = 'test_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type HeroBannerSubtitle = {
  __typename?: 'HeroBannerSubtitle';
  json: Scalars['JSON'];
  links: HeroBannerSubtitleLinks;
};

export type HeroBannerSubtitleAssets = {
  __typename?: 'HeroBannerSubtitleAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HeroBannerSubtitleEntries = {
  __typename?: 'HeroBannerSubtitleEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HeroBannerSubtitleLinks = {
  __typename?: 'HeroBannerSubtitleLinks';
  assets: HeroBannerSubtitleAssets;
  entries: HeroBannerSubtitleEntries;
  resources: HeroBannerSubtitleResources;
};

export type HeroBannerSubtitleResources = {
  __typename?: 'HeroBannerSubtitleResources';
  block: Array<HeroBannerSubtitleResourcesBlock>;
  hyperlink: Array<HeroBannerSubtitleResourcesHyperlink>;
  inline: Array<HeroBannerSubtitleResourcesInline>;
};

export type HeroBannerSubtitleResourcesBlock = ResourceLink & {
  __typename?: 'HeroBannerSubtitleResourcesBlock';
  sys: ResourceSys;
};

export type HeroBannerSubtitleResourcesHyperlink = ResourceLink & {
  __typename?: 'HeroBannerSubtitleResourcesHyperlink';
  sys: ResourceSys;
};

export type HeroBannerSubtitleResourcesInline = ResourceLink & {
  __typename?: 'HeroBannerSubtitleResourcesInline';
  sys: ResourceSys;
};

/** Logo carousel [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/imageCarousel) */
export type ImageCarousel = Entry & {
  __typename?: 'ImageCarousel';
  autoplay?: Maybe<Scalars['Boolean']>;
  contentfulMetadata: ContentfulMetadata;
  imageCollection?: Maybe<AssetCollection>;
  linkedFrom?: Maybe<ImageCarouselLinkingCollections>;
  sys: Sys;
};


/** Logo carousel [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/imageCarousel) */
export type ImageCarouselAutoplayArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Logo carousel [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/imageCarousel) */
export type ImageCarouselImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Logo carousel [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/imageCarousel) */
export type ImageCarouselLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ImageCarouselCollection = {
  __typename?: 'ImageCarouselCollection';
  items: Array<Maybe<ImageCarousel>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ImageCarouselFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImageCarouselFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ImageCarouselFilter>>>;
  autoplay?: InputMaybe<Scalars['Boolean']>;
  autoplay_exists?: InputMaybe<Scalars['Boolean']>;
  autoplay_not?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ImageCarouselLinkingCollections = {
  __typename?: 'ImageCarouselLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ImageCarouselLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ImageCarouselLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageCarouselLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC'
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
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
  Webp = 'WEBP'
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
  TopRight = 'TOP_RIGHT'
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
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/languageMetadata) */
export type LanguageMetadata = Entry & {
  __typename?: 'LanguageMetadata';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<LanguageMetadataLinkingCollections>;
  locale?: Maybe<Scalars['String']>;
  localeImage?: Maybe<Asset>;
  localeUrl?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/languageMetadata) */
export type LanguageMetadataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/languageMetadata) */
export type LanguageMetadataLocaleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/languageMetadata) */
export type LanguageMetadataLocaleImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/languageMetadata) */
export type LanguageMetadataLocaleUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type LanguageMetadataCollection = {
  __typename?: 'LanguageMetadataCollection';
  items: Array<Maybe<LanguageMetadata>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type LanguageMetadataFilter = {
  AND?: InputMaybe<Array<InputMaybe<LanguageMetadataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LanguageMetadataFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  locale?: InputMaybe<Scalars['String']>;
  localeImage_exists?: InputMaybe<Scalars['Boolean']>;
  localeUrl?: InputMaybe<Scalars['String']>;
  localeUrl_contains?: InputMaybe<Scalars['String']>;
  localeUrl_exists?: InputMaybe<Scalars['Boolean']>;
  localeUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  localeUrl_not?: InputMaybe<Scalars['String']>;
  localeUrl_not_contains?: InputMaybe<Scalars['String']>;
  localeUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_contains?: InputMaybe<Scalars['String']>;
  locale_exists?: InputMaybe<Scalars['Boolean']>;
  locale_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale_not?: InputMaybe<Scalars['String']>;
  locale_not_contains?: InputMaybe<Scalars['String']>;
  locale_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type LanguageMetadataLinkingCollections = {
  __typename?: 'LanguageMetadataLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
};


export type LanguageMetadataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type LanguageMetadataLinkingCollectionsNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LanguageMetadataLinkingCollectionsNavigationMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum LanguageMetadataLinkingCollectionsNavigationMenuCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LanguageMetadataOrder {
  LocaleUrlAsc = 'localeUrl_ASC',
  LocaleUrlDesc = 'localeUrl_DESC',
  LocaleAsc = 'locale_ASC',
  LocaleDesc = 'locale_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroup = Entry & {
  __typename?: 'MenuGroup';
  contentfulMetadata: ContentfulMetadata;
  featuredPagesCollection?: Maybe<MenuGroupFeaturedPagesCollection>;
  groupLink?: Maybe<Page>;
  groupName?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<MenuGroupLinkingCollections>;
  sys: Sys;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroupFeaturedPagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupFeaturedPagesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageFilter>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroupGroupLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageFilter>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroupGroupNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroupInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/menuGroup) */
export type MenuGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MenuGroupCollection = {
  __typename?: 'MenuGroupCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MenuGroupFeaturedPagesCollection = {
  __typename?: 'MenuGroupFeaturedPagesCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum MenuGroupFeaturedPagesCollectionOrder {
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
  TitleDesc = 'title_DESC'
}

export type MenuGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuGroupFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredPages?: InputMaybe<CfPageNestedFilter>;
  featuredPagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  groupLink?: InputMaybe<CfPageNestedFilter>;
  groupLink_exists?: InputMaybe<Scalars['Boolean']>;
  groupName?: InputMaybe<Scalars['String']>;
  groupName_contains?: InputMaybe<Scalars['String']>;
  groupName_exists?: InputMaybe<Scalars['Boolean']>;
  groupName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupName_not?: InputMaybe<Scalars['String']>;
  groupName_not_contains?: InputMaybe<Scalars['String']>;
  groupName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type MenuGroupLinkingCollections = {
  __typename?: 'MenuGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerMenuCollection?: Maybe<FooterMenuCollection>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
};


export type MenuGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MenuGroupLinkingCollectionsFooterMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupLinkingCollectionsFooterMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MenuGroupLinkingCollectionsNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupLinkingCollectionsNavigationMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  YoutubeAsc = 'youtube_ASC',
  YoutubeDesc = 'youtube_DESC'
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationMenu) */
export type NavigationMenu = Entry & {
  __typename?: 'NavigationMenu';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<NavigationMenuLinkingCollections>;
  menuItemsCollection?: Maybe<NavigationMenuMenuItemsCollection>;
  sys: Sys;
};


/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationMenu) */
export type NavigationMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationMenu) */
export type NavigationMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/navigationMenu) */
export type NavigationMenuMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationMenuMenuItemsFilter>;
};

export type NavigationMenuCollection = {
  __typename?: 'NavigationMenuCollection';
  items: Array<Maybe<NavigationMenu>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  menuItems?: InputMaybe<CfmenuItemsMultiTypeNestedFilter>;
  menuItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationMenuLinkingCollections = {
  __typename?: 'NavigationMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NavigationMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type NavigationMenuMenuItemsCollection = {
  __typename?: 'NavigationMenuMenuItemsCollection';
  items: Array<Maybe<NavigationMenuMenuItemsItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationMenuMenuItemsFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationMenuMenuItemsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationMenuMenuItemsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationMenuMenuItemsItem = LanguageMetadata | MenuGroup;

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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  contentfulMetadata: ContentfulMetadata;
  extraSectionCollection?: Maybe<PageExtraSectionCollection>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  pageContentCollection?: Maybe<PagePageContentCollection>;
  pageName?: Maybe<Scalars['String']>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  topSectionCollection?: Maybe<PageTopSectionCollection>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageExtraSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageExtraSectionFilter>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PagePageContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PagePageContentFilter>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PagePageNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SeoFilter>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/page) */
export type PageTopSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageTopSectionFilter>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageExtraSectionCollection = {
  __typename?: 'PageExtraSectionCollection';
  items: Array<Maybe<PageExtraSectionItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageExtraSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageExtraSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageExtraSectionFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageExtraSectionItem = ComponentCta | ComponentDuplex | ComponentHeroBanner | ComponentInfoBlock | ComponentQuote;

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSection?: InputMaybe<CfextraSectionMultiTypeNestedFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageContent?: InputMaybe<CfpageContentMultiTypeNestedFilter>;
  pageContentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  pageName?: InputMaybe<Scalars['String']>;
  pageName_contains?: InputMaybe<Scalars['String']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageName_not?: InputMaybe<Scalars['String']>;
  pageName_not_contains?: InputMaybe<Scalars['String']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  topSection?: InputMaybe<CftopSectionMultiTypeNestedFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
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
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsComponentCtaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsComponentDuplexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsComponentDuplexCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsComponentHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsComponentHeroBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsMenuGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsMenuGroupCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  UrlParametersDesc = 'urlParameters_DESC'
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
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
  TitleDesc = 'title_DESC'
}

export type PagePageContentCollection = {
  __typename?: 'PagePageContentCollection';
  items: Array<Maybe<PagePageContentItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PagePageContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<PagePageContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PagePageContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type PagePageContentItem = ContentBlock | ContentBlok | ContentBlokMetCta | ContentBlokSplit | ContentCarousel | HeroBanner | ImageCarousel | TextBanner | Title;

export type PageTopSectionCollection = {
  __typename?: 'PageTopSectionCollection';
  items: Array<Maybe<PageTopSectionItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageTopSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageTopSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageTopSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageTopSectionItem = ComponentCta | ComponentDuplex | ComponentHeroBanner | ComponentInfoBlock | ComponentQuote | HeroBanner;

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  author?: Maybe<Author>;
  authorCollection?: Maybe<AuthorCollection>;
  componentCta?: Maybe<ComponentCta>;
  componentCtaCollection?: Maybe<ComponentCtaCollection>;
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
  languageMetadata?: Maybe<LanguageMetadata>;
  languageMetadataCollection?: Maybe<LanguageMetadataCollection>;
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
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryAuthorArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AuthorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuthorFilter>;
};


export type QueryComponentCtaArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentCtaFilter>;
};


export type QueryComponentDuplexArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentDuplexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentDuplexOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentDuplexFilter>;
};


export type QueryComponentHeroBannerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentHeroBannerFilter>;
};


export type QueryComponentInfoBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentInfoBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentInfoBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentInfoBlockFilter>;
};


export type QueryComponentProductTableArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentProductTableCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProductTableOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentProductTableFilter>;
};


export type QueryComponentQuoteArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentQuoteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentQuoteOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentQuoteFilter>;
};


export type QueryContentBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContentBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentBlockFilter>;
};


export type QueryContentBlokArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContentBlokCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentBlokOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentBlokFilter>;
};


export type QueryContentBlokMetCtaArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContentBlokMetCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentBlokMetCtaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentBlokMetCtaFilter>;
};


export type QueryContentBlokSplitArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContentBlokSplitCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentBlokSplitOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentBlokSplitFilter>;
};


export type QueryContentCarouselArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContentCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ContentCarouselOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContentCarouselFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFooterMenuArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterMenuFilter>;
};


export type QueryHeroBannerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroBannerFilter>;
};


export type QueryImageCarouselArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryImageCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ImageCarouselOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageCarouselFilter>;
};


export type QueryLanguageMetadataArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLanguageMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<LanguageMetadataOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LanguageMetadataFilter>;
};


export type QueryMenuGroupArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMenuGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuGroupFilter>;
};


export type QueryNavigationMenuArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationMenuFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageFilter>;
};


export type QuerySeoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SeoFilter>;
};


export type QueryTextBannerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTextBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextBannerFilter>;
};


export type QueryTitleArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTitleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TitleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TitleFilter>;
};


export type QueryTopicPersonArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTopicPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicPersonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicPersonFilter>;
};


export type QueryTopicProductArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTopicProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicProductFilter>;
};


export type QueryTopicProductFeatureArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTopicProductFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeatureOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicProductFeatureFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  urn: Scalars['String'];
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type Seo = Entry & {
  __typename?: 'Seo';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<SeoLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  noFollow?: Maybe<Scalars['Boolean']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoNoFollowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoNoIndexArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/seo) */
export type SeoTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SeoCollection = {
  __typename?: 'SeoCollection';
  items: Array<Maybe<Seo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']>;
  noIndex?: InputMaybe<Scalars['Boolean']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SeoLinkingCollections = {
  __typename?: 'SeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type SeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SeoLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC'
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
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** A full width banner with title and description. [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/textBanner) */
export type TextBanner = Entry & {
  __typename?: 'TextBanner';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TextBannerLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** A full width banner with title and description. [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/textBanner) */
export type TextBannerDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A full width banner with title and description. [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/textBanner) */
export type TextBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A full width banner with title and description. [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/textBanner) */
export type TextBannerSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A full width banner with title and description. [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/textBanner) */
export type TextBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TextBannerCollection = {
  __typename?: 'TextBannerCollection';
  items: Array<Maybe<TextBanner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TextBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextBannerFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TextBannerLinkingCollections = {
  __typename?: 'TextBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type TextBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TextBannerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TextBannerLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC'
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
  TitleDesc = 'title_DESC'
}

/** How we help businesses with their digital growth [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/title) */
export type Title = Entry & {
  __typename?: 'Title';
  alignment?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  fontSize?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TitleLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** How we help businesses with their digital growth [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/title) */
export type TitleAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** How we help businesses with their digital growth [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/title) */
export type TitleFontSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** How we help businesses with their digital growth [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/title) */
export type TitleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** How we help businesses with their digital growth [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/title) */
export type TitleTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TitleCollection = {
  __typename?: 'TitleCollection';
  items: Array<Maybe<Title>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TitleFilter = {
  AND?: InputMaybe<Array<InputMaybe<TitleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TitleFilter>>>;
  alignment?: InputMaybe<Scalars['String']>;
  alignment_contains?: InputMaybe<Scalars['String']>;
  alignment_exists?: InputMaybe<Scalars['Boolean']>;
  alignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  alignment_not?: InputMaybe<Scalars['String']>;
  alignment_not_contains?: InputMaybe<Scalars['String']>;
  alignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fontSize?: InputMaybe<Scalars['String']>;
  fontSize_contains?: InputMaybe<Scalars['String']>;
  fontSize_exists?: InputMaybe<Scalars['Boolean']>;
  fontSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fontSize_not?: InputMaybe<Scalars['String']>;
  fontSize_not_contains?: InputMaybe<Scalars['String']>;
  fontSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TitleLinkingCollections = {
  __typename?: 'TitleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type TitleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TitleLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TitleLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  TitleDesc = 'title_DESC'
}

export enum TitleOrder {
  AlignmentAsc = 'alignment_ASC',
  AlignmentDesc = 'alignment_DESC',
  FontSizeAsc = 'fontSize_ASC',
  FontSizeDesc = 'fontSize_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPerson = Entry & {
  __typename?: 'TopicPerson';
  avatar?: Maybe<Asset>;
  bio?: Maybe<TopicPersonBio>;
  cardStyle?: Maybe<Scalars['Boolean']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TopicPersonLinkingCollections>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
  website?: Maybe<Scalars['String']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPersonAvatarArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPersonBioArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPersonCardStyleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPersonInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPersonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPersonLocationArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPersonNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicPerson) */
export type TopicPersonWebsiteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TopicPersonBio = {
  __typename?: 'TopicPersonBio';
  json: Scalars['JSON'];
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
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TopicPersonFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicPersonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicPersonFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']>;
  bio_contains?: InputMaybe<Scalars['String']>;
  bio_exists?: InputMaybe<Scalars['Boolean']>;
  bio_not_contains?: InputMaybe<Scalars['String']>;
  cardStyle?: InputMaybe<Scalars['Boolean']>;
  cardStyle_exists?: InputMaybe<Scalars['Boolean']>;
  cardStyle_not?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  location_contains?: InputMaybe<Scalars['String']>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_not?: InputMaybe<Scalars['String']>;
  location_not_contains?: InputMaybe<Scalars['String']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  website?: InputMaybe<Scalars['String']>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_exists?: InputMaybe<Scalars['Boolean']>;
  website_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  website_not?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TopicPersonLinkingCollections = {
  __typename?: 'TopicPersonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TopicPersonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  WebsiteDesc = 'website_DESC'
}

/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProduct) */
export type TopicProduct = Entry & {
  __typename?: 'TopicProduct';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<TopicProductDescription>;
  featuredImage?: Maybe<Asset>;
  featuresCollection?: Maybe<TopicProductFeaturesCollection>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TopicProductLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  sys: Sys;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProduct) */
export type TopicProductDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProduct) */
export type TopicProductFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProduct) */
export type TopicProductFeaturesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeaturesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicProductFeatureFilter>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProduct) */
export type TopicProductInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProduct) */
export type TopicProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProduct) */
export type TopicProductNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProduct) */
export type TopicProductPriceArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TopicProductCollection = {
  __typename?: 'TopicProductCollection';
  items: Array<Maybe<TopicProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TopicProductDescription = {
  __typename?: 'TopicProductDescription';
  json: Scalars['JSON'];
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
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TopicProductFeatureLinkingCollections>;
  longDescription?: Maybe<TopicProductFeatureLongDescription>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<TopicProductFeatureShortDescription>;
  sys: Sys;
};


/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProductFeature) */
export type TopicProductFeatureInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProductFeature) */
export type TopicProductFeatureLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProductFeature) */
export type TopicProductFeatureLongDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProductFeature) */
export type TopicProductFeatureNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/2p89d5j9ulp9/content_types/topicProductFeature) */
export type TopicProductFeatureShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TopicProductFeatureCollection = {
  __typename?: 'TopicProductFeatureCollection';
  items: Array<Maybe<TopicProductFeature>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TopicProductFeatureFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicProductFeatureFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicProductFeatureFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  longDescription_contains?: InputMaybe<Scalars['String']>;
  longDescription_exists?: InputMaybe<Scalars['Boolean']>;
  longDescription_not_contains?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
};

export type TopicProductFeatureLinkingCollections = {
  __typename?: 'TopicProductFeatureLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  topicProductCollection?: Maybe<TopicProductCollection>;
};


export type TopicProductFeatureLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TopicProductFeatureLinkingCollectionsTopicProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeatureLinkingCollectionsTopicProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TopicProductFeatureLongDescription = {
  __typename?: 'TopicProductFeatureLongDescription';
  json: Scalars['JSON'];
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

export type TopicProductFeatureLongDescriptionResourcesHyperlink = ResourceLink & {
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TopicProductFeatureShortDescription = {
  __typename?: 'TopicProductFeatureShortDescription';
  json: Scalars['JSON'];
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

export type TopicProductFeatureShortDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'TopicProductFeatureShortDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type TopicProductFeatureShortDescriptionResourcesInline = ResourceLink & {
  __typename?: 'TopicProductFeatureShortDescriptionResourcesInline';
  sys: ResourceSys;
};

export type TopicProductFeaturesCollection = {
  __typename?: 'TopicProductFeaturesCollection';
  items: Array<Maybe<TopicProductFeature>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TopicProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicProductFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  features?: InputMaybe<CfTopicProductFeatureNestedFilter>;
  featuresCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Float']>;
  price_exists?: InputMaybe<Scalars['Boolean']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_not?: InputMaybe<Scalars['Float']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TopicProductLinkingCollections = {
  __typename?: 'TopicProductLinkingCollections';
  componentProductTableCollection?: Maybe<ComponentProductTableCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type TopicProductLinkingCollectionsComponentProductTableCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductLinkingCollectionsComponentProductTableCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TopicProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
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
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type _Node = {
  _id: Scalars['ID'];
};

export type CfAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfMenuGroupNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfMenuGroupNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMenuGroupNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredPagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  groupLink_exists?: InputMaybe<Scalars['Boolean']>;
  groupName?: InputMaybe<Scalars['String']>;
  groupName_contains?: InputMaybe<Scalars['String']>;
  groupName_exists?: InputMaybe<Scalars['Boolean']>;
  groupName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupName_not?: InputMaybe<Scalars['String']>;
  groupName_not_contains?: InputMaybe<Scalars['String']>;
  groupName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageContentCollection_exists?: InputMaybe<Scalars['Boolean']>;
  pageName?: InputMaybe<Scalars['String']>;
  pageName_contains?: InputMaybe<Scalars['String']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageName_not?: InputMaybe<Scalars['String']>;
  pageName_not_contains?: InputMaybe<Scalars['String']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type CfSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']>;
  noIndex?: InputMaybe<Scalars['Boolean']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfTopicProductFeatureNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTopicProductFeatureNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTopicProductFeatureNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  longDescription_contains?: InputMaybe<Scalars['String']>;
  longDescription_exists?: InputMaybe<Scalars['Boolean']>;
  longDescription_not_contains?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfTopicProductNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTopicProductNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTopicProductNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  featuresCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Float']>;
  price_exists?: InputMaybe<Scalars['Boolean']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_not?: InputMaybe<Scalars['Float']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfextraSectionMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfextraSectionMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfextraSectionMultiTypeNestedFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfmenuItemsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfmenuItemsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfmenuItemsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
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
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentContentBlocksFieldsFragment = { __typename: 'ContentBlock', sys: { __typename?: 'Sys', id: string }, contentBlockCtaCollection?: { __typename?: 'ContentBlockContentBlockCtaCollection', total: number, items: Array<{ __typename?: 'Author', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ContentBlock', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ContentBlok', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ContentBlokMetCta', blockTitle?: string | null, buttonText?: string | null, buttonLink?: string | null, blockImage?: { __typename?: 'Asset', title?: string | null, description?: string | null, contentType?: string | null, fileName?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, blockBody?: { __typename?: 'ContentBlokMetCtaBlockBody', json: any } | null, sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ContentBlokSplit', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ContentCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'FooterMenu', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'HeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'LanguageMetadata', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'MenuGroup', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Seo', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TextBanner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Title', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicPerson', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type CtfComponentContentBlockQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfComponentContentBlockQuery = { __typename?: 'Query', contentBlock?: { __typename: 'ContentBlock', sys: { __typename?: 'Sys', id: string }, contentBlockCtaCollection?: { __typename?: 'ContentBlockContentBlockCtaCollection', total: number, items: Array<{ __typename?: 'Author', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ContentBlock', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ContentBlok', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ContentBlokMetCta', blockTitle?: string | null, buttonText?: string | null, buttonLink?: string | null, blockImage?: { __typename?: 'Asset', title?: string | null, description?: string | null, contentType?: string | null, fileName?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, blockBody?: { __typename?: 'ContentBlokMetCtaBlockBody', json: any } | null, sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ContentBlokSplit', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ContentCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'FooterMenu', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'HeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'LanguageMetadata', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'MenuGroup', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Page', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Seo', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TextBanner', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Title', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicPerson', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };

export type ComponentContentBlokFieldsFragment = { __typename: 'ContentBlok', title?: string | null, subtitle?: string | null, buttonText?: string | null, buttonLink?: string | null, sys: { __typename?: 'Sys', id: string }, block1Image?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, block1Body?: { __typename?: 'ContentBlokBlock1Body', json: any } | null, block2Image?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, block2Body?: { __typename?: 'ContentBlokBlock2Body', json: any } | null, block3Image?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, block3Body?: { __typename?: 'ContentBlokBlock3Body', json: any } | null };

export type CtfContentBlokComponentQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfContentBlokComponentQuery = { __typename?: 'Query', contentBlok?: { __typename: 'ContentBlok', title?: string | null, subtitle?: string | null, buttonText?: string | null, buttonLink?: string | null, sys: { __typename?: 'Sys', id: string }, block1Image?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, block1Body?: { __typename?: 'ContentBlokBlock1Body', json: any } | null, block2Image?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, block2Body?: { __typename?: 'ContentBlokBlock2Body', json: any } | null, block3Image?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, block3Body?: { __typename?: 'ContentBlokBlock3Body', json: any } | null } | null };

export type ComponentContentBlokSplitFieldsFragment = { __typename: 'ContentBlokSplit', title?: string | null, subtitle?: string | null, buttonText?: string | null, buttonLink?: string | null, fullWidth?: boolean | null, title2?: string | null, backgroundColor?: string | null, sys: { __typename?: 'Sys', id: string }, button1?: { __typename?: 'ContentBlokSplitButton1', json: any } | null, backgroundImage?: { __typename?: 'Asset', title?: string | null, description?: string | null, url?: string | null, contentType?: string | null } | null, image?: { __typename?: 'Asset', title?: string | null, description?: string | null, url?: string | null, contentType?: string | null } | null };

export type CtfComponentSplitBlockQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfComponentSplitBlockQuery = { __typename?: 'Query', contentBlokSplit?: { __typename: 'ContentBlokSplit', title?: string | null, subtitle?: string | null, buttonText?: string | null, buttonLink?: string | null, fullWidth?: boolean | null, title2?: string | null, backgroundColor?: string | null, sys: { __typename?: 'Sys', id: string }, button1?: { __typename?: 'ContentBlokSplitButton1', json: any } | null, backgroundImage?: { __typename?: 'Asset', title?: string | null, description?: string | null, url?: string | null, contentType?: string | null } | null, image?: { __typename?: 'Asset', title?: string | null, description?: string | null, url?: string | null, contentType?: string | null } | null } | null };

export type ComponentContentCarouselFieldsFragment = { __typename: 'ContentCarousel', title?: string | null, subtitle?: string | null, autoplay?: boolean | null, blockJobTitle?: string | null, block2JobTitle?: string | null, block3JobTitle?: string | null, blockName?: string | null, block2Name?: string | null, block3Name?: string | null, sys: { __typename?: 'Sys', id: string }, blockImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, blockBody?: { __typename?: 'ContentCarouselBlockBody', json: any } | null, block2Image?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, block2Body?: { __typename?: 'ContentCarouselBlock2Body', json: any } | null, block3Image?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, block3Body?: { __typename?: 'ContentCarouselBlock3Body', json: any } | null };

export type CtfComponentContentCarouselQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfComponentContentCarouselQuery = { __typename?: 'Query', contentCarousel?: { __typename: 'ContentCarousel', title?: string | null, subtitle?: string | null, autoplay?: boolean | null, blockJobTitle?: string | null, block2JobTitle?: string | null, block3JobTitle?: string | null, blockName?: string | null, block2Name?: string | null, block3Name?: string | null, sys: { __typename?: 'Sys', id: string }, blockImage?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, blockBody?: { __typename?: 'ContentCarouselBlockBody', json: any } | null, block2Image?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, block2Body?: { __typename?: 'ContentCarouselBlock2Body', json: any } | null, block3Image?: { __typename?: 'Asset', url?: string | null, title?: string | null, contentType?: string | null } | null, block3Body?: { __typename?: 'ContentCarouselBlock3Body', json: any } | null } | null };

export type ComponentHeroBannerFieldsFragment = { __typename: 'HeroBanner', title?: string | null, fullWidth?: boolean | null, buttonText?: string | null, buttonLink?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, subtitle?: { __typename?: 'HeroBannerSubtitle', json: any } | null, backgroundImage?: { __typename?: 'Asset', title?: string | null, description?: string | null, contentType?: string | null, fileName?: string | null, url?: string | null, width?: number | null, height?: number | null } | null };

export type CtfComponentCtaBannerQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfComponentCtaBannerQuery = { __typename?: 'Query', heroBanner?: { __typename: 'HeroBanner', title?: string | null, fullWidth?: boolean | null, buttonText?: string | null, buttonLink?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, subtitle?: { __typename?: 'HeroBannerSubtitle', json: any } | null, backgroundImage?: { __typename?: 'Asset', title?: string | null, description?: string | null, contentType?: string | null, fileName?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null };

export type ComponentImageCarouselFieldsFragment = { __typename: 'ImageCarousel', autoplay?: boolean | null, sys: { __typename?: 'Sys', id: string }, imageCollection?: { __typename?: 'AssetCollection', total: number, items: Array<{ __typename?: 'Asset', title?: string | null, description?: string | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type CtfComponentInfiniteCarouselQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfComponentInfiniteCarouselQuery = { __typename?: 'Query', imageCarousel?: { __typename: 'ImageCarousel', autoplay?: boolean | null, sys: { __typename?: 'Sys', id: string }, imageCollection?: { __typename?: 'AssetCollection', total: number, items: Array<{ __typename?: 'Asset', title?: string | null, description?: string | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };

type PageTopSectionFields_ComponentCta_Fragment = { __typename: 'ComponentCta' };

type PageTopSectionFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex' };

type PageTopSectionFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner' };

type PageTopSectionFields_ComponentInfoBlock_Fragment = { __typename: 'ComponentInfoBlock' };

type PageTopSectionFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote' };

type PageTopSectionFields_HeroBanner_Fragment = { __typename: 'HeroBanner' };

export type PageTopSectionFieldsFragment = PageTopSectionFields_ComponentCta_Fragment | PageTopSectionFields_ComponentDuplex_Fragment | PageTopSectionFields_ComponentHeroBanner_Fragment | PageTopSectionFields_ComponentInfoBlock_Fragment | PageTopSectionFields_ComponentQuote_Fragment | PageTopSectionFields_HeroBanner_Fragment;

type PageContentFields_ContentBlock_Fragment = { __typename: 'ContentBlock' };

type PageContentFields_ContentBlok_Fragment = { __typename: 'ContentBlok' };

type PageContentFields_ContentBlokMetCta_Fragment = { __typename: 'ContentBlokMetCta' };

type PageContentFields_ContentBlokSplit_Fragment = { __typename: 'ContentBlokSplit' };

type PageContentFields_ContentCarousel_Fragment = { __typename: 'ContentCarousel' };

type PageContentFields_HeroBanner_Fragment = { __typename: 'HeroBanner' };

type PageContentFields_ImageCarousel_Fragment = { __typename: 'ImageCarousel' };

type PageContentFields_TextBanner_Fragment = { __typename: 'TextBanner' };

type PageContentFields_Title_Fragment = { __typename: 'Title' };

export type PageContentFieldsFragment = PageContentFields_ContentBlock_Fragment | PageContentFields_ContentBlok_Fragment | PageContentFields_ContentBlokMetCta_Fragment | PageContentFields_ContentBlokSplit_Fragment | PageContentFields_ContentCarousel_Fragment | PageContentFields_HeroBanner_Fragment | PageContentFields_ImageCarousel_Fragment | PageContentFields_TextBanner_Fragment | PageContentFields_Title_Fragment;

type PageExtraSectionItemFields_ComponentCta_Fragment = { __typename: 'ComponentCta' };

type PageExtraSectionItemFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex' };

type PageExtraSectionItemFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner' };

type PageExtraSectionItemFields_ComponentInfoBlock_Fragment = { __typename: 'ComponentInfoBlock' };

type PageExtraSectionItemFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote' };

export type PageExtraSectionItemFieldsFragment = PageExtraSectionItemFields_ComponentCta_Fragment | PageExtraSectionItemFields_ComponentDuplex_Fragment | PageExtraSectionItemFields_ComponentHeroBanner_Fragment | PageExtraSectionItemFields_ComponentInfoBlock_Fragment | PageExtraSectionItemFields_ComponentQuote_Fragment;

export type CtfPageFieldsFragment = { __typename: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null } | null, topSectionCollection?: { __typename?: 'PageTopSectionCollection', items: Array<{ __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename: 'HeroBanner', sys: { __typename?: 'Sys', id: string } } | null> } | null, pageContentCollection?: { __typename?: 'PagePageContentCollection', items: Array<{ __typename: 'ContentBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentBlok', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentBlokMetCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentBlokSplit', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'HeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TextBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Title', sys: { __typename?: 'Sys', id: string } } | null> } | null, extraSectionCollection?: { __typename?: 'PageExtraSectionCollection', items: Array<{ __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type CtfPageQueryVariables = Exact<{
  slug: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfPageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null } | null, topSectionCollection?: { __typename?: 'PageTopSectionCollection', items: Array<{ __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename: 'HeroBanner', sys: { __typename?: 'Sys', id: string } } | null> } | null, pageContentCollection?: { __typename?: 'PagePageContentCollection', items: Array<{ __typename: 'ContentBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentBlok', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentBlokMetCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentBlokSplit', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ContentCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'HeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TextBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Title', sys: { __typename?: 'Sys', id: string } } | null> } | null, extraSectionCollection?: { __typename?: 'PageExtraSectionCollection', items: Array<{ __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null };

export type ComponentTitleFieldsFragment = { __typename: 'Title', title?: string | null, alignment?: string | null, fontSize?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfComponentTitleQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfComponentTitleQuery = { __typename?: 'Query', title?: { __typename: 'Title', title?: string | null, alignment?: string | null, fontSize?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

type ComponentReferenceFields_Author_Fragment = { __typename: 'Author', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentCta_Fragment = { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentInfoBlock_Fragment = { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentProductTable_Fragment = { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ContentBlock_Fragment = { __typename: 'ContentBlock', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ContentBlok_Fragment = { __typename: 'ContentBlok', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ContentBlokMetCta_Fragment = { __typename: 'ContentBlokMetCta', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ContentBlokSplit_Fragment = { __typename: 'ContentBlokSplit', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ContentCarousel_Fragment = { __typename: 'ContentCarousel', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_FooterMenu_Fragment = { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_HeroBanner_Fragment = { __typename: 'HeroBanner', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ImageCarousel_Fragment = { __typename: 'ImageCarousel', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_LanguageMetadata_Fragment = { __typename: 'LanguageMetadata', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_MenuGroup_Fragment = { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_NavigationMenu_Fragment = { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Page_Fragment = { __typename: 'Page', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Seo_Fragment = { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_TextBanner_Fragment = { __typename: 'TextBanner', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Title_Fragment = { __typename: 'Title', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_TopicPerson_Fragment = { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_TopicProduct_Fragment = { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_TopicProductFeature_Fragment = { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFieldsFragment = ComponentReferenceFields_Author_Fragment | ComponentReferenceFields_ComponentCta_Fragment | ComponentReferenceFields_ComponentDuplex_Fragment | ComponentReferenceFields_ComponentHeroBanner_Fragment | ComponentReferenceFields_ComponentInfoBlock_Fragment | ComponentReferenceFields_ComponentProductTable_Fragment | ComponentReferenceFields_ComponentQuote_Fragment | ComponentReferenceFields_ContentBlock_Fragment | ComponentReferenceFields_ContentBlok_Fragment | ComponentReferenceFields_ContentBlokMetCta_Fragment | ComponentReferenceFields_ContentBlokSplit_Fragment | ComponentReferenceFields_ContentCarousel_Fragment | ComponentReferenceFields_FooterMenu_Fragment | ComponentReferenceFields_HeroBanner_Fragment | ComponentReferenceFields_ImageCarousel_Fragment | ComponentReferenceFields_LanguageMetadata_Fragment | ComponentReferenceFields_MenuGroup_Fragment | ComponentReferenceFields_NavigationMenu_Fragment | ComponentReferenceFields_Page_Fragment | ComponentReferenceFields_Seo_Fragment | ComponentReferenceFields_TextBanner_Fragment | ComponentReferenceFields_Title_Fragment | ComponentReferenceFields_TopicPerson_Fragment | ComponentReferenceFields_TopicProduct_Fragment | ComponentReferenceFields_TopicProductFeature_Fragment;
