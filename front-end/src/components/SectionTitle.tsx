import React from "react";
import { Container } from "@/components/Container";
import Form from "./Form";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
  form?: boolean;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <>
      <div className="navbar-spacer"></div>

      <Container
        className={`flex w-full flex-col mt-4 ${props.align === "left" ? "" : "items-center justify-center text-center"
          }`}>
        {props.preTitle && (
          <div className="text-sm font-bold tracking-wider text-slate-700 dark:text-indigo-300 uppercase">
            {props.preTitle}
          </div>
        )}

        {props.title && (
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            {props.title}
          </h2>
        )}

        {props.children && (
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            {props.children}
          </p>
        )}

        {props.form && (
          <Form />
        )
        }
      </Container>
    </>
  );
}

