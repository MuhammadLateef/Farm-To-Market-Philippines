import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function LostPasswordPage() {
    return (
        <div className=" pt-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">

                    {/* Lost Password Form */}
                    <div className="bg-card p-8 sm:p-12 md:p-16 rounded-lg shadow-sm border border-border ">
                        {/* Description */}
                        <h1 className="md:text-4xl text-3xl  font-medium text-foreground mb-8">Lost password</h1>
                        <p className="text-muted-foreground text-sm mb-6">
                            Lost your password? Please enter your username or email address. You will receive a link to create a new
                            password via email.
                        </p>

                        <form className="space-y-6">
                            {/* Username/Email Field */}
                            <div className="space-y-2">
                                <label htmlFor="username" className="text-sm font-normal text-foreground">
                                    Username or email
                                </label>
                                <Input id="username" type="text" placeholder="" className="w-full" required />
                            </div>

                            {/* Reset Password Button */}
                            <Button
                                type="submit"
                                className="w-auto my-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
                            >
                                Reset password
                            </Button>
                        </form>

                        {/* Back to Login Link */}
                        <div className="mt-6">
                            <Link href="/my-account" className="text-green-600 hover:text-green-700 font-medium text-sm">
                                Back to login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
