import Button from "./Button";

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
          <form className="mt-[70px] border-b border-mediumGray pb-12">
            <p className="font-medium">თანამდებობა</p>
            <input
              type="text"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              className="w-full px-4 py-[14px] mt-2 border outline-none rounded"
            />
            <span className="text-sm font-light	mt-2">მინიმუმ 2 სიმბოლო</span>
            <p className="font-medium mt-3">თანამდებობა</p>
            <input
              type="text"
              placeholder="დეველოპერი, დიზაინერი, ა.შ."
              className="w-full px-4 py-[14px] mt-2 border outline-none rounded"
            />
            <span className="text-sm font-light	mt-2">მინიმუმ 2 სიმბოლო</span>
            <div className="mt-5 flex justify-between">
              <div className="">
                <p className="font-medium">დაწყების რიცხვი</p>
                <input
                  type="date"
                  placeholder="mm / dd / yyyy"
                  className="w-[370px] px-4 py-[14px] mt-2 border outline-none rounded"
                ></input>
              </div>
              <div className="">
                <p className="font-medium">დამთავრების რიცხვი</p>
                <input
                  type="date"
                  placeholder="mm / dd / yyyy"
                  className="w-[370px] px-4 py-[14px] mt-2 border outline-none rounded"
                ></input>
              </div>
            </div>
            <div className="w-full mt-5">
              <p className="font-medium">აღწერა</p>
              <textarea
                placeholder="თქვენი თანამშრომლობა და ზოგადი აზრები"
                className="w-full h-32 border mt-2 px-4 py-[14px] outline-none rounded"
              ></textarea>
            </div>
          </form>
          <div className="">
            <div className="p-4">
              <Button
                variant="secondary"
                onClick={() => console.log("Clicked!")}
              >
                ჩვეულებრივი ღილაკი
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}