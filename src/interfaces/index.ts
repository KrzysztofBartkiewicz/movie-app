export interface MovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface SingleMovieData extends MovieData {
  belongs_to_collection: boolean;
  budget: number;
  genres: object[];
  homepage: string;
  imdb_id: string;
  production_companies: object[];
  production_countries: object[];
  revenue: number;
  runtime: number;
  spoken_languages: object[];
  status: string;
  tagline: string;
}

interface Member {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
}

export interface CastMember extends Member {
  character: string;
  cast_id: number;
  order: number;
}

export interface CrewMember extends Member {
  department: string;
  job: string;
}
