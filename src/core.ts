/** The content of an article. */ 
export type Content = Readonly<{
    title: string,
    body: string
}>

/** Article in 'draft' state. */
export type DraftArticle = Readonly<{
    status: 'draft',
    content: Content
}>

/** Article in 'review' state. */
export type ArticleInReview = Readonly<{
    status: 'review',
    content: Content
}>

/** Article in 'published' state. */
export type PublishedArticle = Readonly<{
    status: 'published',
    content: Content
}>

/** Represents all the states that an article can be in. */
export type Article = DraftArticle | ArticleInReview | PublishedArticle;
  
/** Create a new article in the 'draft' state. */
export const createDraft = (content: Content): DraftArticle => {
    return { status: 'draft', content: content };
}
  
/** Transition article from 'draft' to 'review' state. */
export const sendToReview = (article: DraftArticle): ArticleInReview => {
    return { status: 'review', content: article.content };
}
  
/** Transition article from 'review' to 'published' state. */
export const publishArticle = (article: ArticleInReview): PublishedArticle => {
    return { status: 'published', content: article.content };
}
  
/** Transition article from 'In Review' to 'Draft' state. */
export const rejectArticle = (article: ArticleInReview): DraftArticle => {
    return { status: 'draft', content: article.content };
}