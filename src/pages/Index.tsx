import { Avatar } from "../components/Avatar";
import { CardsTrabalhos } from "../components/CardsTrabalhos";
import { ThemeController } from "../components/TheameContoller";



export function Home() {

    return (
        <>
            <section className="flex justify-center items-center  gap-4 flex-col mt-4 " >
                <Avatar />
                <div className="text-2xl"> @sandra_siano </div>
                <ThemeController />
                <h1 className="text-4xl" >Analista de Sistemas</h1>
            </section>

            <section className="flex justify-center items-center  gap-5 flex-col mt-4 " >
                <div className="text-5xl gap-4 flex-col mt-4" color="#ffffff" >Um pouco dos projetos realizados </div>
                
                <CardsTrabalhos />
               
            </section>


        </>

        

    )

}