import Image from "next/image";
import { FC } from "react";

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = () => {
  return (
    <div>
      <Image
        alt="Hassan Kamran"
        src="/profilePic.png"
        height={120}
        width={120}
        className="object-cover rounded-full shadow-md"
      />
    </div>
  );
};

export default ProfilePic;
