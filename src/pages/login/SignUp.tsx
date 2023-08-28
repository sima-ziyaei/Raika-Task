import { useForm } from "react-hook-form";
import { z } from "zod";
import { signupSchema } from "../../utilities/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

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
    // defaultValues: {},
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
          {...register("email")}
          className="w-80 h-10 rounded-md p-2"
        />
        {errors.email && (
          <p className="text-orange-400 text-xs w-80 text-right pr-2 pt-1">
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <label></label>
        <input
          type="password"
          {...register("password")}
          className="w-80 h-10 rounded-md p-2"
        />
        {errors.password && (
          <p className="text-orange-400 text-xs w-80 text-right pr-2 pt-1">
            {errors.password.message}
          </p>
        )}
      </div>
      <div>
        <label></label>
        <input
          type="password"
          {...register("confirmPassword")}
          className="w-80 h-10 rounded-md p-2"
        />
        {errors.confirmPassword && (
          <p className="text-orange-400 text-xs w-80 text-right pr-2 pt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <Button className="w-80 h-8 rounded-2xl bg-[#9C50FB]">
       <p> ساخت حساب جدید </p> 
      </Button>
    </form>
  );
};

export default SignUp;