type historyProps = {
  schoolInput: string;
  degreeInput: string;
  endeducationDateInput: string;
  descriptionInput: string;
};

//მარჯვენა მხარე
export default function EducationHistory({
  schoolInput,
  degreeInput,
  endeducationDateInput,
  descriptionInput,
}: historyProps) {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-lg text-mediumRed">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h2>
      <span className="mt-4 font-medium	">
        {schoolInput}
        {!schoolInput ? null : ","}
      </span>
      <span className="ml-2 font-medium">{degreeInput}</span>
      <div className="flex mt-2">
        <p className="mr-2 text-lightGray font-normal">
          {endeducationDateInput ? endeducationDateInput : ""}
        </p>
      </div>
      <p className="mt-4 w-[662px] border-b pb-8">{descriptionInput}</p>
    </div>
  );
}
