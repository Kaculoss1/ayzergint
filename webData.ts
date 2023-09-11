import bannerChild from "./assets/bannerChild.jpg";
import bannerDiamond from "./assets/bannerDiamond.jpg";
import bannerShip from "./assets/bannerShip.jpg";
import investment from "./assets/inve.jpeg";
import comodity from "./assets/comodity.jpg";
import tradeFinance from "./assets/trade.jpg";
import productFinance from "./assets/product-finance.jpg";
import offshore from "./assets/offshore.jpg";
import investmentIcon from "./assets/landmark.svg";
import comodityIcon from "./assets/coins.svg";
import tradeIcon from "./assets/candlestick-chart.svg";
import productIcon from "./assets/wallet.svg";
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
      { name: "About", link: "/#about" },
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
  home_screen: {
    banners: [
      {
        banner: bannerDiamond,
        message:
          "Ayzer Group International. Your international trade and finance heartbeat.",
      },
      {
        banner: bannerShip,
        message:
          "With credible experience in the global trade terrain, we will take you to the forefront of profitable trade.",
      },
      {
        banner: bannerChild,
        message:
          "Stay on top of all your minerals requirements with our far-reaching distributor network and prompt delivery.",
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
          desc: "Our trading wing leverages expertise in local and international sourcing to supply various tradable commodities including crude oil, refined petroleum products, precious metals, precious stones and agricultural produce.",
        },
        {
          id: "offer-02",
          icon: tradeIcon,
          imgUrl: tradeFinance,
          title: "Trade Finance",
          desc: "We offer real-world trade finance solutions with an array of trade funding options to individuals, multinationals, SMEs, governments and NGOs across the world. With our innovative financing solutions, the hurdles of international trade are greatly reduced.",
        },
        {
          id: "offer-03",
          imgUrl: investment,
          icon: investmentIcon,
          title: "Investment Advisory",
          desc: "As the client always remains the final decision maker on their investments, AGI offers advisory on local and international investment opportunities through our team of experts positioned in major markets and industries. The level of insight and market knowledge we expose clients to reduces the amount of risk and level of uncertainties faced in making sound investment decisions.",
        },
        {
          id: "offer-04",
          icon: productIcon,
          imgUrl: productFinance,
          title: "Product Finance",
          desc: "We are able to provide project financing for key local and international development projects. Our commitment to financethe development of commercial, industrial, utility and infrastructure projects affords our partners and our creative ways to meet client needs. Help clients in making Environmental, Social and Governance (ESG) impact through sustainable engineering (a Lumière Engineering area of expertise) and financial structuring with a social consciousness.",
        },
        {
          id: "offer-05",
          icon: offshoreIcon,
          imgUrl: offshore,
          title: "Offshore Investments",
          desc: "LGI offers Offshore investment strategies that cover various asset classes and instruments. The benefits we bring to our clients include tax efficiency, asset protection, and diversification.",
        },
      ],
    },
    about_section: {
      id: "about",
      banner: "",
      title: "About",
      link: { title: "Learn More", link: "/about" },
      description:
        "AYZER GROUP INTERNATIONAL is a privately held professional trading, finance and investment group of companies registered and operating in East Africa, West Africa, Europe, Mauritius and the United Arab Emirates and association with Joint Venture (JV) Partners.",
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
        "We carefully select and continually grow our strategic partnerships which afford us the necessary resource required to offer our clients, local and international, the best service that meets their needs.",
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
        "At LGI, we provide diverse products and services to meet the needs of our local and international clients. We also leverage our expertise and global partnerships to deliver excellence in our execution. We respond to your service requests with solutions-oriented and timely approaches.",
      title2: "Get Started",
      link: { title: "REQUEST FOR SERVICES", link: "/request-form" },
    },
  },
};
