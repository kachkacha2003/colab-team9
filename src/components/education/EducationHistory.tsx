type historyProps = {
  educationInput: string;
  degreeInput: string;
  end_dateInput: string;
  infoInput: string;
};

export default function EducationHistory({
  educationInput,
  degreeInput,
  end_dateInput,
  infoInput,
}: historyProps) {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-lg text-mediumRed">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h2>
      <span className="mt-4 font-medium	">
        {educationInput}
        {!educationInput ? null : ","}
      </span>
      <span className="ml-2 font-medium">{degreeInput}</span>
      <div className="flex mt-2">
        <p className="mr-2 text-lightGray font-normal">
          {end_dateInput ? end_dateInput : ""}
        </p>
      </div>
      <p className="mt-4 w-[662px] border-b pb-8">{infoInput}</p>
    </div>
  );
}
