import styles from './address.module.css'
import AddLocation from "../components/addLocation";
import Footer from "../components/footer";
import Header from "../components/header";
import Top from "../components/top";
import AddressContent from '../components/addressContent';

export default function Address (){
    return (
        <>
        <Top />
        <Header />
        <AddressContent />
        <Footer />
        </>
    )
}