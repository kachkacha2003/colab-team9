type historyProps = {
  name: string;
  lastName: string;
};

export default function WorkHistory({ name, lastName }: historyProps) {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-lg text-mediumRed">{name}</h2>
      <div className="">{lastName}</div>
    </div>
  );
}
