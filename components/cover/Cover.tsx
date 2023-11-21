import { FC } from "react";
import ProfilePic from "./ProfilePic";
import ProfileName from "./ProfileName";
import Button from "../ui/Button";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";

interface CoverProps {}

const Cover: FC<CoverProps> = () => {
  return (
    <div className="flex rounded-full max-h-[20vh] w-full md:w-3/4 mt-5 bg-[url('/cover.jpg')] bg-no-repeat bg-cover">
      <div className="flex justify-center rounded-full w-full overflow-hidden px-10 py-5 bg-blur backdrop-filter backdrop-blur-md w-full gap-2 md:gap-10">
        <ProfilePic />
        <div className="flex md:flex-1 flex-col justify-center gap-4">
          <div className="flex justify-between items-center gap-5 ">
            <ProfileName />
            <Link
              className="hidden md:block"
              target="_blank"
              href="https://linkedin.com/in/hassankamran98/"
            >
              <Button variant="primary" sizes={"small"}>
                <LinkedinIcon />
                <span className="hidden md:block">Follow me on LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
