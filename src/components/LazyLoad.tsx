import { ComponentProps, ElementType, Suspense } from "react";
import Loader from "./common/Loader";

type LazyLoadProps<T extends ElementType> = {
  component: ElementType;
} & ComponentProps<T>;

const LazyLoad = <T extends ElementType>({
  component: Component,
  ...props
}: LazyLoadProps<T>) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyLoad;
