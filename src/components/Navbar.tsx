import Logo from "@/assets/logo.png"; // Assuming you have a logo image
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useUserStore from "@/store/userStore";

export default function Navbar() {
  const { user } = useUserStore();

  return (
    <nav className="flex items-center justify-between mb-5">
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">
                <img src={Logo}  alt="" className="w-40 h-24 bg-contain" />
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center space-x-8">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-8">
            {user.role && user?.role !== "Admin" && (
              <NavigationMenuItem>
                <NavigationMenuLink
                  href={`${
                    user.role === "Stundent"
                      ? "/student"
                      : user.role === "Teacher"
                      ? "/teacher"
                      : "/"
                  }`}
                  className="text-lg font-medium text-purple-heart-600 hover:text-purple-heart-800"
                >
                  Dashboard
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
            {user.role === "Stundent" && (<NavigationMenuItem>
              <NavigationMenuLink
                href="/student/our-courses"
                className="text-lg font-medium text-purple-heart-600 hover:text-purple-heart-800"
              >
                Courses
              </NavigationMenuLink>
            </NavigationMenuItem>)}

            {user?.role === "Stundent" && (<NavigationMenuItem>
              <NavigationMenuLink
                href="/student/course-request-form"
                className="text-lg font-medium text-purple-heart-600 hover:text-purple-heart-800"
              >
                Request
              </NavigationMenuLink>
            </NavigationMenuItem>)}
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            {!user.role && (
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/login"
                  className="px-6 py-2 text-lg font-medium 
                text-purple-heart-600 border border-purple-heart-600 rounded-full
                  hover:text-white-lilac-50 hover:bg-purple-heart-800"
                >
                  Let's do it
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
            {user.role && (<NavigationMenuItem>
              <NavigationMenuLink href={`${user?.role === "Stundent"? "/student/profile" : user?.role === "Teacher"? "/teacher/profile" : "/login"}`}>
                <Avatar className="w-10">
                  <AvatarImage
                    src="https://i.pravatar.cc/150?img=3"
                    alt="Student Avatar"
                  />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
              </NavigationMenuLink>
            </NavigationMenuItem>)}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
