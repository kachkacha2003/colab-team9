type HistoryProps = {
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
}: HistoryProps) {
  return (
    <div className="mt-5">
      {positionInput ||
      employerInput ||
      start_dateInput ||
      end_dateInput ||
      infoInput ||
      localStorage.getItem("position") ||
      localStorage.getItem("employer") ||
      localStorage.getItem("startNumber") ||
      localStorage.getItem("endNumber") ||
      localStorage.getItem("description") ? (
        <h2 className="font-bold text-lg text-mediumRed">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h2>
      ) : null}
      <div className="mt-4 ">
        <span className=" font-medium	">
          {positionInput || localStorage.getItem("position")}
          {positionInput || localStorage.getItem("position") ? "," : ""}
        </span>
        <span className="ml-2 font-medium">
          {" "}
          {employerInput || localStorage.getItem("employer")}
        </span>
      </div>
      <div className="flex mt-2">
        <p className="mr-2 text-lightGray font-normal">
          {start_dateInput || localStorage.getItem("startNumber")}
        </p>
        {(start_dateInput && end_dateInput) ||
        (localStorage.getItem("startNumber") &&
          localStorage.getItem("endNumber")) ? (
          <p className="text-lightGray font-normal"> - </p>
        ) : null}
        <p className="ml-2 text-lightGray font-normal">
          {end_dateInput || localStorage.getItem("endNumber")}
        </p>
      </div>
      <p className="mt-4 w-[662px] pb-8 ">
        {" "}
        {infoInput || localStorage.getItem("description")}
      </p>
    </div>
  );
}
