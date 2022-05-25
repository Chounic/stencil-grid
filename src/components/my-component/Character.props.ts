export interface CharacterProps {
    id: number;
    name: string;
    status: string;
    type: string;
    gender: string;
    species: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  
  export interface Location {
    name: string;
    url: string;
  }
  
  export interface Origin {
    name: string;
    url: string;
  }