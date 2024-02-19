import Icon from "@components/@core/icon";
import loadable from "@loadable/component";
import {getIcons} from "@utils/getIcons";
import React from "react";

import IconsPageLoading from "./loading";

export default function IconSetViewer() {
    const IconSet = loadable.lib(() => getIcons());
    const cultivation: string[] = [
        "JalaAge",
        "JalaBiomass",
        "JalaChemical",
        "JalaConfirmStep",
        "JalaDeseaseInput",
        "JalaFarm",
        "JalaFarmStep",
        "JalaFeed",
        "JalaFeedCumulative",
        "JalaFeedingTray",
        "JalaHarvest",
        "JalaMortality",
        "JalaOperational",
        "JalaPh",
        "JalaPond",
        "JalaSampling",
        "JalaShrimp",
        "JalaShrimpPrice",
        "JalaParameter",
        "JalaPondStep",
        "JalaRfid",
        "JalaJala",
        "JalaSpecies",
        "JalaSrEstimation",
        "JalaTransparency",
        "JalaTreatmentInput",
        "JalaWaterColor",
        "JalaWaterQualityInput",
        "JalaProductCategories",
        "JalaPaddleWheel",
        "JalaCultivationReport",
        "JalaSimulation",
        "JalaPricePrediction",
        "JalaNews",
        "JalaHotNews",
        "JalaPlankton",
        "JalaDesease",
        "JalaDo",
        "JalaSalinity",
        "JalaTemperature",
        "JalaJali",
        "JalaMicrobiology",
        "JalaStockAdjust",
        "JalaFinance",
        "JalaTreatmentBottle",
        "JalaWaterQuality"
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
