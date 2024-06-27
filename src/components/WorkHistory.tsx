type historyProps = {
  positionInput: string;
  employerInput: string;
  startNumberInput: Date;
  endNumberInput: Date;
  descriptionInput: string;
};

export default function WorkHistory({
  positionInput,
  employerInput,
  startNumberInput,
  endNumberInput,
  descriptionInput,
}: historyProps) {
  console.log(startNumberInput);

  return (
    <div className="mt-5">
      <h2 className="font-bold text-lg text-mediumRed">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h2>
      <span className="">
        {positionInput}
        {!positionInput ? null : ","}
      </span>
      <span className="ml-2">{employerInput}</span>
      <div className="">
        <p>{startNumberInput ? startNumberInput.toString() : ""}</p>
        <p>{endNumberInput ? endNumberInput.toString() : ""}</p>
      </div>
      <p>{descriptionInput}</p>
    </div>
  );
}
