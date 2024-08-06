export interface SearchContextInterface {
    search: string;
    setSearch: (search: string) => void;
    active: boolean;
    setActive: (active: boolean) => void;
    searchResult: any[];
    setSearchResult: (searchResult: any[]) => void;
}