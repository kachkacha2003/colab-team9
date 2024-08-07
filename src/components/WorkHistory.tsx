type historyProps = {
  positionInput: string;
  employerInput: string;
  start_date: string;
  endNumberInput: string;
  descriptionInput: string;
};

export default function WorkHistory({
  positionInput,
  employerInput,
  start_date,
  endNumberInput,
  descriptionInput,
}: historyProps) {
  return (
    <div className="mt-5">
      {positionInput ||
      employerInput ||
      start_date ||
      endNumberInput ||
      descriptionInput ||
      localStorage.getItem("position") ||
      localStorage.getItem("employer") ||
      localStorage.getItem("start_date") ||
      localStorage.getItem("endNumber") ||
      localStorage.getItem("description") ? (
        <h2 className="font-bold text-lg text-mediumRed">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h2>
      ) : null}
      <div className="mt-4 ">
        <span className=" font-medium	">
          {positionInput}
          {!positionInput ? null : ","}
        </span>
        <span className="ml-2 font-medium">
          {" "}
          {employerInput
            ? employerInput
            : localStorage.getItem("employer")
            ? localStorage.getItem("employer")
            : null}
        </span>
      </div>
      <div className="flex mt-2">
        <p className="mr-2 text-lightGray font-normal">
          {start_date
            ? start_date
            : localStorage.getItem("startNumber")
            ? localStorage.getItem("startNumber")
            : null}
        </p>
        {(start_date && endNumberInput) ||
        (localStorage.getItem("startNumber") &&
          localStorage.getItem("endNumber")) ? (
          <p className="text-lightGray font-normal"> - </p>
        ) : null}
        <p className="ml-2 text-lightGray font-normal">
          {endNumberInput
            ? endNumberInput
            : localStorage.getItem("endNumber")
            ? localStorage.getItem("endNumber")
            : null}
        </p>
      </div>
      <p className="mt-4 w-[662px] pb-8 ">
        {" "}
        {descriptionInput
          ? descriptionInput
          : localStorage.getItem("description")
          ? localStorage.getItem("description")
          : null}
      </p>
    </div>
  );
}
