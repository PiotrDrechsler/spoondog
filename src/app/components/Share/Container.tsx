const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[375px] px-[26px] mx-auto desktop:max-w-[1440px] desktop:px-[80px]">
      {children}
    </div>
  );
};

export default Container;
