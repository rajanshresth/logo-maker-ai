"use client";
import React, { PropsWithChildren } from "react";

const ClientProvider = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export default ClientProvider;
