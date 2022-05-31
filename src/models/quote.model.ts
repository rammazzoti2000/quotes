export interface IQuote {
  id: string;
  body: string;
  comments: number;
  created: any;
  updated: any;
  hashtags: string[];
  likes: {
    userId: string,
    liked: boolean
  }[];
  role: string;
  user: {
    authorId: string;
    authorName: string;
    headshot: string;
  };
}