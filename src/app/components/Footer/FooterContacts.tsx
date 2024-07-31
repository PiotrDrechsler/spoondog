export const FooterContacts = () => {
  return (
    <div className="flex w-full flex-col gap-[4px] text-14 font-medium leading-[21px] desktop:max-w-[203px]">
      <h4 className="mb-3 text-base font-semibold leading-6 desktop:mb-6">
        Kontakt
      </h4>
      <p>Katarzyna Bober</p>
      <p className="font-normal">ul.Gruszkowa 26</p>
      <p className="font-normal">49-130 Tułowice</p>
      <p>Telefon</p>
      <a
        href="tel:+48692394385"
        className="font-normal underline transition duration-300 ease-in-out hover:text-violet focus:text-violet"
      >
        +48 692 394 385
      </a>
      <p>E-mail</p>
      <a
        href="mailto:salon@spoondog.eu"
        className="font-normal underline transition duration-300 ease-in-out hover:text-violet focus:text-violet"
      >
        salon@spoondog.eu
      </a>
    </div>
  );
};
