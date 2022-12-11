export default interface FilmsResponse {
  count: number;
  respons: boolean;
  totalResult: string;
  search: Search[];
}

export interface Search {
  poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
