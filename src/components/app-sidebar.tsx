import * as React from "react";
import { Library, SproutIcon, BookOpenText, Users } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import Image from "@/assets/logo_sidebar.png"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  
} from "@/components/ui/sidebar";


// This is sample data.
const data = {
  logo: {
    title: "Edunite",
    url: "/admin",
    icon: SproutIcon,
  },
  navMain: [
    {
      title: "Courses",
      url: "#",
      icon: Library,
      isActive: true,
      items: [
        {
          title: "All Courses",
          url: "/admin/courses",
        },
        {
          title: "Started Courses",
          url: "/admin/started-courses",
        },
      ],
    },
    {
      title: "Requests",
      url: "#",
      icon: BookOpenText,
      isActive: false,
      items: [
        {
          title: "Student Requests",
          url: "/admin/request/student-requests",
        },
        {
          title: "Course Requests",
          url: "/admin/request/create-course-requests",
        },
        // {
        //   title: "Teacher Requests",
        //   url: "/admin/request/teacher-requests",
        // },
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: Users,
      isActive: false,
      items: [
        {
          title: "All Users",
          url: "/admin/users",
        },
        {
          title: "Teachers",
          url: "/admin/teachers",
        },
        {
          title: "Students",
          url: "/admin/students",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>

        <img
          src={Image}
          alt="EdUnite Logo"
          className="h-14 w-auto flex items-center  justify-center mx-auto mb-4"
        />


      </SidebarHeader>
      <SidebarContent >
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
