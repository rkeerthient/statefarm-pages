import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Hours from "../components/hours";
import PageLayout from "../components/page-layout";
import StaticMap from "../components/static-map";
import "../index.css";
import { Image, LexicalRichText } from "@yext/pages-components";
import ServiceAreaMap from "../components/ServiceAreaMap";
import PhotoCarousel from "../components/PhotoCarousel";
import InsuranceProductsCarousel from "../components/InsuranceProductsCarousel";
import TeamCarousel from "../components/TeamCarousel";
import {
  C_educationDetails,
  C_insuranceProducts,
} from "../types/financial_professionals";
import reviews from "../components/reviews.json";
import ReviewsCarousel from "../components/ReviewsCarousel";
import { useState } from "react";
import Banner from "../components/banner";
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "geocodedCoordinate",
      "services",
      "c_shortBio",
      "c_heroBanner",
      "photoGallery",
      "headshot",
      "c_licensedStates",
      "c_fullBiography",
      "c_professionalsInsuranceProducts.id",
      "c_professionalsInsuranceProducts.landingPageUrl",
      "c_professionalsInsuranceProducts.bodyV2",
      "c_professionalsInsuranceProducts.c_blogShortDescription",
      "c_professionalsInsuranceProducts.name",
      "c_professionalsInsuranceProducts.c_category",
      "c_professionalsInsuranceProducts.datePosted",
      "c_professionalsInsuranceProducts.photoGallery",
      "c_insuranceProducts",
      "yearsOfExperience",
      "certifications",
      "c_languagesSpoken",
      "interests",
      "c_teamMembers.name",
      "c_teamMembers.c_jobTitle",
      "c_teamMembers.slug",
      "c_teamMembers.headshot",
      "c_teamDescription",
      "c_teamName",
      "c_educationDetails.degree",
      "c_educationDetails.school",
      "c_hobbiesAndInterests",
      "c_officeHours",
      "c_professionalSecondaryAddress.id",
      "c_professionalSecondaryAddress.name",
      "c_professionalSecondaryAddress.primaryPhoto",
      "c_professionalSecondaryAddress.address",
      "c_professionalProduct.name",
      "c_professionalProduct.c_shortDescription",
      "c_professionalProduct.photoGallery",
      "c_professionalProduct.slug",
      "c_template",
      "c_fonts",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["financialProfessional"],
    },
    localization: {
      locales: ["en"],
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug
    ? document.slug
    : `${document.locale}/${document.address.region}/${document.address.city}/${
        document.address.line1
      }-${document.id.toString()}`;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    name,
    address,
    c_shortBio,
    mainPhone,
    geocodedCoordinate,
    c_heroBanner,
    photoGallery,
    headshot,
    c_fonts,
    c_licensedStates,
    c_fullBiography,
    c_professionalsInsuranceProducts,
    c_insuranceProducts,
    c_teamMembers,
    c_teamDescription,
    c_teamName,
    c_languagesSpoken,
    c_educationDetails,
    c_hobbiesAndInterests,
    certifications,
    c_officeHours,
    c_professionalSecondaryAddress,
    c_professionalProduct,
    c_template,
  } = document;

  const getType = (item: any) => {
    return item.isClosed
      ? `Closed`
      : item.openIntervals[0].start === "00:00" &&
          item.openIntervals[0].end === "23:59"
        ? `24 Hours`
        : item.openIntervals.length >= 2
          ? `Split`
          : `Open`;
  };
  const [openTab, setOpenTab] = useState(0);

  return (
    <>
      <PageLayout>
        <div
          className="bg-white w-full mb-4"
          style={{
            fontFamily:
              document.c_fonts &&
              document.c_fonts.toLowerCase().replaceAll(" ", ""),
          }}
        >
          <div>
            {c_heroBanner && headshot && (
              <Banner
                headshot={headshot}
                img={c_heroBanner.url}
                name={name}
                mainPhone={mainPhone}
                title="STATE FARM® INSURANCE AGENT"
              ></Banner>
            )}
            {c_template !== "TEMPLATE_A" ? (
              <div className="centered-container my-4">
                <div className="flex w-full gap-8 items-center">
                  <div className="w-1/3">
                    <div className="flex flex-col gap-2 ">
                      <div className="gap-y-8">
                        <div className="text-xl font-semibold mb-4">
                          Address
                        </div>
                        <div className=" gap-y-3">
                          <div>{address.line1}</div>
                          {address.line2 && <div>{address.line2}</div>}
                          <div>
                            {address.city}, {address.region}{" "}
                            {address.postalCode}
                          </div>
                        </div>
                        <div className="w-fit mt-4 text-sm hover:border-b bg-[#d62211] text-white py-2 px-4 rounded-full font-bold border hover:cursor-pointer hover:border-[#d62211] hover:bg-white hover:text-[#d62211]">
                          Get Directions
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="w-1/3">
                    {geocodedCoordinate && (
                      <StaticMap
                        latitude={geocodedCoordinate.latitude}
                        longitude={geocodedCoordinate.longitude}
                      ></StaticMap>
                    )}
                  </div>
                  <div className="w-1/3">
                    {c_officeHours && (
                      <div className="mt-2 !text-sm">
                        {JSON.stringify(c_officeHours) !== "{}" && (
                          <Hours
                            customclass="text-sm !mb-2"
                            title={"I'm available on"}
                            hours={c_officeHours}
                          />
                        )}
                        {c_officeHours.holidayHours &&
                          c_officeHours.holidayHours.length >= 1 && (
                            <div className="mt-2 text-sm text-[#d62211]">
                              <div className=" font-semibold mb-2">
                                Upcoming Holidays
                              </div>
                              <div className="flex flex-col ">
                                {c_officeHours.holidayHours.map(
                                  (item: any, index: any) => {
                                    let type = getType(item);

                                    return (
                                      <div
                                        key={index}
                                        className="flex gap-4 pr-8"
                                      >
                                        <div className="w-1/4">
                                          {new Date(
                                            Date.parse(item.date)
                                          ).toLocaleDateString("en-US")}
                                        </div>
                                        {type === "Closed" ||
                                          (type === "24 Hours" && (
                                            <div>{type}</div>
                                          ))}

                                        {type !== "Closed" &&
                                          type !== "24 Hours" && (
                                            <div className="flex-1">
                                              {item.openIntervals[0].start} -{" "}
                                              {item.openIntervals[0].end}
                                            </div>
                                          )}
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 my-4 mb-8">
                  <div className="text-xl font-semibold ">About me</div>
                  <div>
                    {c_shortBio ? (
                      <LexicalRichText
                        serializedAST={JSON.stringify(c_shortBio.json)}
                      />
                    ) : (
                      `Enter a short bio in the entity`
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full flex flex-col md:flex-row  mt-4 centered-container">
                <div className="w-full md:w-2/3 ">
                  <div className="text-xl font-semibold mb-4">About me</div>
                  <div>
                    {c_shortBio ? (
                      <LexicalRichText
                        serializedAST={JSON.stringify(c_shortBio.json)}
                      />
                    ) : (
                      `Enter a short bio in the entity`
                    )}
                  </div>
                  <div className="py-4 px-16 mx-auto my-auto hidden md:block">
                    {geocodedCoordinate && (
                      <StaticMap
                        latitude={geocodedCoordinate.latitude}
                        longitude={geocodedCoordinate.longitude}
                      ></StaticMap>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <span className=" hidden md:block">
                    <div className="gap-y-5">
                      <div className="text-xl font-semibold mb-4">Address</div>
                      <div className="  gap-y-3">
                        <div>{address.line1}</div>
                        {address.line2 && <div>{address.line2}</div>}
                        <div>
                          {address.city}, {address.region} {address.postalCode}
                        </div>
                      </div>
                    </div>
                  </span>
                  {c_officeHours && (
                    <div className="mt-8">
                      {JSON.stringify(c_officeHours) !== "{}" && (
                        <Hours
                          title={"I'm available on"}
                          hours={c_officeHours}
                        />
                      )}
                      {c_officeHours.holidayHours &&
                        c_officeHours.holidayHours.length >= 1 && (
                          <div className="mt-4 text-sm text-[#d62211]">
                            <div className="text-xl font-semibold mb-4">
                              Upcoming Holidays
                            </div>
                            <div className="flex flex-col ">
                              {c_officeHours.holidayHours.map(
                                (item: any, index: any) => {
                                  let type = getType(item);

                                  return (
                                    <div
                                      key={index}
                                      className="flex gap-4 pr-8"
                                    >
                                      <div className="w-1/4">
                                        {new Date(
                                          Date.parse(item.date)
                                        ).toLocaleDateString("en-US")}
                                      </div>
                                      {type === "Closed" ||
                                        (type === "24 Hours" && (
                                          <div>{type}</div>
                                        ))}

                                      {type !== "Closed" &&
                                        type !== "24 Hours" && (
                                          <div className="flex-1">
                                            {item.openIntervals[0].start} -{" "}
                                            {item.openIntervals[0].end}
                                          </div>
                                        )}
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {c_professionalSecondaryAddress && (
          <div className="flex-col flex gap-2 centered-container mb-8">
            <div className="font-medium">My Offices</div>
            <div className="grid grid-cols-4 gap-4">
              {c_professionalSecondaryAddress.map((item: any, index: any) => (
                <div
                  className="flex flex-col gap-2 shadow-md text-sm"
                  key={index}
                >
                  <Image
                    image={item.primaryPhoto}
                    className="!aspect-square"
                  ></Image>
                  <div className="mt-2 flex flex-col gap-2 p-2">
                    <div className="font-medium">{item.name}</div>
                    <div>
                      <div>{item.address.line1}</div>
                      {item.address.line2 && <div>{item.address.line2}</div>}
                      <div>
                        {item.address.city}, {item.address.region}{" "}
                        {item.address.postalCode}
                      </div>
                    </div>
                  </div>
                  <div className="border text-center flex justify-center py-2 px-4 mx-4 bg-[#d62211] text-white hover:cursor-pointer hover:bg-[#f7cbc7] rounded-full mb-4">
                    Get Directions
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="bg-[#f7f0e4] p-8 mb-4">
          <div className="grid grid-cols-3 centered-container w-2/3 !px-0">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <div className="text-xl font-medium">Experience</div>
                <div>34 Years</div>
              </div>

              {c_languagesSpoken && (
                <div className="flex flex-col">
                  <div className="text-xl font-medium">Languages</div>
                  {c_languagesSpoken.map((item: string, index: any) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-2">
                {c_insuranceProducts && (
                  <div className="flex flex-col">
                    <div className="text-xl font-medium">
                      Insurance Products
                    </div>
                    {c_insuranceProducts.map((item: any, index: any) => (
                      <div key={index}>{C_insuranceProducts[item]}</div>
                    ))}
                  </div>
                )}
                {c_hobbiesAndInterests && (
                  <div className="flex flex-col">
                    <div className="text-xl font-medium">
                      Hobbies & Interests
                    </div>
                    {c_hobbiesAndInterests.map((item: any, index: any) => (
                      <div key={index}>{item}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-2">
                {certifications && (
                  <div className="flex flex-col">
                    <div className="text-xl font-medium">Certifications</div>
                    {certifications.map((item: any, index: any) => (
                      <div key={index}>{item}</div>
                    ))}
                  </div>
                )}
                {c_educationDetails && (
                  <div className="flex flex-col">
                    <div className="text-xl font-medium">Degree</div>
                    {c_educationDetails.map(
                      (item: C_educationDetails, index: any) => (
                        <div key={index}>
                          {item.degree} - {item.school}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {c_professionalsInsuranceProducts && (
          <InsuranceProductsCarousel
            data={c_professionalsInsuranceProducts}
          ></InsuranceProductsCarousel>
        )}
        {c_professionalProduct && (
          <div className="px-8  centered-container w-2/3">
            <div className=" mt-10 mb-10 ">
              <div className="text-3xl font-light mx-auto text-center headColor">
                Services
              </div>
              <div className="border mt-4">
                <ul className="flex flex-wrap text-center border-b bg-[#f7cbc7]">
                  {c_professionalProduct.map((item: any, index: any) => {
                    return (
                      <li key={index} className="w-full md:w-auto md:mr-2">
                        <a
                          onClick={() => setOpenTab(index)}
                          className={`${
                            openTab === index
                              ? "w-full md:w-auto inline-block p-4 active cursor-pointer bg-[#d62211] text-white"
                              : "w-full md:w-auto inline-block p-4 active cursor-pointer	text-white"
                          }`}
                        >
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div className="  p-4 py-6 bg-[#f7f0e4] ">
                  {c_professionalProduct.map((item: any, index: any) => {
                    return (
                      <div
                        key={index}
                        className={openTab === index ? "block" : "hidden"}
                      >
                        <div className="mb-8 h-16">
                          {item.c_shortDescription}
                        </div>

                        <a
                          href={`/${item.slug}`}
                          className=" hover:border-b bg-[#d62211] text-white py-3 px-6 rounded-full font-bold border hover:cursor-pointer hover:border-[#d62211] hover:bg-white hover:text-[#d62211]"
                        >
                          Learn more
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="mb-4 bg-[#f7f0e4]">
          {c_licensedStates && (
            <div className="centered-container ">
              <div className=" flex justify-between px-4   mt-8">
                <div className="w-1/2 flex justify-between items-center">
                  {name} is based out of {address.city},{address.region}, And is
                  licensed in the following states:{" "}
                  {c_licensedStates.map((item: any) => item).join(", ")}
                </div>
                <div className="w-1/2">
                  <ServiceAreaMap states={c_licensedStates} />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex p-8 flex-col gap-8 centered-container mb-4">
          {c_fullBiography && (
            <div className="flex flex-col gap-2">
              <div className="font-bold text-lg">More about me</div>
              <LexicalRichText
                serializedAST={JSON.stringify(c_fullBiography.json)}
              />
            </div>
          )}
          {photoGallery && (
            <div>
              <PhotoCarousel data={photoGallery}></PhotoCarousel>
            </div>
          )}
        </div>
        {c_teamName && c_teamMembers && (
          <div className="my-4 bg-[#f7f0e4]">
            <TeamCarousel
              teamName={c_teamName}
              teamMembersData={c_teamMembers}
              teamDescription={c_teamDescription}
            ></TeamCarousel>
          </div>
        )}
        <div className="my-4 bg-white">
          <ReviewsCarousel
            reviewTitle={"Reviews"}
            reviewsData={reviews}
            reviewDescription={"Test Description"}
          ></ReviewsCarousel>
        </div>
      </PageLayout>
    </>
  );
};

export default Location;
