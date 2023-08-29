import { useForm } from "react-hook-form";
import { z } from "zod";
import { signupSchema } from "../../utilities/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

type SignUpSchema = z.infer<typeof signupSchema>;

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });
  function handleSubmitForm(data: SignUpSchema) {
    navigate("/");
    reset({
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    });
  }
  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex items-center w-86 h-80 justify-around flex-col"
    >
      <div className="w-[500px] flex flex-col items-center ">


        <img className="mb-[30px]" src="/assets/icons/logo.svg" />
        <p className="mb-12 text-[63px] "> ساخت حساب </p>
        <div className="w-full flex gap-6">
          <div className="relative w-[45%]">
            <input
              {...register("username")}
              className="w-full h-10 p-7 peer pl-14 mb-6 bg-transparent border-[1.5px] border-solid border-[#2f3341] focus:border-2 focus:border-white rounded-[22px]"
              placeholder=" نام کاربری "
            />
            <img className="absolute top-[18%] opacity-40 peer-focus:opacity-100 left-5" src="/assets/icons/user-2.svg" />

          </div>

          {errors.username && (
            <p className="text-orange-400 text-xs w-80 text-right pr-2 pt-1">
              {errors.username.message}
            </p>
          )}

          <div className="relative w-[55%]">

            <input
              {...register("email")}
              className="w-full h-10 p-7 peer pl-14 mb-6 bg-transparent border-[1.5px] border-solid border-[#2f3341] focus:border-2 focus:border-white rounded-[22px]"
              placeholder="  ایمیل "
            />
            <img className="absolute opacity-40 peer-focus:opacity-100 top-[18%] left-5 " src="/assets/icons/envelop.svg" />

          </div>
          {errors.email && (
            <p className="text-orange-400 text-xs w-80 text-right pr-2 pt-1">
              {errors.email.message}
            </p>
          )}

        </div>

        <div className="w-full flex gap-6">

          <div className="relative w-1/2" >
            <input
              type="password"
              {...register("password")}
              className="w-full h-10 p-7 peer pl-14 mb-6 bg-transparent border-[1.5px] border-solid border-[#2f3341] focus:border-2 focus:border-white rounded-[22px]"
              placeholder=" کلمه عبور "
            />
            <img className="absolute opacity-40 peer-focus:opacity-100 top-[18%] left-5 " src="/assets/icons/lock.svg" />
          </div>
          {errors.password && (
            <p className="text-orange-400 text-xs w-80 text-right pr-2 pt-1">
              {errors.password.message}
            </p>
          )}

          <div className="relative w-1/2">

            <input
              type="password"
              {...register("confirmPassword")}
              className="w-full h-10 p-7 peer pl-14 mb-6 bg-transparent border-[1.5px] border-solid border-[#2f3341] focus:border-2 focus:border-white rounded-[22px]"
              placeholder=" تکرار کلمه عبور "
            />
            <img className="absolute opacity-40 peer-focus:opacity-100 top-[18%] left-5 " src="/assets/icons/lock.svg" />
          </div>
          {errors.confirmPassword && (
            <p className="text-orange-400 text-xs w-80 text-right pr-2 pt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>


        <button className="w-full rounded-full py-6 bg-[#9C50FB]">
          ساخت حساب جدید
        </button>
        <p className="mt-6 text-[#979797] ">
          حساب کاربری دارید؟
          <a className="underline text-purple " href="/signin" > ورود </a>
        </p>
      </div>
    </form>
  );
};

export default SignUp;