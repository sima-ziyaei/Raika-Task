import { useForm } from "react-hook-form";
import { z } from "zod";
import { signinSchema } from "../../utilities/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

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
      className="flex items-center w-86 h-80 justify-around flex-col"
    >
      <div>
        <label></label>
        <input
          {...register("username")}
          className="w-80 h-10 rounded-md p-2"
        />
        {errors.username && (
          <p className="text-orange-400 text-xs w-80 text-right pr-2 pt-1">
            {errors.username.message}
          </p>
        )}
      </div>
      <div>
        <label></label>
        <input
          {...register("password")}
          className="w-80 h-10 rounded-md p-2"
        />
        {errors.password && (
          <p className="text-orange-400 text-xs w-80 text-right pr-2 pt-1">
            {errors.password.message}
          </p>
        )}
      </div>
      <button className="w-80 h-8 rounded-2xl bg-[#9C50FB]">
        ورود به حساب
      </button>
    </form>
  );
};

export default SignIn;