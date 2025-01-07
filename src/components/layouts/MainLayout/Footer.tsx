import Image from "next/image";

import Logo from "@public/images/logo.png";
import Link from "next/link";
type TypeofFooterOrganization = {
  label: string;
  href: string;
};

const footerOrganization: Array<TypeofFooterOrganization> = [
  {
    label: "Sản phẩm",
    href: "/product",
  },
  {
    label: "Chuyên môn",
    href: "/product",
  },
  {
    label: "Chi tiết",
    href: "/product",
  },
  {
    label: "Liên hệ",
    href: "/product",
  },
];
const fuseOrganization: Array<TypeofFooterOrganization> = [
  {
    label: "Sản phẩm",
    href: "/product",
  },
  {
    label: "Tài khoản",
    href: "/product",
  },
  {
    label: "Đội ngũ phát triển",
    href: "/product",
  },
  {
    label: "Đăng kí sử dụng",
    href: "/product",
  },
];

function Footer() {
  return (
    <footer className="relative min-h-32 w-full bg-[#f8f8f8] py-14">
      <div className="container px-5 sm:px-8 md:px-10 lg:px-[60px]">
        <div className="grid grid-cols-1 justify-between gap-6 border-b-2 border-black pb-12 lg:grid-cols-3 lg:gap-0">
          <div className="col-span-2 pr-0 lg:pr-52">
            <Link href="/">
              <Image src={Logo} alt=" logo" width={200} height={200}></Image>
              <h2 className="mb-3 mt-2 font-title text-base text-[#777777]">
                future unified study environment
              </h2>
            </Link>
            <p className="text-base text-[#777777]">
              Là nơi để mọi người có thể trao đổi học tập trực tiếp thông qua
              mạng internet một cách dễ dàng và hiệu quả
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:gap-0">
            <div>
              <h2 className="mb-5 text-lg font-bold  lg:mb-4 lg:text-base">
                Tổ chức
              </h2>
              <ul className="flex flex-col gap-2 text-base text-[#777777] lg:gap-4">
                {footerOrganization.map(
                  (footer: TypeofFooterOrganization, index: number) => (
                    <li
                      key={index}
                      className="w-fit underline-offset-1 hover:underline"
                    >
                      <Link href={footer.href}>
                        <p className="font-medium">{footer.label}</p>
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h2 className="mb-5 text-lg font-bold  lg:mb-4 lg:text-base">
                Fuse
              </h2>
              <ul className="flex flex-col gap-2 text-base text-[#777777] lg:gap-4">
                {fuseOrganization.map(
                  (footer: TypeofFooterOrganization, index: number) => (
                    <li
                      key={index}
                      className="w-fit underline-offset-1 hover:underline"
                    >
                      <Link href={footer.href}>
                        <p className="font-medium">{footer.label}</p>
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex h-[54px] w-full flex-col justify-between gap-2 py-3 text-[#777777] lg:flex-row lg:items-end lg:gap-0">
          <p className="text-sm font-medium">Privacy PolicyImpressum</p>
          <p className="font-title text-sm font-medium">
            © 2024 Future unified study environment All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
