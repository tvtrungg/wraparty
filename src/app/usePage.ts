import { CarouselRef } from "antd/es/carousel";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "usehooks-ts";

const usePage = () => {
  const sliderRef = useRef<CarouselRef>(null);
  const [scrollValue, setScrollValue] = useState(0);
  const debounceScroll = useDebounce(scrollValue, 200);
  const [currentPage, setCurrentPage] = useState(0);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.ctrlKey) {
      event.preventDefault();
      return;
    }

    if (
      (scrollValue >= 0 && event.deltaY >= 0) ||
      (scrollValue <= 0 && event.deltaY <= 0)
    ) {
      setScrollValue((prev) => prev + event.deltaY);
    } else {
      setScrollValue(event.deltaY);
    }
  };

  useEffect(() => {
    //delay scroll event
    if (debounceScroll > 0) {
      sliderRef.current?.next();
    } else {
      sliderRef.current?.prev();
    }
  }, [debounceScroll]);

  const beforeChange = (_: number, next: number) => {
    setCurrentPage(next);
  };

  return { currentPage, sliderRef, handleWheel, beforeChange };
};

export default usePage;
