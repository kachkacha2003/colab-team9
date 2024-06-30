type historyProps = {
  positionInput: string;
  employerInput: string;
  startNumberInput: string;
  endNumberInput: string;
  descriptionInput: string;
};

//მარჯვენა მხარე

export default function EducationHistory({
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
      <span className="mt-4 font-medium	">
        {positionInput}
        {!positionInput ? null : ","}
      </span>
      <span className="ml-2 font-medium">{employerInput}</span>
      <div className="flex mt-2">
        <p className="mr-2 text-lightGray font-normal">
          {startNumberInput ? startNumberInput.toString() : ""}
        </p>
        {startNumberInput && endNumberInput && (
          <p className="text-lightGray font-normal"> - </p>
        )}
        <p className="ml-2 text-lightGray font-normal">
          {endNumberInput ? endNumberInput.toString() : ""}
        </p>
      </div>
      <p className="mt-4 w-[662px] border-b pb-8">{descriptionInput}</p>
    </div>
  );
}
