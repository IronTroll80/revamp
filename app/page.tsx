import Brands from "./components/brands";
import ConfirmAge from "./components/confirmAge";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import HomeBlog from "./components/homeBlog";
import HomeEvent from "./components/homeEvent";
import LatestProducts from "./components/latestProducts";
import MemberDeals from "./components/memberDeals";
import MemberHome from "./components/memberHome";
import SellingPoints from "./components/sellingPoints";
import Top from "./components/top";
import Topselling from "./components/topSelling";

export default function Page() {
    return (
        <>
        <ConfirmAge/>
        <Top />
        <Header/>
        <Hero/>
        <SellingPoints/>
        <Topselling />
        <LatestProducts />
        <Brands/>
        <MemberHome />
        <MemberDeals />
        <HomeEvent showTitle = {true}/>
        <HomeBlog />
        <Footer/>
        </>
    )
}