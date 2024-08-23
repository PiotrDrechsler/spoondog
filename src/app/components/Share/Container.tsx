const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-[375px] px-[26px] tablet:max-w-[1440px] desktop:max-w-[1440px] desktop:px-[80px]">
      {children}
    </div>
  );
};

export default Container;
