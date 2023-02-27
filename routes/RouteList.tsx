import {ReactNode} from "react";
import {Icon} from "@app/components/Icon";

export interface IRoute {
  path: string;
  name: string;
  isSidebar: boolean;
  isLanding?: boolean;
  icon?: ReactNode;
  children?: IRoute[];
}

const routes: IRoute[] = [
  {
    path: "/login",
    name: "Đăng nhập",
    isSidebar: false,
    isLanding: true,
  },
  {
    path: "/register",
    name: "Đăng nhập",
    isSidebar: false,
    isLanding: true,
  },
  {
    path: "/manager_permission",
    name: "Quản lý phân quyền",
    isSidebar: true,
    isLanding: false,
  },
  {
    path: "/detail_video",
    name: "Chi tiết bài đăng",
    isSidebar: true,
    isLanding: false,
  },
];

export default routes;
