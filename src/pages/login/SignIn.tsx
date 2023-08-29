import { useForm } from "react-hook-form";
import { z } from "zod";
import { signinSchema } from "../../utilities/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import './SignUp.css';

type SigninSchema = z.infer<typeof signinSchema>;

const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SigninSchema>({
    resolver: zodResolver(signinSchema),
    // defaultValues: {},
    mode: "onChange",
  });
  function handleSubmitForm(data: SigninSchema) {
    navigate("/");
    console.log(data);
    reset({
      username: "",
      password: "",
    });
  }
  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className=" flex items-center w-86 h-80 justify-around flex-col"
    >
      <div className="w-[500px] flex flex-col items-center ">


        <img className="mb-[30px]" src="/assets/icons/logo.svg" />
        <p className="mb-12 text-[63px] "> ورود به حساب </p>
        <div className="relative w-full">
          <input
            {...register("username")}
            className="w-full h-10 p-7 peer pl-14 mb-6 bg-transparent border-[1.5px] border-solid border-[#2f3341] focus:border-2 focus:border-white rounded-[22px]"
            placeholder=" نام کاربری "
          />
          <img className="absolute top-[18%] opacity-40 peer-focus:opacity-100 left-5" src="/assets/icons/user-2.svg" />
        </div>

        {errors.username && (
          <p className="text-orange-400 mb-6 text-xs w-full text-right pr-6 pt-1">
            {errors.username.message}
          </p>
        )}

        <div className="relative w-full">
          <input
            {...register("password")}
            type="password"
            className="w-full h-10 p-7 peer pl-14 mb-6 bg-transparent border-[1.5px] border-solid border-[#2f3341] focus:border-2 focus:border-white rounded-[22px]"
            placeholder=" کلمه عبور "
          />
          <img className="absolute opacity-40 peer-focus:opacity-100 top-[18%] left-5 " src="/assets/icons/lock.svg" />
        </div>

        {errors.password && (
          <p className="text-orange-400 mb-6 text-xs w-full text-right pr-6 pt-1">
            {errors.password.message}
          </p>
        )}

        <div className="flex justify-between mb-10 w-full">
          <a href="#" className="text-purple underline"> فراموشی رمز </a>
          <div className={` round flex items-center `}>
            <p className="text-purple"> به خاطر سپردن رمز عبور </p>
            <input type="checkbox" id="checkbox" className=" w-[15px] h-[15px]" />
            <label htmlFor="checkbox"></label>
          </div>
        </div>
        <button className="w-full rounded-full py-6 bg-[#9C50FB]">
          ورود به حساب
        </button>
        <p className="mt-6 text-[#979797] ">
          حسابی ندارید؟
          <a className="underline text-purple " href="/signup" > ثبت نام </a>
        </p>
      </div>
    </form>
  );
};

export default SignIn;