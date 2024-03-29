import Icon from "@components/@core/icon";
import loadable from "@loadable/component";
import {getIcons} from "@utils/getIcons";
import React from "react";

import IconsPageLoading from "./loading";

export default function IconSetViewer() {
    const IconSet = loadable.lib(() => getIcons());
    const cultivation: string[] = [
        "JalaIdn",
        "JalaUsa",
        "JalaEsp",
        "JalaVie"
    ];
    return (
        <>
            <IconSet fallback={<IconsPageLoading />}>
                {({ default: icons }) => (
                    <div className="icons">
                        {Object.keys(icons).map((name) => (
                            cultivation.includes(name) &&
                            <Icon key={name} icon={icons[name]} name={name} />
                        ))}
                    </div>
                )}
            </IconSet>
        </>
    );
}
