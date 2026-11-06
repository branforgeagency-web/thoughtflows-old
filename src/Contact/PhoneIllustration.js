import React from 'react';

// Shared glossy 3D telephone illustration (desktop overlay with trailing coiled
// cord + simplified mobile version) used by the "Need support?" style sections.
// Colored to match the site's navy / teal brand palette.
const PhoneIllustration = () => (
    <>
        <svg className="support-illustration-desktop" viewBox="0 0 1180 520" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
                <radialGradient id="supportLobeGrad" cx="32%" cy="28%" r="75%">
                    <stop offset="0%" stopColor="#8FE3E8" />
                    <stop offset="35%" stopColor="#15AEBB" />
                    <stop offset="100%" stopColor="#073766" />
                </radialGradient>
                <linearGradient id="supportBarGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2FC4B2" />
                    <stop offset="50%" stopColor="#0A848F" />
                    <stop offset="100%" stopColor="#052544" />
                </linearGradient>
                <radialGradient id="supportGrooveShade" cx="50%" cy="50%" r="50%">
                    <stop offset="78%" stopColor="#000000" stopOpacity="0" />
                    <stop offset="100%" stopColor="#042038" stopOpacity="0.4" />
                </radialGradient>
                <filter id="supportSoftShadow" x="-60%" y="-60%" width="220%" height="220%">
                    <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#052544" floodOpacity="0.35" />
                </filter>
                <radialGradient id="supportShine" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="supportCordGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#15AEBB" />
                    <stop offset="1" stopColor="#073766" />
                </linearGradient>
            </defs>

            <g opacity="0.95">
                <path d="M221.0,392.0 Q225.1,395.3 227.2,397.0 Q229.3,398.7 231.4,399.7 Q233.5,400.7 235.7,400.7 Q238.0,400.8 240.3,399.8 Q242.5,398.8 244.9,397.1 Q247.3,395.4 249.7,393.4 Q252.1,391.4 254.4,389.7 Q256.8,387.9 259.1,387.1 Q261.4,386.2 263.5,386.4 Q265.7,386.6 267.8,388.1 Q269.9,389.5 271.9,391.8 Q274.0,394.1 275.9,396.8 Q277.9,399.5 279.9,401.9 Q281.9,404.4 284.0,406.0 Q286.1,407.6 288.2,408.0 Q290.4,408.5 292.7,407.6 Q295.0,406.7 297.4,404.8 Q299.8,402.8 302.2,400.3 Q304.6,397.9 307.0,395.5 Q309.5,393.1 311.8,391.5 Q314.2,389.9 316.4,389.5 Q318.7,389.1 320.8,390.2 Q322.9,391.2 324.9,393.4 Q327.0,395.6 328.9,398.6 Q330.9,401.5 332.8,404.5 Q334.8,407.5 336.8,409.8 Q338.8,412.1 340.9,413.2 Q343.0,414.4 345.3,414.1 Q347.5,413.7 349.9,412.1 Q352.2,410.4 354.7,407.8 Q357.1,405.3 359.6,402.5 Q362.0,399.7 364.4,397.5 Q366.8,395.2 369.2,394.1 Q371.5,392.9 373.6,393.3 Q375.8,393.6 377.9,395.5 Q379.9,397.3 381.9,400.1 Q383.9,403.0 385.8,406.3 Q387.7,409.5 389.7,412.4 Q391.7,415.4 393.7,417.2 Q395.8,419.1 397.9,419.5 Q400.1,420.0 402.4,418.8 Q404.7,417.7 407.2,415.4 Q409.6,413.0 412.0,410.1 Q414.5,407.1 417.0,404.4 Q419.4,401.6 421.8,399.7 Q424.2,397.9 426.4,397.4 Q428.7,397.0 430.8,398.2 Q432.9,399.3 434.9,401.8 Q436.9,404.4 438.8,407.7 Q440.8,411.0 442.7,414.3 Q444.6,417.7 446.6,420.2 Q448.6,422.8 450.7,424.0 Q452.8,425.2 455.1,424.8 Q457.3,424.4 459.7,422.5 Q462.1,420.7 464.5,417.8 Q467.0,414.9 469.5,411.9 Q471.9,408.8 474.4,406.3 Q476.8,403.8 479.1,402.6 Q481.4,401.3 483.6,401.7 Q485.8,402.1 487.8,404.0 Q489.9,406.0 491.8,409.1 Q493.8,412.2 495.7,415.8 Q497.6,419.3 499.5,422.4 Q501.5,425.6 503.5,427.5 Q505.6,429.5 507.7,430.0 Q509.9,430.4 512.2,429.1 Q514.6,427.9 517.0,425.4 Q519.4,422.8 521.9,419.7 Q524.4,416.5 526.9,413.6 Q529.3,410.6 531.7,408.6 Q534.1,406.6 536.4,406.2 Q538.6,405.7 540.7,406.9 Q542.8,408.2 544.8,410.8 Q546.8,413.5 548.7,417.0 Q550.6,420.5 552.5,424.0 Q554.4,427.5 556.4,430.2 Q558.4,432.9 560.5,434.1 Q562.6,435.4 564.9,434.9 Q567.1,434.5 569.5,432.5 Q571.9,430.5 574.4,427.5 Q576.8,424.5 579.3,421.3 Q581.8,418.1 584.3,415.5 Q586.7,412.9 589.0,411.6 Q591.4,410.3 593.5,410.7 Q595.7,411.1 597.8,413.1 Q599.8,415.2 601.7,418.4 Q603.7,421.6 605.6,425.3 Q607.5,428.9 609.4,432.1 Q611.3,435.3 613.4,437.4 Q615.4,439.4 617.6,439.8 Q619.8,440.3 622.1,439.0 Q624.4,437.7 626.9,435.1 Q629.3,432.5 631.8,429.2 Q634.3,426.0 636.8,422.9 Q639.2,419.9 641.6,417.9 Q644.0,415.9 646.3,415.4 Q648.5,414.9 650.6,416.2 Q652.7,417.5 654.7,420.2 Q656.7,422.9 658.6,426.5 Q660.5,430.0 662.4,433.5 Q664.3,437.1 666.3,439.8 Q668.3,442.5 670.4,443.8 Q672.5,445.1 674.7,444.6 Q677.0,444.1 679.4,442.1 Q681.8,440.1 684.2,437.1 Q686.7,434.0 689.2,430.8 Q691.7,427.5 694.1,424.9 Q696.6,422.3 698.9,421.0 Q701.2,419.7 703.4,420.2 Q705.6,420.6 707.6,422.6 Q709.7,424.7 711.6,427.9 Q713.5,431.1 715.4,434.7 Q717.3,438.4 719.3,441.6 Q721.2,444.8 723.2,446.9 Q725.3,448.9 727.5,449.3 Q729.6,449.7 732.0,448.4 Q734.3,447.1 736.7,444.5 Q739.2,441.9 741.7,438.7 Q744.2,435.5 746.6,432.5 Q749.1,429.5 751.5,427.5 Q753.9,425.5 756.1,425.1 Q758.4,424.6 760.5,425.9 Q762.6,427.1 764.6,429.8 Q766.6,432.5 768.5,436.0 Q770.4,439.5 772.3,443.0 Q774.2,446.5 776.2,449.2 Q778.2,451.8 780.3,453.1 Q782.4,454.3 784.6,453.8 Q786.9,453.4 789.3,451.4 Q791.7,449.4 794.1,446.4 Q796.6,443.5 799.1,440.3 Q801.6,437.2 804.0,434.6 Q806.4,432.1 808.8,430.9 Q811.1,429.6 813.3,430.0 Q815.4,430.5 817.5,432.5 Q819.5,434.4 821.5,437.6 Q823.4,440.7 825.3,444.2 Q827.2,447.8 829.2,450.9 Q831.1,454.0 833.2,456.0 Q835.2,457.9 837.4,458.3 Q839.6,458.7 841.9,457.4 Q844.2,456.2 846.6,453.7 Q849.1,451.2 851.5,448.1 Q854.0,445.1 856.5,442.2 Q858.9,439.3 861.3,437.5 Q863.7,435.6 865.9,435.2 Q868.2,434.8 870.3,436.0 Q872.4,437.2 874.4,439.8 Q876.4,442.3 878.3,445.7 Q880.2,449.0 882.2,452.3 Q884.1,455.6 886.1,458.2 Q888.1,460.7 890.2,461.8 Q892.3,463.0 894.6,462.6 Q896.8,462.1 899.2,460.3 Q901.6,458.4 904.0,455.6 Q906.5,452.9 909.0,449.9 Q911.4,447.0 913.8,444.6 Q916.3,442.3 918.6,441.2 Q920.9,440.0 923.1,440.5 Q925.2,440.9 927.3,442.8 Q929.3,444.6 931.3,447.6 Q933.3,450.5 935.2,453.7 Q937.1,457.0 939.1,459.9 Q941.1,462.7 943.1,464.5 Q945.2,466.4 947.4,466.7 Q949.5,467.1 951.8,465.9 Q954.2,464.8 956.6,462.5 Q959.0,460.3 961.4,457.5 Q963.9,454.7 966.3,452.2 Q968.8,449.6 971.1,447.9 Q973.5,446.3 975.7,445.9 Q978.0,445.6 980.1,446.8 Q982.2,447.9 984.2,450.2 Q986.2,452.5 988.2,455.5 Q990.1,458.5 992.1,461.4 Q994.0,464.4 996.1,466.6 Q998.1,468.8 1000.2,469.8 Q1002.3,470.9 1004.6,470.5 Q1006.8,470.1 1009.2,468.5 Q1011.5,466.9 1014.0,464.5 Q1016.4,462.1 1018.8,459.7 Q1021.2,457.2 1023.6,455.2 Q1026.0,453.3 1028.3,452.4 Q1030.6,451.5 1032.8,452.0 Q1034.9,452.4 1037.0,454.0 Q1039.1,455.6 1041.1,458.1 Q1043.1,460.5 1045.1,463.2 Q1047.0,465.9 1049.1,468.2 Q1051.1,470.5 1053.2,471.9 Q1055.3,473.4 1057.5,473.6 Q1059.6,473.8 1061.9,472.9 Q1064.2,472.1 1066.6,470.3 Q1068.9,468.6 1071.3,466.6 Q1073.7,464.6 1076.1,462.9 Q1078.5,461.2 1080.7,460.2 Q1083.0,459.2 1085.3,459.3 Q1087.5,459.3 1089.6,460.3 Q1091.7,461.3 1093.8,463.0 Q1095.9,464.7 1097.9,466.3 L1100.0,468.0"
                    fill="none" stroke="url(#supportCordGrad)" strokeWidth="11" strokeLinecap="round" />
            </g>

            <g transform="translate(55,8) scale(0.84)" filter="url(#supportSoftShadow)">
                <rect x="108" y="128" width="58" height="208" rx="29" transform="rotate(14 137 232)" fill="url(#supportBarGrad)" />
                <rect x="116" y="136" width="14" height="192" rx="7" transform="rotate(14 123 232)" fill="#ffffff" opacity="0.18" />

                <circle cx="92" cy="92" r="88" fill="url(#supportLobeGrad)" />
                <circle cx="92" cy="92" r="88" fill="url(#supportGrooveShade)" />
                <circle cx="92" cy="92" r="60" fill="none" stroke="#000" strokeOpacity="0.10" strokeWidth="2.5" />
                <circle cx="92" cy="92" r="60" fill="none" stroke="#fff" strokeOpacity="0.22" strokeWidth="1.3" transform="translate(-1,-1)" />
                <circle cx="92" cy="92" r="44" fill="none" stroke="#000" strokeOpacity="0.10" strokeWidth="2.2" />
                <circle cx="92" cy="92" r="44" fill="none" stroke="#fff" strokeOpacity="0.2" strokeWidth="1.2" transform="translate(-1,-1)" />
                <circle cx="92" cy="92" r="29" fill="none" stroke="#000" strokeOpacity="0.10" strokeWidth="2" />
                <circle cx="92" cy="92" r="29" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="1.1" transform="translate(-1,-1)" />
                <circle cx="92" cy="92" r="15" fill="#073766" opacity="0.55" />
                <ellipse cx="60" cy="56" rx="34" ry="22" fill="url(#supportShine)" opacity="0.55" />

                <circle cx="198" cy="378" r="78" fill="url(#supportLobeGrad)" />
                <circle cx="198" cy="378" r="78" fill="url(#supportGrooveShade)" />
                <circle cx="198" cy="378" r="54" fill="none" stroke="#000" strokeOpacity="0.10" strokeWidth="2.2" />
                <circle cx="198" cy="378" r="54" fill="none" stroke="#fff" strokeOpacity="0.2" strokeWidth="1.2" transform="translate(-1,-1)" />
                <circle cx="198" cy="378" r="38" fill="none" stroke="#000" strokeOpacity="0.10" strokeWidth="2" />
                <circle cx="198" cy="378" r="38" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="1.1" transform="translate(-1,-1)" />
                <circle cx="198" cy="378" r="25" fill="none" stroke="#000" strokeOpacity="0.10" strokeWidth="1.8" />
                <circle cx="198" cy="378" r="25" fill="none" stroke="#fff" strokeOpacity="0.16" strokeWidth="1" />
                <circle cx="198" cy="378" r="13" fill="#073766" opacity="0.55" />
                <ellipse cx="170" cy="347" rx="28" ry="18" fill="url(#supportShine)" opacity="0.5" />

                <circle cx="137" cy="232" r="9" fill="#052544" />
                <circle cx="137" cy="232" r="9" fill="none" stroke="#000" strokeOpacity="0.2" strokeWidth="1" />
                <circle cx="135" cy="230" r="3" fill="#ffffff" opacity="0.4" />
            </g>
        </svg>

        <svg className="support-illustration-mobile" viewBox="0 0 300 460" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
                <radialGradient id="supportLobeGradM" cx="32%" cy="28%" r="75%">
                    <stop offset="0%" stopColor="#8FE3E8" />
                    <stop offset="35%" stopColor="#15AEBB" />
                    <stop offset="100%" stopColor="#073766" />
                </radialGradient>
                <linearGradient id="supportBarGradM" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2FC4B2" />
                    <stop offset="50%" stopColor="#0A848F" />
                    <stop offset="100%" stopColor="#052544" />
                </linearGradient>
            </defs>
            <rect x="108" y="128" width="58" height="208" rx="29" transform="rotate(14 137 232)" fill="url(#supportBarGradM)" />
            <circle cx="92" cy="92" r="88" fill="url(#supportLobeGradM)" />
            <circle cx="92" cy="92" r="60" fill="none" stroke="#000" strokeOpacity="0.1" strokeWidth="2.5" />
            <circle cx="92" cy="92" r="44" fill="none" stroke="#000" strokeOpacity="0.1" strokeWidth="2.2" />
            <circle cx="92" cy="92" r="29" fill="none" stroke="#000" strokeOpacity="0.1" strokeWidth="2" />
            <circle cx="198" cy="378" r="78" fill="url(#supportLobeGradM)" />
            <circle cx="198" cy="378" r="54" fill="none" stroke="#000" strokeOpacity="0.1" strokeWidth="2.2" />
            <circle cx="198" cy="378" r="38" fill="none" stroke="#000" strokeOpacity="0.1" strokeWidth="2" />
            <circle cx="198" cy="378" r="25" fill="none" stroke="#000" strokeOpacity="0.1" strokeWidth="1.8" />
        </svg>
    </>
);

export default PhoneIllustration;
