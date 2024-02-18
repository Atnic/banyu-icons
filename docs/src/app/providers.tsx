"use client";

import * as React from "react";

// @ts-ignore
import {BanyuProvider} from "@banyu/react";
import {useRouter} from "next/navigation";

export interface ProvidersProps {
    children: React.ReactNode;
}

export function Providers({children}: ProvidersProps) {
    const router = useRouter();

    return (
        <BanyuProvider navigate={router.push}>
            {children}
        </BanyuProvider>
    );
}
