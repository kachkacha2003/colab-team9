type historyProps = {
  positionInput: string;
  employerInput: string;
  start_dateInput: string;
  end_dateInput: string;
  infoInput: string;
};

//მარჯვენა მხარე

export default function WorkHistory({
  positionInput,
  employerInput,
  start_dateInput,
  end_dateInput,
  infoInput,
}: historyProps) {
  console.log(start_dateInput);

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
          {start_dateInput ? start_dateInput.toString() : ""}
        </p>
        {start_dateInput && end_dateInput && (
          <p className="text-lightGray font-normal"> - </p>
        )}
        <p className="ml-2 text-lightGray font-normal">
          {end_dateInput ? end_dateInput.toString() : ""}
        </p>
      </div>
      <p className="mt-4 w-[662px] border-b pb-8">{infoInput}</p>
    </div>
  );
}
