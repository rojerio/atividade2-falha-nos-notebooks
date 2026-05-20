import Banner from "../components/Banner"
import Banner01 from "../../public/Banner-01.jpg"
import Banner02 from "../../public/Banner.jpg"
import Banner03 from "../../public/banho-tosa.jpg"

export default function Home() {
    return(
        <>
        <Banner 
        foto1 = {Banner01} 
        descricao1 = "foto 1" 
        foto2 = {Banner02} 
        descricao2 = "foto 2"
        foto3= {Banner03} 
        descricao3 = "foto 3"
        />
        </>
    )
}