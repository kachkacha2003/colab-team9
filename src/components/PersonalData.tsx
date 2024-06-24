export default function PersonalData() {
  return (
    <div className="flex p-5 border-b ml-20">
      <div className="">
        <div className="text-mediumRed text-[34px] font-bold">
          <span className="">ანზორ</span>
          <span className="ml-5">მუმლაძე</span>
        </div>
        <div className="flex items-center mt-4">
          <img src="/images/alternate-email.png" alt="" />
          <span className="text-lg ml-3">anzorr666@redberry.ge</span>
        </div>
        <div className="flex items-center mt-2">
          <img src="/images/phone.png" alt="" />
          <span className="text-lg ml-3">+995 597 63 45 16</span>
        </div>
        <div className="mt-9">
          <span className="text-lg text-mediumRed font-bold">ჩემ შესახებ</span>
          <div className="leading-6 max-w-[432px] mt-4 font-normal">
            ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები
            გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.
          </div>
        </div>
      </div>
      <div className="">
        <img src="/images/person-image.png" alt="person-image.png" />
      </div>
    </div>
  );
}
