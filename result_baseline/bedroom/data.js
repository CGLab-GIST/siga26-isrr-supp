const data =
{
    "imageBoxes": [
        {
            "title": "Results",
            "elements": [
                {
                    "title": "Baseline (equal-time)",
                    "version": "-",
                    "image": "images/bedroom_path_1280sec.png"
                },
                {
                    "title": "Ours",
                    "version": "-",
                    "image": "images/bedroom_ours_1280sec.png"
                },
                {
                    "title": "Baseline (equal-sample)",
                    "version": "-",
                    "image": "images/bedroom_pt_10262spp.png"
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
                        "3472",
                        "10262 (65% skipped)",
                        "10262"
                    ]
                },
                {
                    "label": "Time (min)",
                    "data": [
                        "21.306",
                        "21.401",
                        "63.358"
                    ]
                },
				{
                    "label": "MSE (×10⁻³)",
                    "data": [
                        "2.8306",
                        "0.6765",
                        "0.9870"
                    ]
                },
                {
                    "label": "Relative efficiency",
                    "data": [
                        "×1.0",
                        "×4.17",
                        "-"
                    ]
                }
            ]
        }
    ]
}