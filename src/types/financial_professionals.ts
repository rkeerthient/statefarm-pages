export enum Category {
  BOOK_TRAVEL = "Book Travel",
  CHECK_IN = "Check in",
  FEES_POLICIES = "Fees Policies - Deprecated",
  FLIGHT_STATUS = "Flight Status",
  TICKETS = "Tickets",
  TICKETING = "Ticketing - Deprecated",
  AMENITIES = "Amenities",
  RESERVE = "Reserve - Deprecated",
  FRONT_DESK = "Front Desk - Deprecated",
  PARKING = "Parking",
  GIFT_CARD = "Gift Card",
  WAITLIST = "Waitlist",
  DELIVERY = "Delivery (Restaurant)",
  ORDER = "Order (Restaurant)",
  TAKEOUT = "Takeout - Deprecated",
  PICKUP = "Pickup (Restaurant)",
  RESERVET = "Reserve (Restaurant)",
  MENU = "Menu",
  APPOINTMENT = "Appointment - Deprecated",
  PORTFOLIO = "Portfolio - Deprecated",
  QUOTE = "Quote",
  SERVICES = "Services",
  STORE_ORDERS = "Store Orders - Deprecated",
  STORE_SHOP = "Store Shop - Deprecated",
  STORE_SUPPORT = "Store Support - Deprecated",
  SCHEDULE = "Schedule",
  SHOWTIMES = "Showtimes",
  AVAILABILITY = "Availability",
  PRICING = "Pricing",
  ACTIVITIES = "Activities",
  BOOK = "Book",
  BOOK__HOTEL_ = "Book (Hotel)",
  BOOK__RIDE_ = "Book Ride",
  BOOK__TOUR_ = "Book Tour",
  CAREERS = "Careers",
  CHARGE = "Charge",
  COUPONS = "Coupons",
  DELIVERY__RETAIL_ = "Delivery (Retail)",
  DONATE = "Donate",
  EVENTS = "Events",
  ORDER__RETAIL_ = "Order (Retail)",
  OTHER_MENU = "Other Menu - Deprecated",
  PICKUP__RETAIL_ = "Pickup (Retail)",
  RESERVE__PARKING_ = "Reserve (Parking)",
  SHOWS = "Shows",
  SPORTS = "Sports",
  SUPPORT = "Support",
  TEE_TIME = "Tee Time",
  GIFT_CARD__RESTAURANT_ = "Gift Card (Restaurant) - Deprecated",
}

export interface AppleActionLinks {
  category: Category;
  appStoreUrl: string;
  quickLinkUrl: string;
  appName: string;
}

export interface ImageThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  url: string;
  width: number;
  height: number;
  thumbnails?: ImageThumbnail[];
  alternateText?: string;
}

export enum Type {
  DEPARTMENT_IN = "Department In",
  INDEPENDENT_ESTABLISHMENT_IN = "Independent Establishment In",
}

export interface GoogleEntityRelationship {
  type: Type;
  placeId: string;
}

export interface Interval {
  start: any;
  end: any;
}

export interface DayHour {
  openIntervals?: Interval[];
  isClosed?: boolean;
}

export interface HolidayHours {
  date: string;
  openIntervals?: Interval[];
  isClosed?: boolean;
  isRegularHours?: boolean;
}

export interface Hours {
  monday?: DayHour;
  tuesday?: DayHour;
  wednesday?: DayHour;
  thursday?: DayHour;
  friday?: DayHour;
  saturday?: DayHour;
  sunday?: DayHour;
  holidayHours?: HolidayHours[];
  reopenDate?: string;
}

export enum Type_1 {
  POSTAL_CODE = "Postal Code",
  REGION = "State/Region",
  COUNTY = "County",
  CITY = "City",
  SUBLOCALITY = "Sublocality",
}

export interface ServiceAreaPlaces {
  name?: string;
  type?: Type_1;
}

export interface Address {
  line1?: string;
  line2?: string;
  line3?: string;
  sublocality?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  extraDescription?: string;
  countryCode?: string;
}

export interface ComplexImage {
  image: Image;
  details?: string;
  description?: string;
  clickthroughUrl?: string;
}

export interface Coordinate {
  latitude?: number;
  longitude?: number;
}

export interface C_educationDetails {
  school?: string;
  degree?: string;
}

export enum C_fonts {
  SANS_SERIF = "Sans-serif",
  SERIF = "Serif",
  MONOSPACE = "Monospace",
  BANGERS = "Bangers",
  ROBOTO = "Roboto",
  OPEN_SANS = "Open Sans",
  LATO = "Lato",
  RECURSIVE = "Recursive",
  POPPINS = "Poppins",
  BOWL_BY_ONE = "Bowl by One",
}

export enum C_insuranceProducts {
  AUTO_INSURANCE = "Auto Insurance",
  BOAT_INSURANCE = "Boat Insurance",
  BUSINESS_INSURANCE = "Business Insurance",
  CONDO_INSURANCE = "Condo Insurance",
  HEALTH_INSURANCE = "Health Insurance",
  HOMEOWNERS_INSURANCE = "Homeowners Insurance",
  LIFE_INSURANCE = "Life Insurance",
  MOTORCYCLE_INSURANCE = "Motorcycle Insurance",
  PERSONAL_ARTICLES_INSURANCE = "Personal Articles Insurance",
  RENTERS_INSURANCE = "Renters Insurance",
  RV_INSURANCE = "RV Insurance",
}

export enum C_licensedStates {
  AL = "Alabama",
  AK = "Alaska",
  AZ = "Arizona",
  AR = "Arkansas",
  CA = "California",
  CO = "Colorado",
  CT = "Connecticut",
  DE = "Delaware",
  FL = "Florida",
  GA = "Georgia",
  HI = "Hawaii",
  ID = "Idaho",
  IL = "Illinois",
  IN = "Indiana",
  IA = "Iowa",
  KS = "Kansas",
  KY = "Kentucky",
  LA = "Louisiana",
  ME = "Maine",
  MD = "Maryland",
  MA = "Massachusetts",
  MI = "Michigan",
  MN = "Minnesota",
  MS = "Mississippi",
  MO = "Missouri",
  MT = "Montana",
  NE = "Nebraska",
  NV = "Nevada",
  NH = "New Hampshire",
  NJ = "New Jersey",
  NM = "New Mexico",
  NY = "New York",
  NC = "North Carolina",
  ND = "North Dakota",
  OH = "Ohio",
  OK = "Oklahoma",
  OR = "Oregon",
  PA = "Pennsylvania",
  RI = "Rhode Island",
  SC = "South Carolina",
  SD = "South Dakota",
  TN = "Tennessee",
  TX = "Texas",
  UT = "Utah",
  VT = "Vermont",
  VA = "Virginia",
  WA = "Washington",
  WV = "West Virginia",
  WI = "Wisconsin",
  WY = "Wyoming",
}

export interface EntityReference {
  entityId: string;
  name: string;
}

export enum C_template {
  TEMPLATE_A = "Template A",
  TEMPLATE_B = "Template B",
}

export enum Type_2 {
  NONE = "None",
  BOOK_NOW = "Book Now",
  CALL_NOW = "Call Now",
  CONTACT_US = "Contact Us",
  SEND_MESSAGE = "Send Message",
  USE_APP = "Use App",
  PLAY_GAME = "Play Game",
  SHOP_NOW = "Shop Now",
  SIGN_UP = "Sign Up",
  WATCH_VIDEO = "Watch Video",
  SEND_EMAIL = "Send Email",
  LEARN_MORE = "Learn More",
  PURCHASE_GIFT_CARDS = "Purchase Gift Cards",
  ORDER_NOW = "Order Now",
  FOLLOW_PAGE = "Follow Page",
}

export interface FacebookCallToAction {
  type: Type_2;
  value?: string;
}

export interface FeaturedMessage {
  description?: string;
  url?: string;
}

export interface MenuUrl {
  url?: string;
  displayUrl?: string;
  preferDisplayUrl?: boolean;
}

export interface OrderUrl {
  url?: string;
  displayUrl?: string;
  preferDisplayUrl?: boolean;
}

export enum PaymentOptions {
  AFTERPAY = "Afterpay",
  ALIPAY = "Alipay",
  AMERICANEXPRESS = "American Express",
  ANDROIDPAY = "Google Pay",
  APPLEPAY = "Apple Pay",
  ATM = "ATM",
  ATMQUICK = "ATM Quick",
  BACS = "BACS",
  BANCONTACT = "Bancontact",
  BANKDEPOSIT = "Bank Deposit",
  BANKPAY = "Bank Pay",
  BGO = "Bank/Giro Overschrijving",
  BITCOIN = "Bitcoin",
  Bar = "Bargeld",
  CARTASI = "CartaSi",
  CASH = "Cash",
  CCS = "CCS",
  CHECK = "Check",
  CONB = "Contactloos betalen",
  CONTACTLESSPAYME = "Contactless Payment",
  CVVV = "Cadeaubon/VVV bon",
  DEBITNOTE = "Debit Note",
  DINERSCLUB = "Diners Club",
  DIRECTDEBIT = "Direct Debit",
  DISCOVER = "Discover",
  ECKARTE = "Girokarte",
  ECOCHEQUE = "EcoCheque",
  EKENA = "E-kena",
  EMV = "Elektronische Maaltijdcheques",
  FINANCING = "Financing",
  GOPAY = "GoPay",
  HAYAKAKEN = "Hayakaken",
  HEBAG = "He-Bag",
  IBOD = "iBOD",
  ICCARDS = "IC Cards",
  ICOCA = "Icoca",
  ID = "iD",
  IDEAL = "iDeal",
  INCA = "Incasso",
  INVOICE = "Invoice",
  JCB = "JCB",
  JCoinPay = "J−Coin Pay",
  JKOPAY = "JKO Pay",
  KITACA = "Kitaca",
  KLA = "Klantenkaart",
  KLARNA = "Klarna",
  LINEPAY = "LINE Pay",
  MAESTRO = "Maestro",
  MANACA = "Manaca",
  MASTERCARD = "MasterCard",
  MIPAY = "Mi Pay",
  MONIZZE = "Monizze",
  MPAY = "MPay",
  Manuelle_Lastsch = "Manuelle Lastschrift",
  Merpay = "メルPay",
  NANACO = "nanaco",
  NEXI = "Nexi",
  NIMOCA = "Nimoca",
  OREM = "Onder Rembours",
  PASMO = "Pasmo",
  PAYBACKPAY = "Payback Pay",
  PAYBOX = "Paybox",
  PAYCONIQ = "Payconiq",
  PAYPAL = "PayPal",
  PAYPAY = "PayPay",
  PAYSEC = "PaySec",
  PIN = "PIN",
  POSTEPAY = "Postepay",
  QRCODE = "QR Code Payment",
  QUICPAY = "QUICPay",
  RAKUTENEDY = "Rakuten Edy",
  RAKUTENPAY = "楽天Pay",
  SAMSUNGPAY = "Samsung Pay",
  SODEXO = "Sodexo",
  SUGOCA = "Sugoca",
  SUICA = "Suica",
  SWISH = "Swish",
  TICKETRESTAURANT = "Ticket Restaurant",
  TOICA = "Toica",
  TRAVELERSCHECK = "Traveler's Check",
  TSCUBIC = "TS CUBIC",
  TWINT = "Twint",
  UNIONPAY = "China UnionPay",
  VEV = "Via een verzekering",
  VISA = "Visa",
  VISAELECTRON = "Visa Electron",
  VOB = "Vooruit betalen",
  VOUCHER = "Voucher",
  VPAY = "V PAY",
  WAON = "WAON",
  WECHATPAY = "WeChat Pay",
  WIRETRANSFER = "Wire Transfer",
  Yucho_Pay = "ゆうちょPay",
  ZELLE = "Zelle",
  AuPay = "auPay",
  DBarai = "d払い ",
  Überweisung = "Banküberweisung",
}

export interface ReservationUrl {
  url?: string;
  displayUrl?: string;
  preferDisplayUrl?: boolean;
}

export interface WebsiteUrl {
  url?: string;
  displayUrl?: string;
  preferDisplayUrl?: boolean;
}

export interface ComplexVideo {
  url: string;
  video?: string;
  description?: string;
}

export default interface FinancialProfessional {
  appleActionLinks?: AppleActionLinks[];
  appleBusinessDescription?: string;
  appleBusinessId?: string;
  appleBusinessIdDqe?: string;
  appleCompanyId?: string;
  appleCompanyIdDqe?: string;
  appleCoverPhoto?: Image;
  appointmentOnly?: boolean;
  awards?: string[];
  bingWebsiteOverride?: string;
  disclosureLink?: string;
  facebookAbout?: string;
  facebookWebsiteOverride?: string;
  geomodifier?: string;
  googleEntityRelationship?: GoogleEntityRelationship;
  googleMyBusinessLabels?: string[];
  googlePlaceId?: string;
  googleShortName?: string;
  hobbies?: string[];
  holidayHoursConversationEnabled?: boolean;
  impressum?: string;
  interests?: string[];
  landingPageUrl?: string;
  linkedInUrl?: string;
  neighborhood?: string;
  nmlsNumber?: string;
  nudgeEnabled?: boolean;
  onlineServiceHours?: Hours;
  pinterestUrl?: string;
  primaryConversationContact?: any;
  reviewResponseConversationEnabled?: boolean;
  serviceAreaPlaces?: ServiceAreaPlaces[];
  slug?: string;
  teamName?: string;
  tikTokUrl?: string;
  what3WordsAddress?: string;
  yearsOfExperience?: number;
  yelpWebsiteOverride?: string;
  youTubeChannelUrl?: string;
  additionalHoursText?: string;
  address: Address;
  addressHidden?: boolean;
  alternatePhone?: any;
  androidAppUrl?: string;
  associations?: string[];
  brands?: string[];
  description?: string;
  hours?: Hours;
  logo?: ComplexImage;
  name: string;
  categories?: any;
  certifications?: string[];
  cityCoordinate?: Coordinate;
  closed?: boolean;
  c_agencyName?: string;
  c_color?: string;
  c_educationDetails?: C_educationDetails[];
  c_fonts?: C_fonts;
  c_fullBiography?: any;
  c_heroBanner?: Image;
  c_hobbiesAndInterests?: string[];
  c_insuranceProducts?: C_insuranceProducts[];
  c_jobTitle?: string[];
  c_languagesSpoken?: string[];
  c_licensedStates?: C_licensedStates[];
  c_locationsProfessionals?: EntityReference[];
  c_officeHours?: Hours;
  c_photoGallery?: Image[];
  c_preferredName?: string;
  c_professionalSecondaryAddress?: EntityReference[];
  c_professionalsInsuranceProducts?: EntityReference[];
  c_shortBio?: any;
  c_teamDescription?: any;
  c_teamName?: string;
  c_teamMembers?: EntityReference[];
  c_template?: C_template;
  firstPartyReviewPage?: any;
  reviewGenerationUrl?: any;
  defaultReviewInviteTemplate?: any;
  displayCoordinate?: Coordinate;
  dropoffCoordinate?: Coordinate;
  emails?: string[];
  facebookOverrideCity?: string;
  facebookCoverPhoto?: Image;
  facebookCallToAction?: FacebookCallToAction;
  facebookDescriptor?: string;
  facebookLinkedAccount?: any;
  facebookName?: string;
  facebookPageUrl?: string;
  facebookParentPageId?: string;
  facebookProfilePhoto?: Image;
  facebookStoreId?: string;
  facebookVanityUrl?: string;
  fax?: any;
  featuredMessage?: FeaturedMessage;
  photoGallery?: ComplexImage[];
  geocodedCoordinate?: Coordinate;
  gmbLinkedAccount?: any;
  googleAccountId?: string;
  googleAttributes?: any;
  googleCoverPhoto?: Image;
  googleProfilePhoto?: Image;
  googleWebsiteOverride?: string;
  headshot?: Image;
  instagramHandle?: string;
  iosAppUrl?: string;
  isoRegionCode?: string;
  keywords?: string[];
  languages?: string[];
  localPhone?: any;
  mainPhone?: any;
  menuUrl?: MenuUrl;
  mobilePhone?: any;
  orderUrl?: OrderUrl;
  paymentOptions?: PaymentOptions[];
  pickupCoordinate?: Coordinate;
  products?: string[];
  reservationUrl?: ReservationUrl;
  routableCoordinate?: Coordinate;
  services?: string[];
  specialities?: string[];
  id: string;
  timezone?: any;
  tollFreePhone?: any;
  ttyPhone?: any;
  twitterHandle?: string;
  walkableCoordinate?: Coordinate;
  websiteUrl?: WebsiteUrl;
  yextDisplayCoordinate?: Coordinate;
  yextDropoffCoordinate?: Coordinate;
  yextPickupCoordinate?: Coordinate;
  yextRoutableCoordinate?: Coordinate;
  yextWalkableCoordinate?: Coordinate;
  videos?: ComplexVideo[];
}
