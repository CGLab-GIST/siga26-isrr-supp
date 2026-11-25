const data =
{
    "imageBoxes": [
        {
            "title": "Results",
            "elements": [
                {
                    "title": "Baseline (equal-time)",
                    "version": "-",
                    "image": "images/glass-of-water_path_640sec.png"
                },
                {
                    "title": "Ours",
                    "version": "-",
                    "image": "images/glass-of-water_ours_640sec.png"
                },
                {
                    "title": "Baseline (equal-sample)",
                    "version": "-",
                    "image": "images/glass-of-water_pt_10380spp.png"
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
                        "4704",
                        "10380 (73% skipped)",
                        "10380"
                    ]
                },
                {
                    "label": "Time (min)",
                    "data": [
                        "10.689",
                        "10.634",
                        "23.396"
                    ]
                },
				{
                    "label": "MSE (×10⁻⁴)",
                    "data": [
                        "3.7831",
                        "3.6439",
                        "1.7804"
                    ]
                },
                {
                    "label": "Relative efficiency",
                    "data": [
                        "×1.0",
                        "×1.04",
                        "-"
                    ]
                }
            ]
        }
    ]
}