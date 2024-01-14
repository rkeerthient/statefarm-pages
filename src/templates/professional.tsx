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
    hours,
    mainPhone,
    geocodedCoordinate,
    c_heroBanner,
    photoGallery,
    headshot,
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
  return (
    <>
      <PageLayout>
        <div className="bg-white w-full mb-4">
          <div>
            <div className="relative text-center">
              {c_heroBanner && (
                <Image
                  className="!max-w-none"
                  image={c_heroBanner}
                  style={{ maxHeight: "470px" }}
                ></Image>
              )}
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2	">
                <div className="text-4xl headColor font-medium h-64">
                  <div className="flex gap-6">
                    <div>
                      {headshot && (
                        <Image
                          className="inline-block h-32 !w-32 rounded-full"
                          image={headshot}
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-3">
                      <div>
                        {name.includes("-") ? name.split("-")[0] : name}
                      </div>
                      <div className="text-3xl">
                        {name.includes("-")
                          ? name
                              .split("-")[1]
                              .replace("RBC Wealth Management ", "")
                          : ""}
                      </div>
                      <div className="text-2xl">
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

            <div className="w-full flex flex-col md:flex-row  mt-4 centered-container">
              <div className="w-full md:w-2/3 ">
                <div className="text-xl font-semibold mb-4">About me</div>
                <div className="px-2">
                  {c_shortBio ? c_shortBio : `Enter a short bio in the entity`}
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
                  <div className="  gap-y-5">
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
                      <Hours title={"I'm available on"} hours={c_officeHours} />
                    )}
                    {JSON.stringify(c_officeHours) !== "{}" &&
                      c_officeHours.holidayHours.length >= 1 && (
                        <div className="mt-4 text-sm text-[#e46155]">
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
                                    className="grid grid-cols-3 gap-2 pr-8"
                                  >
                                    <div>
                                      {new Date(
                                        Date.parse(item.date)
                                      ).toLocaleDateString("en-US")}
                                    </div>
                                    <div>{type}</div>

                                    <div>
                                      {item.openIntervals[0].start} -{" "}
                                      {item.openIntervals[0].end}
                                    </div>
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
          </div>
        </div>
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
      </PageLayout>
    </>
  );
};

export default Location;
