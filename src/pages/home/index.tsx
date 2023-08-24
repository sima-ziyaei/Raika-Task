import Button from "../../components/Button";

const Home = ()=>{
return<section className="flex justify-between">

    <img src="/assets/images/Left Image.png" className="w-[485px] h-fit"/>

    <div className="relative w-[80%]">
        <img src="/assets/images/logo.svg" className="w-[460px] h-fit absolute mx-auto left-0 right-0 top-0 " />
        <h1 className="text-7xl leading-[7rem] text-end ">به کلاود گیمینگ  <span className="text-purple"> الکترو</span> خوش آمدید </h1>
        <p className="text-white opacity-40 text-2xl text-end mb-12">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
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
</section>
}

export default Home;