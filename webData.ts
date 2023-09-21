import bannerChild from "./assets/bannerChild.jpg";
import bannerDiamond from "./assets/bannerDiamond.jpg";
import bannerShip from "./assets/bannerShip.jpg";
import investment from "./assets/inve.jpeg";
import comodity from "./assets/comodity.jpg";
import tradeFinance from "./assets/trade.jpg";
import productFinance from "./assets/product-finance.jpg";
import investmentIcon from "./assets/landmark.svg";
import comodityIcon from "./assets/coins.svg";
import tradeIcon from "./assets/candlestick-chart.svg";
import offshoreIcon from "./assets/badge-cent.svg";
import aljaber from "./assets/aljaber.webp";
import bankWinter from "./assets/bankWinter.webp";
import jkStructure from "./assets/JkStructue.webp";
import silla from "./assets/silla.webp";
import afreximbank from "./assets/afreximbank.webp";
import amanah from "./assets/amanah.webp";
import olme from "./assets/Olme.webp";
import twitter from "./assets/twitter.svg";
import linkedin from "./assets/linkedin.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import trading from "./assets/trading.webp";
import engineering from "./assets/engineering.jpg";
import invest from "./assets/investment.jpg";
import marketing from "./assets/marketing.jpg";
import commodityService from "./assets/commodity_s.png";
import tradeService from "./assets/trade_finance.jpg";
import equipmentService from "./assets/equipment.jpg";
import investmentService from "./assets/investment.png";
import ecoboost from "./assets/ecoboost.jpg";
import gold from "./assets/gold.jpg";
import precious from "./assets/precious.jpg";
import diesel from "./assets/diesel.jpg";
import gasoline from "./assets/gasoline.jpg";
import jet from "./assets/jet.jpg";
import maize from "./assets/maize.jpg";
import cashew from "./assets/cashews.webp";
import soyabeans from "./assets/soyabeans.jpg";
import palmOil from "./assets/palm_oil.jpg";
import whoWeAre from "./assets/who_we_are.png";
import coreValues from "./assets/core_values.png";
import expertise from "./assets/expertise.png";
import vision from "./assets/vision.jpg";

export const webData = {
  name: "Ayzer Group International",
  studioName: "Ayzer Group Int. Studio",
  description: "A Brokerage Company",
  newsURL:
    "https://newsapi.org/v2/everything?apiKey=328ae62b831449e89d62f917a4a817e3&q=finance%20OR%20investment%20OR%20trade&language=en&sortBy=publishedAt&pageSize=5",
  header: {
    logo: "",
    navbarLinks: [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Services", link: "/services" },
      { name: "Products/Offers", link: "/products" },
      { name: "Partners", link: "/#partners" },
      { name: "Contact", link: "/#contact" },
    ],
  },
  footer: {
    logo: "",
    info: [
      { item: "+233 (0) 54 985 3041", icon: "" },
      { item: "sanialhassan853@gmail.com", icon: "" },
    ],
    socials: [
      { name: "twitter", img: twitter },
      { name: "instagram", img: instagram },
      { name: "facebook", img: facebook },
      { name: "linkedin", img: linkedin },
    ],
  },
  product_screen: {
    id: "products",
    products: [
      {
        id: "product_0",
        img: palmOil,
        name: "PALM OIL",
        desc: "Palm oil, our first product, is a versatile and widely used vegetable oil generated from oil palm plants. It is used in a variety of industries, including food, personal care goods, and biofuels. Our dedication to quality and sustainability ensures that our palm oil fulfils the highest standards while meeting a wide range of market demands.",
      },
      {
        id: "product_4",
        img: diesel,
        name: "DIESEL",
        desc: "Our diesel supply adheres to strict requirements, including EN 590 regulations, and is flexible enough to meet fluctuating sulphur levels and quality, assuring compliance with regional specifications.",
      },

      {
        id: "product_5",
        img: gasoline,
        name: "GASOLINE",
        desc: "We are happy to provide high-quality gasoline, the UNLEADED type, that has been precisely formulated to satisfy international criteria while retaining an extremely competitive pricing structure.",
      },
      {
        id: "product_8",
        img: cashew,
        name: "CASHEW",
        desc: "We offer raw and processed cashew nuts in a variety of grades for cashew fans. We offer kernels in grades such as W320, W210, W180, and W24, as well as broken pieces (LWP, SWP, SLWP, and SSWP).",
      },
      {
        id: "product_7",
        img: maize,
        name: "MAIZE",
        desc: "Our comprehensive maize assortment includes Yellow, White, and Non-GMO kinds. These are sourced sustainably from local farmers across Africa, promoting rural agricultural development and preserving demanding quality standards for agricultural products, as part of our mission.",
      },
      {
        id: "product_3",
        img: precious,
        name: "PRECIOUS STONES",
        desc: "We provide a wide range of precious jewels in the gemstone category, including diamonds, sapphires, rubies, and emeralds. In addition, we offer a wide variety of semi-precious stones, including amethysts, topazes, peridots, citrines, aquamarines, and green tourmalines, in a variety of sizes and weights to suit your specific needs.",
      },

      {
        id: "product_2",
        img: gold,
        name: "GOLD",
        desc: "Our alternatives include refined and certified gold, as well as unrefined versions available in a range of purity levels to meet a variety of preferences and needs.",
      },
      {
        id: "product_9",
        img: soyabeans,
        name: "SOYABEANS",
        desc: "We are well-equipped to supply high-quality, nutrient-rich soybeans in large quantities, similar to our maize products. This ensures premium quality while also contributing to the development of rural agriculture in Africa.",
      },

      {
        id: "product_1",
        img: ecoboost,
        name: "ECOBOOST XBEE",
        desc: "EcoBoost, is a ground-breaking all-natural fuel additive designed to bring extraordinary improvements in engine performance while reducing fuel consumption and pollutants by up to 70%.",
      },

      {
        id: "product_6",
        img: jet,
        name: "JET FUEL",
        desc: "Jet fuel, commonly known as aviation turbine fuel, is intended specifically for aircraft powered by gas turbine engines. We can supply commonly used aircraft fuels, such as Jet A and Jet A-1, in large quantities, ensuring smooth operations in the aviation sector.",
      },
    ],
  },
  service_screen: {
    id: "services",
    services: [
      {
        img: commodityService,
        id: "service_1",
        service: "Commodity Trading",
        title:
          "Our dedication to supplying bespoke commodity solutions spans a wide range of categories at Ayzer Group International (AGI), answering the dynamic needs of clients worldwide with precision and dependability.",
        desc: "Our vast portfolio includes soft commodities such as palm oil, rice, sugar, and a wide variety of nuts and cereals. Our expertise extends to hard commodities, which include precious metals like gold and vital industrial resources such as iron ore, copper, wood, and rare minerals like cobalt and lithium. Furthermore, we work closely with refiners, state-owned oil companies, marketers, and distributors to ensure a steady supply of crude oil and its derivatives, which include diesel, petrol, jet fuel, kerosene, and a variety of other essential products. At AGI, our global reach and deep industry knowledge ensure that our clients receive top-notch service and solutions tailored to their specific commodity and energy resource requirements.",
      },
      {
        img: tradeService,
        id: "service_2",
        title:
          "Ayzer specializes in trade finance and works with a wide range of clients, including individuals and international enterprises, as well as SMEs, governments, and non-governmental organizations. ",
        service: "Trade Finance",
        desc: "We provide complete financial solutions that transform international trade, ensure smooth transactions, and contribute to economic progress in a variety of sectors and industries. Structured Trade Finance, Factoring, Letters of Credit, and Insurance Guarantees are among the trade finance services we offer. AGI also offer Performance Risk finance, which allows emerging market producers with a proven track record to obtain finance based on the value of their future production. Even in times of financial instability and market turbulence, this financing strategy provides steadiness. It has shown to be a stable source of capital, assisting businesses in emerging economies in their growth and sustainability.",
      },
      {
        img: equipmentService,
        id: "service_3",
        service: "Projects & Equipment Financing",
        title:
          "We handle a wide range of industries in our project finance portfolio, from energy to infrastructure and real estate. We excel at securing financing for our clients by leveraging a well-established global network of accredited sources such as hedge funds, venture capitalists, institutional investors, investment banks, money market funds, and securitized monetization.",
        desc: "We design our financial solutions specifically to our clients' needs by utilising a number of methodologies such as off-balance-sheet financing, long-term arrangements, and non-recourse funding, among others. Furthermore, we provide financial solutions to help businesses grow by allowing them to purchase equipment and machines. Our equipment finance operations are oriented at assisting in the acquisition of a wide range of machinery, from big plant equipment to lightweight machinery. This diverse range of financing options enables our clients to realise their projects more efficiently and effectively, while our dedication to flexibility ensures that their specific demands and circumstances are satisfied. We employ our knowledge and wide network to get the necessary resources for significant energy enterprises, critical infrastructure projects, or real estate development.",
      },
      {
        img: investmentService,
        id: "service_4",
        title:
          "As an investment advisory firm, Ayzer Group International is responsible for meticulously sifting through a diverse array of investment opportunities, assessing their associated risks, and then presenting only the most effective and viable investment solutions to our discerning local and international clients.",
        service: "Investment Advisory",
        desc: "Our comprehensive suite of advisory services includes a wide range of financial strategies, such as share acquisition and buyback operations, securities issuance (bonds and shares), strategic planning and development, and skilled risk management. These vital services are provided in partnership with our valued partners in significant financial hubs such as London and New York, where teams are intimately engaged in the complexities of major market operations.",
      },
    ],
  },
  about_screen: {
    desc_main:
      "AYZER GROUP INTERNATIONAL (AGI) is a privately held professional trading, finance and investment group of companies registered and operating in West Africa and Europe and association with Joint Venture (JV) Partners.",
    desc_sub:
      "We are experienced and skilled financial traders, and global buyers and suppliers of all types of commodities; agricultural, refined petroleum products, metals and precious stones among others. AGI and its JV Partners have over 18 years of combined experience and this gives our clients access to our large pool of expertise and practical market knowledge. AGI’s high sense of ethical conduct informs honesty and fair dealing with all clients and in all transactions. Our clients derive benefits from the company’s diverse portfolio and multifaceted strengths delivered by a team of professional and highly dedicated staff. AGI is headquartered in Accra, Ghana.”",
    subsidiaries: [
      {
        id: "who are we",
        imgUrl: whoWeAre,
        title: "Who We Are",
        desc: "At Ayzer Group International (AGI), we are more than just a brokerage firm; we are a team of experienced and skilled financial traders with a global reach. Our expertise spans a wide spectrum of commodities, including agriculture, refined petroleum products, metals, precious stones, and more. With headquarters in Accra, Ghana, we bring over a decade of combined experience to the table, ensuring that our clients receive the highest level of service and professionalism.",
      },
      {
        id: "our expertise",
        imgUrl: expertise,
        title: "Our Expertise",
        desc: "AGI's expertise is multifaceted, encompassing Trading, Engineering, Investment, and Marketing:",
      },
      {
        id: "core values",
        imgUrl: coreValues,
        title: "Our Core Values",
        desc: "Integrity, honesty, and fairness form the bedrock of our operations. We hold ourselves to the highest ethical standards, and these principles guide our conduct in every client interaction and transaction",
      },
      {
        id: "sub-1",
        title: "Expert in Trading",
        imgUrl: trading,
        desc: "With AGI, all your trade transactions are in expert hands. We leverage our extensive experience in international commodity trading to deliver high-value services to our clients.",
      },
      {
        id: "sub-2",
        title: "Expert in Engineering",
        imgUrl: engineering,
        desc: "Beyond financial success, we are committed to making a good environmental, social, and governance (ESG) effect. We invest in renewable energy sources such as solar, wind, biomass, and hydropower through innovative solutions and smart collaborations, encouraging clean and cheap power while lowering greenhouse gas emissions. We also advocate for environmentally sustainable farming practices that improve food security, water efficiency, and environmental sustainability.",
      },
      {
        id: "sub-4",
        title: "Expert in Marketing",
        imgUrl: marketing,
        desc: "We take pride in providing our partners and clients with personalized services. AGI assists in the global marketing of our group's offerings, ensuring that our commodities and financial services realise their maximum potential.",
      },
      {
        id: "sub-3",
        title: "Expert in Investment",
        imgUrl: invest,
        desc: "AGI provides a wide range of investment options in a variety of industries, including finance, marketable securities, commodity trading, and ESG impact. Our mission is to promote capital flows that support inclusive and long-term commodity value chains in Africa and beyond.",
      },
      {
        id: "our vision",
        imgUrl: vision,
        title: "Our Vision",
        desc: "To be a leader in the green economy and a catalyst for sustainable development, AGI is committed to making a positive impact on the world through responsible trading, innovative engineering solutions, strategic investments, and effective marketing strategies.",
      },
    ],
  },
  home_screen: {
    banners: [
      {
        banner: bannerDiamond,
        message:
          "Ayzer Group International. Your financial and trade heartbeat worldwide.",
      },
      {
        banner: bannerChild,
        message:
          "With our extensive distributor network and fast delivery, we can keep you on top of all your mineral needs.",
      },
      {
        banner: bannerShip,
        message:
          "We will bring you to the leading edge of lucrative trade thanks to our solid experience in the global trade arena.",
      },
    ],
    offer_section: {
      id: "offer",
      title: "What We offer",
      link: { title: "Our Services", link: "/services" },
      description:
        "AGI is your ideal partner for success in business. We offer first-class, proactive solutions that cater to the specific needs of all our clients. Whether you need to access new markets, manage risks, or optimize cash flow, we have the expertise and knowledge to help you achieve your set goals. Together, we can explore the best market and financial strategies for your unique business needs.",
      offers: [
        {
          id: "offer-01",
          imgUrl: comodity,
          icon: comodityIcon,
          title: "Commodity Trading",
          desc: "Ayzer Group specializes in commodity trading, operating both locally and internationally. Our diverse portfolio encompasses commodities such as palm oil, crude oil, refined petroleum products, precious stones, and various agricultural products. With a global reach and expertise in these sectors, we facilitate seamless transactions and contribute to the dynamic world of commodity markets.",
        },
        {
          id: "offer-02",
          icon: tradeIcon,
          imgUrl: tradeFinance,
          title: "Trade Finance",
          desc: "Our company specializes in trade finance, catering to a diverse clientele that includes Individuals, multinational corporations, SMEs, governments, and non-governmental organisations. We provide comprehensive financial solutions to facilitate international trade, ensuring smooth transactions and fostering economic growth for our clients across various sectors and industries.",
        },
        {
          id: "offer-03",
          imgUrl: investment,
          icon: investmentIcon,
          title: "Investment Advisory",
          desc: "We are dedicated to providing expert Investment Advisory services. With a team of seasoned professionals, Ayzer offer tailored investment strategies and solutions to individuals, corporations, and institutions. By leveraging our in-depth market knowledge and analysis, we help clients achieve their financial goals, navigate complex investment landscapes, and optimize their portfolios for long-term success.",
        },
        {
          id: "offer-04",
          icon: offshoreIcon,
          imgUrl: productFinance,
          title: "Project Finance",
          desc: "Ayzer Group International specializes in Project and Equipment Financing, supporting the growth of commercial, industrial, utility, and infrastructure projects. We help provide essential financial resources to both local and international development projects, ensuring their successful realization. With a focus on innovation and sustainability, we help clients contribute to the advancement of critical ventures that drive economic progress and improve communities worldwide.",
        },
      ],
    },
    about_section: {
      id: "about",
      banner: "",
      title: "About",
      link: { title: "Learn More", link: "/about" },
      description:
        "AYZER GROUP INTERNATIONAL is a privately held professional trading, finance and investment group of companies registered and operating in West Africa and Europe and association with Joint Venture (JV) Partners.",
    },
    contact_section: {
      title: "Contact us",
      id: "contact",
      latitude: 5.552033,
      longitude: -0.202388,
      lat: 5.552033938870394,
      long: -0.20238856417974202,
      name: "AYZER GROUP INTERNATIONAL",
      telephone: "+233 (0) 54 985 3041",
      email: "sanialhassan853@gmail.com",
      address: "No. 30, 2nd Street, Baiden Avenue, West Legon Accra, Ghana",
    },
    partner_section: {
      id: "partners",
      title: "Our Partners",
      subDesc: "Partnerships for Seamless Excellence",
      description:
        "We deliberately pick and maintain strategic alliances that provide us with the resources we need to provide the finest service possible to our clients, both local and international.",
      partners: [
        {
          name: "J K Structure",
          img: jkStructure,
          link: "https://www.jkstructure.com/",
        },
        {
          name: "Silla University",
          img: silla,
          link: "https://en.silla.ac.kr/en/",
        },
        {
          name: "Afreximbank",
          img: afreximbank,
          link: "https://www.afreximbank.com/",
        },
        {
          name: "Amanah Islamic Bank",
          img: amanah,
          link: "https://amanahbank.gov.ph/",
        },
        { name: "Olme", img: olme, link: "https://www.lme.com/" },
        { name: "Al Jaber", img: aljaber, link: "http://aljaber.com/" },
        {
          name: "Bank Winter",
          img: bankWinter,
          link: "https://www.bankwinter.com/en",
        },
      ],
    },
    why_agi_section: {
      id: "why",
      title: "WHY AGI SERVICES",
      banner: "",
      description:
        "At LGI, In order to fulfil the demands of our local and international clients, we offer a wide range of goods and services. We also harness our experience and international relationships to offer unparalleled execution. We respond to your service requests with innovative and swift approaches.",
      title2: "Get Started",
      link: { title: "REQUEST FOR SERVICES", link: "/request-form" },
    },
  },
};
