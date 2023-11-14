import { FC } from "react";

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = () => {
  return (
    <div className="text-3xl flex flex-col font-bold text-highlight">
      Hassan Kamran
      <div className="text-sm font-thin flex justify-between items-center">
        @hassankamran98
      </div>
    </div>
  );
};

export default ProfileName;
