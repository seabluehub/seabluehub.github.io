import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export interface PostView {
  id: string;
  title: string;
  slug: string;
  url: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
  public: boolean;
}

export const categories = [
  {
    slug: 'knowledge',
    title: '知识沉淀',
    description: '这里将收录从 2008 年至今在专业技能、项目经验与学习过程中的笔记与沉淀。',
    summary: '专业技能、项目经验与学习笔记。',
  },
  {
    slug: 'work-insights',
    title: '工作心得',
    description: '这里将记录职场感悟、管理经验与做事方法论。',
    summary: '职场感悟、管理经验与做事方法论。',
  },
  {
    slug: 'reflections',
    title: '个人感悟',
    description: '这里将沉淀生活随笔、读书笔记与人生思考。',
    summary: '生活随笔、读书笔记与人生思考。',
  },
];

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function getPostUrl(post: Post) {
  const [year, month, day] = formatDate(post.data.date).split('-');
  return `/${year}/${month}/${day}/${post.data.pathSlug}/`;
}

export function toPostView(post: Post): PostView {
  return {
    id: post.id,
    title: post.data.title,
    slug: post.data.pathSlug,
    url: getPostUrl(post),
    date: formatDate(post.data.date),
    category: post.data.category,
    tags: post.data.tags,
    summary: post.data.summary,
    public: post.data.public,
  };
}

export function getPublishedPostViews(posts: Post[]) {
  return posts
    .filter((post) => !post.data.draft)
    .map(toPostView)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostsByCategory(posts: PostView[], categoryTitle: string) {
  return posts.filter((post) => post.category === categoryTitle);
}

export function getArchiveTree(posts: PostView[]) {
  return posts.reduce<Record<string, Record<string, PostView[]>>>((tree, post) => {
    const [year, month] = post.date.split('-');
    tree[year] ||= {};
    tree[year][month] ||= [];
    tree[year][month].push(post);
    return tree;
  }, {});
}
