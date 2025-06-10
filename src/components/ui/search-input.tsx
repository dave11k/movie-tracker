import { Button } from "./button"

interface SearchInputProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

export function SearchInput({ onSearch, isLoading }: SearchInputProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('search') as string;
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 w-full max-w-2xl">
      <input
        type="text"
        name="search"
        placeholder="Search for movies..."
        className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        disabled={isLoading}
        className="bg-blue-600 hover:bg-white hover:text-black transition-colors duration-200 px-8 h-[42px]"
      >
        {isLoading ? "Searching..." : "Search"}
      </Button>
    </form>
  );
} 