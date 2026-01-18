import AppThumbnail from "../assets/images/common/app_thumbnail.webp";

const Header = () => {
  return (
    <header className={"w-full p-[12px] flex items-center justify-center"}>
      <img
        src={AppThumbnail}
        alt={"Sculptique Logo"}
        className={"w-[160px] object-cover"}
      />
    </header>
  );
};

export default Header;
