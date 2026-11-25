const data =
{
    "imageBoxes": [
        {
            "title": "Results",
            "elements": [
                {
                    "title": "Baseline (equal-time)",
                    "version": "-",
                    "image": "images/coffeeWide_path_12sec.png"
                },
                {
                    "title": "Ours",
                    "version": "-",
                    "image": "images/coffeeWide_ours_10sec.png"
                },
                {
                    "title": "Baseline (equal-sample)",
                    "version": "-",
                    "image": "images/coffeeWide_path_472spp.png"
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
                        "144",
                        "472 (80% skipped)",
                        "472"
                    ]
                },
                {
                    "label": "Time (min)",
                    "data": [
                        "0.199",
                        "0.197",
                        "0.646"
                    ]
                },
				{
                    "label": "MSE (×10⁻⁴)",
                    "data": [
                        "2.6716",
                        "0.5888",
                        "0.8195"
                    ]
                },
                {
                    "label": "Relative efficiency",
                    "data": [
                        "×1.0",
                        "×4.59",
                        "-"
                    ]
                }
            ]
        }
    ]
}