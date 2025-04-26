import Image from "@/assets/sign-up.svg"
import AuthTabs from "./AuthTabs"
export default function SignUpForm() {

  return (
    <section className="grid w-lvw h-lvh grid-cols-2 bg-white-lilac-50">
       <div className="flex items-center justify-center ml-10 p-10">
        <img src={Image} alt="" />
      </div>
      <div className="flex w-full h-full items-center justify-center">
        <AuthTabs/>
      </div>
    </section>
  )
}
