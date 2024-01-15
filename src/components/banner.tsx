import { Image } from "@yext/pages-components";
import { title } from "process";
export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

type Banner = {
  name: string;
  address?: Address;
  openTime?: string;
  children?: React.ReactNode;
  img: string;
  mainPhone: string;
  title: string;
  headshot: any;
};

const Banner = (props: Banner) => {
  const { name, children, img, mainPhone, headshot, title } = props;

  return (
    <>
      <div className="relative h-auto">
        <div
          className="bg-cover bg-center "
          style={{ backgroundImage: `url("${img}")`, height: "450px" }}
        ></div>
        <div className="h-full w-full absolute top-0 left-0 z-2">
          <div className=" w-full absolute bg-black bg-opacity-60 flex items-center justify-center flex-col h-full text-white">
            <div className="relative text-center w-full">
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2	">
                <div className="   font-medium  ">
                  <div className="flex gap-6">
                    <div>
                      {headshot && (
                        <Image
                          className="inline-block !w-32 rounded-full"
                          image={headshot}
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-3 !text-xl text-left">
                      <div>{name}</div>
                      <div>{title}</div>
                      <div>
                        {mainPhone &&
                          mainPhone
                            .replace("+1", "")
                            .replace(/\D+/g, "")
                            .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default Banner;
