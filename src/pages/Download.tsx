import Button from "../components/Button";

const Download = () => {
    return <div className="flex justify-around">
        <div className="relative flex flex-col items-center">
            <img src="/assets/images/logo.svg" className="w-[460px] h-fit absolute mx-auto left-0 right-0 -top-20 " />
            <h1 className="text-7xl leading-[7rem] text-center "> دانلود نرم افزار </h1>
            <p className="text-white opacity-40 text-2xl text-center mb-12 mt-12 w-3/5"> جهت استفاده بهتر و راحت‌تر از کلاود گیمینگ الکترو
                میتوانید از نرم‌افزار آن استفاده کنید! </p>
            <div className="flex gap-10 justify-center">
                <Button className="text-[#070E1C] !py-6 !px-16 items-baseline gap-4 text-2xl ">
                    <p> دانلود نسخه اندروید </p>
                    <img src="/assets/icons/android.svg" />
                </Button>
                <Button className="text-white !py-6 !px-16 items-baseline gap-4 text-2xl ">
                    <p> دانلود نسخه ویندوز </p>
                    <img src="/assets/icons/windows.svg" />
                </Button>
            </div>

        </div>
        <img className=" w-[40%] mt-[-10%]" src="/assets/images/download.png" />
    </div>
}

export default Download;