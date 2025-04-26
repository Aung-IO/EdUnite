import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import { Link } from "react-router-dom";
  import { Fragment } from "react/jsx-runtime";
  
  type BreadcrumbProps = {
    currentPageTitle: string;
    links: { name: string; path: string }[];
  };
  const AdminBreadCrumb = ({
    currentPageTitle,
    links,
  }: Partial<BreadcrumbProps>) => {
    return (
      <div className="px-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink className=" hover:text-purple-heart-600">
                <Link to="/admin">Admin</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
  
            {currentPageTitle && (
              <BreadcrumbSeparator className="hidden md:block" />
            )}
            {links?.map((link, index) => (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-gray-500">
                    <Link className="hover:text-purple-heart-600" to={link.path}> {link.name} </Link>
                  </BreadcrumbPage>
                  <BreadcrumbSeparator className="hidden md:block" />
                </BreadcrumbItem>
              </Fragment>
            ))}
  
            <BreadcrumbItem>
              <BreadcrumbPage className="text-purple-heart-600 font-semibold"> {currentPageTitle} </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    );
  };
  
  export default AdminBreadCrumb;
  