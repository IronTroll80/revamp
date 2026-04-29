import Brands from "../components/brands";
import Header from "../components/header";
import Hero from "../components/hero";
import LatestProducts from "../components/latestProducts";
import MemberDeals from "../components/memberDeals";
import MemberHome from "../components/memberHome";
import SellingPoints from "../components/sellingPoints";
import Top from "../components/top";
import Topselling from "../components/topSelling";

export default function Login() {
    return (
        <>
        <Top />
        <Header/>
        <Hero/>
        <SellingPoints/>
        <Topselling />
        <LatestProducts />
        <Brands/>
        <MemberHome />
        <MemberDeals />
        </>
    )
}