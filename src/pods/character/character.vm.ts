export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentence?: string;
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  created: '',
  episode: [],
  gender: '',
  image: '',
  location: {
    name: '',
    url: '',
  },
  origin: {
    name: '',
    url: '',
  },
  url: '',
  bestSentence: '',
});
