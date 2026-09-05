const Title = ({ title }: { title: string }) => {
  return (
    <header className="py-5 lg:py-10 w-full text-center">
      <h1 className="font-nunito text-[40px] font-bold text-[#333333]">{title}</h1>
    </header>
  );
};

export default Title;
