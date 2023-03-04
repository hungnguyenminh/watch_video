import React from "react";
import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";
import Main from "./Main/Main";
import LoadingLayout from "./LoadingLayout";
import HashtagSection from "@app/components/Layout/HashtagSection/HashtagSection";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): JSX.Element {
  return (
    <div className="wrapper">
      <Main>
        <Navbar />
        <div className="detail-layout">
          <HashtagSection />
          <LoadingLayout>
            <Content>{children}</Content>
          </LoadingLayout>
        </div>
      </Main>
    </div>
  );
}
