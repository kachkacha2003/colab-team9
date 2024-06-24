export default function EnterPersonalData() {
  return (
    <div className="bg-gray-100">
      <div className="flex pl-12 pt-12 pr-32 ">
        <div className="">
          <img src="/images/lefterrow.png" alt="" />
        </div>
        <div className="ml-16 w-[798px]">
          <div className=" flex justify-between border-b border-black">
            <span className="text-2xl	font-bold">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</span>
            <span className="text-xl">2/3</span>
          </div>
          <form className="mt-[70px]">
            <p className="font-medium">თანამდებობა</p>
            <input
              type="text"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              className="w-full px-4 py-[14px] mt-2 border outline-none"
            />
            <span className="text-sm font-light	mt-2">მინიმუმ 2 სიმბოლო</span>
            <p className="font-medium mt-3">თანამდებობა</p>
            <input
              type="text"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              className="w-full px-4 py-[14px] mt-2 border outline-none"
            />
            <span className="text-sm font-light	mt-2">მინიმუმ 2 სიმბოლო</span>
          </form>
        </div>
      </div>
    </div>
  );
}
