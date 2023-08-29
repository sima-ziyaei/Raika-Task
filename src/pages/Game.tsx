import { useParams } from "react-router-dom";
import { gameLists } from "../App";
import Button from "../components/Button";

const Game = () => {
    const {id} = useParams();
    const game = gameLists.find((el)=> el.id === +(id));
    const src = game.mainImage ?? game.image;

    return(<div className="flex justify-around">
    <img src={src} className="w-[430px] h-fit mt-[-5%]" />

    <div className="relative flex flex-col items-center">
        <img src="/assets/images/logo.svg" className="w-[460px] h-fit absolute mx-auto left-0 right-0 -top-20 " />
        <h1 className="text-7xl leading-[7rem] "> {game.title} </h1>
        <p className="text-white opacity-40 text-2xl mb-12 mt-12">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
        <div className="flex gap-10 justify-center mb-7 ">
            <Button className="text-[#070E1C] !py-6 !px-16 items-baseline gap-4 text-2xl ">
                <img src="/assets/icons/play.svg" />
                <p>شروع بازی</p>
            </Button>
            <Button className="text-purple !px-24 !py-6 bg-none !bg-transparent text-2xl border-2 border-solid border-purple items-baseline gap-4 ">
                <p> خرید بازی </p>
            </Button>
        </div>
        <img className="w-[130px]" src="/assets/icons/Platforms.svg" />

    </div>
</div>)
}

export default Game;