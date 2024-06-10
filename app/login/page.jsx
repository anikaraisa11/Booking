"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import "./login.css";
import GlobalButton from "@/components/Global/GlobalButton";
import verifyToken from "../../utils/VerifyToken";
import { useDispatch } from "react-redux";
import { setUser } from "@/lib/redux/features/auth/AuthSlice";
import { toast } from "sonner";
import { useLoginMutation } from "@/lib/redux/features/authintication/authinticationApi";
import { useRouter } from 'next/navigation'

function Login() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [addLoginData, { isLoading, isError, data: loginData }] =
    useLoginMutation();
    const router = useRouter()

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const userLoginData = {
        email: email,
        password,
      };
      const res = await addLoginData(userLoginData).unwrap();

      if(res?.status === true){
        const user = verifyToken(res?.token);
        dispatch(setUser({ user: user, token: res?.token }));
        toast.success(res?.message)
        setTimeout(() => {
          router.push('/', { scroll: false });
        }, 2000);

      }
    } catch (error) {
      if (error) {
        toast.error(error?.data?.message);
      }
    }
  };

  return (
    <div className="login">
      <div className="container mx-auto">
        <div className="flex h-[100vh] py-5 items-center justify-center">
          <div className="w-full bg-white rounded-lg p-5 sm:w-4/12">
            <form
              className="bg-transparent px-10 py-10"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="text-4xl py-5 font-bold animation">Login</h3>
              <div className="input-with-placeholder mt-5">
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: true, maxLength: 20 })}
                  required={true}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-with-placeholder mt-5">
                <input
                  id="password"
                  type="password"
                  {...register("password", { required: true, maxLength: 20 })}
                  required={true}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="py-5 text-center">
                <GlobalButton type="submit" text="Login" />
              </div>
              <p className="text-end mt-3 mb-3">
                If you have no account please{" "}
                <b className="blue">
                  <Link href="/register">Register</Link>
                </b>
              </p>
              <ul className="flex justify-center gap-5">
                <li className="iconLI">
                  <Link className="socialIcon" href="">
                    <i
                      style={{ fontSize: "22px", color: "#008080" }}
                      className="fa-brands fa-google"
                    ></i>
                  </Link>
                </li>
                <li className="iconLI">
                  <Link className="socialIcon" href="">
                    <i
                      style={{ fontSize: "22px", color: "#008080" }}
                      className="fa-brands fa-facebook"
                    ></i>
                  </Link>
                </li>
                <li className="iconLI">
                  <Link className="socialIcon" href="">
                    <i
                      style={{ fontSize: "22px", color: "#008080" }}
                      className="fa-brands fa-twitter"
                    ></i>
                  </Link>
                </li>
                <li className="iconLI">
                  <Link className="socialIcon" href="">
                    <i
                      style={{ fontSize: "22px", color: "#008080" }}
                      className="fa-brands fa-linkedin"
                    ></i>
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
