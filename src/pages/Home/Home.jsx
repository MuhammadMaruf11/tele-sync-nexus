import Layout from "../Layout/Layout";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";

const Home = () => {
  const h1Title = "Welcome to";
  const textTheme = "API Banking";
  const bannerDescription = `API Banking is a revolutionary way to access and manage your financial information and transactions. Our robust API platform provides seamless integration with your bank accounts, allowing you to harness the power of modern technology for all your banking needs. With API Banking, you can securely retrieve account balances, track transactions, initiate payments, and much more, all through a user-friendly interface or by integrating our APIs into your own applications. Whether you're a developer looking to create innovative financial solutions or a consumer wanting to simplify your banking experience, API Banking has you covered. Our platform adheres to the highest security standards, ensuring that your financial data remains private and protected. Your trust and security are our top priorities. Explore the endless possibilities of API Banking and take control of your finances like never before. Join us on this journey of convenience, efficiency, and innovation in the world of banking.`;
  const buttons = (
    <div className="banner-btn">
      <Link to="/" className="cta-btn me-3">
        Get Started
      </Link>
      <Link to="/" className="contact-btn">
        Contact Us
      </Link>
    </div>
  );

  return (
    <Layout>
      <Banner
        h1Title={h1Title}
        textTheme={textTheme}
        bannerDescription={bannerDescription}
        buttons={buttons}
      />
    </Layout>
  );
};

export default Home;
