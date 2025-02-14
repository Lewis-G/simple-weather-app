function CityCard({ name, onButtonPress, isFavourite }: Props) {
  return (
    <div className="flex justify-between items-center border p-4 rounded-lg shadow-sm outline outline-2 outline-blue-500 w-full max-w-md">
      <span className="text-lg font-semibold">{name}</span>
      <button
        onClick={() => onButtonPress(name)}
        className={`px-4 py-2 rounded ${
          isFavourite ? "bg-red-500 text-white" : "bg-blue-500 text-white"
        }`}
      >
        {isFavourite ? "Remove" : "Add"}
      </button>
    </div>
  );
}

interface Props {
  name: string;
  onButtonPress: (param: string) => void;
  isFavourite: boolean;
}

export default CityCard;
