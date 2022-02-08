// export interface IQuotes {
//   authorId: number;
//   authorName: string;
//   body: string;
//   comments: number;
//   createdAt: string;
//   updatedAt: string;
//   hashtags: string[];
//   likes: number;
//   quoteId: number;
//   role: string;
// }

export interface IQuotes {
  quotes: {
    authorId: number;
    authorName: string;
    body: string;
    comments: number;
    createdAt: string;
    updatedAt: string;
    hashtags: string[];
    likes: number;
    quoteId: number;
    role: string;
  }[]
}

