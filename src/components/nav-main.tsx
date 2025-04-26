import { ChevronRight, LucideHome, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  }) {
  const {setOpen} = useSidebar();
  return (
    <SidebarGroup className="space-y-2">
      <SidebarMenu>
          <SidebarMenuItem onClick={() => setOpen(true)}>
              <SidebarMenuButton tooltip="Dashboard">
                <NavLink to="/admin" end className="flex gap-2">
                      <LucideHome className="size-4 text-purple-heart-600" />
                      Dashboard
                </NavLink>
              </SidebarMenuButton>
          </SidebarMenuItem>
      </SidebarMenu>

      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem onClick={()=>setOpen(true)}>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon className="text-purple-heart-600" />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <NavLink
                          to={subItem.url}
                          // end={subItem.url === "/admin"}
                        >
                          {({ isActive }: { isActive: boolean }) => (
                            <span
                              className={`w-full px-5 py-2.5 rounded-lg ${
                                isActive
                                  ? " text-purple-heart-600 font-bold"
                                  : " hover:text-purple-heart-600"
                              } `}
                            >
                              {subItem.title}
                            </span>
                          )}
                        </NavLink>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
