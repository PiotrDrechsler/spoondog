const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-[390px] px-[26px] tablet:max-w-[835px] desktop:max-w-[1440px] desktop:px-[80px]">
      {children}
    </div>
  );
};

export default Container;
