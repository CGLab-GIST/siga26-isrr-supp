const data =
{
    "imageBoxes": [
        {
            "title": "Results",
            "elements": [
                {
                    "title": "Baseline (equal-time)",
                    "version": "-",
                    "image": "images/lampWide_path_40sec.png"
                },
                {
                    "title": "Ours",
                    "version": "-",
                    "image": "images/lampWide_ours_40sec.png"
                },
                {
                    "title": "Baseline (equal-sample)",
                    "version": "-",
                    "image": "images/lampWide_pt_1298spp.png"
                },
                {
                    "title": "Reference",
                    "version": "-",
                    "image": "images/gt.png"
                }
            ]
        },
    ],
    "stats_short": [
        {
            "title": "Results",
            "labels": [
                "Baseline (equal-time)",
                "Ours",
                "Baseline (equal-sample)"],
            "series": [
                {
                    "label": "samples per pixel",
                    "data": [
                        "384",
                        "1298 (79% skipped)",
                        "1298"
                    ]
                },
                {
                    "label": "Time (min)",
                    "data": [
                        "0.682",
                        "0.683",
                        "2.286"
                    ]
                },
				{
                    "label": "MSE (×10⁻⁴)",
                    "data": [
                        "3.9119",
                        "0.3965",
                        "1.1682"
                    ]
                },
                {
                    "label": "Relative efficiency",
                    "data": [
                        "×1.0",
                        "×9.85",
                        "-"
                    ]
                }
            ]
        }
    ]
}