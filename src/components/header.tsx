import { Image } from "@yext/pages-components";
type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/turtlehead-tacos",
  },
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <>
      <div className=" ">
        <nav className=" flex items-center justify-between">
          <img
            src="https://a.mktgcdn.com/p/rgrJchaykRq9OFDCECGsY-V0eZGrAjJoX49lLOA7ixY/2880x194.png"
            className="w-full"
            alt=""
          />
        </nav>
      </div>
    </>
  );
};

export default Header;
