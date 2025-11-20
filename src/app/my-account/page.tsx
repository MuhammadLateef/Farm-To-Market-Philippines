import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function MyAccountPage() {
  return (
    <div className="h-auto pt-12 px-4">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="mb-12">

          {/* Login Form */}
          <div className="bg-card md:p-12 sm:p-8 p-6 rounded-lg shadow-sm border border-border">
          <h1 className="md:text-4xl text-3xl  font-medium text-foreground mb-8">My Account</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Login</h2>

            <form className="space-y-6">
              {/* Username/Email Field */}
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-normal text-foreground my-2">
                  Username or email address <span className="text-red-600">*</span>
                </label>
                <Input id="username" type="text" placeholder="" className="w-full" required />
              </div>

              {/* Password Field */}
              <div className="space-y-2 sm:my-3 my-1">
                <label htmlFor="password" className="text-sm font-normal text-foreground">
                  Password <span className="text-red-600 ">*</span>
                </label>
                <Input id="password" type="password" placeholder="" className="w-full" required />
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center space-x-2 my-4">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm ml-2 font-normal text-foreground cursor-pointer">
                  Remember me
                </label>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className=" bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
              >
                Log in
              </Button>
            </form>

            {/* Lost Password Link */}
            <div className="mt-6">
              <Link
                href="/my-account/lost-password"
                className="text-green-600 hover:text-green-700 font-medium text-sm"
              >
                Lost your password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
