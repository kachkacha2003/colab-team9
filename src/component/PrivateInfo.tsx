import React from "react";

function PrivateInfo() {
  return (
    <div>
      <h1>პირადი ინფო</h1>
      <span>1/3</span>
      <label htmlFor="name">სახელი</label>
      <input type="text" id="name"></input>
      <label htmlFor="lastName">გვარი</label>
      <input type="text" id="lastName"></input>
      <label htmlFor="files">პირადი ინფოს ატვირთვა</label>
      <input type="file" id="files"></input>
      <label htmlFor="aboutme">ჩემ შესახებ (არასავალდებულო)</label>
      <input type="text" id="aboutme"></input>
      <label htmlFor="mail">ელ.ფოსტა</label>
      <input type="email" id="mail"></input>
      <label htmlFor="phone">მობილურის ნომერი</label>
      <input type="tel" id="phone"></input>
    </div>
  );
}

export default PrivateInfo;
