
export interface Leaf {
  name: string;
}

export interface SubModule {
  name: string;
  leaves: Leaf[];
}

export interface Domain {
  name: string;
  subModules: SubModule[];
}
