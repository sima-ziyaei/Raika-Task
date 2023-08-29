import React from "react";
import Button from "../../components/Button";
import { gameLists } from "../../App";
import { useNavigate } from "react-router-dom";

const Home = React.forwardRef<HTMLDivElement, any>((_props, ref)=>{ 

     const handleClick = () => {
        if (ref != null && typeof ref !== 'function') {
           ref.current.scrollIntoView({ behavior: 'smooth' });;
          }
    };
    const navigate = useNavigate();

    return <section className="">
        <div className="flex justify-around">
            <img src="/assets/images/Left Image.png" className="w-[640px] h-fit mt-[-5%]" />

            <div className="relative flex flex-col items-end">
                <img src="/assets/images/logo.svg" className="w-[460px] h-fit absolute mx-auto left-0 right-[-35%] -top-20 " />
                <h1 className="text-7xl leading-[7rem] text-end w-4/5 ">به کلاود گیمینگ  <span className="text-purple"> الکترو</span> خوش آمدید </h1>
                <p className="text-white opacity-40 text-2xl text-end mb-12 mt-12 w-3/5 ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                <div className="flex gap-10 justify-end">
                    <Button className="text-[#070E1C] !py-6 !px-16 items-baseline gap-4 text-2xl ">
                        <img src="/assets/icons/play.svg" />
                        <p>شروع بازی</p>
                    </Button>
                    <Button className="text-purple !px-7 !py-6 bg-none !bg-transparent text-2xl border-2 border-solid border-purple items-baseline gap-4 ">
                        <p>کلاود گیمینگ چیست؟</p>
                    </Button>
                </div>

            </div>
        </div>


        <div onClick={handleClick} className="flex flex-col items-center mt-24 cursor-pointer mb-40">
            <img src="/assets/icons/mouse.svg" />
            <p className="text-purple mt-5 text-xl"> اسکرول کنید </p>
        </div>

        <div ref={ref} className="flex flex-col">
            <h1 className="text-[70px] text-end mb-12"> لیست بازی ها </h1>
            <p className="opacity-40 text-end text-[26px] mb-12 w-3/5 self-end">  در اینجا بازی مورد نظر خود را انتخاب کنید و با کلیک کردن بر روی آن شروع به بازی کنید  </p>


            <div className="grid grid-cols-5 gap-[41px]">
                {gameLists.map((el) => {
                    return (
                        <img onClick={()=>navigate(`/games/${el.id}`)} className="w-[277px] h-[364px]" src={el.image} />
                    )
                })}
            </div>
        </div>
    </section>}) 
  


export default Home;