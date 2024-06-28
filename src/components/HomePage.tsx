import React from "react";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="w-screen h-screen bg-[url('/path/to/your/image.jpg')] bg-cover bg-center bg-no-repeat"></div>
  );
};

export default HomePage;
