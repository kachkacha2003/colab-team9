export default function Popup() {
  return (
    <div className="relative bg-white rounded-lg shadow-2xl px-8 py-10 w-[427px] mx-auto mt-10 mb-10">
      <button title="button" className="absolute top-2 right-2 text-gray-500 ">
        <img src="/images/x-bold.png" alt="" className="" />
      </button>
      <p className="text-center text-lg font-medium text-[28px] leading-[43px]">
        რეზიუმე წარმატებით გაიგზავნა
        <span className="ml-2">🎉</span>
      </p>
    </div>
  );
}
