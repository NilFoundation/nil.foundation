export type Collection = 'configs' | 'blogs' | 'research' | 'glossaries' | 'tags' | 'categories' | 'pages'
export type CollectionTypeWithMeta = `${Collection}+meta`
export type CollectionType = Collection | CollectionTypeWithMeta
