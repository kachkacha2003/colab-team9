import React from "react";

function Profile({ name, lastName, email, files, aboutme, phone }: Inputs) {
  return (
    <div>
      <h1>
        {name}
        {lastName}
      </h1>
      <address>{email}</address>
      <address>{phone}</address>
      {aboutme && <h4>ჩემ შესახებ</h4>}
      <p>{aboutme}</p>
      <img src={files} alt="your image" />
    </div>
  );
}

export default Profile;
