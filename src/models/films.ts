export interface FilmsResponse {
  count: number;
  next: null;
  previous: null;
  results: Result[];
}

export default interface Result {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  opening_crawl: string;
  producer: string;
  release_date: string;
  title: string;
}
